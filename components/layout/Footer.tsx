'use client';

import React from 'react';
import { Icon } from '../ui/Icon';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useScrollAnimation<HTMLDivElement>();
  
  return (
    <footer className="bg-text-dark-prime text-gray-400 border-t border-gray-800">
      <div ref={footerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6 scroll-fade-in-up animate-delay-100">
            <div className="flex items-center gap-2 text-white">
              <Icon name="lightbulb" className="text-primary-pastel-start text-3xl" />
              <span className="font-display font-bold text-2xl tracking-tight">CREATIVIA</span>
            </div>
            <p className="text-sm leading-relaxed">
              A creative agency dedicated to bringing imaginative and transformative ideas to life through innovation and collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hello@creativia.agency" className="text-gray-400 hover:text-primary-pastel-start transition hover:scale-110 transform duration-300" aria-label="Email Creativia">
                <Icon name="alternate_email" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-pastel-start transition hover:scale-110 transform duration-300" aria-label="Follow on Instagram">
                <Icon name="brush" />
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-pastel-start transition hover:scale-110 transform duration-300" aria-label="View on Behance">
                <Icon name="auto_awesome_mosaic" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-pastel-start transition hover:scale-110 transform duration-300" aria-label="Follow on Twitter">
                <Icon name="chat" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="scroll-fade-in-up animate-delay-200">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li><a href="/" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">About Us</a></li>
              <li><a href="/portfolio" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">Our Portfolio</a></li>
              <li><a href="/team" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">Meet the Team</a></li>
              <li><a href="/contact" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">Get in Touch</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="scroll-fade-in-up animate-delay-300">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Our Creative Services</h3>
            <ul className="space-y-3 text-base">
              <li><a href="#services" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">Brand Identity & Design</a></li>
              <li><a href="#services" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">Intuitive Web Experiences</a></li>
              <li><a href="#services" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">Dynamic Content Creation</a></li>
              <li><a href="#services" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">Growth-Driven Marketing</a></li>
              <li><a href="#services" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">3D Rendering & Animation</a></li>
              <li><a href="#services" className="hover:text-primary-pastel-start transition hover:translate-x-1 inline-block duration-300">Photography & Videography</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="scroll-fade-in-up animate-delay-400">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Reach Out</h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3 hover:text-primary-pastel-start transition duration-300">
                <Icon name="location_on" className="text-primary-pastel-start mt-0.5" />
                <span>The Creative Hub<br />Digital City, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 hover:text-primary-pastel-start transition duration-300">
                <Icon name="phone" className="text-primary-pastel-start" />
                <span>+1 (555) CREATIVE</span>
              </li>
              <li className="flex items-center gap-3 hover:text-primary-pastel-start transition duration-300">
                <Icon name="email" className="text-primary-pastel-start" />
                <span>hello@creativia.agency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-text-dark-prime/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} Creativia. All creative rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
