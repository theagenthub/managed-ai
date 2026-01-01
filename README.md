# AI Infrastructure for Law Firms - Landing Page

A beautiful, bilingual (Hebrew/English) static website for an AI infrastructure service targeting law firms in Israel. Built with React, TypeScript, and Vite.

## Features

- 🌐 **Bilingual Support**: Full Hebrew (RTL) and English (LTR) support with easy language switching
- 🔒 **Security-First Design**: Prominent security and compliance messaging
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Built with Vite for optimal performance
- 🎨 **Modern UI**: Professional design with smooth animations

## Technology Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- CSS Modules
- React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── contexts/    # React contexts (Language)
│   ├── translations/# Translation files (he.ts, en.ts)
│   ├── styles/      # Global styles
│   ├── App.tsx      # Main app component
│   └── main.tsx     # Entry point
├── package.json
└── vite.config.ts
```

## Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the static files ready for deployment

3. Configure GitHub Pages to serve from the `dist` folder or deploy the contents

### Other Platforms

The built `dist` folder can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Any web server

## Customization

- **Content**: Edit translation files in `src/translations/` (he.ts for Hebrew, en.ts for English)
- **Styling**: Modify CSS variables in `src/styles/index.css` for colors and spacing
- **Components**: All components are in `src/components/` with their respective CSS modules

## License

Copyright 2025. All rights reserved.

