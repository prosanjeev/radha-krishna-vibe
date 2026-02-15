'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fffcf7] pt-24 pb-12 px-6 overflow-hidden">
      {/* 1. The Sacred Aura (Background) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent"></div>
      
      {/* Subtle Floating Text Background (Radhe Radhe) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="font-serif text-[15rem] leading-none uppercase tracking-tighter">Radhe</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* 2. Symbolic Icon (The Lotus/Sun) */}
          <div className="mb-10 relative">
            <div className="w-12 h-12 border border-[#d4af37]/30 rounded-full flex items-center justify-center rotate-45 group hover:rotate-[225deg] transition-transform duration-1000">
               <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
            </div>
            {/* Soft Glow around icon */}
            <div className="absolute inset-0 bg-[#d4af37]/10 blur-xl rounded-full scale-150"></div>
          </div>

          {/* 3. The Divine Title */}
          <h2 className="font-serif text-3xl md:text-4xl text-[#2D1B08] mb-6 tracking-tight">
            Eternal <span className="italic font-light text-[#8b5cf6]">Connection</span>
          </h2>

          {/* 4. The Message (Wisdom) */}
          <p className="font-serif italic text-lg md:text-xl text-[#5c4033]/70 max-w-2xl mx-auto leading-relaxed mb-12">
            "Beyond stories, beyond time-pure consciousness experiencing itself in the mirror of Love."
          </p>

          {/* 5. Navigation/Links (Minimalist & Classy) */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-16">
            {['The Journey', 'Symbolism', 'Philosophy', 'Consciousness'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs uppercase tracking-[0.2em] text-[#d4af37] hover:text-[#8b5cf6] transition-colors duration-500"
              >
                {item}
              </a>
            ))}
          </div>

          {/* 6. Copyright & Signature */}
          <div className="w-full pt-12 border-t border-[#d4af37]/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#5c4033]/40">
              © {currentYear} — Crafted with Bhakti
            </div>
            
            {/* Signature style branding */}
            <div className="font-serif italic text-[#2D1B08]/80 text-lg">
              by <span className="text-[#d4af37] font-medium">Prosanjeev</span>
            </div>

            <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#5c4033]/40">
              Where Code Meets <span className="text-[#8b5cf6]">Soul</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Corner Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.05)_0%,transparent_70%)]"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.05)_0%,transparent_70%)]"></div>
    </footer>
  );
}