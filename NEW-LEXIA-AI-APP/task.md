# Lexia AI — Full App Audit Task Plan

**Created:** 2026-03-03
**Mode:** VERIFIED ✓
**Source:** Phase 1 Research — Full App Audit

---

## Critical (Must Fix)

- [x] **Fix Vercel SPA routing** — Added rewrite rules to `vercel.json`
- [x] **Fix double main-wrap nesting** — Removed outer `<div class="main-wrap">` from P3, P4, P5, P6, P7, P8
- [x] **Call Login initInteractions** — Updated `renderLogin()` in router.js
- [x] **Hide P4 loading overlay on load** — Added `style="display:none"` to `#loadingOverlay`

## High Priority (Should Fix)

- [x] **Remove CSS duplication** — Deleted re-declared rules in `pages.css` already defined in `design-system.css`
- [x] **Standardize language toggle IDs** — Converted P4 to `btnID`/`btnEN` with `.lang-toggle` component
- [x] **Add proper 404 handling** — Added styled 404 page in router.js
- [x] **Standardize setLang() guards** — Added `if(window.setLang)` guard pattern to P5, P6, P7, P8
- [x] **Standardize navigate() calls** — Changed Sidebar.js to use `window.navigate()`

## Medium Priority (Improvements)

- [x] **Remove dead event listeners** — Cleaned up `.chat-input`/`.send-btn` listeners in P7, P8; removed dead `.bt-row` listeners in P4, P6, P7, P8
- [x] **Apply orb animations** — Wired `@keyframes orb1/orb2/orb3` to `.orb-1/2/3` elements in `design-system.css`
- [x] **Add favicon** — Added `<link rel="icon">` to `index.html`
- [x] **Fix HTML entities in data attributes** — Replaced `&amp;` with `&` in Sidebar.js nav items
- [x] **Add missing CSS classes** — Added `.kpi-gr` and `.kpi-re` to pages.css
- [ ] **Reduce P2_Drafting.js size** — Extract `DOC_TYPE_CONFIG` and `DOC_TYPE_FIELDS` into `src/js/drafting-config.js`

## Low Priority (Nice to Have)

- [ ] **Replace inline onclick handlers** — Convert global `window.fn` + `onclick="fn()"` to scoped `addEventListener`
- [ ] **Accessibility improvements** — Add `role="button"`, `tabindex`, keyboard handlers to interactive divs
- [ ] **Add route loading indicator** — Show spinner during dynamic `import()` in router.js
- [ ] **Reduce inline styles** — Extract heavy inline styles from P1, P3, P4, P8 into CSS classes
- [ ] **Add page transition animations** — Smooth fade between route changes
- [ ] **Consistent chat bar across pages** — Decide: universal chat bar or per-page (document decision)

---

## Verification Results (Phase 4)

- ✓ All 11 JS files pass syntax check
- ✓ All 9 routes map to existing files with correct exports
- ✓ Sidebar nav items synchronized with router routes
- ✓ CSS brace balance: pages.css (398 pairs), design-system.css (176 pairs)
- ✓ All critical assets serve HTTP 200
- ✓ HTML structure valid (DOCTYPE, lang, charset, viewport, title, description, favicon, aria-hidden)
- ✓ Static analysis: 0 errors, 0 warnings (all fixed)
- ✓ CSS class cross-reference: all used classes defined

## Notes

- Auth system is a UI prototype placeholder — acceptable for now, must be replaced before production
- Backend API layer (`src/api/`) is empty — all interactions are simulated with mock data
- Research log: `docs/research_logs/full_app_audit.md`
