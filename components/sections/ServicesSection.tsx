'use client';

import React from 'react';
import Image from 'next/image';
import { SectionBadge } from '../ui/SectionBadge';
import { GradientText } from '../ui/GradientText';
import { Button } from '../ui/Button';
import { ServiceCard } from '../cards/ServiceCard';
import { services } from '@/lib/constants/content';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export function ServicesSection() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section id="services" className="py-24 bg-light-bg relative overflow-hidden">
      {/* Decorative Shape */}
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa6ChkQNe4g-rfC92eU4QDzPNQID1g5zzvSmS1C3d8GTGXXwAOyd8vqM-W65oNmorgHPFH8A-fzgYo5lHZV37-aMh388fkaOD9opbU2DpOhAZ2au9dgAIOKpMGyCiW2n3pSv-uAxkBV-lVDDVxLvvVqPhm--pnS4_jl6rTSUW9B6QC7esZ4rnieMcCZfGnX_8RmPgMsdfquDBgK90UuDzLUdwB5qIv7bXBn2qFSDq9NhKVzPL2r-YwCBwoe9zZrfnNwaTcpOEvBks"
        alt="Organic abstract shape"
        width={500}
        height={500}
        className="absolute top-20 right-0 w-1/3 h-auto opacity-20 mix-blend-multiply pointer-events-none z-0 -rotate-6 transform translate-x-1/2 animate-pulse"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20 scroll-fade-in-up">
          <SectionBadge icon="palette" text="Our Creative Offerings" className="mb-4" />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark-prime mb-4">
            Unlocking Your Brand&apos;s <GradientText variant="teal-yellow">Potential</GradientText>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dive into our diverse range of services, meticulously crafted to amplify your vision and drive engagement.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} animationOffset={index} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-16 text-center">
          <Button variant="outline" size="md" icon="arrow_right_alt" href="/contact">
            View All Offerings
          </Button>
        </div>
      </div>
    </section>
  );
}
