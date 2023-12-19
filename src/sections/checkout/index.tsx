import React from "react";
// @mui
import { Grid } from "@mui/material";
import MyCart from "./MyCart";
import ShippingAddress from "./ShippingAddress";
// ----------------------------------------------------------------------

export default function CheckoutSection() {
  return (
    <Grid container spacing={3} my={1}>
      <MyCart />
      <ShippingAddress />
    </Grid>
  );
}
