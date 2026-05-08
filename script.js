const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const REQUIREMENT_ITEMS = [
  {
    pill: "Requirement 1",
    title: "Topic Bridge🌉",
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
    title: "Emotion Sharing / Mood Board😊",
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
    title: "Shared Memory Map / Story Album🧩",
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
      image: "image/topic-bridge-step-04.png",
      alt: "Topic Bridge detail screen showing why the topic matters, opening questions, and deeper follow-up prompts",
      title: "Question expansion",
      description:
        "After choosing a topic, users can read why it matters, browse light opening questions, and expand into deeper prompts before starting the conversation."
    },
    {
      image: "image/topic-bridge-step-05.png",
      alt: "Topic Bridge conversation screen with AI-assisted message suggestions and family role switching",
      title: "AI-supported conversation",
      description:
        "Once the chat begins, the system uses AI suggestions to keep the exchange going naturally, helping family members continue the conversation with less pressure."
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

const CRAZY_EIGHTS_ITEMS = [
  {
    image: "image/crazy-01-homepage.png",
    alt: "Hand-drawn homepage sketch for EchoNest showing guest mode and user login entry points",
    title: "Homepage entry",
    label: "Draft 01",
    note: "An opening screen that balances quick guest access with a clearer path into family features."
  },
  {
    image: "image/crazy-02-dashboard-guest.png",
    alt: "Hand-drawn guest dashboard sketch showing Topic Bridge, Mood Board, and Journal Map tiles",
    title: "Guest dashboard",
    label: "Draft 02",
    note: "A lightweight dashboard that lets first-time visitors browse the three core functions before signing in."
  },
  {
    image: "image/crazy-03-dashboard-user.png",
    alt: "Hand-drawn signed-in dashboard sketch for EchoNest with account details and feature shortcuts",
    title: "Signed-in dashboard",
    label: "Draft 03",
    note: "A more personalised dashboard that keeps the same feature map while exposing account-specific actions."
  },
  {
    image: "image/crazy-04-topic-bridge.png",
    alt: "Hand-drawn Topic Bridge sketch with prompt suggestions, custom scenarios, and refresh controls",
    title: "Topic Bridge board",
    label: "Draft 04",
    note: "A prompt-selection screen focused on quick conversation starters, reusable themes, and low-pressure refresh actions."
  },
  {
    image: "image/crazy-05-mood-board.png",
    alt: "Hand-drawn Mood Board sketch with emoji mood check-in and family mood updates",
    title: "Mood Board check-in",
    label: "Draft 05",
    note: "An emotional check-in flow that pairs simple emoji responses with visible family mood updates."
  },
  {
    image: "image/crazy-06-journal-map.png",
    alt: "Hand-drawn Journal Map sketch summarising achievements, activity counts, and a timeline",
    title: "Journal Map summary",
    label: "Draft 06",
    note: "A reflective summary view that turns shared interactions into milestones, counts, and a lightweight activity timeline."
  },
  {
    image: "image/crazy-07-topic-chatting.png",
    alt: "Hand-drawn topic chatting sketch showing guided prompts mixed with message replies and annotations",
    title: "Topic chatting flow",
    label: "Draft 07",
    note: "A conversation detail screen that mixes guided prompts with personal replies to keep the dialogue moving naturally."
  },
  {
    image: "image/crazy-08-login.png",
    alt: "Hand-drawn login page sketch with email and password fields for returning users",
    title: "Login page",
    label: "Draft 08",
    note: "A focused sign-in concept for returning users who want quick access to saved topics and advanced functions."
  },
  {
    image: "image/crazy-09-register.png",
    alt: "Hand-drawn registration page sketch with account creation fields and family role selection",
    title: "Register page",
    label: "Draft 09",
    note: "An extended registration concept that introduces role selection so the product can adapt to different family members."
  }
];

const TIMELINE_ITEMS = [
  {
    week: "Week 2",
    title: "Topic Confirmation & Direction Definition",
    points: [
      "The group selected B4 \"Relation between Generations,\" focusing on families who care for one another but struggle to communicate naturally across generations.",
      "The project was framed around gentle, lightweight, and playful interaction rather than simply improving communication efficiency.",
      "The early concept established three core threads: starting topics, sharing emotions, and co-creating memories."
    ]
  },
  {
    week: "Week 3",
    title: "User Research Launch",
    points: [
      "Initial interviews explored real pain points such as lacking shared topics, awkward openings, shallow conversations, and clear differences in expression across age groups.",
      "A questionnaire and preliminary statistics helped validate needs around communication frequency, expression habits, emotional sharing, and memory recording."
    ]
  },
  {
    week: "Week 4",
    title: "Research Synthesis & Gap Identification",
    points: [
      "Two personas, Ethan and Martha, were created to reflect different motivations, pain points, and levels of digital confidence across generations.",
      "A User Journey Map captured the path from wanting to reach out to struggling to start and eventually losing conversational momentum.",
      "Four academic papers and four commercial products were reviewed to clarify the missing link: one system that connects topic initiation, everyday exchange, and shared memory building."
    ]
  },
  {
    week: "Week 5",
    title: "Requirements & Concept Exploration",
    points: [
      "Research insights were distilled into three playful requirements: Topic Bridge, Emotion Sharing / Mood Board, and Shared Memory Map / Story Album.",
      "Multiple rounds of Crazy Eights sketches were produced to explore different information structures and interaction metaphors.",
      "The low-fidelity direction settled on a mobile H5 experience with emotional visuals and a family-album mode of content presentation."
    ]
  },
  {
    week: "Week 6",
    title: "Low-Fi to High-Fi Transition",
    points: [
      "The interface direction was narrowed toward a warm, family-album aesthetic with low-pressure interaction patterns.",
      "Portfolio materials for Motivation & Research, User Requirements, and Ideation & Alternatives were organized in parallel to support the process website."
    ]
  },
  {
    week: "Week 7",
    title: "System Development & Page Implementation",
    points: [
      "The team started building a complete high-fidelity H5 prototype with clickable flows and demonstrable feature paths.",
      "The technical direction centered on a mobile-first Vue 3 + Vite frontend, documented with Vue Router, Axios, and REST API logic for login, topics, mood check-ins, and family journals."
    ]
  },
  {
    week: "Week 8",
    title: "Alpha Prototype & Midpoint Presentation",
    points: [
      "The alpha prototype was able to demonstrate the core journeys for topic guidance, mood sharing, and family journal summaries.",
      "The Week 8 poster and alpha system presentation were prepared alongside the prototype.",
      "Portfolio artifacts such as personas, questionnaire analysis, the user journey map, and evidence of life were continuously integrated."
    ]
  },
  {
    week: "Week 9",
    title: "Testing & Iteration",
    points: [
      "User evaluation focused on whether the functions were understandable, whether the flow felt natural, and whether topic guidance and mood expression truly reduced intergenerational communication pressure.",
      "Based on feedback, both the interface and the portfolio narrative were refined to make the design story and research argument clearer."
    ]
  },
  {
    week: "Week 10",
    title: "Final Delivery & Submission",
    points: [
      "The hosted process portfolio was completed as a web page covering Motivation & Research, User Requirements, Ideation & Alternatives, Technical Implementation, and Evaluation & Reflection.",
      "The high-fidelity H5 demo system was organized and deployed online to present the three core functions through a live product flow.",
      "A video demo and all final course deliverables were submitted, presenting the full human-centered process from topic selection to research, design, implementation, and delivery."
    ]
  }
];

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
  ".timeline-step",
  ".walkthrough-card",
  ".implementation-card",
  ".contribution-member"
].join(", ");

const REVEAL_STAGGERS = [
  [".gap-grid .gap-card", 90],
  [".requirements-grid .requirement-card", 100],
  [".grid .card", 85],
  [".persona-gallery .photo-frame", 130],
  [".sketch-grid .sketch-slot", 70],
  [".evidence-board .board-photo", 120],
  [".timeline-flow .timeline-step", 95],
  [".architecture-board .architecture-node", 85],
  [".walkthrough-grid .walkthrough-card", 100],
  [".contribution-grid .contribution-member", 90]
];

const renderList = (items, renderItem) => items.map(renderItem).join("");

const renderRequirementPoints = (points) => {
  return renderList(
    points,
    ({ label, text }) => `<li><strong>${label}</strong> ${text}</li>`
  );
};

const renderTimelinePoints = (points) => {
  return renderList(points, (point) => `<li>${point}</li>`);
};

const renderDynamicCollections = () => {
  const requirementsGrid = $("#requirements-grid");
  const evidenceBoard = $("#evidence-board");
  const sketchGrid = $("#sketch-grid");
  const timelineGrid = $("#timeline-grid");

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

  if (timelineGrid) {
    timelineGrid.innerHTML = renderList(
      TIMELINE_ITEMS,
      ({ week, title, points }, index) => `
        <section class="timeline-step ${index % 2 === 0 ? "left" : "right"}">
          <div class="timeline-banner">${week}</div>
          <span class="timeline-marker" aria-hidden="true"></span>
          <article class="timeline-panel">
            <h4>${title}</h4>
            <ul class="timeline-points">${renderTimelinePoints(points)}</ul>
          </article>
        </section>
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

const updateCrazyEightsGallery = (gallery, index) => {
  if (!gallery || !CRAZY_EIGHTS_ITEMS.length) {
    return;
  }

  const safeIndex = (index + CRAZY_EIGHTS_ITEMS.length) % CRAZY_EIGHTS_ITEMS.length;
  const item = CRAZY_EIGHTS_ITEMS[safeIndex];

  gallery.dataset.index = String(safeIndex);
  $(".crazy-focus-image", gallery).src = item.image;
  $(".crazy-focus-image", gallery).alt = item.alt;
  $(".crazy-focus-label", gallery).textContent = item.label;
  $(".crazy-focus-title", gallery).textContent = item.title;
  $(".crazy-focus-note", gallery).textContent = item.note;
  $("[data-crazy-count]", gallery).textContent = `${safeIndex + 1} of ${CRAZY_EIGHTS_ITEMS.length}`;

  $$(".walkthrough-dot", gallery).forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === safeIndex);
  });
};

const setupCrazyEightsGallery = () => {
  $$("[data-crazy-gallery]").forEach((gallery) => {
    const dotsContainer = $(".walkthrough-dots", gallery);

    if (!dotsContainer) {
      return;
    }

    dotsContainer.innerHTML = "";

    CRAZY_EIGHTS_ITEMS.forEach((item, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "walkthrough-dot";
      dot.setAttribute("aria-label", `Go to ${item.label}: ${item.title}`);
      dot.addEventListener("click", () => updateCrazyEightsGallery(gallery, index));
      dotsContainer.appendChild(dot);
    });

    $('[data-crazy-action="prev"]', gallery)?.addEventListener("click", () => {
      updateCrazyEightsGallery(gallery, Number(gallery.dataset.index || 0) - 1);
    });

    $('[data-crazy-action="next"]', gallery)?.addEventListener("click", () => {
      updateCrazyEightsGallery(gallery, Number(gallery.dataset.index || 0) + 1);
    });

    updateCrazyEightsGallery(gallery, 0);
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
setupCrazyEightsGallery();

if (backTopButton) {
  backTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

window.addEventListener("scroll", requestScrollEffects, { passive: true });
window.addEventListener("resize", requestScrollEffects);

updateScrollEffects();
