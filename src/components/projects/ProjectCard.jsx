// src/components/projects/ProjectCard.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';

const ProjectCard = ({ project }) => {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-display font-bold text-neutral-dark mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 flex-grow mb-4">
          {project.description}
        </p>
        <Link href={`/projects/${project.slug}`} className="text-primary hover:underline font-bold">
          Ver proyecto
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
