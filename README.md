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

---

## ✨ **Features**

### **🎨 UI/UX Excellence**

#### **1. Advanced Parallax Scroll**
- **Multi-Layer Parallax**: 4 layers dengan kecepatan berbeda
- **GPU Accelerated**: Smooth 60fps animations
- **Performance Optimized**: Throttled scroll events
- **Visual Depth**: 3D effect yang engaging

```javascript
// 4 Parallax Layers:
- Background Image: Speed 0.4
- Dark Overlay: Speed 0.2
- Gradient Overlay: Speed 0.1
- Floating Elements: Speed 0.05 + rotation
```

#### **2. Sticky Navigation**
- **Desktop**: Transparent → White on scroll
- **Mobile**: Full-screen menu dengan logo
- **Active Indicators**: Highlight untuk section aktif
- **Smooth Scroll**: Animasi yang halus ke setiap section

#### **3. Hero Section**
- **Dynamic Background**: Parallax effect pada banner-hero.webp
- **Typewriter Effect**: Animated text untuk company name
- **Glassmorphism**: Modern blur effects
- **Responsive**: Perfect di semua screen sizes

#### **4. Interactive Animations**
- **Fade In Views**: Scroll-triggered animations
- **Count Up Stats**: Animated statistics
- **Hover Effects**: Interactive cards
- **Stagger Animations**: Sequential element entrance

### **⚡ Performance**

#### **Image Optimization**
- **Modern Formats**: WebP for all images
- **Lazy Loading**: Defer offscreen images
- **Responsive Sizes**: Optimized for each device
- **Blur Placeholders**: Smooth loading experience
- **Cache Control**: 1 year cache for static assets

#### **Code Optimization**
- **Dynamic Imports**: Heavy components loaded on-demand
- **Tree Shaking**: Remove unused code
- **SWC Minification**: Fastest minification
- **Code Splitting**: Vendor & common chunks
- **Webpack Config**: Advanced optimization

#### **Performance Monitoring**
- **Web Vitals**: LCP, FID, INP, CLS, FCP, TTFB
- **Resource Preloader**: Critical resources
- **Performance Optimizer**: Reduce main-thread blocking
- **Service Worker**: Offline capabilities

### **🔍 SEO & Analytics**

#### **SEO Optimization**
- **Meta Tags**: Complete meta information
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter sharing
- **Structured Data**: JSON-LD schema
  - Organization schema
  - Breadcrumb schema
  - Service schema
- **Sitemap**: Dynamic sitemap.xml
- **Robots.txt**: Proper crawl instructions

#### **Analytics Integration**
- **Google Analytics**: User behavior tracking
- **Microsoft Clarity**: Session recordings
- **Web Vitals**: Performance monitoring
- **Custom Events**: Track user interactions

### **📱 Mobile Excellence**

#### **Mobile-First Design**
- **Touch Optimized**: Large touch targets
- **Responsive Layout**: Perfect on all screens
- **Fast on 3G**: Optimized for slow connections
- **Mobile Menu**: Full-screen navigation
- **Swipe Gestures**: Natural interactions

#### **Progressive Web App (PWA)**
- **Web Manifest**: App-like experience
- **Service Worker**: Offline support
- **Cache Strategy**: Fast repeat visits
- **Install Prompt**: Add to home screen

---

## 🛠️ **Tech Stack**

### **Core Technologies**
```
Framework:       Next.js 15.5.4 (App Router)
React:           19.1.0 (Server & Client Components)
TypeScript:      5.x (Type Safety)
Styling:         Tailwind CSS 4 (Utility-First)
Animations:      Framer Motion 12.23.22 (Smooth Animations)
Icons:           Lucide React (Modern Icons)
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
npm run format       # Format code with Prettier

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
│   │   ├── performance.tsx           # Web Vitals monitoring
│   │   ├── sitemap.ts                # Dynamic sitemap
│   │   ├── services/                 # Services pages
│   │   └── warehouse-locations/      # Location pages
│   │
│   ├── components/                   # React Components
│   │   ├── animations/               # Animation Components
│   │   │   ├── PerformanceFadeIn.tsx # Optimized fade-in
│   │   │   ├── CountUp.tsx           # Number counter
│   │   │   └── HoverCard.tsx         # Interactive cards
│   │   │
│   │   ├── Navigation.tsx            # Desktop navigation
│   │   ├── MobileMenu.tsx            # Mobile menu
│   │   ├── HeroBackground.tsx        # Hero background wrapper
│   │   ├── AdvancedHeroParallax.tsx  # Multi-layer parallax
│   │   ├── WorkingParallax.tsx       # Simple parallax
│   │   ├── StatsCounter.tsx          # Animated statistics
│   │   ├── FeatureShowcase.tsx       # Feature grid
│   │   ├── CTASection.tsx            # Call-to-action
│   │   ├── Footer.tsx                # Footer component
│   │   ├── GoogleMap.tsx             # Map integration
│   │   ├── ScrollToTop.tsx           # Scroll button
│   │   ├── LazyImage.tsx             # Lazy loading images
│   │   ├── LoadingSkeleton.tsx       # Loading states
│   │   ├── ResourcePreloader.tsx     # Resource preloading
│   │   ├── CriticalCSS.tsx           # Inline critical CSS
│   │   ├── PerformanceOptimizer.tsx  # JS optimization
│   │   └── ScrollHandler.tsx         # Smooth scroll
│   │
│   ├── data/                         # JSON Data Files
│   │   ├── company.json              # Company information
│   │   ├── services.json             # Services data
│   │   ├── locations.json            # Warehouse locations
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
│   │   └── service-placeholder.svg   # Placeholder
│   ├── robots.txt                    # Search engine rules
│   ├── site.webmanifest              # PWA manifest
│   └── sw.js                         # Service worker
│
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript config
├── tailwind.config.ts                # Tailwind config
├── postcss.config.mjs                # PostCSS config
├── eslint.config.mjs                 # ESLint config
├── components.json                   # shadcn/ui config
└── package.json                      # Dependencies & scripts
```

---

## 🎯 **Key Components**

### **1. AdvancedHeroParallax**
Multi-layer parallax effect untuk hero section:
- 4 independent layers
- Different scroll speeds
- GPU accelerated transforms
- Throttled scroll events

```typescript
// Usage
import AdvancedHeroParallax from '@/components/AdvancedHeroParallax';

<AdvancedHeroParallax />
```

### **2. MobileMenu**
Full-screen mobile navigation:
- Active section detection
- Smooth scroll to sections
- Auto-close on navigation
- Sticky header dengan logo

### **3. PerformanceFadeIn**
Optimized fade-in animations:
- Intersection Observer API
- Direction control (up, down, left, right)
- Stagger children animations
- Performance optimized

### **4. LazyImage**
Lazy loading images:
- Intersection Observer
- Blur placeholder
- Progressive loading
- Error handling

---

## 🔧 **Configuration**

### **Environment Variables**

Create `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://mindotek.com
NEXT_PUBLIC_SITE_NAME="Mindotek - PT. Logamindo Teknologi Indonesia"

# Analytics (Replace with your IDs)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=your_clarity_id

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
- etc.

#### **3. Images**
Replace files in `public/assets/`:
- `logo-mindotek.webp` - Company logo
- `banner-hero.webp` - Hero background
- `icon.webp` - Favicon

#### **4. Analytics**
Uncomment scripts in `src/app/layout.tsx` and add your IDs.

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

#### **Deploy Static Export**
Update `next.config.ts`:
```typescript
output: 'export'
```

Then deploy the `out/` folder.

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
- Strict-Transport-Security (HSTS)

### **Best Practices**
- No sensitive data in client code
- Environment variables for secrets
- Secure API endpoints
- Input validation
- XSS prevention

---

## 📈 **Analytics & Monitoring**

### **Google Analytics**
- Page views
- User behavior
- Conversion tracking
- Custom events

### **Microsoft Clarity**
- Session recordings
- Heatmaps
- User insights
- Click tracking

### **Web Vitals**
- Core Web Vitals monitoring
- Performance metrics
- Real user monitoring (RUM)
- Console logging in development

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

### **Spacing Scale**
```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
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
- **Lucide** - Beautiful icons
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

**Made with ❤️ by TPM Group**

*Quality & Safety - Excellence Since 2018*

[![TPM Group](https://img.shields.io/badge/TPM-Group-red?style=for-the-badge)](https://tpmgroup.com)

</div>
