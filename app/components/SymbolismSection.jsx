'use client';

const symbols = [
  {
    title: "The Flute",
    description: "The divine instrument through which the breath of creation flows. Its melody is the vibration of pure consciousness calling to itself.",
    insight: "When the soul is hollow, it becomes the instrument of the Divine.",
    icon: "🪈"
  },
  {
    title: "The Peacock Feather",
    description: "Representing the thousand ways the beloved is seen, yet never fully known. Beauty that reveals and conceals like truth itself.",
    insight: "True vision perceives the infinite patterns within a single moment.",
    icon: "🪶"
  },
  {
    title: "The Moonlight",
    description: "Neither belonging to the moon nor the night. It touches everything yet clings to nothing, illuminating without possessing.",
    insight: "The highest love gives light freely, asking nothing in return.",
    icon: "🌙"
  }
];

export default function SymbolismSection() {
  return (
    <section className="relative py-32 px-6 bg-[#fffcf7] overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#faf7f2] to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Divine Header */}
        <div className="text-center mb-24">
          <span className="text-[#d4af37] font-serif italic tracking-[0.4em] text-xs uppercase mb-4 block">Mystical Meanings</span>
          <h2 className="font-serif text-5xl md:text-7xl text-[#2D1B08] mb-8">
            Sacred <span className="italic font-light text-[#8b5cf6]">Symbolism</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
             <div className="h-[1px] w-12 bg-[#d4af37]/30"></div>
             <div className="w-1.5 h-1.5 rotate-45 border border-[#d4af37]"></div>
             <div className="h-[1px] w-12 bg-[#d4af37]/30"></div>
          </div>
        </div>

        {/* Symbol Cards */}
        <div className="grid lg:grid-cols-3 gap-12 md:gap-8">
          {symbols.map((symbol, index) => (
            <div key={index} className="group relative">
              {/* Outer Glow on Hover */}
              <div className="absolute -inset-2 bg-gradient-to-b from-[#d4af37]/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              
              <div className="relative h-full bg-white/40 backdrop-blur-sm border border-[#d4af37]/10 rounded-[2rem] p-10 flex flex-col transition-all duration-500 group-hover:bg-white/80 group-hover:border-[#d4af37]/30 group-hover:-translate-y-3">
                
                {/* Floating Icon/Symbol */}
                <div className="mb-10 relative">
                  <div className="w-16 h-16 rounded-full bg-[#faf7f2] flex items-center justify-center text-3xl shadow-inner border border-[#d4af37]/5 transition-transform duration-700 group-hover:rotate-[360deg]">
                    <span className="drop-shadow-md">{symbol.icon}</span>
                  </div>
                  {/* Small decorative ring */}
                  <div className="absolute -inset-2 border border-[#d4af37]/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                </div>

                <h3 className="font-serif text-3xl text-[#2D1B08] mb-6 tracking-tight">
                  {symbol.title}
                </h3>

                <p className="font-sans font-light text-[#5c4033]/70 leading-relaxed mb-8 text-lg">
                  {symbol.description}
                </p>

                {/* Insight Quote Box */}
                <div className="mt-auto pt-8 border-t border-[#d4af37]/10">
                   <p className="font-serif italic text-[#8b5cf6]/80 text-base leading-relaxed">
                     "{symbol.insight}"
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Ornamental Line */}
        <div className="mt-32 flex flex-col items-center">
           <div className="h-[60px] w-[1px] bg-gradient-to-b from-[#d4af37]/40 to-transparent"></div>
           <p className="mt-4 font-serif italic text-[#d4af37]/50 text-sm tracking-widest">Tat Tvam Asi</p>
        </div>
      </div>
    </section>
  );
}