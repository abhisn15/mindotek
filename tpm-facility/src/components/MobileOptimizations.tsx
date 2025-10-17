'use client';

import { useEffect, useState } from 'react';
import { useMobileOptimization } from '@/hooks/useMobileOptimization';
import LazyImage from './LazyImage';

interface MobileOptimizationsProps {
  children: React.ReactNode;
}

export default function MobileOptimizations({ children }: MobileOptimizationsProps) {
  const {
    isMobile,
    isSlowConnection,
    prefersReducedMotion,
    connectionType,
    getOptimizedAnimationConfig,
    getOptimizedImageQuality,
    getOptimizedImageSizes,
  } = useMobileOptimization();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Apply mobile-specific optimizations
    if (isMobile) {
      // Reduce animation complexity
      const animationConfig = getOptimizedAnimationConfig();
      document.documentElement.style.setProperty(
        '--mobile-animation-duration',
        `${animationConfig.duration}s`
      );
      document.documentElement.style.setProperty(
        '--mobile-animation-easing',
        animationConfig.easing
      );

      // Optimize touch interactions
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });

      // Prevent zoom on double tap (iOS)
      let lastTouchEnd = 0;
      document.addEventListener('touchend', (event) => {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      }, false);
    }

    // Optimize for slow connections
    if (isSlowConnection) {
      // Reduce image quality
      const quality = getOptimizedImageQuality();
      document.documentElement.style.setProperty('--image-quality', quality.toString());
      
      // Disable non-essential animations
      document.documentElement.classList.add('slow-connection');
    }

    // Apply reduced motion preferences
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }

    setIsLoaded(true);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, isSlowConnection, prefersReducedMotion, getOptimizedAnimationConfig, getOptimizedImageQuality]);

  const handleTouchStart = (event: TouchEvent) => {
    // Add touch feedback
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('touchable')) {
      target.classList.add('touched');
    }
  };

  const handleTouchEnd = (event: TouchEvent) => {
    // Remove touch feedback
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('touchable')) {
      setTimeout(() => {
        target.classList.remove('touched');
      }, 150);
    }
  };

  if (!isLoaded) {
    return (
      <div className="mobile-optimization-loading">
        <div className="loading-skeleton" style={{ height: '100vh' }} />
      </div>
    );
  }

  return (
    <div 
      className={`mobile-optimizations ${isMobile ? 'mobile' : 'desktop'} ${isSlowConnection ? 'slow-connection' : ''} ${prefersReducedMotion ? 'reduced-motion' : ''}`}
    >
      {children}
    </div>
  );
}

// Mobile-optimized image component
export function MobileOptimizedImage({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) {
  const { getOptimizedImageQuality, getOptimizedImageSizes } = useMobileOptimization();
  
  return (
    <LazyImage
      src={src}
      alt={alt}
      quality={getOptimizedImageQuality()}
      sizes={getOptimizedImageSizes()}
      {...props}
    />
  );
}
