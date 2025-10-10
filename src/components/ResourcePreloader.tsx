'use client';

import { useEffect } from 'react';

export default function ResourcePreloader() {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/assets/banner-hero.png',
      '/assets/logo-mindotek.webp',
      '/assets/icon.webp'
    ];

    // Preload critical fonts
    const criticalFonts = [
      // System fonts are already optimized
    ];

    // Preload critical CSS
    const criticalCSS = [
      // Inline critical CSS or preload external CSS
    ];

    // Function to preload resources
    const preloadResource = (href: string, as: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = as;
      link.href = href;
      
      // Add crossorigin for fonts
      if (as === 'font') {
        link.crossOrigin = 'anonymous';
      }
      
      document.head.appendChild(link);
    };

    // Preload critical images
    criticalImages.forEach(src => {
      preloadResource(src, 'image');
    });

    // Preload critical fonts
    criticalFonts.forEach(src => {
      preloadResource(src, 'font');
    });

    // Preload critical CSS
    criticalCSS.forEach(href => {
      preloadResource(href, 'style');
    });

    // Preconnect to external domains for faster loading
    const externalDomains = [
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://www.clarity.ms'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for additional domains
    const dnsPrefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

  }, []);

  return null;
}
