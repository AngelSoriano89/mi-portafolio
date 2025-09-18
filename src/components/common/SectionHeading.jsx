// src/components/common/SectionHeading.jsx

import React from 'react';

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="mb-10">
      {eyebrow && (
        <div className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-3 text-base md:text-lg text-white/80 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
