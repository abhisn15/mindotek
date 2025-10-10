# Parallax Effect Implementation - Hero Background

## 🎯 Efek Parallax yang Dibuat

Saya telah membuat efek parallax yang canggih untuk hero background dengan multiple layers yang bergerak dengan kecepatan berbeda saat di-scroll.

## 🎨 Fitur Parallax

### **1. Multiple Layers dengan Kecepatan Berbeda:**
- **Layer 1 (Background Image)**: Speed 0.5 - Gambar utama bergerak paling cepat
- **Layer 2 (Overlay)**: Speed 0.3 - Overlay gelap dan vignette bergerak sedang
- **Layer 3 (Gradient)**: Speed 0.2 - Gradient overlay bergerak lebih lambat
- **Layer 4 (Floating Elements)**: Speed 0.1 - Elemen floating bergerak paling lambat

### **2. Komponen yang Dibuat:**

#### **AdvancedParallax.tsx**
- Komponen utama untuk mengelola multiple parallax layers
- Menggunakan `requestAnimationFrame` untuk performa optimal
- Throttled scroll events untuk smooth performance
- Easing effect untuk transisi yang lebih natural

#### **ParallaxBackground.tsx**
- Komponen utility untuk single layer parallax
- Dapat digunakan untuk elemen lain yang membutuhkan efek parallax

#### **HeroBackground.tsx (Updated)**
- Menggunakan AdvancedParallax untuk multiple layers
- Konfigurasi layer yang sudah dioptimalkan
- Performance-optimized dengan proper refs

## 🚀 Technical Implementation

### **Scroll Handling:**
```javascript
const handleScroll = useCallback(() => {
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;
  
  // Calculate scroll progress
  const scrollProgress = Math.min(scrollTop / windowHeight, 1);
  
  // Different speeds for different layers
  const backgroundSpeed = scrollTop * 0.5;
  const overlaySpeed = scrollTop * 0.3;
  const gradientSpeed = scrollTop * 0.2;
}, []);
```

### **Performance Optimizations:**
- **RequestAnimationFrame**: Semua transform menggunakan RAF
- **Passive Event Listeners**: Scroll events menggunakan passive: true
- **Throttled Updates**: Scroll events di-throttle untuk performa
- **GPU Acceleration**: Menggunakan translate3d untuk hardware acceleration
- **Will-Change**: CSS property untuk optimasi browser

### **CSS Optimizations:**
```css
.parallax-layer {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
```

## 🎭 Visual Effects

### **Layer 1 - Background Image:**
- Gambar warehouse dengan brightness 80%
- Bergerak dengan speed 0.5 (paling cepat)
- Ukuran 120% height untuk coverage yang baik

### **Layer 2 - Overlay:**
- Dark overlay (black/30%) untuk text readability
- Vignette effect dengan radial gradient
- Bergerak dengan speed 0.3

### **Layer 3 - Gradient:**
- Vertical gradient dari bawah ke atas
- Subtle color tint dengan red/orange theme
- Bergerak dengan speed 0.2

### **Layer 4 - Floating Elements:**
- Gradient orbs dengan blur effect
- Animate pulse untuk efek breathing
- Bergerak dengan speed 0.1 (paling lambat)

## 📱 Responsive Design

- **Mobile**: Semua layers tetap berfungsi dengan baik
- **Tablet**: Optimized untuk ukuran medium
- **Desktop**: Full effect dengan semua layers

## ⚡ Performance Features

### **Optimizations:**
1. **Hardware Acceleration**: Menggunakan translate3d
2. **Throttled Scroll**: Mencegah excessive updates
3. **RequestAnimationFrame**: Smooth 60fps animations
4. **Passive Listeners**: Non-blocking scroll events
5. **Will-Change**: Browser optimization hints

### **Memory Management:**
- Proper cleanup pada unmount
- Efficient ref management
- No memory leaks

## 🎯 Hasil Akhir

Efek parallax memberikan:
- **Depth**: Multiple layers menciptakan efek kedalaman
- **Smooth**: Animasi yang halus dan responsif
- **Performance**: Optimized untuk performa tinggi
- **Modern**: Tampilan yang modern dan premium
- **Responsive**: Bekerja di semua device

## 🔧 Customization

### **Mengubah Speed:**
```javascript
const parallaxLayers = [
  {
    speed: 0.5, // Ubah nilai ini untuk kecepatan berbeda
    // ...
  }
];
```

### **Menambah Layer:**
```javascript
{
  speed: 0.15,
  className: "custom-layer",
  children: <YourCustomComponent />
}
```

### **Mengubah Easing:**
```javascript
// Di AdvancedParallax.tsx
const easedYPos = yPos * (1 - scrollProgress * 0.3); // Ubah 0.3 untuk easing berbeda
```

## 🎉 Kesimpulan

Efek parallax hero background sekarang memberikan:
- **Visual Appeal**: Tampilan yang menarik dan modern
- **Performance**: Smooth dan optimized
- **Responsive**: Bekerja di semua device
- **Customizable**: Mudah untuk dimodifikasi

Hero section sekarang memiliki efek parallax yang professional dan smooth! 🚀
