'use client';

import { useState, useEffect } from 'react';

const quotes = [
  {
    text: "In the garden of divine consciousness, two souls dance as one-never apart, never together, forever complete.",
    author: "Ancient Wisdom",
    vibe: "Prem"
  },
  {
    text: "The flute's melody does not call to the dancer; it is the dancer's own heart singing through the musician's breath.",
    author: "Sacred Verses",
    vibe: "Bhakti"
  },
  {
    text: "True union transcends the body, the mind, the very concept of separation. It is the recognition that we have always been whole.",
    author: "Eternal Truth",
    vibe: "Shakti"
  },
  {
    text: "Like the river merging with the ocean, yet remaining itself-this is the paradox of divine love, where two become infinite.",
    author: "Mystic Poetry",
    vibe: "Ananda"
  }
];

export default function QuoteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000); // Thoda slow rakhte hain padhne ke liye
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = (index = null) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index !== null ? index : (currentIndex + 1) % quotes.length);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <section className="relative py-32 px-6 bg-[#faf7f2] overflow-hidden">
      {/* Background Sacred Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] opacity-60 pointer-events-none"></div>
      
      {/* Decorative Peacock Feather Silhouette (Bottom Right) */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-[0.05] grayscale rotate-45 pointer-events-none">
         <img src="https://cdn-icons-png.flaticon.com/512/2622/2622064.png" alt="peacock" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Divine Tag */}
        <div className="inline-flex items-center gap-4 mb-8">
           <div className="h-[1px] w-8 bg-[#d4af37]/40"></div>
           <span className="font-serif italic text-[#d4af37] tracking-widest text-sm uppercase">
             {quotes[currentIndex].vibe}
           </span>
           <div className="h-[1px] w-8 bg-[#d4af37]/40"></div>
        </div>

        <div className="relative min-h-[350px] flex flex-col items-center justify-center">
          {/* Animated Quote Mark */}
          <div className="mb-10 opacity-20">
             <span className="font-serif text-8xl text-[#d4af37]">“</span>
          </div>

          <div 
            className={`transition-all duration-[1500ms] ease-in-out ${
              isAnimating ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100 translate-y-0 blur-0'
            }`}
          >
            <blockquote className="font-serif text-3xl md:text-5xl text-[#2D1B08] leading-tight mb-10 italic font-light">
              {quotes[currentIndex].text}
            </blockquote>

            <div className="flex flex-col items-center gap-2">
               <p className="font-sans font-light tracking-[0.3em] text-[#5c4033]/60 text-sm uppercase">
                 - {quotes[currentIndex].author} -
               </p>
            </div>
          </div>
        </div>

        {/* Custom Minimalist Pagination */}
        <div className="flex justify-center items-center gap-8 mt-16">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNext(index)}
              className="group relative p-2"
              aria-label={`Slide ${index + 1}`}
            >
              {/* Ring effect for active */}
              {index === currentIndex && (
                <div className="absolute inset-0 border border-[#d4af37]/40 rounded-full scale-150 animate-ping opacity-20"></div>
              )}
              <div 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${
                  index === currentIndex 
                  ? 'bg-[#d4af37] scale-150 shadow-[0_0_10px_#d4af37]' 
                  : 'bg-[#d4af37]/20 group-hover:bg-[#d4af37]/50'
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>

      {/* Aesthetic Border at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"></div>
    </section>
  );
}