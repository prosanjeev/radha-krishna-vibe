import './globals.css'

export const metadata = {
  title: 'Eternal Connection | The Divine Grace of Radha-Krishna',
  description: 'A cinematic meditation on divine love and spiritual union. Experience the eternal vibrations of Radha and Madhav beyond the boundaries of time.',
  keywords: 'Radha Krishna, Divine Love, Vrindavan Philosophy, Soul Connection, Spiritual Meditation',
  icons: {
    icon: '/favicon.png', // Make sure to add a small peacock feather or lotus icon here
  },
  openGraph: {
    title: 'Eternal Connection',
    description: 'Explore the Philosophy of Divine Love.',
    images: ['/images/og-image.png'], // Jab link share karoge toh ye photo dikhegi
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Divine Typography: Playfair for Headings, Inter for Body */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@100..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased selection:bg-[#d4af37]/20 selection:text-[#2D1B08] bg-[#fffcf7] text-[#2D1B08]">
        
        {/* 1. Subtle Paper Texture Overlay (Global) */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

        {/* 2. Soft Ambient Glow (Global) */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(212,175,55,0.08)_0%,transparent_50%)]"></div>

        <main className="relative z-10">
          {children}
        </main>

        {/* 3. Global Decorative Border (Optional - adds a very classy frame feel) */}
        <div className="fixed inset-4 border border-[#d4af37]/5 pointer-events-none z-50 rounded-[2rem]"></div>
      </body>
    </html>
  )
}