const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '../public/assets/portfolio');

async function convertToWebP() {
  try {
    const files = fs.readdirSync(portfolioDir);
    
    for (const file of files) {
      if (file.endsWith('.png')) {
        const inputPath = path.join(portfolioDir, file);
        const outputPath = path.join(portfolioDir, file.replace('.png', '.webp'));
        
        console.log(`Converting ${file}...`);
        
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);
        
        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(2);
        
        console.log(`✅ ${file} -> ${file.replace('.png', '.webp')}`);
        console.log(`   Original: ${(inputStats.size / 1024).toFixed(2)} KB`);
        console.log(`   WebP: ${(outputStats.size / 1024).toFixed(2)} KB`);
        console.log(`   Savings: ${savings}%\n`);
      }
    }
    
    console.log('✅ All images converted successfully!');
  } catch (error) {
    console.error('❌ Error converting images:', error);
    process.exit(1);
  }
}

convertToWebP();
