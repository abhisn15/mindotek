'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ContentItem {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

interface PortfolioFeaturesProps {
  content: ContentItem[];
}

export default function PortfolioFeatures({ content }: PortfolioFeaturesProps) {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            WMS Features Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive features of our Warehouse Management System designed for modern logistics operations
          </p>
        </div>

        {/* Features Grid - All visible at once */}
        <div className="space-y-24">
          {content.map((item, index) => (
            <FeatureSection key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface FeatureSectionProps {
  item: ContentItem;
  index: number;
}

function FeatureSection({ item, index }: FeatureSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
      {/* Number Badge - Always at top for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 lg:hidden"
      >
        <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
      </motion.div>

      {/* Image - Second for mobile, alternating for desktop */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
        viewport={{ once: true }}
        className={`relative order-2 lg:order-none ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="relative aspect-[16/10] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl bg-gray-100">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority={index < 2}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
          />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl lg:rounded-3xl pointer-events-none"></div>
        </div>

        {/* Decorative elements - hidden on mobile */}
        <div className="hidden lg:block absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-60"></div>
        <div className="hidden lg:block absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-40"></div>
      </motion.div>

      {/* Content - Third for mobile (after number and image) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
        className={`space-y-6 order-3 lg:order-none ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
      >
        {/* Number Badge - Only show on desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          {item.description}
        </p>

        {/* Features */}
        {item.features && item.features.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-lg lg:text-xl font-semibold text-gray-900">Key Features:</h4>
            <div className="grid gap-3">
              {item.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
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
                  <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Progress indicator */}
        <div className="flex items-center gap-2 pt-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === index
                  ? 'w-12 bg-gradient-to-r from-red-500 to-orange-500'
                  : idx < index
                  ? 'w-8 bg-red-300'
                  : 'w-8 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
