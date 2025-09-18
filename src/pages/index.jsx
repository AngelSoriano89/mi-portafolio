// src/pages/index.jsx

import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import Section from '../components/common/Section';
import SectionHeading from '../components/common/SectionHeading';
import AnimateInView from '../components/common/AnimateInView';
import SocialLinks from '../components/common/SocialLinks';
import ProjectCard from '../components/projects/ProjectCard';
import TimelineItem from '../components/experience/TimelineItem';
import projects from '../data/projects';
import experience from '../data/experience';
import Image from 'next/image';

const skills = {
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  Backend: ['Node.js', 'Express', 'REST APIs'],
  Herramientas: ['Git', 'Vercel', 'Figma', 'Lighthouse'],
};

const HomePage = () => {
  const featured = projects.slice(0, 3);

  return (
    <MainLayout title="Inicio - Angel Soriano">
      {/* Hero */}
      <Section id="home">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <AnimateInView className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
              Hola, soy Angel Soriano
            </h1>
            <p className="mt-4 text-xl text-white/80 leading-relaxed max-w-2xl">
              Desarrollador Frontend enfocado en construir interfaces limpias, accesibles y de alto rendimiento con React y Next.js.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="#projects" className="bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105">
                Ver Proyectos
              </a>
              <a href="#contact" className="border border-white/80 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-all transform hover:scale-105">
                Contáctame
              </a>
            </div>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </AnimateInView>
          <AnimateInView className="mt-8 md:mt-0 flex-1 flex justify-center" delay={0.1}>
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-white/30 shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Foto de perfil"
                fill
                sizes="(max-width: 768px) 14rem, 16rem"
                className="object-cover"
                priority
              />
            </div>
          </AnimateInView>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <SectionHeading eyebrow="Sobre mí" title="Quién soy" />
        <AnimateInView>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Soy un desarrollador frontend metódico y orientado a resultados. Me especializo en construir productos web
              rápidos, accesibles y fáciles de mantener.
            </p>
            <p>
              Disfruto colaborar con diseño y producto para encontrar soluciones simples a problemas complejos, y me
              enfoco en la calidad de código, rendimiento y DX.
            </p>
          </div>
        </AnimateInView>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <SectionHeading eyebrow="Experiencia" title="Dónde he trabajado" />
        <div className="relative pl-6 border-l border-white/20 space-y-8">
          {experience.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <SectionHeading eyebrow="Proyectos" title="Trabajo destacado" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <AnimateInView key={project.id} delay={i * 0.07}>
              <ProjectCard project={project} />
            </AnimateInView>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <SectionHeading eyebrow="Habilidades" title="Tecnologías y herramientas" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, list]) => (
            <AnimateInView key={group}>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-neutral-dark">{group}</h3>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {list.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </AnimateInView>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <SectionHeading eyebrow="Contacto" title="Construyamos algo juntos" />
        <AnimateInView>
          <p className="text-lg text-white/80 max-w-2xl">
            ¿Tienes una idea o proyecto? Estoy disponible para colaborar. Escríbeme y conversemos.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="mailto:tu-email@ejemplo.com" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all">
              Envíame un email
            </a>
            <SocialLinks />
          </div>
        </AnimateInView>
      </Section>
    </MainLayout>
  );
};

export default HomePage;
