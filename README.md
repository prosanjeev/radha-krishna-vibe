# Radha Krishna Divine Love - Premium Landing Page

A luxury, cinematic, and spiritual landing page inspired by the eternal bond of Radha & Krishna. Built with Next.js 14+ App Router, featuring glassmorphism design, soft gradients, and elegant animations.

## 🎨 Design Philosophy

This landing page embodies:
- **Luxury Aesthetic**: Soft pastel gradients, gold accents, glassmorphism
- **Spiritual Elegance**: Classy and minimal, not devotional poster style
- **Cinematic Feel**: Smooth animations, floating particles, divine atmosphere
- **Light Theme Only**: Pink, lavender, and sky blue palette with gold (#d4af37)

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Language**: JavaScript (JSX)
- **No external libraries**: Pure CSS animations, no Framer Motion

## 📁 File Structure

```
app/
├── layout.jsx              # Root layout with metadata
├── page.jsx                # Main page component
├── globals.css             # Global styles & animations
├── components/
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── QuoteSlider.jsx
│   ├── SymbolismSection.jsx
│   ├── AmbientMusicButton.jsx
│   ├── Footer.jsx
│   └── FloatingParticles.jsx
└── tailwind.config.js      # Tailwind configuration
```

## 🛠️ Setup Instructions

### 1. Create a new Next.js project (if you haven't already)

```bash
npx create-next-app@latest radha-krishna-landing --js --no-typescript --tailwind --app
cd radha-krishna-landing
```

### 2. Replace/Add files

Copy all the provided files into your Next.js project:

- `app/layout.jsx`
- `app/page.jsx`
- `app/globals.css`
- `app/components/*.jsx` (all component files)
- `tailwind.config.js`

### 3. Add Audio File (Optional)

For the ambient music feature to work, add an audio file:

```
public/
└── audio/
    └── ambient-flute.mp3
```

You can use any soft instrumental flute music. The button will gracefully handle missing audio.

### 4. Add Images (Optional)

For the About section imagery, you can add:

```
public/
└── images/
    └── divine-art.jpg (or any spiritual artwork)
```

Then update the `AboutSection.jsx` to use:

```jsx
<Image 
  src="/images/divine-art.jpg" 
  alt="Divine Art"
  fill
  className="object-cover"
/>
```

### 5. Install dependencies & Run

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your landing page.

## ✨ Features

### 1. Hero Section
- Full-height with soft gradient background
- Animated headline with gradient text
- Glowing CTA button with hover effects
- Scroll indicator animation

### 2. About Divine Love
- Two-column responsive layout
- Glassmorphism card with philosophical content
- Hover effects and smooth transitions
- Gold accent lines

### 3. Quote Slider
- Auto-sliding quotes (6-second intervals)
- Fade transitions
- 4 elegant philosophical quotes
- Interactive dots for manual navigation

### 4. Symbolism Section
- 3 premium cards: The Flute, The Peacock Feather, The Moonlight
- Hover lift effects with glow
- Gold accent underlines
- Responsive grid layout

### 5. Ambient Music Button
- Floating bottom-right circular button
- Play/pause toggle
- Animated sound waves when playing
- Tooltip on hover
- **Does NOT autoplay** (user-initiated)

### 6. Floating Particles
- CSS-based subtle particle animation
- 20 particles with randomized properties
- Non-intrusive background effect

### 7. Footer
- Minimal elegant design
- Gold divider line
- Centered content with tagline

## 🎨 Customization

### Colors

The main colors are defined in the Tailwind config and used throughout:

- **Gold**: `#d4af37`
- **Pink tones**: `pink-50` to `pink-800`
- **Purple tones**: `purple-50` to `purple-900`
- **Sky blue**: `sky-50` to `sky-100`

### Typography

- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, modern)

### Animations

All animations are CSS-based and defined in `globals.css`:
- Fade in effects
- Floating particles
- Scroll dot animation
- Sound waves
- Pulse effects

## 📱 Responsive Design

The page is fully responsive with mobile-first approach:
- Hero text scales: `text-6xl md:text-8xl lg:text-9xl`
- Grid layouts adapt: `md:grid-cols-2`, `md:grid-cols-3`
- Padding adjusts: `px-6`, `py-32`
- All touch-friendly button sizes

## 🎯 Performance Tips

1. **Image Optimization**: Use Next.js `<Image>` component with proper dimensions
2. **Font Loading**: Preconnect to Google Fonts for faster loading
3. **Audio Preload**: Set to `preload="none"` to not block initial load
4. **Lazy Components**: All sections render on page load (good for landing pages)

## 🌟 Production Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Other platforms

```bash
npm run build
npm start
```

## 📝 Content Customization

You can easily update:

1. **Quotes**: Edit the `quotes` array in `QuoteSlider.jsx`
2. **Symbols**: Modify the `symbols` array in `SymbolismSection.jsx`
3. **About content**: Update text in `AboutSection.jsx`
4. **Hero headline**: Change text in `HeroSection.jsx`

## 🎵 Audio Recommendations

For the ambient music, consider:
- Soft flute instrumental
- Meditative background music
- Classical Indian instrumental
- Keep file size under 5MB for faster loading

## 🙏 Notes

- This is a **light theme only** design
- No dark mode toggle
- Intentionally minimal and classy
- Not devotional poster style
- Cinematic and artistic approach
- Production-ready code

## 📄 License

Free to use for personal and commercial projects.

---

Built with reverence and attention to detail. May this digital temple serve as a meditation on divine love.
