/**
 * 3D Model Optimization Script
 * Compresses GLB/GLTF files using gltf-transform with Draco compression
 * Run: node scripts/optimize-models.js
 */

import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { 
  draco, 
  textureCompress, 
  dedup,
  prune,
  quantize,
  resample,
  weld
} from '@gltf-transform/functions';
import draco3d from 'draco3dgltf';
import { readdir, stat, mkdir, copyFile } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const MODELS_DIR = join(__dirname, '..', 'public', 'models');
const BACKUP_DIR = join(__dirname, '..', 'backups', 'models');

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

async function optimizeModel(filePath) {
  const fileName = basename(filePath);
  const backupPath = join(BACKUP_DIR, fileName);
  
  try {
    console.log(`\n🔧 Processing: ${fileName}`);
    
    // Backup original
    await ensureDir(BACKUP_DIR);
    await copyFile(filePath, backupPath);
    console.log(`   ✅ Backup created`);

    // Load model
    const io = new NodeIO()
      .registerExtensions(ALL_EXTENSIONS)
      .registerDependencies({
        'draco3d.decoder': await draco3d.createDecoderModule(),
        'draco3d.encoder': await draco3d.createEncoderModule(),
      });
    const document = await io.read(filePath);

    // Get original size
    const originalSize = await getFileSize(filePath);
    const originalSizeKB = (originalSize / 1024).toFixed(2);

    console.log(`   📦 Original size: ${originalSizeKB}KB`);
    console.log(`   ⚙️  Optimizing...`);

    // Apply optimizations
    await document.transform(
      // Remove duplicate data
      dedup(),
      
      // Remove unused nodes
      prune(),
      
      // Merge duplicate vertices
      weld({ tolerance: 0.0001 }),
      
      // Reduce precision of vertex attributes
      quantize({
        quantizePosition: 14,
        quantizeNormal: 10,
        quantizeTexcoord: 12,
        quantizeColor: 8
      }),
      
      // Resample animations (if any)
      resample(),
      
      // Apply Draco compression
      draco({
        encodeSpeed: 5,      // 0 (slowest/best) to 10 (fastest/worst)
        decodeSpeed: 5,
        method: 'edgebreaker'
      })
    );

    // Write optimized model
    await io.write(filePath, document);

    // Get new size
    const newSize = await getFileSize(filePath);
    const newSizeKB = (newSize / 1024).toFixed(2);
    const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    console.log(`   ✨ Optimized size: ${newSizeKB}KB`);
    console.log(`   💾 Savings: ${savings}%`);

    return {
      file: fileName,
      originalSize: originalSizeKB,
      newSize: newSizeKB,
      savings
    };
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    // Restore backup on error
    try {
      await copyFile(backupPath, filePath);
      console.log(`   ↩️  Restored from backup`);
    } catch (restoreError) {
      console.error(`   ⚠️  Could not restore backup: ${restoreError.message}`);
    }
    return null;
  }
}

async function findGLBFiles(dir) {
  const files = await readdir(dir, { recursive: true });
  const glbFiles = [];

  for (const file of files) {
    const fullPath = join(dir, file);
    const stats = await stat(fullPath);
    
    if (stats.isFile() && (extname(file).toLowerCase() === '.glb' || extname(file).toLowerCase() === '.gltf')) {
      glbFiles.push(fullPath);
    }
  }

  return glbFiles;
}

async function main() {
  console.log('🚀 Starting 3D model optimization...');
  console.log('📁 Scanning models directory...\n');

  try {
    const glbFiles = await findGLBFiles(MODELS_DIR);
    
    if (glbFiles.length === 0) {
      console.log('ℹ️  No GLB/GLTF files found');
      return;
    }

    console.log(`Found ${glbFiles.length} model(s) to optimize\n`);
    console.log('=' .repeat(50));

    const results = [];
    let totalOriginal = 0;
    let totalNew = 0;

    for (const file of glbFiles) {
      const result = await optimizeModel(file);
      if (result) {
        results.push(result);
        totalOriginal += parseFloat(result.originalSize);
        totalNew += parseFloat(result.newSize);
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('\n📊 Optimization Summary:\n');
    
    results.forEach(r => {
      console.log(`   ${r.file}`);
      console.log(`   ${r.originalSize}KB → ${r.newSize}KB (${r.savings}% savings)`);
      console.log();
    });

    if (results.length > 0) {
      const totalSavings = (((totalOriginal - totalNew) / totalOriginal) * 100).toFixed(1);
      console.log(`✅ Total: ${totalOriginal.toFixed(2)}KB → ${totalNew.toFixed(2)}KB`);
      console.log(`💰 Overall savings: ${totalSavings}%`);
      console.log(`\n🔒 Original files backed up to: ${BACKUP_DIR}`);
    }

  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

main().catch(console.error);
