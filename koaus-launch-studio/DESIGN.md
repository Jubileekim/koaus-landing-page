# koaus Design Guide

This document is the shared visual and interaction standard for the koaus homepage, shop, product detail, and brand-facing experience.

## 1. Brand direction

koaus is a bilingual curation shop connecting two audiences:

- Global consumers discovering thoughtful Korean lifestyle goods.
- Independent Korean brands validating demand before a wider U.S. launch.

The visual tone should feel:

- Curated, calm, warm, and editorial.
- Trustworthy enough for brand partners.
- Friendly and shoppable for consumers.
- Considered rather than luxurious or overly corporate.

The design should balance an editorial display typeface with highly legible commerce UI.

## 2. Core product message

### Problem

Global consumers struggle to discover small Korean lifestyle brands, while Korean brands have limited evidence of overseas demand before investing in inventory and logistics.

### Solution

koaus curates promising products and lets early buyers discover, save, vote, and register interest before launch.

### Expected effect

Consumers get earlier access to well-designed products, and brands receive a clearer demand signal with less cost and risk.

## 3. Typography

### Typeface roles

| Role | English | Korean | Usage |
| --- | --- | --- | --- |
| Display | Playfair Display | Pretendard, then Noto Sans KR | Page H1 and major section H2 |
| Body/UI | DM Sans | Pretendard, then Noto Sans KR | H3, cards, body, buttons, forms, navigation and prices |
| Brand mark | Existing koaus wordmark face | Same brand mark | Logo only |

Font fallbacks:

```css
--font-display: "Playfair Display", Georgia, serif;
--font-body: "DM Sans", system-ui, sans-serif;
--font-body-ko: Pretendard, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
```

### Hierarchy

| Style | Desktop | Mobile | Line height | Weight |
| --- | --- | --- | --- | --- |
| Page H1 | 64–96px | 44–58px | 0.95–1.05 | 600–700 |
| Section H2 | 42–64px | 32–44px | 1.0–1.12 | 600–700 |
| Card H3 | 18–24px | 18–22px | 1.2–1.3 | 600–700 |
| Body large | 16–18px | 16px | 1.55–1.7 | 400–500 |
| Body small | 13–15px | 13–14px | 1.45–1.6 | 400–500 |
| Label/Eyebrow | 11–13px | 11–12px | 1.2 | 700–800 |

### Rules

- Use serif only for page H1 and major section H2.
- Use sans-serif for every H3, card title, description, label, button, price, form, and navigation item.
- Do not mix a sans-serif base and a serif phrase within one headline.
- English display emphasis may use the italic cut of the same serif family.
- Korean uses one sans-serif family across display, headings, body copy, and UI.
- Korean H1 and H2 are approximately 10–12% smaller than their English counterparts to balance their greater visual density.
- Korean display emphasis uses color or weight, not synthetic italics.
- Keep Korean body copy in `word-break: keep-all`.
- Use negative tracking sparingly: approximately `-0.04em` for display and `-0.025em` for Korean sans-serif copy.
- Avoid all-caps Korean. Eyebrows can remain uppercase only in English.

## 4. Color system

### Core colors

| Token | Value | Purpose |
| --- | --- | --- |
| Ivory | `#f8f5ee` | Main page background |
| Paper | `#fffdf8` | Cards, modals and elevated surfaces |
| Ink | `#20231f` | Primary text and dark CTA |
| Forest | `#354f43` | Brand emphasis and selected states |
| Sage | `#90a27e` | Secondary brand color and badges |
| Pale sage | `#dfe5d8` | Soft category and metadata backgrounds |
| Muted | `#6c706a` | Descriptions and secondary information |
| Line | `#d9d6ce` | Borders and dividers |
| Gold | `#d3aa47` | Small highlights only |
| Blue | `#a9bdd6` | Supporting category accent |
| Blush | `#efd8d1` | Supporting gift/category accent |

### Color rules

- Keep large surfaces ivory, paper, or a very pale tinted neutral.
- Forest is the primary interaction color.
- Sage, blue, blush, and gold support categories and small accents; they should not compete with the main CTA.
- Use dark text on light cards and verify WCAG AA contrast.
- Do not communicate status with color alone; include a text label.

## 5. Layout and spacing

- Consumer-facing shell maximum: `1360px`.
- Brand/detail container maximum: approximately `1180px`.
- Desktop page gutters: `36px` minimum.
- Mobile page gutters: `14–20px`.
- Use an 8px spacing rhythm where practical.
- Typical section padding: `72–100px` desktop and `56–72px` mobile.
- Use Grid for catalog and major two-column layouts.
- Use Flex for navigation, button groups, filters, and compact metadata.
- Avoid more than two competing alignment axes within one section.

## 6. Shape, borders and elevation

- Small controls and tags: full pill radius.
- Product cards: `15–18px`.
- Editorial media and large panels: `24–28px`.
- Default border: `1px solid #d9d6ce`.
- Shadows should be soft and low contrast.
- Hover elevation should stay subtle: approximately `translateY(-2px)` to `-3px`.
- Use one dominant radius family per component; do not mix sharp and highly rounded corners inside one card.

## 7. Components

### Navigation

- Keep the same height, logo size, menu spacing, icons, and CTA across all pages.
- Current desktop header height: approximately `84–85px`.
- Active navigation uses a thin underline.
- Mobile navigation uses a menu toggle and preserves the language control.

### Buttons

- Primary: dark ink or forest fill with white text.
- Secondary: transparent or paper fill with a one-pixel outline.
- Minimum interactive height: `40px`; prefer `44–52px` for primary actions.
- Button language should describe the outcome: “View product,” “Register interest,” or “Join the launch.”
- Always provide visible hover and keyboard focus states.

### Product cards

- Product image is the dominant element.
- Show status, category, product name, maker, price, and one primary detail action.
- Save actions persist in local storage for the frontend prototype.
- Original Korean source links must remain clearly identified.
- Sample USD pricing must include a conversion disclaimer.

### Forms and modals

- Every input needs a visible label.
- Show actionable validation messages near the form.
- Trap focus inside modals and restore focus when closed.
- `Escape` closes an active modal or drawer.
- Prototype-only storage behavior must be disclosed.

## 8. Imagery and UGC

- Favor warm, softly lit, lived-in product photography.
- Category images should show a concrete representative product, not an abstract placeholder.
- Avoid repeated products in the same visible product row.
- UGC video behavior: `autoplay`, `muted`, `loop`, and `playsinline`.
- Provide an accessible sound toggle.
- Stock footage is an MVP stand-in and must include creator/source credit.
- Customer UGC can replace it only after contributor consent and usage rights are confirmed.
- Images require meaningful `alt` text unless they are purely decorative.

## 9. Bilingual behavior

- The global `EN / KR` control appears in the header.
- Language choice persists with `localStorage`.
- Page navigation and dynamically rendered product cards must retain the selected language.
- English display typography uses Playfair Display.
- Korean display and UI typography use Pretendard with Noto Sans KR fallback.
- English UI/body uses DM Sans across every page.
- Korean UI/body uses Pretendard with Noto Sans KR fallback.
- Korean brand copy should use a clear business tone; consumer copy can remain warm and conversational.
- Do not translate brand names, email addresses, prices, or creator names unnecessarily.

## 10. Responsive behavior

### Breakpoints

- Large desktop: above `1180px`.
- Tablet/small desktop: `761–1180px`.
- Mobile: `480–760px`.
- Small mobile: below `480px`.

### Rules

- Desktop grids reduce progressively rather than shrinking cards below readable widths.
- Category and UGC rows may become horizontal snap carousels on mobile.
- Product detail changes from two columns to one column.
- Header desktop navigation collapses to the mobile menu.
- No page may create horizontal document overflow at 390px.
- Preserve a logical reading and keyboard focus order when layouts stack.

## 11. Motion and interaction

- Motion should explain state or add gentle polish.
- Default transition range: `180–300ms`.
- Image hover zoom may use a slower `500–700ms` transition.
- Scroll reveals should run once and remain subtle.
- Respect `prefers-reduced-motion`.
- Autoplay video must remain muted until the user explicitly enables sound.

## 12. Accessibility

- Use semantic landmarks: `header`, `nav`, `main`, `section`, and `footer`.
- Maintain one H1 per page and a logical heading hierarchy.
- Include a skip link.
- All controls must be keyboard reachable.
- Use visible focus rings.
- Keep touch targets at least `40×40px`, preferably `44×44px`.
- Provide `aria-live` regions for save, vote, form, and filtering feedback.
- Set the document language to `en` or `ko` when the language changes.

## 13. Content and prototype disclosures

- Never imply that referenced 29CM or Ohouse items are current koaus inventory.
- Keep original seller links and ownership attribution.
- Clearly label sample USD prices and excluded shipping, duties, and markup.
- “Pre-order interest” must not imply that payment has been taken.
- Frontend-only form, authentication, saved-state, and interest behavior must be described as prototype behavior where relevant.

## 14. Implementation sources

- Shared consumer styles: `css/style.css`
- Brand/detail styles: `css/about.css`
- Shop and product-detail additions: `css/store.css`
- Shared catalog data: `js/catalog.js`
- Shared language behavior: `js/i18n.js`

When adding a new component, reuse these tokens and role assignments before introducing a new font, color, radius, spacing value, or interaction pattern.
