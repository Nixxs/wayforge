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
                    src="/outback-hero-aerial-dark-2.jpg"
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

                {/* Hero content */}
                <Container
                    disableGutters
                    maxWidth={false}
                    sx={{ position: "relative", zIndex: 1, py: { xs: 6, md: 0 }, px: 4 }}
                >
                    <Box sx={{ maxWidth: "100%" }}>
                        <Typography
                            component="h1"
                            sx={{
                                color: "white",
                                fontWeight: 700,
                                lineHeight: 1,
                                fontSize: { xs: "2.5rem", sm: "4.0rem", md: "5.0rem", lg: "6.0rem" },
                            }}
                        >
                            Elite Touring
                        </Typography>

                        <Typography
                            component="h1"
                            sx={{
                                color: "white",
                                fontWeight: 700,
                                lineHeight: 1,
                                fontSize: { xs: "2.5rem", sm: "4.0rem", md: "5.0rem", lg: "6.0rem" },
                                mb: 3,
                            }}
                        >
                            <Box component="span" sx={{ fontStyle: "italic"}}>
                                Unrestricted
                            </Box>{" "}
                            Freedom
                        </Typography>

                        <Typography
                            sx={{
                                color: "white",
                                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                                lineHeight: 1.75,
                                maxWidth: 480,
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
                                // border: "1.5px solid rgba(255,255,255,0.35)",
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