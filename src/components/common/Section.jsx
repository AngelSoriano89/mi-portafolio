// src/components/common/Section.jsx

import React from 'react';

const Section = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-24 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        {children}
      </div>
    </section>
  );
};

export default Section;
