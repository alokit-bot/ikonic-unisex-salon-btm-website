# Ikonic Unisex Salon — Landing Page PRD

## Original Problem Statement
Build a stunning, modern single-page React website for Ikonic Unisex Salon, a 4.7-star unisex beauty salon in BTM Layout, Bengaluru. Premium feel with deep charcoal (#1a1a2e) + rich gold (#c9a96e) + soft cream (#f8f4ef) palette. Frontend-only, tel: links for calls, Google Maps for directions. INR pricing.

## Architecture
- React 19 + React Router 7 (single route `/`)
- Tailwind CSS + custom CSS variables for brand palette
- Playfair Display (headings) + Lato (body) via Google Fonts
- lucide-react icons only (no emoji icons)
- All sections built as composable components in `/app/frontend/src/components/salon/`
- Salon data centralised in `/app/frontend/src/data/salonData.js`

## Sections Implemented
1. **Navbar** — sticky, blurred pill on scroll, mobile drawer, tap-to-call CTA
2. **Hero** — bold name, gold-shimmer "Unisex" italic, rating badge, stat card overlay, floating 7+ years badge
3. **About** — story narrative, image collage, 3 pillars (stylists/products/pricing)
4. **Highlights** — 4 stat cards: 4.7 rating / 242 clients / 7+ years / 10 PM
5. **Services** — interactive category tabs (5 categories), image + price list, INR pricing throughout
6. **Gallery Teaser** — bento-grid of unsplash images + gold accent panel
7. **Testimonials** — 3 realistic Bengaluru reviews (Priya/Arjun/Sneha)
8. **Contact** — phone, address, hours, embedded Google Map iframe, Call + Directions CTAs
9. **Footer** — brand, contact details, quick links
10. **Sticky Call Button** — mobile-only floating gold phone CTA

## CTAs
- `tel:+919945080196` — used in Navbar, Hero, Services, Contact, Footer, Sticky button
- `https://maps.app.goo.gl/YQq7J7iNbhALMG7L6` — Hero, Gallery, Contact

## What's Implemented (2026-12)
- Full single-page experience
- Mobile-first responsive (375px → 1920px)
- Smooth scroll navigation
- Lucide icons, Playfair + Lato fonts
- Frontend-only (no backend touched)
- Unsplash placeholder imagery for hero/about/services/gallery

## Backlog (Future Enhancements)
- P1: WhatsApp booking integration
- P1: Real photos from salon (replace unsplash)
- P2: Online appointment booking form
- P2: Service-specific landing pages with deep links
- P2: Multilingual support (Kannada + English)
- P2: Instagram feed embed in Gallery
