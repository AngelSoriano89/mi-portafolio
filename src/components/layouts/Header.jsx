// src/components/layouts/Header.jsx

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-brand text-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white font-display hover:text-accent transition-colors">
          Angel Soriano
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white/90 hover:text-accent transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#about" className="text-white/90 hover:text-accent transition-colors">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-white/90 hover:text-accent transition-colors">
              Experiencia
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-white/90 hover:text-accent transition-colors">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-white/90 hover:text-accent transition-colors">
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="text-white/90 hover:text-accent transition-colors">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
