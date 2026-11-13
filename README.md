# Muhammad Ali — Applied AI Engineer Portfolio

A modern, high-performance developer portfolio and case-study showcase built with **Astro 7**, **TypeScript**, and **Tailwind CSS v4**.

Designed for applied AI engineering, full-stack product interfaces, and interactive technical case studies.

---

## 🌟 Overview

- **Engineered for Speed:** Built with Astro's content collections and static output for sub-second load times and zero unnecessary JavaScript.
- **Applied AI & Full-Stack Focus:** Highlights real-world computer vision, local LLM tooling, and production TypeScript/React applications.
- **Type-Safe Content Architecture:** All case studies and project records are validated at build time via Zod schemas (`src/content.config.ts`).
- **Responsive & Accessible:** Dark/light system theming, semantic HTML, and responsive UI with smooth transitions.

---

## 🛠️ Tech Stack

### Core
- **Framework:** [Astro 7](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Deployment:** Vercel Static (`@astrojs/vercel`)
- **Typography:** IBM Plex Mono & IBM Plex Sans

### Engineering Competencies Showcased
- **Frontend:** React, Next.js, Vue, Vite, Tailwind CSS, Three.js, Web Components
- **Backend & Data:** FastAPI, Flask, PostgreSQL, Redis, WebSockets
- **Computer Vision:** SAM 3, Depth Anything V2, YOLOPv2, OpenCV
- **Local AI & Inference:** PyTorch, FLUX.2, KittenTTS 2, Ollama, CUDA

---

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets, fonts, icons, resume
│   └── muhammad-ali-sheikh-resume.pdf
├── src/
│   ├── components/         # Reusable Astro UI components (Header, Footer, ProjectCard)
│   ├── content/            # Type-checked markdown case studies
│   │   └── work/           # Individual project case studies
│   ├── data/               # Site configuration and structured profile data
│   │   └── site.ts
│   ├── layouts/            # Page layouts and global HTML shells
│   ├── lib/                # Utility helpers (SEO, site URLs)
│   ├── pages/              # Static routes & dynamic work pages
│   └── styles/             # Global CSS and Tailwind v4 configuration
├── astro.config.mjs        # Astro configuration with Vercel adapter & sitemap
└── package.json            # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** `>=22.12.0` (Node 22 LTS recommended)
- **npm:** `>=9.6.5`

### 1. Clone the repository
```bash
git clone https://github.com/Muhammad-Ali-dev/portfolio-astro.git
cd portfolio-astro
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
The site will be live at `http://localhost:4321`.

### 4. Build for production
```bash
npm run build
```
Generates production-ready static output into `dist/` and `.vercel/output/static`.

---

## 📬 Contact & Connect

- **Portfolio:** [Muhammad Ali](https://github.com/Muhammad-Ali-dev)
- **LinkedIn:** [muhammad-ali-sheikh001](https://www.linkedin.com/in/muhammad-ali-sheikh001/)
- **Email:** [muhammad9000ali@gmail.com](mailto:muhammad9000ali@gmail.com)

---

## 📄 License

This repository is open-source and available under the [MIT License](LICENSE).
