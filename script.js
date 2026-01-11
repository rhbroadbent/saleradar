// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

if (hamburger && mobileNav) {
  hamburger.addEventListener("click", () => {
    const isOpen = !mobileNav.hasAttribute("hidden");
    if (isOpen) {
      mobileNav.setAttribute("hidden", "");
      hamburger.setAttribute("aria-expanded", "false");
    } else {
      mobileNav.removeAttribute("hidden");
      hamburger.setAttribute("aria-expanded", "true");
    }
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Prevent forms from reloading (demo)
document.querySelectorAll("form").forEach((f) => {
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Demo only — wire this to Beehiiv/Mailchimp later.");
  });
});

// Chip selection (demo)
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("is-selected"));
    chip.classList.add("is-selected");
  });
});

// Category tabs filter (functional demo)
const tabs = document.querySelectorAll(".tab");
const dealCards = document.querySelectorAll(".deal-card");

function setActiveTab(tabEl) {
  tabs.forEach(t => {
    t.classList.remove("is-active");
    t.setAttribute("aria-selected", "false");
  });
  tabEl.classList.add("is-active");
  tabEl.setAttribute("aria-selected", "true");
}

function filterDeals(category) {
  dealCards.forEach(card => {
    const c = card.getAttribute("data-category") || "all";
    const show = (category === "all") || (c === category);
    card.classList.toggle("is-hidden", !show);
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const category = tab.getAttribute("data-category") || "all";
    setActiveTab(tab);
    filterDeals(category);
  });
});