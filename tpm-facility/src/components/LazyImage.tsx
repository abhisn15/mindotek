'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  placeholder = 'blur',
  blurDataURL,
  quality = 85,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Generate blur placeholder if not provided
  const generateBlurDataURL = (w: number = 10, h: number = 10) => {
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="12" fill="#9ca3af" text-anchor="middle" dy=".3em">Loading...</text>
      </svg>`
    ).toString('base64')}`;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before image comes into view
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Default sizes for responsive images
  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  const defaultBlurDataURL = blurDataURL || generateBlurDataURL(width || 100, height || 100);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
    >
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={defaultSizes}
          priority={priority}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={defaultBlurDataURL}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
    </div>
  );
}
