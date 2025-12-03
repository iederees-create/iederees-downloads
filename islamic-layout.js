/* ================================
   RAVERSUS UNIVERSAL LAYOUT SYSTEM
   Injects Header + Auth + Footer
   ================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     HEADER HTML
     ================================ */
  const headerHTML = `
  <header id="global-header" style="
    width:100%;
    background:#000;
    color:#fff;
    border-bottom:1px solid rgba(255,255,255,0.15);
    position:sticky;
    top:0;
    z-index:9999;
    font-family:Inter, system-ui, Arial, sans-serif;
  ">
    <div style="
      max-width:1400px;
      margin:0 auto;
      padding:14px 20px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
    ">

      <!-- LOGO / TITLE -->
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="
          width:34px;
          height:34px;
          border-radius:50%;
          background:#3fa9f5;
        "></div>
        <span style="font-size:18px;font-weight:600;">
        
        </span>
      </div>

      <!-- NAV -->
      <nav style="display:flex;gap:18px;font-size:14px;">
        <a href="/" style="color:#fff;text-decoration:none;">Home</a>
        <a href="/shop.html" style="color:#fff;text-decoration:none;">Shop</a>
        <a href="/research.html" style="color:#fff;text-decoration:none;">Research</a>
        <a href="/about.html" style="color:#fff;text-decoration:none;">About</a>
      </nav>

      <!-- AUTH BUTTONS -->
      <div style="display:flex;gap:10px;">
        <button id="loginBtn" style="
          padding:8px 16px;
          border:1px solid #3fa9f5;
          background:transparent;
          color:#3fa9f5;
          border-radius:6px;
          cursor:pointer;
        ">Login</button>

        <button id="signupBtn" style="
          padding:8px 16px;
          border:none;
          background:#3fa9f5;
          color:#000;
          border-radius:6px;
          cursor:pointer;
          font-weight:600;
        ">Create Account</button>
      </div>

    </div>
  </header>
  `;

  /* ================================
     FOOTER HTML
     ================================ */
  const footerHTML = `
  <footer style="
    margin-top:80px;
    padding:40px 20px;
    background:#000;
    border-top:1px solid rgba(255,255,255,0.1);
    color:#aaa;
    text-align:center;
    font-size:13px;
  ">
    <p>© ${new Date().getFullYear()} RAVERSUS — All Rights Reserved</p>
  </footer>
  `;

  /* ================================
     BODY PLACEHOLDER WRAPPER
     ================================ */
  const bodyWrapperStart = `
  <main id="global-content" style="
    min-height:70vh;
    width:100%;
  ">
  <!-- PAGE CONTENT PLACEHOLDER -->
  `;

  const bodyWrapperEnd = `
  </main>
  `;

  /* ================================
     INJECT INTO PAGE
     ================================ */
  const originalBody = document.body.innerHTML;

  document.body.innerHTML = `
    ${headerHTML}
    ${bodyWrapperStart}
      ${originalBody}
    ${bodyWrapperEnd}
    ${footerHTML}
  `;

  /* ================================
     AUTH BUTTON ACTIONS (PLACEHOLDERS)
     ================================ */
  document.getElementById("loginBtn")?.addEventListener("click", () => {
    alert("Login system placeholder");
  });

  document.getElementById("signupBtn")?.addEventListener("click", () => {
    alert("Create Account system placeholder");
  });

});
