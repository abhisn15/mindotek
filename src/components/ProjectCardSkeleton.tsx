'use client';

import { motion } from 'framer-motion';

interface ProjectCardSkeletonProps {
  index: number;
}

export default function ProjectCardSkeleton({ index }: ProjectCardSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image Skeleton */}
      <div className="relative h-48 sm:h-56 bg-gray-200 overflow-hidden">
        <motion.div
          animate={{ x: [-100, 100] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: index * 0.2
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full"
        />
      </div>

      {/* Content Skeleton */}
      <div className="p-6">
        {/* Category Skeleton */}
        <div className="mb-3">
          <div className="h-5 w-24 bg-gray-200 rounded-full animate-pulse" />
        </div>

        {/* Title Skeleton */}
        <div className="mb-3">
          <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Description Skeleton */}
        <div className="mb-4 space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-3/5 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 w-12 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-14 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-10 bg-gray-200 rounded-full animate-pulse" />
        </div>

        {/* Footer Skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}
