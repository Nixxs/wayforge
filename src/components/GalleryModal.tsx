import { useEffect, useState, type KeyboardEvent } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { palette } from "../theme";
import { imageAlt } from "../imageAlt";
import { imageSources, type ImageName } from "../utils/images";

export interface GalleryItem {
    label: string;
    subtitle?: string;
    gallery: readonly ImageName[];
    startIndex?: number;
}

interface GalleryModalProps {
    item: GalleryItem | null;
    onClose: () => void;
}

// Matches the modal width below, so the browser picks a variant close to the displayed size
const GALLERY_SIZES = "(min-width: 1200px) 70vw, (min-width: 900px) 80vw, 95vw";
const STAGE_HEIGHT = { xs: "62vh", md: "76vh" };

const visuallyHidden = {
    position: "absolute",
    width: 1,
    height: 1,
    m: "-1px",
    p: 0,
    border: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    whiteSpace: "nowrap",
} as const;

const navButtonSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    "&:hover": { backgroundColor: "rgba(0,0,0,0.65)" },
} as const;

function preload(name: ImageName) {
    const img = new Image();
    img.sizes = GALLERY_SIZES;
    img.srcset = imageSources(name).srcSet;
}

export default function GalleryModal({ item, onClose }: GalleryModalProps) {
    const [slideIndex, setSlideIndex] = useState(item?.startIndex ?? 0);
    const [shownItem, setShownItem] = useState(item);

    // Start each newly opened gallery at its requested photo (adjusting state during render,
    // as React recommends for resetting state when a prop changes)
    if (item !== shownItem) {
        setShownItem(item);
        setSlideIndex(item?.startIndex ?? 0);
    }
    const count = item?.gallery.length ?? 0;

    // Warm the neighbouring slides so prev/next don't wait on a fresh download
    useEffect(() => {
        if (!item || count < 2) return;
        preload(item.gallery[(slideIndex + 1) % count]);
        preload(item.gallery[(slideIndex - 1 + count) % count]);
    }, [item, slideIndex, count]);

    function prev() {
        if (!item) return;
        setSlideIndex((i) => (i - 1 + count) % count);
    }

    function next() {
        if (!item) return;
        setSlideIndex((i) => (i + 1) % count);
    }

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
    }

    const slide = item ? imageSources(item.gallery[slideIndex]) : null;

    return (
        <Modal open={!!item} onClose={onClose} aria-labelledby="gallery-title">
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
                onKeyDown={handleKeyDown}
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
                        aria-label="Close gallery"
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

                    {/* Image — fixed-height stage so portrait/landscape slides don't shift the controls */}
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: STAGE_HEIGHT,
                            backgroundColor: "rgba(0,0,0,0.35)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            overflow: "hidden",
                        }}
                    >
                        {item && slide && (
                            <Box
                                component="img"
                                src={slide.src}
                                srcSet={slide.srcSet}
                                sizes={GALLERY_SIZES}
                                alt={imageAlt[item.gallery[slideIndex]] ?? `${item.label} — photo ${slideIndex + 1} of ${count}`}
                                sx={{
                                    display: "block",
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    width: "auto",
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                        )}

                        <IconButton onClick={prev} aria-label="Previous photo" sx={{ ...navButtonSx, left: 12 }}>
                            <ArrowBackIosNewIcon fontSize="small" />
                        </IconButton>

                        <IconButton onClick={next} aria-label="Next photo" sx={{ ...navButtonSx, right: 12 }}>
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
                            <Typography id="gallery-title" sx={{ color: "white", fontWeight: 700, fontSize: "1rem" }}>
                                {item?.label}
                            </Typography>
                            {item?.subtitle && (
                                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", mt: 0.25 }}>
                                    {item.subtitle}
                                </Typography>
                            )}
                            <Box sx={visuallyHidden} aria-live="polite">
                                {item && `Photo ${slideIndex + 1} of ${count}`}
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end" }}>
                            {item?.gallery.map((_, i) => (
                                <Box
                                    key={i}
                                    component="button"
                                    type="button"
                                    onClick={() => setSlideIndex(i)}
                                    aria-label={`Show photo ${i + 1}`}
                                    aria-current={i === slideIndex ? "true" : undefined}
                                    sx={{
                                        p: "8px 4px",
                                        border: 0,
                                        background: "none",
                                        cursor: "pointer",
                                        display: "flex",
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            width: i === slideIndex ? 20 : 8,
                                            height: 8,
                                            borderRadius: 4,
                                            backgroundColor: i === slideIndex ? "white" : "rgba(255,255,255,0.3)",
                                            transition: "width 0.2s, background-color 0.2s",
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}
