'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

interface PageLoaderProps {
  onLoadComplete?: () => void;
  minimumLoadTime?: number;
}

export default function PageLoader({ 
  onLoadComplete, 
  minimumLoadTime = 2000 
}: PageLoaderProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAssets, setLoadedAssets] = useState(0);

  // Critical assets to preload
  const criticalAssets = [
    '/assets/logo-mindotek-black.webp',
    '/assets/logo-mindotek-white.webp',
    '/assets/banner-hero.webp',
    '/assets/icon.webp',
  ];

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load ${src}`));
    });
  }, []);

  useEffect(() => {
    let isMounted = true;
    const startTime = Date.now();

    const loadAssets = async () => {
      try {
        // Preload critical images
        const loadPromises = criticalAssets.map((asset, index) =>
          preloadImage(asset).then(() => {
            if (isMounted) {
              setLoadedAssets((prev) => prev + 1);
              const progress = ((index + 1) / criticalAssets.length) * 90;
              setLoadingProgress(progress);
            }
          })
        );

        await Promise.allSettled(loadPromises);

        // Ensure minimum load time for smooth UX
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

        if (remainingTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingTime));
        }

        if (isMounted) {
          setLoadingProgress(100);
          
          // Delay before hiding loader for smooth transition
          setTimeout(() => {
            if (isMounted) {
              setIsLoading(false);
              onLoadComplete?.();
            }
          }, 300);
        }
      } catch (error) {
        console.error('Error loading assets:', error);
        // Continue anyway after minimum time
        if (isMounted) {
          setLoadingProgress(100);
          setTimeout(() => {
            if (isMounted) {
              setIsLoading(false);
              onLoadComplete?.();
            }
          }, 300);
        }
      }
    };

    loadAssets();

    return () => {
      isMounted = false;
    };
  }, [criticalAssets.length, minimumLoadTime, onLoadComplete, preloadImage]);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.5, ease: "easeInOut" }
        }}
        className="fixed inset-0 z-[10000] bg-gradient-to-br from-gray-50 via-white to-red-50 flex items-center justify-center"
      >
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          {/* Logo Container with Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1], // Spring easing
            }}
            className="mb-8"
          >
            {/* Logo container */}
            <motion.div
              className="relative mx-auto mb-6"
              style={{ width: '280px', height: '80px' }}
            >
              {/* Spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #F87171 100%)',
                  opacity: 0.1,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Logo with floating animation */}
              <motion.div
                className="relative z-10 flex items-center justify-center h-full"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/logo-mindotek-black.webp"
                  alt="Mindotek - PT. Logamindo Teknologi Indonesia"
                  width={280}
                  height={80}
                  priority
                  style={{ width: '280px', height: 'auto' }}
                  className="drop-shadow-lg"
                />
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{
                  background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
                  opacity: 0.2,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              PT. Logamindo Teknologi Indonesia
            </h2>
            <motion.p
              className="text-sm text-gray-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {loadingProgress < 100 
                ? `Loading assets... ${loadedAssets}/${criticalAssets.length}`
                : 'Ready to go!'
              }
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full max-w-xs mx-auto"
          >
            {/* Progress container */}
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ width: '50%' }}
              />
            </div>

            {/* Progress percentage */}
            <motion.div className="flex justify-between items-center mt-3">
              <p className="text-xs text-gray-500 font-medium">
                {Math.floor(loadingProgress)}%
              </p>
              {loadingProgress === 100 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-xs text-green-600 font-medium flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Complete
                </motion.span>
              )}
            </motion.div>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center space-x-2 mt-8"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-red-600 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* TPM Group Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <p className="text-xs text-gray-400 font-medium">
              Part of <span className="text-red-600 font-semibold">TPM Group</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

