const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../mindotek/public/assets/clients');
const targetDir = path.join(__dirname, '../tpm-facility/public/assets/clients');

// Create target directory if not exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Function to convert filename to URL-friendly format
function normalizeFilename(filename) {
  return filename
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/[()]/g, '')           // Remove parentheses
    .toLowerCase()                   // Convert to lowercase
    .replace(/\.png$|\.jpg$|\.jpeg$/i, '.webp'); // Change extension to .webp
}

async function convertToWebP() {
  try {
    const files = fs.readdirSync(sourceDir);
    
    // Filter image files only
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg'].includes(ext);
    });

    // console.log(`Found ${imageFiles.length} images to convert\n`);

    for (const file of imageFiles) {
      const sourcePath = path.join(sourceDir, file);
      const normalizedName = normalizeFilename(file);
      const targetPath = path.join(targetDir, normalizedName);

      // Skip if already converted
      if (fs.existsSync(targetPath)) {
        // console.log(`⏭️  Skipping ${file} (already exists)`);
        continue;
      }

      try {
        await sharp(sourcePath)
          .resize(400, 200, {
            fit: 'inside',
            withoutEnlargement: true,
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .webp({ quality: 85 })
          .toFile(targetPath);

        const stats = fs.statSync(targetPath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        // console.log(`✅ Converted: ${file} → ${normalizedName} (${sizeKB} KB)`);
      } catch (error) {
        console.error(`❌ Error converting ${file}:`, error.message);
      }
    }

    // console.log('\n🎉 Conversion complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

convertToWebP();

