'use client';

import React from 'react';
import Image from 'next/image';
import { SectionBadge } from '../ui/SectionBadge';
import { GradientText } from '../ui/GradientText';
import { Button } from '../ui/Button';
import { PortfolioCard } from '../cards/PortfolioCard';
import { portfolioItems } from '@/lib/constants/content';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export function PortfolioSection() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section id="portfolio" className="py-24 bg-light-bg relative overflow-hidden">
      {/* Decorative Shape */}
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjJZ5Mp95VVMRZXoaGXqoU3eceJ4nxtEsOBMIeM1t4UzACJ2GGZxBQ7p9LboyVSJdpN9nqjVRe8rQn-SkGTXH0TFjx80Sfj41JKBKxj8nKjRIAtIMG4wIcFNy8Okr4KeJnFgPEYkDFjtCmPoGaf_hgylWdbvZntwfAi0fZW9JsWAziktLk7I8iSCxlRXG4bD7aVjIvfwCDzFLWUjGgdWCBRX4Agzup3LCrhdvahEe2HI2h1T7VTeAYtFjmnCpy_dldH6284LC7Irc"
        alt="Abstract organic pattern"
        width={600}
        height={600}
        className="absolute -top-10 -left-1/4 w-2/5 h-auto opacity-20 mix-blend-multiply pointer-events-none z-0 rotate-12 animate-rotate-slow"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20 scroll-fade-in-up">
          <SectionBadge icon="auto_awesome_mosaic" text="Our Creative Showcase" className="mb-4" />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark-prime mb-4">
            A Glimpse into Our <GradientText variant="pink-orange">Masterpieces</GradientText>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our portfolio of innovative and visually captivating projects that push creative boundaries.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} animationOffset={index} />
          ))}
        </div>
        
        {/* See All Button */}
        <div className="mt-20 text-center">
          <Button variant="outline" size="md" icon="arrow_right_alt" href="/portfolio">
            See All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
