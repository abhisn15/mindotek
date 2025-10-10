'use client';

import { useEffect, useRef } from 'react';

export default function HeroParallaxBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      
      // Background image parallax - moves slower than scroll
      if (backgroundRef.current) {
        const yPos = scrollTop * 0.3; // Slower movement for smooth effect
        backgroundRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      // Overlay parallax - even slower
      if (overlayRef.current) {
        const yPos = scrollTop * 0.1;
        overlayRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    // Throttled scroll listener for better performance
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
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background image with parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ 
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center brightness-80"
          style={{
            backgroundImage: "url('/assets/banner-hero.webp')",
            backgroundAttachment: 'scroll', // Ensure it can move
          }}
        />
      </div>

      {/* Overlay with subtle parallax */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{ 
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        {/* Vertical gradient overlay for elegant effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
      </div>

      {/* Static floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-10 w-32 h-32 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </div>
  );
}
