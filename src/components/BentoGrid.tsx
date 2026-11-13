import React from 'react';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 ${className}`}>
      {children}
    </div>
  );
};
