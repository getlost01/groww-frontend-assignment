import React from "react";
// @mui
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
// states
import useProductData from "@/zustand/productsData";

// ----------------------------------------------------------------------

export default function OrderSummary() {
  const { totalPrice } = useProductData();

  return (
    <>
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
    </>
  );
}
