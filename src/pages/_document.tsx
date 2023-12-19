import { Html, Head, Main, NextScript } from "next/document";
import useCustomTheme from "@/zustand/customTheme";

export default function Document() {
  const { themeData } = useCustomTheme();
  
  return (
    <Html>
      <Head>

        <meta
          name="description"
          content="A checkout experience page assignment for Groww"
        />
        <meta name="author" content="Aagam Jain" />
        <link rel="icon" href={themeData.merchantLogo} />

      </Head>

      <body style={{ backgroundColor: themeData.theme["--background"], margin: 0 }}>
        <Main />
        <NextScript />
      </body>

    </Html>
  );
}
