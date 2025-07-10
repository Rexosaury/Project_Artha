/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Financial Color System
        'royal': {
          50: '#F8FAFF',
          100: '#F0F4FF',
          200: '#E1EAFF',
          300: '#C7D7FE',
          400: '#A5B8FC',
          500: '#8B5CF6',  // Primary purple
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065'
        },

        'ocean': {
          50: '#F0FDFF',
          100: '#CCFBFF',
          200: '#99F6FF',
          300: '#4AEAFF',
          400: '#06D6F0',  // Bright cyan
          500: '#0891B2',
          600: '#0E7490',
          700: '#155E75',
          800: '#164E63',
          900: '#083344',
          950: '#042F2E'
        },

        'emerald': {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',  // Success green
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22'
        },

        'sunset': {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',  // Orange accent
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407'
        },

        'rose': {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',  // Error red
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337',
          950: '#4C0519'
        },

        'slate': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',  // Dark backgrounds
          900: '#0F172A',  // Darkest
          950: '#020617'
        },

        // Semantic Colors
        'primary': '#8B5CF6',      // Royal purple
        'secondary': '#06D6F0',    // Ocean cyan
        'accent': '#F97316',       // Sunset orange
        'success': '#10B981',      // Emerald green
        'warning': '#F59E0B',      // Amber
        'error': '#F43F5E',        // Rose red
        'info': '#3B82F6',         // Blue

        // Background System
        'bg': {
          'primary': '#FAFBFF',     // Lightest with purple tint
          'secondary': '#F4F6FF',   // Card backgrounds
          'tertiary': '#EEF2FF',    // Subtle elements
          'dark': '#0F172A',        // Dark mode primary
          'card': '#FFFFFF',        // Pure white cards
        },

        // Text System
        'text': {
          'primary': '#0F172A',     // Darkest slate
          'secondary': '#475569',   // Medium slate
          'tertiary': '#64748B',    // Light slate
          'muted': '#94A3B8',       // Very light
          'inverse': '#FFFFFF',     // White text
        },

        // Interactive States
        'hover': {
          'primary': '#7C3AED',     // Darker purple
          'secondary': '#0891B2',   // Darker cyan
          'accent': '#EA580C',      // Darker orange
        },

        // Legacy Support
        'google-blue': '#3B82F6',
        'google-gray': '#0F172A',
        'light-gray': '#FAFBFF',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(139, 92, 246, 0.08), 0 10px 20px -2px rgba(139, 92, 246, 0.04)',
        'medium': '0 4px 25px -5px rgba(139, 92, 246, 0.12), 0 10px 10px -5px rgba(139, 92, 246, 0.06)',
        'strong': '0 10px 40px -10px rgba(139, 92, 246, 0.18), 0 2px 10px -2px rgba(139, 92, 246, 0.08)',
        'glow': '0 0 30px rgba(139, 92, 246, 0.25), 0 0 60px rgba(139, 92, 246, 0.1)',
        'glow-cyan': '0 0 30px rgba(6, 214, 240, 0.25), 0 0 60px rgba(6, 214, 240, 0.1)',
        'glow-emerald': '0 0 30px rgba(16, 185, 129, 0.25), 0 0 60px rgba(16, 185, 129, 0.1)',
        'glow-sunset': '0 0 30px rgba(249, 115, 22, 0.25), 0 0 60px rgba(249, 115, 22, 0.1)',
        'glow-rose': '0 0 30px rgba(244, 63, 94, 0.25), 0 0 60px rgba(244, 63, 94, 0.1)',
        'premium': '0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card': '0 4px 6px -1px rgba(139, 92, 246, 0.1), 0 2px 4px -1px rgba(139, 92, 246, 0.06)',
      },
      backgroundImage: {
        // Primary Gradients
        'gradient-royal': 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #06D6F0 0%, #0891B2 50%, #0E7490 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)',
        'gradient-rose': 'linear-gradient(135deg, #F43F5E 0%, #E11D48 50%, #BE123C 100%)',

        // Special Effects
        'gradient-aurora': 'linear-gradient(135deg, #8B5CF6 0%, #06D6F0 25%, #10B981 50%, #F97316 75%, #F43F5E 100%)',
        'gradient-midnight': 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
        'gradient-glass-dark': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',

        // Background Gradients
        'bg-gradient': 'linear-gradient(135deg, #FAFBFF 0%, #F4F6FF 50%, #EEF2FF 100%)',
        'bg-gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',

        // Interactive Gradients
        'hover-royal': 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 50%, #5B21B6 100%)',
        'hover-ocean': 'linear-gradient(135deg, #0891B2 0%, #0E7490 50%, #155E75 100%)',
        'hover-emerald': 'linear-gradient(135deg, #059669 0%, #047857 50%, #065F46 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'slide-left': 'slideLeft 0.4s ease-out',
        'slide-right': 'slideRight 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'glow-royal': 'glowRoyal 3s ease-in-out infinite alternate',
        'glow-ocean': 'glowOcean 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
            transform: 'scale(1)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)',
            transform: 'scale(1.02)'
          },
        },
        glowRoyal: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)' },
        },
        glowOcean: {
          '0%': { boxShadow: '0 0 20px rgba(6, 214, 240, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(6, 214, 240, 0.6), 0 0 60px rgba(6, 214, 240, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
