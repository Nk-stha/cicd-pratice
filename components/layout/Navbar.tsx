'use client';

import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { navLinks } from '@/lib/constants/content';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-light-bg/80 backdrop-blur-md border-b border-gray-100 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" aria-label="Creativia Home">
              <Icon name="lightbulb" className="text-primary-pastel-start text-3xl animate-pulse group-hover:scale-110 transition-transform duration-300" />
              <span className="font-display font-bold text-2xl tracking-tight text-text-dark-prime group-hover:text-primary-pastel-start transition-colors duration-300">
                CREATIVIA
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-primary-pastel-start transition-all duration-300 relative group animate-fade-in-down"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-teal-yellow group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button variant="primary" size="sm" href="/contact" className="hover:scale-105 transition-transform duration-300 animate-fade-in-down" style={{ animationDelay: '500ms' }}>
              Innovate With Us
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-pastel-start focus:outline-none transition-colors duration-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Icon name="menu" className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
