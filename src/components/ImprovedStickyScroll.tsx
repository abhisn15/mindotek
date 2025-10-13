'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';

interface ContentItem {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

interface ImprovedStickyScrollProps {
  content: ContentItem[];
}

export default function ImprovedStickyScroll({ content }: ImprovedStickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return smoothProgress.on('change', (latest) => {
      const newIndex = Math.min(
        Math.floor(latest * content.length),
        content.length - 1
      );
      setActiveIndex(newIndex);
    });
  }, [smoothProgress, content.length]);

  return (
    <div ref={containerRef} className="relative bg-white">
      {content.map((item, index) => {
        const targetScale = 1 - ((content.length - index) * 0.05);
        const start = index / content.length;
        const end = (index + 1) / content.length;

        return (
          <ContentCard
            key={index}
            item={item}
            index={index}
            progress={scrollYProgress}
            range={[start, end]}
            targetScale={targetScale}
            isActive={activeIndex === index}
          />
        );
      })}
    </div>
  );
}

interface ContentCardProps {
  item: ContentItem;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  isActive: boolean;
}

function ContentCard({ item, index, progress, range, isActive }: ContentCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Smooth opacity transition
  const opacity = useTransform(progress, range, [0, 1]);
  const smoothOpacity = useSpring(opacity, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scale transition
  const scale = useTransform(progress, range, [0.95, 1]);
  const smoothScale = useSpring(scale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="sticky top-0 min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            ref={cardRef}
            style={{ 
              opacity: smoothOpacity,
              scale: smoothScale
            }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Number Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent max-w-[100px]"></div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
            >
              {item.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              {item.description}
            </motion.p>

            {/* Features */}
            {item.features && item.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Sticky Image */}
          <motion.div
            style={{ 
              opacity: smoothOpacity,
              scale: smoothScale
            }}
            className="order-1 lg:order-2 lg:sticky lg:top-24"
          >
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              {/* Image with object-fit cover for cropping */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                quality={90}
              />
              
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center"
            >
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
