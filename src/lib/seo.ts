// SEO utility functions

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
}

export const generateMetadata = (config: SEOConfig) => {
  const baseUrl = 'https://mindotek.com';
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords || '',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: config.canonical || '/',
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: baseUrl,
      siteName: 'Mindotek',
      locale: 'en_ID',
      type: (config.ogType as any) || 'website',
      images: [
        {
          url: config.ogImage || '/assets/logo-mindotek.webp',
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: (config.twitterCard as any) || 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [config.ogImage || '/assets/logo-mindotek.webp'],
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
  };
};

// Generate structured data for different page types
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PT. Logamindo Teknologi Indonesia',
    alternateName: 'Mindotek',
    url: 'https://mindotek.com',
    logo: 'https://mindotek.com/assets/logo-mindotek.webp',
    description: 'Leading logistics and warehousing company in Indonesia',
    foundingDate: '2018',
    industry: 'Logistics and Supply Chain',
    areaServed: 'Indonesia',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Komp. Dutamas Fatmawati Blok B2/26, Jl. Fatmawati Cipete Utara',
      addressLocality: 'Jakarta Selatan',
      addressRegion: 'DKI Jakarta',
      postalCode: '12410',
      addressCountry: 'Indonesia',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-21-29305768',
      contactType: 'customer service',
      email: 'contact@mindotek.com',
      availableLanguage: ['Indonesian', 'English'],
    },
    sameAs: ['https://tpmgroup.id'],
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://mindotek.com${item.url}`,
    })),
  };
};

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  provider: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider,
    },
    areaServed: 'Indonesia',
  };
};

