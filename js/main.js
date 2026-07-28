document.documentElement.classList.add("js");

const products = window.KOAUS_PRODUCTS;

const STORAGE_KEY = "koaus-saved-picks";
const INTEREST_STORAGE_KEY = "koaus-preorder-interest";
const LAUNCH_LIST_STORAGE_KEY = "koaus-launch-list";
const BRAND_REQUEST_STORAGE_KEY = "koaus-brand-requests";
const grid = document.querySelector("#product-grid");
const bagCount = document.querySelector("#bag-count");
const feedback = document.querySelector("#product-feedback");
const viewAllButton = document.querySelector("#view-all");
const searchInput = document.querySelector("#site-search");
let visibleLimit = 3;
let activeFilter = "All";
let searchTerm = "";
let activeOverlay = null;
let overlayTrigger = null;
const votedProducts = new Set();

function loadSaved() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

let savedProducts = loadSaved().filter((id) => products.some((product) => product.id === id));
let interestedProducts = loadStoredArray(INTEREST_STORAGE_KEY).filter((id) =>
  products.some((product) => product.id === id)
);
persistSaved();

function loadStoredArray(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key)) || [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistArray(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function persistSaved() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedProducts));
  } catch {
    // Saving remains usable for this visit when browser storage is unavailable.
  }
}

function filteredProducts() {
  return products.filter((product) => {
    const matchesFilter = activeFilter === "All" || product.category === activeFilter;
    const haystack = `${product.name} ${product.originalName} ${product.maker} ${product.category} ${product.tag}`.toLowerCase();
    return matchesFilter && haystack.includes(searchTerm.toLowerCase());
  });
}

function renderProducts() {
  const matches = filteredProducts();
  const shown = matches.slice(0, visibleLimit);

  if (shown.length === 0) {
    grid.innerHTML = '<p class="empty-saved">No picks match this search yet. Try another word or category.</p>';
  } else {
    grid.innerHTML = shown
      .map((product) => {
        const saved = savedProducts.includes(product.id);
        const voted = votedProducts.has(product.id);
        return `
          <article class="store-card" data-product-id="${product.id}">
            <div class="store-image">
              <span class="status-tag" data-status="${product.status}">${product.status}</span>
              <button
                class="heart-button${saved ? " saved" : ""}"
                type="button"
                aria-label="${saved ? "Remove" : "Save"} ${product.name}"
                aria-pressed="${saved}"
              >${saved ? "♥" : "♡"}</button>
              <a class="product-detail-trigger" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View details for ${product.name}">
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
                <a class="source-link" href="${product.sourceUrl}" target="_blank" rel="noreferrer" aria-label="View ${product.originalName} source on ${product.sourceName}">${product.sourceName} ↗</a>
              </div>
              <div class="card-actions">
                <button class="save-button${saved ? " saved" : ""}" type="button" aria-pressed="${saved}">
                  ${saved ? "Saved ♥" : "Save ♡"}
                </button>
                <button class="vote-button${voted ? " voted" : ""}" type="button" ${voted ? "disabled" : ""}>
                  ${voted ? "Voted ✓" : "Vote"}
                </button>
                <a class="details-button" href="product.html?id=${encodeURIComponent(product.id)}">View product →</a>
              </div>
            </div>
          </article>`;
      })
      .join("");
  }

  updateSavedUI();
}

function updateSavedUI() {
  bagCount.textContent = savedProducts.length;
  bagCount.setAttribute("aria-label", `${savedProducts.length} saved picks`);
  renderSavedList();
}

function toggleSaved(productId) {
  const isSaved = savedProducts.includes(productId);
  savedProducts = isSaved
    ? savedProducts.filter((id) => id !== productId)
    : [...savedProducts, productId];
  persistSaved();
  renderProducts();
  const product = products.find((item) => item.id === productId);
  feedback.textContent = isSaved
    ? `${product.name} removed from your saved picks.`
    : `${product.name} saved to your shortlist.`;
}

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".store-card");
  if (!card) return;
  const productId = card.dataset.productId;

  if (event.target.closest(".heart-button") || event.target.closest(".save-button")) {
    toggleSaved(productId);
    return;
  }

  if (event.target.closest(".vote-button") && !votedProducts.has(productId)) {
    votedProducts.add(productId);
    const product = products.find((item) => item.id === productId);
    renderProducts();
    feedback.textContent = `Thanks for voting for ${product.name}. Your vote helps choose the next launch.`;
  }
});

document.querySelector(".filter-row")?.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-filter]");
  if (!chip) return;
  activeFilter = chip.dataset.filter;
  visibleLimit = 6;
  document.querySelectorAll(".filter-chip").forEach((button) => {
    const active = button === chip;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderProducts();
});

document.querySelectorAll("[data-filter-link]").forEach((link) => {
  link.addEventListener("click", () => {
    activeFilter = link.dataset.filterLink;
    visibleLimit = 6;
    document.querySelectorAll(".filter-chip").forEach((button) => {
      const active = button.dataset.filter === activeFilter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderProducts();
  });
});

const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector("#search-panel");

function closeSearch({ restoreFocus = false } = {}) {
  searchPanel.hidden = true;
  searchToggle.setAttribute("aria-expanded", "false");
  if (restoreFocus) searchToggle.focus();
}

searchToggle.addEventListener("click", () => {
  const willOpen = searchPanel.hidden;
  searchPanel.hidden = !willOpen;
  searchToggle.setAttribute("aria-expanded", String(willOpen));
  if (willOpen) searchInput.focus();
});

document.querySelector(".search-close").addEventListener("click", () => closeSearch({ restoreFocus: true }));

searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  const query = searchInput.value.trim();
  window.location.href = query ? `shop.html?q=${encodeURIComponent(query)}` : "shop.html";
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

function closeMenu() {
  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

menuToggle.addEventListener("click", () => {
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Close menu" : "Open menu");
  closeSearch({ restoreFocus: false });
});

mobileMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeMenu();
});

function renderSavedList() {
  const list = document.querySelector("#saved-list");
  if (!list) return;
  const savedItems = savedProducts
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  list.innerHTML = savedItems.length
    ? savedItems
        .map(
          (product) => `
            <div class="saved-item">
              <img class="saved-item-icon" src="${product.image}" alt="" width="55" height="55" />
              <span><strong>${product.name}</strong><small>$${product.price.toFixed(2)}</small></span>
              <button class="remove-saved" type="button" data-remove-saved="${product.id}" aria-label="Remove ${product.name}">×</button>
            </div>`
        )
        .join("")
    : '<p class="empty-saved">Your shortlist is empty.<br />Tap a heart on any product to save it here.</p>';
}

const savedDrawer = document.querySelector("#saved-drawer");
const pageRegions = [
  document.querySelector(".site-header"),
  document.querySelector("main"),
  document.querySelector(".site-footer"),
].filter(Boolean);

function setPageInert(isInert) {
  pageRegions.forEach((region) => {
    region.inert = isInert;
  });
}

function openDrawer(trigger) {
  savedDrawer.hidden = false;
  activeOverlay = savedDrawer;
  overlayTrigger = trigger;
  document.body.classList.add("overlay-open");
  setPageInert(true);
  savedDrawer.querySelector(".drawer-close").focus();
}

function closeOverlay() {
  if (!activeOverlay) return;
  activeOverlay.hidden = true;
  document.body.classList.remove("overlay-open");
  setPageInert(false);
  overlayTrigger?.focus();
  activeOverlay = null;
  overlayTrigger = null;
}

document.querySelector(".bag-button").addEventListener("click", (event) => {
  openDrawer(event.currentTarget);
});

savedDrawer.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-saved]");
  if (removeButton) toggleSaved(removeButton.dataset.removeSaved);
  if (event.target.closest("[data-close-drawer]")) closeOverlay();
});

function focusableElements(container) {
  return [...container.querySelectorAll("button, input, select, textarea, a[href], [tabindex]:not([tabindex='-1'])")].filter(
    (element) => !element.disabled && !element.hidden
  );
}

function openModal(modal, trigger) {
  const returnTarget = !savedDrawer.hidden ? overlayTrigger : trigger;
  if (!savedDrawer.hidden) savedDrawer.hidden = true;
  if (activeOverlay?.classList.contains("modal")) activeOverlay.hidden = true;
  modal.hidden = false;
  activeOverlay = modal;
  overlayTrigger = returnTarget;
  document.body.classList.add("overlay-open");
  setPageInert(true);
  requestAnimationFrame(() => {
    const firstTarget = modal.querySelector("input, select, textarea") || modal.querySelector(".modal-close");
    firstTarget?.focus();
  });
}

document.addEventListener("click", (event) => {
  const detailTrigger = event.target.closest("[data-product-detail]");
  if (detailTrigger) {
    const product = products.find((item) => item.id === detailTrigger.dataset.productDetail);
    const detailModal = document.querySelector("#product-detail-modal");
    if (product && detailModal) {
      populateProductDetail(product);
      openModal(detailModal, detailTrigger);
      return;
    }
  }
  const openButton = event.target.closest("[data-open-modal]");
  if (openButton) {
    closeMenu();
    closeSearch({ restoreFocus: false });
    const modal = document.querySelector(`#${openButton.dataset.openModal}`);
    if (modal) openModal(modal, openButton);
  }
  if (event.target.closest("[data-close-modal]")) closeOverlay();
});

document.addEventListener("keydown", (event) => {
  if (!activeOverlay) return;
  if (event.key === "Escape") {
    closeOverlay();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = focusableElements(activeOverlay);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

document.querySelector("#launch-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  if (!form.checkValidity()) {
    message.textContent = "Please complete your name, email, and favorite category.";
    return;
  }
  const submission = Object.fromEntries(new FormData(form).entries());
  const launchEntries = loadStoredArray(LAUNCH_LIST_STORAGE_KEY);
  const existingEntry = launchEntries.find((entry) => entry.email?.toLowerCase() === submission.email.toLowerCase());
  if (existingEntry) {
    message.textContent = "This email is already saved on this device.";
    return;
  }
  const saved = persistArray(LAUNCH_LIST_STORAGE_KEY, [
    ...launchEntries,
    { ...submission, createdAt: new Date().toISOString() },
  ]);
  message.textContent = saved
    ? "You're on the prototype launch list. Your details are saved on this device."
    : "Your browser blocked local saving. Please try again in a standard browser window.";
  form.reset();
});

document.querySelector("#product-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  if (!form.checkValidity()) {
    message.textContent = "Please complete every field with a valid value.";
    return;
  }
  const submission = Object.fromEntries(new FormData(form).entries());
  const requests = loadStoredArray(BRAND_REQUEST_STORAGE_KEY);
  const saved = persistArray(BRAND_REQUEST_STORAGE_KEY, [
    ...requests,
    { ...submission, createdAt: new Date().toISOString() },
  ]);
  message.textContent = saved
    ? "Product check request saved for this prototype."
    : "Your browser blocked local saving. Please try again in a standard browser window.";
  form.reset();
});

const detailElements = {
  image: document.querySelector("#detail-product-image"),
  status: document.querySelector("#detail-product-status"),
  category: document.querySelector("#detail-product-category"),
  name: document.querySelector("#detail-product-name"),
  originalName: document.querySelector("#detail-original-name"),
  description: document.querySelector("#detail-product-description"),
  maker: document.querySelector("#detail-product-maker"),
  price: document.querySelector("#detail-product-price"),
  stage: document.querySelector("#detail-product-stage"),
  source: document.querySelector("#detail-source-link"),
  interest: document.querySelector("#detail-interest-button"),
  feedback: document.querySelector("#detail-feedback"),
};

function populateProductDetail(product) {
  detailElements.image.src = product.image;
  detailElements.image.alt = product.name;
  detailElements.status.textContent = product.status;
  detailElements.status.dataset.status = product.status;
  detailElements.category.textContent = `${product.category} · ${product.tag}`;
  detailElements.name.textContent = product.name;
  detailElements.originalName.textContent = product.originalName;
  detailElements.description.textContent = product.description;
  detailElements.maker.textContent = product.maker;
  detailElements.price.textContent = `$${product.price.toFixed(2)} · ₩${product.originalPrice.toLocaleString("en-US")}`;
  detailElements.stage.textContent = product.status;
  detailElements.source.href = product.sourceUrl;
  detailElements.source.textContent = `Original on ${product.sourceName} ↗`;
  detailElements.interest.dataset.interestProduct = product.id;
  detailElements.interest.textContent = interestedProducts.includes(product.id)
    ? "Interest registered ✓"
    : "Register pre-order interest";
  detailElements.interest.classList.toggle("is-registered", interestedProducts.includes(product.id));
  detailElements.feedback.textContent = "";
}

detailElements.interest.addEventListener("click", () => {
  const productId = detailElements.interest.dataset.interestProduct;
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  if (!interestedProducts.includes(productId)) {
    interestedProducts = [...interestedProducts, productId];
    persistArray(INTEREST_STORAGE_KEY, interestedProducts);
  }
  detailElements.interest.textContent = "Interest registered ✓";
  detailElements.interest.classList.add("is-registered");
  detailElements.feedback.textContent = `${product.name} was added to your launch-interest list on this device.`;
});

const revealElements = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});

document.querySelectorAll(".video-sound-toggle").forEach((button) => {
  const video = button.closest(".reel-card")?.querySelector("video");
  if (!video) return;
  button.addEventListener("click", () => {
    video.muted = !video.muted;
    button.textContent = video.muted ? "Sound off" : "Sound on";
    button.setAttribute("aria-pressed", String(!video.muted));
    button.setAttribute("aria-label", video.muted ? "Turn sound on" : "Turn sound off");
    if (video.paused) video.play().catch(() => {});
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderProducts();
