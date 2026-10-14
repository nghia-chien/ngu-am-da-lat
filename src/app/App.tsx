import React from 'react';
import { SiteHeader } from '../components/layout/SiteHeader';
import { HeroSection } from '../components/sections/HeroSection';
import { AccommodationSection } from '../components/sections/AccommodationSection';
import { AboutSection } from '../components/sections/AboutSection';
import { GallerySection } from '../components/sections/GallerySection';
import { LocationSection } from '../components/sections/LocationSection';
import { ContactSection } from '../components/sections/ContactSection';
import { SiteFooter } from '../components/layout/SiteFooter';
import { PhoneCall } from 'lucide-react';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="app-layout">
      {/* Skip to Content for Keyboard Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Chuyển đến nội dung chính
      </a>

      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <AccommodationSection />
        <AboutSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>

      <SiteFooter />

      {/* Floating Quick Call Button for Mobile */}
      <aside className="floating-quick-call" aria-label="Gọi nhanh hỗ trợ">
        <a
          href="tel:0911942968"
          className="floating-quick-call__btn"
          aria-label="Gọi ngay 0911 942 968"
        >
          <PhoneCall size={20} className="floating-quick-call__icon" />
          <span className="floating-quick-call__text">0911 942 968</span>
        </a>
      </aside>
    </div>
  );
};
