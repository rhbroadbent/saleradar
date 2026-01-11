// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

function closeMobileNav() {
  if (!mobileNav || !hamburger) return;
  mobileNav.setAttribute("hidden", "");
  hamburger.setAttribute("aria-expanded", "false");
}

function openMobileNav() {
  if (!mobileNav || !hamburger) return;
  mobileNav.removeAttribute("hidden");
  hamburger.setAttribute("aria-expanded", "true");
}

function isNavOpen() {
  return mobileNav && !mobileNav.hasAttribute("hidden");
}

if (hamburger && mobileNav) {
  // Toggle open/close
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isNavOpen()) closeMobileNav();
    else openMobileNav();
  });

  // Close when clicking any menu link
  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMobileNav());
  });

  // Close when clicking anywhere outside
  document.addEventListener("click", (e) => {
    if (!isNavOpen()) return;
    const clickedInsideMenu = mobileNav.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);
    if (!clickedInsideMenu && !clickedHamburger) closeMobileNav();
  });

  // Close on Escape (desktop)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileNav();
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
// Close mobile nav after clicking a menu link
document.querySelectorAll("#mobileNav a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileNav.setAttribute("hidden", "");
    hamburger.setAttribute("aria-expanded", "false");
  })
  
