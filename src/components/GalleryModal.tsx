import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { palette } from "../theme";

export interface GalleryItem {
    label: string;
    subtitle?: string;
    gallery: string[];
}

interface GalleryModalProps {
    item: GalleryItem | null;
    onClose: () => void;
}

export default function GalleryModal({ item, onClose }: GalleryModalProps) {
    const [slideIndex, setSlideIndex] = useState(0);

    function handleOpen() {
        setSlideIndex(0);
    }

    function prev() {
        if (!item) return;
        setSlideIndex((i) => (i - 1 + item.gallery.length) % item.gallery.length);
    }

    function next() {
        if (!item) return;
        setSlideIndex((i) => (i + 1) % item.gallery.length);
    }

    return (
        <Modal open={!!item} onClose={onClose} onTransitionEnter={handleOpen}>
            <Box
                sx={{
                    position: "fixed",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(1,16,24,0.92)",
                    outline: "none",
                }}
                onClick={onClose}
            >
                <Box
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                        position: "relative",
                        width: { xs: "95vw", md: "80vw", lg: "70vw" },
                        maxHeight: "90vh",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: palette.darkNavy,
                        borderRadius: 2,
                        overflow: "hidden",
                    }}
                >
                    {/* Close */}
                    <IconButton
                        onClick={onClose}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            zIndex: 2,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.4)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.65)" },
                        }}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>

                    {/* Image */}
                    <Box sx={{ position: "relative", width: "100%", height: { xs: 320, sm: 520, md: 680 }, flexShrink: 0 }}>
                        {item && (
                            <Box
                                component="img"
                                src={item.gallery[slideIndex]}
                                alt={item.label}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    display: "block",
                                }}
                            />
                        )}

                        <IconButton
                            onClick={prev}
                            sx={{
                                position: "absolute",
                                left: 12,
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "white",
                                backgroundColor: "rgba(0,0,0,0.4)",
                                "&:hover": { backgroundColor: "rgba(0,0,0,0.65)" },
                            }}
                        >
                            <ArrowBackIosNewIcon fontSize="small" />
                        </IconButton>

                        <IconButton
                            onClick={next}
                            sx={{
                                position: "absolute",
                                right: 12,
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "white",
                                backgroundColor: "rgba(0,0,0,0.4)",
                                "&:hover": { backgroundColor: "rgba(0,0,0,0.65)" },
                            }}
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                    </Box>

                    {/* Caption + dots */}
                    <Box
                        sx={{
                            px: 3,
                            py: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 2,
                        }}
                    >
                        <Box>
                            <Typography sx={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>
                                {item?.label}
                            </Typography>
                            {item?.subtitle && (
                                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", mt: 0.25 }}>
                                    {item.subtitle}
                                </Typography>
                            )}
                        </Box>

                        <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
                            {item?.gallery.map((_, i) => (
                                <Box
                                    key={i}
                                    onClick={() => setSlideIndex(i)}
                                    sx={{
                                        width: i === slideIndex ? 20 : 8,
                                        height: 8,
                                        borderRadius: 4,
                                        backgroundColor: i === slideIndex ? "white" : "rgba(255,255,255,0.3)",
                                        cursor: "pointer",
                                        transition: "width 0.2s, background-color 0.2s",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}
