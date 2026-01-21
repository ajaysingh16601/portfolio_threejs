#!/usr/bin/env node

/**
 * Script to compress GLB models using gltf-pipeline with Draco compression
 * Run: node scripts/compress-models.js
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MODELS_DIR = path.join(__dirname, '../public/models');

// List of GLB files to compress
const models = [
  'hacker-room.glb',
  'computer.glb',
  'cube.glb',
  'desk.glb',
  'react.glb',
];

console.log('🚀 Starting GLB compression with gltf-pipeline...\n');

const compressModel = (modelFile) => {
  const inputPath = path.join(MODELS_DIR, modelFile);
  const outputPath = path.join(MODELS_DIR, `${modelFile.replace('.glb', '')}-compressed.glb`);

  // Check if file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  ${modelFile} not found, skipping...\n`);
    return;
  }

  const inputSize = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(2);

  console.log(`📦 Compressing ${modelFile} (${inputSize}MB)...`);

  try {
    // Use gltf-pipeline with execSync
    execSync(`gltf-pipeline -i "${inputPath}" -o "${outputPath}" -d -s`, {
      stdio: 'inherit',
      shell: true,
    });

    const outputSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
    const savings = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);
    
    console.log(`✅ Compressed: ${inputSize}MB → ${outputSize}MB (${savings}% reduction)\n`);
    
    // Backup original and replace with compressed
    fs.renameSync(inputPath, inputPath.replace('.glb', '.glb.backup'));
    fs.renameSync(outputPath, inputPath);
  } catch (error) {
    console.error(`❌ Failed to compress ${modelFile}:`, error.message);
  }
};

// Run compression for all models
console.log(`Found ${models.length} model(s) to compress\n`);
models.forEach((model) => {
  compressModel(model);
});

console.log('✨ All models compressed successfully!');
