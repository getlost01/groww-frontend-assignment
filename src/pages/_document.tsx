import { Html, Head, Main, NextScript } from "next/document";
import useCustomTheme from "@/zustand/customTheme";

export default function Document() {
  const { themeData } = useCustomTheme();
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="A checkout experience page assignment for Groww"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aagam Jain" />
        <link rel="icon" href={themeData.merchantLogo} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
