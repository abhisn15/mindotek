'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from './animations/CountUp';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
}

interface StatsCounterProps {
  stats: Stat[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          {stat.icon && (
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
            </div>
          )}
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            <CountUp
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              duration={2}
            />
          </div>
          <div className="text-white/80 text-sm sm:text-base font-medium">
            {stat.label}
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 transition-all duration-300 pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}

