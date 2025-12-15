'use client';

import React from 'react';
import Image from 'next/image';
import { GradientText } from '../ui/GradientText';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export function CTASection() {
  const contentRef = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section className="py-24 bg-text-dark-prime relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 gradient-animated">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA17JxGntiJzJRv529d0V6zZPB_efbcXO006ktWoK2uHERGarmC9L5-TA0IvQb87NOZw-szKRozix8Kn210PdEpmeIataC08Ok1DE5Aso-gnm3b32Hmo31hk6DcpqG85amIz1jp44Bh0x689PRjQ93Ua5YGBN3gMSnW9wR-51nXVA0HMi9mWYwiH-h2BV3U1FOlXbwUPwbTewuYcwpL3E-HVdQwASifr7Ks1yMTyZMkFPhfqsPus65rumJoD3qZdJzmuY1-9VljwrU"
          alt="Abstract organic shape"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div ref={contentRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-scale-in">
        <div className="inline-block px-4 py-1.5 rounded-full border border-gray-600 text-gray-300 text-xs uppercase tracking-widest mb-6">
          Let&apos;s Make Magic Together
        </div>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8">
          Ready to ignite your next <GradientText variant="teal-yellow">transformative idea</GradientText>?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join forces with Creativia and let&apos;s craft something truly extraordinary through <strong>innovation</strong> and <strong>collaboration</strong>.
        </p>
        
        <Button variant="secondary" size="lg" icon="arrow_right_alt" href="/contact">
          Connect with Us
        </Button>
      </div>
    </section>
  );
}
