'use client';

import { useEffect, useState, useCallback } from 'react';

interface MobileOptimizationState {
  isMobile: boolean;
  isSlowConnection: boolean;
  prefersReducedMotion: boolean;
  connectionType: string;
}

export function useMobileOptimization() {
  const [state, setState] = useState<MobileOptimizationState>({
    isMobile: false,
    isSlowConnection: false,
    prefersReducedMotion: false,
    connectionType: 'unknown',
  });

  // Detect mobile device
  const detectMobile = useCallback(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    
    // Also check screen size
    const isMobileScreen = window.innerWidth <= 768;
    
    return isMobile || isMobileScreen;
  }, []);

  // Detect slow connection
  const detectSlowConnection = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const slowConnections = ['slow-2g', '2g', '3g'];
      const isSlow = slowConnections.includes(connection.effectiveType);
      const connectionType = connection.effectiveType || 'unknown';
      
      return { isSlow, connectionType };
    }
    
    return { isSlow: false, connectionType: 'unknown' };
  }, []);

  // Detect reduced motion preference
  const detectReducedMotion = useCallback(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Update state
  const updateState = useCallback(() => {
    const isMobile = detectMobile();
    const { isSlow, connectionType } = detectSlowConnection();
    const prefersReducedMotion = detectReducedMotion();

    setState({
      isMobile,
      isSlowConnection: isSlow,
      prefersReducedMotion,
      connectionType,
    });
  }, [detectMobile, detectSlowConnection, detectReducedMotion]);

  // Initialize and set up listeners
  useEffect(() => {
    updateState();

    // Listen for resize events
    const handleResize = () => {
      updateState();
    };

    // Listen for connection changes
    const handleConnectionChange = () => {
      updateState();
    };

    // Listen for reduced motion changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => {
      updateState();
    };

    window.addEventListener('resize', handleResize);
    
    if ('connection' in navigator) {
      (navigator as any).connection.addEventListener('change', handleConnectionChange);
    }
    
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      if ('connection' in navigator) {
        (navigator as any).connection.removeEventListener('change', handleConnectionChange);
      }
      
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, [updateState]);

  // Optimize animations based on device capabilities
  const getOptimizedAnimationConfig = useCallback(() => {
    if (state.prefersReducedMotion) {
      return {
        duration: 0.01,
        iterations: 1,
        easing: 'linear',
      };
    }

    if (state.isMobile || state.isSlowConnection) {
      return {
        duration: 0.3,
        iterations: 1,
        easing: 'ease-out',
      };
    }

    return {
      duration: 0.5,
      iterations: 1,
      easing: 'ease-in-out',
    };
  }, [state]);

  // Get optimized image quality
  const getOptimizedImageQuality = useCallback(() => {
    if (state.isSlowConnection) return 60;
    if (state.isMobile) return 75;
    return 85;
  }, [state]);

  // Get optimized image sizes
  const getOptimizedImageSizes = useCallback(() => {
    if (state.isMobile) {
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
    }
    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  }, [state]);

  return {
    ...state,
    getOptimizedAnimationConfig,
    getOptimizedImageQuality,
    getOptimizedImageSizes,
  };
}
