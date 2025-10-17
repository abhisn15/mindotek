// Performance monitoring and optimization utilities for mobile

interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating?: string;
  delta?: number;
  entries?: PerformanceEntry[];
}

export const reportWebVitals = (metric: WebVitalsMetric) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, metric.value);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    const body = JSON.stringify(metric);
    const url = '/api/analytics';

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else if (typeof fetch !== 'undefined') {
      fetch(url, { body, method: 'POST', keepalive: true }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  }
};

// Preload critical resources
export const preloadResources = () => {
  if (typeof window !== 'undefined') {
    // Preload critical images
    const criticalImages = [
      '/assets/logo-tpm-text-white.webp',
      '/assets/logo-tpm-text-black.webp',
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });
  }
};

// Preconnect to external domains
export const preconnectDomains = () => {
  if (typeof window !== 'undefined') {
    const domains = [
      'https://images.unsplash.com',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
    ];

    domains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }
};

// Optimize scroll performance with throttling
export const optimizeScroll = (callback: () => void, delay: number = 16) => {
  if (typeof window !== 'undefined') {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          callback();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }
};

// Lazy load images with IntersectionObserver
export const lazyLoadImages = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    document.querySelectorAll('img.lazy').forEach((img) => {
      imageObserver.observe(img);
    });

    return imageObserver;
  }
};

// Detect mobile device
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

// Detect slow connection
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false;
  }
  const connection = (navigator as any).connection;
  return connection?.effectiveType === 'slow-2g' || 
         connection?.effectiveType === '2g' ||
         connection?.saveData;
};

// Optimize animations for mobile
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Debounce function for resize events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Load script dynamically
export const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof document === 'undefined') {
      reject(new Error('Document is not defined'));
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
};

// Optimize touch events
export const optimizeTouchEvents = () => {
  if (typeof window !== 'undefined') {
    // Add passive event listeners for better scroll performance
    const passiveSupported = checkPassiveSupport();
    
    if (passiveSupported) {
      window.addEventListener('touchstart', () => {}, { passive: true });
      window.addEventListener('touchmove', () => {}, { passive: true });
      window.addEventListener('touchend', () => {}, { passive: true });
    }
  }
};

// Check if passive events are supported
function checkPassiveSupport(): boolean {
  let passiveSupported = false;

  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      },
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('test', null as any, options);
      window.removeEventListener('test', null as any, options);
    }
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
}

// Get viewport dimensions
export const getViewportDimensions = () => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }
  
  return {
    width: Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ),
    height: Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    ),
  };
};

// Prefetch route for faster navigation
export const prefetchRoute = (route: string) => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    document.head.appendChild(link);
  }
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Preconnect to external domains
  preconnectDomains();

  // Preload critical resources
  preloadResources();

  // Optimize touch events
  optimizeTouchEvents();

  // Lazy load images
  lazyLoadImages();

  // Log device info in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Performance] Mobile:', isMobile());
    console.log('[Performance] Slow Connection:', isSlowConnection());
    console.log('[Performance] Reduce Motion:', shouldReduceMotion());
  }
};

