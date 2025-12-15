import React from 'react';
import { Icon } from './Icon';

interface SectionBadgeProps {
  icon: string;
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function SectionBadge({ 
  icon, 
  text, 
  variant = 'primary',
  className = '' 
}: SectionBadgeProps) {
  const bgColorClass = variant === 'primary' 
    ? 'bg-primary-pastel-start/10 text-primary-pastel-start' 
    : 'bg-secondary-pastel-start/10 text-secondary-pastel-start';
    
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-medium text-sm ${bgColorClass} ${className}`}>
      <Icon name={icon} className="text-sm" />
      <span className="tracking-wide uppercase">{text}</span>
    </div>
  );
}
