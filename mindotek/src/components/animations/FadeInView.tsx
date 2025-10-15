'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
  className?: string;
}

export default function FadeInView({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
  className = '',
}: FadeInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: 0.1,
    margin: "-50px"
  });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={isInView ? { 
        opacity: 1,
        y: 0,
        x: 0
      } : {
        opacity: 0,
        ...directionOffset[direction]
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

