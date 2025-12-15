'use client';

import React from 'react';
import Image from 'next/image';
import { SectionBadge } from '../ui/SectionBadge';
import { GradientText } from '../ui/GradientText';
import { resources } from '@/lib/constants/content';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export function ResourcesSection() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section className="py-24 bg-gradient-to-br from-secondary-pastel-start/10 to-secondary-pastel-end/10 relative overflow-hidden">
      {/* Decorative Shape */}
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQKRfVSKW2XQFmpICRa4SuZyK6ZkhSGlF24QIl2HW9090FAbRuWRihbGqe_8qUbgH45-kr3ZvsFb0HQ7Y0qUAG5bgusN3TtF6HN-ExiISEUUEVtEjtGxLF7JFVXjJ2fPDSAnCmuVwdGktqfxxBELn_iY_-k20kbXo8dY3ag6kcCQaKGKkKBS5Z2MuwKMW907PJorXzv5oon5aeQYyMcD7Drlc32oeXeokAfTinEDsPB-qNsim25709SYesnVXcMRW_808To3g3fAc"
        alt="Organic abstract shape"
        width={800}
        height={800}
        className="absolute -top-1/4 -right-1/4 w-3/5 h-auto opacity-20 mix-blend-multiply pointer-events-none z-0 rotate-12 animate-rotate-slow"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20 scroll-fade-in-up">
          <SectionBadge icon="construction" text="Creative Resources" variant="secondary" className="mb-4 bg-white/50" />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark-prime mb-4">
            Ready-to-Spark Your <GradientText variant="teal-yellow">Inspiration</GradientText>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Explore our curated collection of templates and design assets to jumpstart your next project.
          </p>
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {resources.map((resource, index) => {
            const translateClass = index % 2 === 0
              ? 'transform translate-y-0 hover:-translate-y-2'
              : 'transform -translate-y-8 hover:-translate-y-10';
            
            return (
              <div
                key={index}
                className={`group relative rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white transition-transform duration-300 ${translateClass}`}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative h-80">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-dark-prime/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-200 text-base mb-5">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {resource.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur rounded-md text-xs text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="px-6 py-2.5 bg-gradient-teal-yellow hover:opacity-90 text-white text-base font-semibold rounded-full transition-colors shadow-lg shadow-primary-pastel-start/20">
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
