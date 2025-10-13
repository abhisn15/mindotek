'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  link: string;
}

interface PortfolioCardProps {
  project: PortfolioItem;
  index: number;
}

export default function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={project.link} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Hover Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-500">
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* Year Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
              {project.year}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category */}
            <p className="text-sm text-red-500 font-semibold mb-2">
              {project.category}
            </p>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            {/* View Project Link */}
            <div className="flex items-center text-red-500 font-semibold group-hover:gap-2 transition-all duration-300">
              <span>View Project</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
