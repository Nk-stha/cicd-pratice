import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-light-bg">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <StatsSection />
        <ResourcesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
