'use client';

import React from 'react';
import Image from 'next/image';
import type { Service } from '@/types';
import { Icon } from '../ui/Icon';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface ServiceCardProps {
  service: Service;
  animationOffset?: number;
}

export function ServiceCard({ service, animationOffset = 0 }: ServiceCardProps) {
  const cardRef = useScrollAnimation<HTMLDivElement>();
  
  const gradientClass = service.gradient === 'teal-yellow' 
    ? 'bg-gradient-teal-yellow' 
    : 'bg-gradient-pink-orange';
  
  const translateClass = animationOffset % 2 === 0 
    ? 'transform translate-y-0 hover:-translate-y-2' 
    : 'transform -translate-y-4 hover:-translate-y-6';
  
  const delayClass = `animate-delay-${Math.min(animationOffset * 100, 800)}`;
  
  return (
    <div 
      ref={cardRef} 
      className={`group bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative z-10 transition-all duration-300 hover-lift ${translateClass} scroll-scale-in`}
      style={{ animationDelay: `${Math.min(animationOffset * 100, 800)}ms` }}
    >
      <div className={`w-16 h-16 ${gradientClass} rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
        <Icon name={service.icon} className="text-3xl" />
      </div>
      <h3 className="text-2xl font-display font-bold text-text-dark-prime mb-3 group-hover:text-primary-pastel-start transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-base text-gray-600 leading-relaxed mb-6">
        {service.description}
      </p>
      <a href="#services" className="inline-flex items-center text-base font-semibold text-primary-pastel-start group-hover:underline group-hover:gap-2 transition-all duration-300" aria-label={`Learn more about ${service.title}`}>
        Discover more <Icon name="arrow_right_alt" className="text-base ml-1 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
}
