import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {},
  webpack: (config: any, { dev, isServer }: { dev: boolean; isServer: boolean }) => {
    // WebP handling
    config.module.rules.push({
      test: /\.(webp)$/i,
      type: 'asset/resource',
    });

    // Production optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor bundle
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Separate framer-motion (large library)
            framerMotion: {
              name: 'framer-motion',
              test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
              chunks: 'all',
              priority: 30,
            },
            // Separate GSAP (large library)
            gsap: {
              name: 'gsap',
              test: /[\\/]node_modules[\\/](gsap)[\\/]/,
              chunks: 'all',
              priority: 30,
            },
          },
        },
      };
    }

    return config;
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'gsap'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
