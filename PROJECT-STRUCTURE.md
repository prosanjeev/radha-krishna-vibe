# Project Structure

```
radha-krishna-landing/
│
├── app/                           # Next.js App Router directory
│   ├── components/                # All React components
│   │   ├── AboutSection.jsx       # Philosophy section with glassmorphism
│   │   ├── AmbientMusicButton.jsx # Floating music player (bottom-right)
│   │   ├── FloatingParticles.jsx  # CSS-based particle animation
│   │   ├── Footer.jsx             # Minimal elegant footer
│   │   ├── HeroSection.jsx        # Full-height hero with gradient
│   │   ├── QuoteSlider.jsx        # Auto-sliding quote carousel
│   │   └── SymbolismSection.jsx   # 3 premium symbol cards
│   │
│   ├── globals.css                # Global styles + all animations
│   ├── layout.jsx                 # Root layout with metadata & fonts
│   └── page.jsx                   # Main page orchestrator
│
├── .gitignore                     # Git ignore file
├── package.json                   # Dependencies
├── postcss.config.js              # PostCSS config for Tailwind
├── tailwind.config.js             # Tailwind customization
├── README.md                      # Full documentation
└── QUICKSTART.md                  # Quick setup guide
```

## Page Flow (Top to Bottom)

```
┌─────────────────────────────────────────┐
│  🎨 Floating Particles (Background)     │
├─────────────────────────────────────────┤
│                                         │
│  🌅 HERO SECTION                        │
│  - Full screen gradient                │
│  - "Some Souls Meet Beyond Time"       │
│  - CTA Button with glow                │
│  - Scroll indicator                    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  📖 ABOUT DIVINE LOVE                   │
│  - 2 columns (image + text)            │
│  - Glassmorphism card                  │
│  - Gold accent line                    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  💬 QUOTE SLIDER                        │
│  - Auto-rotating quotes (6s)           │
│  - 4 philosophical quotes              │
│  - Navigation dots                     │
│  - Fade transitions                    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  🎭 SYMBOLISM SECTION                   │
│  ┌─────┐  ┌─────┐  ┌─────┐           │
│  │Flute│  │Peacock│ │Moon │           │
│  │     │  │Feather│ │light│           │
│  └─────┘  └─────┘  └─────┘           │
│  - Hover lift effects                 │
│  - Gold underlines                    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  📜 FOOTER                              │
│  - Gold divider                        │
│  - Minimal text                        │
│  - Copyright                           │
│                                         │
└─────────────────────────────────────────┘

         🎵 Music Button (Bottom Right)
```

## Color Palette

```
Gradients:
├── Pink:    #fce7f3 → #f9a8d4 → #ec4899
├── Purple:  #f3e8ff → #e9d5ff → #581c87
├── Sky:     #f0f9ff → #bae6fd → #0284c7
└── Gold:    #d4af37 (accent)

Usage:
├── Backgrounds: Soft gradient blends
├── Text: Purple-900 to Pink-800 gradients
├── Accents: Gold for CTAs and highlights
└── Glass: White/40 with backdrop-blur
```

## Typography Hierarchy

```
Headings (Playfair Display):
├── Hero: text-9xl (huge, dramatic)
├── Section: text-6xl (large, elegant)
└── Cards: text-3xl (medium, refined)

Body (Inter):
├── Paragraphs: text-lg (readable)
├── Quotes: text-4xl italic (prominent)
└── Small: text-sm (subtle)
```

## Animation Timeline

```
Page Load:
├── 0.0s → Hero text fade in
├── 0.3s → Subheading fade in
├── 0.6s → CTA button fade in
└── ∞    → Particles floating

Interactions:
├── Hover → Lift cards (+shadow)
├── Click Music → Sound wave animation
└── Quote Slider → Fade transition (6s loop)
```

## Key Features

✅ **Fully Responsive**: Mobile-first design
✅ **Zero Dependencies**: Only Next.js + Tailwind
✅ **CSS Animations**: No Framer Motion needed
✅ **Glassmorphism**: Modern backdrop-blur effects
✅ **SEO Ready**: Proper metadata in layout
✅ **Performance**: Optimized with next/image
✅ **Accessibility**: Semantic HTML, aria-labels
✅ **Production Ready**: Clean, commented code

## Quick Customization Guide

### Change Main Color
```js
// tailwind.config.js
colors: {
  gold: {
    DEFAULT: '#d4af37', // Change this
  },
}
```

### Add More Quotes
```jsx
// app/components/QuoteSlider.jsx
const quotes = [
  { text: "...", author: "..." },
  { text: "...", author: "..." }, // Add more
];
```

### Modify Section Order
```jsx
// app/page.jsx
<HeroSection />
<AboutSection />
<QuoteSlider />      // Swap these
<SymbolismSection /> // around as needed
```

### Add Images
```jsx
// app/components/AboutSection.jsx
<Image 
  src="/images/divine.jpg"
  alt="Divine Art"
  fill
  className="object-cover"
/>
```

---

**Ready to deploy!** 🚀

This structure is production-ready and follows Next.js 14+ App Router best practices.
