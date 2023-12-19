import React, { useEffect } from "react";
import { useRouter } from "next/router";
// next
import Head from "next/head";

// ----------------------------------------------------------------------

export default function HomePage() {
  const { push } = useRouter();

  useEffect(() => {
    push("/checkout");
  }, [push]);

  return (
      <Head>
        <title>Home</title>
      </Head>
  );
}
