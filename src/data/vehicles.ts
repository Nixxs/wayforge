import BoltIcon from "@mui/icons-material/Bolt";
import KitchenIcon from "@mui/icons-material/Kitchen";
import PeopleIcon from "@mui/icons-material/People";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import type { SvgIconComponent } from "@mui/icons-material";
import type { ImageName } from "../utils/images";

// Single source for both vehicles: the homepage cards, the roof conversion dialog and the
// vehicle pages all read from here. Searchers don't know the names Reynolds/Nolan, so SEO-facing
// text (headline, slug, meta) leads with LandCruiser / Troopy / Troopcarrier and the roof brand.
export interface Vehicle {
    slug: string;
    name: string;
    nickname: string;
    shortName: string;
    headline: string;
    badge: string;
    subtitle: string;
    image: ImageName;
    gallery: readonly ImageName[];
    description: string;
    intro: string;
    features: readonly { Icon: SvgIconComponent; label: string }[];
    specs: readonly (readonly [string, string])[];
    roof: {
        brand: string;
        url: string;
        urlLabel: string;
        points: readonly string[];
    };
    bookingUrl: string;
    meta: { title: string; description: string };
}

export const vehicles: readonly Vehicle[] = [
    {
        slug: "landcruiser-troopy-alu-cab",
        name: "Reynolds",
        nickname: "Family Cruiser",
        shortName: "Alu-Cab Troopy",
        headline: "Toyota LandCruiser Troopy with Alu-Cab Roof Conversion",
        badge: "MANUAL",
        subtitle: "Ideal for small families",
        image: "reynolds-1",
        gallery: ["reynolds-1", "reynolds-2", "reynolds-3", "reynolds-4", "reynolds-5", "reynolds-6", "reynolds-7", "reynolds-8", "reynolds-9", "reynolds-10", "reynolds-11", "reynolds-12", "reynolds-13", "reynolds-14", "reynolds-15"],
        description:
            "A 2017 VDJ78 Troopy built for off-grid family travel. Roof conversion above, premium fitout below - fully self-contained with power, water, and kitchen. Just drive and stay.",
        intro:
            "Reynolds is a 2017 VDJ78 Troopy, purpose-built for off-grid family travel. The Alu-Cab Hercules roof conversion creates a full-height living space with a permanent bed above, while a premium interior fitout below provides seating, storage, and a convertible sleeping area for a child. With integrated power, water, and shade systems, it’s a complete touring setup — no towing, no setup, just drive and stay. Perfect for a family getaway.",
        features: [
            { Icon: PeopleIcon, label: "Sleeps 2 Adults + 1 Child" },
            { Icon: KitchenIcon, label: "Pull-out Kitchen + Cookware" },
            { Icon: BoltIcon, label: "200Ah Battery" },
            { Icon: WaterDropIcon, label: "55L Water Tank" },
            { Icon: WorkspacePremiumIcon, label: "Premium Interior Fitout" },
            { Icon: LocalGasStationIcon, label: "180L Fuel Capacity" },
        ],
        specs: [
            ["Platform", "2017 VDJ78 LandCruiser Troopcarrier"],
            ["Engine", "4.5L V8 Turbo Diesel (1VD-FTV)"],
            ["Transmission", "Manual"],
            ["Fuel", "Dual tanks (180L total)"],
            ["Seating", "2 front seats - 1 rear seat (suitable for adult or child)"],
            ["Roof Conversion", "Alu-Cab Hercules (full-height)"],
            ["Sleeping", "Queen bed (roof) + child bed (convertible interior, ~140cm)"],
            ["Power", "200Ah lithium battery"],
            ["Fridge", "85L fridge/freezer"],
            ["Water", "55L tank + filtered drinking tap"],
            ["Hot Water", "Heat exchanger system (external outlet)"],
            ["External Access", "Utility panel for water/shower connection"],
            ["Kitchen", "Full pull-out kitchen drawer with integrated stove + complete cookware/utensils"],
            ["Interior", "Premium fitout with couch/bed, desk, lighting, and storage"],
            ["Climate", "Factory air conditioning (cab)"],
            ["Awning", "270° awning + shower awning"],
            ["Outdoor", "Camp chairs & table included"],
            ["Recovery", "Maxtrax recovery boards"],
            ["Accessories", "Maxtrax table (external mount)"],
            ["Comms", "CB radio"],
            ["Audio", "Bluetooth audio (BYO navigation)"],
        ],
        roof: {
            brand: "Alu-Cab Hercules",
            url: "https://www.alu-cab.com/products/alu-cab-hercules-roof-conversion/",
            urlLabel: "alu-cab.com",
            points: [
                "Alu-Cab Hercules — South Africa's most refined roof conversion",
                "Aircraft-grade aluminium construction, corrosion resistant",
                "Full-height interior living space when the roof is raised",
                "Integrated sleeping platform rises with the roof lid",
                "Folds flat in minutes, sealed against dust and water when closed",
                "Integrated self-supporting gas strut system",
            ],
        },
        bookingUrl: "https://www.camplify.com.au/rv/151421",
        meta: {
            title: "LandCruiser Troopy Hire with Alu-Cab Roof, Perth WA | Wayforge",
            description:
                "Hire a 2017 VDJ78 Toyota LandCruiser Troopcarrier with an Alu-Cab Hercules roof conversion from Perth. Sleeps 2 adults + 1 child, Odyssey fitout, 200Ah lithium, 55L water.",
        },
    },
    {
        slug: "landcruiser-troopy-headspace",
        name: "Nolan",
        nickname: "Adventure Rig",
        shortName: "Headspace Troopy",
        headline: "Toyota LandCruiser Troopy with Headspace Campers Roof Conversion",
        badge: "MANUAL",
        subtitle: "Ultimate 2-person touring",
        image: "nolan-hero",
        gallery: ["nolan-hero", "nolan-2", "nolan-3", "nolan-4", "nolan-5", "nolan-6", "nolan-7", "nolan-8", "nolan-9", "nolan-10", "nolan-11", "nolan-12", "nolan-13", "nolan-14", "nolan-15", "nolan-16", "nolan-17", "nolan-18"],
        description:
            "A 2014 VDJ78 Troopy built for two people to travel further and stay longer. Roof conversion above, premium fitout below — with more space, storage, and extended range.",
        intro:
            "Nolan is a 2014 VDJ78 Troopy, purpose-built for two people to travel further and stay longer. The Headspace Campers roof conversion creates a full-height living space with a permanent bed above, while a premium interior fitout below provides a larger lounge area, expanded storage, and a full-length sleeping setup. With increased water capacity, dual fuel tanks, and integrated off-grid systems, it’s a complete touring setup.",
        features: [
            { Icon: PeopleIcon, label: "Sleeps 2 (Full-Length Bed)" },
            { Icon: KitchenIcon, label: "Pull-out Kitchen + Cookware" },
            { Icon: LocalGasStationIcon, label: "180L Fuel Capacity" },
            { Icon: BoltIcon, label: "200Ah Battery" },
            { Icon: WaterDropIcon, label: "90L Water Tank" },
            { Icon: WorkspacePremiumIcon, label: "Premium Fitout + Storage" },
        ],
        specs: [
            ["Platform", "2014 VDJ78 LandCruiser Troopcarrier (pre-DPF)"],
            ["Engine", "4.5L V8 Turbo Diesel (1VD-FTV)"],
            ["Transmission", "Manual"],
            ["Fuel", "Dual tanks (180L total)"],
            ["Seating", "2 front seats"],
            ["Roof Conversion", "Headspace Campers premium conversion"],
            ["Sleeping", "Queen bed (roof) + full-length interior bed"],
            ["Power", "200Ah lithium battery"],
            ["Fridge", "85L fridge/freezer"],
            ["Water", "90L tank + filtered drinking tap"],
            ["External Access", "Utility panel for water/shower connection"],
            ["Kitchen", "Full pull-out kitchen drawer with integrated stove + complete cookware/utensils"],
            ["Interior", "Premium fitout with larger couch/bed, desk, lighting, and expanded storage"],
            ["Climate", "Factory air conditioning (cab)"],
            ["Awning", "270° awning"],
            ["Outdoor", "Camp chairs & table included"],
            ["Recovery", "Maxtrax recovery boards"],
            ["Accessories", "Maxtrax table (external mount)"],
            ["Comms", "CB radio"],
            ["Audio", "Bluetooth audio (BYO navigation)"],
        ],
        roof: {
            brand: "Headspace Campers",
            url: "https://www.headspacecampers.com/products/toyota-landcruiser-75-78-troop-carrier-roof-conversion",
            urlLabel: "headspacecampers.com",
            points: [
                "Full standing height inside the troopy while roof is raised",
                "Integrated queen-size bed platform rises with the roof",
                "Bed lowers back down to convert the interior into a living area",
                "Structural aluminium extrusion frame — built for off-road vibration",
                "Insulated double-skin roof panel for temperature management",
                "Raises and lowers from inside — fully weather protected throughout",
            ],
        },
        bookingUrl: "https://www.camplify.com.au/rv/156164",
        meta: {
            title: "LandCruiser Troopy Hire with Headspace Roof, Perth WA | Wayforge",
            description:
                "Hire a 2014 VDJ78 Toyota LandCruiser Troopcarrier with a Headspace Campers roof conversion from Perth. Built for two: full-length bed, Odyssey fitout, 90L water, 180L fuel.",
        },
    },
];

export function vehiclePath(vehicle: Vehicle) {
    return `/vehicles/${vehicle.slug}/`;
}

export function findVehicle(slug: string | undefined) {
    return vehicles.find((v) => v.slug === slug);
}
