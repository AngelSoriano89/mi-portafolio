// src/components/common/Badge.jsx

import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
