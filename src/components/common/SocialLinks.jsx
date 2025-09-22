import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: 'https://github.com/AngelSoriano89', label: 'GitHub', icon: 'github' },
  { href: 'https://www.linkedin.com/in/angel-soriano-98353b142/', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://codepen.io/angelsoriano89', label: 'CodePen', icon: 'codepen' },
  { href: 'mailto:angelsorianodeveloper89@gmail.com', label: 'Email', icon: 'email' },
];

const Icon = ({ name, className = 'w-6 h-6' }) => {
  const iconProps = {
    className,
    fill: 'currentColor',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  };

  switch (name) {
    case 'github':
      return (
        <svg {...iconProps}>
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...iconProps}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'codepen':
      return (
        <svg {...iconProps}>
          <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.19 7.74l-.018.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042c.04.03.08.06.12.073l.050.027.08.035.08.02.035.02.08.01c.04.016.08.016.12.023l.04.015.08.01c.04 0 .08.003.12.003h.04c.04 0 .08 0 .12-.003l.04-.01.08-.015.04-.015c.04-.007.08-.007.12-.023l.035-.02.08-.02.08-.035.05-.027c.04-.014.08-.043.12-.073l.06-.042c.02 0 .02-.017.03-.03l.04-.04.03-.04c.015-.02.03-.04.045-.06l.03-.04c.015-.02.03-.04.03-.06l.022-.05c.01-.022.016-.048.027-.075l.015-.05c.01-.027.015-.056.02-.086l.01-.046c.007-.045.01-.09.01-.135V8.18c0-.03 0-.06-.002-.09l-.01-.05c-.010-.03-.02-.06-.030-.07l-.02-.06-.05-.06c0-.016-.01-.03-.03-.046l-.05-.06-.037-.045-.05-.056-.038-.04-.06-.05-.044-.035-.018-.015L12.58.19zm-6.35 6.440l-3.43 2.54v-.893l2.38-1.787 1.05.14zm-.893 1.378L8.85 8.362l1.156 2.06L12.58 8.82l2.574 1.602L16.31 8.362l-5.95 2.638zm0 3.584l1.05-.14 2.38 1.787v.893l-3.43-2.54zm6.537-4.59l-2.44-1.618 2.44-1.618v3.236z"/>
        </svg>
      );
    case 'email':
      return (
        <svg {...iconProps}>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      );
    default:
      return null;
  }
};

const SocialLinks = ({ className = '', orientation = 'horizontal' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const isVertical = orientation === 'vertical';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${className} ${
        isVertical 
          ? 'fixed bottom-0 left-10 hidden lg:flex flex-col items-center space-y-6 after:content-[\'\'] after:w-px after:h-24 after:bg-slate after:mt-6' 
          : 'flex items-center space-x-5'
      }`}
    >
      {links.map((link, index) => (
        <motion.a
          key={link.href}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          variants={itemVariants}
          whileHover={{ 
            y: -3,
            color: 'var(--accent)',
            transition: { type: 'spring', stiffness: 400, damping: 25 }
          }}
          className="text-light-slate hover:text-accent transition-all duration-300 p-2"
          aria-label={link.label}
          title={link.label}
        >
          <Icon name={link.icon} className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>
      ))}
    </motion.div>
  );
};

// Email link vertical para el lado derecho
export const EmailLink = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className={`fixed bottom-0 right-10 hidden lg:flex flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-slate after:mt-6 ${className}`}
    >
      <motion.a
        href="mailto:angelsorianodeveloper89@gmail.com"
        whileHover={{ 
          y: -3,
          color: 'var(--accent)',
          transition: { type: 'spring', stiffness: 400, damping: 25 }
        }}
        className="text-light-slate hover:text-accent transition-all duration-300 font-mono text-sm tracking-widest"
        style={{ writingMode: 'vertical-rl' }}
      >
        angelsorianodeveloper89@gmail.com
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
