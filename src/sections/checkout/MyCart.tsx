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
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "@/components/standard-components/image/Image";
import useProductData from "@/zustand/productsData";

// ----------------------------------------------------------------------
export default function MyCart() {
  const palette = useTheme().palette;

  const { productsData, fetchProductData } = useProductData();

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
        <Typography variant="h6" fontSize={18} fontWeight={600} px={2} py={1}>
          My Cart
        </Typography>
        <Divider />
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
                    {productsData.reduce((acc, product) => {
                      return acc + product.price * product.quantity;
                    }, 0)}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ p: 1, pl: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    Shipping
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 1, pr: 2 }} align="right">
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    &#8377;40
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ p: 1, pl: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    Tax
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 1, pr: 2 }} align="right">
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    &#8377;10
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
                    {productsData.reduce((acc, product) => {
                      return acc + product.price * product.quantity;
                    }, 0) + 50}
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
            sx={{ borderRadius: 2, width: 150, fontSize: 12 }}
          >
            Go to Payment
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
