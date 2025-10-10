# Portfolio - Quick Start Guide

## 🚀 **Quick Access**

### **URLs:**
- **Portfolio Main**: `http://localhost:3000/portfolio`
- **WMS Project**: `http://localhost:3000/portfolio/wms`

---

## 🎯 **Navigation**

### **From Homepage:**
1. Click **"Portfolio"** in navigation bar (desktop/mobile)
2. Browse projects in grid layout
3. Click on **WMS** card to view details

### **From Mobile Menu:**
1. Tap hamburger menu
2. Tap **"Portfolio"**
3. View portfolio grid

---

## ✨ **Key Features to Test**

### **1. Sticky Scroll Reveal Effect**
**Location**: `/portfolio/wms`

**What to test:**
- Scroll down the page slowly
- Notice the **text on the left** scrolls normally
- Notice the **image on the right** stays sticky and changes
- Watch the **progress indicator** at the bottom of text
- See **smooth transitions** between sections

**Expected behavior:**
- 8 different screens showing WMS features
- Smooth fade-in/fade-out animations
- Progress bar shows current position
- Image changes as you scroll through each section

### **2. Portfolio Grid**
**Location**: `/portfolio`

**What to test:**
- Hover over portfolio cards
- Click on WMS card
- Notice the hover animations:
  - Image scales up
  - Overlay appears
  - Arrow icon moves
  - Shadow increases

**Expected behavior:**
- Responsive grid (1/2/3 columns based on screen size)
- Smooth hover transitions
- Clear project information
- Easy navigation to detail pages

### **3. Responsive Design**
**What to test:**
- Resize browser window
- Test on mobile device
- Test on tablet
- Test on desktop

**Expected behavior:**
- Layout adapts smoothly
- Images resize appropriately
- Text remains readable
- Navigation works on all sizes

---

## 🖼️ **Image Optimization**

### **WebP Conversion Results:**

All WMS images converted from PNG to WebP with **92% average savings**:

```
wms-homepage.webp              69.49 KB  (was 1,421.98 KB)
wms-inbound.webp               32.88 KB  (was 447.85 KB)
wms-outbond.webp               36.35 KB  (was 481.69 KB)
wms-stock.webp                 39.05 KB  (was 498.78 KB)
wms-key-performance-indicator  39.05 KB  (was 509.66 KB)
wms-inventory-report.webp      41.20 KB  (was 542.70 KB)
wms-aging-report.webp          20.64 KB  (was 215.19 KB)
wms-transport-usage.webp       26.22 KB  (was 321.79 KB)
```

**Total**: ~314 KB (instead of ~4 MB!) 🎉

---

## 📍 **Updated Locations**

### **New Location Added:**
**Tangerang, Banten**
- PT Tunas Perkasa Muda Logistic (TPM)
- Google Maps iframe embedded
- Correct coordinates

### **Updated Location:**
**Pekanbaru, Riau**
- Gudang TPM Logistik
- Updated Google Maps iframe
- Correct coordinates

---

## 🎨 **Design Highlights**

### **Color Scheme:**
- Primary: Red to Orange gradient
- Dark sections: Gray-900 to Black
- Light sections: White to Gray-50

### **Animations:**
- Fade-in on scroll
- Scale on hover
- Progress indicators
- Smooth transitions

### **Typography:**
- Bold headings
- Readable body text
- Clear labels
- Consistent spacing

---

## 🔧 **Development**

### **Run Development Server:**
```bash
npm run dev
```

### **Build for Production:**
```bash
npm run build
npm start
```

### **Convert More Images:**
```bash
node scripts/convert-images-to-webp.js
```

---

## 📱 **Mobile Testing**

### **Test Sticky Scroll on Mobile:**
1. Open `/portfolio/wms` on mobile
2. Scroll slowly through the page
3. Notice images change as you scroll
4. Text is readable and well-spaced
5. Progress indicators visible

### **Test Portfolio Grid on Mobile:**
1. Open `/portfolio` on mobile
2. Cards display in single column
3. Touch targets are large enough
4. Images load quickly (WebP!)
5. Navigation works smoothly

---

## 🎯 **Performance Tips**

### **Fast Loading:**
- Images are WebP (92% smaller!)
- Code splitting for routes
- Lazy loading for images
- Optimized bundle size

### **Smooth Animations:**
- GPU acceleration
- Framer Motion optimizations
- Throttled scroll events
- Will-change CSS hints

---

## 🐛 **Troubleshooting**

### **Images Not Loading:**
- Check `/public/assets/portfolio/` folder
- Ensure WebP files exist
- Check file paths in JSON data

### **Sticky Scroll Not Working:**
- Check browser console for errors
- Ensure Framer Motion is installed
- Test on desktop first, then mobile

### **Navigation Not Working:**
- Clear browser cache
- Restart development server
- Check for JavaScript errors

---

## 📚 **Additional Resources**

- [Full Documentation](./PORTFOLIO_IMPLEMENTATION.md)
- [Main README](./README.md)
- [Performance Guide](./PERFORMANCE_OPTIMIZATION.md)
- [Parallax Guide](./PARALLAX_SCROLL_IMPLEMENTATION.md)

---

## ✅ **Quick Checklist**

Before deploying, verify:
- [ ] All images converted to WebP
- [ ] Portfolio grid loads correctly
- [ ] WMS detail page shows all 8 sections
- [ ] Sticky scroll effect works smoothly
- [ ] Navigation links to Portfolio work
- [ ] Mobile menu Portfolio link works
- [ ] Google Maps iframes work (Tangerang & Pekanbaru)
- [ ] Responsive design on all screen sizes
- [ ] No console errors
- [ ] Fast page load times

---

## 🎉 **You're Ready!**

Portfolio is now ready to showcase the WMS project with:
- ✨ Beautiful sticky scroll effect
- 🖼️ Optimized WebP images
- 📱 Responsive design
- 🚀 Fast performance
- 🎨 Professional styling

**Go to**: `http://localhost:3000/portfolio` and explore! 🎊

---

**Questions? Check the [full documentation](./PORTFOLIO_IMPLEMENTATION.md)!**
