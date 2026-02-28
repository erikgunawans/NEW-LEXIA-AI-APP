/**
 * Lexia SPA Router — History API pushState
 * ─────────────────────────────────────────
 * Maps URL paths to page modules.
 * All routes except /login call requireAuth().
 */

import { renderSidebar } from "../components/Sidebar.js";

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

/* ── Auth guard ──────────────────────────────────── */
function requireAuth() {
  const token = sessionStorage.getItem("lexia-auth");
  if (!token) {
    history.replaceState(null, "", "/login");
    return false;
  }
  return true;
}

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
  localStorage.setItem("lexia-lang", lang);
};

/* ── Core router ─────────────────────────────────── */
const root = document.getElementById("app-root");

async function handleRoute() {
  const path = location.pathname;
  const loader = routes[path] || routes["/"];

  // Auth guard (skip for login)
  if (path !== "/login" && !requireAuth()) {
    const mod = await routes["/login"]();
    renderLogin(mod);
    return;
  }

  try {
    const mod = await loader();

    if (path === "/login") {
      renderLogin(mod);
    } else {
      renderApp(mod, path);
    }
  } catch (err) {
    console.error("[Router] Failed to load page:", err);
    root.innerHTML =
      '<div style="padding:40px;color:var(--t3)">Page not found.</div>';
  }
}

function renderLogin(mod) {
  root.innerHTML = "";
  const content = mod.default ? mod.default() : mod.render(root);
  // Unlike other pages, Login.js's render currently innerHTMLs directly into the container
  // So returning undefined is fine if it handles its own insertion
  if (content !== undefined) {
      if (typeof content === "string") {
        root.innerHTML = content;
      } else {
        root.appendChild(content);
      }
  }
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

  if (mod.initInteractions) {
      mod.initInteractions(mainWrap);
  }

  // Restore language
  const lang = localStorage.getItem("lexia-lang") || "id";
  window.setLang(lang);

  // Init Benteng toggle
  initBentengToggle();
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

/* ── SPA link navigation ─────────────────────────── */
export function navigate(path) {
  history.pushState(null, "", path);
  handleRoute();
}

// Make navigate available globally for onclick handlers
window.navigate = navigate;

/* ── Event listeners ─────────────────────────────── */
window.addEventListener("popstate", handleRoute);

// Initial route
handleRoute();
