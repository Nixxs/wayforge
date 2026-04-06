import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { palette } from "../../theme";

const destinations = [
    { label: "Exmouth", subtitle: "Reef, red dirt & open sky", image: "/dest-exmouth.jpg" },
    { label: "Karijini", subtitle: "Ancient gorges & hidden pools", image: "/dest-karajini.jpg" },
    { label: "Esperance", subtitle: "Pristine beaches & granite peaks", image: "/dest-esperance.jpg" },
    { label: "Margaret River", subtitle: "Forest tracks & coastal cliffs", image: "/dest-margaret-river.jpeg" },
];

export default function DestinationsSection() {
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
                            sx={{
                                position: "relative",
                                aspectRatio: "3 / 4",
                                overflow: "hidden",
                                cursor: "pointer",
                                "&:hover .dest-img": {
                                    transform: "scale(1.06)",
                                },
                            }}
                        >
                            {/* Photo */}
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

                            {/* Bottom gradient overlay */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(to top, rgba(1,31,46,0.85) 0%, rgba(1,31,46,0.2) 45%, transparent 100%)",
                                }}
                            />

                            {/* Label */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 16,
                                    left: 16,
                                    right: 16,
                                }}
                            >
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
        </Box>
    );
}
