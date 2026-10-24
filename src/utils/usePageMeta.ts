import { useEffect } from "react";
import { SITE_URL, type PageMeta } from "../pageMeta";

function setAttr(selector: string, attr: string, value: string) {
    document.head.querySelector(selector)?.setAttribute(attr, value);
}

// Keeps <head> in step with client-side navigation. Crawlers get the same values from the
// prerendered HTML, so this only matters for visitors moving between pages in the browser.
export function usePageMeta(meta: PageMeta) {
    useEffect(() => {
        const url = `${SITE_URL}${meta.path}`;
        document.title = meta.title;
        setAttr('meta[name="description"]', "content", meta.description);
        setAttr('link[rel="canonical"]', "href", url);
        setAttr('meta[property="og:url"]', "content", url);
        setAttr('meta[property="og:title"]', "content", meta.ogTitle);
        setAttr('meta[property="og:description"]', "content", meta.ogDescription);
    }, [meta]);
}
