'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';

interface ContentItem {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

interface StickyScrollRevealProps {
  content: ContentItem[];
}

export default function StickyScrollReveal({ content }: StickyScrollRevealProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={targetRef} className="relative">
      {content.map((item, index) => {
        const start = index / content.length;
        const end = (index + 1) / content.length;

        return (
          <Card
            key={index}
            item={item}
            index={index}
            progress={scrollYProgress}
            range={[start, end]}
            totalItems={content.length}
          />
        );
      })}
    </div>
  );
}

interface CardProps {
  item: ContentItem;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  totalItems: number;
}

function Card({ item, index, progress, range, totalItems }: CardProps) {
  // Calculate opacity for smooth transitions
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.8, 1]);

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            style={{ opacity, scale }}
            className="space-y-6 lg:pr-8"
          >
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold rounded-full">
                {String(index + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {item.title}
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {item.features && item.features.length > 0 && (
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-red-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Progress indicator */}
            <div className="flex items-center gap-2 pt-6">
              {Array.from({ length: totalItems }).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === index
                      ? 'w-12 bg-gradient-to-r from-red-500 to-orange-500'
                      : 'w-8 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Sticky Image */}
          <motion.div
            style={{ opacity, scale }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <svg
                className="w-8 h-8 text-red-500"
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
