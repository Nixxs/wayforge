// Runs after the client and SSR builds (see the "build" script): renders the homepage
// to HTML and writes it into dist/index.html so crawlers that don't run JavaScript see content.
import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");
const SSR_DIST = path.join(ROOT, "dist-ssr");
const PLACEHOLDER = '<div id="root"></div>';

const { render } = await import(pathToFileURL(path.join(SSR_DIST, "entry-server.js")).href);

const indexPath = path.join(DIST, "index.html");
const template = await readFile(indexPath, "utf8");

if (!template.includes(PLACEHOLDER)) {
    throw new Error(`prerender: ${PLACEHOLDER} not found in dist/index.html`);
}

const appHtml = await render("/");

if (!appHtml.includes("<h1")) {
    throw new Error("prerender: rendered homepage has no <h1>; refusing to write a broken page");
}

await writeFile(indexPath, template.replace(PLACEHOLDER, `<div id="root">${appHtml}</div>`));
await rm(SSR_DIST, { recursive: true, force: true });

console.log(`prerender: wrote / (${(appHtml.length / 1024).toFixed(1)} KB of HTML) into dist/index.html`);
