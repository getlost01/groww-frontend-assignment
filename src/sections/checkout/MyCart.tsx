import React from "react";
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
import axios from "axios";

// ----------------------------------------------------------------------
const products = [
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    quantity: 8,
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    quantity: 4,
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    quantity: 9,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    quantity: 3,
  },
  {
    id: 14,
    title: " Super Ultrawide Screen QLED",
    price: 999.99,
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    quantity: 8,
  },
];
// ----------------------------------------------------------------------

export default function MyCart() {
  const palette = useTheme().palette;

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
              {products.map((product) => (
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
                    {products.reduce((acc, product) => {
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
                    {products.reduce((acc, product) => {
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
