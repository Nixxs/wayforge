
import { Box, Typography } from "@mui/material";

const palette = {
  navy: "#013954",
  blue: "#5B82A5",
  tan: "#A49575",
  light: "#D2D9D2",
};

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: palette.navy,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/Wayforge_Logo_White.png"
        alt="Wayforge"
        sx={{
          width: { xs: 200, sm: 280, md: 340 },
          mb: 6,
        }}
      />

      {/* Divider line */}
      <Box
        sx={{
          width: 80,
          height: 3,
          backgroundColor: palette.tan,
          borderRadius: 2,
          mb: 5,
        }}
      />

      {/* Heading */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: palette.light,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          mb: 2,
          fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.8rem" },
        }}
      >
        Under Construction
      </Typography>

      {/* Subheading */}
      <Typography
        variant="h6"
        sx={{
          color: palette.blue,
          fontWeight: 400,
          letterSpacing: "0.06em",
          maxWidth: 520,
          lineHeight: 1.7,
          mb: 6,
          fontSize: { xs: "0.95rem", sm: "1.1rem" },
        }}
      >
        Your next adventure rig is in the works. Check back soon.
      </Typography>

      {/* Animated progress bar */}
      <Box
        sx={{
          width: { xs: 200, sm: 300 },
          height: 4,
          backgroundColor: "rgba(91,130,165,0.2)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "40%",
            backgroundColor: palette.tan,
            borderRadius: 2,
            animation: "slide 2s ease-in-out infinite",
            "@keyframes slide": {
              "0%": { transform: "translateX(-100%)" },
              "100%": { transform: "translateX(350%)" },
            },
          }}
        />
      </Box>
    </Box>
  );
}

