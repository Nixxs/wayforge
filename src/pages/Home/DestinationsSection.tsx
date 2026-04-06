import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GalleryModal, { type GalleryItem } from "../../components/GalleryModal";
import { palette } from "../../theme";

const destinations = [
    {
        label: "Exmouth",
        subtitle: "Reef, red dirt & open sky",
        image: "/dest-exmouth.jpg",
        gallery: ["/dest-exmouth.jpg", "/dest-exmouth-1.jpg", "/dest-exmouth-2.jpg", "/dest-exmouth-3.jpg"],
    },
    {
        label: "Karijini",
        subtitle: "Ancient gorges & hidden pools",
        image: "/dest-karajini.jpg",
        gallery: ["/dest-karajini.jpg", "/dest-karajini-1.jpg", "/dest-karajini-2.jpg", "/dest-karajini-3.jpg"],
    },
    {
        label: "Esperance",
        subtitle: "Pristine beaches & granite peaks",
        image: "/dest-esperance.jpg",
        gallery: ["/dest-esperance.jpg", "/dest-esperance-1.jpg", "/dest-esperance-2.jpg", "/dest-esperance-3.jpg"],
    },
    {
        label: "Margaret River",
        subtitle: "Forest tracks & coastal cliffs",
        image: "/dest-margaret-river.jpeg",
        gallery: ["/dest-margaret-river.jpeg", "/dest-margaret-river-1.jpg", "/dest-margaret-river-2.jpg", "/dest-margaret-river-3.jpg"],
    },
];

export default function DestinationsSection() {
    const [active, setActive] = useState<GalleryItem | null>(null);

    return (
        <Box id="destinations" sx={{ backgroundColor: palette.darkNavy, py: { xs: 6, md: 10 }, position: "relative", zIndex: 2, boxShadow: "0 -10px 30px rgba(1,31,46,0.4)" }}>
            <Container maxWidth="xl">
                {/* Header */}
                <Box sx={{ mb: { xs: 4, md: 6 }, maxWidth: 520 }}>
                    <Typography
                        component="h2"
                        sx={{
                            color: "white",
                            fontWeight: 900,
                            textTransform: "uppercase",
                            lineHeight: 1,
                            fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.2rem" },
                            mb: 2,
                        }}
                    >
                        Experience WA like never before.
                    </Typography>
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "0.95rem",
                            lineHeight: 1.75,
                        }}
                    >
                        Explore the landscapes our 70 Series builds were made for — engineered for capability, proven in reliability, and built for comfort.
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
                            onClick={() => setActive(d)}
                            sx={{
                                position: "relative",
                                aspectRatio: "3 / 4",
                                overflow: "hidden",
                                cursor: "pointer",
                                "&:hover .dest-img": { transform: "scale(1.06)" },
                            }}
                        >
                            <Box
                                className="dest-img"
                                component="img"
                                src={d.image}
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
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(1,31,46,0.85) 0%, rgba(1,31,46,0.2) 45%, transparent 100%)",
                                }}
                            />
                            <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
                                <Typography
                                    sx={{
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
                                    sx={{
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
