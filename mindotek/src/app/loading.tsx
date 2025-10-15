'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="relative w-20 h-20 mx-auto mb-8"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-red-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mr-3 shadow-lg">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Mindotek
            </span>
          </div>
          <p className="text-gray-600 text-lg">Loading...</p>
        </motion.div>
      </div>
    </div>
  );
}

