import { useMemo, useState } from "react";
import { Link as RouterLink, useParams } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import CollectionsIcon from "@mui/icons-material/Collections";
import GalleryModal, { type GalleryItem } from "../../components/GalleryModal";
import { hireTerms } from "../../data/hireTerms";
import { findVehicle, vehicles, vehiclePath, type Vehicle } from "../../data/vehicles";
import { imageAlt } from "../../imageAlt";
import { VEHICLE_HERO_SIZES, vehicleMeta } from "../../pageMeta";
import { palette } from "../../theme";
import { imageSources } from "../../utils/images";
import { usePageMeta } from "../../utils/usePageMeta";
import Footer from "../Home/Footer";
import NotFound from "../NotFound";

const THUMBNAIL_COUNT = 8;

const sectionLabelSx = {
    color: palette.blue,
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    mb: 1.5,
} as const;

const sectionHeadingSx = {
    color: palette.navy,
    fontWeight: 800,
    lineHeight: 1.15,
    fontSize: { xs: "1.5rem", md: "2rem" },
    mb: 2.5,
} as const;

const imageButtonSx = {
    position: "relative",
    display: "block",
    width: "100%",
    p: 0,
    border: 0,
    background: "none",
    cursor: "pointer",
    overflow: "hidden",
    borderRadius: 1,
    "& img": { transition: "transform 0.5s ease" },
    "&:hover img": { transform: "scale(1.04)" },
} as const;

export default function VehiclePage() {
    const { slug } = useParams();
    const vehicle = findVehicle(slug);

    if (!vehicle) {
        return <NotFound />;
    }

    // Keyed so state resets when moving between vehicle pages
    return <VehicleDetails key={vehicle.slug} vehicle={vehicle} />;
}

function VehicleDetails({ vehicle }: { vehicle: Vehicle }) {
    const [gallery, setGallery] = useState<GalleryItem | null>(null);
    const meta = useMemo(() => vehicleMeta(vehicle), [vehicle]);
    usePageMeta(meta);

    const openGallery = (startIndex: number) =>
        setGallery({
            label: `${vehicle.name} (${vehicle.nickname})`,
            subtitle: vehicle.headline,
            gallery: vehicle.gallery,
            startIndex,
        });

    const otherVehicles = vehicles.filter((v) => v.slug !== vehicle.slug);
    const thumbnails = vehicle.gallery.slice(1, THUMBNAIL_COUNT + 1);
    const remaining = vehicle.gallery.length - 1 - thumbnails.length;

    return (
        <>
            {/* Header */}
            <Box sx={{ backgroundColor: palette.navy, pt: { xs: 11, md: 14 }, pb: { xs: 6, md: 8 } }}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                            gap: { xs: 4, md: 6 },
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Typography
                                component={RouterLink}
                                to="/#fleet"
                                sx={{
                                    display: "inline-block",
                                    color: "rgba(255,255,255,0.6)",
                                    fontSize: "0.78rem",
                                    letterSpacing: "0.08em",
                                    textDecoration: "none",
                                    mb: 3,
                                    "&:hover": { color: "white" },
                                }}
                            >
                                ← All vehicles
                            </Typography>
                            <Typography
                                sx={{
                                    color: palette.tan,
                                    fontWeight: 700,
                                    fontSize: "0.72rem",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    mb: 1.5,
                                }}
                            >
                                {vehicle.name} · {vehicle.nickname}
                            </Typography>
                            <Typography
                                component="h1"
                                sx={{
                                    color: "white",
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    fontSize: { xs: "2rem", md: "2.8rem" },
                                    mb: 2.5,
                                }}
                            >
                                {vehicle.headline}
                            </Typography>
                            <Typography sx={{ color: palette.light, fontSize: "1rem", lineHeight: 1.75, mb: 4, maxWidth: 560 }}>
                                {vehicle.description}
                            </Typography>
                            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                                <Button
                                    variant="contained"
                                    disableElevation
                                    href={vehicle.bookingUrl}
                                    sx={{
                                        backgroundColor: palette.blue,
                                        color: "white",
                                        fontWeight: 700,
                                        fontSize: "0.78rem",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        borderRadius: 1,
                                        px: 3,
                                        py: 1.25,
                                        "&:hover": { backgroundColor: "#067099" },
                                    }}
                                >
                                    Book on Camplify &nbsp;↗
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => openGallery(0)}
                                    startIcon={<CollectionsIcon />}
                                    sx={{
                                        color: "white",
                                        borderColor: "rgba(255,255,255,0.4)",
                                        fontWeight: 700,
                                        fontSize: "0.78rem",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        borderRadius: 1,
                                        px: 3,
                                        py: 1.25,
                                        "&:hover": { borderColor: "white", backgroundColor: "rgba(255,255,255,0.06)" },
                                    }}
                                >
                                    View all {vehicle.gallery.length} photos
                                </Button>
                            </Box>
                        </Box>

                        <Box
                            component="button"
                            type="button"
                            aria-label={`Open photo gallery, ${vehicle.gallery.length} photos`}
                            onClick={() => openGallery(0)}
                            sx={imageButtonSx}
                        >
                            <Box
                                component="img"
                                {...imageSources(vehicle.image)}
                                sizes={VEHICLE_HERO_SIZES}
                                fetchPriority="high"
                                alt={imageAlt[vehicle.image] ?? vehicle.headline}
                                sx={{ display: "block", width: "100%", height: "auto", aspectRatio: "4 / 3", objectFit: "cover" }}
                            />
                        </Box>
                    </Box>

                    {/* Photo strip */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "repeat(4, 1fr)", md: `repeat(${THUMBNAIL_COUNT}, 1fr)` },
                            gap: 1,
                            mt: { xs: 3, md: 4 },
                        }}
                    >
                        {thumbnails.map((name, i) => {
                            const isLast = i === thumbnails.length - 1 && remaining > 0;
                            return (
                                <Box
                                    key={name}
                                    component="button"
                                    type="button"
                                    aria-label={isLast ? `Open photo ${i + 2} and ${remaining} more` : `Open photo ${i + 2}`}
                                    onClick={() => openGallery(i + 1)}
                                    sx={imageButtonSx}
                                >
                                    <Box
                                        component="img"
                                        {...imageSources(name)}
                                        sizes="(min-width: 900px) 12vw, 25vw"
                                        loading="lazy"
                                        alt={imageAlt[name] ?? ""}
                                        sx={{ display: "block", width: "100%", height: "auto", aspectRatio: "1 / 1", objectFit: "cover" }}
                                    />
                                    {isLast && (
                                        <Box
                                            component="span"
                                            sx={{
                                                position: "absolute",
                                                inset: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "rgba(1,31,46,0.6)",
                                                color: "white",
                                                fontWeight: 700,
                                                fontSize: "1rem",
                                            }}
                                        >
                                            +{remaining}
                                        </Box>
                                    )}
                                </Box>
                            );
                        })}
                    </Box>
                </Container>
            </Box>

            {/* Overview + hire terms */}
            <Box sx={{ backgroundColor: "#fdf6e3", py: { xs: 6, md: 8 } }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 } }}>
                        <Box>
                            <Typography sx={sectionLabelSx}>Overview</Typography>
                            <Typography component="h2" sx={sectionHeadingSx}>
                                About this Troopy
                            </Typography>
                            <Typography sx={{ color: palette.navy, fontSize: "0.95rem", lineHeight: 1.8, mb: 3 }}>
                                {vehicle.intro}
                            </Typography>
                            <Box
                                component="ul"
                                sx={{
                                    listStyle: "none",
                                    p: 0,
                                    m: 0,
                                    display: "grid",
                                    gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr" },
                                    gap: 1.5,
                                }}
                            >
                                {vehicle.features.map(({ Icon, label }) => (
                                    <Box component="li" key={label} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <Icon sx={{ color: palette.navy, fontSize: "1.15rem" }} />
                                        <Typography component="span" sx={{ fontSize: "0.85rem", color: palette.navy, fontWeight: 500 }}>
                                            {label}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        <Box>
                            <Typography sx={sectionLabelSx}>Perth, WA</Typography>
                            <Typography component="h2" sx={sectionHeadingSx}>
                                Hire terms
                            </Typography>
                            <Box component="dl" sx={{ m: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                                {hireTerms.map(({ Icon, term, detail }) => (
                                    <Box key={term} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                                        <Icon sx={{ color: palette.navy, fontSize: "1.2rem", mt: "2px" }} />
                                        <Box>
                                            <Typography
                                                component="dt"
                                                sx={{ color: palette.navy, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
                                            >
                                                {term}
                                            </Typography>
                                            <Typography component="dd" sx={{ m: 0, color: palette.navy, fontSize: "0.9rem", lineHeight: 1.6 }}>
                                                {detail}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Roof conversion */}
            <Box sx={{ backgroundColor: palette.darkNavy, py: { xs: 6, md: 8 } }}>
                <Container maxWidth="xl">
                    <Typography sx={{ ...sectionLabelSx, color: palette.tan }}>Roof conversion</Typography>
                    <Typography component="h2" sx={{ ...sectionHeadingSx, color: "white" }}>
                        {vehicle.roof.brand} roof conversion
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 820, mb: 3 }}>
                        This isn't a rooftop tent. The bed platform is integrated into the roof and rises with it, so
                        with the roof up you get full standing height inside the Troopy and the whole length of the
                        vehicle as a living area. Raising and lowering happens from inside, out of the rain, wind,
                        dust and insects.
                    </Typography>
                    <Box
                        component="ul"
                        sx={{
                            listStyle: "none",
                            p: 0,
                            m: 0,
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                            gap: 1.5,
                            mb: 3,
                        }}
                    >
                        {vehicle.roof.points.map((point) => (
                            <Box component="li" key={point} sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
                                <CheckIcon sx={{ color: palette.tan, fontSize: 16, mt: "3px", flexShrink: 0 }} />
                                <Typography component="span" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                                    {point}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Typography
                        component="a"
                        href={vehicle.roof.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: palette.tan, fontSize: "0.8rem", textDecoration: "none", "&:hover": { color: "white" } }}
                    >
                        More about the {vehicle.roof.brand} at {vehicle.roof.urlLabel} ↗
                    </Typography>
                </Container>
            </Box>

            {/* Full specifications */}
            <Box sx={{ backgroundColor: "white", py: { xs: 6, md: 8 } }}>
                <Container maxWidth="md">
                    <Typography sx={sectionLabelSx}>{vehicle.specs[0][1]}</Typography>
                    <Typography component="h2" sx={sectionHeadingSx}>
                        Full specifications
                    </Typography>
                    <Box component="dl" sx={{ m: 0 }}>
                        {vehicle.specs.map(([key, value]) => (
                            <Box
                                key={key}
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
                                    gap: { xs: 0.25, sm: 2 },
                                    py: 1.5,
                                    borderBottom: "1px solid rgba(1,57,84,0.1)",
                                }}
                            >
                                <Typography
                                    component="dt"
                                    sx={{ color: palette.tan, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", pt: "2px" }}
                                >
                                    {key}
                                </Typography>
                                <Typography component="dd" sx={{ m: 0, color: palette.navy, fontSize: "0.92rem", lineHeight: 1.6 }}>
                                    {value}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Button
                        variant="contained"
                        disableElevation
                        href={vehicle.bookingUrl}
                        sx={{
                            mt: 4,
                            backgroundColor: palette.navy,
                            color: "white",
                            fontWeight: 700,
                            fontSize: "0.78rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            borderRadius: 1,
                            px: 3,
                            py: 1.25,
                            "&:hover": { backgroundColor: palette.blue },
                        }}
                    >
                        Check availability on Camplify &nbsp;↗
                    </Button>
                </Container>
            </Box>

            {/* Other vehicles */}
            <Box sx={{ backgroundColor: "#fdf6e3", py: { xs: 6, md: 8 } }}>
                <Container maxWidth="xl">
                    <Typography sx={sectionLabelSx}>Also available</Typography>
                    {otherVehicles.map((other) => (
                        <Box
                            key={other.slug}
                            component={RouterLink}
                            to={vehiclePath(other)}
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { xs: "1fr", sm: "240px 1fr" },
                                gap: 3,
                                alignItems: "center",
                                textDecoration: "none",
                                backgroundColor: "white",
                                borderRadius: 1,
                                overflow: "hidden",
                                border: "1px solid rgba(1,57,84,0.12)",
                                transition: "box-shadow 0.25s",
                                "&:hover": { boxShadow: "0 10px 40px rgba(1,31,46,0.12)" },
                            }}
                        >
                            <Box
                                component="img"
                                {...imageSources(other.image)}
                                sizes="(min-width: 600px) 240px, 100vw"
                                loading="lazy"
                                alt={imageAlt[other.image] ?? other.headline}
                                sx={{ display: "block", width: "100%", height: "auto", aspectRatio: "16 / 10", objectFit: "cover" }}
                            />
                            <Box sx={{ p: { xs: 3, sm: 2 } }}>
                                <Typography sx={{ color: palette.tan, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", mb: 0.75 }}>
                                    {other.name} · {other.nickname}
                                </Typography>
                                <Typography component="h2" sx={{ color: palette.navy, fontWeight: 800, fontSize: { xs: "1.1rem", md: "1.3rem" }, mb: 0.75 }}>
                                    {other.headline}
                                </Typography>
                                <Typography sx={{ color: palette.navy, fontSize: "0.88rem", lineHeight: 1.6 }}>
                                    {other.subtitle} — view photos, specs and roof details →
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Container>
            </Box>

            <Footer />

            <GalleryModal item={gallery} onClose={() => setGallery(null)} />
        </>
    );
}
