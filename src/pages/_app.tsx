import type { AppProps } from "next/app";
import React, { useEffect } from "react";
// mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
// custom theme
import useCustomTheme from "@/zustand/customTheme";

// ----------------------------------------------------------------------

export default function App({ Component, pageProps }: AppProps) {
  const { themeData, fetchTheme } = useCustomTheme();

  useEffect(() => {
    fetchTheme();
  }, []);

  // Custom theme for MUI
  const theme = createTheme({
    palette: {
      background: {
        default: themeData?.theme["--background"],
      },
      text: {
        primary: themeData?.theme["--foreground"],
      },
      primary: {
        main: themeData?.theme["--primary"],
      },
      secondary: {
        main: themeData?.theme["--primary-foreground"],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
