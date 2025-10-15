# Banner Hero Images

This folder contains the hero banner images for the TPM Group website carousel.

## Required Images:

1. **security.webp** - Security Services banner
   - Should show: Guard officers, security equipment, CCTV systems
   - Dimensions: 1920x1080px (Full HD)
   - Format: WebP for optimal performance

2. **cleaning.webp** - Cleaning & Gardening banner
   - Should show: Cleaning staff, gardening, high-rise building cleaning
   - Dimensions: 1920x1080px (Full HD)
   - Format: WebP for optimal performance

3. **maintenance.webp** - Property Maintenance banner
   - Should show: Technical maintenance, pest control, landscaping
   - Dimensions: 1920x1080px (Full HD)
   - Format: WebP for optimal performance

4. **office.webp** - Office Support banner
   - Should show: Front desk, administration, customer service
   - Dimensions: 1920x1080px (Full HD)
   - Format: WebP for optimal performance

## Image Guidelines:

- **Resolution**: 1920x1080px minimum
- **Format**: WebP for best performance
- **Quality**: High quality, professional photos
- **Style**: Consistent with TPM Group branding
- **Content**: Should represent the specific service category
- **Overlay**: Images will have dark overlay for text readability

## Current Status:

✅ **Carousel Component Ready** - The hero carousel is fully functional with placeholder images from Unsplash.

⚠️ **Replace with Actual Images** - To use your own images:

1. Add your images to this folder with these exact names:
   - `security.webp`
   - `cleaning.webp` 
   - `maintenance.webp`
   - `office.webp`

2. Update the image paths in `src/components/HeroCarousel.tsx`:
   ```typescript
   // Change from:
   image: 'https://images.unsplash.com/...'
   
   // To:
   image: '/assets/banner-hero/security.webp'
   ```

3. The carousel will automatically use your images once the paths are updated.

## Current Placeholder Images:
- **Security**: Professional security guard image
- **Cleaning**: Cleaning service professional image  
- **Maintenance**: Technical maintenance worker image
- **Office**: Modern office environment image
