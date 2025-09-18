// src/components/projects/ProjectDetail.jsx

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const ProjectDetail = ({ project }) => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold text-neutral-dark">
          {project.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-neutral-dark text-white">Código en GitHub</Button>
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-white">Ver Demo</Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
