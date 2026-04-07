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
    series: "VDJ78 LandCruiser Troop Carrier",

    intro:
        "Reynolds is a 2017 VDJ78 Troopy, purpose-built for off-grid family travel. The Alu-Cab Hercules roof conversion creates a full-height living space with a permanent bed above, while a premium interior fitout below provides seating, storage, and a convertible sleeping area for a child. With integrated power, water, and shade systems, it’s a complete touring setup — no towing, no setup, just drive and stay. Perfect for a family getaway.",

    specs: [
        ["Platform", "2017 VDJ78 LandCruiser Troop Carrier"],
        ["Engine", "4.5L V8 Turbo Diesel (1VD-FTV)"],
        ["Transmission", "Manual"],
        ["Fuel", "Dual tanks (180L total)"],
        ["Seating", "2 front seats - 1 rear seat (suitable for adult or child)"],
        ["Roof Conversion", "Alu-Cab Hercules (full-height)"],
        ["Sleeping", "Queen bed (roof) + child bed (convertible interior, ~140cm)"],
        ["Power", "200Ah lithium battery"],
        ["Fridge", "85L fridge/freezer"],
        ["Water", "55L tank + filtered drinking tap"],
        ["Hot Water", "Heat exchanger system (external outlet)"],
        ["External Access", "Utility panel for water/shower connection"],
        ["Kitchen", "Full pull-out kitchen drawer with integrated stove + complete cookware/utensils"],
        ["Interior", "Premium fitout with couch/bed, desk, lighting, and storage"],
        ["Climate", "Factory air conditioning (cab)"],
        ["Awning", "270° awning + shower awning"],
        ["Outdoor", "Camp chairs & table included"],
        ["Recovery", "Maxtrax recovery boards"],
        ["Accessories", "Maxtrax table (external mount)"],
        ["Comms", "CB radio"],
        ["Audio", "Bluetooth audio (BYO navigation)"],
    ],
};

const nolan = {
    name: "Nolan",
    subtitle: "Adventure Rig",
    series: "VDJ78 LandCruiser Troop Carrier",

    intro:
        "Nolan is a 2014 VDJ78 Troopy, purpose-built for two people to travel further and stay longer. The Headspace Campers roof conversion creates a full-height living space with a permanent bed above, while a premium interior fitout below provides a larger lounge area, expanded storage, and a full-length sleeping setup. With increased water capacity, dual fuel tanks, and integrated off-grid systems, it’s a complete touring setup.",

    specs: [
        ["Platform", "2014 VDJ78 LandCruiser Troop Carrier (pre-DPF)"],
        ["Engine", "4.5L V8 Turbo Diesel (1VD-FTV)"],
        ["Transmission", "Manual"],
        ["Fuel", "Dual tanks (180L total)"],
        ["Seating", "2 front seats"],
        ["Roof Conversion", "Headspace Campers premium conversion"],
        ["Sleeping", "Queen bed (roof) + full-length interior bed"],
        ["Power", "200Ah lithium battery"],
        ["Fridge", "85L fridge/freezer"],
        ["Water", "90L tank + filtered drinking tap"],
        ["External Access", "Utility panel for water/shower connection"],
        ["Kitchen", "Full pull-out kitchen drawer with integrated stove + complete cookware/utensils"],
        ["Interior", "Premium fitout with larger couch/bed, desk, lighting, and expanded storage"],
        ["Climate", "Factory air conditioning (cab)"],
        ["Awning", "270° awning"],
        ["Outdoor", "Camp chairs & table included"],
        ["Recovery", "Maxtrax recovery boards"],
        ["Accessories", "Maxtrax table (external mount)"],
        ["Comms", "CB radio"],
        ["Audio", "Bluetooth audio (BYO navigation)"],
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
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <VehicleColumn vehicle={reynolds} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box sx={{ display: { xs: "block", sm: "none" }, mb: 3 }}>
                            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
                        </Box>
                        <VehicleColumn vehicle={nolan} />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
