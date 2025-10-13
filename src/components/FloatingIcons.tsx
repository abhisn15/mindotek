'use client';

import { motion } from 'framer-motion';

export default function FloatingIcons() {
  const icons = [
    { path: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4', top: '10%', left: '10%', delay: 0 },
    { path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', top: '20%', left: '85%', delay: 0.2 },
    { path: 'M13 10V3L4 14h7v7l9-11h-7z', top: '70%', left: '15%', delay: 0.4 },
    { path: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', top: '75%', left: '80%', delay: 0.6 },
    { path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', top: '45%', left: '90%', delay: 0.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: icon.top, left: icon.left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 8,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <svg
            className="w-12 h-12 text-red-500/20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={icon.path}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

