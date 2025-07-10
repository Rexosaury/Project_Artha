#!/usr/bin/env node

/**
 * FinGenie Setup Script
 * Helps users set up the project for development and deployment
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 FinGenie Setup Script');
console.log('========================\n');

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('❌ Node.js 18 or higher is required. Current version:', nodeVersion);
  process.exit(1);
}

console.log('✅ Node.js version:', nodeVersion);

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found. Please run this script from the project root.');
  process.exit(1);
}

console.log('✅ Project structure verified');

// Install dependencies
console.log('\n📦 Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Create .env.local if it doesn't exist
if (!fs.existsSync('.env.local')) {
  console.log('\n🔧 Creating .env.local file...');
  const envContent = `# FinGenie Environment Variables
VITE_APP_NAME=FinGenie
VITE_APP_VERSION=1.0.0

# Add your environment variables here
# VITE_API_BASE_URL=https://your-api-endpoint.com
`;
  fs.writeFileSync('.env.local', envContent);
  console.log('✅ .env.local created');
}

// Run type check
console.log('\n🔍 Running type check...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('✅ Type check passed');
} catch (error) {
  console.warn('⚠️  Type check failed, but continuing...');
}

// Build the project
console.log('\n🏗️  Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

console.log('\n🎉 Setup completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Run "npm run dev" to start development server');
console.log('2. Open http://localhost:3000 in your browser');
console.log('3. Push to GitHub and deploy to Vercel');
console.log('\n📚 See README.md and DEPLOYMENT.md for more information');
