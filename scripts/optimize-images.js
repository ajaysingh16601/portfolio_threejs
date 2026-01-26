/**
 * Image Optimization Script
 * Converts PNG images to WebP format for better compression
 * Run: node scripts/optimize-images.js
 */

import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '..', 'public');
const BACKUP_DIR = join(__dirname, '..', 'backups', 'images');

// Quality settings for different image types
const QUALITY_SETTINGS = {
  large: 80,    // For images > 500KB
  medium: 85,   // For images 100-500KB
  small: 90     // For images < 100KB
};

// Directories to process
const DIRS_TO_PROCESS = [
  'public/assets',
  'public/textures'
];

async function ensureDir(dir) {
  try {
    await mkdir(dir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

async function getFileSize(filePath) {
  const stats = await stat(filePath);
  return stats.size;
}

function getQuality(sizeInBytes) {
  const sizeInKB = sizeInBytes / 1024;
  if (sizeInKB > 500) return QUALITY_SETTINGS.large;
  if (sizeInKB > 100) return QUALITY_SETTINGS.medium;
  return QUALITY_SETTINGS.small;
}

async function processImage(filePath, relativePath) {
  const ext = extname(filePath).toLowerCase();
  
  // Skip if not PNG or JPG
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return null;
  }

  const baseName = basename(filePath, ext);
  const webpPath = join(dirname(filePath), `${baseName}.webp`);
  const backupPath = join(BACKUP_DIR, relativePath);

  try {
    const fileSize = await getFileSize(filePath);
    const quality = getQuality(fileSize);

    // Create backup
    await ensureDir(dirname(backupPath));
    await sharp(filePath).toFile(backupPath);

    // Convert to WebP
    const info = await sharp(filePath)
      .webp({ quality })
      .toFile(webpPath);

    const originalSizeKB = (fileSize / 1024).toFixed(2);
    const newSizeKB = (info.size / 1024).toFixed(2);
    const savings = (((fileSize - info.size) / fileSize) * 100).toFixed(1);

    return {
      original: filePath,
      webp: webpPath,
      originalSize: originalSizeKB,
      newSize: newSizeKB,
      savings
    };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

async function walkDirectory(dir, baseDir = dir) {
  const files = await readdir(dir);
  const results = [];

  for (const file of files) {
    const filePath = join(dir, file);
    const relativePath = filePath.replace(baseDir + '/', '');
    const stats = await stat(filePath);

    if (stats.isDirectory()) {
      const subResults = await walkDirectory(filePath, baseDir);
      results.push(...subResults);
    } else {
      results.push({ filePath, relativePath });
    }
  }

  return results;
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  let totalOriginal = 0;
  let totalNew = 0;
  let processedCount = 0;

  for (const dir of DIRS_TO_PROCESS) {
    const fullDir = join(process.cwd(), dir);
    
    try {
      const files = await walkDirectory(fullDir, fullDir);
      
      for (const { filePath, relativePath } of files) {
        const result = await processImage(filePath, relativePath);
        
        if (result) {
          processedCount++;
          totalOriginal += parseFloat(result.originalSize);
          totalNew += parseFloat(result.newSize);
          
          console.log(`✅ ${basename(result.original)}`);
          console.log(`   ${result.originalSize}KB → ${result.newSize}KB (${result.savings}% savings)\n`);
        }
      }
    } catch (error) {
      console.warn(`⚠️  Could not process ${dir}:`, error.message);
    }
  }

  if (processedCount > 0) {
    const totalSavings = (((totalOriginal - totalNew) / totalOriginal) * 100).toFixed(1);
    console.log('\n📊 Summary:');
    console.log(`   Processed: ${processedCount} images`);
    console.log(`   Original: ${totalOriginal.toFixed(2)}KB`);
    console.log(`   Optimized: ${totalNew.toFixed(2)}KB`);
    console.log(`   Total savings: ${totalSavings}%`);
    console.log(`\n✨ Backups saved to: ${BACKUP_DIR}`);
  } else {
    console.log('ℹ️  No images found to optimize');
  }
}

main().catch(console.error);
