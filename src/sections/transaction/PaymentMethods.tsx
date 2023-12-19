import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
// components
import Iconify from "@/components/standard-components/iconify/Iconify";
import Image from "@/components/standard-components/image/Image";
// states
import usePaymentState from "@/zustand/paymentState";
import OrderSummary from "../checkout/OrderSummary";

// ----------------------------------------------------------------------

const status = ["SUCCESS", "FAILURE", "PENDING"];

// ----------------------------------------------------------------------
export default function PaymentMethods() {
  const palette = useTheme().palette;

  const router = useRouter();

  const { paymentData, setPaymentMode, setPaymentStatus } = usePaymentState();

  const [paymentsMode, setPaymentsMode] = useState("");

  const handleClickPayment = () => {
    setPaymentMode(paymentsMode);
    setPaymentStatus(status[Math.floor(Math.random() * status.length)]);
    router.push("/status");
  };

  return (
    <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
      <Card
        sx={{
          border: `1px solid ${palette.divider}`,
          boxShadow: "none",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ p: 1, pl: 2 }}
          fontSize={18}
          fontWeight={600}
        >
          Payment Methods
        </Typography>
        <Divider />

        <TableContainer>
          <Table>
            <TableBody>
              <TableRow
                sx={{ cursor: "pointer" }}
                hover
                onClick={() => setPaymentsMode("CARDS")}
              >
                <TableCell sx={{ p: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src="/assets/credit-card.svg"
                        alt="mastercard"
                        sx={{ width: 64, height: 64, mr: 1 }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Credit / Debit Card
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: 12 }}
                      >
                        **** **** **** 1234
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Iconify
                    icon={
                      paymentsMode === "CARDS"
                        ? "solar:verified-check-bold"
                        : "material-symbols:circle-outline"
                    }
                    color={
                      paymentsMode === "CARDS"
                        ? palette.primary.main
                        : palette.text.disabled
                    }
                    width={24}
                    height={24}
                  />
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ cursor: "pointer" }}
                hover
                onClick={() => setPaymentsMode("UPI")}
              >
                <TableCell sx={{ p: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src="/assets/upi-icon.svg"
                        alt="upi"
                        sx={{ width: 40, mr: 1 }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        UPI
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: 12 }}
                      >
                        hireme@groww
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Iconify
                    icon={
                      paymentsMode === "UPI"
                        ? "solar:verified-check-bold"
                        : "material-symbols:circle-outline"
                    }
                    color={
                      paymentsMode === "UPI"
                        ? palette.primary.main
                        : palette.text.disabled
                    }
                    width={24}
                    height={24}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ mb: 1 }} />

        <Typography variant="caption" sx={{ px: 2, fontSize: 14 }}>
          <span style={{ fontWeight: 600 }}> Transaction Id: </span>
          {paymentData.transactionId}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <OrderSummary />

        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            fullWidth
            variant="contained"
            size="medium"
            sx={{ borderRadius: 2, width: 180, fontSize: 12 }}
            disabled={paymentsMode === ""}
            onClick={handleClickPayment}
          >
            Confirm Payment
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
