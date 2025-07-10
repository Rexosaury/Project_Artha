# FinGenie - Your Financial Assistant

A modern, responsive React.js application that serves as an AI-powered financial assistant. Built with TypeScript, Tailwind CSS, and Chart.js.

## 🚀 Features

- **Interactive Chat Interface**: Natural language conversations with AI financial assistant
- **Financial Dashboard**: Comprehensive overview of net worth, SIP performance, and expenses
- **Goal Simulations**: Plan and simulate financial goals like home purchases and retirement
- **Data Export**: Export financial data in CSV and JSON formats
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Google-inspired design with clean, professional aesthetics

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Inter, Roboto)

## 📦 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/fingenie-financial-assistant.git
   cd fingenie-financial-assistant
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:** `http://localhost:3000`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run deploy:vercel` - Deploy to Vercel (requires setup)
- `npm run deploy:netlify` - Deploy to Netlify (requires setup)

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Features Overview

### Dashboard
- Net worth growth tracking
- SIP performance vs benchmarks
- Monthly expense breakdown
- Key financial metrics
- AI-generated insights

### Chat Interface
- Natural language financial queries
- Interactive charts in responses
- Real-time conversation simulation
- Voice input support (UI only)

### Simulations
- Financial goal planning
- SIP requirement calculations
- Projected growth visualizations
- Feasibility analysis

### Exports
- CSV and JSON export options
- Multiple data categories
- Export history tracking
- Download status indicators

## 🎨 Design System

### Colors
- Primary: `#1A73E8` (Google Blue)
- Background: `#F5F6FA` (Light Gray)
- Text: `#202124` (Dark Gray)
- AI Chat: `#E8F0FE` (Light Blue)

### Typography
- Primary: Inter
- Secondary: Roboto
- Responsive font sizes

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/fingenie-financial-assistant)

### Option 2: Manual GitHub + Vercel Setup

1. **Fork/Clone this repository**
2. **Push to your GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FinGenie Financial Assistant"
   git branch -M main
   git remote add origin https://github.com/yourusername/fingenie-financial-assistant.git
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project" → Import your repository
   - Vercel auto-detects settings (Framework: Vite, Build: `npm run build`, Output: `dist`)
   - Click "Deploy" 🚀

4. **Your app will be live at:** `https://your-project-name.vercel.app`

### Other Deployment Options
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions for Netlify, GitHub Pages, and other platforms.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── Chart.tsx
│   ├── ChatInterface.tsx
│   └── ChatMessage.tsx
├── pages/              # Main application pages
│   ├── Dashboard.tsx
│   ├── Chat.tsx
│   ├── Simulations.tsx
│   └── Exports.tsx
├── data/               # Dummy data and mock responses
│   └── dummyData.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Material Design for color inspiration
- Chart.js for beautiful data visualizations
- Heroicons for clean, modern icons
- Tailwind CSS for rapid UI development

---

**Note**: This is a frontend-only application with dummy data for demonstration purposes. For production use, integrate with a real backend API and financial data sources.
