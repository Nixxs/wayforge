import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { palette } from "../../theme";

const faqs = [
    {
        question: "How do I book?",
        answer: "All bookings are made through Camplify. Click the 'Book on Camplify' button on any vehicle card and you'll be taken directly to the listing where you can check availability, select dates, and confirm your booking.",
    },
    {
        question: "Is off-road insurance included?",
        answer: "Camplify provides a range of protection packages including off-road cover. We recommend selecting their Platinum protection plan for full peace of mind on unsealed roads and remote tracks. More remote off-road locations or tracks with water crossings are not covered by insurance, so always check the details of your route before heading out.",
    },
    {
        question: "Where are the handovers located?",
        answer: "Vehicle handovers are conducted in the Perth metro area. Exact pick-up and drop-off locations are confirmed at the time of booking. We offer flexible handover times to suit your travel plans.",
    },
    {
        question: "What's included in the vehicle fit-out?",
        answer: "Every build includes a fridge/freezer, solar system, lithium battery bank, full bedding, kitchen essentials, camp chairs and table, and a full water system. Each vehicle's specific features are listed on its card.",
    },
    {
        question: "Do I need a special licence to drive?",
        answer: "No special licence is required - a standard (Manual) Australian car licence or international driver's license covers all our vehicles. We do recommend experience driving 4WDs before heading off road.",
    },
    {
        question: "What happens if something breaks down?",
        answer: "All vehicles are maintained to a high standard before every hire. In the event of a mechanical issue, Camplify's 24/7 roadside assistance is available, and we're always reachable directly to help resolve any issues quickly.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    function toggle(i: number) {
        setOpenIndex((prev) => (prev === i ? null : i));
    }

    return (
        <Box id="faq" sx={{ 
            backgroundColor: palette.cream, 
            py: { xs: 6, md: 10 },
            boxShadow: "inset 0 10px 30px rgba(1,31,46,0.2)",
        }}>
            <Container maxWidth="md">
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
                    <Typography
                        component="h2"
                        sx={{
                            color: palette.navy,
                            fontWeight: 900,
                            textTransform: "uppercase",
                            lineHeight: 1,
                            fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
                            mb: 2,
                        }}
                    >
                        Plan your journey.
                    </Typography>
                    <Typography
                        sx={{
                            color: palette.tan,
                            fontSize: "0.95rem",
                            lineHeight: 1.75,
                        }}
                    >
                        The fine details for your path to serenity.
                    </Typography>
                </Box>

                {/* FAQ items */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {faqs.map((faq, i) => (
                        <Box
                            key={faq.question}
                            onClick={() => toggle(i)}
                            sx={{
                                backgroundColor: "#fdf6e3",
                                border: `1px solid rgba(1,57,84,0.10)`,
                                borderRadius: 1,
                                px: { xs: 3, md: 4 },
                                py: 3,
                                cursor: "pointer",
                                transition: "box-shadow 0.2s",
                                boxShadow: openIndex === i
                                    ? "0 4px 20px rgba(1,31,46,0.10)"
                                    : "0 1px 4px rgba(1,31,46,0.05)",
                                "&:hover": {
                                    boxShadow: "0 4px 20px rgba(1,31,46,0.10)",
                                },
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
                                <Typography
                                    sx={{
                                        color: palette.darkNavy,
                                        fontWeight: 700,
                                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {faq.question}
                                </Typography>
                                <Box sx={{ color: palette.navy, flexShrink: 0 }}>
                                    {openIndex === i ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                                </Box>
                            </Box>

                            <Collapse in={openIndex === i} timeout="auto" unmountOnExit>
                                <Typography
                                    sx={{
                                        color: "#666",
                                        fontSize: "0.9rem",
                                        lineHeight: 1.75,
                                        mt: 1.5,
                                    }}
                                >
                                    {faq.answer}
                                </Typography>
                            </Collapse>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
