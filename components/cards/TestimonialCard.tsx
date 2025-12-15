'use client';

import React from 'react';
import Image from 'next/image';
import type { Testimonial } from '@/types';
import { Icon } from '../ui/Icon';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface TestimonialCardProps {
  testimonial: Testimonial;
  animationOffset?: number;
}

export function TestimonialCard({ testimonial, animationOffset = 0 }: TestimonialCardProps) {
  const cardRef = useScrollAnimation<HTMLDivElement>();
  
  const translateClass = animationOffset % 2 === 0
    ? 'transform translate-y-0 hover:-translate-y-2'
    : 'transform -translate-y-8 hover:-translate-y-10';
  
  const delayClass = `animate-delay-${Math.min(animationOffset * 200, 600)}`;
  
  return (
    <div 
      ref={cardRef} 
      className={`bg-white p-10 rounded-xl shadow-lg border border-gray-100 relative transition-transform duration-300 ${translateClass} scroll-fade-in ${delayClass}`}
    >
      <div className="flex items-start gap-5 mb-8">
        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 relative">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-display font-bold text-xl text-text-dark-prime">
            {testimonial.name}
          </h4>
          <p className="text-base text-gray-600">
            {testimonial.role}, {testimonial.company}
          </p>
          <div className="flex text-primary-pastel-start mt-2 text-xl">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Icon key={i} name="star" />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="text-gray-700 text-lg leading-relaxed italic">
        &quot;{testimonial.quote}&quot;
      </blockquote>
    </div>
  );
}
