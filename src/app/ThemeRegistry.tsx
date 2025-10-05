"use client";

import * as React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import type { PropsWithChildren } from "react";

const unvoxPink = {
  50: "#ffe5f0",
  100: "#ffbfda",
  200: "#ff99c4",
  300: "#ff73ae",
  400: "#ff4d98",
  500: "#ff2e88",
  600: "#e22477",
  700: "#bf1c63",
  800: "#99164f",
  900: "#73103b",
};

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: unvoxPink,
        background: {
          body: "#000000",
          surface: "#0A0A0A",
          popup: "#0F0F10",
          level1: "#0A0A0A",
          level2: "#0E0E0F",
          level3: "#121214",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#C8C8C8",
        },
      },
    },
  },
  fontFamily: {
    body: "var(--font-geist-sans)",
    display: "var(--font-geist-sans)",
    code: "var(--font-geist-mono)",
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 9999,
          textTransform: "none",
          fontWeight: 600,
          paddingInline: theme.spacing(2.25),
        }),
      },
    },
  },
  defaultColorScheme: "dark",
});

export function ThemeRegistry({ children }: PropsWithChildren) {
  return (
    <CssVarsProvider
      theme={theme}
      defaultMode="dark"
      disableNestedContext
      disableTransitionOnChange={false}
    >
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}


