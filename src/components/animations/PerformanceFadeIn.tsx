'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface PerformanceFadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
}

export default function PerformanceFadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.6
}: PerformanceFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-100px',
    amount: 0.1 
  });

  const directionVariants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: 60, opacity: 0 },
    right: { x: -60, opacity: 0 },
  };

  const initial = directionVariants[direction];
  const animate = { y: 0, x: 0, opacity: 1 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for better performance
        type: 'tween' // Use tween instead of spring for better performance
      }}
      className={className}
      style={{
        willChange: isInView ? 'auto' : 'transform, opacity' // Optimize for GPU
      }}
    >
      {children}
    </motion.div>
  );
}
