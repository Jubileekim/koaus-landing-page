# Discover Korean lifestyle goods

[English](README.md) | [한국어](README.ko.md)

A responsive static storefront and brand-validation experience for curated Korean stationery, desk goods, small gifts, and lifestyle products.

The shared visual, typography, bilingual, responsive, and accessibility standards are documented in [`DESIGN.md`](DESIGN.md).

## Planning

### Core value

- **Problem:** Global buyers struggle to discover small Korean lifestyle brands, while Korean makers have little evidence of U.S. demand before investing in inventory and logistics.
- **Solution:** koaus curates promising products and lets global buyers save and vote before a full launch.
- **Expected effect:** Buyers discover products earlier; brands validate product appeal, price sensitivity, and content angles with lower risk.

### Target users

1. U.S. and English-speaking women aged 20–35 interested in K-culture, journaling, desk setups, and small gifts.
2. Independent Korean lifestyle brands that want to test the U.S. market before committing to a full launch.

### Core message and CTA

- Message: **Discover Korean lifestyle goods before everyone else.**
- Buyer CTA: **Join the Launch List**
- Brand CTA: **Request a Product Check**

### Wireframe

```text
HOME
Hero → Categories → Problem/Solution/Effect → Shop preview
→ Real-life video routines → Lookbook → Brand Values → Final CTA
                 ↓
SHOP → FILTER / SEARCH / SORT → PRODUCT DETAIL
                 ↓
ABOUT / HOW IT WORKS
Problem → Product Picks → 3-Step Process → For Brands
→ Launch Fit Checker → Journal → Final CTA
```

## Run locally

No build step or package installation is required.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Project structure

```text
.
├── index.html
├── about.html
├── shop.html
├── product.html
├── css/
│   ├── style.css
│   ├── about.css
│   └── store.css
├── js/
│   ├── catalog.js
│   ├── i18n.js
│   ├── main.js
│   ├── about.js
│   ├── shop.js
│   └── product.js
├── images/
│   ├── koaus-hero-collection.jpg
│   ├── product-*.jpg
│   └── README.md
├── videos/
│   └── ugc-*.mp4
└── README.md
```

## Included interactions

- Editorial homepage with a three-product shop preview
- Dedicated shop catalog with URL-based category filters, live search, sorting, saved-only view, and responsive layouts
- Dedicated product detail URLs with related picks, source transparency, saving, and pre-order-interest feedback
- 29CM- and Ohouse-referenced sample products with original KRW and converted USD prices
- Muted, looping, inline autoplay video routines with optional sound controls
- Category-relevant real-life footage on product pages
- Site-wide English/Korean language toggle persisted with `localStorage`
- Korean translations for static pages, dynamically rendered product cards, form feedback, and product-check results
- Saved products persisted with `localStorage`
- Prototype launch-list and brand-check submissions persisted with `localStorage`
- Saved-picks drawer
- In-card voting feedback
- Accessible launch-list modal
- Complete product-check request modal
- Separate `about.html` detail page with the original story, process, brand content, and Launch Fit calculator
- Keyboard focus management and Escape-to-close behavior
- Intersection Observer reveal animations with reduced-motion support

## Sample product data

The featured products are educational MVP references selected from 29CM and Ohouse product listings on July 27, 2026.

- Conversion reference: approximately **₩1,461 = $1**, derived from the ECB EUR/KRW and EUR/USD reference rates published July 24, 2026.
- USD values are simple rounded conversions of the listed KRW prices.
- Shipping, duties, payment fees, and launch markup are not included.
- Product names, photographs, and trademarks belong to their respective brands and sellers.
- Each card links to its original 29CM or Ohouse listing. These references are not presented as current koaus inventory or authorized resale listings.

## Static deployment

This folder can be deployed directly to Vercel as a static site:

1. Import the repository or upload the project.
2. Leave the framework preset as **Other**.
3. Do not set a build command.
4. Use the project root as the output directory.

The forms and pre-order interest tools are frontend MVP interactions stored in the visitor's browser. They do not submit to a backend yet.

The current real-life clips are Pexels stock footage used as permission-clear MVP stand-ins and linked to their creators on the page. They are not presented as koaus customer submissions. Replace them with customer-created UGC only after obtaining contributor consent and the necessary usage rights.
