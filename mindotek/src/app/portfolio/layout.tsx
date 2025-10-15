import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Innovative Solutions | Mindotek',
  description: 'Explore Mindotek\'s portfolio of successful projects and innovative logistics solutions. From Warehouse Management System (WMS) to comprehensive supply chain implementations across Indonesia.',
  keywords: 'Mindotek portfolio, WMS projects, logistics solutions, warehouse management projects, supply chain implementation, Indonesian logistics projects',
  openGraph: {
    title: 'Portfolio - Innovative Solutions | Mindotek',
    description: 'Explore Mindotek\'s portfolio of successful projects and innovative logistics solutions.',
    url: 'https://mindotek.com/portfolio',
    siteName: 'Mindotek',
    images: [
      {
        url: '/assets/portfolio/wms-homepage.webp',
        width: 1200,
        height: 630,
        alt: 'Mindotek Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Innovative Solutions | Mindotek',
    description: 'Explore Mindotek\'s portfolio of successful projects and innovative logistics solutions.',
    images: ['/assets/portfolio/wms-homepage.webp'],
  },
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

