#!/usr/bin/env node

/**
 * Performance Optimization Script for Mindotek Website
 * This script helps optimize the website for better performance
 */

const fs = require('fs');
const path = require('path');

// console.log('🚀 Starting performance optimization...');

// 1. Optimize images (if sharp is available)
async function optimizeImages() {
  try {
    const sharp = require('sharp');
    // console.log('📸 Optimizing images...');
    
    const assetsDir = path.join(__dirname, '../public/assets');
    const files = fs.readdirSync(assetsDir);
    
    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg)$/i)) {
        const inputPath = path.join(assetsDir, file);
        const outputPath = path.join(assetsDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
        
        if (!fs.existsSync(outputPath)) {
          await sharp(inputPath)
            .webp({ quality: 85, effort: 6 })
            .toFile(outputPath);
          
            // console.log(`✅ Optimized ${file} -> ${path.basename(outputPath)}`);
          }
      }
    }
  } catch (error) {
    // console.log('⚠️  Sharp not available, skipping image optimization');
    // console.log('   Install sharp with: npm install sharp');
  }
}

// 2. Generate critical CSS
function generateCriticalCSS() {
  // console.log('🎨 Generating critical CSS...');
  
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
.hero-section {
  background: linear-gradient(135deg, #fef2f2 0%, #ffffff 50%, #fff7ed 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 50;
}

.logo {
  font-weight: bold;
  background: linear-gradient(45deg, #dc2626, #b91c1c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Performance optimizations */
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

/* Reduce layout shift */
.hero-section h1 {
  min-height: 2em;
}

.hero-section p {
  min-height: 1.5em;
}
`;

  fs.writeFileSync(
    path.join(__dirname, '../src/styles/critical.css'),
    criticalCSS
  );
  
  // console.log('✅ Generated critical CSS');
}

// 3. Optimize bundle analysis
function optimizeBundleAnalysis() {
  // console.log('📦 Setting up bundle analysis...');
  
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')
  );
  
  // Add bundle analysis scripts
  if (!packageJson.scripts['analyze']) {
    packageJson.scripts['analyze'] = 'ANALYZE=true npm run build';
  }
  
  if (!packageJson.scripts['analyze:server']) {
    packageJson.scripts['analyze:server'] = 'BUNDLE_ANALYZE=server npm run build';
  }
  
  if (!packageJson.scripts['analyze:browser']) {
    packageJson.scripts['analyze:browser'] = 'BUNDLE_ANALYZE=browser npm run build';
  }
  
  fs.writeFileSync(
    path.join(__dirname, '../package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  
  // console.log('✅ Added bundle analysis scripts');
}

// 4. Generate service worker for caching
function generateServiceWorker() {
  // console.log('⚡ Generating service worker...');
  
  const serviceWorkerContent = `
const CACHE_NAME = 'mindotek-v1';
const urlsToCache = [
  '/',
  '/assets/logo-mindotek.webp',
  '/assets/icon.webp',
  '/globals.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
`;

  fs.writeFileSync(
    path.join(__dirname, '../public/sw.js'),
    serviceWorkerContent
  );
  
  // console.log('✅ Generated service worker');
}

// 5. Performance recommendations
function printPerformanceRecommendations() {
  // console.log('\n🎯 Performance Optimization Recommendations:');
  // console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  // console.log('1. 🖼️  Images:');
  // console.log('   • Use WebP format for all images');
  // console.log('   • Implement lazy loading for below-the-fold images');
  // console.log('   • Use appropriate image sizes (responsive)');
  // console.log('   • Add blur placeholders for better UX');
  
  // console.log('\n2. 🎨 CSS:');
  // console.log('   • Inline critical CSS');
  // console.log('   • Use CSS containment for complex layouts');
  // console.log('   • Minimize CSS bundle size');
  // console.log('   • Use CSS custom properties for theming');
  
  // console.log('\n3. 📦 JavaScript:');
  // console.log('   • Code split with dynamic imports');
  // console.log('   • Use React.lazy for route-based splitting');
  // console.log('   • Minimize bundle size with tree shaking');
  // console.log('   • Use webpack-bundle-analyzer to identify large chunks');
  
  // console.log('\n4. 🌐 Network:');
  // console.log('   • Enable HTTP/2 server push');
  // console.log('   • Use CDN for static assets');
  // console.log('   • Implement proper caching headers');
  // console.log('   • Preload critical resources');
  
  // console.log('\n5. 📱 Mobile:');
  // console.log('   • Optimize for mobile-first');
  // console.log('   • Use touch-friendly interactions');
  // console.log('   • Minimize mobile bundle size');
  // console.log('   • Test on real devices');
  
  // console.log('\n6. 🔍 Monitoring:');
  // console.log('   • Set up Web Vitals monitoring');
  // console.log('   • Use Lighthouse CI for continuous monitoring');
  // console.log('   • Monitor Core Web Vitals in production');
  // console.log('   • Set up performance budgets');
}

// Main execution
async function main() {
  try {
    await optimizeImages();
    generateCriticalCSS();
    optimizeBundleAnalysis();
    generateServiceWorker();
    printPerformanceRecommendations();
    
    // console.log('\n✅ Performance optimization completed!');
    // console.log('\nNext steps:');
    // console.log('1. Run: npm run build');
    // console.log('2. Run: npm run analyze (to check bundle size)');
    // console.log('3. Test with Lighthouse');
    // console.log('4. Deploy and monitor Web Vitals');
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

main();
