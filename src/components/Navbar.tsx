import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useLocation } from "react-router";
import { palette } from "../theme";

const navLinks = [
    { label: "HOME", href: "/" },
    { label: "VEHICLES", href: "/vehicles" },
    { label: "DESTINATIONS", href: "/destinations" },
    { label: "FAQ", href: "/faq" },
    { label: "CONTACT", href: "/contact" },
];

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
                            const isActive = location.pathname === link.href;
                            return (
                                <Box
                                    key={link.label}
                                    component={RouterLink}
                                    to={link.href}
                                    sx={{
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
                                        "&:hover": {
                                            color: "white",
                                            borderBottomColor: palette.navy,
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            letterSpacing: "0.09em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {link.label}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>

                    {/* Book Now button */}
                    <Button
                        variant="contained"
                        disableElevation
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
