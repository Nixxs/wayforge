import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GalleryModal, { type GalleryItem } from "../../components/GalleryModal";
import { palette } from "../../theme";
import { imageSources, imageUrl } from "../../utils/images";

const destinations = [
    {
        label: "Exmouth",
        subtitle: "From Ningaloo Reef to Cape Range National Park",
        image: "dest-exmouth",
        gallery: ["dest-exmouth", "dest-exmouth-1", "dest-exmouth-2", "dest-exmouth-3"],
    },
    {
        label: "Karijini",
        subtitle: "Ancient gorges, hidden pools, Karijini National Park",
        image: "dest-karajini",
        gallery: ["dest-karajini", "dest-karajini-1", "dest-karajini-2", "dest-karajini-3"],
    },
    {
        label: "Esperance",
        subtitle: "White sand, granite peaks & Cape Le Grand National Park",
        image: "dest-esperance",
        gallery: ["dest-esperance", "dest-esperance-1", "dest-esperance-2", "dest-esperance-3"],
    },
    {
        label: "Margaret River",
        subtitle: "Coastal cliffs, forest tracks & Leeuwin–Naturaliste National Park",
        image: "dest-margaret-river",
        gallery: ["dest-margaret-river", "dest-margaret-river-1", "dest-margaret-river-2", "dest-margaret-river-3"],
    },
] as const;

export default function DestinationsSection() {
    const [active, setActive] = useState<GalleryItem | null>(null);

    return (
        <Box
            id="destinations"
            sx={{
                backgroundImage: `linear-gradient(rgba(1,31,46,0.82), rgba(1,31,46,0.82)), url('${imageUrl("pattern-bg-navy")}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                py: { xs: 6, md: 10 },
                position: "relative",
                zIndex: 2,
                boxShadow: "0 -10px 30px rgba(1,31,46,0.4)",
            }}
        >
            <Container maxWidth="xl">
                {/* Header */}
                <Box sx={{ mb: { xs: 4, md: 6 } }}>
                    <Typography
                        component="h2"
                        sx={{
                            color: palette.light,
                            fontWeight: 900,
                            lineHeight: 1,
                            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                            mb: 2,
                        }}
                    >
                        Experience WA 
                        <br />
                        <Box component="span" sx={{ fontStyle: "italic" }}>
                        Like Never Before...
                        </Box>
                    </Typography>
                    <Typography
                        sx={{
                            color: palette.light,
                            fontSize: "0.95rem",
                            lineHeight: 1.75,
                            maxWidth: "50%",
                        }}
                    >
                        Explore the landscapes our 70 Series builds were made for - engineered for capability, proven in reliability, and built for comfort.
                    </Typography>
                </Box>

                {/* Destination image grid */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
                        gap: { xs: 1.5, md: 2 },
                    }}
                >
                    {destinations.map((d) => (
                        <Box
                            key={d.label}
                            component="button"
                            type="button"
                            aria-label={`View ${d.label} gallery`}
                            onClick={() => setActive(d)}
                            sx={{
                                position: "relative",
                                display: "block",
                                width: "100%",
                                p: 0,
                                border: 0,
                                background: "none",
                                textAlign: "left",
                                aspectRatio: "3 / 4",
                                overflow: "hidden",
                                cursor: "pointer",
                                "&:hover .dest-img": { transform: "scale(1.06)" },
                            }}
                        >
                            <Box
                                className="dest-img"
                                component="img"
                                {...imageSources(d.image)}
                                sizes="(min-width: 900px) 25vw, 50vw"
                                loading="lazy"
                                alt={d.label}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.5s ease",
                                }}
                            />
                            <Box
                                component="span"
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(1,31,46,0.85) 0%, rgba(1,31,46,0.2) 45%, transparent 100%)",
                                }}
                            />
                            <Box component="span" sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
                                <Typography
                                    component="span"
                                    sx={{
                                        display: "block",
                                        color: "white",
                                        fontWeight: 700,
                                        fontSize: { xs: "0.85rem", md: "1rem" },
                                        letterSpacing: "0.03em",
                                        textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {d.label}
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={{
                                        display: "block",
                                        color: "rgba(255,255,255,0.6)",
                                        fontSize: { xs: "0.7rem", md: "0.78rem" },
                                        fontWeight: 400,
                                        mt: 0.4,
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    {d.subtitle}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>

            <GalleryModal item={active} onClose={() => setActive(null)} />
        </Box>
    );
}
