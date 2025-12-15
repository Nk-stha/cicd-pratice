'use client';

import React from 'react';
import type { Stat } from '@/types';
import { Icon } from '../ui/Icon';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface StatCardProps {
  stat: Stat;
  animationOffset?: number;
}

export function StatCard({ stat, animationOffset = 0 }: StatCardProps) {
  const cardRef = useScrollAnimation<HTMLDivElement>();
  
  const gradientClass = stat.gradient === 'teal-yellow'
    ? 'bg-gradient-teal-yellow'
    : 'bg-gradient-pink-orange';
  
  const translateClass = animationOffset % 2 === 0
    ? 'transform translate-y-0 hover:-translate-y-2'
    : 'transform -translate-y-6 hover:-translate-y-8';
  
  const delayClass = `animate-delay-${Math.min(animationOffset * 100, 700)}`;
  
  return (
    <div 
      ref={cardRef} 
      className={`bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100 transition-transform duration-300 ${translateClass} scroll-scale-in ${delayClass}`}
    >
      <div className={`w-20 h-20 mx-auto ${gradientClass} rounded-full flex items-center justify-center text-white mb-5 shadow-md animate-pulse`}>
        <Icon name={stat.icon} className="text-4xl" />
      </div>
      <div className="text-5xl font-display font-extrabold text-text-dark-prime mb-2 animate-count-up">
        {stat.value}
      </div>
      <div className="text-base text-gray-700 font-medium">
        {stat.label}
      </div>
    </div>
  );
}
