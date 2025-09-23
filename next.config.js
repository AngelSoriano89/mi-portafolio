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
  
  // Optimizaciones para producción
  poweredByHeader: false,
  compress: true,
  
  // Variables de entorno
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
  },

  // Configuración experimental para mejor performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Configuración para despliegue
  trailingSlash: false,
  
  // Configuración de TypeScript para builds más rápidos
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
