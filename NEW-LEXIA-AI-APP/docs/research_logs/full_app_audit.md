# Full App Audit — Research Log

**Date:** 2026-03-03
**Scope:** Complete codebase audit of Lexia AI (NEW-LEXIA-AI-APP)
**Files Reviewed:** 13 source files (1 HTML, 1 router, 1 sidebar, 9 pages, 2 CSS), vercel.json

---

## Architecture Overview

| Aspect | Current State |
|--------|--------------|
| Framework | Zero-dependency vanilla JS SPA |
| Routing | HTML5 History API (pushState) |
| Pages | 9 ES6 modules (Login + P1–P8) |
| Styling | 2 CSS files (~1421 + ~1200 lines) |
| i18n | data-id/data-en attributes, client-side switching |
| Auth | sessionStorage token (no backend) |
| Deploy | Vercel static site |

---

## Findings

### CRITICAL — Must Fix

#### 1. Vercel SPA Routing Missing
**File:** `vercel.json`
**Issue:** No rewrite rules configured. Deep links (`/drafting`, `/compliance`, etc.) will 404 on Vercel because there's no server-side routing to redirect to `index.html`.
**Fix:** Add `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`

#### 2. Double `main-wrap` Nesting
**Files:** `P3_Compare.js`, `P4_Compliance.js`, `P5_Assistant.js`, `P6_Research.js`, `P7_Radar.js`, `P8_Matters.js`
**Issue:** These pages render `<div class="main-wrap">` inside the container, but `router.js:123` already creates a `div.main-wrap` wrapper. This causes double-nesting (`main-wrap > main-wrap`), breaking flex layout.
**Fix:** Remove the outer `<div class="main-wrap">` from each affected page's render template.

#### 3. Login `initInteractions` Never Called
**File:** `router.js:100-112`
**Issue:** `renderLogin()` doesn't call `mod.initInteractions()`, so Login.js's language restoration never runs.
**Fix:** Add `if (mod.initInteractions) mod.initInteractions(root);` after login rendering.

#### 4. P4 Loading Overlay Visible on Load
**File:** `P4_Compliance.js:256`
**Issue:** `<div class="loading-overlay" id="loadingOverlay">` lacks `style="display:none"`. The loading spinner is visible by default when the compliance page loads.
**Fix:** Add `style="display:none"` to the loading overlay div.

---

### HIGH — Should Fix

#### 5. Global Namespace Pollution
**Files:** `P3_Compare.js`, `P4_Compliance.js`
**Issue:** 12+ functions assigned to `window` (`simulateUploadA`, `runComparison`, `resetComparison`, `simulateUpload`, `simulateBatch`, `togglePolicy`, `toggleDetail`, `runAnalysis`, `showResults`, `setUploadMode`). Risk of name collisions, especially as the app grows.
**Fix:** Use event delegation or scoped event listeners instead of inline `onclick` + `window.fn`.

#### 6. CSS Rule Duplication
**Files:** `design-system.css`, `pages.css`
**Issue:** `pages.css` re-declares `.btn`, `.btn-bl`, `.btn-outline`, `.btn-gr`, `.badge`, `.b-am`, `.ph`, `.ph-title`, `.ph-sub`, `.ph-right`, and more — all already defined in `design-system.css`. Causes specificity conflicts and maintenance burden.
**Fix:** Remove duplicate declarations from `pages.css`, keeping only page-specific styles.

#### 7. Inline onclick Handlers
**Files:** All page modules
**Issue:** Heavy use of inline `onclick="navigate('...')"`, `onclick="simulateUploadA()"`, etc. These bypass CSP, are harder to debug, and can fail if the global function isn't yet defined.
**Fix:** Replace with `addEventListener` in `initInteractions()`.

#### 8. Language Toggle ID Inconsistency
**Files:** `P1_Dasbor.js`, `P3_Compare.js` use `btnID`/`btnEN`; `P4_Compliance.js` uses `langID`/`langEN`; `P5–P8` use `btnID`/`btnEN`
**Issue:** The router's `setLang()` handles both patterns (lines 47-67) but this adds unnecessary complexity.
**Fix:** Standardize all pages to use one pattern (recommend `btnID`/`btnEN` via `.lang-toggle` component).

#### 9. Missing 404 Route
**File:** `router.js:76`
**Issue:** Unknown paths silently fall back to Dashboard (`routes["/"]`). User has no indication they've hit a wrong URL.
**Fix:** Add a dedicated 404 page or show a visible "page not found" message.

---

### MEDIUM — Improvement Opportunities

#### 10. Dead Event Listeners
**Files:** `P7_Radar.js:116-125`, `P8_Matters.js:186-195`
**Issue:** Both pages attach event listeners for `.chat-input` and `.send-btn`, but neither page renders these elements. The listeners silently fail (null checks protect against errors).
**Fix:** Remove dead code from these pages' `initInteractions`.

#### 11. Orb Animations Defined But Not Applied
**File:** `design-system.css:196-218`
**Issue:** `@keyframes orb1`, `orb2`, `orb3` are defined but no CSS rule applies them to `.orb-1`, `.orb-2`, `.orb-3`.
**Fix:** Either apply the animations or remove the dead keyframes.

#### 12. P2_Drafting.js Size (640 lines)
**File:** `P2_Drafting.js`
**Issue:** The largest page module contains document type configs, field templates, rendering, and interaction logic all in one file. Hard to maintain.
**Fix:** Extract `DOC_TYPE_CONFIG` and `DOC_TYPE_FIELDS` into a separate config module.

#### 13. Inconsistent Chat Bar Presence
**Pages:** P1 (always), P3 (result state), P4 (always), P5 (custom). P2, P6, P7, P8 have no chat bar.
**Issue:** Inconsistent AI access across the platform.
**Fix:** Either add chat bar to all pages or make it a deliberate architectural choice documented somewhere.

#### 14. No Favicon
**File:** `index.html`
**Issue:** No `<link rel="icon">` tag. Browsers show default icon and generate 404 requests for `/favicon.ico`.
**Fix:** Add favicon link pointing to the existing logo asset.

#### 15. Search Clears Input Instead of Searching
**File:** `P6_Research.js:77-83`
**Issue:** The "Search" button click handler clears the input value instead of performing any search action.
**Fix:** This is a UI prototype behavior, but should be documented or eventually connected to a search API.

---

### LOW — Nice to Have

#### 16. Security: Trivial Auth
**File:** `Login.js:18`, `router.js:24-31`
**Issue:** Auth is `sessionStorage.setItem("lexia-auth", "1")`. No backend validation.
**Note:** Acceptable for UI prototype, but must be replaced before production.

#### 17. Accessibility Gaps
**All Pages**
- Interactive `<div>` elements with `onclick` lack `role="button"`, `tabindex="0"`, `onkeydown` handlers
- Filter chips, policy items, nav items are not keyboard-navigable
- `.qa-tile` cards have no ARIA labels
- Form inputs in Login.js lack explicit `id`/`htmlFor` pairing

#### 18. No Loading State for Dynamic Imports
**File:** `router.js:85-97`
**Issue:** Dynamic `import()` calls have no loading indicator. On slow connections, users see a blank screen.
**Fix:** Show a lightweight spinner while modules load.

#### 19. HTML Entities in Data Attributes
**Files:** `Sidebar.js:26-33`
**Issue:** `&amp;` used in data attributes (e.g., `'Riset &amp; Temuan'`). `el.innerHTML = val` renders this correctly, but it's fragile.
**Fix:** Use actual `&` in data attributes since they're read via `getAttribute`, not parsed as HTML.

#### 20. Missing `rel="noopener"` on Links
**File:** `Login.js:29`
**Issue:** `<a href="#">` doesn't have `rel` attributes. Minor, but good practice.

---

## Code Patterns Observed

### Good Patterns
- Clean ES6 module separation (one file per page)
- Consistent bilingual data attributes throughout
- Well-organized CSS custom properties (design tokens)
- Smooth CSS animations and transitions
- Proper use of `flex` layout for sidebar + main content
- History API routing with auth guard

### Anti-Patterns
- Excessive inline styles in HTML templates (especially P1, P3, P4, P8)
- Global function pollution via `window.fn = ...`
- Inline onclick handlers instead of event delegation
- CSS rule duplication between the two stylesheets
- Large monolithic page modules (P2: 640 lines, P4: 413 lines, P3: 447 lines)

---

## Technology Research

### Vanilla JS SPA — No Qurio/external search needed
This project uses no external libraries. All patterns are standard web platform APIs:
- `history.pushState` / `popstate` event
- Dynamic `import()` for code splitting
- `sessionStorage` / `localStorage`
- CSS custom properties
- Template literals for HTML generation

> I am relying on my training data for Vercel configuration best practices as external verification was unavailable.

---

## Vercel SPA Routing Fix (Training Data Reference)

```json
{
  "outputDirectory": ".",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures all routes are handled by `index.html`, letting the client-side router take over.
