import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { palette } from "../../theme";

const cards = [
    {
        tag: "THE LIMITATIONS",
        tagColor: palette.blue,
        heading: "Caravan: Locked to the Bitumen.",
        image: "/caravan.jpg",
        body: "Comfortable, but constrained. Caravans keep you tied to sealed roads, powered sites, crowded parks and towing - always close to access, never deep in it.",
        bg: palette.navy,
        headingColor: palette.light,
        bodyColor: palette.light,
        imageFilter: "grayscale(100%)",
    },
    {
        tag: "THE SOLUTION",
        tagColor: palette.navy,
        heading: "Wayforge: Go Further. Stay Better.",
        image: "/the_evolution.jpg",
        body: "A roof-converted 70 Series Landcruiser with a premium interior - fully self-contained with water, power, and a permanent living space. No towing. No setup. Just drive and stay.",
        bg: palette.blue,
        headingColor: "#ffffff",
        bodyColor: "rgba(255,255,255,0.72)",
        imageFilter: "none",
    },
    {
        tag: "THE INCONVENIENCE",
        tagColor: palette.blue,
        heading: "Tent/Swag: Freedom, Without Comfort.",
        image: "/tent.jpg",
        body: "Go anywhere, but pay for it every night. Setup, pack-down, weather exposure - the constant friction turns travel into work.",
        bg: palette.navy,
        headingColor: palette.light,
        bodyColor: palette.light,
        imageFilter: "grayscale(100%)",
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
                    <Typography
                        sx={{
                            color: card.bodyColor,
                            fontSize: "0.9rem",
                            lineHeight: 1.75,
                        }}
                    >
                        {card.body}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}
