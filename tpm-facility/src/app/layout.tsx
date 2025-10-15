import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TPM Group - Facility Management Services | PT. Trimitra Putra Mandiri",
  description: "Leading facility management services provider in Indonesia since 2004. Offering security, cleaning, maintenance, and office support services with ISO certified quality standards.",
  keywords: "facility management, security services, cleaning services, property maintenance, office support, Indonesia, Jakarta, Surabaya",
  authors: [{ name: "PT. Trimitra Putra Mandiri" }],
  creator: "TPM Group",
  publisher: "PT. Trimitra Putra Mandiri",
  robots: "index, follow",
  openGraph: {
    title: "TPM Group - Facility Management Services",
    description: "Leading facility management services provider in Indonesia since 2004",
    url: "https://www.tpm-facility.com",
    siteName: "TPM Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TPM Group - Facility Management Services",
    description: "Leading facility management services provider in Indonesia since 2004",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
