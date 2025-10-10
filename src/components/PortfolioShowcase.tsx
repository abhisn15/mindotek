'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ContentItem {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

interface PortfolioShowcaseProps {
  content: ContentItem[];
}

export default function PortfolioShowcase({ content }: PortfolioShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            WMS Features Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the comprehensive features of our Warehouse Management System
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {content.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Content */}
            <div className="space-y-8">
              {/* Number Badge */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {content[activeIndex].title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {content[activeIndex].description}
              </p>

              {/* Features */}
              {content[activeIndex].features && content[activeIndex].features.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-3">
                    {content[activeIndex].features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
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
                </div>
              )}

              {/* Navigation Arrows */}
              <div className="flex items-center gap-4 pt-8">
                <button
                  onClick={() => setActiveIndex(activeIndex > 0 ? activeIndex - 1 : content.length - 1)}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <span className="text-sm text-gray-500">
                  {activeIndex + 1} of {content.length}
                </span>
                
                <button
                  onClick={() => setActiveIndex(activeIndex < content.length - 1 ? activeIndex + 1 : 0)}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-gray-100"
              >
                <Image
                  src={content[activeIndex].image}
                  alt={content[activeIndex].title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none"></div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
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
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
