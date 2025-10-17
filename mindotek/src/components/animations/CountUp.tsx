'use client';

import { useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  noComma?: boolean;
}

export default function CountUp({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  noComma = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [motionValue, value, duration]);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest) => {
      if (ref.current) {
        const formattedValue = noComma
          ? Math.floor(latest).toString()
          : Math.floor(latest).toLocaleString();
        ref.current.textContent = prefix + formattedValue + suffix;
      }
    });

    return unsubscribe;
  }, [motionValue, prefix, suffix, noComma]);

  return <span ref={ref} className={className}>0</span>;
}