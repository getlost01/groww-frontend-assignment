import React from "react";
// next
import Head from "next/head";
// @mui
import Layout from "@/layout";
// sections
import CheckoutSection from "@/sections/checkout";

// ----------------------------------------------------------------------

export default function CheckoutPage() {

  return (
    <Layout>
      <Head>
        <title>Checkout Page</title>
      </Head>

      <CheckoutSection />
    </Layout>
  );
}
