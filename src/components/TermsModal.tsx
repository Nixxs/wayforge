import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { palette } from "../theme";

interface Props {
    open: boolean;
    onClose: () => void;
}

const sections = [
    {
        heading: "3. Accuracy of Information",
        body: "We endeavour to keep vehicle details, images, and specifications up to date. However, we do not warrant that all information on this site is complete, accurate, or current at all times. Vehicle fit-outs and availability are subject to change.",
    },
    {
        heading: "4. Intellectual Property",
        body: "All content on this site — including text, photography, and branding — is the property of Wayforge Campers and may not be reproduced without written permission.",
    },
    {
        heading: "5. Limitation of Liability",
        body: "To the extent permitted by law, Wayforge Campers is not liable for any loss or damage arising from use of this website or reliance on information published here. This site is provided on an 'as is' basis.",
    },
    {
        heading: "6. External Links",
        body: "This site links to third-party platforms including Camplify. We are not responsible for the content or practices of those sites.",
    },
    {
        heading: "7. Contact",
        body: "For questions about this website, reach out via the contact details listed on our Camplify profile.",
    },
];

export default function TermsModal({ open, onClose }: Props) {
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
                    maxHeight: "85vh",
                },
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
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
                        Wayforge Campers — wayforge.com.au
                    </Typography>
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 900,
                            fontSize: { xs: "1.4rem", md: "1.8rem" },
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            lineHeight: 1,
                        }}
                    >
                        Terms of Service
                    </Typography>
                </Box>
                <IconButton onClick={onClose} sx={{ color: "rgba(255,255,255,0.6)" }}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mx: { xs: 3, md: 5 } }} />

            <DialogContent sx={{ px: { xs: 3, md: 5 }, py: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {/* Section 1 */}
                    <Box>
                        <Typography
                            sx={{
                                color: palette.tan,
                                fontWeight: 700,
                                fontSize: "0.8rem",
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                mb: 0.75,
                            }}
                        >
                            1. About This Website
                        </Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.8 }}>
                            This website (wayforge.com.au) is operated by Wayforge Campers and provides information about our LandCruiser camper hire vehicles. The site is informational only — all bookings are processed through Camplify.
                        </Typography>
                    </Box>

                    {/* Section 2 — highlighted */}
                    <Box>
                        <Typography
                            sx={{
                                color: palette.tan,
                                fontWeight: 700,
                                fontSize: "0.8rem",
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                mb: 1,
                            }}
                        >
                            2. Booking Terms
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: "rgba(255,255,255,0.04)",
                                border: `1px solid rgba(255,255,255,0.08)`,
                                borderRadius: 1.5,
                                p: 2.5,
                            }}
                        >
                            <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.8 }}>
                                All hire bookings are made through{" "}
                                <Typography
                                    component="a"
                                    href="https://www.camplify.com.au/terms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: palette.tan, fontWeight: 600, textDecoration: "underline" }}
                                >
                                    Camplify
                                </Typography>{" "}
                                and are subject to their Terms of Service and platform policies. By proceeding with a booking
                                you agree to the{" "}
                                <Typography
                                    component="a"
                                    href="https://www.camplify.com.au/terms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: palette.tan, fontWeight: 600, textDecoration: "underline" }}
                                >
                                    Camplify Terms of Service
                                </Typography>{" "}
                                and the{" "}
                                <Typography
                                    component="a"
                                    href="https://terms.camplify.com.au/hirer-rules"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: palette.tan, fontWeight: 600, textDecoration: "underline" }}
                                >
                                    Hirer Rules
                                </Typography>
                                . Wayforge Campers is not a party to that contract and does not hold your payment.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Sections 3–7 */}
                    {sections.map((section) => (
                            <Box key={section.heading}>
                                <Typography
                                    sx={{
                                        color: palette.tan,
                                        fontWeight: 700,
                                        fontSize: "0.8rem",
                                        textTransform: "uppercase",
                                        letterSpacing: 1,
                                        mb: 0.75,
                                    }}
                                >
                                    {section.heading}
                                </Typography>
                                <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.8 }}>
                                    {section.body}
                                </Typography>
                            </Box>
                        ))}
                </Box>

                <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }} />

                <Typography sx={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", textAlign: "center" }}>
                    Last updated April 2025 · Wayforge Campers, Perth WA
                </Typography>
            </DialogContent>
        </Dialog>
    );
}
