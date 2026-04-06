import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { palette } from "../../theme";
import TermsModal from "../../components/TermsModal";
import RoofConversionModal from "../../components/RoofConversionModal";
import VehicleSpecsModal from "../../components/VehicleSpecsModal";

export default function Footer() {
    const [termsOpen, setTermsOpen] = useState(false);
    const [roofOpen, setRoofOpen] = useState(false);
    const [specsOpen, setSpecsOpen] = useState(false);

    return (
        <Box id="contact" sx={{ backgroundColor: palette.navy }}>
            <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
            <RoofConversionModal open={roofOpen} onClose={() => setRoofOpen(false)} />
            <VehicleSpecsModal open={specsOpen} onClose={() => setSpecsOpen(false)} />
            <Container maxWidth="xl">
                <Box sx={{ py: { xs: 6, md: 8 } }}>
                    <Grid container spacing={{ xs: 5, md: 4 }}>
                        {/* Brand column */}
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "white",
                                    fontWeight: 900,
                                    fontSize: "1.5rem",
                                    letterSpacing: 2,
                                    textTransform: "uppercase",
                                    mb: 2,
                                }}
                            >
                                Wayforge
                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.5)",
                                    fontSize: "0.85rem",
                                    lineHeight: 1.75,
                                    maxWidth: 240,
                                }}
                            >
                                Built for the rugged heart of Western Australia. No compromises, no boundaries.
                            </Typography>
                        </Grid>

                        {/* The Fleet */}
                        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.4)",
                                    fontWeight: 700,
                                    fontSize: "0.7rem",
                                    letterSpacing: 2,
                                    textTransform: "uppercase",
                                    mb: 2.5,
                                }}
                            >
                                The Fleet
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                                {([
                                    { label: "Vehicle Fleet", action: () => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" }) },
                                    { label: "Troopy Roof Conversion", action: () => setRoofOpen(true) },
                                    { label: "Vehicle Specs", action: () => setSpecsOpen(true) },
                                ] as const).map(({ label, action }) => (
                                    <Typography
                                        key={label}
                                        onClick={action}
                                        sx={{
                                            color: "rgba(255,255,255,0.6)",
                                            fontSize: "0.78rem",
                                            letterSpacing: 1.5,
                                            textTransform: "uppercase",
                                            textDecoration: "none",
                                            cursor: "pointer",
                                            "&:hover": { color: "white" },
                                            transition: "color 0.2s",
                                        }}
                                    >
                                        {label}
                                    </Typography>
                                ))}
                            </Box>
                        </Grid>

                        {/* Resources */}
                        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.4)",
                                    fontWeight: 700,
                                    fontSize: "0.7rem",
                                    letterSpacing: 2,
                                    textTransform: "uppercase",
                                    mb: 2.5,
                                }}
                            >
                                Resources
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                                <Typography
                                    component="a"
                                    href="https://www.camplify.com.au/member/1363012"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: "rgba(255,255,255,0.6)",
                                        fontSize: "0.78rem",
                                        letterSpacing: 1.5,
                                        textTransform: "uppercase",
                                        textDecoration: "none",
                                        "&:hover": { color: "white" },
                                        transition: "color 0.2s",
                                    }}
                                >
                                    Camplify Booking
                                </Typography>
                                <Typography
                                    onClick={() => setTermsOpen(true)}
                                    sx={{
                                        color: "rgba(255,255,255,0.6)",
                                        fontSize: "0.78rem",
                                        letterSpacing: 1.5,
                                        textTransform: "uppercase",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        "&:hover": { color: "white" },
                                        transition: "color 0.2s",
                                    }}
                                >
                                    Terms of Service
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Connect */}
                        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.4)",
                                    fontWeight: 700,
                                    fontSize: "0.7rem",
                                    letterSpacing: 2,
                                    textTransform: "uppercase",
                                    mb: 2.5,
                                }}
                            >
                                Connect
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25, mb: 2.5 }}>
                                <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.83rem", lineHeight: 1.6 }}>
                                    Perth, Western Australia
                                </Typography>
                                <Typography
                                    component="a"
                                    href="tel:+61400000000"
                                    sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.83rem", textDecoration: "none", "&:hover": { color: "white" }, transition: "color 0.2s" }}
                                >
                                    +61 400 000 000
                                </Typography>
                                <Typography
                                    component="a"
                                    href="mailto:info@wayforge.com.au"
                                    sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.83rem", textDecoration: "none", "&:hover": { color: "white" }, transition: "color 0.2s" }}
                                >
                                    info@wayforge.com.au
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: 1.5 }}>
                                <Box
                                    component="a"
                                    href="https://www.instagram.com/wayforgecampers/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: "rgba(255,255,255,0.6)",
                                        display: "flex",
                                        alignItems: "center",
                                        "&:hover": { color: "white" },
                                        transition: "color 0.2s",
                                    }}
                                >
                                    <InstagramIcon sx={{ fontSize: 22 }} />
                                </Box>
                                <Box
                                    component="a"
                                    href="mailto:info@wayforge.com.au"
                                    sx={{
                                        color: "rgba(255,255,255,0.6)",
                                        display: "flex",
                                        alignItems: "center",
                                        "&:hover": { color: "white" },
                                        transition: "color 0.2s",
                                    }}
                                >
                                    <EmailIcon sx={{ fontSize: 22 }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

                <Box sx={{ py: 3, textAlign: "center" }}>
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.3)",
                            fontSize: "0.72rem",
                            letterSpacing: 2,
                            textTransform: "uppercase",
                        }}
                    >
                        © 2025 Wayforge Campers. Rugged curation for the modern explorer.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
