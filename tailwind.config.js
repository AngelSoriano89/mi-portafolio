/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        accent: '#64ffda',
        'accent-tint': 'rgba(100, 255, 218, 0.1)',
        // Mantener compatibilidad
        primary: '#64ffda',
        brand: '#0a192f',
        'neutral-light': '#233554',
        'neutral-dark': '#ccd6f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'clamp-sm': 'clamp(14px, 5vw, 16px)',
        'clamp-base': 'clamp(16px, 5vw, 18px)',
        'clamp-lg': 'clamp(18px, 5vw, 24px)',
        'clamp-xl': 'clamp(20px, 5vw, 28px)',
        'clamp-2xl': 'clamp(40px, 8vw, 80px)',
        'clamp-3xl': 'clamp(80px, 8vw, 100px)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '104': '26rem',
        '112': '28rem',
      },
      maxWidth: {
        '1600': '1600px',
      },
      screens: {
        'xs': '480px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1280px',
        'xl': '1440px',
        '2xl': '1600px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      boxShadow: {
        'custom': '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
        'custom-lg': '0 20px 40px -15px rgba(2, 12, 27, 0.7)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
