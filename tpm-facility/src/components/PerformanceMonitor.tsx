'use client';

import { useEffect } from 'react';
import { initPerformanceOptimizations, reportWebVitals } from '@/lib/performance';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Initialize performance optimizations
    initPerformanceOptimizations();

    // Report Web Vitals if available
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // Monitor Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          reportWebVitals({
            id: 'LCP',
            name: 'LCP',
            value: lastEntry.startTime,
          });
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // Monitor First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            reportWebVitals({
              id: 'FID',
              name: 'FID',
              value: entry.processingStart - entry.startTime,
            });
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // Monitor Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
              reportWebVitals({
                id: 'CLS',
                name: 'CLS',
                value: clsValue,
              });
            }
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        // Silently fail if PerformanceObserver is not supported
        console.warn('Performance monitoring not available');
      }
    }
  }, []);

  return null; // This component doesn't render anything
}

