'use client';

import { useEffect, useRef, useCallback } from 'react';

interface SimpleParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function SimpleParallax({ 
  children, 
  speed = 0.5, 
  className = '' 
}: SimpleParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const element = elementRef.current;

    if (element) {
      const yPos = scrollTop * speed;
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
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
      style={{ 
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      {children}
    </div>
  );
}
