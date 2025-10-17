/**
 * Script to optimize all images in tpm-facility project
 * - Converts JPG/JPEG/PNG to WebP
 * - Optimizes existing WebP images
 * - Generates performance report
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets');

// Configuration
const config = {
  webpQuality: 85,
  webpEffort: 6,
  maxWidth: 1920, // Max width for large images
  optimizeExisting: true
};

// Statistics
let stats = {
  converted: 0,
  optimized: 0,
  totalOriginalSize: 0,
  totalOptimizedSize: 0,
  files: []
};

// Helper function to get all image files recursively
function getAllImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllImageFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png|JPG|JPEG|PNG|webp)$/i.test(file)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Convert and optimize image
async function processImage(inputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const fileName = path.basename(inputPath);
    const originalSize = fs.statSync(inputPath).size;
    
    console.log(`\n📸 Processing: ${fileName}`);
    console.log(`   Original size: ${(originalSize / 1024).toFixed(2)} KB`);
    
    let outputPath = inputPath;
    let needsConversion = false;
    
    // Check if needs conversion to webp
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      needsConversion = true;
    }
    
    // Skip if it's already webp and we're not optimizing existing
    if (ext === '.webp' && !config.optimizeExisting) {
      console.log('   ⏭️  Skipping (already webp)');
      return;
    }
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Create temporary output path
    const tempPath = outputPath + '.tmp';
    
    // Process image
    let sharpInstance = sharp(inputPath);
    
    // Resize if too large
    if (metadata.width > config.maxWidth) {
      sharpInstance = sharpInstance.resize(config.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Convert/optimize to webp
    await sharpInstance
      .webp({
        quality: config.webpQuality,
        effort: config.webpEffort,
        smartSubsample: true,
      })
      .toFile(tempPath);
    
    const optimizedSize = fs.statSync(tempPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`   Optimized size: ${(optimizedSize / 1024).toFixed(2)} KB`);
    console.log(`   Savings: ${savings}%`);
    
    // Update stats
    stats.totalOriginalSize += originalSize;
    stats.totalOptimizedSize += optimizedSize;
    
    if (optimizedSize < originalSize) {
      // Replace with optimized version
      fs.copyFileSync(tempPath, outputPath);
      fs.unlinkSync(tempPath);
      
      // Delete original if it was converted
      if (needsConversion && inputPath !== outputPath) {
        fs.unlinkSync(inputPath);
        console.log(`   ✅ Converted to WebP and deleted original`);
        stats.converted++;
      } else {
        console.log(`   ✅ Optimized`);
        stats.optimized++;
      }
      
      stats.files.push({
        name: fileName,
        originalSize: originalSize,
        optimizedSize: optimizedSize,
        savings: savings
      });
    } else {
      fs.unlinkSync(tempPath);
      console.log(`   ℹ️  No improvement, keeping original`);
    }
    
  } catch (error) {
    console.error(`   ❌ Error processing ${path.basename(inputPath)}:`, error.message);
  }
}

// Main function
async function optimizeAllImages() {
  console.log('🚀 Starting TPM Facility Image Optimization\n');
  console.log('Configuration:');
  console.log(`  - WebP Quality: ${config.webpQuality}`);
  console.log(`  - WebP Effort: ${config.webpEffort}`);
  console.log(`  - Max Width: ${config.maxWidth}px`);
  console.log(`  - Optimize Existing WebP: ${config.optimizeExisting}\n`);
  
  console.log('📂 Scanning for images...');
  const imageFiles = getAllImageFiles(assetsDir);
  console.log(`   Found ${imageFiles.length} image files\n`);
  
  console.log('=' .repeat(60));
  
  // Process each image
  for (const imagePath of imageFiles) {
    await processImage(imagePath);
  }
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 OPTIMIZATION SUMMARY\n');
  console.log(`Total files processed: ${stats.converted + stats.optimized}`);
  console.log(`Files converted to WebP: ${stats.converted}`);
  console.log(`Files optimized: ${stats.optimized}`);
  console.log(`\nOriginal total size: ${(stats.totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized total size: ${(stats.totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  
  const totalSavings = ((stats.totalOriginalSize - stats.totalOptimizedSize) / stats.totalOriginalSize * 100).toFixed(2);
  console.log(`Total savings: ${totalSavings}% (${((stats.totalOriginalSize - stats.totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB)\n`);
  
  console.log('✨ Optimization complete!\n');
  
  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    config: config,
    summary: {
      filesProcessed: stats.converted + stats.optimized,
      filesConverted: stats.converted,
      filesOptimized: stats.optimized,
      originalSizeMB: (stats.totalOriginalSize / 1024 / 1024).toFixed(2),
      optimizedSizeMB: (stats.totalOptimizedSize / 1024 / 1024).toFixed(2),
      savingsPercent: totalSavings,
      savingsMB: ((stats.totalOriginalSize - stats.totalOptimizedSize) / 1024 / 1024).toFixed(2)
    },
    files: stats.files
  };
  
  const reportPath = path.join(__dirname, '../optimization-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📝 Detailed report saved to: optimization-report.json`);
}

// Run the optimization
optimizeAllImages().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

