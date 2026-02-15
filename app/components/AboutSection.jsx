'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-40 px-6 overflow-hidden bg-[#fffcf7]">
      {/* Background Elements - Sacred Geometry or Petals */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%"><pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="#d4af37"/></pattern><rect width="100%" height="100%" fill="url(#pattern)"/></svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* 1. The Sacred Portrait (Image Side) */}
          <div className="relative order-2 md:order-1 flex justify-center">
            {/* Soft Aura behind the image */}
            <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] animate-pulse"></div>
            
            <div className="relative group w-full max-w-[450px]">
              {/* Decorative Frame Corner - Top Left */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#d4af37]/40 rounded-tl-3xl z-20"></div>
              {/* Decorative Frame Corner - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#d4af37]/40 rounded-br-3xl z-20"></div>

              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(45,27,8,0.15)] transform transition-all duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                <Image
                  src="/images/radha-krishna-soft.avif"
                  alt="Divine Love"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                />
                {/* Golden Sun-kissed overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2D1B08]/20 via-transparent to-white/10"></div>
              </div>
            </div>
          </div>

          {/* 2. The Wisdom (Text Content Side) */}
          <div className="order-1 md:order-2 space-y-10">
            
            <div className="space-y-4">
              <span className="text-[#d4af37] font-serif italic tracking-[0.3em] text-sm uppercase block">The Eternal Truth</span>
              <h2 className="font-serif text-5xl md:text-7xl text-[#2D1B08] leading-[1.1]">
                Philosophy of <br />
                <span className="italic font-light text-[#8b5cf6]">Divine Love</span>
              </h2>
            </div>

            {/* Content Box with "Paper" texture feel */}
            <div className="relative group">
              {/* Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#d4af37] via-[#d4af37]/20 to-transparent"></div>
              
              <div className="pl-8 space-y-6">
                <p className="font-serif text-xl text-[#5c4033]/90 leading-relaxed italic">
                  "In the sacred realm where souls transcend the boundaries of time, love becomes the very fabric of existence."
                </p>
                
                <p className="font-sans font-light text-lg text-[#5c4033]/70 leading-relaxed">
                  This is not a bond of possession, but a celebration of the essence within. It is the recognition of the infinite in the finite-like the moonlight caressing the Yamuna, ever-present, yet untouchable.
                </p>

                {/* Aesthetic Signature/Mark */}
                <div className="pt-4 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-[#d4af37]/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>
                    </div>
                    <span className="text-xs tracking-widest uppercase text-[#d4af37]/60">Soul's Journey</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}