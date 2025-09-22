import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Sobre mí', href: '/#about', number: '01' },
  { name: 'Experiencia', href: '/#experience', number: '02' },
  { name: 'Proyectos', href: '/#projects', number: '03' },
  { name: 'Contacto', href: '/#contact', number: '04' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    }),
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-navy/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-1600">
          {/* Logo */}
          <Link href="/" className="z-50 relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 border-2 border-accent rounded bg-navy"
            >
              <span className="text-accent font-mono text-xl font-bold">AS</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm font-mono text-lightest-slate hover:text-accent transition-colors"
                  >
                    <span className="text-accent mr-1">{item.number}.</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Resume Button */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Currículum
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:hidden z-50 relative p-2 text-accent"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/90 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 bottom-0 w-80 max-w-[75vw] bg-light-navy shadow-custom z-50 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <nav>
                <ul className="space-y-6">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.href}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      className="text-center"
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="flex flex-col items-center group"
                      >
                        <span className="text-accent font-mono text-sm mb-1">
                          {item.number}.
                        </span>
                        <span className="text-lightest-slate text-lg font-medium group-hover:text-accent transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              <motion.a
                custom={navItems.length}
                variants={itemVariants}
                initial="closed"
                animate="open"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-8"
                onClick={toggleMenu}
              >
                Currículum
              </motion.a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
