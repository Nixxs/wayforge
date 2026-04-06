import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useLocation } from "react-router";
import { palette } from "../theme";

const navLinks: Array<{ label: string; href?: string; scrollId?: string }> = [
    { label: "HOME", href: "/" },
    { label: "VEHICLES", scrollId: "fleet" },
    { label: "DESTINATIONS", scrollId: "destinations" },
    { label: "FAQ", scrollId: "faq" },
    { label: "CONTACT", scrollId: "contact" },
];

function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
    const location = useLocation();

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: `${palette.blue}cc`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                zIndex: 1100,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 } }}>
                    {/* Logo */}
                    <Box
                        component={RouterLink}
                        to="/"
                        sx={{ mr: 6, flexShrink: 0, display: "flex", alignItems: "center" }}
                    >
                        <Box
                            component="img"
                            src="/Wayforge_Logo_Blue.png"
                            alt="Wayforge"
                            sx={{ height: 40 }}
                        />
                    </Box>

                    {/* Nav links */}
                    <Box
                        sx={{
                            flex: 1,
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        {navLinks.map((link) => {
                            const isActive = link.href ? location.pathname === link.href : false;
                            const linkSx = {
                                color: isActive ? "white" : "rgba(255,255,255,0.75)",
                                textDecoration: "none",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                letterSpacing: "0.09em",
                                textTransform: "uppercase",
                                borderBottom: isActive
                                    ? `2px solid ${palette.navy}`
                                    : "2px solid transparent",
                                pb: "4px",
                                transition: "color 0.2s, border-color 0.2s",
                                cursor: "pointer",
                                "&:hover": {
                                    color: "white",
                                    borderBottomColor: palette.navy,
                                },
                            };
                            const label = (
                                <Typography sx={{ fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase" }}>
                                    {link.label}
                                </Typography>
                            );
                            if (link.scrollId) {
                                return (
                                    <Box key={link.label} onClick={() => scrollToId(link.scrollId!)} sx={linkSx}>
                                        {label}
                                    </Box>
                                );
                            }
                            return (
                                <Box key={link.label} component={RouterLink} to={link.href!} sx={linkSx}>
                                    {label}
                                </Box>
                            );
                        })}
                    </Box>

                    {/* Book Now button */}
                    <Button
                        variant="contained"
                        disableElevation
                        href="https://www.camplify.com.au/member/1363012"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            backgroundColor: palette.navy,
                            color: "white",
                            fontWeight: 700,
                            fontSize: "0.78rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            borderRadius: 1,
                            px: 3,
                            py: 1,
                            flexShrink: 0,
                            "&:hover": { backgroundColor: "#067099" },
                        }}
                    >
                        BOOK NOW
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
