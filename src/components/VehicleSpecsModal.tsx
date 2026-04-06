import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { palette } from "../theme";

interface Props {
    open: boolean;
    onClose: () => void;
}

const reynolds = {
    name: "Reynolds",
    subtitle: "Family Cruiser",
    series: "79 Series LandCruiser Wagon",
    intro:
        "Reynolds is built for families who refuse to compromise. The 79 Series wagon body gives you room to move, while the Alu-Cab Hercules roof conversion transforms the rear into a full-height living and sleeping space. Dual batteries, a serious fridge, and climate control mean you can park up anywhere and be genuinely comfortable.",
    specs: [
        ["Body", "79 Series LandCruiser Wagon"],
        ["Engine", "4.5L V8 Turbo Diesel (1VD-FTV)"],
        ["Transmission", "Manual"],
        ["Roof Conversion", "Alu-Cab Hercules"],
        ["Sleeping", "Queen bed (adults) + child berth"],
        ["Fridge", "85L compressor fridge/freezer"],
        ["Solar", "200W rooftop solar"],
        ["Battery", "120Ah lithium house battery"],
        ["Water", "60L fresh water tank"],
        ["Air Con", "Factory air conditioning"],
        ["Navigation", "GPS navigation system"],
        ["Recovery", "Rated recovery points"],
    ],
};

const nolan = {
    name: "Nolan",
    subtitle: "Adventure Rig",
    series: "78 Series LandCruiser Troop Carrier",
    intro:
        "Nolan is the more serious off-road machine of the two. The 78 Series Troopy body is legendary for its durability on rough tracks, and the Headspace roof conversion turns it into a proper touring rig. The modular rear fit-out keeps weight central, while the extended range tank and 12V system mean you can push further and stay longer.",
    specs: [
        ["Body", "78 Series LandCruiser Troop Carrier"],
        ["Engine", "4.5L V8 Turbo Diesel (1VD-FTV)"],
        ["Transmission", "Manual"],
        ["Roof Conversion", "Headspace Campers"],
        ["Sleeping", "Queen bed (2 adults)"],
        ["Fridge", "75L compressor fridge/freezer"],
        ["Solar", "200W rooftop solar"],
        ["Battery", "120Ah lithium house battery"],
        ["Water", "60L fresh water tank"],
        ["Long Range", "Extended fuel tank"],
        ["Recovery", "Full recovery kit included"],
        ["Shower", "Outdoor shower system"],
    ],
};

function VehicleColumn({ vehicle }: { vehicle: typeof reynolds }) {
    return (
        <Box sx={{ height: "100%" }}>
            {/* Vehicle name */}
            <Box sx={{ mb: 3 }}>
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
                    {vehicle.series}
                </Typography>
                <Typography
                    sx={{
                        color: "white",
                        fontWeight: 900,
                        fontSize: { xs: "1.6rem", md: "2rem" },
                        textTransform: "uppercase",
                        lineHeight: 1,
                        mb: 0.5,
                    }}
                >
                    {vehicle.name}
                </Typography>
                <Typography
                    sx={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: "0.8rem",
                        letterSpacing: 2,
                        textTransform: "uppercase",
                    }}
                >
                    {vehicle.subtitle}
                </Typography>
            </Box>

            {/* Intro */}
            <Typography
                sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.88rem",
                    lineHeight: 1.8,
                    mb: 3,
                }}
            >
                {vehicle.intro}
            </Typography>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2.5 }} />

            {/* Specs */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {vehicle.specs.map(([key, val], i) => (
                    <Box
                        key={key}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                            gap: 2,
                            py: 1.25,
                            borderBottom: i < vehicle.specs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.35)",
                                fontSize: "0.72rem",
                                letterSpacing: 1.5,
                                textTransform: "uppercase",
                                flexShrink: 0,
                            }}
                        >
                            {key}
                        </Typography>
                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.8)",
                                fontSize: "0.84rem",
                                textAlign: "right",
                            }}
                        >
                            {val}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default function VehicleSpecsModal({ open, onClose }: Props) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
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
                        Wayforge Fleet
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
                        Vehicle Specifications
                    </Typography>
                </Box>
                <IconButton onClick={onClose} sx={{ color: "rgba(255,255,255,0.6)", mt: 0.5 }}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mx: { xs: 3, md: 5 } }} />

            <DialogContent sx={{ px: { xs: 2, md: 5 }, py: 3 }}>
                <Grid container spacing={3} sx={{ flexWrap: "nowrap" }}>
                    <Grid size={6}>
                        <VehicleColumn vehicle={reynolds} />
                    </Grid>
                    <Grid size="auto" sx={{ display: "flex", justifyContent: "center" }}>
                        <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
                    </Grid>
                    <Grid size={6}>
                        <VehicleColumn vehicle={nolan} />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
