const yearElement = document.querySelector(".year");
yearElement.textContent = new Date().getFullYear();

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    // Scroll to other links
    else if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Sticky navigation

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(document.querySelector(".section-hero"));
