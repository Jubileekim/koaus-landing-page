document.documentElement.classList.add("js");

const products = window.KOAUS_PRODUCTS || [];
const productId = new URLSearchParams(window.location.search).get("id");
const product = products.find((item) => item.id === productId);
const STORAGE_KEY = "koaus-saved-picks";
const INTEREST_KEY = "koaus-preorder-interest";

const ugcByCategory = {
  "Desk Goods": {
    video: "videos/ugc-desk-reset.mp4",
    poster: "images/product-desk-organizer.jpg",
    credit: "Desk reset · Ron Lach on Pexels",
    url: "https://www.pexels.com/video/a-man-tidying-up-his-desk-10567192/",
  },
  Stationery: {
    video: "videos/ugc-journaling.mp4",
    poster: "images/product-diary.jpg",
    credit: "Journaling · Max Vakhtbovych on Pexels",
    url: "https://www.pexels.com/video/person-writing-a-diary-6771504/",
  },
  Fashion: {
    video: "videos/ugc-fashion-bag.mp4",
    poster: "images/product-breeze-tote.jpg",
    credit: "Packing daily essentials · Felicity Tai on Pexels",
    url: "https://www.pexels.com/video/a-woman-putting-stuffs-inside-a-bag-7952197/",
  },
  Lifestyle: {
    video: "videos/ugc-kitchen-organizing.mp4",
    poster: "images/product-stone-plate.jpg",
    credit: "Kitchen organizing · Ron Lach on Pexels",
    url: "https://www.pexels.com/video/a-man-organizing-a-kitchen-counter-10568461/",
  },
};

function loadArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key)) || [];
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function saveArray(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // The current UI state remains available when browser storage is unavailable.
  }
}

let saved = loadArray(STORAGE_KEY).filter((id) => products.some((item) => item.id === id));
let interested = loadArray(INTEREST_KEY).filter((id) => products.some((item) => item.id === id));

function relatedCard(item) {
  return `
    <article class="store-card">
      <div class="store-image">
        <span class="status-tag" data-status="${item.status}">${item.status}</span>
        <a class="product-detail-trigger" href="product.html?id=${encodeURIComponent(item.id)}" aria-label="View ${item.name}">
          <img class="store-product-image" src="${item.image}" alt="${item.name}" width="640" height="640" loading="lazy" />
        </a>
      </div>
      <div class="store-info">
        <div class="product-meta"><span>${item.category}</span></div>
        <h3>${item.name}</h3>
        <p class="maker">${item.maker}</p>
        <div class="card-bottom"><span class="price">$${item.price.toFixed(2)}</span></div>
        <div class="card-actions"><a class="details-button" href="product.html?id=${encodeURIComponent(item.id)}">View product →</a></div>
      </div>
    </article>`;
}

function updateButtons() {
  const saveButton = document.querySelector("#product-save");
  const interestButton = document.querySelector("#product-interest");
  const isSaved = saved.includes(product.id);
  const isInterested = interested.includes(product.id);
  saveButton.textContent = isSaved ? "Saved to your picks ♥" : "Save this pick ♡";
  saveButton.classList.toggle("saved", isSaved);
  saveButton.setAttribute("aria-pressed", String(isSaved));
  interestButton.textContent = isInterested ? "Interest registered ✓" : "Register pre-order interest";
  interestButton.classList.toggle("is-registered", isInterested);
  interestButton.setAttribute("aria-pressed", String(isInterested));
  document.querySelector("#saved-count").textContent = saved.length;
}

function renderProduct() {
  if (!product) {
    document.querySelector("#product-page").hidden = true;
    document.querySelector("#product-not-found").hidden = false;
    document.title = "Product not found — koaus";
    return;
  }

  document.title = `${product.name} — koaus`;
  document.querySelector('meta[name="description"]').content = product.description;
  document.querySelector("#breadcrumb-category").textContent = product.category;
  document.querySelector("#breadcrumb-category").href = `shop.html?category=${encodeURIComponent(product.category)}`;
  document.querySelector("#breadcrumb-name").textContent = product.name;
  document.querySelector("#product-image").src = product.image;
  document.querySelector("#product-image").alt = product.name;
  document.querySelector("#product-status").textContent = product.status;
  document.querySelector("#product-status").dataset.status = product.status;
  document.querySelector("#product-category").textContent = `${product.category} · ${product.tag}`;
  document.querySelector("#product-title").textContent = product.name;
  document.querySelector("#product-maker").textContent = product.maker;
  document.querySelector("#product-description").textContent = product.description;
  document.querySelector("#product-price").textContent = `$${product.price.toFixed(2)}`;
  document.querySelector("#product-original-price").textContent = `Original ₩${product.originalPrice.toLocaleString("en-US")}`;
  document.querySelector("#product-stage").textContent = product.status;
  document.querySelector("#product-source-name").textContent = product.sourceName;
  document.querySelector("#product-original-name").textContent = product.originalName;
  document.querySelector("#product-source").href = product.sourceUrl;
  document.querySelector("#story-curation").textContent = product.description;

  const fallbackUgc = ugcByCategory["Desk Goods"];
  const ugc = ugcByCategory[product.category] || ugcByCategory.Lifestyle || fallbackUgc;
  const video = document.querySelector("#product-ugc-video");
  video.src = ugc.video;
  video.poster = ugc.poster;
  document.querySelector("#product-ugc-credit").textContent = `${ugc.credit} ↗`;
  document.querySelector("#product-ugc-credit").href = ugc.url;

  const related = products
    .filter((item) => item.id !== product.id)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 3);
  document.querySelector("#related-grid").innerHTML = related.map(relatedCard).join("");
  updateButtons();
}

document.querySelector("#product-save").addEventListener("click", () => {
  const wasSaved = saved.includes(product.id);
  saved = wasSaved ? saved.filter((id) => id !== product.id) : [...saved, product.id];
  saveArray(STORAGE_KEY, saved);
  updateButtons();
  document.querySelector("#product-feedback").textContent = wasSaved
    ? "Removed from your saved picks."
    : "Saved on this device. You can find it from the Shop page.";
});

document.querySelector("#product-interest").addEventListener("click", () => {
  if (!interested.includes(product.id)) interested = [...interested, product.id];
  saveArray(INTEREST_KEY, interested);
  updateButtons();
  document.querySelector("#product-feedback").textContent =
    "Pre-order interest registered on this device. No payment has been taken.";
});

document.querySelector("#product-video-sound").addEventListener("click", (event) => {
  const video = document.querySelector("#product-ugc-video");
  video.muted = !video.muted;
  event.currentTarget.textContent = video.muted ? "Sound off" : "Sound on";
  event.currentTarget.setAttribute("aria-pressed", String(!video.muted));
  event.currentTarget.setAttribute("aria-label", video.muted ? "Turn sound on" : "Turn sound off");
  if (video.paused) video.play().catch(() => {});
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
renderProduct();
