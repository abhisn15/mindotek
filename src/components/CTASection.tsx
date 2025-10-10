'use client';

import { motion } from 'framer-motion';
import FadeInView from './animations/FadeInView';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-8 sm:p-12 lg:p-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern
              id="cta-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#cta-pattern)" />
        </svg>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
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
        className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <FadeInView>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {title}
          </h2>
        </FadeInView>
        
        <FadeInView delay={0.2}>
          <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={primaryButton.href}
              className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-xl text-base sm:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {primaryButton.text}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>

            {secondaryButton && (
              <motion.a
                href={secondaryButton.href}
                className="inline-flex items-center justify-center bg-red-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-800 transition-all border-2 border-white/30 hover:border-white/50 text-base sm:text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {secondaryButton.text}
              </motion.a>
            )}
          </div>
        </FadeInView>
      </div>
    </div>
  );
}

