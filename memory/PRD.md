# Cafe Leo — Website PRD

## Original Problem Statement
Build a frontend-only marketing website for **Cafe Leo**, a women-owned neighbourhood cafe in BTM 2nd Stage, Bengaluru — open till midnight, rated 4.8★ by 287+ reviewers on Google. Warm, cozy aesthetic (burnt orange / cream / gold). Featuring Hero, About, Menu, Specials, Gallery, Testimonials, Visit, Footer.

## User Personas
- **Local regulars** — looking for hours, phone, menu, address
- **First-time visitors** in BTM/Koramangala — checking the vibe, reviews, menu
- **Late-night seekers** — drawn by the "open till midnight" promise
- **Delivery customers** — Swiggy/Zomato shortcuts

## Core Static Requirements
- React + Tailwind + Shadcn UI, frontend-only (no backend)
- Warm palette: burnt orange #C75024, cream #FAF3E7, gold #D4A437, brown #2A1810
- Fonts: Playfair Display (display), Spectral (body), Caveat (script)
- All interactive elements have `data-testid`
- tel:, mapsURL, Swiggy/Zomato links wired up
- Responsive (mobile/tablet/desktop)

## What's Been Implemented (Dec 2025)
- ✅ Sticky header with scroll backdrop, mobile drawer, Women-Owned badge
- ✅ Hero — split layout (cream/orange wash), reviews badge, dual CTAs (call + menu)
- ✅ About — with stat trio, image with quote sticker
- ✅ Menu — 5 categorised tabs (Coffee, Brunch, Mains, Desserts, Late Night) with INR pricing
- ✅ "What Makes Us Special" — 4 cards on dark brown bg with marquee
- ✅ Gallery — 6 editorial-grid cafe images (Unsplash)
- ✅ Testimonials — 4 Google-style review cards
- ✅ Visit — address, phone, hours, Swiggy/Zomato, embedded Google Map iframe
- ✅ Footer — links, contact, "Proudly Women-Owned" mark
- ✅ Reveal-on-scroll animations + grain texture + handline accents

## Backlog / Next Action Items
- **P1**: Replace generic Unsplash images with real cafe photos when available
- **P1**: Wire actual Swiggy/Zomato deep-links (currently search URLs)
- **P2**: Instagram feed embed (real handle needed)
- **P2**: Online table-reservation form (would require backend)
- **P2**: SEO — JSON-LD `LocalBusiness` schema for rich Google results
- **P3**: Multi-language toggle (Kannada/Hindi)

## Tech Notes
- Frontend-only, no backend integration
- Hosted via existing supervisor (port 3000), accessed via REACT_APP_BACKEND_URL preview
- Map uses Google Maps iframe embed (no API key required)
