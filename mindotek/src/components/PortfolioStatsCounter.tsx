'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface PortfolioStatsCounterProps {
  metric: string;
  description: string;
  index: number;
}

export default function PortfolioStatsCounter({ metric, description, index }: PortfolioStatsCounterProps) {
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
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : { 
        opacity: 0, 
        y: 30,
        scale: 0.9
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="text-center"
    >
      <motion.p 
        className="text-4xl sm:text-5xl font-bold mb-2"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      >
        {displayValue}{suffix}
      </motion.p>
      <p className="text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}

