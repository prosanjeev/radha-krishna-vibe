# Deployment Guide

## Option 1: Vercel (Recommended - 1-Click Deploy)

### Why Vercel?
- Built by Next.js creators
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Free tier available

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Radha Krishna landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/radha-krishna-landing.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! ✨

3. **Custom Domain (Optional)**
   - Go to your project settings
   - Add custom domain
   - Update DNS records as instructed

---

## Option 2: Netlify

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your project folder
   - Or connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `.next`

---

## Option 3: Traditional Hosting (VPS/Shared)

### Steps:

1. **Build for production**
   ```bash
   npm install
   npm run build
   ```

2. **Start the server**
   ```bash
   npm start
   ```

3. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "radha-krishna" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx (if needed)**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## Option 4: Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Build & Run

```bash
docker build -t radha-krishna-landing .
docker run -p 3000:3000 radha-krishna-landing
```

---

## Pre-Deployment Checklist

- [ ] Test build locally: `npm run build`
- [ ] Check for console errors
- [ ] Verify all images load
- [ ] Test on mobile devices
- [ ] Add audio file (if using music feature)
- [ ] Update metadata in `layout.jsx`
- [ ] Add favicon (create `app/favicon.ico`)
- [ ] Test lighthouse score
- [ ] Add Google Analytics (if needed)
- [ ] Configure environment variables (if any)

---

## Environment Variables

Create `.env.local` for any secrets:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Never commit `.env.local`** (already in .gitignore)

---

## Performance Optimization

### 1. Image Optimization

Add images to `/public/images/`:
```
public/
└── images/
    ├── divine-art.jpg
    ├── symbol-flute.jpg
    ├── symbol-peacock.jpg
    └── symbol-moon.jpg
```

Update components to use:
```jsx
<Image 
  src="/images/divine-art.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-fold images
/>
```

### 2. Add Favicon

Create or add:
```
app/
├── favicon.ico
└── apple-icon.png (optional)
```

### 3. Add Metadata

Already configured in `layout.jsx`, but you can expand:

```jsx
export const metadata = {
  title: 'Your Title',
  description: 'Your Description',
  openGraph: {
    title: 'Your Title',
    description: 'Your Description',
    url: 'https://yourdomain.com',
    siteName: 'Site Name',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Title',
    description: 'Your Description',
    images: ['https://yourdomain.com/og-image.jpg'],
  },
}
```

### 4. Add robots.txt

Create `app/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### 5. Add Sitemap

Create `app/sitemap.js`:
```js
export default function sitemap() {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

---

## Monitoring & Analytics

### Google Analytics

1. Get GA4 tracking ID
2. Create `app/components/GoogleAnalytics.jsx`:

```jsx
import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}
```

3. Add to `layout.jsx`:
```jsx
import GoogleAnalytics from './components/GoogleAnalytics'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
```

---

## Troubleshooting Common Issues

### Build fails with "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port 3000 already in use
```bash
# Find process
lsof -i :3000

# Kill it
kill -9 <PID>

# Or use different port
PORT=3001 npm run dev
```

### Images not showing after deployment
- Ensure images are in `/public/` directory
- Use `/images/file.jpg` not `./images/file.jpg`
- Check file names are case-sensitive

### Styles not loading
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

## Post-Deployment

1. **Test the live site**
   - Check all sections
   - Test on mobile
   - Verify music button works
   - Test quote slider

2. **Run Lighthouse audit**
   - Open DevTools
   - Run Lighthouse
   - Aim for 90+ scores

3. **Monitor performance**
   - Use Vercel Analytics (if on Vercel)
   - Or Google Analytics

4. **Share your masterpiece!** 🎉

---

## Support

If you encounter any issues:
1. Check the main README.md
2. Review component files
3. Check Next.js documentation
4. Ensure all dependencies are installed

---

**Your divine landing page is ready to illuminate the world! 🙏✨**
