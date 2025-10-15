'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function EnhancedSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

          // Initialize Lenis
          const lenis = new Lenis();

    // Simple Lenis setup
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
