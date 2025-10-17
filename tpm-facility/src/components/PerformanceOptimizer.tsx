'use client';

import { useEffect } from 'react';
import CacheOptimizer from './CacheOptimizer';
import { preloadCriticalResources, lazyLoadResources, getDeviceCapabilities } from '@/utils/performance';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  useEffect(() => {
    // Detect device capabilities
    const capabilities = getDeviceCapabilities();
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Lazy load non-critical resources
    lazyLoadResources();

    // Optimize animations for mobile
    const optimizeAnimations = () => {
      // Reduce motion for users who prefer it
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-iteration-count', '1');
      }

      // Pause animations when tab is not visible
      document.addEventListener('visibilitychange', () => {
        const animations = document.querySelectorAll('[data-animate]');
        animations.forEach((element) => {
          const htmlElement = element as HTMLElement;
          if (document.hidden) {
            htmlElement.style.animationPlayState = 'paused';
          } else {
            htmlElement.style.animationPlayState = 'running';
          }
        });
      });
    };

    // Optimize for modern browsers
    const optimizeForModernBrowsers = () => {
      // Add modern browser class
      if (capabilities.intersectionObserver && capabilities.webp) {
        document.documentElement.classList.add('modern-browser');
      }

      // Use native smooth scrolling if available
      if (CSS.supports('scroll-behavior', 'smooth')) {
        document.documentElement.style.scrollBehavior = 'smooth';
      }

      // Optimize for passive event listeners
      if (capabilities.passiveEvents) {
        document.documentElement.classList.add('passive-events');
      }
    };

    // Mobile-specific optimizations
    const optimizeForMobile = () => {
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        navigator.userAgent.toLowerCase()
      ) || window.innerWidth <= 768;

      if (isMobile) {
        document.documentElement.classList.add('mobile-device');
        
        // Reduce animation complexity on mobile
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
        
        // Optimize touch interactions
        document.addEventListener('touchstart', () => {}, { passive: true });
        document.addEventListener('touchmove', () => {}, { passive: true });
      }
    };

    // Initialize optimizations
    optimizeAnimations();
    optimizeForModernBrowsers();
    optimizeForMobile();

    // Service Worker registration for caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Performance monitoring
    if (process.env.NODE_ENV === 'development') {
      import('@/utils/performance').then(({ measureWebVitals }) => {
        measureWebVitals().then((metrics) => {
          console.log('Performance Metrics:', metrics);
        });
      });
    }

  }, []);

  return (
    <CacheOptimizer>
      {children}
    </CacheOptimizer>
  );
}
