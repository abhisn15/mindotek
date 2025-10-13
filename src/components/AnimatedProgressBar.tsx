'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedProgressBarProps {
  percentage?: number;
  label: string;
  index: number;
}

export default function AnimatedProgressBar({ percentage = 95, label, index }: AnimatedProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
          {label}
        </span>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="text-red-600 font-bold text-lg"
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100" />
        
        {/* Animated progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative h-full rounded-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 shadow-lg"
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, delay: index * 0.1 + 1, ease: 'easeInOut' }}
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 blur-sm opacity-50" />
        </motion.div>
      </div>
    </motion.div>
  );
}

