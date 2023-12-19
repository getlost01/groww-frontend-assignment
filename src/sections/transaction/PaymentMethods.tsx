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
  Icon,
} from "@mui/material";
// components
import Iconify from "@/components/standard-components/iconify/Iconify";
import Image from "@/components/standard-components/image/Image";
// states
import usePaymentState from "@/zustand/paymentState";
import OrderSummary from "../checkout/OrderSummary";

// ----------------------------------------------------------------------

const status = ["SUCCESS", "FAILURE", "PENDING"];

const statusIllustration = [
  "/assets/success-transaction.gif",
  "/assets/failure-transaction.gif",
  "/assets/pending-transaction.gif",
];

const statusMessage = [
  "Yay! Your payment is successful, your order will be delivered soon",
  "Oh no! Your payment is failed, we will refund your money soon",
  "Sorry! Your payment is pending, we will notify you once it is done",
];

// ----------------------------------------------------------------------
export default function PaymentMethods() {
  const palette = useTheme().palette;

  const router = useRouter();

  const { paymentData, setPaymentData } = usePaymentState();

  const [paymentsMode, setPaymentsMode] = useState("");

  const [isTransactionDone, setIsTransactionDone] = useState(false);

  const handleClickPayment = () => {
    setPaymentData({
      ...paymentData,
      status: status[Math.floor(Math.random() * status.length)],
      paymentMode: paymentsMode,
      transactionTime: new Date().toLocaleString(),
    });
    setIsTransactionDone(true);
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

        {isTransactionDone ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={statusIllustration[status.indexOf(paymentData.status)]}
                alt={paymentData.status}
                color={palette.success.main}
                sx={{ width: 180 }}
                m={1.5}
              />
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "center" }}
                fontSize={14}
                fontWeight={600}
              >
                {
                  statusMessage[status.indexOf(paymentData.status)].split(
                    ",",
                  )[0]
                }
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  fontSize: 12,
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                {
                  statusMessage[status.indexOf(paymentData.status)].split(
                    ",",
                  )[1]
                }
              </Typography>
            </Box>

            <Divider sx={{ my: 1 }} />
            <Box
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontSize: 12,
                  pb: 1,
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                Payment Mode:{" "}
                <span style={{ fontWeight: 600 }}>
                  {paymentData.paymentMode}
                </span>
                <br />
                Timestamp:{" "}
                <span style={{ fontWeight: 600 }}>
                  {paymentData.transactionTime}
                </span>
              </Typography>
            </Box>
          </>
        ) : (
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
        )}

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
            sx={{
              borderRadius: 2,
              width: 180,
              fontSize: 12,
              display: isTransactionDone ? "none" : "block",
            }}
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
