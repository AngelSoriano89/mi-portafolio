import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../common/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
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
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Mobile Social Links */}
        <div className="flex justify-center mb-8 lg:hidden">
          <SocialLinks />
        </div>

        {/* Footer Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="https://github.com/AngelSoriano89/mi-portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col items-center text-light-slate hover:text-accent transition-colors"
            >
              <p className="font-mono text-sm mb-2 group-hover:translate-y-[-2px] transition-transform">
                Diseñado y construido por Angel Soriano
              </p>
              <p className="text-xs text-slate">
                © {currentYear} Todos los derechos reservados
              </p>
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 pt-6 border-t border-lightest-navy/20"
          >
            <p className="text-xs text-slate font-mono">
              Construido con{' '}
              <span className="text-accent">Next.js</span>,{' '}
              <span className="text-accent">Tailwind CSS</span> y{' '}
              <span className="text-accent">Framer Motion</span>
            </p>
            <p className="text-xs text-slate font-mono mt-2">
              Alojado en{' '}
              <a 
                href="https://vercel.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Vercel
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
