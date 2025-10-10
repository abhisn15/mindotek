'use client';

import { useEffect, useRef, useCallback } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxBackground({ 
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxBackgroundProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const element = elementRef.current;

    if (element) {
      requestAnimationFrame(() => {
        const yPos = -(scrollTop * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    }
  }, [speed]);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  return (
    <div 
      ref={elementRef}
      className={`parallax-layer ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
