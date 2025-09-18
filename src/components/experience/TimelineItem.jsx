// src/components/experience/TimelineItem.jsx

import React from 'react';
import AnimateInView from '../common/AnimateInView';

const TimelineItem = ({ company, role, period, bullets = [] }) => {
  return (
    <AnimateInView className="relative pl-6">
      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
        <h3 className="text-lg font-semibold text-white">
          {role} <span className="text-gray-500">@ {company}</span>
        </h3>
        <span className="text-sm text-white/70">{period}</span>
      </div>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-white/80">
        {bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </AnimateInView>
  );
};

export default TimelineItem;
