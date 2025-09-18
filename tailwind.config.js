// tailwind.config.js — ESM para Tailwind v4
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: '#184848', // verde base
        secondary: '#093063', // azul profundo (usarlo opcionalmente como secundario)
        accent: '#093063', // azul para hovers/acentos
        brand: '#184848',
        'neutral-light': '#F1F5F9',
        'neutral-dark': '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
