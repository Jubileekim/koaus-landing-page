document.documentElement.classList.add("js");

const products = window.KOAUS_PRODUCTS || [];
const STORAGE_KEY = "koaus-saved-picks";
const params = new URLSearchParams(window.location.search);
const validCategories = [...new Set(products.map((product) => product.category))];
const requestedCategory = params.get("category");
let activeCategory = validCategories.includes(requestedCategory) ? requestedCategory : "All";
let query = params.get("q")?.trim() || "";
let sort = "featured";
let savedOnly = false;

const grid = document.querySelector("#shop-grid");
const searchInput = document.querySelector("#catalog-search");
const categoryWrap = document.querySelector("#catalog-categories");
const sortSelect = document.querySelector("#catalog-sort");
const count = document.querySelector("#catalog-count");
const title = document.querySelector("#catalog-title");
const savedButtons = [document.querySelector("#saved-only"), document.querySelector("#saved-only-secondary")];

function loadSaved() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

let saved = loadSaved().filter((id) => products.some((product) => product.id === id));

function persistSaved() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch {
    // The interface still works for this visit when storage is unavailable.
  }
}

function updateUrl() {
  const next = new URLSearchParams();
  if (activeCategory !== "All") next.set("category", activeCategory);
  if (query) next.set("q", query);
  const suffix = next.toString();
  history.replaceState(null, "", suffix ? `shop.html?${suffix}` : "shop.html");
}

function renderCategories() {
  categoryWrap.innerHTML = ["All", ...validCategories]
    .map(
      (category) => `
        <button class="catalog-chip${activeCategory === category ? " is-active" : ""}" type="button"
          data-category="${category}" aria-pressed="${activeCategory === category}">
          ${category}
        </button>`
    )
    .join("");
}

function filteredProducts() {
  const normalized = query.toLowerCase();
  let matches = products.filter((product) => {
    const categoryMatch = activeCategory === "All" || product.category === activeCategory;
    const searchMatch = `${product.name} ${product.originalName} ${product.maker} ${product.category} ${product.tag}`
      .toLowerCase()
      .includes(normalized);
    const savedMatch = !savedOnly || saved.includes(product.id);
    return categoryMatch && searchMatch && savedMatch;
  });

  if (sort === "price-low") matches = [...matches].sort((a, b) => a.price - b.price);
  if (sort === "price-high") matches = [...matches].sort((a, b) => b.price - a.price);
  if (sort === "name") matches = [...matches].sort((a, b) => a.name.localeCompare(b.name));
  return matches;
}

function cardMarkup(product) {
  const isSaved = saved.includes(product.id);
  const detailUrl = `product.html?id=${encodeURIComponent(product.id)}`;
  return `
    <article class="store-card" data-product-id="${product.id}">
      <div class="store-image">
        <span class="status-tag" data-status="${product.status}">${product.status}</span>
        <button class="heart-button${isSaved ? " saved" : ""}" type="button"
          aria-label="${isSaved ? "Remove" : "Save"} ${product.name}" aria-pressed="${isSaved}">
          ${isSaved ? "♥" : "♡"}
        </button>
        <a class="product-detail-trigger" href="${detailUrl}" aria-label="View ${product.name}">
          <img class="store-product-image" src="${product.image}" alt="${product.name}" width="640" height="640" loading="lazy" />
        </a>
      </div>
      <div class="store-info">
        <div class="product-meta"><span>${product.category}</span><span>${product.tag}</span></div>
        <h3>${product.name}</h3>
        <p class="maker">${product.maker}</p>
        <p class="product-description">${product.description}</p>
        <div class="card-bottom">
          <span class="price">$${product.price.toFixed(2)}<small class="original-price">₩${product.originalPrice.toLocaleString("en-US")}</small></span>
          <a class="source-link" href="${product.sourceUrl}" target="_blank" rel="noreferrer">Original ↗</a>
        </div>
        <div class="card-actions">
          <a class="details-button" href="${detailUrl}">View product →</a>
        </div>
      </div>
    </article>`;
}

function render() {
  const matches = filteredProducts();
  title.textContent = savedOnly ? "Saved picks" : activeCategory === "All" ? "All picks" : activeCategory;
  count.textContent = `${matches.length} ${matches.length === 1 ? "item" : "items"}`;
  grid.innerHTML = matches.length
    ? matches.map(cardMarkup).join("")
    : `<div class="catalog-empty"><strong>No picks found.</strong><span>Try another category or search term.</span></div>`;
  document.querySelector("#saved-count").textContent = saved.length;
  savedButtons.forEach((button) => {
    button.classList.toggle("is-active", savedOnly);
    button.setAttribute("aria-pressed", String(savedOnly));
  });
  renderCategories();
  updateUrl();
}

grid.addEventListener("click", (event) => {
  const heart = event.target.closest(".heart-button");
  if (!heart) return;
  const id = heart.closest(".store-card").dataset.productId;
  saved = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id];
  persistSaved();
  render();
});

categoryWrap.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-category]");
  if (!chip) return;
  activeCategory = chip.dataset.category;
  render();
});

searchInput.value = query;
searchInput.addEventListener("input", () => {
  query = searchInput.value.trim();
  render();
});

sortSelect.addEventListener("change", () => {
  sort = sortSelect.value;
  render();
});

savedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    savedOnly = !savedOnly;
    render();
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#store-mobile-menu");

menuToggle.addEventListener("click", () => {
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Close menu" : "Open menu");
});

mobileMenu.addEventListener("click", (event) => {
  if (!event.target.matches("a")) return;
  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 900) return;
  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
persistSaved();
render();
