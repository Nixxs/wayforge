import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { palette } from "../theme";

interface Props {
    open: boolean;
    onClose: () => void;
}

const headspacePoints = [
    "Full standing height inside the troopy while roof is raised",
    "Integrated queen-size bed platform rises with the roof",
    "Bed lowers back down to convert the interior into a living area",
    "Structural aluminium extrusion frame — built for off-road vibration",
    "Insulated double-skin roof panel for temperature management",
    "Raises and lowers from inside — fully weather protected throughout",
    "Fitted to Nolan",
];

const alucabPoints = [
    "Alu-Cab Hercules — South Africa's most refined roof conversion",
    "Aircraft-grade aluminium construction, corrosion resistant",
    "Full-height interior living space when the roof is raised",
    "Integrated sleeping platform rises with the roof lid",
    "Folds flat in minutes, sealed against dust and water when closed",
    "Integrated self-supporting gas strut system",
    "Fitted to Reynolds",
];

const troopyImages = [
    {
        src: "/troopy_closed_roof.png",
        alt: "Troopy roof conversion with roof lowered",
    },
    {
        src: "/troopy_sleeping_space.png",
        alt: "Troopy roof conversion sleeping platform",
    },
    {
        src: "/troopy_full_interior.png",
        alt: "Troopy roof conversion with full standing interior height",
    }
];

export default function RoofConversionModal({ open, onClose }: Props) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    backgroundColor: palette.darkNavy,
                    borderRadius: 2,
                    maxHeight: "90vh",
                },
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    px: { xs: 3, md: 5 },
                    pt: 4,
                    pb: 2,
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            color: palette.tan,
                            fontWeight: 700,
                            fontSize: "0.7rem",
                            letterSpacing: 3,
                            textTransform: "uppercase",
                            mb: 1,
                        }}
                    >
                        The Wayforge Difference
                    </Typography>
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 900,
                            fontSize: { xs: "1.5rem", md: "2rem" },
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            lineHeight: 1.1,
                        }}
                    >
                        Troopy Roof Conversion
                    </Typography>
                </Box>
                <IconButton onClick={onClose} sx={{ color: "rgba(255,255,255,0.6)", mt: 0.5 }}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mx: { xs: 3, md: 5 } }} />

            <DialogContent sx={{ px: { xs: 3, md: 5 }, py: 3 }}>
                {/* Concept intro */}
                <Box
                    sx={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: `1px solid rgba(255,255,255,0.08)`,
                        borderRadius: 1.5,
                        p: { xs: 2.5, md: 3 },
                        mb: 4,
                    }}
                >
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.9)",
                            fontSize: "0.95rem",
                            lineHeight: 1.85,
                        }}
                    >
                        This isn't a rooftop tent. The entire bed platform is integrated into the roof lid and{" "}
                        <Typography component="span" sx={{ color: palette.tan, fontWeight: 700 }}>
                            rises with it
                        </Typography>
                        . When the roof is up, you get full standing height inside the troopy — a proper living area
                        with the full length of the vehicle to move around in. When it's time to sleep, the bed
                        lowers back down. The whole sequence happens{" "}
                        <Typography component="span" sx={{ color: palette.tan, fontWeight: 700 }}>
                            from inside the vehicle
                        </Typography>
                        , keeping you completely protected from rain, wind, dust, and insects at every step.
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
                            gap: 1.5,
                            mt: 2.5,
                        }}
                    >
                        {troopyImages.map((image) => (
                            <Box
                                key={image.src}
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                sx={{
                                    width: "100%",
                                    aspectRatio: "4 / 3",
                                    objectFit: "cover",
                                    borderRadius: 1,
                                    display: "block",
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Two column conversion specs */}
                <Grid container spacing={3}>
                    {/* Nolan — Headspace */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                backgroundColor: "rgba(255,255,255,0.03)",
                                border: `1px solid rgba(255,255,255,0.08)`,
                                borderRadius: 1.5,
                                p: { xs: 2.5, md: 3 },
                                height: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: palette.tan,
                                    fontWeight: 700,
                                    fontSize: "0.65rem",
                                    letterSpacing: 3,
                                    textTransform: "uppercase",
                                    mb: 0.75,
                                }}
                            >
                                Nolan · 78 Series Troop Carrier
                            </Typography>
                            <Typography
                                sx={{
                                    color: "white",
                                    fontWeight: 800,
                                    fontSize: "1.1rem",
                                    textTransform: "uppercase",
                                    letterSpacing: 1,
                                    mb: 0.5,
                                }}
                            >
                                Headspace Campers
                            </Typography>
                            <Typography
                                component="a"
                                href="https://www.headspacecampers.com/products/toyota-landcruiser-75-78-troop-carrier-roof-conversion"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: "rgba(255,255,255,0.35)",
                                    fontSize: "0.72rem",
                                    textDecoration: "none",
                                    display: "block",
                                    mb: 2.5,
                                    "&:hover": { color: palette.tan },
                                    transition: "color 0.2s",
                                }}
                            >
                                headspacecampers.com ↗
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
                                {headspacePoints.map((pt) => (
                                    <Box key={pt} sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
                                        <CheckIcon sx={{ color: palette.tan, fontSize: 15, mt: "3px", flexShrink: 0 }} />
                                        <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.84rem", lineHeight: 1.6 }}>
                                            {pt}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Reynolds — Alu-Cab */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                backgroundColor: "rgba(255,255,255,0.03)",
                                border: `1px solid rgba(255,255,255,0.08)`,
                                borderRadius: 1.5,
                                p: { xs: 2.5, md: 3 },
                                height: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: palette.tan,
                                    fontWeight: 700,
                                    fontSize: "0.65rem",
                                    letterSpacing: 3,
                                    textTransform: "uppercase",
                                    mb: 0.75,
                                }}
                            >
                                Reynolds · 79 Series Wagon
                            </Typography>
                            <Typography
                                sx={{
                                    color: "white",
                                    fontWeight: 800,
                                    fontSize: "1.1rem",
                                    textTransform: "uppercase",
                                    letterSpacing: 1,
                                    mb: 0.5,
                                }}
                            >
                                Alu-Cab Hercules
                            </Typography>
                            <Typography
                                component="a"
                                href="https://www.alu-cab.com/products/alu-cab-hercules-roof-conversion/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: "rgba(255,255,255,0.35)",
                                    fontSize: "0.72rem",
                                    textDecoration: "none",
                                    display: "block",
                                    mb: 2.5,
                                    "&:hover": { color: palette.tan },
                                    transition: "color 0.2s",
                                }}
                            >
                                alu-cab.com ↗
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
                                {alucabPoints.map((pt) => (
                                    <Box key={pt} sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
                                        <CheckIcon sx={{ color: palette.tan, fontSize: 15, mt: "3px", flexShrink: 0 }} />
                                        <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.84rem", lineHeight: 1.6 }}>
                                            {pt}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
