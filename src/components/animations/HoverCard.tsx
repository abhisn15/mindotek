'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  rotateX?: number;
  rotateY?: number;
}

export default function HoverCard({
  children,
  className = '',
  scale = 1.02,
  rotateX = 0,
  rotateY = 0,
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        rotateX,
        rotateY,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.4, 0.25, 1],
        },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

