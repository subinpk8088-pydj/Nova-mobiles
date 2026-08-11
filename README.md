# Nova Mobiles — Smartphones & Accessories

A 3-page mobile phone shop built with React, React Router, Tailwind CSS, Framer Motion, and a Context + localStorage cart.

## Pages (3, by request)

- **Home** (`/`) — hero with a signature "phone orbit" animation (floating spec-callout badges around a tilting phone mockup), value strip, bestsellers, testimonial, CTA
- **Shop** (`/shop`) — category filter (Flagship / Mid-Range / Budget / Accessories), price slider, sort, product grid
- **Product Detail** (`/product/:slug`) — image gallery, color + storage selection, quantity, add to cart, full specifications table, related products

There's no separate Cart or Contact page by design — the cart is a slide-out drawer reachable from any page, and contact/visit info lives in the footer, keeping the site to exactly 3 routed pages while still covering the full shopping flow.

## Signature element

`PhoneOrbit.jsx` — a tilting phone mockup with floating spec badges (display, camera, battery, chipset) orbiting around it, used in the hero.

## Design

Clean tech-store palette — cloud white, deep navy, blueprint blue, graphite, teal accent. Plus Jakarta Sans (display) + IBM Plex Sans (body).

## Catalog (9 products across 4 categories, in `src/data.js`)

**Flagship** — Nova X1 Pro, Nova X1
**Mid-Range** — Nova Air 5G, Nova Air
**Budget** — Nova Spark, Nova Spark Lite
**Accessories** — Nova Buds Pro, Nova FastCharge 65W, Nova Armor Case

Each phone includes category, price + compare-at price, 2–3 colors, storage options, a full specs table (display, chipset, RAM, camera, battery, warranty), and a description. Edit or add products directly in `src/data.js` — the `slug` field determines the product detail URL.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Before deploying

- Replace `WHATSAPP_NUMBER` in `src/data.js` with the real number (country code, no `+` or spaces).
- Swap the Unsplash placeholder images in `src/data.js` for real product photography.
- Update phone/address in `src/components/Footer.jsx`.
- Adjust the free-delivery threshold (currently ₹5,000) if needed.
- Cart currently checks out via WhatsApp; swap in a payment gateway (Razorpay/Stripe) if you need in-site checkout.
