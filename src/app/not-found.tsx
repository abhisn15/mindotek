'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-200 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-200 rounded-full opacity-20 blur-3xl animate-pulse" />
      </div>
    </div>
  );
}

