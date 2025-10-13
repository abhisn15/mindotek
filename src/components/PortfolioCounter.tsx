'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface PortfolioCounterProps {
  metric: string;
  description: string;
  index: number;
}

export default function PortfolioCounter({ metric, description, index }: PortfolioCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Extract number and text from metric (e.g., "95%" -> 95 and "%")
  const numericValue = parseFloat(metric.replace(/[^0-9.]/g, ''));
  const suffix = metric.replace(/[0-9.]/g, '');
  
  const count = useMotionValue(0);
  const rounded = useSpring(count, {
    damping: 50,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(numericValue);
    }
  }, [isInView, numericValue, count]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="relative text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 group"
    >
      <motion.p 
        className="text-5xl sm:text-6xl font-bold mb-4"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15 + 0.2,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
        {displayValue}{suffix}
      </motion.p>
      <p className="text-lg text-red-100 group-hover:text-white transition-colors duration-300">
        {description}
      </p>
      
      {/* Decorative element */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.1) 0%, transparent 70%)'
        }}
      />
    </motion.div>
  );
}

