import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { palette } from "../../theme";

const cards = [
    {
        tag: "4WD FREEDOM",
        tagColor: palette.blue,
        heading: "Go Further With True 4WD Capability.",
        image: "/reynolds-kennedy-ranges.jpg",
        points: [
            "Built on the legendary 70 Series platform.",
            "Confident off-road capability beyond the bitumen.",
            "Access quieter camps and more remote tracks.",
        ],
        bg: palette.navy,
        headingColor: palette.light,
        bodyColor: palette.light
    },
    {
        tag: "PREMIUM TOURING",
        tagColor: palette.navy,
        heading: "Wayforge: Go Further. Stay Better.",
        image: "/the_evolution.jpg",
        points: [
            "Premium interior with integrated living space.",
            "Self-contained with water, power, and storage.",
            "No towing, no setup, just drive and stay.",
        ],
        bg: palette.blue,
        headingColor: "#ffffff",
        bodyColor: "rgba(255,255,255,0.72)",
        imageFilter: "none",
    },
    {
        tag: "COMFORT IN CAMP",
        tagColor: palette.blue,
        heading: "Stay Comfortable Long After You Arrive.",
        image: "/reynolds-2.jpg",
        points: [
            "Refined interior designed for extended touring.",
            "Permanent sleeping space ready when you arrive.",
            "Integrated living setup for comfort at camp.",
        ],
        bg: palette.navy,
        headingColor: palette.light,
        bodyColor: palette.light
    },
];

export default function ComparisonSection() {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
                position: "relative",
                zIndex: 1,
                boxShadow: "0 10px 30px rgba(1,31,46,0.35)",
            }}
        >
            {cards.map((card) => (
                <Box
                    key={card.tag}
                    sx={{
                        backgroundColor: card.bg,
                        p: { xs: 4, lg: 5 },
                        display: "flex",
                        flexDirection: "column",
                        gap: 2.5,
                    }}
                >
                    {/* Tag */}
                    <Typography
                        sx={{
                            color: card.tagColor,
                            fontSize: "0.7rem",
                            fontWeight: 900,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                        }}
                    >
                        {card.tag}
                    </Typography>

                    {/* Heading */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: card.headingColor,
                            fontWeight: 800,
                            lineHeight: 1.25,
                            fontSize: { xs: "1.3rem", lg: "1.5rem" },
                        }}
                    >
                        {card.heading}
                    </Typography>

                    {/* Image */}
                    <Box
                        component="img"
                        src={card.image}
                        alt={card.heading}
                        sx={{
                            width: "100%",
                            aspectRatio: "16 / 9",
                            objectFit: "cover",
                            filter: card.imageFilter,
                        }}
                    />

                    {/* Body */}
                    <Box component="ul" sx={{ color: card.bodyColor, pl: 2.5, m: 0 }}>
                        {card.points.map((point) => (
                            <Typography
                                key={point}
                                component="li"
                                sx={{
                                    color: card.bodyColor,
                                    fontSize: "0.9rem",
                                    lineHeight: 1.75,
                                    mb: 0.5,
                                }}
                            >
                                {point}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
