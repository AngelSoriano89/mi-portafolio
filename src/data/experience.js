// src/data/experience.js

const experience = [
  {
    company: 'Empresa Tech A',
    role: 'Senior Frontend Developer',
    period: 'Enero 2023 — Presente',
    companyUrl: 'https://ejemplo-empresa-a.com',
    bullets: [
      'Lidero la migración de aplicaciones legacy a Next.js 13+ con App Router, resultando en una mejora del 40% en Core Web Vitals y reducción de 50% en tiempo de carga',
      'Arquitecté y desarrollé un sistema de componentes reutilizables con TypeScript y Storybook, adoptado por 3 equipos de desarrollo',
      'Implementé estrategias de SSR/SSG y optimización de imágenes que redujeron el LCP en promedio 2.1 segundos',
      'Mentoré a 2 desarrolladores junior en mejores prácticas de React, testing y arquitectura frontend'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Jest', 'Playwright']
  },
  {
    company: 'Startup Innovadora B',
    role: 'Frontend Developer',
    period: 'Marzo 2021 — Diciembre 2022',
    companyUrl: 'https://ejemplo-startup-b.com',
    bullets: [
      'Desarrollé desde cero la interfaz de una aplicación SaaS con React y Redux, alcanzando 10k+ usuarios activos mensuales',
      'Colaboré estrechamente con el equipo de diseño UX/UI para implementar microinteracciones y animaciones con Framer Motion',
      'Integré APIs RESTful y establecí patrones de manejo de estado que redujeron bugs en producción en 30%',
      'Optimicé el bundle de la aplicación reduciendo el tamaño en 60% mediante code splitting y lazy loading'
    ],
    technologies: ['React', 'Redux', 'JavaScript', 'SASS', 'Webpack', 'REST API', 'Framer Motion']
  },
  {
    company: 'Agencia Digital C',
    role: 'Web Developer',
    period: 'Junio 2020 — Febrero 2021',
    bullets: [
      'Construí más de 15 sitios web responsivos para clientes usando HTML5, CSS3 y JavaScript vanilla',
      'Implementé sistemas de gestión de contenido personalizados con integración a headless CMS',
      'Mejoré el SEO técnico de proyectos existentes, aumentando el tráfico orgánico en promedio 45%',
      'Establecí workflows de desarrollo con Git y herramientas de automatización'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'PHP', 'MySQL', 'Git']
  }
];

export default experience;
