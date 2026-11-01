(() => {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  const navLinks = nav ? Array.from(nav.querySelectorAll("a")) : [];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const closeNav = () => {
    if (!header) return;
    header.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.querySelector(".nav-toggle-label").textContent = "Меню";
    }
  };

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.querySelector(".nav-toggle-label").textContent = isOpen ? "Закрыть" : "Меню";
    });

    navLinks.forEach((link) => link.addEventListener("click", closeNav));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("nav-open")) {
        closeNav();
        navToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (header.classList.contains("nav-open") && !header.contains(event.target)) {
        closeNav();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 880) closeNav();
    });
  }

  let ticking = false;

  const updateChrome = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    const marker = window.scrollY + window.innerHeight * 0.32;
    let activeSection = null;

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top + window.scrollY <= marker) {
        activeSection = section;
      }
    });

    navLinks.forEach((link) => {
      if (activeSection && link.getAttribute("href") === `#${activeSection.id}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateChrome);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateChrome();

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("in"));
  }

  const rotorSvg = document.querySelector(".rotor-svg");
  const motionToggle = document.querySelector("[data-motion-toggle]");
  const motionLabel = document.querySelector("[data-motion-label]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let isPaused = false;

  const setRotorPaused = (paused) => {
    if (!rotorSvg || typeof rotorSvg.pauseAnimations !== "function") return;

    isPaused = paused;
    if (paused) {
      rotorSvg.pauseAnimations();
    } else {
      rotorSvg.unpauseAnimations();
    }

    if (motionToggle && motionLabel) {
      motionToggle.classList.toggle("is-paused", paused);
      motionLabel.textContent = paused ? "Продолжить" : "Пауза";
      motionToggle.setAttribute(
        "aria-label",
        paused ? "Запустить анимацию ротора" : "Приостановить анимацию ротора"
      );
    }
  };

  if (rotorSvg && motionToggle) {
    if (typeof rotorSvg.pauseAnimations !== "function") {
      motionToggle.hidden = true;
    } else {
      motionToggle.addEventListener("click", () => setRotorPaused(!isPaused));

      if (reduceMotion.matches) setRotorPaused(true);

      if (typeof reduceMotion.addEventListener === "function") {
        reduceMotion.addEventListener("change", (event) => {
          if (event.matches) setRotorPaused(true);
        });
      }
    }
  }
})();
