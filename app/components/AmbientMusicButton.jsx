'use client';

import { useState, useRef, useEffect } from 'react';

export default function AmbientMusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!audioRef.current || hasStartedRef.current) return;

      audioRef.current.volume = 0.3; // Very subtle volume
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          hasStartedRef.current = true;
        })
        .catch(() => {});

      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/ambient-flute.mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-10 right-10 z-50">
        <button
          onClick={toggleMusic}
          className="relative group flex items-center justify-center w-20 h-20 outline-none"
          aria-label="Toggle Divine Resonance"
        >
          {/* 1. Divine Aura Layers (Animated Rings) */}
          {isPlaying && (
            <>
              <div className="absolute inset-0 rounded-full border border-[#d4af37]/30 animate-[ping_3s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border border-[#d4af37]/20 animate-[ping_4s_linear_infinite] delay-700"></div>
              <div className="absolute inset-0 bg-[#d4af37]/5 rounded-full blur-2xl"></div>
            </>
          )}

          {/* 2. Main Button Body (Sacred Amulet Look) */}
          <div className="relative w-14 h-14 bg-[#fffcf7]/80 backdrop-blur-xl border border-[#d4af37]/30 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:border-[#d4af37]/60 overflow-hidden">
            
            {/* Inner Rotating Texture */}
            <div className={`absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] ${isPlaying ? 'animate-spin-slow' : ''}`}></div>

            {/* 3. The Symbol (Minimalist Flute/Vibration) */}
            <div className="relative z-10">
              {isPlaying ? (
                <div className="flex items-end gap-1 h-4">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className={`w-[2px] bg-gradient-to-t from-[#d4af37] to-[#8b5cf6] rounded-full animate-vibration`}
                      style={{ 
                        animationDelay: `${i * 0.2}s`,
                        height: isPlaying ? '100%' : '20%' 
                      }}
                    ></div>
                  ))}
                </div>
              ) : (
                <span className="text-[#d4af37] text-xl transition-transform duration-500 group-hover:rotate-12 block">🪈</span>
              )}
            </div>
          </div>

          {/* 4. Floating 'Radhe' Tooltip */}
          <div className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 pointer-events-none">
            <div className="bg-[#2D1B08]/90 text-[#fffcf7] px-4 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase font-serif italic border border-[#d4af37]/20 backdrop-blur-md">
              {isPlaying ? 'Divine Silence' : 'Soul Melody'}
            </div>
          </div>
        </button>
      </div>

      <style jsx>{`
        @keyframes vibration {
          0%, 100% { height: 40%; opacity: 0.5; }
          50% { height: 100%; opacity: 1; }
        }
        .animate-vibration {
          animation: vibration 1.2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}