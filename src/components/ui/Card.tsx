import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false 
}) => {
  const hoverClasses = hover 
    ? 'transition-transform duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg'
    : '';

  return (
    <div 
      className={`
        bg-white rounded-lg border border-gray-200 shadow-sm p-4
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps {
  title: string;
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, action }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {action && <div>{action}</div>}
    </div>
  );
};

export default Card;