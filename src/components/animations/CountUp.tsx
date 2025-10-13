'use client';

import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  noComma?: boolean; // Option to disable comma formatting
}

export default function CountUp({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  noComma = false,
}: CountUpProps) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const formattedValue = noComma 
          ? Math.floor(latest).toString()
          : Math.floor(latest).toLocaleString();
        (ref.current as HTMLElement).textContent = 
          prefix + formattedValue + suffix;
      }
    });

    return unsubscribe;
  }, [springValue, prefix, suffix, noComma]);

  return <span ref={ref} className={className}>0</span>;
}

