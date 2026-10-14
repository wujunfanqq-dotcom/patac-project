import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroOverview } from './components/HeroOverview';
import { CoreServices } from './components/CoreServices';
import { MilestonesHardware } from './components/MilestonesHardware';
import { ContactWu } from './components/ContactWu';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [lightboxAssetId, setLightboxAssetId] = useState<string | null>(null);

  // Scrollspy observer for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'services', 'hardware', 'contact'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenCalculator = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Sticky Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Single-Page Content Body */}
      <main className="flex-1">
        {/* Module 01: 首页介绍与区位总览 (OVERVIEW & HUB) */}
        <HeroOverview
          onOpenPhotoLightbox={(id) => setLightboxAssetId(id)}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Module 02: 核心业务与多式联运 (SERVICES & CAPABILITIES) */}
        <CoreServices
          onOpenPhotoLightbox={(id) => setLightboxAssetId(id)}
        />

        {/* Module 03: 发展历程与硬件实力 (MILESTONES & EMBEDDED VISUAL ASSETS) */}
        <MilestonesHardware
          onOpenPhotoLightbox={(id) => setLightboxAssetId(id)}
        />

        {/* Module 04: 联系方式与业务对接人 (CONTACT: 杜塞老吴) */}
        <ContactWu />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal for 6 Authentic Onsite Photos */}
      <LightboxModal
        assetId={lightboxAssetId}
        onClose={() => setLightboxAssetId(null)}
        onSelectAsset={(id) => setLightboxAssetId(id)}
      />
    </div>
  );
}
