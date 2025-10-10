'use client';

import { motion } from 'framer-motion';

export function SkeletonCard() {
  return (
    <motion.div
      className="bg-white/95 backdrop-blur-sm border-2 border-red-100 rounded-3xl p-6 sm:p-8"
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-start mb-6 sm:mb-8">
        <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gray-200 rounded-xl sm:rounded-2xl mr-4 sm:mr-6" />
        <div className="flex-1">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
          <div className="h-4 bg-gray-200 rounded w-full" />
        </div>
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
      </div>
      <div className="h-24 bg-gray-200 rounded-xl" />
    </motion.div>
  );
}

export function SkeletonText({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`h-4 bg-gray-200 rounded ${className}`}
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

