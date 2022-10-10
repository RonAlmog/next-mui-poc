import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment, useEffect, useMemo, useState } from "react";
// import Header from "../components/layout/header";
import {
  Badge,
  Box,
  createTheme,
  CssBaseline,
  Divider,
  PaletteMode,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { getStoredTheme, getThemeOptions, setStoredTheme } from "../src/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("dark"); // default is dark mode
  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  // update the theme only if changed
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
