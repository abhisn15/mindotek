# Mindotek - PT. Logamindo Teknologi Indonesia

<div align="center">

![Mindotek Logo](public/assets/logo-mindotek.webp)

**Modern Company Profile Website**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 🚀 **Tentang Project**

Website company profile modern untuk **PT. Logamindo Teknologi Indonesia (Mindotek)**, anggota dari TPM Group. Dibangun dengan teknologi terkini untuk memberikan pengalaman user yang luar biasa dengan performance tinggi, SEO optimal, dan UI/UX yang menarik.

### **🎯 Key Highlights:**
- ⚡ **Lightning Fast**: < 2s First Contentful Paint
- 🎨 **Modern UI/UX**: Smooth animations & parallax effects
- 📱 **Mobile First**: Optimized untuk semua devices
- 🔍 **SEO Ready**: Comprehensive meta tags & structured data
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🚀 **PWA Ready**: Progressive Web App capabilities
- 🗺️ **Interactive Maps**: Google Maps integration untuk warehouse locations
- 📊 **Dynamic Portfolio**: Animated counters & lazy loading

---

## ✨ **Features**

### **🎨 UI/UX Excellence**

#### **1. Advanced Parallax Scroll**
- **Multi-Layer Parallax**: 4 layers dengan kecepatan berbeda
- **GPU Accelerated**: Smooth 60fps animations
- **Performance Optimized**: Throttled scroll events
- **Visual Depth**: 3D effect yang engaging

#### **2. Smooth Scroll dengan Lenis**
- **Professional Smooth Scroll**: GSAP-like smooth scrolling
- **Momentum-based**: Natural deceleration
- **Performance Optimized**: Hardware accelerated
- **Touch Friendly**: Optimized untuk mobile devices

#### **3. Interactive Portfolio**
- **Dynamic Statistics**: Animated counters dengan Framer Motion
- **Lazy Loading**: Skeleton loading untuk project cards
- **Search & Filter**: Real-time search dengan modal filter
- **Responsive Grid**: Perfect di semua screen sizes

#### **4. Google Maps Integration**
- **Warehouse Locations**: Interactive map dengan 7+ locations
- **Location Selector**: Dynamic location switching
- **Mobile Optimized**: Touch-friendly interface
- **Professional Styling**: Consistent dengan brand theme

### **⚡ Performance**

#### **Image Optimization**
- **Modern Formats**: WebP for all images
- **Lazy Loading**: Defer offscreen images
- **Responsive Sizes**: Optimized for each device
- **Blur Placeholders**: Smooth loading experience

#### **Code Optimization**
- **Dynamic Imports**: Heavy components loaded on-demand
- **Tree Shaking**: Remove unused code
- **Code Splitting**: Vendor & common chunks
- **Memory Optimized**: Reduced bundle size

#### **Performance Monitoring**
- **Web Vitals**: LCP, FID, INP, CLS, FCP, TTFB
- **Performance Optimizer**: Reduce main-thread blocking
- **Memory Management**: Optimized untuk production

---

## 🛠️ **Tech Stack**

### **Core Technologies**
```
Framework:       Next.js 15.5.4 (App Router)
React:           19.1.0 (Server & Client Components)
TypeScript:      5.x (Type Safety)
Styling:         Tailwind CSS 4 (Utility-First)
Animations:      Framer Motion 12.23.22 (Smooth Animations)
Smooth Scroll:   Lenis 1.3.11 (Professional Scroll)
Maps:            Google Maps API
Icons:           Custom SVG Icons
Analytics:       web-vitals (Performance Monitoring)
```

### **Architecture**
- **App Router**: Next.js 15 App Directory
- **Server Components**: Default for performance
- **Client Components**: Only when needed for interactivity
- **Dynamic Imports**: Code splitting for heavy components
- **Image Optimization**: Next.js Image component

---

## 📦 **Installation & Setup**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Quick Start**

```bash
# Clone repository
git clone https://github.com/yourusername/mindotek.git

# Navigate to project
cd mindotek

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types

# Analysis
npm run analyze      # Analyze bundle size

# Utilities
npm run clean        # Clean build artifacts
```

---

## 📁 **Project Structure**

```
mindotek/
├── src/
│   ├── app/                           # Next.js App Directory
│   │   ├── page.tsx                  # Homepage (Server Component)
│   │   ├── layout.tsx                # Root layout
│   │   ├── globals.css               # Global styles
│   │   ├── loading.tsx               # Loading state
│   │   ├── not-found.tsx             # 404 page
│   │   ├── sitemap.ts                # Dynamic sitemap
│   │   └── portfolio/                # Portfolio pages
│   │       ├── page.tsx              # Portfolio listing
│   │       └── wms/page.tsx          # WMS project detail
│   │
│   ├── components/                   # React Components
│   │   ├── animations/               # Animation Components
│   │   │   ├── CountUp.tsx           # Number counter
│   │   │   └── FadeIn.tsx            # Fade-in animation
│   │   │
│   │   ├── icons/                    # Custom Icons
│   │   │   └── ProfessionalIcons.tsx # SVG icon components
│   │   │
│   │   ├── Navigation.tsx            # Desktop navigation
│   │   ├── MobileMenu.tsx            # Mobile menu
│   │   ├── AdvancedHeroParallax.tsx  # Multi-layer parallax
│   │   ├── StatsCounter.tsx          # Animated statistics
│   │   ├── PortfolioCounter.tsx      # Portfolio stats
│   │   ├── PortfolioStatsCounter.tsx # Light theme stats
│   │   ├── AnimatedProgressBar.tsx   # Progress bars
│   │   ├── SimpleFadeIn.tsx          # Lightweight fade-in
│   │   ├── FloatingIcons.tsx         # Background animations
│   │   ├── Typewriter.tsx            # Typewriter effect
│   │   ├── GoogleMap.tsx             # Maps integration
│   │   ├── PortfolioCard.tsx         # Project cards
│   │   ├── LazyProjectGrid.tsx       # Lazy loading grid
│   │   ├── ProjectCardSkeleton.tsx   # Loading skeletons
│   │   ├── FilterModal.tsx           # Filter modal
│   │   ├── Footer.tsx                # Footer component
│   │   ├── ScrollToTop.tsx           # Scroll button
│   │   ├── EnhancedSmoothScroll.tsx  # Smooth scroll
│   │   └── CTASection.tsx            # Call-to-action
│   │
│   ├── data/                         # JSON Data Files
│   │   ├── company.json              # Company information
│   │   ├── services.json             # Services data
│   │   ├── locations.json            # Warehouse locations
│   │   ├── portfolio-list.json       # Portfolio projects
│   │   ├── portfolio-wms.json        # WMS project data
│   │   ├── wms.json                  # WMS features
│   │   ├── vision-mission.json       # Vision & mission
│   │   ├── kpi.json                  # KPI statistics
│   │   ├── customer-benefits.json    # Customer benefits
│   │   ├── introduction.json         # Company intro
│   │   └── legality.json             # Legal information
│   │
│   ├── hooks/                        # Custom React Hooks
│   │   └── useActiveSection.ts       # Active section detector
│   │
│   └── lib/                          # Utility Functions
│       ├── utils.ts                  # General utilities
│       ├── theme.ts                  # Theme utilities
│       ├── types.ts                  # TypeScript types
│       ├── performance.ts            # Performance monitoring
│       └── seo.ts                    # SEO utilities
│
├── public/                           # Static Assets
│   ├── assets/                       # Images & Media
│   │   ├── banner-hero.webp          # Hero background
│   │   ├── logo-mindotek.webp        # Company logo
│   │   ├── icon.webp                 # Favicon
│   │   └── portfolio/                # Portfolio images
│   │       ├── wms-*.webp            # WMS project images
│   │       └── wms-*.png             # WMS project images (fallback)
│   ├── robots.txt                    # Search engine rules
│   ├── site.webmanifest              # PWA manifest
│   └── sw.js                         # Service worker
│
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript config
├── tailwind.config.ts                # Tailwind config
├── postcss.config.mjs                # PostCSS config
├── eslint.config.mjs                 # ESLint config
└── package.json                      # Dependencies & scripts
```

---

## 🎯 **Key Components**

### **1. EnhancedSmoothScroll**
Professional smooth scrolling dengan Lenis:
- Momentum-based scrolling
- Hardware accelerated
- Touch optimized
- GSAP-like smoothness

```typescript
// Usage
import EnhancedSmoothScroll from '@/components/EnhancedSmoothScroll';

<EnhancedSmoothScroll />
```

### **2. GoogleMap**
Interactive warehouse location map:
- Dynamic location switching
- Mobile responsive
- Professional styling
- Google Maps integration

### **3. PortfolioCounter**
Animated statistics dengan Framer Motion:
- Smooth number transitions
- Scroll-triggered animations
- Customizable formatting
- Performance optimized

### **4. LazyProjectGrid**
Lazy loading portfolio grid:
- Intersection Observer API
- Skeleton loading states
- Infinite scroll capability
- Search & filter integration

---

## 🔧 **Configuration**

### **Environment Variables**

Create `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://mindotek.com
NEXT_PUBLIC_SITE_NAME="Mindotek - PT. Logamindo Teknologi Indonesia"

# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=contact@mindotek.com
NEXT_PUBLIC_CONTACT_PHONE=+62 21 29305768
```

### **Customization**

#### **1. Colors**
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#ED3F27',    // Red
  secondary: '#F97316',  // Orange
  // ... more colors
}
```

#### **2. Content**
Update JSON files in `src/data/`:
- `company.json` - Company information
- `services.json` - Services offered
- `locations.json` - Warehouse locations
- `portfolio-list.json` - Portfolio projects

#### **3. Images**
Replace files in `public/assets/`:
- `logo-mindotek.webp` - Company logo
- `banner-hero.webp` - Hero background
- `icon.webp` - Favicon

---

## 📊 **Performance Metrics**

### **Lighthouse Scores**
```
Performance:  95+
Accessibility: 95+
Best Practices: 100
SEO:          100
```

### **Core Web Vitals**
```
LCP (Largest Contentful Paint):   < 2.5s  ✅
FID (First Input Delay):           < 100ms ✅
INP (Interaction to Next Paint):   < 200ms ✅
CLS (Cumulative Layout Shift):     < 0.1   ✅
```

### **Optimization Features**
- ✅ Image optimization (WebP)
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification (SWC)
- ✅ Compression (gzip/brotli)
- ✅ Cache headers
- ✅ Service worker
- ✅ Resource preloading
- ✅ Critical CSS inlining
- ✅ Font optimization
- ✅ Lazy loading
- ✅ Skeleton loading states

---

## 🚀 **Deployment**

### **Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### **Other Platforms**

#### **Build for Production**
```bash
npm run build
```

#### **Start Production Server**
```bash
npm start
```

---

## 📱 **Browser Support**

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| iOS Safari | iOS 14+ |
| Chrome Mobile | Latest |

---

## 🔒 **Security**

### **Headers**
- Content Security Policy (CSP)
- X-XSS-Protection
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

### **Best Practices**
- No sensitive data in client code
- Environment variables for secrets
- Secure API endpoints
- Input validation
- XSS prevention

---

## 🎨 **Design System**

### **Color Palette**
```css
Primary Red:    #ED3F27
Secondary:      #F97316 (Orange)
Success:        #10B981 (Green)
Warning:        #F59E0B (Amber)
Error:          #EF4444 (Red)
Neutral:        Gray scale (50-900)
```

### **Typography**
```css
Font Family:    System font stack
Headings:       Bold, large sizes
Body:           Regular, readable sizes
Monospace:      'Courier New', monospace
```

### **Breakpoints**
```css
sm:  640px   (Mobile)
md:  768px   (Tablet)
lg:  1024px  (Desktop)
xl:  1280px  (Large Desktop)
2xl: 1536px  (Extra Large)
```

---

## 🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Coding Standards**
- Use TypeScript
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Test on multiple devices

---

## 📄 **License**

Copyright © 2025 **PT. Logamindo Teknologi Indonesia (Mindotek)**. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, transferring or reproduction of the contents of this project, via any medium is strictly prohibited.

---

## 📞 **Contact Information**

### **PT. Logamindo Teknologi Indonesia (Mindotek)**

**Head Office:**
- 📍 Kompleks Dutamas Fatmawati Blok B2 No. 26, Jakarta Selatan 12150
- 📞 Phone: +62 21 29305768
- 📧 Email: contact@mindotek.com
- 🌐 Website: [mindotek.com](https://mindotek.com)

**Warehouse Locations:**
- Jakarta (Sunter & Cakung)
- Bekasi
- Cikarang
- Tangerang
- Cibitung
- Subang

---

## 🙏 **Acknowledgments**

Special thanks to:
- **Next.js Team** - Amazing React framework
- **Vercel** - Hosting platform
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Utility-first CSS
- **Lenis** - Professional smooth scroll
- **Google Maps** - Location services
- **Open Source Community** - Inspiration & tools

---

## 📚 **Documentation**

Additional documentation:
- [IMPROVEMENTS.md](./IMPROVEMENTS.md) - Detailed improvements list
- [CHANGELOG.md](./CHANGELOG.md) - Version history
- [PERFORMANCE_OPTIMIZATION.md](./PERFORMANCE_OPTIMIZATION.md) - Performance guide
- [PARALLAX_SCROLL_IMPLEMENTATION.md](./PARALLAX_SCROLL_IMPLEMENTATION.md) - Parallax guide
- [NAVBAR_UPDATE.md](./NAVBAR_UPDATE.md) - Navigation guide

---

<div align="center">

**Made with ❤️ by Abhi From TPM Group**

*Quality & Safety - Excellence Since 2018*

[![TPM Group](https://img.shields.io/badge/TPM-Group-red?style=for-the-badge)](https://tpmgroup.com)

</div>
