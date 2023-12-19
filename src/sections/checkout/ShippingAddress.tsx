import React from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import Iconify from "@/components/standard-components/iconify";

// ----------------------------------------------------------------------

export default function ShippingAddress() {
  const palette = useTheme().palette;

  return (
    <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
      <Card
        sx={{
          border: `1px solid ${palette.divider}`,
          boxShadow: "none",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" fontSize={18} fontWeight={600} px={2} py={1}>
          Shipping Address
        </Typography>

        <Divider />

        <Box sx={{ my: 1, display: "flex" }} px={2} py={1}>
          <Box sx={{ mb: 1, width: 24 }}>
            <Box
              sx={{
                borderRadius: 1,
                width: 24,
                height: 24,
                backgroundColor: `${palette.primary.main}`,
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Iconify
                icon="mdi:map-marker"
                width={16}
                height={16}
                color={palette.background.default}
              />
            </Box>
          </Box>
          <Box sx={{ ml: 1 }} color={palette.text.secondary}>
            <Typography variant="body2" sx={{ fontSize: 14, fontWeight: 600 }}>
              Mr. Aagam Jain
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 13 }}>
              +91 93054 xxxxx
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 13 }}>
              1st Floor, Proms Complex, SBI Colony, 1A, Koramangala, 560034,
              Bangalore, India
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
