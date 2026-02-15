'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#faf7f2]">
      {/* 1. The Divine Atmosphere (Soft Glows) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,223,186,0.4)_0%,rgba(255,255,255,0)_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.03]"></div>

      {/* 2. Floating Spiritual Elements (Decorative SVGs) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Peacock Feather Soft Blur */}
        <div className="absolute top-[10%] right-[15%] w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-orange-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 3. Content Area */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        
        {/* Subtle Ornament Above Title */}
        <div className="flex justify-center mb-8 opacity-60">
           <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37] self-center"></div>
           <span className="mx-4 text-[#d4af37] text-2xl">✨</span>
           <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37] self-center"></div>
        </div>

        <h1 className="font-serif italic text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-[#2D1B08] leading-[0.9] mb-8">
          <span className="block opacity-90 drop-shadow-sm">Some Souls</span>
          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#d4af37] bg-clip-text text-transparent italic font-extralight py-2">
            Meet Beyond Time
          </span>
        </h1>
        
        <p className="font-light tracking-[0.2em] text-sm md:text-lg text-[#5c4033]/70 uppercase mb-14 max-w-2xl mx-auto">
          Experience the Eternal Vibrations of <span className="text-[#b45309] font-medium">Radha-Madhav</span>
        </p>

        {/* The "Divine" Button */}
        <button className="group relative px-10 py-4 overflow-hidden rounded-full transition-all duration-700 hover:scale-105 active:scale-95">
          {/* Glassy Background */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-[#d4af37]/40 rounded-full"></div>
          
          {/* Golden Hover Fill */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-orange-200/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

          <span className="relative z-10 font-medium tracking-widest text-[#4a2c2a] flex items-center gap-3">
            ENTER THE VRINDAVAN
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="螺旋 M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>

      {/* 4. Elegant Bottom Border/Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

      {/* Floating Petals/Particles (CSS only) */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100px) rotate(45deg); opacity: 0; }
        }
        .petal {
          position: absolute;
          background: linear-gradient(to bottom right, #fecaca, #fdf2f8);
          border-radius: 150% 0 150% 0;
          animation: float 10s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}