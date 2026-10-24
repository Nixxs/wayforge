import { vehicles, vehiclePath, type Vehicle } from "./data/vehicles";
import { imageSources, type ImageName } from "./utils/images";

export const SITE_URL = "https://wayforge.com.au";

// Per-page <head> values. scripts/prerender.mjs writes these into each page's static HTML;
// usePageMeta keeps them in sync when someone navigates within the site.
export interface PageMeta {
    path: string;
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    preload: { href: string; srcSet: string; sizes: string };
    jsonLd?: object;
}

function preloadFor(name: ImageName, sizes: string) {
    const { src, srcSet } = imageSources(name);
    return { href: src, srcSet, sizes };
}

export const homeMeta: PageMeta = {
    path: "/",
    title: "Wayforge | Troopy 4WD Camper Hire in Perth, WA",
    description:
        "Hire a self-contained 70 Series LandCruiser Troopy camper from Perth, Western Australia. Roof conversion, premium fitout, 200Ah power and pull-out kitchen. Book Reynolds or Nolan on Camplify.",
    ogTitle: "Wayforge | Troopy 4WD Camper Hire in Perth, WA",
    ogDescription: "Self-contained 70 Series LandCruiser Troopy campers for exploring Western Australia. Book on Camplify.",
    preload: preloadFor("outback-hero-aerial-dark-2", "100vw"),
};

// Must match the sizes on the vehicle page hero image
export const VEHICLE_HERO_SIZES = "(min-width: 900px) 50vw, 100vw";

export function vehicleMeta(vehicle: Vehicle): PageMeta {
    const path = vehiclePath(vehicle);
    return {
        path,
        title: vehicle.meta.title,
        description: vehicle.meta.description,
        ogTitle: vehicle.meta.title,
        ogDescription: vehicle.meta.description,
        preload: preloadFor(vehicle.image, VEHICLE_HERO_SIZES),
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: vehicle.headline, item: `${SITE_URL}${path}` },
            ],
        },
    };
}

export const prerenderPages: PageMeta[] = [homeMeta, ...vehicles.map(vehicleMeta)];
