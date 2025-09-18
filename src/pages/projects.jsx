// src/pages/projects.jsx

import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import ProjectCard from '../components/projects/ProjectCard';
import projectsData from '../data/projects';
import useFetchData from '../hooks/useFetchData';

const ProjectsPage = () => {
  const { data, loading, error } = useFetchData(projectsData);

  if (loading) return <MainLayout title="Proyectos - Mi Portafolio"><div>Cargando proyectos...</div></MainLayout>;
  if (error) return <MainLayout title="Proyectos - Mi Portafolio"><div>Error: {error}</div></MainLayout>;

  return (
    <MainLayout title="Proyectos - Mi Portafolio">
      <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-dark text-center py-16">
        Proyectos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
