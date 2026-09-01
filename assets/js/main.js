(function () {
  "use strict";

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  var sections = Array.prototype.slice.call(document.querySelectorAll(".section, .final-cta"));
  document.documentElement.classList.add("reveal-ready");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -7% 0px", threshold: 0.05 });

  sections.forEach(function (section) {
    observer.observe(section);
  });
}());
