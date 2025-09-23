/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Optimizaciones
  poweredByHeader: false,
  
  // Variables de entorno
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
  },

  // Configuración experimental para mejor performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

module.exports = nextConfig;
