import React, { useEffect, useRef } from "react";
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

import Iconify from "@/components/standard-components/iconify/Iconify";
import Image from "@/components/standard-components/image/Image";
import useProductData from "@/zustand/productsData";
import EmptyContent from "@/components/standard-components/empty-content/EmptyContent";

// ----------------------------------------------------------------------
export default function MyCart() {
  const palette = useTheme().palette;

  const {
    productsData,
    totalPrice,
    fetchProductData,
    isLoading,
    isEmptyCart,
    isErrorOccured,
  } = useProductData();

  const isApiCalled = useRef(false);

  useEffect(() => {
    if (!isApiCalled.current) {
      fetchProductData();
      isApiCalled.current = true;
    }
  }, []);

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

        <Typography
          variant="subtitle1"
          fontSize={16}
          fontWeight={600}
          px={2}
          py={1}
        >
          Order Summary
        </Typography>

        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ p: 1, pl: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, fontWeight: 600 }}
                  >
                    Subtotal
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 1, pr: 2 }} align="right">
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, fontWeight: 600 }}
                  >
                    &#8377;
                    {totalPrice}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ p: 1, pl: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    Shipping (Fixed Charge)
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 1, pr: 2 }} align="right">
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    &#8377;{totalPrice > 0 ? 40 : 0}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ p: 1, pl: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    Tax (5% GST)
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 1, pr: 2 }} align="right">
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    &#8377;{(totalPrice * 0.05).toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ p: 1, pl: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, fontWeight: 600 }}
                  >
                    Total
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 1, pr: 2 }} align="right">
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, fontWeight: 600 }}
                  >
                    &#8377;
                    {(
                      totalPrice +
                      totalPrice * 0.05 +
                      (totalPrice > 0 ? 40 : 0)
                    ).toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            fullWidth
            variant="contained"
            size="medium"
            disabled={isEmptyCart || isErrorOccured || isLoading}
            sx={{ borderRadius: 2, width: 150, fontSize: 12 }}
          >
            Go to Payment
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
