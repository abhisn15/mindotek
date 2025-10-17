'use client';

import { useEffect, useCallback } from 'react';

interface CacheOptimizerProps {
  children: React.ReactNode;
}

export default function CacheOptimizer({ children }: CacheOptimizerProps) {
  
  // Optimize back/forward cache (bfcache)
  const optimizeBFCache = useCallback(() => {
    // Remove event listeners before page unload to prevent bfcache issues
    const cleanup = () => {
      // Remove any global event listeners that might prevent bfcache
      window.removeEventListener('beforeunload', cleanup);
      window.removeEventListener('pagehide', cleanup);
    };

    // Add cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    window.addEventListener('pagehide', cleanup);

    // Optimize for bfcache restoration
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        // Page was restored from bfcache
        console.log('Page restored from bfcache');
        
        // Re-initialize any necessary components
        // without triggering expensive operations
        document.documentElement.classList.add('bfcache-restored');
        
        // Remove the class after a short delay
        setTimeout(() => {
          document.documentElement.classList.remove('bfcache-restored');
        }, 100);
      }
    });

    return cleanup;
  }, []);

  // Optimize long main-thread tasks
  const optimizeMainThread = useCallback(() => {
    let taskQueue: (() => void)[] = [];
    let isProcessing = false;

    // Task scheduler to break up long-running tasks
    const scheduleTask = (task: () => void) => {
      taskQueue.push(task);
      if (!isProcessing) {
        processTasks();
      }
    };

    const processTasks = () => {
      if (taskQueue.length === 0) {
        isProcessing = false;
        return;
      }

      isProcessing = true;
      const startTime = performance.now();
      const maxTaskTime = 5; // 5ms max per task

      while (taskQueue.length > 0 && performance.now() - startTime < maxTaskTime) {
        const task = taskQueue.shift();
        if (task) {
          try {
            task();
          } catch (error) {
            console.error('Task execution error:', error);
          }
        }
      }

      // Schedule remaining tasks for next frame
      if (taskQueue.length > 0) {
        requestAnimationFrame(processTasks);
      } else {
        isProcessing = false;
      }
    };

    // Expose task scheduler globally for heavy operations
    (window as unknown as { scheduleTask?: (task: () => void) => void }).scheduleTask = scheduleTask;

    return () => {
      taskQueue = [];
      isProcessing = false;
      delete (window as unknown as { scheduleTask?: (task: () => void) => void }).scheduleTask;
    };
  }, []);

  // Optimize memory usage
  const optimizeMemory = useCallback(() => {
    // Clean up unused objects periodically
    const cleanup = () => {
      if ('gc' in window && typeof (window as any).gc === 'function') {
        // Force garbage collection if available (development only)
        (window as any).gc();
      }
    };

    // Run cleanup every 30 seconds
    const interval = setInterval(cleanup, 30000);

    // Cleanup on visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cleanup();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;
    let lastScrollY = 0;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      
      // Throttle scroll events to 60fps max
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll-dependent elements
          document.documentElement.style.setProperty(
            '--scroll-y',
            `${currentScrollY}px`
          );
          
          // Add scroll direction class
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            document.documentElement.classList.add('scroll-down');
            document.documentElement.classList.remove('scroll-up');
          } else if (currentScrollY < lastScrollY) {
            document.documentElement.classList.add('scroll-up');
            document.documentElement.classList.remove('scroll-down');
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive event listeners for better performance
    window.addEventListener('scroll', updateScrollPosition, { 
      passive: true,
      capture: false 
    });

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  // Initialize all optimizations
  useEffect(() => {
    const cleanupBFCache = optimizeBFCache();
    const cleanupMainThread = optimizeMainThread();
    const cleanupMemory = optimizeMemory();
    const cleanupScroll = optimizeScrollPerformance();

    return () => {
      cleanupBFCache();
      cleanupMainThread();
      cleanupMemory();
      cleanupScroll();
    };
  }, [optimizeBFCache, optimizeMainThread, optimizeMemory, optimizeScrollPerformance]);

  return <>{children}</>;
}
