import { imageManifest } from "../imageManifest";

export type ImageName = keyof typeof imageManifest;

// Variants live in public/img/ — regenerate with `npm run images`
export function imageUrl(name: ImageName, width?: number) {
    const { widths } = imageManifest[name];
    const chosen = width ? widths.find((w) => w >= width) ?? widths[widths.length - 1] : widths[widths.length - 1];
    return `/img/${name}-${chosen}.webp`;
}

export function imageSources(name: ImageName) {
    const { widths, width, height } = imageManifest[name];
    return {
        src: imageUrl(name),
        srcSet: widths.map((w) => `/img/${name}-${w}.webp ${w}w`).join(", "),
        width,
        height,
    };
}
