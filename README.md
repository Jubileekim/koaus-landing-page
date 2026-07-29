# koaus launch studio

[English](README.md) | [한국어](README.ko.md)

**A responsive B2B landing page that helps Korean brands validate U.S. market potential through creator, UGC, and commerce pilots.**

> Test for an early market signal before committing major inventory and budget.

## Project objective

The experience is designed for emerging Korean brands that need evidence before a larger U.S. launch:

- Which U.S. customers respond to the product?
- Which messages and content formats create attention and trust?
- Can views and interest turn into clicks, coupon use, or purchase signals?
- Should the brand scale, refine, or stop the next investment?

koaus presents creator sourcing, UGC production, and commerce tracking as one connected validation flow rather than separate services.

## Main page structure

1. **UGC video-mosaic hero** — U.S. market-validation message
2. **Problem** — customer, content, and commerce uncertainty
3. **Solution** — Creator · UGC · Commerce modules
4. **How It Works** — Diagnose → Match → Launch → Measure
5. **Results & Metrics** — content, audience, commerce, and decision signals
6. **Pricing** — Starter / Validation / Commerce packages
7. **Rate Card & Add-ons** — per-creator guide rates and optional rights
8. **First Launch Event** — founding-pilot promotion
9. **U.S. Launch Inquiry** — package, budget, and validation-goal form

## Included interactions

- Korean/English language switching with persistence
- Responsive desktop, tablet, and mobile layouts
- Mobile navigation
- Intersection Observer reveal animations
- UGC playback control outside the viewport and reduced-motion support
- Package comparison, creator-rate, and add-on tabs
- Package buttons that preselect the inquiry form and scroll to contact
- Form validation including at least one validation goal
- Frontend MVP inquiry storage with `localStorage`
- Export Voucher information page
- Separate koaus shop, product, and about pages

## Pricing disclaimer

The package prices, creator rates, discount, duration, and sample performance figures are **MVP assumptions for the assignment**.

- VAT is excluded.
- Product cost, Korea-to-U.S. shipping, duties, and paid-media spend are not included.
- Final quotations may vary by creator size, category, production difficulty, and usage rights.
- Sample dashboard figures are explicitly presented as interface demonstration data, not verified campaign performance.

## Run locally

No build process or package installation is required.

```bash
python3 -m http.server 5500
```

Open:

```text
http://127.0.0.1:5500/
```

## Key files

```text
.
├── index.html
├── export-voucher.html
├── about.html
├── shop.html
├── product.html
├── css/
│   ├── koahouse.css
│   ├── koahouse-v2.css
│   ├── koahouse-final.css
│   ├── about.css
│   ├── style.css
│   └── store.css
├── js/
│   ├── koahouse.js
│   ├── koahouse-final.js
│   ├── i18n.js
│   └── ...
├── videos/
│   ├── hero/
│   └── ugc-*.mp4
└── images/
```

## Prototype limitations

- The inquiry form is not connected to a production database or email service; submissions are stored only in the visitor's browser.
- Connect Formspree, Tally, Google Forms, or a backend before public deployment.
- Confirm all image and video usage rights before public or commercial use.
- Final service scope, pricing, usage rights, and performance fees must be agreed separately for real brand campaigns.
