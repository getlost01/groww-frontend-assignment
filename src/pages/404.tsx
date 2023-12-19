// @mui
import { Typography, Box, Button, Grid } from "@mui/material";
//
import Image from "@/components/standard-components/image/Image";
import Layout from "@/layout";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function NotFound() {
  const theme = useTheme();
  return (
    <Layout>
      <Box
        sx={{
          right: 0,
          bottom: 0,
          zIndex: 9998,
          width: "100%",
          height: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Image
          disabledEffect
          draggable={false}
          alt="empty content"
          src={"/assets/error-loading.svg"}
          sx={{ width: 375 }}
        />

        <Typography variant="h6" sx={{ m: 2 }}>
          Page Not Found
        </Typography>

        <Grid>
          <Button
            variant="contained"
            sx={{ m: 2 }}
            size="small"
            href="/checkout"
          >
            Back To Home
          </Button>
        </Grid>

      </Box>
    </Layout>
  );
}
