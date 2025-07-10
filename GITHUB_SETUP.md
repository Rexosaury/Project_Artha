# 🐙 GitHub Setup Guide

Follow these steps to push your FinGenie project to GitHub and set up automatic deployment.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account created
- Project built and tested locally

## 🚀 Step-by-Step GitHub Setup

### 1. Initialize Git Repository

```bash
# Navigate to your project directory
cd fingenie-financial-assistant

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: FinGenie Financial Assistant

- Complete React.js financial assistant application
- Responsive design with Tailwind CSS
- Interactive charts with Chart.js
- Chat interface with AI simulation
- Financial goal simulations
- Data export functionality
- Ready for deployment"
```

### 2. Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Repository name: `fingenie-financial-assistant`
4. Description: `FinGenie - Your AI Financial Assistant built with React and TypeScript`
5. Set to **Public** (for free Vercel deployment)
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

### 3. Connect Local Repository to GitHub

```bash
# Add GitHub remote (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/fingenie-financial-assistant.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### 4. Verify Upload

- Go to your GitHub repository
- Verify all files are uploaded
- Check that README.md displays properly

## 🚀 Deploy to Vercel

### Option 1: Automatic Deployment (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Find your `fingenie-financial-assistant` repository
5. Click "Import"
6. Vercel will auto-detect settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click "Deploy"
8. Wait for deployment to complete
9. Your app will be live at: `https://fingenie-financial-assistant-[random].vercel.app`

### Option 2: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Go to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## 🔄 Automatic Deployments

Once connected, every push to the `main` branch will automatically:
- ✅ Build the application
- ✅ Run tests and type checks
- ✅ Deploy to production
- ✅ Update your live site

## 🛠️ Environment Variables (If Needed)

If you need to add environment variables:

1. In Vercel dashboard → Project Settings
2. Go to "Environment Variables"
3. Add variables (must start with `VITE_` for frontend)
4. Redeploy if needed

## 📊 Monitoring Your Deployment

- **Build Logs**: Check Vercel dashboard for build status
- **Performance**: Vercel provides analytics and performance metrics
- **Errors**: Monitor the Functions tab for any runtime errors

## 🔧 Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check Node.js version (18+ required)
   - Verify all dependencies are in package.json
   - Check build logs in Vercel dashboard

2. **404 Errors**:
   - Ensure `vercel.json` is properly configured for SPA routing
   - Check that all routes are client-side routes

3. **Environment Variables Not Working**:
   - Ensure variables start with `VITE_`
   - Check they're set in Vercel dashboard
   - Redeploy after adding variables

## 🎉 Success!

Your FinGenie application should now be:
- ✅ Stored safely on GitHub
- ✅ Automatically deployed on Vercel
- ✅ Accessible via a public URL
- ✅ Ready for continuous deployment

## 📚 Next Steps

- Share your live URL with others
- Set up custom domain (optional)
- Monitor usage and performance
- Add new features and push updates
- Consider adding backend integration

---

**Need Help?** Check the main [README.md](./README.md) or [DEPLOYMENT.md](./DEPLOYMENT.md) for more detailed information.
