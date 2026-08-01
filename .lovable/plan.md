## Enosx Technologies — Marketing Website

A vibrant, multi-page promotional site built on the brand identity from your uploaded document (Aero-Glass glassmorphism, neon cyan/purple/crimson on deep dark backgrounds), with all three products, contacts, and founder story.

### Design direction
- Deep dark base (#050505–#0a0a0a) with vivid neon accents: cyan #00F2FF, purple #7000FF, crimson #DC143C, silver #E0E0E0.
- Glassmorphic cards (semi-transparent, backdrop blur), animated gradient/aurora glows, subtle motion on scroll and hover.
- Typography: bold geometric display font for headings (Eurostile-like via Google Fonts, e.g. Michroma/Chakra Petch), Inter for body.
- Colorful and promoting: gradient CTAs, product cards each with its own accent hue, stat/impact strip.

### Pages
1. `/` — Home: hero ("Redefining the boundary between Human and OS. Speed is UX."), primary CTAs to products + WhatsApp, product showcase (3 cards), capability highlights, founder teaser, contact band.
2. `/products` — Detail sections for each product with live links and feature lists:
   - ENOSX AI — enosxai.vercel.app (multimodal AI assistant, God Mode, voice, memory, web intelligence, Imagine Mode, GitHub integration)
   - Enosx Tech Store — enosxtech.vercel.app (e-commerce)
   - ExLover Coach — exlover.vercel.app (loving/relationship coaching)
3. `/about` — Company story: founded 2024 by Enosh Yeswa, mission, philosophy, AI personality modes (Professional / Creative / Mentor / Casual) and operational tiers (EX, EX Pro, Smart, Fast, Balanced, Task, Creative).
4. `/contact` — WhatsApp CTA (+254 798 303 978 → wa.me/254798303978), Instagram @enosx_tech and @engima_cx, plus a simple mailto/contact form UI.

Shared sticky glass navbar + footer with all links, on every page. Floating WhatsApp button site-wide.

### Technical notes
- TanStack Start file routes; each route gets its own SEO `head()` (unique title, description, og/twitter tags), semantic HTML, single H1, alt text.
- Brand tokens added to `src/styles.css` as semantic design tokens (no hardcoded colors in components); Google Fonts loaded via `<link>` in `__root.tsx`.
- Generated hero/product imagery + an "EX" logo mark saved under `src/assets`.
- All external links open in a new tab with `rel="noopener noreferrer"`.
- No backend needed — contact is WhatsApp/Instagram/mailto. (Say the word if you'd later want a stored contact-form inbox.)

### GitHub repo
I can't create the repo myself. After the build, open the **+ menu → GitHub → Connect project**, authorize, and create the repository named `enosxtechnologies` — two-way sync then keeps Lovable and GitHub in step. I'll remind you with the exact steps when the site is done.
