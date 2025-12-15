import React from 'react';
import Image from 'next/image';
import { SectionBadge } from '../ui/SectionBadge';
import { GradientText } from '../ui/GradientText';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-16 pb-32">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-light-bg"></div>
      
      {/* Decorative Shapes */}
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwExbCRnG9VyDR8Nw4E7nCGSZGRCeZRUWQgq2HcvIPh_Wu0WEZzr79VQRU8IreRR6mZwx2g9xGJ-xtbOLlh8cT5vGtKX1oxNt9D9i3cMlO_ix9V1ttQhOhyT8Z_pGhIhW2wibUPfVsc7DwBw23cjk0uDdLCvWYDXSEnQIQU9-SZd_4cZI6NF08sqZw_03MZLQRiWLEdhWLvCu_Ie7KZJwlP-AYkFt32pQD1K-zf9xCSGlKblXuGN-a7hewIzw-FAQhztAtu1YFBUw"
        alt="Organic abstract shape"
        width={800}
        height={800}
        className="absolute top-10 -left-1/4 w-3/5 h-auto opacity-30 mix-blend-multiply pointer-events-none z-0 rotate-12 animate-float"
      />
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIgs6Q4eWvwwLnjQWIgOdXTKRDOz3iRv5U5yzYnH-bIC1zJYT277w7H9uZGhKNFnmdWxlN4f8pdPadtOx2qqwnEJy6FrIjiLUIu0YeMtPFyXYrEHsT3DyPfheAQShDEjtA6u_tasAqdAdk1L9GGxRJ2gUhvbTVcq7_WGKUvS4s6hu3SeolNVhxE7n8Kqt4Gt81wkMDPujT3v9OK5akHosPDqG4lltIN-Zu0qhzNAohdZeSBXdZlvOPiojsnGLnbW7RqJ49LsxwEHM"
        alt="Abstract organic pattern"
        width={600}
        height={600}
        className="absolute bottom-20 -right-1/4 w-2/5 h-auto opacity-30 mix-blend-multiply pointer-events-none z-0 -rotate-12 animate-float"
        style={{ animationDelay: '1s', animationDuration: '4s' }}
      />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionBadge icon="spark" text="Igniting Ideas & Possibilities" className="mb-8 animate-fade-in-down" />
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-text-dark-prime mb-8 leading-tight animate-fade-in-up animate-delay-200">
          Crafting <GradientText variant="pink-orange">Transformative Ideas</GradientText>{' '}
          <br className="hidden lg:block" />
          into Digital Realities
        </h1>
        
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 font-light mb-12 animate-fade-in-up animate-delay-300">
          We are a creative agency specializing in <strong>innovation</strong> and <strong>collaboration</strong>, 
          turning bold concepts into visually stunning and highly engaging digital experiences that captivate audiences.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animate-delay-400">
          <Button variant="primary" size="md" icon="arrow_right_alt" href="#portfolio">
            Explore Our Creativity
          </Button>
          <Button variant="outline" size="md" icon="arrow_outward" href="#services">
            View Inspirations
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center animate-fade-in animate-delay-500">
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-2 h-2 bg-gradient-pink-orange rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
