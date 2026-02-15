'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import QuoteSlider from './components/QuoteSlider';
import SymbolismSection from './components/SymbolismSection';
import AmbientMusicButton from './components/AmbientMusicButton';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingParticles />
      <HeroSection />
      <AboutSection />
      <QuoteSlider />
      <SymbolismSection />
      <AmbientMusicButton />
      <Footer />
    </main>
  );
}
