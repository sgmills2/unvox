"use client";

import * as React from "react";
import { keyframes } from "@emotion/react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Link from "next/link";

const scrollY = keyframes`
  0% { transform: translateY(0%); }
  16% { transform: translateY(-100%); }
  32% { transform: translateY(-200%); }
  48% { transform: translateY(-300%); }
  64% { transform: translateY(-400%); }
  80% { transform: translateY(-500%); }
  100% { transform: translateY(0%); }
`;

const rotatingSuffixes = [
  "Vox",
  "ited", // United
  "deterred", // Undeterred
  "iversal", // Universal
  "deniable", // Undeniable
  "bound", // Unbound
];

export function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 3, md: 4 },
        py: 2,
        backdropFilter: "saturate(120%) blur(8px)",
        backgroundColor: "rgba(0,0,0,0.4)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Link href="#top" style={{ textDecoration: "none" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
          <Typography
            level="h3"
            sx={{
              m: 0,
              fontWeight: 900,
              letterSpacing: -0.5,
            }}
          >
            <Box component="span" sx={{ color: "primary.500" }}>
              Un
            </Box>
          </Typography>
          <Box
            sx={{
              position: "relative",
              height: 36,
              overflow: "hidden",
              borderRadius: 0.75,
              px: 1.25,
              display: "flex",
              alignItems: "center",
              backgroundColor: "background.level1",
              border: "1px solid",
              borderColor: "primary.700",
              minWidth: { xs: 90, sm: 120 },
            }}
            aria-label="Un plus rotating words"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.25,
                position: "absolute",
                inset: 0,
                justifyContent: "flex-start",
                animation: `${scrollY} 10s cubic-bezier(0.65, 0, 0.35, 1) infinite`,
              }}
            >
              {rotatingSuffixes.map((suffix) => (
                <Typography
                  key={suffix}
                  level="h3"
                  sx={{
                    lineHeight: "36px",
                    fontWeight: 900,
                    letterSpacing: -0.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {suffix}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Link>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Button variant="solid" color="primary" component={Link} href="#donate">
          Donate
        </Button>
      </Box>
    </Box>
  );
}

export default Header;


