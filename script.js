// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Prevent demo forms from reloading the page
document.querySelectorAll("form").forEach((f) => {
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Demo only — wire this to an email service later.");
  });
});

// Mobile menu (reliable)
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

function closeMobileNav() {
  if (!hamburger || !mobileNav) return;
  mobileNav.setAttribute("hidden", "");
  hamburger.setAttribute("aria-expanded", "false");
}

function toggleMobileNav() {
  if (!hamburger || !mobileNav) return;
  const open = !mobileNav.hasAttribute("hidden");
  if (open) closeMobileNav();
  else {
    mobileNav.removeAttribute("hidden");
    hamburger.setAttribute("aria-expanded", "true");
  }
}

if (hamburger && mobileNav) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMobileNav();
  });

  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMobileNav());
  });

  document.addEventListener("click", (e) => {
    const open = !mobileNav.hasAttribute("hidden");
    if (!open) return;
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) closeMobileNav();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileNav();
  });
}

// Tabs filter (Today’s top deals)
const tabs = document.querySelectorAll(".tab");
const deals = document.querySelectorAll(".deal");

function setActive(tab) {
  tabs.forEach(t => t.classList.remove("is-active"));
  tab.classList.add("is-active");
}

function filterDeals(cat) {
  deals.forEach(d => {
    const c = d.getAttribute("data-category");
    const show = (cat === "all") || (c === cat);
    d.style.display = show ? "block" : "none";
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const cat = tab.getAttribute("data-category");
    setActive(tab);
    filterDeals(cat);
  });
});