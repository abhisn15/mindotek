'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterModal({ 
  isOpen, 
  onClose, 
  filters, 
  activeFilter, 
  onFilterChange 
}: FilterModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleFilterSelect = (filter: string) => {
    onFilterChange(filter);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.4, 0, 0.2, 1] 
            }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 p-6 max-h-[70vh] overflow-hidden"
          >
            {/* Handle bar */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Filter Projects</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Filter Options */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleFilterSelect(filter)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{filter}</span>
                    {activeFilter === filter && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Clear Filter */}
            {activeFilter !== 'All Projects' && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => handleFilterSelect('All Projects')}
                className="w-full mt-4 p-3 text-red-500 font-medium border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
              >
                Clear Filter
              </motion.button>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
