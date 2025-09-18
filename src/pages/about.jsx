// src/pages/about.jsx (sin plugin typography)

import React from 'react';
import MainLayout from '../components/layouts/MainLayout';

const AboutPage = () => {
  return (
    <MainLayout title="Sobre Mí - Mi Portafolio">
      <article className="mx-auto py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-dark text-center">
          Sobre Mí
        </h1>
        <div className="mt-8 text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Mi viaje en el mundo del desarrollo web comenzó con una simple curiosidad. Siempre me ha fascinado cómo se construyen las cosas, y la web se convirtió en mi lienzo perfecto para explorar. Lo que empezó como un pasatiempo se transformó rápidamente en una pasión por crear soluciones elegantes y funcionales.
          </p>
          <p>
            Como desarrollador, mi enfoque es <strong>metódico y detallista</strong>. Creo firmemente que la mejor forma de resolver un problema complejo es desglosándolo en partes manejables. Mi objetivo es escribir código limpio y bien estructurado que no solo funcione, sino que sea fácil de mantener y escalar.
          </p>
          <p>
            Más allá de la lógica, me motiva la oportunidad de aprender y crecer constantemente. Me entusiasma la idea de unirme a un equipo donde pueda colaborar en proyectos desafiantes y seguir perfeccionando mis habilidades.
          </p>
          <p>
            [Aquí puedes añadir más detalles sobre tu experiencia, un proyecto personal favorito, o tus intereses fuera de la programación.]
          </p>
        </div>
      </article>
    </MainLayout>
  );
};

export default AboutPage;
