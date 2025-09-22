import React from 'react';

const Section = ({ 
  id, 
  className = '', 
  children, 
  fullHeight = false,
  noPadding = false 
}) => {
  const baseClasses = `
    ${fullHeight ? 'min-h-screen' : 'py-20 md:py-32'} 
    ${noPadding ? '' : 'px-6'} 
    scroll-mt-24
  `;

  return (
    <section 
      id={id} 
      className={`${baseClasses} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
