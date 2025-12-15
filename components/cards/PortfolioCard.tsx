'use client';

import React from 'react';
import Image from 'next/image';
import type { PortfolioItem } from '@/types';
import { Icon } from '../ui/Icon';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface PortfolioCardProps {
  item: PortfolioItem;
  animationOffset?: number;
}

export function PortfolioCard({ item, animationOffset = 0 }: PortfolioCardProps) {
  const cardRef = useScrollAnimation<HTMLDivElement>();
  
  const gradientOverlay = item.gradient === 'teal-yellow'
    ? 'from-primary-pastel-start/20 to-primary-pastel-end/20'
    : 'from-secondary-pastel-start/20 to-secondary-pastel-end/20';
  
  const translateClass = animationOffset % 2 === 0
    ? 'transform translate-y-0 hover:-translate-y-2'
    : 'transform -translate-y-6 hover:-translate-y-8';
  
  const delayClass = `animate-delay-${Math.min(animationOffset * 150, 900)}`;
  
  return (
    <div 
      ref={cardRef} 
      className={`group bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full transition-all duration-300 relative hover-lift ${translateClass} scroll-fade-in-up`}
      style={{ animationDelay: `${Math.min(animationOffset * 150, 900)}ms` }}
    >
      <div className={`relative overflow-hidden h-72 bg-gradient-to-br ${gradientOverlay}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 transition-all duration-500 group-hover:from-black/70">
          <h3 className="text-2xl font-display font-bold text-white transform transition-transform duration-500 group-hover:translate-y-[-4px]">{item.title}</h3>
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <p className="text-base text-gray-600 mb-6 flex-1">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600 hover:bg-primary-pastel-start/10 hover:text-primary-pastel-start transition-all duration-300 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto">
          <a href="/portfolio" className="text-primary-pastel-start font-semibold text-base hover:underline hover:gap-1 transition-all duration-300">
            View Case Study
          </a>
          <a
            href="/portfolio"
            className="p-3 rounded-full bg-gray-50 text-gray-500 hover:text-primary-pastel-start hover:bg-primary-pastel-start/10 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
            aria-label="View project details"
          >
            <Icon name="arrow_outward" className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
