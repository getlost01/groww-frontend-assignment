import type { AppProps } from "next/app";
import Cookies from "js-cookie";
import React, { useEffect, useRef } from "react";
// mui
import { ThemeProvider } from "@mui/material/styles";
// custom theme
import useCustomTheme from "@/zustand/customTheme";
import { getTheme } from "@/utils/colors";

// ----------------------------------------------------------------------

export default function App({ Component, pageProps }: AppProps) {
  const { themeData, fetchTheme } = useCustomTheme();
  const isApiCalled = useRef(false);

  useEffect(() => {
    if (Cookies.get("isCustomTheme") === "true" && !isApiCalled.current) {
      fetchTheme();
      isApiCalled.current = true;
    }
  }, []);

  const theme = getTheme(themeData);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
