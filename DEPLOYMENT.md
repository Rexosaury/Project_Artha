# Deployment Guide

This guide will help you deploy FinGenie to various platforms.

## 🚀 Vercel Deployment (Recommended)

### Method 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FinGenie Financial Assistant"
   git branch -M main
   git remote add origin https://github.com/yourusername/fingenie-financial-assistant.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings:
     - Framework Preset: `Vite`
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Environment Variables (if needed):**
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add any environment variables from `.env.example`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

## 🌐 Netlify Deployment

1. **Push to GitHub** (same as above)

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

## 📱 GitHub Pages Deployment

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

## 🔧 Build Configuration

The project includes configuration files for different platforms:

- `vercel.json` - Vercel configuration
- `netlify.toml` - Netlify configuration
- `vite.config.ts` - Vite build configuration

## 🌍 Environment Variables

For production deployment, you may want to set:

- `VITE_APP_NAME` - Application name
- `VITE_APP_VERSION` - Version number
- `VITE_API_BASE_URL` - Backend API URL (when integrated)

## 📊 Performance Optimization

The build is optimized with:

- ✅ Code splitting
- ✅ Tree shaking
- ✅ Asset optimization
- ✅ Gzip compression
- ✅ Modern ES modules

## 🔍 Monitoring

After deployment, monitor your application:

- Check build logs for any issues
- Test all features in production
- Monitor performance metrics
- Set up error tracking (optional)

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check Node.js version (use Node 18+)
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

2. **Routing issues:**
   - Ensure SPA redirects are configured (handled by vercel.json and netlify.toml)

3. **Environment variables not working:**
   - Ensure variables start with `VITE_`
   - Check they're set in deployment platform

### Support:

- Check the main README.md for detailed documentation
- Review build logs in your deployment platform
- Ensure all dependencies are properly installed
