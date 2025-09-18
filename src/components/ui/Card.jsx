// src/components/ui/Card.jsx

import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
