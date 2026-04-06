import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import GalleryModal, { type GalleryItem } from "../../components/GalleryModal";
import RoofConversionModal from "../../components/RoofConversionModal";
import VehicleSpecsModal from "../../components/VehicleSpecsModal";
import BuildIcon from "@mui/icons-material/Build";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BoltIcon from "@mui/icons-material/Bolt";
import KitchenIcon from "@mui/icons-material/Kitchen";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AirIcon from "@mui/icons-material/Air";
import MapIcon from "@mui/icons-material/Map";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import ShowerIcon from "@mui/icons-material/Shower";
import type { SvgIconComponent } from "@mui/icons-material";
import { palette } from "../../theme";

const vehicles = [
    {
        name: "Reynolds (Family Cruiser)",
        badge: "MANUAL",
        subtitle: "Ideal for small families",
        image: "/reynolds.jpg",
        gallery: ["/reynolds.jpg", "/reynolds-1.jpg", "/reynolds-2.jpg", "/reynolds-3.jpg", "/reynolds-4.jpg", "/reynolds-5.jpg", "/reynolds-6.jpg"],
        description:
            "The ultimate overlanding icon. Built with a V8 Turbo Diesel and a custom 'Penthouse' roof conversion for two adults.",
        features: [
            { Icon: PeopleIcon, label: "Sleeps 2 Adults + 1 Child" },
            { Icon: WbSunnyIcon, label: "Solar Fit-out" },
            { Icon: KitchenIcon, label: "85L Fridge" },
            { Icon: SettingsIcon, label: "4.5L V8 Turbo" },
            { Icon: AirIcon, label: "Air Conditioning" },
            { Icon: MapIcon, label: "GPS Navigation" },
        ],
        bookingUrl: "https://www.camplify.com.au/rv/151421",
    },
    {
        name: "Nolan (Adventure Rig)",
        badge: "MANUAL",
        subtitle: "Ultimate 2-person touring",
        image: "/nolan.jpg",
        gallery: ["/nolan.jpg", "/reynolds-1.jpg", "/reynolds-2.jpg", "/reynolds-3.jpg", "/reynolds-4.jpg", "/reynolds-5.jpg", "/reynolds-6.jpg"],
        description:
            "Versatile touring with heavy-duty performance. Features a high-capacity 12V system and modular rear storage.",
        features: [
            { Icon: BoltIcon, label: "12V Power" },
            { Icon: BuildIcon, label: "Recovery Gear" },
            { Icon: WorkspacePremiumIcon, label: "Premium Fit-out" },
            { Icon: DashboardIcon, label: "Digital Cockpit" },
            { Icon: LocalGasStationIcon, label: "Long Range Tank" },
            { Icon: ShowerIcon, label: "Outdoor Shower" },
        ],
        bookingUrl: "https://www.camplify.com.au/rv/151421",
    },
];

export default function FleetSection() {
    const [activeGallery, setActiveGallery] = useState<GalleryItem | null>(null);
    const [roofOpen, setRoofOpen] = useState(false);
    const [specsOpen, setSpecsOpen] = useState(false);

    return (
        <Box id="fleet" sx={{ backgroundColor: palette.cream, py: { xs: 6, md: 10 } }}>
            <RoofConversionModal open={roofOpen} onClose={() => setRoofOpen(false)} />
            <VehicleSpecsModal open={specsOpen} onClose={() => setSpecsOpen(false)} />
            <Container maxWidth="xl">
                {/* Section header */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: { md: "flex-end" },
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        mb: { xs: 1, md: 3 },
                        gap: 2,
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: palette.blue,
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                mb: 2,
                            }}
                        >
                            Engineered for the Outback
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                color: palette.navy,
                                fontWeight: 900,
                                textTransform: "uppercase",
                                lineHeight: 1,
                                fontSize: { xs: "2rem", md: "2.8rem" },
                            }}
                        >
                            The Fleet
                        </Typography>
                        {/* Modal quick-links */}
                        <Box sx={{ display: "flex", gap: 3, mb: { xs: 1, md: 2 }, mt: { xs: 1, md: 3 }, flexWrap: "wrap" }}>
                            <Typography
                                onClick={() => setSpecsOpen(true)}
                                sx={{
                                    cursor: "pointer",
                                    color: palette.navy,
                                    fontSize: "0.78rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    borderBottom: `2px solid ${palette.blue}`,
                                    pb: "2px",
                                    transition: "opacity 0.2s",
                                    "&:hover": { opacity: 0.7 },
                                }}
                            >
                                View Full Specifications
                            </Typography>
                            <Typography
                                onClick={() => setRoofOpen(true)}
                                sx={{
                                    cursor: "pointer",
                                    color: palette.navy,
                                    fontSize: "0.78rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    borderBottom: `2px solid ${palette.blue}`,
                                    pb: "2px",
                                    transition: "opacity 0.2s",
                                    "&:hover": { opacity: 0.7 },
                                }}
                            >
                                About the Roof Conversion
                            </Typography>
                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            color: palette.tan,
                            fontSize: "0.8rem",
                            maxWidth: 320,
                            lineHeight: 1.65,
                            textAlign: { xs: "left", md: "right" },
                            mb: { xs: 2, md: 4 },
                        }}
                    >
                        Every vehicle features a professionally crafted interior by Odyssey Custom Fitouts - purpose-built cabinetry designed for off-grid travel, with everything organised, accessible, and built to last.
                    </Typography>
                </Box>



                {/* Vehicle cards */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: { xs: 4, md: 5 },
                    }}
                >
                    {vehicles.map((v) => (
                        <Box
                            key={v.name}
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: 1,
                                border: `1px solid rgba(1,57,84,0.12)`,
                                boxShadow: "0 4px 24px rgba(1,31,46,0.10), 0 1px 4px rgba(1,31,46,0.06)",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                transition: "box-shadow 0.25s, transform 0.25s",
                                "&:hover": {
                                    boxShadow: "0 10px 40px rgba(1,31,46,0.16), 0 2px 8px rgba(1,31,46,0.08)",
                                    transform: "translateY(-3px)",
                                },
                            }}
                        >
                            {/* Image — click to open gallery */}
                            <Box
                                onClick={() => setActiveGallery({ label: v.name, subtitle: v.subtitle, gallery: v.gallery })}
                                sx={{ position: "relative", cursor: "pointer", "&:hover .vehicle-img": { transform: "scale(1.04)" }, overflow: "hidden" }}
                            >
                                <Box
                                    className="vehicle-img"
                                    component="img"
                                    src={v.image}
                                    alt={v.name}
                                    sx={{
                                        width: "100%",
                                        aspectRatio: "16 / 9",
                                        objectFit: "cover",
                                        display: "block",
                                        transition: "transform 0.5s ease",
                                    }}
                                />
                            </Box>

                            {/* Card body */}
                            <Box sx={{ p: { xs: 3, lg: 4 }, display: "flex", flexDirection: "column", flex: 1, gap: 1.5 }}>
                                {/* Name + badge */}
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 800,
                                            color: palette.navy,
                                            fontSize: { xs: "1.2rem", md: "1.4rem" },
                                        }}
                                    >
                                        {v.name}
                                    </Typography>
                                    <Chip
                                        label={v.badge}
                                        size="small"
                                        sx={{
                                            backgroundColor: palette.cream,
                                            color: palette.tan,
                                            fontWeight: 700,
                                            fontSize: "0.65rem",
                                            letterSpacing: "0.08em",
                                            borderRadius: 1,
                                            height: 22,
                                        }}
                                    />
                                </Box>

                                {/* Subtitle */}
                                <Typography
                                    sx={{
                                        color: palette.blue,
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {v.subtitle}
                                </Typography>

                                {/* Description */}
                                <Typography
                                    sx={{
                                        color: palette.navy,
                                        fontSize: "0.9rem",
                                        lineHeight: 1.7,
                                        mt: 0.5,
                                    }}
                                >
                                    {v.description}
                                </Typography>

                                <Divider sx={{ my: 0.5, borderColor: "rgba(0,0,0,0.07)" }} />

                                {/* Features grid */}
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        gap: 1.5,
                                    }}
                                >
                                    {v.features.map((f: { Icon: SvgIconComponent; label: string }) => (
                                        <Box
                                            key={f.label}
                                            sx={{ display: "flex", alignItems: "center", gap: 1 }}
                                        >
                                            <f.Icon sx={{ color: palette.navy, fontSize: "1.15rem" }} />
                                            <Typography
                                                sx={{
                                                    fontSize: "0.8rem",
                                                    color: palette.navy,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {f.label}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                {/* CTA */}
                                <Button
                                    variant="contained"
                                    disableElevation
                                    href={v.bookingUrl}
                                    sx={{
                                        mt: "auto",
                                        pt: 1.5,
                                        backgroundColor: palette.navy,
                                        color: "white",
                                        fontWeight: 700,
                                        fontSize: "0.78rem",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        borderRadius: 1,
                                        "&:hover": { backgroundColor: palette.blue },
                                    }}
                                >
                                    Book on Camplify &nbsp;↗
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>

            <GalleryModal item={activeGallery} onClose={() => setActiveGallery(null)} />
        </Box>
    );
}
