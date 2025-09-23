// Datos de las conversaciones del portafolio
export const conversations = [
  {
    id: 'inicio',
    title: 'Inicio',
    icon: '🏠',
    messages: [
      {
        id: 1,
        type: 'user',
        content: '¡Hola! Me gustaría conocer más sobre ti',
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: 'ai',
        content: `¡Hola! 👋 

Soy **Angel Soriano Mora**, un desarrollador frontend autodidacta de 36 años, ubicado en Ecuador. Me apasiona crear experiencias web interactivas y estoy enfocado en el desarrollo frontend moderno.

Como autodidacta, he desarrollado varios proyectos personales que demuestran mis habilidades en JavaScript, HTML, CSS, Python y tecnologías web modernas. Cada proyecto ha sido una oportunidad de aprendizaje y crecimiento.

¿Te gustaría explorar alguna sección específica de mi portafolio? Puedes preguntarme sobre:
- 👨‍💻 Mi background y formación autodidacta
- 🚀 Proyectos reales que he desarrollado
- 🛠️ Habilidades técnicas que domino
- 📄 Mi currículum completo
- 📞 Información de contacto`,
        timestamp: new Date().toISOString(),
        typewriter: true
      }
    ]
  },
  {
    id: 'sobre-mi',
    title: 'Sobre mí',
    icon: '👨‍💻',
    messages: [
      {
        id: 1,
        type: 'user',
        content: 'Cuéntame más sobre tu experiencia y background',
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: 'ai',
        content: `¡Excelente pregunta! 🎯

Soy **Angel Soriano Mora**, tengo 36 años y vivo en Ecuador. Mi viaje en el desarrollo web ha sido completamente autodidacta, impulsado por la curiosidad y la pasión por crear experiencias digitales.

**Mi Formación:**
- 💻 **Experiencia práctica** - desarrollando proyectos reales en GitHub
- 📖 **Constante investigación** - de nuevas tecnologías y mejores prácticas
- 🔬 **Experimentación continua** - con diferentes lenguajes y frameworks

**Mi Enfoque Actual:**
- 🎯 **Especializado en Frontend** - HTML, CSS, JavaScript y frameworks modernos
- 🐍 **Explorando Backend** - Práctica con Python y desarrollo de chatbots
- 🎨 **Efectos visuales** - Animaciones, partículas y experiencias interactivas
- 📱 **Responsive Design** - Adaptación a diferentes dispositivos

**Mi Filosofía:**
- Cada proyecto es una oportunidad de aprendizaje
- La práctica constante es clave para el crecimiento
- La creatividad y la funcionalidad deben ir de la mano
- Nunca dejar de experimentar con nuevas tecnologías

¡A los 36 años, sigo tan emocionado por programar como el primer día! 🚀`,
        timestamp: new Date().toISOString(),
        typewriter: true
      }
    ]
  },
  {
    id: 'experiencia',
    title: 'Experiencia',
    icon: '💼',
    messages: [
      {
        id: 1,
        type: 'user',
        content: '¿Dónde has trabajado y qué proyectos has desarrollado?',
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: 'ai',
        content: `Te comparto mis proyectos y experiencia práctica: 🚀

**Proyectos Desarrollados (GitHub):**

**🌈 Spectrum of Colors** 
- **Tecnologías**: JavaScript, SCSS
- **Descripción**: Espectro de colores con efectos de partículas interactivos
- **Características**: Animaciones fluidas, efectos visuales avanzados
- **Aprendizajes**: Manipulación del DOM, animaciones CSS/JS, SCSS avanzado

**🐢 EndemicTurtle & Donkeys2**
- **Tecnologías**: HTML, CSS
- **Descripción**: Páginas web con diseño personalizado
- **Características**: Estructura semántica, diseño responsive
- **Aprendizajes**: Fundamentos sólidos de HTML/CSS

**🎯 Portafolio Personal** 
- **Tecnologías**: HTML, CSS, JavaScript
- **Descripción**: Primera versión de mi portafolio personal
- **Características**: Diseño limpio, presentación profesional
- **Evolución**: Ahora desarrollando versión avanzada con React/Next.js

**🤖 Chatbot Practice IA**
- **Tecnologías**: Python
- **Descripción**: Experimentación con inteligencia artificial
- **Características**: Procesamiento de lenguaje natural básico
- **Aprendizajes**: Fundamentos de Python, IA conversacional

**🦸‍♂️ Landing Page Marvel**
- **Tecnologías**: CSS, HTML
- **Descripción**: Landing page temática de Marvel
- **Características**: Diseño atractivo, efectos visuales

**Mi Metodología:**
✨ **Aprendizaje por proyectos** - Cada repositorio es un experimento
✨ **Documentación práctica** - Código limpio y comentado
✨ **Experimentación constante** - Probando nuevas tecnologías
✨ **Evolución continua** - Mejorando proyectos existentes

¡Cada línea de código es una oportunidad de crecimiento! 💪`,
        timestamp: new Date().toISOString(),
        typewriter: true
      }
    ]
  },
  {
    id: 'proyectos',
    title: 'Proyectos',
    icon: '🚀',
    messages: [
      {
        id: 1,
        type: 'user',
        content: 'Muéstrame algunos de tus proyectos más destacados',
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: 'ai',
        content: `¡Aquí tienes el detalle técnico de mis proyectos! 🎨

**🌈 Spectrum of Colors** [GitHub: spectrum-of-colors]
- **Tech Stack**: JavaScript ES6+, SCSS, HTML5
- **Descripción**: Espectro interactivo de colores con sistema de partículas
- **Características**: Efectos de partículas dinámicos, transiciones suaves, responsive design
- **Desafíos técnicos**: Optimización de rendimiento, animaciones fluidas, gestión de eventos
- **Estado**: Completado y funcional
- [Ver repositorio →](https://github.com/AngelSoriano89/spectrum-of-colors)

**🎯 Mi Portafolio ChatGPT** (Proyecto Actual)
- **Tech Stack**: Next.js, React, Tailwind CSS, Framer Motion
- **Descripción**: Portafolio innovador con interfaz conversacional
- **Características**: Animaciones typewriter, diseño responsive, paleta verde personalizada
- **Estado**: ¡El que estás experimentando ahora mismo!
- **Evolución**: De HTML básico a React avanzado

**🤖 Chatbot Practice IA** [GitHub: Chatbot-practice-ia]
- **Tech Stack**: Python, NLP básico
- **Descripción**: Experimentación con inteligencia artificial conversacional
- **Características**: Procesamiento de lenguaje natural, respuestas contextuales
- **Aprendizajes**: Fundamentos de IA, Python avanzado, lógica conversacional
- [Ver repositorio →](https://github.com/AngelSoriano89/Chatbot-practice-ia)

**🦸‍♂️ Landing Page Marvel** [GitHub: Landing-page-marvel]
- **Tech Stack**: CSS3, HTML5, Responsive Design
- **Descripción**: Landing page temática con diseño atractivo
- **Características**: Efectos visuales, animaciones CSS, diseño responsive
- **Enfoque**: Práctica de maquetación y efectos visuales
- [Ver repositorio →](https://github.com/AngelSoriano89/Landing-page-marvel)

**🐢 Proyectos Web Diversos** [EndemicTurtle, Donkeys2, Portafolio]
- **Tech Stack**: HTML5, CSS3, JavaScript
- **Descripción**: Colección de páginas web con diferentes enfoques
- **Características**: Estructura semántica, diseño limpio, funcionalidad básica
- **Propósito**: Consolidación de fundamentos web

**Mi Evolución Técnica:**
📈 **HTML/CSS** → **JavaScript** → **SCSS** → **Python** → **React/Next.js**
🔄 **Mejora continua** - Cada proyecto supera al anterior
🎯 **Enfoque práctico** - Aprender haciendo proyectos reales

¿Te interesa el código de algún proyecto específico?`,
        timestamp: new Date().toISOString(),
        typewriter: true
      }
    ]
  },
  {
    id: 'habilidades',
    title: 'Habilidades',
    icon: '🛠️',
    messages: [
      {
        id: 1,
        type: 'user',
        content: '¿Cuáles son tus principales habilidades técnicas?',
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: 'ai',
        content: `Mis habilidades técnicas: 💪

**🎯 Tecnologías Demostradas (Con Proyectos)**
- 🟨 **JavaScript ES6+** - Efectos de partículas, manipulación DOM, eventos
- 🎨 **SCSS/CSS3** - Animaciones avanzadas, responsive design, efectos visuales
- 📱 **HTML5** - Estructura semántica, accesibilidad, SEO básico
- 🐍 **Python** - Chatbots, procesamiento de texto, lógica básica de IA
- ⚛️ **React/Next.js** - Componentes, hooks, routing (proyecto actual)

**🌟 Especialidades Técnicas**
- 🎭 **Animaciones & Efectos** - Partículas, transiciones, micro-interacciones
- 🎨 **Diseño Visual** - Paletas de colores, layouts creativos, UX intuitiva
- 📱 **Responsive Design** - Mobile-first, adaptación multi-dispositivo
- 🔧 **Optimización** - Rendimiento, carga rápida, código limpio

**🛠️ Herramientas de Desarrollo**
- 📦 **Git & GitHub** - 6+ repositorios públicos, control de versiones
- 📝 **VS Code/Windsurf** - Configuración avanzada, extensiones, debugging
- 🚀 **Deployment** - GitHub Pages, Netlify, Render
- 🎨 **Design Tools** - Principios de diseño, creación de assets

**🔬 Experimentación Activa**
- 🤖 **Inteligencia Artificial** - Chatbots, NLP básico con Python
- 🎮 **Interactividad** - Eventos del mouse, animaciones dinámicas
- 📊 **Data Visualization** - Gráficos, efectos de colores, representación visual
- 🔄 **Frameworks Modernos** - Migración de vanilla JS a React/Next.js

**💡 Metodología de Aprendizaje**
- 🎯 **Learning by Doing** - Cada habilidad respaldada por un proyecto
- 📚 **Documentación First** - Lectura de docs oficiales, mejores prácticas
- 🔍 **Code Review** - Análisis de código de otros desarrolladores
- 🚀 **Iteración Continua** - Mejorando proyectos existentes constantemente

**🌱 En Crecimiento Activo**
- 📘 **TypeScript** - Tipado estático para proyectos más robustos
- 🗄️ **Bases de Datos** - SQL, NoSQL para proyectos full-stack
- 🔌 **APIs** - Creación y consumo de servicios web
- 🧪 **Testing** - Calidad de código, pruebas automatizadas

¡36 años y cada día aprendo algo nuevo! La edad es solo un número cuando tienes pasión 🔥`,
        timestamp: new Date().toISOString(),
        typewriter: true
      }
    ]
  },
  {
    id: 'contacto',
    title: 'Contacto',
    icon: '📞',
    messages: [
      {
        id: 1,
        type: 'user',
        content: '¿Cómo puedo contactarte para un proyecto?',
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: 'ai',
        content: `¡Excelente! Me encanta conectar con nuevas personas y proyectos. 🤝

**Formas de contactarme:**

📧 **Email**: [angelsorianodeveloper89@gmail.com](mailto:angelsorianodeveloper89@gmail.com)
- Es mi canal preferido para discusiones detalladas sobre proyectos

💼 **LinkedIn**: [Angel Soriano](https://linkedin.com/in/angel-soriano-98353b142)
- Perfecto para networking profesional y oportunidades laborales

🐙 **GitHub**: [AngelSoriano89](https://github.com/AngelSoriano89)
- Revisa mi código y contribuciones open source

🎨 **CodePen**: [angelsoriano89](https://codepen.io/angelsoriano89)
- Experimentos creativos y prototipos rápidos

📱 **WhatsApp**: +593 98 515 0696
- Para consultas rápidas o coordinación de reuniones

**¿En qué puedo ayudarte?**
- 🚀 Desarrollo de aplicaciones web completas
- 🎨 Implementación de diseños UI/UX
- ⚡ Optimización de rendimiento web
- 🔧 Consultoría técnica y code review
- 📚 Mentoring en desarrollo frontend

**Mi proceso de trabajo:**
1. 📋 Análisis de requerimientos
2. 💡 Propuesta técnica y timeline
3. 🎯 Desarrollo iterativo con feedback
4. 🚀 Deployment y soporte post-lanzamiento

¡No dudes en escribirme! Respondo todos los mensajes en menos de 24 horas. 😊`,
        timestamp: new Date().toISOString(),
        typewriter: true
      }
    ]
  },
  {
    id: 'curriculum',
    title: 'Currículum',
    icon: '📄',
    messages: [
      {
        id: 1,
        type: 'user',
        content: '¿Puedes mostrarme tu currículum completo?',
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: 'ai',
        content: `¡Por supuesto! Aquí tienes mi currículum completo 📋

**Para descargar mi CV en PDF:**
[📥 Descargar CV - Angel Soriano.pdf](/cv/Angel_Soriano_CV.pdf)

**Resumen Profesional:**
Angel Soriano Mora, 36 años, desarrollador frontend autodidacta ubicado en Ecuador. Especializado en JavaScript, CSS, Python y tecnologías web modernas. Con múltiples proyectos en GitHub que demuestran habilidades en efectos visuales, animaciones y desarrollo web interactivo.

**Información de Contacto:**
📧 angelsorianodeveloper89@gmail.com
🔗 [LinkedIn](https://linkedin.com/in/angel-soriano-98353b142)
🐙 [GitHub](https://github.com/AngelSoriano89) - 6+ repositorios públicos

**Proyectos Destacados:**
• **Spectrum of Colors** - JavaScript/SCSS con efectos de partículas
• **Chatbot Practice IA** - Experimentación con Python e IA
• **Landing Page Marvel** - CSS avanzado y efectos visuales
• **Portafolio ChatGPT** - React/Next.js (proyecto actual)

**Educación:**
• Completamente autodidacta en desarrollo web
• Aprendizaje continuo a través de proyectos prácticos
• Experimentación constante con nuevas tecnologías

**Habilidades Técnicas Demostradas:**
• **Frontend:** JavaScript ES6+, React, Next.js, HTML5, CSS3, SCSS
• **Backend:** Python (chatbots, IA básica)
• **Efectos:** Animaciones, partículas, transiciones avanzadas
• **Tools:** Git/GitHub, VS Code, Windsurf, deployment platforms
• **Especialidades:** Responsive design, efectos visuales, UX interactiva

¿Te gustaría que profundice en alguna sección específica?`,
        timestamp: new Date().toISOString(),
        typewriter: true
      }
    ]
  }
];

export default conversations;
