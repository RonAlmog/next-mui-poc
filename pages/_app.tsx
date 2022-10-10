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
  Stack,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { getStoredTheme, getThemeOptions, setStoredTheme } from "../src/theme";
import Sidebar from "../components/layout/Sidebar";

import Rightbar from "../components/layout/Rightbar";
import Feed from "../components/layout/Feed";
import Navbar from "../components/layout/Navbar";

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
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
