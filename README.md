# Cardamom House — Menu Page

A public-facing menu page for a fictional Lisbon brunch café.  
Built as the Frontend Trial Task for **Kwill**.

**Live demo:** (deploy to Vercel after pushing)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demo states

Switch states via URL query param:

| URL | Behaviour |
|-----|-----------|
| `/` or `/?state=open` | Tuesday 11:30 — café is open, special available |
| `/?state=closed` | Monday — café closed, friendly banner shown |
| `/?state=special-sold-out` | Open, but Saffron French Toast is sold out |

A small state switcher is also available in the footer.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **next/image** + free Pexels food photography

## Project structure

```
src/
├── app/
│   ├── globals.css      # Tailwind + theme tokens
│   ├── layout.tsx       # Fonts + metadata
│   └── page.tsx         # Single page composition
├── components/          # Small, focused UI pieces
│   ├── Hero.tsx
│   ├── ClosedBanner.tsx
│   ├── CategoryNav.tsx  # Sticky + scroll-spy
│   ├── TodaySpecial.tsx
│   ├── MenuItemCard.tsx
│   ├── MenuSection.tsx
│   ├── HoursTable.tsx
│   └── Footer.tsx
├── data/menu.ts         # All hard-coded menu data + images
├── lib/utils.ts         # formatPrice, parseState, getOpenStatus
└── types/menu.ts
```

## Design decisions

1. **Warm & human** — Cream background, Playfair Display headings, amber `#B45309` used for accents, special callout, prices and active nav.
2. **Mobile-first** — Sticky category pills, large tap targets, card layout that stacks cleanly.
3. **Images** — Tasteful free-stock food photos from Pexels to make the page feel like a real café menu (not a coding exercise).
4. **Simple code** — No over-engineering. One util file, clear component boundaries, typed props, zero `any`.
5. **Accessibility** — Semantic HTML (`nav`, `section`, `article`), skip link, focus-visible rings, sufficient contrast, keyboard-navigable sticky nav.

## What I would build next

- Dietary filter (V / GF / All)
- Light/dark mode respecting `prefers-color-scheme`
- Subtle entrance animations with CSS only
- Printer-friendly `@media print` layout

## Requirements checklist

- [x] Hero with name, tagline, open/closed status
- [x] Today's special callout (brand colour)
- [x] Sticky category navigation with active highlight
- [x] Menu sections (Brunch, Sandwiches, Drinks, Sides)
- [x] Items with name, description, € price, tags
- [x] Hours table with today emphasised
- [x] Footer (address, phone, Instagram)
- [x] Responsive (mobile / tablet / desktop)
- [x] Accessibility basics
- [x] Three states via `?state=`
