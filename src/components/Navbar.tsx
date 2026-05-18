import { useEffect, useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useLocation, useNavigate } from "react-router";
import { palette } from "../theme";

const navLinks: Array<{ label: string; href?: string; scrollId?: string }> = [
    { label: "Home", href: "/", scrollId: "home" },
    { label: "Vehicles", scrollId: "fleet" },
    { label: "Destinations", scrollId: "destinations" },
    { label: "FAQ", scrollId: "faq" },
    { label: "Contact", scrollId: "contact" },
];

const NAVBAR_SCROLL_OFFSET = 88;

function getScrollContainer() {
    return document.getElementById("root") ?? document.documentElement;
}

function getScrollTop(container: HTMLElement) {
    return container === document.documentElement ? window.scrollY : container.scrollTop;
}

function getViewportHeight(container: HTMLElement) {
    return container === document.documentElement ? window.innerHeight : container.clientHeight;
}

function getElementTop(element: HTMLElement, container: HTMLElement) {
    if (container === document.documentElement) {
        return window.scrollY + element.getBoundingClientRect().top;
    }

    const containerTop = container.getBoundingClientRect().top;
    return container.scrollTop + element.getBoundingClientRect().top - containerTop;
}

function scrollToId(id: string) {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    const container = getScrollContainer();
    const elementTop = getElementTop(element, container);

    container.scrollTo({
        top: Math.max(elementTop - NAVBAR_SCROLL_OFFSET, 0),
        behavior: "smooth",
    });
}

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const sectionIds = useMemo(
        () => navLinks.map((link) => link.scrollId).filter((scrollId): scrollId is string => Boolean(scrollId)),
        [],
    );
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "home");

    useEffect(() => {
        if (location.pathname !== "/") {
            return;
        }

        const container = getScrollContainer();

        const updateActiveSection = () => {
            const scrollTop = getScrollTop(container);
            const probePosition = scrollTop + NAVBAR_SCROLL_OFFSET + getViewportHeight(container) * 0.3;
            let nextActiveSection = sectionIds[0] ?? "home";

            sectionIds.forEach((sectionId) => {
                const element = document.getElementById(sectionId);

                if (!element) {
                    return;
                }

                const elementTop = getElementTop(element, container);

                if (probePosition >= elementTop) {
                    nextActiveSection = sectionId;
                }
            });

            setActiveSection(nextActiveSection);
        };

        let frameId = 0;
        const handleScroll = () => {
            if (frameId !== 0) {
                return;
            }

            frameId = window.requestAnimationFrame(() => {
                updateActiveSection();
                frameId = 0;
            });
        };

        updateActiveSection();
        container.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            container.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateActiveSection);
            if (frameId !== 0) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, [location.pathname, sectionIds]);

    useEffect(() => {
        if (location.pathname !== "/" || !location.hash) {
            return;
        }

        const sectionId = location.hash.slice(1);
        const frameId = window.requestAnimationFrame(() => {
            setActiveSection(sectionId);
            scrollToId(sectionId);
        });

        return () => window.cancelAnimationFrame(frameId);
    }, [location.hash, location.pathname]);

    const handleNavClick = (scrollId: string) => {
        setActiveSection(scrollId);

        if (location.pathname !== "/") {
            navigate(`/#${scrollId}`);
            return;
        }

        scrollToId(scrollId);
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: `${palette.navy}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                zIndex: 1100,
            }}
        >
            <Container disableGutters maxWidth={false} sx={{ px: 4 }}>
                <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 } }}>
                    {/* Logo */}
                    <Box
                        component={RouterLink}
                        to="/"
                        sx={{ mr: 6, flexShrink: 0, display: "flex", alignItems: "center" }}
                    >
                        <Box
                            component="img"
                            src="/Wayforge_Logo_White.png"
                            alt="Wayforge"
                            sx={{ height: 20 }}
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
                            const isActive = location.pathname === "/" && link.scrollId
                                ? activeSection === link.scrollId
                                : Boolean(link.href && location.pathname === link.href);
                            const linkSx = {
                                color: isActive ? "white" : "rgba(255,255,255,0.75)",
                                textDecoration: "none",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                letterSpacing: "0.09em",
                                borderBottom: isActive
                                    ? `2px solid ${palette.light}`
                                    : "2px solid transparent",
                                pb: "4px",
                                transition: "color 0.2s, border-color 0.2s",
                                cursor: "pointer",
                                "&:hover": {
                                    color: "white",
                                    borderBottomColor: palette.blue,
                                },
                            };
                            const label = (
                                <Typography sx={{ fontWeight: 600, letterSpacing: "0.09em" }}>
                                    {link.label}
                                </Typography>
                            );
                            if (link.scrollId) {
                                const scrollId = link.scrollId;

                                return (
                                    <Box key={link.label} onClick={() => handleNavClick(scrollId)} sx={linkSx}>
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
                            backgroundColor: palette.blue,
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.78rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            borderRadius: 10,
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
