import type { Metadata, Viewport } from 'next';
import './globals.css';
import Script from 'next/script';
import { Gothic_A1 } from 'next/font/google';
// MobileMenu is used globally in the app
import ScrollToTop from '@/components/ScrollToTop';
import EnhancedSmoothScroll from '@/components/EnhancedSmoothScroll';

const gothicA1 = Gothic_A1({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gothic-a1',
});

export const metadata: Metadata = {
  title: 'Mindotek – PT. Logamindo Teknologi Indonesia | TPM Group Company Profile',
  description: 'PT. Logamindo Teknologi Indonesia (Mindotek) - Leading logistics and warehousing company in Indonesia. Member of TPM Group providing comprehensive supply chain solutions with 7 strategic locations nationwide.',
  keywords: 'logistics Indonesia, warehouse Jakarta, TPM Group, Mindotek, distribution services, warehousing solutions, supply chain management, Indonesian logistics company, cold storage Indonesia, transportation services',
  authors: [{ name: 'PT. Logamindo Teknologi Indonesia' }],
  creator: 'PT. Logamindo Teknologi Indonesia',
  publisher: 'TPM Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mindotek.com'),
  alternates: {
    canonical: '/',
  },
  other: {
    'Content-Security-Policy': "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com; connect-src 'self' https://maps.googleapis.com;",
  },
  openGraph: {
    title: 'Mindotek – PT. Logamindo Teknologi Indonesia | TPM Group',
    description: 'Leading logistics and warehousing company in Indonesia providing comprehensive supply chain solutions with 7 strategic locations nationwide.',
    url: 'https://mindotek.com',
    siteName: 'Mindotek',
    locale: 'en_ID',
    type: 'website',
    images: [
      {
        url: '/assets/logo-mindotek.webp',
        width: 1200,
        height: 630,
        alt: 'Mindotek Warehouse Facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindotek – PT. Logamindo Teknologi Indonesia | TPM Group',
    description: 'Leading logistics and warehousing company in Indonesia providing comprehensive supply chain solutions.',
    images: ['/assets/logo-mindotek.webp'],
    creator: '@tpmgroup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/icon.webp',
    apple: '/assets/logo-mindotek.webp',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ED3F27',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${gothicA1.variable} font-sans antialiased`}>
        {children}

        {/* Scroll to Top Button */}
        <ScrollToTop />

        {/* Enhanced Smooth Scroll */}
        <EnhancedSmoothScroll />

        {/* Service Worker Registration */}
        <Script
          id="sw-registration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />

        {/* Analytics Scripts - Uncomment and replace IDs when ready for production */}
        
        {/* Google Analytics - Replace GA_MEASUREMENT_ID with your actual ID */}
        {/* 
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        */}

        {/* Microsoft Clarity - Replace YOUR_CLARITY_ID with your actual ID */}
        {/* 
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>
        */}
      </body>
    </html>
  );
}