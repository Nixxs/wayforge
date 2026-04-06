import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { palette } from "../../theme";

const cards = [
    {
        tag: "THE LIMITATIONS",
        tagColor: palette.blue,
        heading: "Caravan: Bound by the Path.",
        image: "/caravan.jpg",
        body: "Comfortable, but inherently restrictive. Caravans tether you to the asphalt and crowded sites, creating a barrier between you and the true serenity of the wild Western frontier.",
        bg: palette.navy,
        headingColor: palette.light,
        bodyColor: palette.light,
        imageFilter: "grayscale(100%)",
    },
    {
        tag: "THE EVOLUTION",
        tagColor: palette.navy,
        heading: "Wayforge: The Perfect Balance.",
        image: "/the_evolution.jpg",
        body: "We provide a sanctuary on wheels. Experience the 'mini-caravan' interior—AC, lithium power, and permanent inside living—fused with the legendary spirit of the LandCruiser. Unrestricted. Unbound. All luxury.",
        bg: palette.blue,
        headingColor: "#ffffff",
        bodyColor: "rgba(255,255,255,0.72)",
        imageFilter: "none",
    },
    {
        tag: "THE INCONVENIENCE",
        tagColor: palette.blue,
        heading: "Tent/Swag: Freedom at a Cost.",
        image: "/tent.jpg",
        body: "Unbound access, but high friction. Fighting the elements and constant setup drains the peace from your exploration. You have the access, but lack the restful harmony of a true home.",
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
