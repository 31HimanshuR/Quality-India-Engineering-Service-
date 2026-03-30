// Mobile toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Dropdown toggle
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("show");
});

// Close dropdown outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.classList.remove("show");
  }
});

// =========================
// SMART LOADER CONTROL
// =========================

// Detect page coming from another page
const isInternalNavigation = document.referrer.includes(window.location.origin);

// If coming from internal page → hide loader instantly
if (isInternalNavigation) {
  window.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  });
}

// Normal load (first open / refresh)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  if (!isInternalNavigation) {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 500);
  }
});

// =========================
// SCROLL ANIMATION
// =========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

// Apply animation
document.querySelectorAll(
  ".animate, .animate-left, .animate-right, .animate-zoom, .service-card"
).forEach(el => observer.observe(el));


// =========================
// ABOUT PAGE ANIMATION
// =========================

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }
//   });
// }, {
//   threshold: 0.2
// });

// // Elements to animate
// document.querySelectorAll(
//   ".who-text, .who-image, .mv-card, .why-text, .why-image, .why-item"
// ).forEach(el => observer.observe(el));