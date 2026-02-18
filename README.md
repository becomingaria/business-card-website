# Aria's Business Card Website

A modern, animated personal link-in-bio website showcasing social links and contact information.

## Live Site

Deployed via Netlify from GitHub.

## Features

- **Animated UI** - Smooth entrance animations and micro-interactions using Framer Motion
- **Responsive Design** - Scales gracefully from mobile to large desktop displays
- **Expandable Link Cards** - Each link expands to show descriptions before navigating
- **Dynamic Background** - Animated floating orbs with gradient effects
- **Dark Theme** - Purple/violet color scheme with glass-morphism effects

## Tech Stack

| Technology                                  | Purpose                 |
| ------------------------------------------- | ----------------------- |
| [React 19](https://react.dev)               | UI framework            |
| [TypeScript](https://typescriptlang.org)    | Type safety             |
| [Vite 7](https://vite.dev)                  | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com)   | Utility-first styling   |
| [Framer Motion](https://motion.dev)         | Animations              |
| [Phosphor Icons](https://phosphoricons.com) | Duotone icon library    |

## Project Structure

```
src/
├── components/
│   ├── BackgroundEffects.tsx   # Animated floating orbs
│   ├── Footer.tsx              # Site footer with joke rotation
│   ├── LinkButton.tsx          # Expandable social link cards
│   ├── ProfileCard.tsx         # Avatar, name, and bio section
│   └── index.ts                # Component exports
├── config/
│   ├── jokes.ts                # Footer joke content
│   └── links.ts                # Social links & profile config
├── assets/
│   └── Profile Picture.png     # Avatar image
├── App.tsx                     # Main app layout
├── App.css                     # Custom CSS variables
└── index.css                   # Tailwind imports & base styles
```

## Configuration

Edit `src/config/links.ts` to customize:

- **Profile Info** - Name, bio, avatar
- **Social Links** - URLs, descriptions, icons, colors

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Configured for Netlify via `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 20
- **SPA redirects**: All routes → `index.html`

## Design Methodology

### Visual Design

- Dark background (#0a0a0f) with purple/violet accent palette
- Glass-morphism cards with backdrop blur and subtle borders
- Gradient text for headings using primary-to-accent color flow
- Glow effects behind interactive elements

### Animation Philosophy

- Staggered entrance animations for visual hierarchy
- Spring physics for natural, bouncy interactions
- Subtle hover states that don't distract from content
- Smooth expand/collapse for link descriptions

### Responsive Approach

- Mobile-first base styles
- Progressive enhancement at `md`, `lg`, and `xl` breakpoints
- Avatar, icons, and text scale proportionally on larger screens
- Max-width container prevents over-stretching on ultrawide displays

## License

MIT
