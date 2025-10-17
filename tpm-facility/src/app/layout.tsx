import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "TPM Group",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/assets/logo-tpm-text-white.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <PerformanceMonitor />
        
        {/* Service Worker for PWA (optional) */}
        <Script
          id="sw-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
