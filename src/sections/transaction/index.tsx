import React from "react";
// @mui
import { Grid } from "@mui/material";
import PaymentMethods from "./PaymentMethods";
import ShippingAddress from '../checkout/ShippingAddress';
// ----------------------------------------------------------------------

export default function TransactionSection() {
  return (
    <Grid container spacing={3} my={1}>
      <PaymentMethods />
      <ShippingAddress />
    </Grid>
  );
}
