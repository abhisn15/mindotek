'use client';

import { useState, useEffect, useRef } from 'react';
import { isMobile, isSlowConnection } from '@/lib/performance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  placeholderColor?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  quality = 85,
  objectFit = 'cover',
  onLoad,
  placeholderColor = '#f3f4f6',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState<string | null>(priority ? src : null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Skip intersection observer if priority
    if (priority) {
      setImageSrc(src);
      return;
    }

    // Use IntersectionObserver for lazy loading
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              setImageSrc(src);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: isMobile() ? '100px' : '200px', // Preload earlier on mobile
          threshold: 0.01,
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    } else {
      // Fallback for browsers without IntersectionObserver
      setImageSrc(src);
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Determine if we should use lower quality on slow connections
  const shouldOptimizeForSlowConnection = isSlowConnection();
  const effectiveQuality = shouldOptimizeForSlowConnection ? Math.min(quality, 70) : quality;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
        backgroundColor: placeholderColor,
      }}
    >
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: placeholderColor }}
        />
      )}

      {/* Actual image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          className={`w-full h-full transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            objectFit,
            objectPosition: 'center',
          }}
        />
      )}

      {/* Loading indicator for slow connections */}
      {!isLoaded && isInView && shouldOptimizeForSlowConnection && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

