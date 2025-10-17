# TPM Facility - Image Optimization Scripts

## optimize-all-images.js

Script untuk mengoptimalkan semua gambar di project tpm-facility.

### Fitur

- ✅ Konversi JPG/JPEG/PNG ke WebP
- ✅ Optimasi existing WebP images
- ✅ Resize gambar besar (max 1920px width)
- ✅ Smart compression dengan quality 85
- ✅ Generate detailed JSON report
- ✅ Safe operation - hanya replace jika lebih kecil

### Cara Menggunakan

```bash
# Dari root directory tpm-facility
npm run optimize-images
```

### Konfigurasi

Edit konfigurasi di dalam file `optimize-all-images.js`:

```javascript
const config = {
  webpQuality: 85,      // Quality WebP (0-100)
  webpEffort: 6,        // Compression effort (0-6)
  maxWidth: 1920,       // Maximum width untuk resize
  optimizeExisting: true // Optimize existing WebP files
};
```

### Output

Script akan menghasilkan:
1. Optimized images (replace originals)
2. Console output dengan progress
3. `optimization-report.json` dengan detail hasil

### Requirements

- Node.js 16+
- Sharp library (sudah terinstall via npm)

### Safety

Script ini aman karena:
- Hanya replace file jika optimization berhasil mengurangi size
- Menggunakan temporary file untuk proses
- Tidak menghapus original jika optimization gagal
- Generate backup report sebelum operation

## Tips

### Untuk Gambar Baru

1. **Best Practice**: Upload langsung sebagai WebP jika memungkinkan
2. **Alternative**: Upload JPG/PNG, lalu run script
3. **Large Images**: Script akan auto-resize jika > 1920px

### Performance Tips

- Run script setelah menambahkan banyak gambar baru
- Check report untuk melihat savings per file
- Consider CDN untuk serving optimized images

## Troubleshooting

### Error: Sharp not installed
```bash
npm install sharp --save-dev
```

### Permission denied
```bash
chmod +x scripts/optimize-all-images.js
```

### Out of memory
Reduce `maxWidth` atau process images in batches

## Report Format

```json
{
  "timestamp": "2025-10-17T...",
  "config": { ... },
  "summary": {
    "filesProcessed": 34,
    "originalSizeMB": "16.96",
    "optimizedSizeMB": "1.73",
    "savingsPercent": "89.82"
  },
  "files": [...]
}
```

