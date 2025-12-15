'use client';

import React from 'react';
import Image from 'next/image';
import { SectionBadge } from '../ui/SectionBadge';
import { GradientText } from '../ui/GradientText';
import { TestimonialCard } from '../cards/TestimonialCard';
import { testimonials } from '@/lib/constants/content';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export function TestimonialsSection() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section className="py-24 bg-gradient-to-br from-primary-pastel-start/10 to-primary-pastel-end/10 relative overflow-hidden">
      {/* Decorative Shape */}
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmJxwWTR-wzB5MXOw03XkwEyzmM-00o7v-dGgPW2fn59Me8kUWgKqv0JNRAB7tV4hsg7UljWX6aYJavN5hWdfvtEbeVLnqRSdyUUdXZcy-MfYBOjxXYciPWr8JZntMzMK4GBbQP9aJhUwsuxB-DQFjSfckyYKkiKuj-QY50twSM1J-ODMWDwFJ9nea7YxI3nX15LysGzxXTjckWcNnDV46YVU2cLQSA5JEUNcCJgIEdb9GeYCaJwCWq3MNwZzTXnP2IRtTEfbvkAs"
        alt="Organic abstract shape"
        width={800}
        height={800}
        className="absolute -bottom-1/4 -left-1/4 w-3/5 h-auto opacity-20 mix-blend-multiply pointer-events-none z-0 -rotate-12 animate-float"
        style={{ animationDuration: '5s' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20 scroll-fade-in-up">
          <SectionBadge icon="waving_hand" text="Client Voices" variant="primary" className="mb-4" />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark-prime mb-4">
            What Our Partners Say About Our <GradientText variant="pink-orange">Collaboration</GradientText>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Hear firsthand about the successful journeys we&apos;ve shared with our valued clients.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} animationOffset={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          Crafting success stories, one client at a time.
        </div>
      </div>
    </section>
  );
}
