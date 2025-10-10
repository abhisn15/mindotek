'use client';

import { motion } from 'framer-motion';
import FadeInView from './animations/FadeInView';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureShowcaseProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
}

export default function FeatureShowcase({ 
  features, 
  title, 
  subtitle 
}: FeatureShowcaseProps) {
  return (
    <div className="space-y-12">
      {(title || subtitle) && (
        <FadeInView className="text-center">
          {title && (
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </FadeInView>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <FadeInView
            key={index}
            delay={index * 0.1}
            direction="up"
          >
            <motion.div
              className="group bg-white/95 backdrop-blur-sm border-2 border-red-100 rounded-2xl p-6 sm:p-8 hover:border-red-300 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden h-full"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-orange-50/0 group-hover:from-red-50/80 group-hover:to-orange-50/80 transition-all duration-300 pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white text-2xl sm:text-3xl">
                    {feature.icon}
                  </div>
                </motion.div>
                
                <h4 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-200 to-orange-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl" />
            </motion.div>
          </FadeInView>
        ))}
      </div>
    </div>
  );
}

