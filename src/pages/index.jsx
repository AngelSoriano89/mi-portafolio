import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layouts/MainLayout';
import Section from '../components/common/Section';
import SectionHeading from '../components/common/SectionHeading';
import AnimateInView from '../components/common/AnimateInView';
import SocialLinks, { EmailLink } from '../components/common/SocialLinks';
import ProjectCard from '../components/projects/ProjectCard';
import TimelineItem from '../components/experience/TimelineItem';
import projects from '../data/projects';
import experience from '../data/experience';
import Image from 'next/image';

const skills = [
  {
    title: 'Frontend',
    items: ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Herramientas',
    items: ['Git & GitHub', 'Vercel', 'Docker', 'Figma', 'Storybook', 'Jest']
  }
];

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const featuredProjects = projects.filter(p => p.featured);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  };

  return (
    <MainLayout title="Angel Soriano - Frontend Developer">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy"
          >
            <div className="flex items-center justify-center w-16 h-16 border-2 border-accent rounded">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-accent font-mono text-2xl font-bold"
              >
                AS
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Social Links Fixed */}
          <SocialLinks orientation="vertical" />
          <EmailLink />

          {/* Hero Section */}
          <Section id="home" className="min-h-screen flex items-center pt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.p
                    variants={itemVariants}
                    className="text-accent font-mono text-base md:text-lg mb-5"
                  >
                    Hola, mi nombre es
                  </motion.p>
                  
                  <motion.h1
                    variants={itemVariants}
                    className="text-clamp-3xl font-semibold text-lightest-slate leading-tight mb-5"
                  >
                    Angel Soriano.
                  </motion.h1>

                  <motion.h2
                    variants={itemVariants}
                    className="text-clamp-2xl font-semibold text-slate leading-tight mb-6"
                  >
                    Construyo experiencias digitales excepcionales.
                  </motion.h2>

                  <motion.p
                    variants={itemVariants}
                    className="text-slate max-w-lg leading-relaxed mb-12"
                  >
                    Soy un desarrollador frontend especializado en crear productos digitales 
                    accesibles, centrados en el usuario y de alto rendimiento. Actualmente, 
                    me enfoco en construir interfaces excepcionales en{' '}
                    <span className="text-accent">empresas innovadoras</span>.
                  </motion.p>

                  <motion.div variants={itemVariants}>
                    <a
                      href="/#projects"
                      className="btn-outline inline-block"
                    >
                      ¡Mira mi trabajo!
                    </a>
                  </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                  variants={itemVariants}
                  className="flex justify-center lg:justify-end"
                >
                  <div className="relative group">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden">
                      <Image
                        src="/images/profile-placeholder.jpg"
                        alt="Angel Soriano"
                        fill
                        sizes="(max-width: 768px) 16rem, 20rem"
                        className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                        priority
                      />
                      <div className="absolute inset-0 bg-accent/20 hover:bg-transparent transition-all duration-300" />
                    </div>
                    {/* Border decoration */}
                    <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent rounded-lg -z-10 group-hover:top-4 group-hover:left-4 transition-all duration-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Section>

          {/* About Section */}
          <Section id="about">
            <SectionHeading 
              number="01" 
              title="Sobre mí" 
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <AnimateInView>
                  <div className="space-y-4 text-slate leading-relaxed">
                    <p>
                      ¡Hola! Mi nombre es Angel y disfruto creando cosas que viven en internet. 
                      Mi interés en el desarrollo web comenzó en 2020 cuando decidí intentar 
                      crear un sitio web personalizado — resulta que hackear HTML y CSS me 
                      enseñó mucho sobre desarrollo web.
                    </p>
                    
                    <p>
                      Avancemos hasta hoy, y he tenido el privilegio de trabajar en{' '}
                      <span className="text-accent">una startup</span>,{' '}
                      <span className="text-accent">una empresa de productos</span>, y{' '}
                      <span className="text-accent">una agencia digital</span>. 
                      Mi enfoque principal estos días es construir productos accesibles 
                      e inclusivos y experiencias digitales en una variedad de clientes.
                    </p>

                    <p>
                      También tuve la oportunidad de crear cursos que han sido tomados 
                      por más de 100 estudiantes en línea, así como dar charlas en 
                      eventos locales de tecnología.
                    </p>

                    <p>Aquí están algunas tecnologías con las que he estado trabajando recientemente:</p>
                  </div>
                </AnimateInView>

                <AnimateInView delay={0.2}>
                  <div className="grid grid-cols-2 gap-2 mt-6">
                    {skills.flatMap(category => category.items).slice(0, 6).map((skill, index) => (
                      <div key={skill} className="flex items-center text-sm font-mono text-slate">
                        <span className="text-accent mr-2">▹</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </AnimateInView>
              </div>

              {/* Skills aside */}
              <AnimateInView delay={0.3} className="lg:col-span-1">
                <div className="space-y-6">
                  {skills.map((category) => (
                    <div key={category.title}>
                      <h4 className="text-lightest-slate font-medium mb-3">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((skill) => (
                          <li key={skill} className="text-sm text-slate flex items-center">
                            <span className="text-accent mr-2 text-xs">▸</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AnimateInView>
            </div>
          </Section>

          {/* Experience Section */}
          <Section id="experience">
            <SectionHeading 
              number="02" 
              title="Dónde he trabajado" 
            />
            
            <div className="space-y-8">
              {experience.map((item, index) => (
                <AnimateInView key={index} delay={index * 0.1}>
                  <TimelineItem {...item} />
                </AnimateInView>
              ))}
            </div>
          </Section>

          {/* Featured Projects Section */}
          <Section id="projects">
            <SectionHeading 
              number="03" 
              title="Algunos proyectos que he construido" 
            />
            
            <div className="space-y-24">
              {featuredProjects.map((project, index) => (
                <AnimateInView key={project.id} delay={index * 0.1}>
                  <ProjectCard project={project} featured={true} />
                </AnimateInView>
              ))}
            </div>

            {/* Other Projects */}
            <AnimateInView delay={0.4} className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold text-lightest-slate mb-2">
                  Otros proyectos destacados
                </h3>
                <p className="text-slate">Una selección de cosas que he construido</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => !p.featured).slice(0, 6).map((project, index) => (
                  <AnimateInView key={project.id} delay={index * 0.05}>
                    <ProjectCard project={project} featured={false} />
                  </AnimateInView>
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://github.com/AngelSoriano89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Ver más en GitHub
                </a>
              </div>
            </AnimateInView>
          </Section>

          {/* Contact Section */}
          <Section id="contact" className="text-center">
            <SectionHeading 
              number="04" 
              title="¿Qué sigue?" 
              className="text-center"
            />
            
            <AnimateInView>
              <div className="max-w-lg mx-auto">
                <h3 className="text-4xl md:text-5xl font-semibold text-lightest-slate mb-6">
                  Mantengámonos en contacto
                </h3>
                
                <p className="text-slate leading-relaxed mb-12">
                  Aunque no estoy buscando activamente nuevas oportunidades, 
                  mi bandeja de entrada siempre está abierta. Ya sea que tengas 
                  una pregunta o simplemente quieras saludar, ¡haré mi mejor 
                  esfuerzo por responderte!
                </p>

                <a
                  href="mailto:angelsorianodeveloper89@gmail.com"
                  className="btn-outline text-lg"
                >
                  ¡Di hola!
                </a>
              </div>
            </AnimateInView>
          </Section>
        </>
      )}
    </MainLayout>
  );
};

export default HomePage;
