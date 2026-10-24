import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { hireTerms } from "../../data/hireTerms";
import { palette } from "../../theme";

// Plain-language summary of the business. The facts list is shared with the vehicle pages.
export default function AboutSection() {
    return (
        <Box id="about" sx={{ backgroundColor: "#fdf6e3", py: { xs: 6, md: 8 } }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: { xs: 4, md: 8 },
                        alignItems: "start",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: palette.blue,
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                mb: 2,
                            }}
                        >
                            Troopy camper hire · Perth, WA
                        </Typography>
                        <Typography
                            component="h2"
                            sx={{
                                color: palette.navy,
                                fontWeight: 800,
                                lineHeight: 1.15,
                                fontSize: { xs: "1.6rem", md: "2.2rem" },
                                mb: 2.5,
                            }}
                        >
                            Self-contained LandCruiser Troopy hire from Perth
                        </Typography>
                        <Typography sx={{ color: palette.navy, fontSize: "0.95rem", lineHeight: 1.75 }}>
                            Wayforge hires out two fully self-contained Toyota LandCruiser Troopcarriers (VDJ78)
                            from Perth, Western Australia. Each Troopy has a pop-top roof conversion (Alu-Cab on
                            one, Headspace Campers on the other) and an Odyssey Custom Fitouts interior with bed,
                            kitchen, power and water on board. Pick it up, load your gear and head for Ningaloo,
                            Karijini, Esperance or Margaret River. No towing, no setup.
                        </Typography>
                    </Box>

                    <Box component="dl" sx={{ m: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                        {hireTerms.map(({ Icon, term, detail }) => (
                            <Box key={term} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                                <Icon sx={{ color: palette.navy, fontSize: "1.2rem", mt: "2px" }} />
                                <Box>
                                    <Typography
                                        component="dt"
                                        sx={{
                                            color: palette.navy,
                                            fontWeight: 700,
                                            fontSize: "0.72rem",
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {term}
                                    </Typography>
                                    <Typography component="dd" sx={{ m: 0, color: palette.navy, fontSize: "0.9rem", lineHeight: 1.6 }}>
                                        {detail}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
