'use client';

import React from 'react';
import Image from 'next/image';
import { SectionBadge } from '../ui/SectionBadge';
import { GradientText } from '../ui/GradientText';
import { StatCard } from '../cards/StatCard';
import { stats } from '@/lib/constants/content';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export function StatsSection() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section className="py-24 bg-light-bg relative overflow-hidden">
      {/* Decorative Shape */}
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD4QxGJjmieVcP96UWpMayj3KdjLHhi3LS4_xh93cZMjUoycMadBhDHs2h_7Wx2YsOozC0FsQv-r-AfOPvHHCjB3pHpoHkYwK44beJ3SUClowVO4V2Bdj4E9kRo2qIDfUQ62CFeo3cwE3O75orrN_kWMohYHF60xsABt33kbEHrKZmNJkA2tl3N-EY1n0afaYwdk8ysHfhRTTry_GnvvYX6N5KMIMLfpndnU_TKFOaqZXaZKmSW7MMY-fsFSAdZRzsQcc8NBZxc9o"
        alt="Abstract organic pattern"
        width={600}
        height={600}
        className="absolute top-10 right-0 w-2/5 h-auto opacity-20 mix-blend-multiply pointer-events-none z-0 -rotate-6 transform translate-x-1/3 animate-float"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20 scroll-fade-in-up">
          <SectionBadge icon="rocket" text="Our Milestones" className="mb-4" />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark-prime mb-4">
            The Power of Our <GradientText variant="teal-yellow">Creative Journey</GradientText>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Witness the impact of our dedication and <strong>innovation</strong> through these impressive statistics.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} animationOffset={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
