import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
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
  Skeleton,
} from "@mui/material";
// components
import Iconify from "@/components/standard-components/iconify/Iconify";
import Image from "@/components/standard-components/image/Image";
// states
import useProductData from "@/zustand/productsData";
import usePaymentState from "@/zustand/paymentState";
import EmptyContent from "@/components/standard-components/empty-content/EmptyContent";
import OrderSummary from "./OrderSummary";

// ----------------------------------------------------------------------
export default function MyCart() {
  const palette = useTheme().palette;

  const router = useRouter();

  const {
    productsData,
    totalPrice,
    fetchProductData,
    isLoading,
    isEmptyCart,
    isErrorOccured,
  } = useProductData();

  const { intializeTransaction } = usePaymentState();

  const isApiCalled = useRef(false);

  useEffect(() => {
    if (!isApiCalled.current) {
      fetchProductData();
      isApiCalled.current = true;
    }
  }, []);

  const handleClickPayment = () => {
    const id = uuidv4().slice(0, 8);
    intializeTransaction(
      id,
      new Date().toISOString(),
      productsData,
      totalPrice,
    );
    router.push(`/transaction/${id}`);
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
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" fontSize={18} fontWeight={600}>
              My Cart
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 14, ml: 0.5, color: palette.text.secondary }}
            >
              ({productsData.length} items)
            </Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 2,
                fontSize: 12,
                textTransform: "none",
              }}
              startIcon={<Iconify icon="mdi:refresh" width={16} height={16} />}
              onClick={() => fetchProductData()}
            >
              Refresh
            </Button>
          </Box>
        </Box>
        <Divider />
        {isErrorOccured ? (
          <EmptyContent
            title="Something went wrong"
            img="/assets/error-loading.svg"
            description="It seem that API is not working. Please try again later."
          />
        ) : isLoading ? (
          <TableContainer>
            <Table>
              <TableBody>
                {Array.from(Array(4).keys()).map((_, index) => (
                  <TableRow key={index} hover>
                    <TableCell component="th" scope="row">
                      <Skeleton variant="rounded" height={64} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : isEmptyCart ? (
          <EmptyContent
            title="Your cart is empty"
            description="Looks like you haven't added any items to the cart yet."
          />
        ) : (
          <TableContainer>
            <Table>
              <TableBody>
                {productsData.map((product) => (
                  <TableRow key={product.id} hover>
                    <TableCell component="th" scope="row" sx={{ pr: 0.5 }}>
                      <Box
                        sx={{
                          py: 1,
                          px: 0.5,
                          width: 72,
                          height: 58,
                          display: "flex",
                          backgroundColor: "#fff",
                          borderRadius: 2,
                          border: `1px solid ${palette.divider}`,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.title}
                          sx={{ height: 48 }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box color={palette.text.secondary}>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: 14, fontWeight: 600 }}
                        >
                          {product.title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: 14 }}>
                          &#8377;{product.price}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        variant="body2"
                        sx={{
                          p: 1,
                          fontSize: 16,
                          alignSelf: "center",
                          justifySelf: "flex-end",
                          color: palette.primary.main,
                          fontWeight: 600,
                          "&:before": {
                            content: '"x"',
                            color: palette.primary.main,
                            fontWeight: 600,
                            fontSize: 14,
                          },
                        }}
                      >
                        {product.quantity}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Divider />

        <OrderSummary />

        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            fullWidth
            variant="contained"
            size="medium"
            disabled={isEmptyCart || isErrorOccured || isLoading}
            sx={{ borderRadius: 2, width: 150, fontSize: 12 }}
            onClick={handleClickPayment}
          >
            Go to Payment
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
