/* ===========================================================================
   Denis Baldakov — portfolio behaviour (vanilla JS, no dependencies)
   =========================================================================== */

// 1) Highlight the current page in the nav ---------------------------------
(function () {
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav .links a").forEach(function (a) {
    var target = a.getAttribute("href");
    if (target === here || (here === "index.html" && target === "index.html")) {
      a.classList.add("active");
    }
  });
})();

// 2) Reveal timeline items on scroll ---------------------------------------
(function () {
  var items = document.querySelectorAll(".tl-item");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach(function (i) { i.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  items.forEach(function (i) { io.observe(i); });
})();

/* 3) FUTURE: animated global map of education / work ------------------------
   The #world-map container in index.html is reserved for this. To build it,
   render an inline SVG world map here and plot markers from the JOURNEY array
   below (lat/lng -> x/y on an equirectangular projection). Kept as data now so
   the map and the timeline stay in sync — just extend this list.
--------------------------------------------------------------------------- */
window.JOURNEY = [
  { year: "2023–2026", label: "BSc AI — King's College London", city: "London, UK",        lat: 51.51, lng: -0.12 },
  { year: "2024",      label: "Group-IB — Anti-Fraud Analyst",   city: "META region",       lat: 25.20, lng: 55.27 },
  { year: "2025",      label: "DS Corporate — AI Integration",   city: "SPIEF, St. Petersburg", lat: 59.93, lng: 30.34 }
];

function initWorldMap() {
  /* placeholder hook — wire an SVG map here later */
}
