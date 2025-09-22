import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectCard = ({ project, featured = false }) => {
  const cardVariants = {
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

  if (featured) {
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="group relative mb-16 md:mb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <div className="relative lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded overflow-hidden bg-accent/20 group-hover:bg-transparent transition-all duration-300">
              <div className="aspect-[16/10] relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover group-hover:transform group-hover:scale-105 transition-transform duration-300 mix-blend-multiply group-hover:mix-blend-normal"
                    priority={false}
                  />
                ) : (
                  <div className="w-full h-full bg-lightest-navy flex items-center justify-center">
                    <Folder size={48} className="text-accent" />
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-all duration-300" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:text-right">
            <p className="text-accent font-mono text-sm mb-2">Proyecto Destacado</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-lightest-slate mb-4 group-hover:text-accent transition-colors">
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>

            <div className="bg-light-navy p-6 rounded shadow-custom mb-4 lg:-mr-6">
              <p className="text-light-slate leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <ul className="flex flex-wrap justify-start lg:justify-end gap-2 mb-4">
              {project.technologies.map((tech) => (
                <li key={tech} className="text-sm font-mono text-light-slate">
                  {tech}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex items-center justify-start lg:justify-end gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-slate hover:text-accent transition-colors p-2"
                  aria-label="Código en GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-slate hover:text-accent transition-colors p-2"
                  aria-label="Ver proyecto en vivo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Proyecto regular (no destacado)
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-light-navy rounded-lg p-6 shadow-custom hover:shadow-custom-lg transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Folder size={40} className="text-accent" />
        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-accent transition-colors"
              aria-label="Código en GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-accent transition-colors"
              aria-label="Ver proyecto en vivo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-lightest-slate mb-3 group-hover:text-accent transition-colors">
        <Link href={`/projects/${project.slug}`} className="stretched-link">
          {project.title}
        </Link>
      </h3>

      <p className="text-light-slate text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* Technologies */}
      <ul className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.slice(0, 4).map((tech) => (
          <li key={tech} className="text-xs font-mono text-light-slate">
            {tech}
          </li>
        ))}
        {project.technologies.length > 4 && (
          <li className="text-xs font-mono text-accent">
            +{project.technologies.length - 4}
          </li>
        )}
      </ul>
    </motion.article>
  );
};

export default ProjectCard;
