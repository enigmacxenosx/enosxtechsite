# Enosx Technologies — Official Website

![Enosx Technologies](https://img.shields.io/badge/Enosx-Technologies-0ea5e9) ![Build](https://img.shields.io/badge/build-passing-22c55e)

The official corporate website of **Enosx Technologies**, a Kenyan technology company founded in 2024 by [Enosh Yeswa](https://github.com/enigmacxenosx). The site presents the company's products, services, leadership, pricing, and careers.

> **Contact us:** WhatsApp [+254 798 303 978](https://wa.me/254798303978) · Instagram [@enosx_tech](https://instagram.com/enosx_tech) · [@engima_cx](https://instagram.com/engima_cx)

## Live Site

| Item | Details |
| :--- | :--- |
| Production | [enosxtech.vercel.app](https://enosxtech.vercel.app) |
| Stack | React 19, Vite + TanStack Router, TypeScript, Nitro SSR |
| Hosting | Vercel |
| CMS sync | Lovable (push to `main` syncs back) |

## Pages

| Route | Purpose |
| :--- | :--- |
| `/` | Home — hero, products, value proposition |
| `/products` | Product catalog across the Enosx portfolio |
| `/pricing` | Service pricing and plans |
| `/about` | Company story and mission |
| `/leadership` | Leadership team |
| `/careers` | Open positions |
| `/blog` | Company blog |
| `/contact` | Contact form and social links |

## Getting Started

```bash
git clone https://github.com/enigmacxenosx/enosxtechsite.git
cd enosxtechsite
npm install
npm run dev        # local development
npm run build      # production build
```

### Working with Lovable

This project was built with [Lovable](https://lovable.dev). Every change committed to `main` on GitHub syncs back into the Lovable editor, and prompts made in Lovable are committed straight to this repository — so you can continue developing in either environment.

## Project Structure

```text
src/
├── routes/          # TanStack Router page definitions
├── components/      # Shared UI components
├── hooks/           # Custom React hooks
├── integrations/    # External service integrations
├── lib/             # Utilities
└── server.ts        # SSR entry (Nitro)
public/
├── sitemap.xml      # SEO sitemap
└── robots.txt       # Crawler directives
```

## Enosx Portfolio

| Product | URL |
| :--- | :--- |
| ENOSX AI | https://enosxai.vercel.app |
| E-commerce Hub | https://enosxtech-hub.vercel.app |
| Exlover Coaching | https://exlover.vercel.app |
| This website | https://enosxtech.vercel.app |

## License

Proprietary — © 2024–2026 Enosx Technologies. All rights reserved.
