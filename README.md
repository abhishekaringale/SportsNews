# 📰 SportsNews

A responsive, animated sports news portal built with **React (Vite)**, **TailwindCSS**, and **Framer Motion**.  
It showcases a **hero section, categories grid, trending news, recent news + club rankings, sports articles, and newsletter subscription** — styled for production-ready performance.

---

## 🔗 Live Demo

Check out the live app here: [SportsNews](https://sports-news-8m22.onrender.com)

## 🚀 Features

- **Responsive UI** → mobile-first, fluid breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`).
- **Animations** → smooth entry + hover animations using [Framer Motion](https://www.framer.com/motion/).
- **Optimized Images** → `loading="lazy"`, aspect ratios, and optional `.webp` conversion for performance.
- **Sticky Navbar** with smooth scrolling navigation.
- **Newsletter Subscription** UI with icons + pagination.
- **Recent News & Club Ranking** with animated table row reveal.
- **Sports Articles** card grid with hover + motion effects.

---

## 📦 Tech Stack

-  **Vite** — build tool for blazing fast dev & prod.
-  **React 18** — component-based UI.
-  **TailwindCSS** — utility-first responsive styling.
-  **Framer Motion** — production-grade animations.
-  **Lucide Icons** — modern SVG icons.

---

## 🛠️ Setup Instructions

### 1. Clone Repo

```bash
git clone https://github.com/abhishekaringale/SportsNews.git
cd SportsNews
```

### 2. Install Dependencies
npm install

### 3. Run Locally
npm run dev


🧩 Implementation Notes
1.Smooth Scroll:
html {
  scroll-behavior: smooth;
}
-Each section has id and scroll-mt-[height] to offset sticky navbar.

2.Lazy Loading: All <img /> use loading="lazy".
-For production, considered converting heavy .png/.jpg → .webp.

3.Animations:
-staggerChildren for sequential row/card reveal.
-fromLeft, fromRight, fadeUp, scaleIn variants reused across components.
-Hover effects: scale, shadow, and transition.

👨‍💻 Author
Abhishek Aringale