// ===============================
// HAMBURGER MENU (SAFE)
// ===============================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("active"));
  });
}

// ===============================
// THEME TOGGLE (WORKING)
// ===============================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const themeIcon = themeToggle.querySelector("i");

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "dark");
    }
  });
}

// ===============================
// DOCK NAV ACTIVE LINK
// ===============================
const dockLinks = document.querySelectorAll(".dock-link");

dockLinks.forEach(link => {
  link.addEventListener("click", () => {
    dockLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ===============================
// SCROLL ANIMATION (SECTIONS)
// ===============================
const sections = document.querySelectorAll(
  "#about, #skills, #education, #projects"
);

if (sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(section => {
    section.classList.add("fade-in");
    sectionObserver.observe(section);
  });
}

// ===============================
// PROJECT CARDS TRANSITION
// ===============================
const projectCards = document.querySelectorAll(".projects");

if (projectCards.length > 0) {
  const projectObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  projectCards.forEach(card => projectObserver.observe(card));
}
