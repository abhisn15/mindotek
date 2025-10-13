'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamic imports for better performance
const PortfolioCard = dynamic(() => import('@/components/PortfolioCard'), {
  loading: () => <ProjectCardSkeleton index={0} />
});

const ProjectCardSkeleton = dynamic(() => import('@/components/ProjectCardSkeleton'), {
  loading: () => <div className="h-96 bg-gray-100 rounded-2xl animate-pulse" />
});

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  link: string;
}

interface LazyProjectGridProps {
  projects: Project[];
  searchTerm: string;
}

const ITEMS_PER_PAGE = 6; // Load 6 items at a time
const INITIAL_LOAD = 3; // Show 3 items initially

export default function LazyProjectGrid({ projects, searchTerm }: LazyProjectGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Reset visible count when search term changes
  useEffect(() => {
    setVisibleCount(INITIAL_LOAD);
  }, [searchTerm]);

  // Load more items
  const loadMore = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, projects.length));
      setIsLoading(false);
    }, 800); // Simulate loading delay
  }, [isLoading, projects.length]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < projects.length) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(loadMoreRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [visibleCount, projects.length, loadMore]);

  // Memoized visible projects
  const visibleProjects = useMemo(() => {
    return projects.slice(0, visibleCount);
  }, [projects, visibleCount]);

  // Show skeletons for loading state
  const renderSkeletons = () => {
    const skeletonCount = Math.min(ITEMS_PER_PAGE, projects.length - visibleCount);
    return Array.from({ length: skeletonCount }, (_, index) => (
      <ProjectCardSkeleton key={`skeleton-${index}`} index={index} />
    ));
  };

  if (projects.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No Projects Found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our successful projects and innovative solutions that drive business transformation
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PortfolioCard project={project} index={index} />
            </motion.div>
          ))}
          
          {/* Loading Skeletons */}
          {isLoading && renderSkeletons()}
        </div>

        {/* Load More Trigger */}
        {visibleCount < projects.length && (
          <div ref={loadMoreRef} className="flex justify-center mt-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 text-gray-500">
                <div className="w-5 h-5 border-2 border-gray-300 border-t-red-500 rounded-full animate-spin" />
                <span>Loading more projects...</span>
              </div>
            </motion.div>
          </div>
        )}

        {/* Show All Loaded */}
        {visibleCount >= projects.length && projects.length > INITIAL_LOAD && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500">
              All {projects.length} projects loaded
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
