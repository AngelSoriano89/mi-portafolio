// src/data/projects.js

const projects = [
  {
    id: 1,
    title: 'TaskFlow Pro',
    description: 'Aplicación de gestión de proyectos con funcionalidades avanzadas como tableros Kanban, colaboración en tiempo real, y analytics detallados. Construida con arquitectura escalable y enfoque en UX.',
    image: '/images/projects/taskflow-pro.jpg',
    slug: 'taskflow-pro',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com/AngelSoriano89/taskflow-pro',
    liveUrl: 'https://taskflow-pro.vercel.app',
    featured: true,
    category: 'Web App',
    year: '2023'
  },
  {
    id: 2,
    title: 'EcoMarket',
    description: 'E-commerce moderno para productos sostenibles con carrito de compras, sistema de pagos integrado, panel de administración y dashboard de analytics. Optimizado para conversión.',
    image: '/images/projects/ecomarket.jpg',
    slug: 'ecomarket',
    technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
    githubUrl: 'https://github.com/AngelSoriano89/ecomarket',
    liveUrl: 'https://ecomarket-demo.vercel.app',
    featured: true,
    category: 'E-commerce',
    year: '2023'
  },
  {
    id: 3,
    title: 'DevPortfolio',
    description: 'Template de portafolio para desarrolladores con diseño moderno, animaciones fluidas, modo oscuro, y CMS integrado para fácil gestión de contenido.',
    image: '/images/projects/devportfolio.jpg',
    slug: 'devportfolio',
    technologies: ['Next.js', 'Framer Motion', 'MDX', 'Tailwind CSS', 'Vercel Analytics'],
    githubUrl: 'https://github.com/AngelSoriano89/devportfolio-template',
    liveUrl: 'https://devportfolio-template.vercel.app',
    featured: true,
    category: 'Template',
    year: '2023'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con visualizaciones de datos en tiempo real, pronósticos detallados y mapas meteorológicos.',
    image: '/images/projects/weather-dashboard.jpg',
    slug: 'weather-dashboard',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Styled Components'],
    githubUrl: 'https://github.com/AngelSoriano89/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.netlify.app',
    featured: false,
    category: 'Dashboard',
    year: '2022'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'Aplicación móvil-first para seguimiento de ejercicios y nutrición con gráficos de progreso y sistema de logros.',
    image: '/images/projects/fitness-tracker.jpg',
    slug: 'fitness-tracker',
    technologies: ['React', 'PWA', 'Chart.js', 'IndexedDB', 'Service Workers'],
    githubUrl: 'https://github.com/AngelSoriano89/fitness-tracker',
    liveUrl: 'https://fitness-tracker-pwa.netlify.app',
    featured: false,
    category: 'PWA',
    year: '2022'
  },
  {
    id: 6,
    title: 'Code Snippet Manager',
    description: 'Herramienta para organizar y compartir snippets de código con sintaxis highlighting, búsqueda avanzada y colaboración.',
    image: '/images/projects/snippet-manager.jpg',
    slug: 'snippet-manager',
    technologies: ['Vue.js', 'Nuxt.js', 'MongoDB', 'Express', 'Prism.js'],
    githubUrl: 'https://github.com/AngelSoriano89/snippet-manager',
    liveUrl: 'https://snippet-manager-demo.herokuapp.com',
    featured: false,
    category: 'Tool',
    year: '2022'
  }
];

export default projects;
  