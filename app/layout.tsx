import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aether Digital",
  description: "Check Out Our Company Profile",
};

const inter = Inter({
  subsets: ["latin"],
});

const Aadhunik = localFont({
  src: [
    {
      path: "./fonts/Aadhunik.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-aadhunik",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
