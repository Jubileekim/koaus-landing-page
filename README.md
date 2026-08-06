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
2. **Problem → Solution** — customer, content, and commerce uncertainty mapped to Creator · UGC · Commerce actions
3. **How It Works** — interactive Diagnose → Match → Launch → Measure timeline
4. **Results & Metrics** — content, audience, commerce, and decision dashboard
5. **Pricing** — Starter / Validation / Commerce packages
6. **Rate Card & Add-ons** — per-creator guide rates and optional rights
7. **First Launch Event** — founding-pilot promotion
8. **U.S. Launch Inquiry** — package, budget, and validation-goal form

## Included interactions

- Korean/English language switching with persistence
- Responsive desktop, tablet, and mobile layouts
- Mobile navigation
- Fixed right-side section rail with active-section state
- Clickable and keyboard-operable How It Works steps
- Intersection Observer reveal animations
- UGC playback control outside the viewport and reduced-motion support
- Package comparison, creator-rate, and add-on tabs
- Package buttons that preselect the inquiry form and scroll to contact
- Required-field, email, and consent validation
- Frontend MVP inquiry storage with `localStorage`
- Export Voucher information page
- Separate koaus shop, product, and about pages

## Pricing disclaimer

The package prices, creator rates, discount, duration, and sample performance figures are **MVP assumptions for the assignment**.

- VAT is excluded.
- Product cost, Korea-to-U.S. shipping, duties, and paid-media spend are not included.
- Final quotations may vary by creator size, category, production difficulty, and usage rights.
- Sample dashboard figures are explicitly presented as interface demonstration data, not verified campaign performance.

### Launch Korean brands in the U.S. with creators, content, and commerce.

[English](README.md) | [한국어](README.ko.md)

**A U.S. market-entry studio for Korean brands, connecting creator collaboration, UGC production, localized content, and commerce execution.**

koaus launch studio is built for Korean brands that want to enter the U.S. market but need more than translation or one-off marketing. The studio connects brands with overseas creators, develops market-ready content, and turns early audience response into practical launch decisions.

> **From Korean brand potential to real U.S. market signals.**
>
> We help brands test, learn, and launch through creators, content, and commerce.

---

## What is koaus launch studio?

koaus launch studio is a brand-facing collaboration and market-entry platform for Korean companies preparing to expand into the United States.

The service is designed around a connected launch flow:

- identify the brand's strongest U.S. positioning,
- find relevant creators and build collaboration briefs,
- produce English UGC and reusable marketing assets,
- prepare Amazon and commerce-facing content,
- and evaluate real market response before scaling.

Rather than treating creator marketing, content production, and distribution as separate tasks, koaus organizes them into one launch system.

---

## Who it is for

- Korean beauty, lifestyle, stationery, wellness, food, and consumer-product brands exploring the U.S. market
- Early-stage brands that need market validation before committing to large inventory or advertising budgets
- Established Korean brands that need English UGC, creator partnerships, and localized commerce assets
- Brands considering Amazon, DTC, retail distribution, or Export Voucher-supported overseas expansion

---

## Core value

| Brand challenge | koaus approach |
|---|---|
| Unclear U.S. positioning | Define target audience, message, and launch angle |
| Difficulty finding relevant overseas creators | Source and organize creator collaboration candidates |
| Lack of English-first content | Produce UGC, short-form video, briefs, and product storytelling |
| Disconnected marketing and sales execution | Connect creator response with Amazon and commerce assets |
| High risk before a full launch | Test response first, then decide whether to refine, scale, or stop |

---

## Service scope

### 1. U.S. launch strategy

- Brand and product diagnosis
- U.S. audience and competitor review
- Positioning, messaging, and campaign direction
- Launch priorities and execution roadmap

### 2. Creator collaboration

- U.S. creator research and shortlist development
- Product-to-creator matching
- English outreach and collaboration briefs
- Seeding, schedules, deliverables, and communication support

### 3. UGC and localized content

- English short-form UGC planning
- Product demonstrations and review-style content
- Reusable assets for social media, product pages, and ads
- English copy and market-specific product storytelling

### 4. Amazon and commerce launch

- Amazon listing direction and English content structure
- Product-page image and video planning
- Creator content connected to commerce assets
- Initial market-response and launch-readiness review

### 5. Export Voucher support

- Review of possible service alignment with Export Voucher categories
- Consultation based on the brand's current selection status and needs
- Preparation of creator, content, and U.S. launch execution scope

> koaus does not claim official Export Voucher service-provider status unless registration and eligible scope are separately confirmed. Program eligibility, subsidy rates, and available services must be checked against the current official notice.

---

## Collaboration process

```text
1. BRAND INQUIRY
Product, goals, current market status, and budget
        ↓
2. LAUNCH DIAGNOSIS
Audience, positioning, competitors, and priority channels
        ↓
3. CAMPAIGN DESIGN
Creator profile, content direction, deliverables, and timeline
        ↓
4. EXECUTION
Creator outreach, seeding, UGC production, and commerce assets
        ↓
5. VALIDATION
Review response, content performance, and next launch decision
```

---

No build process or package installation is required.

```bash
python3 -m http.server 5500
```

Open:

```text
http://127.0.0.1:5500/
```
## Website experience

The current website prototype includes:

- Korean and English language switching
- UGC video-mosaic hero section
- Brand-facing service and process presentation
- U.S. launch inquiry form
- Export Voucher inquiry type and information page
- Responsive desktop and mobile layouts
- Navigation to the separate consumer-facing `koaus shop`
- Local browser storage for prototype inquiry submissions

---

## koaus ecosystem

### koaus launch studio

A B2B service for Korean brands entering the U.S. through creators, localized content, and commerce execution.

### koaus shop

A consumer-facing storefront for overseas shoppers discovering Korean lifestyle products. It also gives partner brands a visual example of how their products could appear in a global shopping environment.

The two products serve different users but support the same market-entry system:

```text
KOREAN BRAND
        ↓
KOAUS LAUNCH STUDIO
Strategy → Creators → UGC → Commerce preparation
        ↓
KOAUS SHOP / U.S. CHANNELS
Consumer discovery → Response → Sales validation
```

---

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
├── css/
│   └── koahouse-v2.css
├── js/
│   └── koahouse.js
├── videos/
│   └── hero/
├── README.md
└── README.ko.md
```

---

## Run locally

No package installation or build process is required.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## MVP notes

This repository currently represents a front-end service prototype.

- Inquiry submissions are stored in the visitor's browser and are not yet connected to a production database or email system.
- Creator network size, campaign results, and brand case studies should not be presented as verified performance until real projects are completed.
- Demo UGC and media assets must have appropriate usage rights before public or commercial deployment.
- Export Voucher eligibility and provider status must be confirmed through the official program and current notices.
- Service scope, pricing, deliverables, and usage rights should be defined separately for each brand collaboration.

---

### Built for Korean brands ready to test, prove, and launch in the U.S.
