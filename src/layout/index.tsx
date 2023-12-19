import { ReactNode } from "react";
import { Public_Sans } from "next/font/google";
// @mui
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Components
import Header from "@/components/custom-components/Header";

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

  return (
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
        <Grid item xs={12} sm={10} md={9} lg={8} p={1.5}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
