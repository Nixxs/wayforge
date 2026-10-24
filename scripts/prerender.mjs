// Runs after the client and SSR builds (see the "build" script): renders every page in
// prerenderPages to HTML, sets that page's <head> values, and writes it to dist/<path>/index.html
// so crawlers that don't run JavaScript see real content.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");
const SSR_DIST = path.join(ROOT, "dist-ssr");
const PLACEHOLDER = '<div id="root"></div>';

const { render, prerenderPages, SITE_URL } = await import(pathToFileURL(path.join(SSR_DIST, "entry-server.js")).href);

const template = await readFile(path.join(DIST, "index.html"), "utf8");

if (!template.includes(PLACEHOLDER)) {
    throw new Error(`prerender: ${PLACEHOLDER} not found in dist/index.html`);
}

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escapeText = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;");

// Replace exactly one match, so a template change can't silently leave a stale tag behind
function replaceOnce(html, pattern, replacement, label) {
    const matches = html.match(new RegExp(pattern.source, "g")) ?? [];
    if (matches.length !== 1) {
        throw new Error(`prerender: expected one ${label} in index.html, found ${matches.length}`);
    }
    return html.replace(pattern, () => replacement);
}

function applyHead(html, meta) {
    const url = `${SITE_URL}${meta.path}`;
    html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${escapeText(meta.title)}</title>`, "<title>");
    html = replaceOnce(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeAttr(meta.description)}" />`, "meta description");
    html = replaceOnce(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${escapeAttr(url)}" />`, "canonical");
    html = replaceOnce(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${escapeAttr(url)}" />`, "og:url");
    html = replaceOnce(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttr(meta.ogTitle)}" />`, "og:title");
    html = replaceOnce(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeAttr(meta.ogDescription)}" />`, "og:description");
    html = replaceOnce(
        html,
        /<link rel="preload" as="image"[^>]*\/>/,
        `<link rel="preload" as="image" href="${escapeAttr(meta.preload.href)}" imagesrcset="${escapeAttr(meta.preload.srcSet)}" imagesizes="${escapeAttr(meta.preload.sizes)}" fetchpriority="high" />`,
        "hero image preload",
    );
    if (meta.jsonLd) {
        // "<" escaped so page text can never close the script tag early
        const json = JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c");
        html = html.replace("</head>", () => `    <script type="application/ld+json">${json}</script>\n  </head>`);
    }
    return html;
}

for (const meta of prerenderPages) {
    const appHtml = await render(meta.path);

    if (!appHtml.includes("<h1")) {
        throw new Error(`prerender: ${meta.path} rendered without an <h1>; refusing to write a broken page`);
    }

    // data-prerendered tells main.tsx which path this HTML belongs to, so it only hydrates a match
    const html = applyHead(template, meta).replace(
        PLACEHOLDER,
        () => `<div id="root" data-prerendered="${escapeAttr(meta.path)}">${appHtml}</div>`,
    );

    const outDir = path.join(DIST, ...meta.path.split("/").filter(Boolean));
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "index.html"), html);
    console.log(`prerender: wrote ${meta.path} (${(appHtml.length / 1024).toFixed(1)} KB of HTML)`);
}

await rm(SSR_DIST, { recursive: true, force: true });
