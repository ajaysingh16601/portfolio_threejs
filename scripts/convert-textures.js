#!/usr/bin/env node

/**
 * Script to convert PNG textures to WebP format
 * Run: node scripts/convert-textures.js
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEXTURES_DIR = path.join(__dirname, '../public/textures');

const findPngFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findPngFiles(filePath, fileList);
    } else if (file.toLowerCase().endsWith('.png')) {
      fileList.push(filePath);
    }
  });

  return fileList;
};

console.log('🚀 Starting PNG to WebP conversion...\n');

// Check if ImageMagick or cwebp is installed
const checkDependency = () => {
  try {
    execSync('cwebp -version', { stdio: 'ignore' });
    return 'cwebp';
  } catch {
    try {
      execSync('magick -version', { stdio: 'ignore' });
      return 'imagemagick';
    } catch {
      return null;
    }
  }
};

const converter = checkDependency();

if (!converter) {
  console.error(
    '❌ Required tool not found!\n' +
    'Install one of these:\n' +
    '  - cwebp: npm install -g cwebp\n' +
    '  - ImageMagick: https://imagemagick.org/script/download.php\n'
  );
  process.exit(1);
}

const convertImage = (pngPath) => {
  const webpPath = pngPath.replace(/\.png$/i, '.webp');
  const fileName = path.basename(pngPath);
  const pngSize = (fs.statSync(pngPath).size / 1024).toFixed(2);

  try {
    console.log(`📸 Converting ${fileName}...`);

    if (converter === 'cwebp') {
      execSync(`cwebp -q 80 "${pngPath}" -o "${webpPath}"`, { stdio: 'pipe' });
    } else {
      execSync(`magick "${pngPath}" -quality 80 "${webpPath}"`, { stdio: 'pipe' });
    }

    const webpSize = (fs.statSync(webpPath).size / 1024).toFixed(2);
    const savings = (((pngSize - webpSize) / pngSize) * 100).toFixed(1);

    console.log(`✅ Converted: ${pngSize}KB → ${webpSize}KB (${savings}% reduction)\n`);
  } catch (error) {
    console.error(`❌ Failed to convert ${fileName}:`, error.message);
  }
};

// Find and convert all PNG files
const pngFiles = findPngFiles(TEXTURES_DIR);

if (pngFiles.length === 0) {
  console.log('ℹ️  No PNG files found in textures directory');
  process.exit(0);
}

console.log(`Found ${pngFiles.length} PNG file(s) to convert\n`);

pngFiles.forEach((pngPath) => {
  convertImage(pngPath);
});

console.log('✨ All textures converted successfully!');
console.log(
  '\n💡 Update your code to use .webp files:\n' +
  '   const monitortxt = useTexture("textures/desk/monitor.webp");\n'
);
