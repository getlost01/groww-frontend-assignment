import { ReactNode } from "react";
import Header from "@/components/custom-components/Header";
import { Public_Sans } from "next/font/google";

const primaryFont = Public_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className={`${primaryFont.className}`}>
      <Header />
      {children}
    </main>
  );
}
