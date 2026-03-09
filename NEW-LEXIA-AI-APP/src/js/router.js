/**
 * Lexia SPA Router — History API pushState
 * ─────────────────────────────────────────
 * Maps URL paths to page modules.
 * All routes except /login call requireAuth().
 */

import { renderSidebar } from "../components/Sidebar.js";
import { renderChatBar, initChatBar } from "../components/ChatBar.js";
import { renderAIFloat, initAIFloat } from "../components/AIFloat.js";
import { requireAuth } from "./auth.js";

/* ── Route table ─────────────────────────────────── */
const routes = {
  "/": () => import("/src/pages/P1_Dasbor.js"),
  "/drafting": () => import("/src/pages/P2_Drafting.js"),
  "/compare": () => import("/src/pages/P3_Compare.js"),
  "/compliance": () => import("/src/pages/P4_Compliance.js"),
  "/assistant": () => import("/src/pages/P5_Assistant.js"),
  "/research": () => import("/src/pages/P6_Research.js"),
  "/radar": () => import("/src/pages/P7_Radar.js"),
  "/matters": () => import("/src/pages/P8_Matters.js"),
  "/login": () => import("/src/pages/Login.js"),
};

/* ── Global lang helper ──────────────────────────── */
window.setLang = function setLang(lang) {
  document.querySelectorAll("[data-id]").forEach((el) => {
    const val = el.getAttribute("data-" + lang);
    if (val !== null) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") return;
      el.innerHTML = val;
    }
  });
  document.querySelectorAll("[data-placeholder-id]").forEach((el) => {
    const val = el.getAttribute("data-placeholder-" + lang);
    if (val !== null) el.placeholder = val;
  });
  // Update lang toggle buttons
  const btnID = document.getElementById("btnID");
  const btnEN = document.getElementById("btnEN");
  if (btnID) btnID.classList.toggle("active", lang === "id");
  if (btnEN) btnEN.classList.toggle("active", lang === "en");
  document.documentElement.lang = lang;
  localStorage.setItem("lexia-lang", lang);
};

/* ── Core router ─────────────────────────────────── */
const root = document.getElementById("app-root");

async function handleRoute() {
  const path = location.pathname;
  const loader = routes[path];

  // Unknown route — show 404
  if (!loader) {
    root.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100vh;width:100%">
        <div style="text-align:center;padding:40px">
          <div style="font-family:'Playfair Display',serif;font-size:48px;font-weight:700;color:var(--t5);margin-bottom:8px">404</div>
          <div style="font-size:14px;color:var(--t3);margin-bottom:20px">Halaman tidak ditemukan / Page not found</div>
          <button class="btn btn-bl" data-navigate="/">← Kembali ke Dasbor</button>
        </div>
      </div>`;
    return;
  }

  // Auth guard (skip for login)
  if (path !== "/login" && !requireAuth()) {
    const mod = await routes["/login"]();
    renderLogin(mod);
    return;
  }

  try {
    // Show loading spinner for app pages
    if (path !== "/login") {
      root.innerHTML = '<div class="route-loader" style="height:100vh"></div>';
    }

    const mod = await loader();

    if (path === "/login") {
      renderLogin(mod);
    } else {
      renderApp(mod, path);
    }
  } catch (err) {
    console.error("[Router] Failed to load page:", err);
    root.innerHTML =
      '<div style="padding:40px;color:var(--t3)">Failed to load page.</div>';
  }
}

function renderLogin(mod) {
  root.innerHTML = "";
  // Remove AI float if navigating back to login from an app page
  document.getElementById('aiFloatBtn')?.remove();
  document.getElementById('aiFloatPanel')?.remove();
  const content = mod.default ? mod.default() : mod.render(root);
  if (content !== undefined) {
      if (typeof content === "string") {
        root.innerHTML = content;
      } else {
        root.appendChild(content);
      }
  }
  if (mod.initInteractions) {
    mod.initInteractions(root);
  }
  // Restore language on login page
  const lang = localStorage.getItem("lexia-lang") || "id";
  window.setLang(lang);
}

function renderApp(mod, path) {
  root.innerHTML = "";

  // Sidebar
  const sidebar = renderSidebar(path);
  root.appendChild(sidebar);

  // Main wrap
  const mainWrap = document.createElement("div");
  mainWrap.className = "main-wrap";

  const content = mod.default ? mod.default() : mod.render(mainWrap);
  if (content !== undefined) {
      if (typeof content === "string") {
        mainWrap.innerHTML = content;
      } else {
        mainWrap.appendChild(content);
      }
  }

  root.appendChild(mainWrap);

  // Announce route change for screen readers
  let announcer = document.getElementById('route-announcer');
  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'route-announcer';
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
  }
  announcer.textContent = document.title || path;

  // Shared chat bar (pages can opt out by exporting chatBar = false)
  if (mod.chatBar !== false) {
    mainWrap.insertAdjacentHTML('beforeend', renderChatBar());
    initChatBar(mainWrap);
  }

  // AI floating chat widget — rendered on all app pages (fixed to viewport via body)
  const existingFloat = document.getElementById('aiFloatBtn');
  if (existingFloat) existingFloat.remove();
  const existingPanel = document.getElementById('aiFloatPanel');
  if (existingPanel) existingPanel.remove();
  if (mod.aiFloat !== false) {
    const floatWrap = document.createElement('div');
    floatWrap.innerHTML = renderAIFloat();
    const floatBtn = floatWrap.children[0];    // live HTMLCollection: index 0 is button
    document.body.appendChild(floatBtn);        // removes button from floatWrap; panel shifts to index 0
    const floatPanel = floatWrap.children[0];  // now index 0 is panel
    document.body.appendChild(floatPanel);
    initAIFloat(path);
  }

  // Page enter animation
  mainWrap.classList.add("page-enter");

  if (mod.initInteractions) {
      mod.initInteractions(mainWrap);
  }

  initCardTilt(mainWrap);

  // Restore language
  const lang = localStorage.getItem("lexia-lang") || "id";
  window.setLang(lang);

  // Init Benteng toggle
  initBentengToggle();
}

/* ── Card hover lift (simple translateY) ─────────── */
function initCardTilt() {
  // No-op: hover lift is handled entirely by CSS .card:hover { transform: translateY(-3px) }
}

function initBentengToggle() {
  document.querySelectorAll(".bt-row").forEach((row) => {
    row.addEventListener("click", () => {
      const toggle = row.querySelector(".toggle");
      if (!toggle) return;
      toggle.classList.toggle("on");
      const enabled = toggle.classList.contains("on");
      document.body.classList.toggle("benteng-active", enabled);
      sessionStorage.setItem("benteng", enabled ? "1" : "0");
    });
  });
  // Restore state
  if (sessionStorage.getItem("benteng") === "1") {
    const t = document.getElementById("bentengToggle");
    if (t) t.classList.add("on");
    document.body.classList.add("benteng-active");
  }
}

/* ── Toast notification helper ────────────────────── */
window.showToast = function showToast(msg, duration = 2400) {
  let t = document.querySelector('.lexia-toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'lexia-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), duration);
};

/* ── SPA link navigation ─────────────────────────── */
export function navigate(path) {
  history.pushState(null, "", path);
  handleRoute();
}

// Make navigate available globally for onclick handlers
window.navigate = navigate;

/* ── Delegated navigation for [data-navigate] ────── */
root.addEventListener('click', (e) => {
  const nav = e.target.closest('[data-navigate]');
  if (nav) {
    e.preventDefault();
    window.navigate(nav.dataset.navigate);
  }
});

/* ── Event listeners ─────────────────────────────── */
window.addEventListener("popstate", handleRoute);

// Initial route
handleRoute();
