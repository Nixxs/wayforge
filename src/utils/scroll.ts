export const NAVBAR_SCROLL_OFFSET = 88;

// #root is the scroll container (see index.css), not the window
export function getScrollContainer() {
    return document.getElementById("root") ?? document.documentElement;
}

export function getScrollTop(container: HTMLElement) {
    return container === document.documentElement ? window.scrollY : container.scrollTop;
}

export function getViewportHeight(container: HTMLElement) {
    return container === document.documentElement ? window.innerHeight : container.clientHeight;
}

export function getElementTop(element: HTMLElement, container: HTMLElement) {
    if (container === document.documentElement) {
        return window.scrollY + element.getBoundingClientRect().top;
    }

    const containerTop = container.getBoundingClientRect().top;
    return container.scrollTop + element.getBoundingClientRect().top - containerTop;
}

export function scrollToId(id: string) {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    const container = getScrollContainer();
    const elementTop = getElementTop(element, container);

    container.scrollTo({
        top: Math.max(elementTop - NAVBAR_SCROLL_OFFSET, 0),
        behavior: "smooth",
    });
}
