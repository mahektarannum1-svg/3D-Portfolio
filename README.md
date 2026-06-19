# Mahek Tarannum — Developer Portfolio

A premium, text-driven, responsive dark-themed developer portfolio website styled in the **Mercury (Mountain Top Command Center)** design aesthetic. Built using React, TypeScript, Vite, Three.js, React Three Fiber, and GSAP.

Repository: [https://github.com/mahektarannum1-svg/3D-Portfolio](https://github.com/mahektarannum1-svg/3D-Portfolio)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [GSAP License Note](#gsap-license-note)
- [Customization Guide](#customization-guide)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- **Spacious & Immersive Dark UI**: Tailored with the Mercury design palette featuring deep space blacks, slate backgrounds, and a single violet-blue accent light (`#5266eb`) strictly reserved for primary actions.
- **Interactive 3D Tech Stack**: An interactive physics-based 3D sphere canvas containing technology icons, powered by React Three Fiber and Rapier physics.
- **GSAP-powered Transitions**: Smooth scroll effects and transitions.
- **Custom Cursor & Micro-interactions**: Clean modern cursor trail and hover behaviors for navigation links and buttons.
- **Authority Through Restraint**: Authorized yet approachable typography using spacious letter-spacing and light weights.

---

## Tech Stack

### Core
- React 18
- TypeScript
- Vite

### Animation and 3D
- GSAP + `@gsap/react`
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/rapier`

### Supporting Libraries
- `react-icons`
- `react-fast-marquee`
- `@vercel/analytics`

---

## Project Structure

```text
.
├── public/                    # Static assets & images
├── src/
│   ├── assets/                # Media & global asset files
│   ├── components/
│   │   ├── styles/            # Component/section-specific CSS files
│   │   ├── utils/             # GSAP splitText and initial animations
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx  # Layout coordinator
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx      # Physics-based R3F interactive scene
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── context/               # Global providers (loading state, etc.)
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mahektarannum1-svg/3D-Portfolio.git
   cd 3D-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open the localhost URL in your browser (typically `http://localhost:5173` or `http://localhost:5174`).

---

## Available Scripts

- `npm run dev` — Starts Vite dev server.
- `npm run build` — Compiles TypeScript and builds a production bundle.
- `npm run preview` — Serves production build locally for verification.
- `npm run lint` — Runs ESLint code-quality checks.

---

## Customization Guide

You can adapt this portfolio to your own profile by updating the following areas:
- **Content sections**: Edit components in `src/components/` (e.g., `About.tsx`, `Career.tsx`, `WhatIDo.tsx`, `Work.tsx`, and `Contact.tsx`).
- **Styling & Tokens**: Modify custom theme properties in `src/index.css` and individual CSS modules in `src/components/styles/`.
- **Interactive Tech Stack**: Add or update icons and properties inside `src/components/TechStack.tsx`.

---

## Deployment

1. Create a production build:
   ```bash
   npm run build
   ```
2. Deploy the generated `dist/` directory to Vercel, Netlify, or Cloudflare Pages.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
