/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Financial Colors
        'fin-primary': '#0F172A',      // Deep slate for headers
        'fin-secondary': '#1E293B',    // Slate for cards
        'fin-accent': '#3B82F6',       // Blue for actions
        'fin-success': '#10B981',      // Emerald for positive
        'fin-warning': '#F59E0B',      // Amber for warnings
        'fin-danger': '#EF4444',       // Red for alerts

        // Gradient Colors
        'gradient-start': '#667EEA',   // Purple-blue start
        'gradient-end': '#764BA2',     // Purple end
        'gold-start': '#FFD700',       // Gold gradient start
        'gold-end': '#FFA500',         // Gold gradient end

        // Background Variations
        'bg-primary': '#F8FAFC',       // Lightest background
        'bg-secondary': '#F1F5F9',     // Card backgrounds
        'bg-tertiary': '#E2E8F0',      // Subtle borders

        // Text Colors
        'text-primary': '#0F172A',     // Main text
        'text-secondary': '#475569',   // Secondary text
        'text-muted': '#94A3B8',       // Muted text

        // Chat Colors
        'chat-user': '#3B82F6',        // User message background
        'chat-ai': '#F0F9FF',          // AI message background
        'chat-border': '#E0F2FE',      // Chat borders

        // Legacy (keeping for compatibility)
        'google-blue': '#3B82F6',
        'google-gray': '#0F172A',
        'light-gray': '#F8FAFC',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.15)',
        'glow-gold': '0 0 20px rgba(255, 215, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
        'gradient-success': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-warning': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'gradient-danger': 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
