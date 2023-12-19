import React, { useEffect } from "react";
import { useRouter } from "next/router";
// next
import Head from "next/head";
// @mui
import { Card, Typography } from "@mui/material";
import Layout from "@/layout";
// sections
import TransactionSection from "@/sections/transaction";
import usePaymentState from "@/zustand/paymentState";

// ----------------------------------------------------------------------

export default function CheckoutPage() {
  const router = useRouter();
  const { push } = router;
  const { index } = router.query;

  const { paymentData } = usePaymentState();

  useEffect(() => {
    if (paymentData.transactionId !== index) {
      setTimeout(() => {
        push("/checkout");
      }, 10000);
    }
  }, [paymentData.transactionId]);

  return (
    <Layout>
      <Head>
        <title>Transaction Page</title>
      </Head>
      {paymentData.transactionId === index ? (
        <TransactionSection />
      ) : (
        <Card sx={{ p: 3, my: 5 }}>
          <Typography variant="h6" gutterBottom>
            Transaction Not Found!
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            It seems like you are trying to access a transaction that does not
            exist or you have refreshed the page.
            <br />
            Redirecting to checkout page in 10 seconds...
          </Typography>
        </Card>
      )}
    </Layout>
  );
}
