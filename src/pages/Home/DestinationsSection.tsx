import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { palette } from "../../theme";

const destinations = [
    {
        label: "Exmouth",
        subtitle: "Reef, red dirt & open sky",
        image: "/dest-exmouth.jpg",
        gallery: ["/dest-exmouth.jpg", "/dest-exmouth-2.jpg", "/dest-exmouth-3.jpg"],
    },
    {
        label: "Karijini",
        subtitle: "Ancient gorges & hidden pools",
        image: "/dest-karajini.jpg",
        gallery: ["/dest-karajini.jpg", "/dest-karijini-2.jpg", "/dest-karijini-3.jpg"],
    },
    {
        label: "Esperance",
        subtitle: "Pristine beaches & granite peaks",
        image: "/dest-esperance.jpg",
        gallery: ["/dest-esperance.jpg", "/dest-esperance-2.jpg", "/dest-esperance-3.jpg"],
    },
    {
        label: "Margaret River",
        subtitle: "Forest tracks & coastal cliffs",
        image: "/dest-margaret-river.jpeg",
        gallery: ["/dest-margaret-river.jpeg", "/dest-margaret-river-2.jpg", "/dest-margaret-river-3.jpg"],
    },
];

type Destination = (typeof destinations)[number];

export default function DestinationsSection() {
    const [active, setActive] = useState<Destination | null>(null);
    const [slideIndex, setSlideIndex] = useState(0);

    function openModal(dest: Destination) {
        setActive(dest);
        setSlideIndex(0);
    }

    function closeModal() {
        setActive(null);
    }

    function prev() {
        if (!active) return;
        setSlideIndex((i) => (i - 1 + active.gallery.length) % active.gallery.length);
    }

    function next() {
        if (!active) return;
        setSlideIndex((i) => (i + 1) % active.gallery.length);
    }

    return (
        <Box sx={{ backgroundColor: palette.darkNavy, py: { xs: 6, md: 10 } }}>
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
                            onClick={() => openModal(d)}
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

            {/* Lightbox modal */}
            <Modal open={!!active} onClose={closeModal}>
                <Box
                    sx={{
                        position: "fixed",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(1,16,24,0.92)",
                        outline: "none",
                    }}
                    onClick={closeModal}
                >
                    {/* Inner panel — stop click from bubbling to backdrop */}
                    <Box
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                            position: "relative",
                            width: { xs: "95vw", md: "80vw", lg: "70vw" },
                            maxHeight: "90vh",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: palette.darkNavy,
                            borderRadius: 2,
                            overflow: "hidden",
                        }}
                    >
                        {/* Close button */}
                        <IconButton
                            onClick={closeModal}
                            sx={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                zIndex: 2,
                                color: "white",
                                backgroundColor: "rgba(0,0,0,0.4)",
                                "&:hover": { backgroundColor: "rgba(0,0,0,0.65)" },
                            }}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>

                        {/* Image */}
                        <Box sx={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                            {active && (
                                <Box
                                    component="img"
                                    src={active.gallery[slideIndex]}
                                    alt={active.label}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                            )}

                            {/* Prev */}
                            <IconButton
                                onClick={prev}
                                sx={{
                                    position: "absolute",
                                    left: 12,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "white",
                                    backgroundColor: "rgba(0,0,0,0.4)",
                                    "&:hover": { backgroundColor: "rgba(0,0,0,0.65)" },
                                }}
                            >
                                <ArrowBackIosNewIcon fontSize="small" />
                            </IconButton>

                            {/* Next */}
                            <IconButton
                                onClick={next}
                                sx={{
                                    position: "absolute",
                                    right: 12,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "white",
                                    backgroundColor: "rgba(0,0,0,0.4)",
                                    "&:hover": { backgroundColor: "rgba(0,0,0,0.65)" },
                                }}
                            >
                                <ArrowForwardIosIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        {/* Caption + dots */}
                        <Box
                            sx={{
                                px: 3,
                                py: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 2,
                            }}
                        >
                            <Box>
                                <Typography sx={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>
                                    {active?.label}
                                </Typography>
                                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", mt: 0.25 }}>
                                    {active?.subtitle}
                                </Typography>
                            </Box>

                            {/* Dot indicators */}
                            <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
                                {active?.gallery.map((_, i) => (
                                    <Box
                                        key={i}
                                        onClick={() => setSlideIndex(i)}
                                        sx={{
                                            width: i === slideIndex ? 20 : 8,
                                            height: 8,
                                            borderRadius: 4,
                                            backgroundColor: i === slideIndex ? "white" : "rgba(255,255,255,0.3)",
                                            cursor: "pointer",
                                            transition: "width 0.2s, background-color 0.2s",
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
