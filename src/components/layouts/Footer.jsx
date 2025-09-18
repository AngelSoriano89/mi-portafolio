// src/components/layouts/Footer.jsx

import React from 'react';
import SocialLinks from '../common/SocialLinks';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-brand text-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/80">© {new Date().getFullYear()} Angel Soriano. Todos los derechos reservados.</p>
        <div className="[&_*]:text-white [&_*:hover]:text-accent">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
