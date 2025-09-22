import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const TimelineItem = ({ company, role, period, bullets = [], companyUrl, technologies = [] }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Content */}
      <div className="relative bg-light-navy rounded-lg p-6 border border-lightest-navy/20 hover:border-accent/20 transition-all duration-300 hover:transform hover:-translate-y-1">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-lightest-slate mb-1">
              {role}
            </h3>
            <div className="flex items-center gap-2">
              {companyUrl ? (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1 group/company"
                >
                  <span>{company}</span>
                  <ExternalLink 
                    size={14} 
                    className="opacity-0 group-hover/company:opacity-100 transition-opacity" 
                  />
                </a>
              ) : (
                <span className="text-accent">{company}</span>
              )}
            </div>
          </div>
          <span className="text-sm font-mono text-slate mt-2 md:mt-0 md:ml-4">
            {period}
          </span>
        </div>

        {/* Bullets */}
        <ul className="space-y-3 mb-4">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="text-slate leading-relaxed flex items-start">
              <span className="text-accent mr-3 mt-1 block w-1 h-1 rounded-full bg-accent flex-shrink-0"></span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-lightest-navy/10">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default TimelineItem;
