import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'teal-yellow' | 'pink-orange';
  className?: string;
}

export function GradientText({ 
  children, 
  variant = 'teal-yellow',
  className = '' 
}: GradientTextProps) {
  const gradientClass = variant === 'teal-yellow' 
    ? 'gradient-text-teal-yellow' 
    : 'gradient-text-pink-orange';
  
  return (
    <span className={`${gradientClass} ${className}`}>
      {children}
    </span>
  );
}
