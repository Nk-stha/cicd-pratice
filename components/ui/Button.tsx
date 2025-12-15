import React from 'react';
import { Icon } from './Icon';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  href?: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Button({ 
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  className = '',
  onClick,
  style
}: ButtonProps) {
  const baseClass = 'inline-flex items-center justify-center font-semibold rounded-full transition shadow-lg';
  
  const variantClasses = {
    primary: 'text-white bg-gradient-teal-yellow hover:opacity-90 shadow-primary-pastel-start/30',
    secondary: 'text-white bg-gradient-pink-orange hover:opacity-90 shadow-secondary-pastel-start/50 transform hover:-translate-y-1 duration-300',
    outline: 'border border-gray-300 text-gray-700 bg-white/70 hover:bg-white/90 backdrop-blur-sm hover:shadow-gray-200',
  };
  
  const sizeClasses = {
    sm: 'px-6 py-2 text-base',
    md: 'px-10 py-4 text-lg',
    lg: 'px-12 py-5 text-xl font-bold',
  };
  
  const classes = `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <Icon name={icon} className="mr-3 text-base" />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} className="ml-3 text-base" />}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} style={style}>
      {content}
    </button>
  );
}
