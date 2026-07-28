const products = [
  {
    id: "clam-pocket-pouch",
    name: "Soft Cream Pocket Pouch",
    category: "Carry",
    price: 10,
    tag: "Made in Korea",
    description: "A softly quilted pouch referenced from Clam’s Korean-made everyday carry line.",
    emoji: "👝",
    gradient: "linear-gradient(145deg, #e7eee3, #f4eee2 58%, #c8d4c4)",
  },
  {
    id: "append-pencil-pouch",
    name: "Terry Pencil Pouch",
    category: "Desk Goods",
    price: 9,
    tag: "Desk Setup",
    description: "A water-resistant lined pouch designed to carry a generous set of pens.",
    emoji: "✏️",
    gradient: "linear-gradient(145deg, #d7d6d0, #eee9df 62%, #aaaca4)",
  },
  {
    id: "trolls-2026-diary",
    name: "2026 Thread-bound Diary",
    category: "Stationery",
    price: 12,
    tag: "Seoul Paper",
    description: "A tactile, fountain-pen-friendly diary with a flat-opening thread binding.",
    emoji: "📓",
    gradient: "linear-gradient(145deg, #d8c1a3, #efe5d7 58%, #9aaa9d)",
  },
  {
    id: "lumir-table-lamp",
    name: "Lumir R Steel Table Lamp",
    category: "Lifestyle",
    price: 123,
    tag: "Made in Korea",
    description: "A sculptural Korean-made lamp that turns a working desk into a calmer place.",
    emoji: "💡",
    gradient: "linear-gradient(145deg, #a5b4a9, #e1d6c4 62%, #bea783)",
  },
  {
    id: "metal-mushroom-light",
    name: "Metal Mushroom Mood Light",
    category: "Lifestyle",
    price: 7,
    tag: "Small Space",
    description: "A cordless touch light with adjustable brightness for cozy corners.",
    emoji: "🍄",
    gradient: "linear-gradient(145deg, #ceb18d, #f0dfc5 60%, #b68870)",
  },
  {
    id: "muzik-tiger-mug",
    name: "Chubby Tiger Ceramic Mug",
    category: "Gift Set",
    price: 10,
    tag: "Giftable",
    description: "A cheerful character mug selected for an easy, everyday Korean gift moment.",
    emoji: "☕",
    gradient: "linear-gradient(145deg, #c9b9b1, #eadbd0 55%, #91a994)",
  },
];

const STORAGE_KEY = "koaus-saved-picks";
const productGrid = document.querySelector("#product-grid");
const savedCount = document.querySelector("#saved-count");

function getSavedProducts() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

let savedProducts = getSavedProducts();
const votedProducts = new Set();

function updateSavedCount() {
  savedCount.textContent = `Saved picks: ${savedProducts.length}`;
}

function renderProducts() {
  productGrid.innerHTML = products
    .map((product) => {
      const isSaved = savedProducts.includes(product.id);
      return `
        <article class="product-card" data-product-id="${product.id}">
          <div class="product-image" style="background:${product.gradient}">
            <span class="product-image-tag">${product.tag}</span>
            <span class="product-emoji" role="img" aria-label="${product.name} placeholder">${product.emoji}</span>
          </div>
          <div class="product-body">
            <div class="product-category">
              <span>${product.category}</span>
              <span class="product-price">$${product.price}</span>
            </div>
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-actions">
              <button class="button button--ghost save-button${isSaved ? " saved" : ""}" type="button" aria-pressed="${isSaved}">
                <span aria-hidden="true">${isSaved ? "♥" : "♡"}</span> ${isSaved ? "Saved" : "Save"}
              </button>
              <button class="button vote-button" type="button">
                Vote <span aria-hidden="true">↗</span>
              </button>
            </div>
            <p class="vote-message" aria-live="polite"></p>
          </div>
        </article>`;
    })
    .join("");
  updateSavedCount();
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const card = event.target.closest(".product-card");
  if (!button || !card) return;

  const productId = card.dataset.productId;

  if (button.classList.contains("save-button")) {
    const isSaved = savedProducts.includes(productId);
    savedProducts = isSaved
      ? savedProducts.filter((id) => id !== productId)
      : [...savedProducts, productId];

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedProducts));
    } catch {
      // The interaction still works when browser storage is unavailable.
    }

    button.classList.toggle("saved", !isSaved);
    button.setAttribute("aria-pressed", String(!isSaved));
    button.innerHTML = `<span aria-hidden="true">${isSaved ? "♡" : "♥"}</span> ${isSaved ? "Save" : "Saved"}`;
    updateSavedCount();
  }

  if (button.classList.contains("vote-button") && !votedProducts.has(productId)) {
    votedProducts.add(productId);
    button.classList.add("voted");
    button.textContent = "Voted ✓";
    button.disabled = true;
    card.querySelector(".vote-message").textContent = "Thanks for voting! Your pick helps shape the next launch.";
  }
});

renderProducts();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navLinks.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  navLinks.classList.toggle("is-open", !isOpen);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) closeMenu();
});

const checkerForm = document.querySelector("#checker-form");
const checkerResult = document.querySelector("#checker-result");

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

checkerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(checkerForm);
  const cost = Number(formData.get("cost"));
  const price = Number(formData.get("price"));
  const shipping = Number(formData.get("shipping"));
  const feeRate = Number(formData.get("feeRate"));

  const hasMissingValue = ["cost", "price", "shipping", "feeRate"].some(
    (name) => checkerForm.elements[name].value.trim() === ""
  );

  if (
    hasMissingValue ||
    !Number.isFinite(cost) ||
    !Number.isFinite(price) ||
    !Number.isFinite(shipping) ||
    !Number.isFinite(feeRate) ||
    cost <= 0 ||
    price <= 0 ||
    shipping < 0 ||
    feeRate < 0
  ) {
    checkerResult.className = "checker-result is-error";
    checkerResult.innerHTML =
      "<p>Please enter valid values. Cost and price must be greater than 0; shipping and fee rate must be 0 or more.</p>";
    return;
  }

  const fee = price * (feeRate / 100);
  const profit = price - cost - shipping - fee;
  const marginRate = (profit / price) * 100;
  let score = 0;

  if (price >= 40) score += 20;
  if (marginRate >= 30) score += 25;
  if (shipping <= price * 0.25) score += 20;
  if (formData.get("giftable")) score += 15;
  if (formData.get("contentFriendly")) score += 20;

  let status = "Needs refinement";
  let recommendation = "Rework price, bundle, or shipping structure before testing.";
  if (score >= 80) {
    status = "Strong launch fit";
    recommendation = "Strong launch candidate. This product is ready for a small U.S. demand test.";
  } else if (score >= 60) {
    status = "Worth testing";
    recommendation = "Test with a bundle or content angle. Try improving the offer before full launch.";
  }

  checkerResult.className = "checker-result";
  checkerResult.innerHTML = `
    <div class="result-top">
      <strong>${status}</strong>
      <span class="score-badge" aria-label="Launch Fit Score ${score} out of 100">${score}</span>
    </div>
    <div class="result-metrics">
      <span>Estimated profit<strong>${formatCurrency(profit)}</strong></span>
      <span>Margin rate<strong>${marginRate.toFixed(1)}%</strong></span>
      <span>Marketplace fee<strong>${formatCurrency(fee)}</strong></span>
      <span>Launch Fit Score<strong>${score} / 100</strong></span>
    </div>
    <p>${recommendation}</p>`;
});

let activeModal = null;
let modalTrigger = null;

function getFocusableElements(modal) {
  return [...modal.querySelectorAll('button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])')]
    .filter((element) => !element.disabled && !element.hidden);
}

function openModal(modalId, trigger) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  activeModal = modal;
  modalTrigger = trigger;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => {
    modal.querySelector("input, select, textarea")?.focus();
  });
}

function closeModal() {
  if (!activeModal) return;
  activeModal.hidden = true;
  document.body.classList.remove("modal-open");
  modalTrigger?.focus();
  activeModal = null;
  modalTrigger = null;
}

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-modal]");
  if (openButton) openModal(openButton.dataset.openModal, openButton);
  if (event.target.closest("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (!activeModal) return;
  if (event.key === "Escape") {
    closeModal();
    return;
  }
  if (event.key !== "Tab") return;

  const focusable = getFocusableElements(activeModal);
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
  message.textContent = "You're on the launch list. We'll send you the first koaus picks soon.";
  form.reset();
});

document.querySelector("#product-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  if (!form.checkValidity()) {
    message.textContent = "Please complete each field before sending.";
    return;
  }
  message.textContent = "Thanks. koaus will review your product check request.";
  form.reset();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
