'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';

interface PerformanceEntryWithProcessing extends PerformanceEntry {
  processingStart: number;
}

interface PerformanceEntryWithValue extends PerformanceEntry {
  value: number;
}

export function reportWebVitals(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // You can send to Google Analytics, Vercel Analytics, or any other service
    // Example: gtag('event', metric.name, { value: metric.value, event_category: 'Web Vitals' });
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Measure Core Web Vitals using the current API (v5.1.0)
    onCLS(reportWebVitals);    // Cumulative Layout Shift
    onFCP(reportWebVitals);    // First Contentful Paint
    onLCP(reportWebVitals);    // Largest Contentful Paint
    onTTFB(reportWebVitals);   // Time to First Byte
    onINP(reportWebVitals);    // Interaction to Next Paint (replaces FID)

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input' && 'processingStart' in entry) {
            console.log('FID:', (entry as PerformanceEntryWithProcessing).processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift' && 'value' in entry) {
            console.log('CLS:', (entry as PerformanceEntryWithValue).value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}
