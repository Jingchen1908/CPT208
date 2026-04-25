const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const REQUIREMENT_ITEMS = [
  {
    pill: "Requirement 1",
    title: "Topic Bridge",
    subtitle: "Lightweight conversation starters",
    intro:
      "The system should lower the pressure of beginning a conversation and create a natural opening point for both generations.",
    points: [
      {
        label: "Natural opening",
        text: "The system should provide short, low-pressure prompts to help family members start conversations naturally."
      },
      {
        label: "Warm and playful tone",
        text: "Prompts should include a sense of randomness, fun, or warmth to encourage engagement."
      },
      {
        label: "Two-way interaction",
        text: "Both sides should be able to answer, respond, and extend the topic into a back-and-forth exchange."
      }
    ]
  },
  {
    pill: "Requirement 2",
    title: "Emotion Sharing / Mood Board",
    subtitle: "Low-barrier emotional expression",
    intro:
      "Emotional communication should be quick, visible, and easy to respond to, even when users have limited time or are not comfortable with long messages.",
    points: [
      {
        label: "Quick expression",
        text: "Users should be able to express their daily mood quickly through emojis, colors, or short text."
      },
      {
        label: "Visible trends",
        text: "The system should visualize mood changes over time to help family members better understand each other's emotional state."
      },
      {
        label: "Companion responses",
        text: "Family members should be able to respond with short messages, stickers, or reactions to create a sense of care and companionship."
      }
    ]
  },
  {
    pill: "Requirement 3",
    title: "Shared Memory Map / Story Album",
    subtitle: "Playful co-creation of memories",
    intro:
      "The system should transform family memory-making into a collaborative and enjoyable experience rather than a static archive.",
    points: [
      {
        label: "Playful memory building",
        text: "The system should make uploading, adding, and organizing memories feel like playful collage-making or story co-creation."
      },
      {
        label: "Collaborative contribution",
        text: "Family members should be able to add photos, voice notes, time, or stories to enrich shared memories together."
      },
      {
        label: "Visual revisiting",
        text: "Memories should be presented through visual forms such as timelines, maps, or albums to make revisiting more enjoyable."
      }
    ]
  }
];

const EVIDENCE_ITEMS = [
  {
    src: "image/evidence-1.jpg",
    alt: "Family members sitting together on a sofa during contextual observation",
    caption: "Context observation with family members"
  },
  {
    src: "image/evidence-2.jpg",
    alt: "Interview between a student researcher and an adult participant",
    caption: "One-to-one interview session"
  },
  {
    src: "image/evidence-3.jpg",
    alt: "Student researcher taking notes while interviewing a participant",
    caption: "Research notes and participant feedback"
  },
  {
    src: "image/evidence-4.jpg",
    alt: "Group members discussing research notes around a table",
    caption: "Group synthesis and discussion"
  },
  {
    src: "image/evidence-5.jpg",
    alt: "Group members working together on laptops and notes",
    caption: "Collaborative portfolio preparation"
  }
];

const USER_TEST_ITEMS = [1, 2, 3].map((index) => ({
  title: `User Test ${index}`,
  body: "Add participant profile, task, key observation, and design implication."
}));

const WALKTHROUGH_DATA = {
  topic: [
    {
      image: "image/T.jpg",
      alt: "Prototype opening screen",
      title: "Prototype opening",
      description:
        "The walkthrough begins with the shared opening screen before moving into the Topic Bridge interaction flow."
    },
    {
      image: "image/A1.jpg",
      alt: "Topic Bridge scenario selection screen",
      title: "Scene selection",
      description:
        "Users begin by choosing a familiar daily-life scene, such as mealtime, watching videos, walking outdoors, travelling, cooking, or resting at home."
    },
    {
      image: "image/A2.jpg",
      alt: "Topic Bridge topic list under Mealtime Together",
      title: "Topic list",
      description:
        "After selecting a scene, users see related topic cards. Each card shows a short theme, a description, and the number of guided questions."
    },
    {
      image: "image/A3.jpg",
      alt: "Topic Bridge detail screen with opening questions",
      title: "Guided questions",
      description:
        "The topic detail page explains why the topic matters and provides opening questions that help both generations continue the conversation."
    }
  ],
  mood: [
    {
      image: "image/T.jpg",
      alt: "Prototype opening screen",
      title: "Prototype opening",
      description:
        "The walkthrough begins with the shared opening screen before moving into the Mood Board emotional check-in flow."
    },
    {
      image: "image/B1.jpg",
      alt: "Mood Board mood selection screen",
      title: "Mood check-in",
      description:
        "Users select an emoji-based mood and can add a short optional note before sharing their emotional state with family members."
    },
    {
      image: "image/B2.jpg",
      alt: "Mood Board shared confirmation screen",
      title: "Shared confirmation",
      description:
        "After sharing, the system confirms the mood update and lets users return to the board, update their mood, view history, or generate a report."
    }
  ],
  journal: [
    {
      image: "image/T.jpg",
      alt: "Prototype opening screen",
      title: "Prototype opening",
      description:
        "The walkthrough begins with the shared opening screen before moving into the Family Journal summary view."
    },
    {
      image: "image/C.jpg",
      alt: "Family Journal report screen",
      title: "Family interaction summary",
      description:
        "Family Journal visualises shared interaction history through topics explored, questions asked, moods shared, active days, and an activity timeline."
    }
  ]
};

const REVEAL_SELECTOR = [
  ".section-heading",
  ".card",
  ".gap-heading",
  ".gap-card",
  ".requirement-card",
  ".quote-strip",
  ".photo-frame",
  ".journey-figure",
  ".evidence-board",
  ".board-photo",
  ".link-card",
  ".placeholder",
  ".sketch-slot",
  ".comparison",
  ".contribution-table",
  ".architecture-node",
  ".walkthrough-card",
  ".implementation-card"
].join(", ");

const REVEAL_STAGGERS = [
  [".gap-grid .gap-card", 90],
  [".requirements-grid .requirement-card", 100],
  [".grid .card", 85],
  [".persona-gallery .photo-frame", 130],
  [".sketch-grid .sketch-slot", 70],
  [".evidence-board .board-photo", 120],
  [".architecture-board .architecture-node", 85],
  [".walkthrough-grid .walkthrough-card", 100]
];

const renderList = (items, renderItem) => items.map(renderItem).join("");

const renderRequirementPoints = (points) => {
  return renderList(
    points,
    ({ label, text }) => `<li><strong>${label}</strong> ${text}</li>`
  );
};

const renderDynamicCollections = () => {
  const requirementsGrid = $("#requirements-grid");
  const evidenceBoard = $("#evidence-board");
  const sketchGrid = $("#sketch-grid");
  const userTestsGrid = $("#user-tests-grid");

  if (requirementsGrid) {
    requirementsGrid.innerHTML = renderList(
      REQUIREMENT_ITEMS,
      ({ pill, title, subtitle, intro, points }) => `
        <article class="requirement-card">
          <span class="pill">${pill}</span>
          <h3>${title}</h3>
          <h4>${subtitle}</h4>
          <p class="requirement-intro">${intro}</p>
          <ul class="requirement-points">${renderRequirementPoints(points)}</ul>
        </article>
      `
    );
  }

  if (evidenceBoard) {
    evidenceBoard.innerHTML = renderList(
      EVIDENCE_ITEMS,
      ({ src, alt, caption }) => `
        <figure class="board-photo">
          <img src="${src}" alt="${alt}" />
          <figcaption>${caption}</figcaption>
        </figure>
      `
    );
  }

  if (sketchGrid) {
    sketchGrid.innerHTML = renderList(
      Array.from({ length: 8 }, (_, index) => `Sketch ${index + 1}`),
      (label) => `<div class="sketch-slot">${label}</div>`
    );
  }

  if (userTestsGrid) {
    userTestsGrid.innerHTML = renderList(
      USER_TEST_ITEMS,
      ({ title, body }) => `
        <article class="card">
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `
    );
  }
};

renderDynamicCollections();

const backTopButton = $(".back-top");
const hero = $(".hero");
const heroParallaxTargets = hero ? $$("[data-parallax]", hero) : [];
const navLinks = $$(".section-nav a");
const sections = $$(".portfolio-section[id]");
const revealTargets = $$(REVEAL_SELECTOR);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const visibleSections = new Map();
let scrollFrame = null;

document.body.classList.add(prefersReducedMotion ? "reduced-motion" : "js-motion");

const setRevealDelay = (selector, step) => {
  $$(selector).forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${index * step}ms`);
  });
};

const revealAllTargets = () => {
  revealTargets.forEach((element) => {
    element.classList.add("is-revealed");
  });
};

const setActiveNavLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "true");
      return;
    }

    link.removeAttribute("aria-current");
  });
};

const syncActiveSection = () => {
  if (!sections.length) {
    return;
  }

  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
    setActiveNavLink(sections[sections.length - 1].id);
    return;
  }

  if (visibleSections.size) {
    const [activeId] = [...visibleSections.entries()].sort((left, right) => right[1] - left[1])[0];
    setActiveNavLink(activeId);
    return;
  }

  const fallbackSection = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.24;
  });

  if (fallbackSection) {
    setActiveNavLink(fallbackSection.id);
  }
};

const updateBackTopButton = () => {
  if (backTopButton) {
    backTopButton.classList.toggle("is-visible", window.scrollY > 360);
  }
};

const setHeroItemDelay = (element, delay) => {
  element.setAttribute("data-hero-item", "");
  element.style.setProperty("--hero-delay", `${delay}ms`);
};

const updateWalkthrough = (card, index) => {
  const key = card.dataset.carousel;
  const slides = WALKTHROUGH_DATA[key];

  if (!slides || !slides.length) {
    return;
  }

  const safeIndex = (index + slides.length) % slides.length;
  const slide = slides[safeIndex];

  card.dataset.index = String(safeIndex);
  $(".walkthrough-image", card).src = slide.image;
  $(".walkthrough-image", card).alt = slide.alt;
  $(".walkthrough-title", card).textContent = slide.title;
  $(".walkthrough-description", card).textContent = slide.description;

  $$(".walkthrough-dot", card).forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === safeIndex);
  });
};

const setupWalkthroughs = () => {
  $$(".walkthrough-card").forEach((card) => {
    const key = card.dataset.carousel;
    const slides = WALKTHROUGH_DATA[key];
    const dotsContainer = $(".walkthrough-dots", card);

    if (!slides || !dotsContainer) {
      return;
    }

    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "walkthrough-dot";
      dot.setAttribute("aria-label", `Go to screen ${index + 1}`);
      dot.addEventListener("click", () => updateWalkthrough(card, index));
      dotsContainer.appendChild(dot);
    });

    $('[data-action="prev"]', card)?.addEventListener("click", () => {
      updateWalkthrough(card, Number(card.dataset.index || 0) - 1);
    });

    $('[data-action="next"]', card)?.addEventListener("click", () => {
      updateWalkthrough(card, Number(card.dataset.index || 0) + 1);
    });

    updateWalkthrough(card, 0);
  });
};

const setupRevealAnimation = () => {
  revealTargets.forEach((element) => {
    element.classList.add("reveal-on-scroll");
  });

  REVEAL_STAGGERS.forEach(([selector, step]) => {
    setRevealDelay(selector, step);
  });

  if (prefersReducedMotion || typeof IntersectionObserver !== "function") {
    revealAllTargets();
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.3,
      rootMargin: "0px 0px 6% 0px"
    }
  );

  revealTargets.forEach((element) => {
    revealObserver.observe(element);
  });
};

const setupHeroAnimation = () => {
  if (!hero) {
    return;
  }

  [
    [[$(".eyebrow", hero), $("h1", hero), $(".hero-lead", hero)].filter(Boolean), 0, 140],
    [$$(".feature-motif, .hero-meta li", hero), 360, 95],
    [$$(".collage-piece", hero), 780, 140]
  ].forEach(([elements, startDelay, step]) => {
    elements.forEach((element, index) => {
      setHeroItemDelay(element, startDelay + index * step);
    });
  });

  if (prefersReducedMotion) {
    hero.classList.add("is-animated");
    return;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      hero.classList.add("is-animated");
    });
  });
};

const setupSectionObserver = () => {
  if (!sections.length) {
    return;
  }

  if (typeof IntersectionObserver !== "function") {
    setActiveNavLink(sections[0].id);
    return;
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio);
          return;
        }

        visibleSections.delete(entry.target.id);
      });

      syncActiveSection();
    },
    {
      threshold: [0.2, 0.35, 0.55, 0.75],
      rootMargin: "-18% 0px -46% 0px"
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
};

const updateScrollEffects = () => {
  updateBackTopButton();
  syncActiveSection();

  if (!prefersReducedMotion && hero) {
    const heroRect = hero.getBoundingClientRect();
    const depth = Math.max(-14, Math.min(18, heroRect.top * -0.08));
    hero.style.setProperty("--hero-depth", `${depth}px`);

    heroParallaxTargets.forEach((element) => {
      const speed = Number(element.dataset.parallax || 0);
      const offset = Math.max(-22, Math.min(24, heroRect.top * -speed));
      element.style.setProperty("--parallax-y", `${offset}px`);
    });
  }

  scrollFrame = null;
};

const requestScrollEffects = () => {
  if (scrollFrame !== null) {
    return;
  }

  scrollFrame = window.requestAnimationFrame(updateScrollEffects);
};

setupRevealAnimation();
setupHeroAnimation();
setupSectionObserver();
setupWalkthroughs();

if (backTopButton) {
  backTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

window.addEventListener("scroll", requestScrollEffects, { passive: true });
window.addEventListener("resize", requestScrollEffects);

updateScrollEffects();
