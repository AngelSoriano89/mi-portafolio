// src/components/ui/Button.jsx

import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-6 py-3 font-display rounded-lg font-bold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
