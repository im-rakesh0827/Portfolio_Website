/* CAREER JOURNEY COMPONENT — load once in index.html with defer.
   The HTML markup is included below. Edit journeyData to update content.
   The section uses your existing html.dark class; it does not change your theme. */
(() => {
  "use strict";

  // Mount the section in index.html. This is a classic script: no fetch or imports.
  const mount = document.getElementById("career-journey-mount");
  if (!mount || mount.dataset.careerJourneyMounted === "true") return;
  if (document.getElementById("career-journey")) {
    console.warn("Career Journey: remove the previous journey section before mounting this component.");
    return;
  }
  const template = document.createElement("template");
  template.innerHTML = "<section class=\"career-journey\" id=\"career-journey\" aria-labelledby=\"cj-title\">\n    <svg class=\"svg-defs\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <symbol id=\"cj-icon-graduation\" viewBox=\"0 0 24 24\"><path d=\"m2 9 10-5 10 5-10 5L2 9Z\"/><path d=\"M6 11v6c3 3 9 3 12 0v-6M22 9v7\"/></symbol>\n      <symbol id=\"cj-icon-book\" viewBox=\"0 0 24 24\"><path d=\"M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15\"/></symbol>\n      <symbol id=\"cj-icon-briefcase\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"7\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M8 7V4h8v3M3 12c6 3 12 3 18 0M10 12v3h4v-3\"/></symbol>\n      <symbol id=\"cj-icon-code\" viewBox=\"0 0 24 24\"><path d=\"m7 6-5 6 5 6m10-12 5 6-5 6M14 3l-4 18\"/></symbol>\n      <symbol id=\"cj-icon-rocket\" viewBox=\"0 0 24 24\"><path d=\"M9 15c-2-3-1-6 3-10 3-3 8-3 8-3s0 5-3 8c-4 4-7 5-10 3M8 8H4l-2 5 5 1m9-3v5l-5 3-1-5M5 16c-2 0-3 2-3 5 3 0 5-1 5-3\"/><circle cx=\"15.5\" cy=\"6.5\" r=\"1.5\"/></symbol>\n      <symbol id=\"cj-icon-mouse\" viewBox=\"0 0 24 24\"><rect x=\"6\" y=\"2\" width=\"12\" height=\"20\" rx=\"6\"/><path d=\"M12 6v4\"/></symbol>\n      <symbol id=\"cj-icon-play\" viewBox=\"0 0 24 24\"><path d=\"m8 4 12 8-12 8V4Z\"/></symbol>\n      <symbol id=\"cj-icon-pause\" viewBox=\"0 0 24 24\"><path d=\"M8 4v16M16 4v16\"/></symbol>\n      <symbol id=\"cj-icon-up\" viewBox=\"0 0 24 24\"><path d=\"m6 15 6-6 6 6\"/></symbol>\n      <symbol id=\"cj-icon-down\" viewBox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\"/></symbol>\n\n      <symbol id=\"cj-icon-building\" viewBox=\"0 0 24 24\"><path d=\"M4 21V3h12v18M16 9h4v12M2 21h20M8 7h4M8 11h4M8 15h4M9 21v-3h2v3\"/></symbol>\n      <symbol id=\"cj-icon-pin\" viewBox=\"0 0 24 24\"><path d=\"M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/></symbol>\n      <symbol id=\"cj-icon-clock\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v6l4 2\"/></symbol>\n        </svg>\n\n  <div class=\"journey-shell\">\n    <header class=\"journey-intro\">\n      <p class=\"eyebrow\">Career Journey</p>\n      <h3 class=\"journey-title\" id=\"cj-title\">Education &amp; Experience</h3>\n      <p class=\"intro-copy\">A journey of continuous learning, growth, and building scalable software solutions using modern Microsoft technologies.</p>\n      <p class=\"interaction-hint\">\n        <svg class=\"icon\" aria-hidden=\"true\"><use href=\"#cj-icon-mouse\"></use></svg>\n        <span class=\"desktop-hint\">Hover over a card to explore. Pause whenever you need.</span>\n        <span class=\"touch-hint\">Swipe inside a card, or tap Play to explore.</span>\n      </p>\n    </header>\n    <nav aria-label=\"Career journey chapters\"><ul class=\"chapter-nav\" id=\"cj-chapters\"></ul></nav>\n    <ol class=\"timeline\" id=\"cj-timeline\" aria-label=\"Education, experience, and projects\"></ol>\n    <noscript><p>Enable JavaScript to view this interactive career timeline.</p></noscript>\n    <footer class=\"journey-footer\"><p class=\"footer-motto\">Always learning. <span>Always building.</span></p></footer>\n  </div>\n</section>\n";
  mount.appendChild(template.content.cloneNode(true));
  mount.dataset.careerJourneyMounted = "true";

  const root = document.getElementById("career-journey");
  if (!root || root.dataset.initialized === "true") return;
  root.dataset.initialized = "true";
  const journeyData = [
  {
  "id": "cj-experience",
  "nav": "TenantVerse",
  "icon": "briefcase",
  "date": "Present",
  "title": "Founder & Full Stack Developer",
  "subtitle": "Building TenantVerse SaaS",
  "meta": [
    {
      "icon": "building",
      "text": "TenantVerse"
    },
    {
      "icon": "code",
      "text": "Rental & Property Management SaaS"
    },
    {
      "icon": "clock",
      "text": "Active Development"
    }
  ],
  "summary": "Building TenantVerse, a rental and property management SaaS platform, with ownership of product direction, application architecture, development, and deployment.",
  "label": "Product ownership & development",
  "details": [
    {
      "title": "Product ownership & execution",
      "description": "Lead product planning, feature prioritization, interface design, and end-to-end development, turning property-management requirements into practical application workflows.",
      "tags": [
        "Product Development",
        "Feature Planning",
        "SaaS"
      ]
    },
    {
      "title": "Application architecture & backend",
      "description": "Design and develop the application using .NET 8, Blazor Interactive Server, ASP.NET Core Web API, and Clean Architecture, with Dapper and SQL Server for data access.",
      "tags": [
        ".NET 8",
        "ASP.NET Core",
        "Clean Architecture",
        "Dapper",
        "SQL Server"
      ]
    },
    {
      "title": "Property & tenant management",
      "description": "Build workflows for managing properties, units, tenant records, and rental information, helping users organize day-to-day rental operations in one application.",
      "tags": [
        "Property Management",
        "Unit Management",
        "Tenant Management"
      ]
    },
    {
      "title": "Rental invoicing & payment records",
      "description": "Develop features for rental invoices and recorded tenant payments, providing organized access to rental charges, payment details, and related records.",
      "tags": [
        "Rental Invoicing",
        "Payment Records",
        "Rental Tracking"
      ]
    },
    {
      "title": "Authentication & role-based access",
      "description": "Implement JWT authentication and role-based authorization for Owner, Tenant, Manager, Operator, and Admin users, with access governed by their assigned responsibilities and permissions.",
      "tags": [
        "JWT Authentication",
        "Role-Based Authorization",
        "Permissions"
      ]
    },
    {
      "title": "Subscriptions & Razorpay integration",
      "description": "Develop subscription-management workflows and integrate Razorpay in test mode for subscription payments, with webhook handling under development for payment-status updates.",
      "tags": [
        "Subscriptions",
        "Razorpay",
        "Payment Integration",
        "Webhooks"
      ]
    },
    {
      "title": "Responsive interfaces & deployment",
      "description": "Create responsive application screens and reusable MudBlazor components, and manage Azure deployment, environment configuration, and application-integration troubleshooting.",
      "tags": [
        "Blazor",
        "MudBlazor",
        "Responsive UI",
        "Azure",
        "Git"
      ]
    }
  ]
},
       {"id": "cj-experience",
    "nav": "Experience",
    "icon": "briefcase",
    "date": "Feb 2023 – Oct 2025",
    "title": "Software Developer",
    "subtitle": "Professional Experience",
    "meta": [
      {
        "icon": "building",
        "text": "Kavayah IT Solutions Pvt. Ltd."
      },
      {
        "icon": "pin",
        "text": "Hyderabad, Telangana"
      },
      {
        "icon": "clock",
        "text": "Full-Time"
      }
    ],
    "summary": "Designed, developed, and maintained enterprise applications in the financial and legal domains, with a focus on secure, scalable software.",
    "label": "Responsibilities & technologies",
    "details": [
      {
        "title": "Backend services & REST APIs",
        "description": "Developed scalable backend services and RESTful APIs using ASP.NET Core and C#, with secure access and maintainable application structure.",
        "tags": [
          "C#",
          "ASP.NET Core",
          "REST APIs",
          "JWT Authentication"
        ]
      },
      {
        "title": "Database development & performance",
        "description": "Built database-driven features, improved query performance, and optimized application behavior using SQL Server and modern data-access tools.",
        "tags": [
          "SQL Server",
          "Entity Framework Core",
          "Dapper"
        ]
      },
      {
        "title": "Full-stack development & collaboration",
        "description": "Collaborated with cross-functional teams on requirements, application features, and user-experience improvements across backend and front-end workflows.",
        "tags": [
          "Blazor",
          "Angular",
          "Clean Architecture"
        ]
      },
      {
        "title": "Engineering quality & delivery",
        "description": "Participated in code reviews, bug fixing, maintenance, and deployment processes to deliver reliable, high-performance applications.",
        "tags": [
          "Azure",
          "Docker",
          "Git"
        ]
      }
    ]
  },
  
  {
    "id": "cj-projects",
    "nav": "Projects",
    "icon": "code",
    "date": "Project Portfolio",
    "title": "Selected Projects",
    "subtitle": "Practical Software. Real-World Problems.",
    "meta": [
      {
        "icon": "code",
        "text": "4 featured projects"
      },
      {
        "icon": "book",
        "text": "Product development"
      }
    ],
    "summary": "Building practical web applications across property management, healthcare, agriculture, and food ordering.",
    "label": "Projects & product development",
    "details": [
      {
        "title": "TenantVerse",
        "description": "A rental and property-management SaaS for properties, units, tenant records, rental invoices, recorded payments, role-based access, and subscription workflows.",
        "tags": [
          ".NET 8",
          "Blazor",
          "Dapper",
          "SQL Server"
        ]
      },
      {
        "title": "Blood Bank Management System",
        "description": "A centralized application for donor management, patient requests, blood inventory tracking, secure access, and operational reporting.",
        "tags": [
          "ASP.NET Core",
          "Blazor",
          "SQL Server"
        ]
      },
      {
        "title": "Farm System",
        "description": "A farm-management application with cattle records and Angular screens connected to a .NET API for creating, viewing, and updating farm data.",
        "tags": [
          "Angular",
          "ASP.NET Core",
          "REST APIs"
        ]
      },
      {
        "title": "The Divine Taste",
        "description": "A restaurant and food-ordering platform with menu management, customer authentication, online ordering, order tracking, and restaurant administration.",
        "tags": [
          "Angular",
          "ASP.NET Core",
          "Dapper",
          "SQL Server"
        ]
      }
    ]
  },
  {
    "id": "cj-training",
    "nav": "Training",
    "icon": "book",
    "date": "Jul 2022 – Jan 2023",
    "title": "DSA & Software Development",
    "subtitle": "Training & Skill Development",
    "meta": [
      {
        "icon": "book",
        "text": "Udemy"
      },
      {
        "icon": "code",
        "text": "Trainee"
      }
    ],
    "summary": "Strengthened problem-solving and analytical skills through Data Structures and Algorithms, software-development practice, and hands-on projects.",
    "label": "Learning & practical experience",
    "details": [
      {
        "title": "Data Structures & Algorithms",
        "description": "Practiced structured problem solving and algorithmic thinking to build a stronger foundation for software engineering.",
        "tags": [
          "DSA",
          "Problem Solving",
          "Analytical Thinking"
        ]
      },
      {
        "title": "Java & Object-Oriented Programming",
        "description": "Developed programming skills with Java and applied OOP principles to organize code into clear, reusable components.",
        "tags": [
          "Java",
          "OOP",
          "Software Development"
        ]
      },
      {
        "title": "SQL & web fundamentals",
        "description": "Gained hands-on experience with SQL and HTML while connecting programming concepts to database and web-development tasks.",
        "tags": [
          "SQL",
          "HTML",
          "Web Fundamentals"
        ]
      },
      {
        "title": "Academic & personal projects",
        "description": "Applied training concepts through academic and personal projects, turning ideas into working features and preparing for professional development.",
        "tags": [
          "Hands-On Learning",
          "Project Development"
        ]
      }
    ]
  },
  {
    "id": "cj-education",
    "nav": "Education",
    "icon": "graduation",
    "date": "2018 – 2022",
    "title": "Bachelor of Technology",
    "subtitle": "Computer Science & Engineering",
    "meta": [
      {
        "icon": "building",
        "text": "Sershah Engineering College, Sasaram"
      },
      {
        "icon": "graduation",
        "text": "Aryabhatta Knowledge University, Patna"
      }
    ],
    "summary": "Developed a strong foundation in computer science and software engineering, laying the groundwork for a career in professional software development.",
    "label": "Academic foundations",
    "details": [
      {
        "title": "Programming & software engineering",
        "description": "Built a foundation in object-oriented programming and software-engineering principles for structured application development.",
        "tags": [
          "OOP",
          "Software Engineering"
        ]
      },
      {
        "title": "Data structures & algorithms",
        "description": "Studied the organization of data, algorithmic approaches, and the fundamentals of computational problem solving.",
        "tags": [
          "Data Structures",
          "Algorithms"
        ]
      },
      {
        "title": "Databases & computer networks",
        "description": "Studied database-management systems and computer networks, building an understanding of how applications store and exchange information.",
        "tags": [
          "DBMS",
          "Computer Networks"
        ]
      },
      {
        "title": "Operating systems & applied learning",
        "description": "Developed core knowledge of operating systems and connected academic fundamentals to software-development practice.",
        "tags": [
          "Operating Systems",
          "Computer Science"
        ]
      }
    ]
  }
];
    /* SCROLL SETTINGS: pixels per second, plus reading time at either end. */
    const SCROLL_SPEED = 23;
    const END_READING_PAUSE = 1900;
    const MANUAL_READING_PAUSE = 4200;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hoverAvailable = window.matchMedia("(hover: hover) and (pointer: fine)");
    const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
    const icon = (name, extra = "") => `<svg class="icon ${extra}" aria-hidden="true"><use href="#cj-icon-${name}"></use></svg>`;
    const number = value => String(value).padStart(2, "0");
    const timeline = document.getElementById("cj-timeline");

    document.getElementById("cj-chapters").innerHTML = journeyData.map((chapter, i) =>
      `<li><a href="#${chapter.id}"><span>${number(i + 1)}</span>${escapeHtml(chapter.nav)}</a></li>`).join("");
    timeline.innerHTML = journeyData.map((chapter, i) => `
      <li class="stage ${i % 2 ? "" : "stage-right"}" id="${chapter.id}">
        <div class="timeline-node" aria-hidden="true">${icon(chapter.icon)}</div>
        <article class="wing" aria-labelledby="${chapter.id}-title">
          <header class="wing-heading">
            <span class="wing-icon" aria-hidden="true">${icon(chapter.icon)}</span>
            <div class="wing-title-group">
              <p class="wing-date">${escapeHtml(chapter.date)}</p>
              <h4 id="${chapter.id}-title">${escapeHtml(chapter.title)}</h4>
              <p class="wing-subtitle">${escapeHtml(chapter.subtitle)}</p>
            </div>
          </header>
          <div class="wing-meta">${chapter.meta.map(meta => `<span class="meta-badge">${icon(meta.icon)}<span>${escapeHtml(meta.text)}</span></span>`).join("")}</div>
          <p class="wing-summary">${escapeHtml(chapter.summary)}</p>
          <div class="details-heading">
            <p class="details-label">${escapeHtml(chapter.label)}</p>
            <span class="item-count" aria-hidden="true"><b>01</b> / ${number(chapter.details.length)}</span>
          </div>
          <div class="wing-scroll" id="${chapter.id}-details" tabindex="0" role="region"
            aria-label="${escapeHtml(chapter.title)} details" aria-describedby="cj-scroll-help">
            <ol class="detail-list">${chapter.details.map((detail, index) => `
              <li class="detail-item">
                <div class="detail-title"><span class="detail-number" aria-hidden="true">${number(index + 1)}</span><h5>${escapeHtml(detail.title)}</h5></div>
                <p>${escapeHtml(detail.description)}</p>
                <div class="tags">${detail.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
              </li>`).join("")}
            </ol>
          </div>
          <footer class="wing-controls">
            <button class="motion-button" type="button" aria-pressed="false" aria-controls="${chapter.id}-details"
              aria-label="Start automatic scrolling: ${escapeHtml(chapter.title)}">
              ${icon("play", "play-icon")}${icon("pause", "pause-icon")}<span>Play</span>
            </button>
            <div class="scroll-tools">
              <div class="scroll-progress" aria-hidden="true"><span></span></div>
              <button class="step-button step-up" type="button" aria-controls="${chapter.id}-details" aria-label="Previous detail: ${escapeHtml(chapter.title)}">${icon("up")}</button>
              <button class="step-button step-down" type="button" aria-controls="${chapter.id}-details" aria-label="Next detail: ${escapeHtml(chapter.title)}">${icon("down")}</button>
            </div>
          </footer>
        </article>
      </li>`).join("");
    const help = document.createElement("p");
    help.className = "sr-only";
    help.id = "cj-scroll-help";
    help.textContent = "Scroll, swipe, or use the arrow keys to read more. Home and End jump to the start and end. Automatic scrolling pauses while this region has keyboard focus. Use the Play button to start or pause scrolling.";
    timeline.before(help);
    // The caps are positioned on the list itself so the rail remains continuous.
    ["start", "end"].forEach((position, i) => {
      const cap = document.createElement("li");
      cap.className = "rail-cap"; cap.setAttribute("aria-hidden", "true");
      cap.setAttribute("role", "presentation");
      if (i === 0) timeline.prepend(cap); else timeline.append(cap);
    });

    let animationFrame = 0;
    const states = Array.from(document.querySelectorAll(".career-journey .wing")).map((card, i) => ({
      card, viewport: card.querySelector(".wing-scroll"), list: card.querySelector(".detail-list"),
      button: card.querySelector(".motion-button"), label: card.querySelector(".motion-button span"),
      up: card.querySelector(".step-up"), down: card.querySelector(".step-down"),
      progress: card.querySelector(".scroll-progress span"), counter: card.querySelector(".item-count b"),
      title: journeyData[i].title, hovered: false, pinned: false, suppressed: false,
      focused: false, visible: true, dragging: false, manualUntil: 0,
      position: 0, direction: 1, endpointUntil: 0, lastFrame: 0, running: false
    }));

    function wantsMotion(state) {
      return !document.hidden && state.visible && !state.suppressed &&
        (state.pinned || (state.hovered && hoverAvailable.matches && !reducedMotion.matches));
    }
    function canMove(state) {
      return wantsMotion(state) && !state.focused && !state.dragging &&
        state.viewport.scrollHeight > state.viewport.clientHeight + 1;
    }
    function updateButton(state) {
      const active = wantsMotion(state);
      if (state.button.getAttribute("aria-pressed") === String(active)) return;
      state.button.setAttribute("aria-pressed", String(active));
      state.button.setAttribute("aria-label", `${active ? "Pause" : "Start"} automatic scrolling: ${state.title}`);
      state.label.textContent = active ? "Pause" : "Play";
    }
    function updatePosition(state) {
      const max = Math.max(0, state.viewport.scrollHeight - state.viewport.clientHeight);
      const top = state.viewport.scrollTop;
      state.up.disabled = top < 1;
      state.down.disabled = max - top < 1;
      state.progress.style.transform = `scaleX(${max ? top / max : 1})`;
      const items = Array.from(state.list.children);
      // Compare actual element rectangles, including padding and borders.
      const viewportTop = state.viewport.getBoundingClientRect().top;
      let current = 0;
      items.forEach((item, index) => { if (item.getBoundingClientRect().top - viewportTop <= 14) current = index; });
      if (max > 0 && max - top < 2) current = items.length - 1;
      state.counter.textContent = number(current + 1);
    }
    function schedule() {
      if (!animationFrame && states.some(canMove)) animationFrame = requestAnimationFrame(tick);
    }
    function tick(now) {
      animationFrame = 0;
      for (const state of states) {
        const movable = canMove(state);
        state.running = movable && now >= state.manualUntil;
        updateButton(state);
        if (!state.running) { state.lastFrame = 0; continue; }
        if (!state.lastFrame) {
          state.lastFrame = now; state.position = state.viewport.scrollTop; continue;
        }
        const elapsed = Math.min(48, now - state.lastFrame);
        state.lastFrame = now;
        if (now < state.endpointUntil) continue;
        const max = Math.max(0, state.viewport.scrollHeight - state.viewport.clientHeight);
        state.position += state.direction * SCROLL_SPEED * elapsed / 1000;
        if (state.position >= max) {
          state.position = max; state.direction = -1; state.endpointUntil = now + END_READING_PAUSE;
        } else if (state.position <= 0) {
          state.position = 0; state.direction = 1; state.endpointUntil = now + END_READING_PAUSE;
        }
        state.viewport.scrollTop = state.position;
      }
      schedule();
    }
    function pauseForReading(state) {
      state.manualUntil = performance.now() + MANUAL_READING_PAUSE;
      state.lastFrame = 0; state.endpointUntil = 0;
      state.position = state.viewport.scrollTop;
    }
    function moveOneItem(state, direction) {
      pauseForReading(state);
      const top = state.viewport.scrollTop;
      const base = state.list.getBoundingClientRect().top;
      const offsets = Array.from(state.list.children).map(item => item.getBoundingClientRect().top - base);
      const max = state.viewport.scrollHeight - state.viewport.clientHeight;
      const next = direction > 0
        ? (offsets.find(offset => offset > top + 4) ?? max)
        : (offsets.filter(offset => offset < top - 4).pop() ?? 0);
      state.viewport.scrollTo({ top: Math.max(0, Math.min(max, next)), behavior: reducedMotion.matches ? "instant" : "smooth" });
    }
    for (const state of states) {
      state.card.addEventListener("pointerenter", event => {
        if (event.pointerType !== "mouse" || !hoverAvailable.matches) return;
        state.hovered = true; state.suppressed = false; state.lastFrame = 0;
        state.endpointUntil = performance.now() + 550;
        updateButton(state); schedule();
      });
      state.card.addEventListener("pointerleave", event => {
        if (event.pointerType !== "mouse") return;
        state.hovered = false; state.lastFrame = 0; updateButton(state);
      });
      state.button.addEventListener("click", () => {
        if (wantsMotion(state)) { state.pinned = false; state.suppressed = true; }
        else {
          state.pinned = true; state.suppressed = false;
          state.manualUntil = 0; state.endpointUntil = 0; state.lastFrame = 0;
        }
        updateButton(state); schedule();
      });
      state.viewport.addEventListener("focus", () => { state.focused = true; state.lastFrame = 0; });
      state.viewport.addEventListener("blur", () => { state.focused = false; state.lastFrame = 0; schedule(); });
      state.viewport.addEventListener("wheel", () => { pauseForReading(state); }, { passive: true });
      state.viewport.addEventListener("pointerdown", () => { state.dragging = true; pauseForReading(state); });
      state.viewport.addEventListener("scroll", () => { updatePosition(state); }, { passive: true });
      state.viewport.addEventListener("keydown", event => {
        const distances = { ArrowDown: 38, ArrowUp: -38, PageDown: state.viewport.clientHeight - 24, PageUp: -state.viewport.clientHeight + 24 };
        if (!(event.key in distances) && event.key !== "Home" && event.key !== "End") return;
        event.preventDefault(); pauseForReading(state);
        if (event.key === "Home") state.viewport.scrollTop = 0;
        else if (event.key === "End") state.viewport.scrollTop = state.viewport.scrollHeight;
        else state.viewport.scrollTop += distances[event.key];
      });
      state.up.addEventListener("click", () => moveOneItem(state, -1));
      state.down.addEventListener("click", () => moveOneItem(state, 1));
      updatePosition(state);
    }
    ["pointerup", "pointercancel"].forEach(eventName => window.addEventListener(eventName, () => {
      for (const state of states) if (state.dragging) {
        state.dragging = false; pauseForReading(state);
      }
      schedule();
    }, { passive: true }));
    document.addEventListener("visibilitychange", () => {
      for (const state of states) { state.lastFrame = 0; updateButton(state); }
      schedule();
    });
    reducedMotion.addEventListener("change", () => {
      for (const state of states) {
        state.pinned = false; state.lastFrame = 0; updateButton(state);
      }
      schedule();
    });
    if ("ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(() => {
        for (const state of states) { state.position = state.viewport.scrollTop; updatePosition(state); }
        schedule();
      });
      for (const state of states) resizeObserver.observe(state.viewport);
    }
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          const state = states.find(item => item.card === entry.target);
          state.visible = entry.isIntersecting; state.lastFrame = 0; updateButton(state);
        }
        schedule();
      });
      for (const state of states) observer.observe(state.card);
    }
    document.querySelectorAll(".career-journey .chapter-nav a").forEach(link => {
      link.addEventListener("click", () => {
        document.querySelectorAll(".career-journey .chapter-nav a").forEach(item => item.removeAttribute("aria-current"));
        link.setAttribute("aria-current", "step");
      });
    });
  
})();
