/* =====================================================
   NextGenWebs Universal Layout
   - Sticky header (desktop)
   - Slide-in mobile drawer
   - Cart + User icons
   - Login / Create Account modal (placeholder)
   - Wraps existing <body> content in <main id="ngw-content">
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ============= Inject Component Styles ============= */
  const style = document.createElement("style");
  style.textContent = `
    :root {
      --ngw-bg: #020617;
      --ngw-surface: #020617;
      --ngw-border: rgba(148, 163, 184, 0.45);
      --ngw-text: #e5e7eb;
      --ngw-muted: #9ca3af;
      --ngw-accent: #38bdf8;
      --ngw-accent-soft: rgba(56,189,248,0.08);
    }

    /* ===== Header ===== */
    #ngw-header {
      position: sticky;
      top: 0;
      z-index: 9999;
      background: #000;
      border-bottom: 1px solid rgba(15,23,42,0.8);
      backdrop-filter: blur(16px);
    }

    .ngw-shell {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
        "Segoe UI", sans-serif;
      color: var(--ngw-text);
    }

    .ngw-left {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    /* Logo */
    .ngw-logo {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      text-decoration: none;
    }

    .ngw-logo-pill {
      width: 32px;
      height: 18px;
      border-radius: 999px;
      border: 1px solid var(--ngw-border);
      background: radial-gradient(circle at 30% 30%, var(--ngw-accent-soft), #020617);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.65rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--ngw-accent);
    }

    .ngw-logo-text {
      font-size: 0.95rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      font-weight: 600;
      color: #f9fafb;
      white-space: nowrap;
    }

    /* Desktop Nav */
    .ngw-nav-desktop {
      display: none;
      align-items: center;
      gap: 1.75rem;
      font-size: 0.82rem;
    }

    .ngw-nav-link {
      text-decoration: none;
      color: var(--ngw-muted);
      position: relative;
      padding-bottom: 0.15rem;
      transition: color 0.18s ease;
      white-space: nowrap;
    }

    .ngw-nav-link:hover {
      color: #e5e7eb;
    }

    .ngw-nav-link.ngw-active {
      color: var(--ngw-accent);
    }

    .ngw-nav-link.ngw-active::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.1rem;
      width: 100%;
      height: 2px;
      border-radius: 999px;
      background: linear-gradient(to right, var(--ngw-accent), #a855f7);
    }

    .ngw-nav-chevron {
      font-size: 0.7rem;
      margin-left: 0.25rem;
      opacity: 0.7;
    }

    /* Right icons */
    .ngw-right {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .ngw-icon-btn {
      width: 32px;
      height: 32px;
      border-radius: 0.6rem;
      border: 1px solid rgba(148,163,184,0.5);
      background: radial-gradient(circle at 30% 0%, rgba(56,189,248,0.16), #020617);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.15s ease, box-shadow 0.18s ease,
        border-color 0.18s ease;
      color: #e5e7eb;
      padding: 0;
    }

    .ngw-icon-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 20px rgba(15,23,42,0.75);
      border-color: var(--ngw-accent);
    }

    .ngw-icon-emoji {
      font-size: 0.9rem;
    }

    /* Mobile hamburger */
    .ngw-mobile-toggle {
      width: 34px;
      height: 34px;
      border-radius: 0.65rem;
      border: 1px solid rgba(148,163,184,0.5);
      background: #020617;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 0;
      margin-right: 0.15rem;
    }

    .ngw-mobile-toggle-lines {
      width: 16px;
      height: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .ngw-mobile-toggle-lines span {
      height: 2px;
      width: 100%;
      border-radius: 999px;
      background: #e5e7eb;
    }

    /* ========== Drawer ========== */
    .ngw-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15,23,42,0.65);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 9998;
    }

    .ngw-backdrop.ngw-open {
      opacity: 1;
      pointer-events: auto;
    }

    .ngw-drawer {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 260px;
      max-width: 80%;
      background: radial-gradient(circle at 0% 0%, rgba(56,189,248,0.12), #020617);
      border-right: 1px solid rgba(148,163,184,0.5);
      transform: translateX(-100%);
      transition: transform 0.22s ease-out;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      padding: 1rem 1rem 1.25rem;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
        "Segoe UI", sans-serif;
      color: var(--ngw-text);
    }

    .ngw-drawer.ngw-open {
      transform: translateX(0);
    }

    .ngw-drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }

    .ngw-drawer-logo-text {
      font-size: 0.9rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-weight: 600;
    }

    .ngw-drawer-close {
      border-radius: 999px;
      border: 1px solid rgba(148,163,184,0.6);
      background: #020617;
      width: 26px;
      height: 26px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 0.85rem;
      color: #e5e7eb;
    }

    .ngw-drawer-icons {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.1rem;
    }

    .ngw-drawer-separator {
      border-top: 1px solid rgba(51,65,85,0.9);
      margin: 0.75rem 0 0.8rem;
    }

    .ngw-drawer-nav {
      flex: 1;
      overflow-y: auto;
      padding-right: 0.25rem;
    }

    .ngw-drawer-link,
    .ngw-drawer-parent {
      display: block;
      padding: 0.45rem 0.15rem;
      font-size: 0.9rem;
      color: #e5e7eb;
      text-decoration: none;
      border-radius: 0.4rem;
      cursor: pointer;
      border: none;
      background: transparent;
      text-align: left;
      width: 100%;
    }

    .ngw-drawer-link:hover,
    .ngw-drawer-parent:hover {
      background: rgba(15,23,42,0.85);
    }

    .ngw-drawer-link.ngw-active {
      color: var(--ngw-accent);
    }

    .ngw-drawer-parent-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.25rem;
    }

    .ngw-drawer-parent-chevron {
      font-size: 0.75rem;
      opacity: 0.7;
    }

    .ngw-drawer-sub {
      padding-left: 0.4rem;
      margin-bottom: 0.4rem;
      display: none;
    }

    .ngw-drawer-sub.ngw-open {
      display: block;
    }

    .ngw-drawer-sub a {
      display: block;
      font-size: 0.84rem;
      color: var(--ngw-muted);
      text-decoration: none;
      padding: 0.2rem 0.15rem;
      border-radius: 0.35rem;
    }

    .ngw-drawer-sub a:hover {
      background: rgba(15,23,42,0.75);
      color: #e5e7eb;
    }

    .ngw-drawer-auth {
      margin-top: 0.75rem;
      display: flex;
      gap: 0.5rem;
    }

    .ngw-auth-btn {
      flex: 1;
      font-size: 0.85rem;
      font-weight: 600;
      border-radius: 999px;
      padding: 0.45rem 0.75rem;
      cursor: pointer;
      border: 1px solid transparent;
    }

    .ngw-auth-btn.solid {
      background: var(--ngw-accent);
      color: #020617;
      border-color: var(--ngw-accent);
    }

    .ngw-auth-btn.ghost {
      background: transparent;
      border-color: rgba(148,163,184,0.7);
      color: #e5e7eb;
    }

    /* ========== Auth Modal ========== */
    .ngw-auth-modal {
      position: fixed;
      inset: 0;
      background: rgba(15,23,42,0.7);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 11000;
    }

    .ngw-auth-modal.ngw-open {
      display: flex;
    }

    .ngw-auth-dialog {
      width: 100%;
      max-width: 420px;
      background: radial-gradient(circle at 0% 0%, rgba(56,189,248,0.18), #020617);
      border-radius: 1rem;
      border: 1px solid rgba(148,163,184,0.6);
      padding: 1.5rem 1.4rem 1.3rem;
      color: #e5e7eb;
      box-shadow: 0 18px 45px rgba(15,23,42,0.85);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
        "Segoe UI", sans-serif;
    }

    .ngw-auth-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .ngw-auth-title {
      font-size: 1.05rem;
      font-weight: 600;
    }

    .ngw-auth-close {
      width: 26px;
      height: 26px;
      border-radius: 999px;
      border: 1px solid rgba(148,163,184,0.7);
      background: #020617;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 0.8rem;
    }

    .ngw-auth-tabs {
      display: flex;
      gap: 0.35rem;
      margin-bottom: 0.85rem;
      padding: 0.18rem;
      border-radius: 999px;
      background: rgba(15,23,42,0.9);
    }

    .ngw-auth-tab {
      flex: 1;
      font-size: 0.82rem;
      padding: 0.3rem 0.3rem;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      background: transparent;
      color: var(--ngw-muted);
    }

    .ngw-auth-tab.ngw-active {
      background: #020617;
      color: var(--ngw-accent);
      font-weight: 600;
      box-shadow: 0 0 0 1px rgba(56,189,248,0.35);
    }

    .ngw-auth-body {
      font-size: 0.84rem;
    }

    .ngw-auth-body p {
      margin-bottom: 0.7rem;
      color: var(--ngw-muted);
    }

    .ngw-auth-field {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      margin-bottom: 0.6rem;
    }

    .ngw-auth-field label {
      font-size: 0.76rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #9ca3af;
    }

    .ngw-auth-field input {
      border-radius: 0.6rem;
      border: 1px solid rgba(148,163,184,0.8);
      background: rgba(15,23,42,0.9);
      padding: 0.45rem 0.55rem;
      color: #e5e7eb;
      font-size: 0.85rem;
      outline: none;
    }

    .ngw-auth-field input:focus {
      border-color: var(--ngw-accent);
      box-shadow: 0 0 0 1px rgba(56,189,248,0.35);
    }

    .ngw-auth-submit {
      margin-top: 0.4rem;
      width: 100%;
      border-radius: 0.75rem;
      border: 1px solid var(--ngw-accent);
      background: linear-gradient(to right, var(--ngw-accent), #a855f7);
      color: #020617;
      font-weight: 600;
      font-size: 0.88rem;
      padding: 0.55rem 0.8rem;
      cursor: pointer;
    }

    .ngw-auth-note {
      margin-top: 0.6rem;
      font-size: 0.75rem;
      color: #9ca3af;
    }

    /* ===== Footer ===== */
    #ngw-footer {
      margin-top: 3rem;
      padding: 2rem 1rem 2.5rem;
      background: #000;
      border-top: 1px solid rgba(15,23,42,0.85);
      color: #6b7280;
      font-size: 0.8rem;
      text-align: center;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
        "Segoe UI", sans-serif;
    }

    #ngw-footer span {
      color: #9ca3af;
    }

    /* ===== Layout wrapper ===== */
    #ngw-content {
      min-height: 70vh;
    }

    /* ===== Responsive ===== */
    @media (min-width: 900px) {
      .ngw-nav-desktop {
        display: flex;
      }
      .ngw-mobile-toggle {
        display: none;
      }
    }

    @media (max-width: 899px) {
      .ngw-nav-desktop {
        display: none;
      }
      .ngw-mobile-toggle {
        display: inline-flex;
      }
    }
  `;
  document.head.appendChild(style);

  /* ============= HTML Fragments ============= */
  const headerHTML = `
    <header id="ngw-header">
      <div class="ngw-shell">
        <div class="ngw-left">
          <button id="ngw-mobile-toggle" class="ngw-mobile-toggle" aria-label="Open menu">
            <div class="ngw-mobile-toggle-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <a href="/" class="ngw-logo">
            <div class="ngw-logo-pill">NG</div>
            <div class="ngw-logo-text">NEXTGENWEBS</div>
          </a>
        </div>

        <nav class="ngw-nav-desktop">
          <a href="/" class="ngw-nav-link" data-ngw-route="index.html">Home</a>
          <a href="/about.html" class="ngw-nav-link" data-ngw-route="about.html">About Us</a>
          <a href="/shop.html" class="ngw-nav-link" data-ngw-route="shop.html">Shop</a>
          <a href="/products.html" class="ngw-nav-link" data-ngw-route="products.html">
            Products <span class="ngw-nav-chevron">▼</span>
          </a>
          <a href="/affiliate.html" class="ngw-nav-link" data-ngw-route="affiliate.html">Become An Affiliate</a>
          <a href="/research.html" class="ngw-nav-link" data-ngw-route="research.html">
            Research <span class="ngw-nav-chevron">▼</span>
          </a>
          <a href="/testimonials.html" class="ngw-nav-link" data-ngw-route="testimonials.html">Testimonials</a>
          <a href="/contact.html" class="ngw-nav-link" data-ngw-route="contact.html">Contact Us</a>
        </nav>

        <div class="ngw-right">
          <button class="ngw-icon-btn" id="ngw-cart-btn" aria-label="Cart">
            <span class="ngw-icon-emoji">🛒</span>
          </button>
          <button class="ngw-icon-btn" id="ngw-user-btn" aria-label="Login / Account">
            <span class="ngw-icon-emoji">👤</span>
          </button>
        </div>
      </div>
    </header>
  `;

  const drawerHTML = `
    <div id="ngw-backdrop" class="ngw-backdrop"></div>
    <aside id="ngw-drawer" class="ngw-drawer" aria-label="NextGenWebs navigation">
      <div class="ngw-drawer-header">
        <div class="ngw-drawer-logo-text">NEXTGENWEBS</div>
        <button id="ngw-drawer-close" class="ngw-drawer-close" aria-label="Close menu">✕</button>
      </div>

      <div class="ngw-drawer-icons">
        <button class="ngw-icon-btn" id="ngw-drawer-cart" aria-label="Cart">
          <span class="ngw-icon-emoji">🛒</span>
        </button>
        <button class="ngw-icon-btn" id="ngw-drawer-user" aria-label="Login / Account">
          <span class="ngw-icon-emoji">👤</span>
        </button>
      </div>

      <div class="ngw-drawer-separator"></div>

      <nav class="ngw-drawer-nav">
        <a href="/" class="ngw-drawer-link" data-ngw-route="index.html">Home</a>
        <a href="/about.html" class="ngw-drawer-link" data-ngw-route="about.html">About Us</a>
        <a href="/shop.html" class="ngw-drawer-link" data-ngw-route="shop.html">Shop</a>

        <button type="button" class="ngw-drawer-parent" data-ngw-collapse="products">
          <div class="ngw-drawer-parent-row">
            <span>Products</span>
            <span class="ngw-drawer-parent-chevron">▼</span>
          </div>
        </button>
        <div id="ngw-sub-products" class="ngw-drawer-sub">
          <a href="/products.html#websites">Websites</a>
          <a href="/products.html#funnels">Sales Funnels</a>
          <a href="/products.html#hosting">Hosting & Care Plans</a>
        </div>

        <a href="/affiliate.html" class="ngw-drawer-link" data-ngw-route="affiliate.html">Become An Affiliate</a>

        <div class="ngw-drawer-separator"></div>

        <button type="button" class="ngw-drawer-parent" data-ngw-collapse="research">
          <div class="ngw-drawer-parent-row">
            <span>Research Topics</span>
            <span class="ngw-drawer-parent-chevron">▼</span>
          </div>
        </button>
        <div id="ngw-sub-research" class="ngw-drawer-sub">
          <a href="/research.html#performance">Performance</a>
          <a href="/research.html#ux">UX / UI Studies</a>
        </div>

        <a href="/testimonials.html" class="ngw-drawer-link" data-ngw-route="testimonials.html">Testimonials</a>
        <a href="/contact.html" class="ngw-drawer-link" data-ngw-route="contact.html">Contact Us</a>
      </nav>

      <div class="ngw-drawer-separator"></div>

      <div class="ngw-drawer-auth">
        <button class="ngw-auth-btn ghost" id="ngw-drawer-login">Login</button>
        <button class="ngw-auth-btn solid" id="ngw-drawer-signup">Create Account</button>
      </div>
    </aside>
  `;

  const authModalHTML = `
    <div id="ngw-auth-modal" class="ngw-auth-modal" aria-modal="true" role="dialog">
      <div class="ngw-auth-dialog">
        <div class="ngw-auth-header">
          <div class="ngw-auth-title">NextGenWebs Account</div>
          <button id="ngw-auth-close" class="ngw-auth-close" aria-label="Close">✕</button>
        </div>

        <div class="ngw-auth-tabs">
          <button id="ngw-tab-login" class="ngw-auth-tab ngw-active" type="button">Login</button>
          <button id="ngw-tab-signup" class="ngw-auth-tab" type="button">Create Account</button>
        </div>

        <div class="ngw-auth-body">
          <div id="ngw-pane-login">
            <p>Quick placeholder login panel. Wire this up later to Supabase or your preferred auth.</p>
            <div class="ngw-auth-field">
              <label for="ngw-login-email">Email</label>
              <input id="ngw-login-email" type="email" placeholder="you@example.com">
            </div>
            <div class="ngw-auth-field">
              <label for="ngw-login-password">Password</label>
              <input id="ngw-login-password" type="password" placeholder="••••••••">
            </div>
            <button class="ngw-auth-submit" type="button">Login (placeholder)</button>
            <div class="ngw-auth-note">
              This is a front-end shell only. Your real authentication logic will plug in here.
            </div>
          </div>

          <div id="ngw-pane-signup" style="display:none;">
            <p>Create a new NextGenWebs account placeholder. Capture the basic details now, plug into real backend later.</p>
            <div class="ngw-auth-field">
              <label for="ngw-signup-name">Full name</label>
              <input id="ngw-signup-name" type="text" placeholder="Your name">
            </div>
            <div class="ngw-auth-field">
              <label for="ngw-signup-email">Email</label>
              <input id="ngw-signup-email" type="email" placeholder="you@example.com">
            </div>
            <div class="ngw-auth-field">
              <label for="ngw-signup-password">Password</label>
              <input id="ngw-signup-password" type="password" placeholder="Create a password">
            </div>
            <button class="ngw-auth-submit" type="button">Create Account (placeholder)</button>
            <div class="ngw-auth-note">
              Hook this up later to Supabase, Firebase, or your own backend to actually create accounts.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const footerHTML = `
    <footer id="ngw-footer">
      <div>
        <span>NextGenWebs</span> — High-conversion websites, funnels & care plans.<br/>
        © ${new Date().getFullYear()} NextGenWebs. All rights reserved.
      </div>
    </footer>
  `;

  /* ============= Wrap Existing Body ============= */
  const originalBody = document.body.innerHTML;

  document.body.innerHTML = `
    ${headerHTML}
    <main id="ngw-content">
      ${originalBody}
    </main>
    ${footerHTML}
    ${drawerHTML}
    ${authModalHTML}
  `;

  /* ============= Helpers ============= */
  function getCurrentRoute() {
    const path = window.location.pathname;
    const file = path.split("/").filter(Boolean).pop() || "index.html";
    return file.toLowerCase();
  }

  function markActiveLinks() {
    const current = getCurrentRoute();
    const selector = "[data-ngw-route]";
    document.querySelectorAll(selector).forEach((el) => {
      const route = (el.getAttribute("data-ngw-route") || "").toLowerCase();
      if (route === current) {
        el.classList.add("ngw-active");
      }
    });
  }

  markActiveLinks();

  /* ============= Drawer Logic ============= */
  const drawer = document.getElementById("ngw-drawer");
  const backdrop = document.getElementById("ngw-backdrop");
  const toggleBtn = document.getElementById("ngw-mobile-toggle");
  const drawerCloseBtn = document.getElementById("ngw-drawer-close");

  function openDrawer() {
    if (!drawer || !backdrop) return;
    drawer.classList.add("ngw-open");
    backdrop.classList.add("ngw-open");
  }

  function closeDrawer() {
    if (!drawer || !backdrop) return;
    drawer.classList.remove("ngw-open");
    backdrop.classList.remove("ngw-open");
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  // Expand/collapse drawer submenus
  const collapseButtons = document.querySelectorAll("[data-ngw-collapse]");
  collapseButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-ngw-collapse");
      const target = document.getElementById(`ngw-sub-${key}`);
      if (!target) return;
      target.classList.toggle("ngw-open");
    });
  });

  /* ============= Auth Modal Logic ============= */
  const authModal = document.getElementById("ngw-auth-modal");
  const authClose = document.getElementById("ngw-auth-close");
  const userBtn = document.getElementById("ngw-user-btn");
  const drawerUser = document.getElementById("ngw-drawer-user");
  const drawerLoginBtn = document.getElementById("ngw-drawer-login");
  const drawerSignupBtn = document.getElementById("ngw-drawer-signup");

  const tabLogin = document.getElementById("ngw-tab-login");
  const tabSignup = document.getElementById("ngw-tab-signup");
  const paneLogin = document.getElementById("ngw-pane-login");
  const paneSignup = document.getElementById("ngw-pane-signup");

  function openAuth(tab) {
    if (!authModal) return;
    authModal.classList.add("ngw-open");
    if (tab === "signup") {
      setAuthTab("signup");
    } else {
      setAuthTab("login");
    }
  }

  function closeAuth() {
    if (!authModal) return;
    authModal.classList.remove("ngw-open");
  }

  function setAuthTab(tab) {
    if (!tabLogin || !tabSignup || !paneLogin || !paneSignup) return;
    if (tab === "signup") {
      tabSignup.classList.add("ngw-active");
      tabLogin.classList.remove("ngw-active");
      paneSignup.style.display = "";
      paneLogin.style.display = "none";
    } else {
      tabLogin.classList.add("ngw-active");
      tabSignup.classList.remove("ngw-active");
      paneLogin.style.display = "";
      paneSignup.style.display = "none";
    }
  }

  if (userBtn) userBtn.addEventListener("click", () => openAuth("login"));
  if (drawerUser) drawerUser.addEventListener("click", () => {
    closeDrawer();
    openAuth("login");
  });
  if (drawerLoginBtn) drawerLoginBtn.addEventListener("click", () => {
    closeDrawer();
    openAuth("login");
  });
  if (drawerSignupBtn) drawerSignupBtn.addEventListener("click", () => {
    closeDrawer();
    openAuth("signup");
  });

  if (authClose) authClose.addEventListener("click", closeAuth);

  if (authModal) {
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) {
        closeAuth();
      }
    });
  }

  if (tabLogin) {
    tabLogin.addEventListener("click", () => setAuthTab("login"));
  }
  if (tabSignup) {
    tabSignup.addEventListener("click", () => setAuthTab("signup"));
  }

  // ESC key closes drawer & auth
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
      closeAuth();
    }
  });
});
