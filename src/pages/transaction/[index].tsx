import React from "react";
import { useRouter } from "next/router";
// next
import Head from "next/head";
// @mui
import Layout from "@/layout";
// sections
import TransactionSection from "@/sections/transaction";

// ----------------------------------------------------------------------

export default function CheckoutPage() {
    const router = useRouter();
    const { index } = router.query;

  return (
    <Layout>
      <Head>
        <title>Transaction Page</title>
      </Head>
      <TransactionSection />
    </Layout>
  );
}
