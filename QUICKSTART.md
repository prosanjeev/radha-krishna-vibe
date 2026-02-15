# Quick Start Guide

## Instant Setup (3 Steps)

### Step 1: Create Next.js App
```bash
npx create-next-app@latest radha-krishna-landing
```

When prompted:
- ✅ Use JavaScript (NOT TypeScript)
- ✅ Use Tailwind CSS
- ✅ Use App Router
- ❌ No src/ directory
- ✅ Default import alias

### Step 2: Replace Files

Copy these files into your project, **replacing** the existing ones:

```
radha-krishna-landing/
├── app/
│   ├── layout.jsx          ← REPLACE
│   ├── page.jsx            ← REPLACE
│   ├── globals.css         ← REPLACE
│   └── components/         ← CREATE this folder, ADD all components
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── QuoteSlider.jsx
│       ├── SymbolismSection.jsx
│       ├── AmbientMusicButton.jsx
│       ├── Footer.jsx
│       └── FloatingParticles.jsx
├── tailwind.config.js      ← REPLACE
├── postcss.config.js       ← (should already exist)
└── package.json            ← (should already exist)
```

### Step 3: Run

```bash
cd radha-krishna-landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## Optional Enhancements

### Add Ambient Music

1. Create folder: `public/audio/`
2. Add file: `ambient-flute.mp3` (any soft instrumental)
3. Button will automatically work!

### Add Images

1. Create folder: `public/images/`
2. Add divine artwork images
3. Update `AboutSection.jsx`:

```jsx
import Image from 'next/image';

// Inside the image container div:
<Image 
  src="/images/your-image.jpg"
  alt="Divine Art"
  fill
  className="object-cover rounded-3xl"
  priority
/>
```

---

## File Organization

```
app/
├── layout.jsx              # Root layout, metadata, fonts
├── page.jsx                # Main orchestrator
├── globals.css             # All animations & global styles
└── components/
    ├── HeroSection.jsx     # Hero with CTA
    ├── AboutSection.jsx    # 2-column philosophy section
    ├── QuoteSlider.jsx     # Auto-rotating quotes
    ├── SymbolismSection.jsx # 3 symbol cards
    ├── AmbientMusicButton.jsx # Floating music player
    ├── Footer.jsx          # Minimal footer
    └── FloatingParticles.jsx # Background particles
```

---

## Customization Quick Tips

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  gold: {
    DEFAULT: '#your-color',
  },
}
```

### Update Quotes
Edit `components/QuoteSlider.jsx`:
```js
const quotes = [
  { text: "Your quote...", author: "Author" },
  // Add more...
];
```

### Modify Symbols
Edit `components/SymbolismSection.jsx`:
```js
const symbols = [
  {
    title: "Your Symbol",
    description: "Description...",
    insight: "Insight..."
  },
  // Add more...
];
```

---

## Troubleshooting

### "Module not found" error?
- Make sure you created the `components` folder inside `app/`
- Check file names match exactly (case-sensitive)

### Fonts not loading?
- Check internet connection (Google Fonts CDN)
- Clear browser cache

### Tailwind styles not working?
- Run `npm install` again
- Restart dev server (`npm run dev`)

### Music button not working?
- Add audio file to `public/audio/ambient-flute.mp3`
- Check browser console for errors
- Some browsers block autoplay (this is expected - user must click)

---

## Production Deployment

### Deploy to Vercel (1-Click)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy! ✨

### Environment Variables (if needed)

Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

---

## Performance Checklist

- ✅ Images optimized with `next/image`
- ✅ Fonts preconnected
- ✅ CSS animations (no JS libraries)
- ✅ Audio lazy-loaded (`preload="none"`)
- ✅ Mobile-first responsive
- ✅ Semantic HTML
- ✅ Smooth scrolling

---

## Support & Questions

This is a complete, production-ready landing page. All code is clean, commented, and follows Next.js best practices.

### Need help?
- Check the main README.md for detailed documentation
- Review component files - they're well-structured
- Customize freely - the code is yours!

---

**Happy building! May your landing page radiate divine elegance. 🙏✨**
