# AGENTS.md

## Cursor Cloud specific instructions

This repo is a **static front-end prototype** (koaus shop / launch studio): plain HTML, CSS, and vanilla JS. There is **no package manager, no build step, no backend, no database, and no tests**. All state persists in the browser via `localStorage` only.

### Running the site
- Serve the repo root with any static file server. Documented command (see `README.md`): `python3 -m http.server 8000`, then open `http://localhost:8000`.
- `vercel.json` enables `cleanUrls`, so on Vercel `/shop` maps to `shop.html`. The local `python3` server does **not** rewrite clean URLs — locally use the explicit `.html` paths (e.g. `http://localhost:8000/shop.html`, `product.html?id=<id>`).
- Product data is a static array in `js/catalog.js` (`window.KOAUS_PRODUCTS`); there is no API to run.

### Lint / test / build
- None exist. There is nothing to lint, no test runner, and no build/compile step. Verification is manual: open the pages in a browser and exercise flows (shop catalog, save-a-pick heart button, search/category filters, product detail, language toggle).

### Gotchas
- Saved picks, votes, waitlist, and preorder state live in `localStorage` (keys prefixed `koaus-`). When manually testing "save" flows, clear state first with `localStorage.clear()` in DevTools, otherwise a previously saved item makes it look like the click had no effect.
- `README.md` is partially stale: it references files that do not exist in the repo (`export-voucher.html`, `css/koahouse-v2.css`, `js/koahouse.js`). The actual pages are `index.html`, `shop.html`, `product.html`, `about.html`.
