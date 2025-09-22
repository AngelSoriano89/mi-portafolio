import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ number, title, subtitle, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${className}`}
    >
      <div className="flex items-center mb-2">
        {number && (
          <span className="section-number font-mono text-base text-accent mr-4">
            {number}.
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold text-lightest-slate section-line flex-shrink-0">
          {title}
        </h2>
      </div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate mt-4 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
