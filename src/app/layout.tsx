import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import StaggeredMenu from '@/components/StaggeredMenu';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
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
  openGraph: {
    title: 'Mindotek – PT. Logamindo Teknologi Indonesia | TPM Group',
    description: 'Leading logistics and warehousing company in Indonesia providing comprehensive supply chain solutions with 7 strategic locations nationwide.',
    url: 'https://mindotek.com',
    siteName: 'Mindotek',
    locale: 'en_ID',
    type: 'website',
    images: [
      {
        url: '/assets/banner-hero.png',
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
    images: ['/assets/banner-hero.png'],
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
  themeColor: '#ED3F27',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/', index: 1 },
  { label: 'Company', ariaLabel: 'Learn about our company', link: '/#company', index: 2 },
  { label: 'Services', ariaLabel: 'View our services', link: '/services', index: 3 },
  { label: 'Vision', ariaLabel: 'Our vision and mission', link: '/#vision-mission', index: 4 },
  { label: 'Locations', ariaLabel: 'Our warehouse locations', link: '/warehouse-locations', index: 5 },
  { label: 'WMS', ariaLabel: 'Warehouse Management System', link: '/wms-system', index: 6 },
  { label: 'Contact', ariaLabel: 'Get in touch with us', link: '/#contact', index: 7 }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}

        {/* Staggered Mobile Menu */}
        <div className="block md:hidden fixed z-[9999] pointer-events-none">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            // displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#1f2937"
            openMenuButtonColor="#ed3f27"
            changeMenuColorOnOpen={true}
            colors={['#B19EEF', '#5227FF']}
            logoUrl="/assets/logo-mindotek.webp"
            accentColor="#ff6b6b"
            isFixed={true}
            className="pointer-events-auto"
          />
        </div>

        {/* Google Analytics */}
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

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>
      </body>
    </html>
  );
}