import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandingkan Harga Indomaret dan Alfamart",
  description:
    "Ingin belanja di Indomaret atau alfamart? Dan ingin membandingkan harga diantara Indomaret dan Alfamart? Mari kesini dan belanaj dengan lebih hemat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
