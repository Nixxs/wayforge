import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { palette } from "../../theme";


export default function Hero() {
    return (
        <>
            {/* Hero Section */}
            <Box
                id="home"
                sx={{
                    position: "relative",
                    height: "100vh",
                    maxHeight: 900,
                    width: "100%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Background image — drop your hero image at /public/hero.jpg */}
                <Box
                    component="img"
                    src="/forrest.jpg"
                    alt=""
                    aria-hidden="true"
                    sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />

                {/* Gradient overlay: navy on the left, fading to transparent */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(
                            to right,
                            ${palette.darkNavy}f0 0%,
                            ${palette.darkNavy}cc 25%,
                            ${palette.darkNavy}77 50%,
                            ${palette.darkNavy}22 72%,
                            transparent 100%
                        )`,
                    }}
                />

                {/* Hero content */}
                <Container
                    maxWidth="xl"
                    sx={{ position: "relative", zIndex: 1, py: { xs: 6, md: 0 } }}
                >
                    <Box sx={{ maxWidth: { xs: "100%", md: 620 } }}>
                        <Typography
                            component="h1"
                            sx={{
                                color: "white",
                                fontWeight: 900,
                                textTransform: "uppercase",
                                lineHeight: 1,
                                fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem", lg: "6.5rem" },
                            }}
                        >
                            ELITE TOURING.
                        </Typography>

                        <Typography
                            component="h1"
                            sx={{
                                color: palette.blue,
                                fontWeight: 900,
                                textTransform: "uppercase",
                                lineHeight: 1,
                                fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem", lg: "6.5rem" },
                                mb: 3,
                            }}
                        >
                            UNRESTRICTED FREEDOM.
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.82)",
                                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                                lineHeight: 1.75,
                                maxWidth: 420,
                                mb: 4,
                            }}
                        >
                            Luxury 70 Series Landcruiser builds for the discerning explorer.
                            The refined comfort of a camper meets the legendary capability of a 4WD.
                        </Typography>

                        <Button
                            variant="contained"
                            disableElevation
                            onClick={() => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" })}
                            sx={{
                                backgroundColor: palette.navy,
                                border: "1.5px solid rgba(255,255,255,0.35)",
                                borderRadius: 1,
                                color: "white",
                                fontWeight: 700,
                                fontSize: "0.82rem",
                                letterSpacing: "0.13em",
                                textTransform: "uppercase",
                                px: 4,
                                py: 1.5,
                                "&:hover": {
                                    backgroundColor: "#024b70",
                                    borderColor: "rgba(255,255,255,0.6)",
                                },
                            }}
                        >
                            EXPLORE THE FLEET &nbsp;→
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
}