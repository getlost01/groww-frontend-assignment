import { ReactNode } from "react";
import { Public_Sans } from "next/font/google";
// @mui
import { Box, Grid, CircularProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Components
import Header from "@/components/custom-components/Header";
import useCustomTheme from "@/zustand/customTheme";

// ----------------------------------------------------------------------

const primaryFont = Public_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

type Props = {
  children: ReactNode;
};

// ----------------------------------------------------------------------

export default function Layout({ children }: Props) {
  const theme = useTheme();

  const { isLoading } = useCustomTheme();

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            position: "fixed",
            zIndex: 9999,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <CircularProgress size={60} thickness={3} />
          <Typography variant="h6" sx={{ m: 2, color: "text.secondary" }}>
            Fetching Theme...
          </Typography>
        </Box>
      ) : (
        <Box
          className={`${primaryFont.className}`}
          bgcolor={theme.palette.background.default}
          color={theme.palette.text.primary}
        >
          {/* Header  */}
          <Header />

          {/* Content  */}
          <Grid
            container
            display="flex"
            justifyContent="center"
            sx={{ minHeight: "100vh" }}
          >
            <Grid item xs={12} sm={11} md={10} lg={8} p={1.5}>
              {children}
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
