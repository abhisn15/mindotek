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

interface PortfolioGridProps {
  projects: PortfolioItem[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our successful projects and innovative solutions that drive business transformation
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold mb-2 text-red-600">5+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold mb-2 text-red-600">50+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold mb-2 text-red-600">100+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold mb-2 text-red-600">99%</p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate and bring your vision to life with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start a Project
            </a>
            <Link
              href="/"
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PortfolioCardProps {
  project: PortfolioItem;
  index: number;
}

function PortfolioCard({ project, index }: PortfolioCardProps) {
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
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
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
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
