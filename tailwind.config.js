/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta completa basada en verde #004238
        primary: {
          50: '#ccfbf1',     // Verde muy suave
          100: '#99f6e4',    // Verde suave  
          200: '#5eead4',    // Verde muy claro
          300: '#2dd4bf',    // Verde claro
          400: '#00a085',    // Verde medio claro
          500: '#007062',    // Verde medio
          600: '#00594d',    // Verde medio oscuro
          700: '#004238',    // Verde base principal
          800: '#002e28',    // Verde muy oscuro
          900: '#001a17',    // Verde más oscuro
        },
        
        // Fondos
        'bg-primary': '#001a17',
        'bg-secondary': '#002e28', 
        'bg-surface': '#004238',
        'bg-surface-light': '#00594d',
        'bg-card': '#007062',
        'bg-hover': '#00a085',
        'bg-soft': '#ccfbf1',
        'bg-subtle': '#f0fdfa',
        
        // Textos
        'text-primary': '#f0fdfa',
        'text-secondary': '#ccfbf1',
        'text-muted': '#99f6e4',
        'text-inverse': '#001a17',
        'text-accent': '#2dd4bf',
        
        // Bordes
        'border-primary': '#00594d',
        'border-secondary': '#007062',
        'border-light': '#00a085',
        'border-subtle': '#ccfbf1',
        
        // Compatibilidad con el tema anterior
        accent: '#2dd4bf',
        navy: '#001a17',
        slate: '#99f6e4',
        'lightest-slate': '#f0fdfa',
        // Colores específicos para chat (usando nuestra paleta)
        chat: {
          bg: '#ccfbf1',
          sidebar: '#004238',
          user: '#004238',
          ai: '#f0fdfa',
          border: '#00594d',
        },
        // Colores de estado
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        'chat-sidebar': '280px',
      },
      maxWidth: {
        'chat': '800px',
        'message': '85%',
      },
      borderRadius: {
        'bubble': '18px',
        'bubble-sm': '8px',
      },
      boxShadow: {
        'chat': '0 1px 2px rgba(0, 66, 56, 0.1)',
        'chat-hover': '0 4px 12px rgba(0, 66, 56, 0.15)',
        'sidebar': 'inset -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'slide-left': 'slideInFromLeft 0.4s ease-out forwards',
        'slide-right': 'slideInFromRight 0.4s ease-out forwards', 
        'fade-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-soft': 'pulse 1.5s ease-in-out infinite',
        'typing': 'typing 1.4s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' }
        },
        slideInFromRight: {
          '0%': { opacity: '0', transform: 'translateX(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        typing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      },
      transitionTimingFunction: {
        'chat': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      zIndex: {
        'sidebar': 10,
        'header': 20,
        'modal': 50,
        'tooltip': 60,
      }
    },
  },
  plugins: [],
};
