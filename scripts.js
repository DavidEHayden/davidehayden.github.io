const root = document.documentElement;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const toast = document.querySelector(".toast");
const filterButtons = document.querySelectorAll(".filter-button");
const publications = document.querySelectorAll(".publication");
const header = document.querySelector(".site-header");

document.querySelector("#current-year").textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && preferredDark)) {
  root.dataset.theme = "dark";
}

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

themeToggle?.addEventListener("click", () => {
  const isDark = root.dataset.theme === "dark";

  if (isDark) {
    delete root.dataset.theme;
    localStorage.setItem("theme", "light");
  } else {
    root.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    publications.forEach((publication) => {
      publication.hidden =
        filter !== "all" && publication.dataset.type !== filter;
    });
  });
});

document.querySelectorAll(".copy-citation").forEach((button) => {
  button.addEventListener("click", async () => {
    const citation = button.dataset.citation;

    try {
      await navigator.clipboard.writeText(citation);
      toast.classList.add("visible");
      window.setTimeout(() => toast.classList.remove("visible"), 1700);
    } catch {
      window.prompt("Copy this citation:", citation);
    }
  });
});

window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 8),
  { passive: true }
);
