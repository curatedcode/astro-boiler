# Astro Boiler

A modern, performance-optimized web starter template built with Astro, Tailwind CSS, and Alpine.js. Features comprehensive SEO optimization, PWA capabilities, and developer-friendly tooling.

## ✨ Features

- **🚀 Astro**
- **🎨 TailwindCSS**
- **⚡ Alpine.js**
- **📱 PWA Ready**
- **🔍 SEO Optimized**
- **🎯 TypeScript**

## 🚀 Quick Start

### Prerequisites

- Node.js 22+ 
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/curatedcode/astro-boiler.git
cd astro-boiler

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see your site running locally.

## 📁 Project Structure

```
astro-boiler/
├── public/
│   ├── icons/           # PWA and touch icons
│   ├── fonts/           # Custom web fonts
│   ├── favicon.svg      # Modern favicon
│   ├── favicon.ico      # Legacy favicon fallback
│   └── manifest.json    # PWA manifest
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
├── tests/               # Playwright test files
└── package.json
```

## 🛠 Scripts

```bash
# Development
pnpm dev              # Start dev server on localhost:3000
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Format code with Prettier
pnpm lint:check       # Check code formatting

# Testing
pnpm test             # Run Playwright tests
```

## 🔧 Configuration

### Replace placeholder variables

#### Site Info (head/manifest.json)
SITE_TITLE="Your Site Title"
SITE_SHORT_TITLE="Short Title"
SITE_DESCRIPTION="Your site description"
SITE_LIVE_URL="https://yourdomain.com"
SITE_TWITTER="@yourtwitterhandle"

#### Colors
THEME_COLOR="#your-theme-color"
BG_COLOR="#your-background-color"

#### Categories for PWA
CATEGORY_1="productivity"
CATEGORY_2="utilities"

### Customization

2. **Replace icons** - Add your custom icons in the `/public/icons/` directory
3. **Fonts** - Replace the custom font in `/public/fonts/` and update the preload link (if used)
4. **Content** - Modify pages in `/src/pages/` and components in `/src/components/`

## 📱 PWA Features

This template includes a complete PWA setup:

- **App Manifest** - Full configuration for installable web app
- **Service Worker** - Caches /offline page and any images
- **Touch Icons** - Apple touch icons for iOS devices
- **Maskable Icons** - Adaptive icon support

### PWA Installation

Users can install your site as an app on:
- **Desktop** - Chrome, Edge, Safari
- **Mobile** - iOS Safari, Android Chrome
- **Progressive Enhancement** - Works as website if PWA not supported

## 🔍 SEO Optimization

Comprehensive SEO setup included:

- **Meta Tags** - Complete head tag optimization
- **Open Graph** - Facebook, LinkedIn social sharing
- **Twitter Cards** - Twitter social sharing with large images
- **Robots Meta** - Search engine indexing enabled


## 🧪 Testing

Playwright testing setup includes:

- **Cross-browser testing** - Chrome, Firefox, Safari
- **Accessibility testing** - axe-core integration
- **Mobile testing** - Responsive design validation
- **Performance testing** - Core Web Vitals monitoring

Run tests:
```bash
pnpm test              # Headless mode
```

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

The `dist/` folder contains your production-ready static files.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---