# Research Log: Remaining Improvements

**Date:** 2026-03-03
**Scope:** All remaining tasks from `task.md` (Medium + Low Priority)
**Method:** Source code audit of all 10 JS files, 2 CSS files, 1 HTML file

---

## 1. P2_Drafting.js Size Reduction

### Current State
- **File size:** ~57KB (1,100+ lines) — largest page file by far
- Other pages: P3=518, P4=468, P6=409, P5=135, P7=107, P8=177 lines

### Extractable Data Structures
1. `DOC_TYPE_CONFIG` (lines 2–23) — 5 document types with bilingual title/sub/btn
2. `DOC_TYPE_FIELDS` (lines 26–~350) — 5 template functions returning HTML form fields

### Extraction Plan
- Create `src/js/drafting-config.js` with both exported constants
- Import them in `P2_Drafting.js`
- Estimated reduction: ~330 lines (~30% of file)

### Risk Assessment
- **Low risk** — pure data extraction, no logic changes
- Both constants are only consumed inside `P2_Drafting.js`

---

## 2. Inline onclick Handlers Audit

### Inventory (121 total occurrences across 12 files)

| File | onclick count | Pattern types |
|---|---|---|
| P4_Compliance.js | 40 | `setUploadMode()`, `simulateUpload()`, `togglePolicy()`, `runAnalysis()`, `toggleDetail()`, `showToast()`, `event.stopPropagation()` combos |
| P3_Compare.js | 18 | `simulateUploadA/B()`, `runComparison()`, `resetComparison()`, `showToast()`, chip input setters |
| P1_Dasbor.js | 15 | `navigate()`, `showToast()`, `setLang()` |
| P6_Research.js | 14 | `showToast()`, `openDbModal()`, `createNewDatabase()`, `closeDbModal()`, `deleteDatabase()` |
| P2_Drafting.js | 7 | `setLang()`, `showToast()` |
| P5_Assistant.js | 7 | `showToast()`, chip input setters, `setLang()` |
| P7_Radar.js | 6 | `showToast()`, `setLang()` |
| P8_Matters.js | 5 | `showToast()`, `setLang()` |
| Login.js | 4 + 1 onsubmit | `setLang()`, `navigate()`, `showToast()`, form submit |
| Sidebar.js | 2 | `navigate()` |
| router.js | 1 | `navigate()` (404 page) |

### onclick Pattern Categories

1. **Navigation** (`window.navigate(path)`) — 12 occurrences
   - Sidebar nav items, dashboard quick actions, links
   - Fix: Use `data-navigate="/path"` + delegated click handler

2. **Language toggle** (`window.setLang('id'/'en')`) — 18 occurrences (2 per page x 9 pages)
   - Fix: Use `data-lang="id"/"en"` + delegated click handler

3. **Toast notifications** (`window.showToast(msg)`) — ~45 occurrences
   - Fix: Use `data-toast="message"` + delegated click handler

4. **Page-specific actions** — ~46 occurrences
   - Upload simulation, comparison, analysis, policy toggle, detail toggle
   - Fix: Use `data-action="actionName"` + `initInteractions()` switch

5. **Inline chip scripts** — ~8 occurrences
   - `onclick="var i=this.closest(...)..."` — multi-statement inline JS
   - Fix: Move to `initInteractions()` with specific selectors

### Recommended Approach
- **Event delegation pattern**: Single delegated listener on `root` in `initInteractions()` that checks `data-*` attributes
- **Priority order**: Start with lang toggle (universal), then navigate, then showToast, then page-specific
- This is a large refactor touching all pages — do it incrementally per page

---

## 3. Accessibility Audit

### Critical Findings: Zero ARIA attributes in entire codebase

| Check | Result |
|---|---|
| `role="button"` | **0 occurrences** |
| `tabindex` | **0 occurrences** |
| `aria-label` | **0 occurrences** |
| `aria-hidden` | 1 occurrence (mesh-bg in index.html) |

### Interactive Elements Missing Keyboard/ARIA Support

1. **Sidebar nav items** — `<div class="nav-item" onclick>` (8 items)
   - Need: `role="button"`, `tabindex="0"`, Enter/Space keydown handler

2. **Quick action tiles** — `<div class="qa-tile" onclick>` (4 items in P1)
   - Need: Same as above

3. **Drop zones** — `<div class="cmp-drop-zone" onclick>` (2 in P3)
   - Need: `role="button"`, `tabindex="0"`, keyboard handler

4. **Policy items** — `<div class="policy-item" onclick>` (4 in P4)
   - Need: Custom checkbox handling with keyboard

5. **Filter chips** — `<span class="filter-chip">` (6 in P6)
   - Need: `role="button"`, `tabindex="0"`

6. **Chips** — `<span class="chip" onclick>` (present in P1, P3, P4, P5)
   - Need: `role="button"`, `tabindex="0"`

7. **Toggle switches** — `<div class="toggle">` (sidebar + P5)
   - Need: `role="switch"`, `aria-checked`, `tabindex="0"`

8. **History items** — `<div class="sh-item">` (4 per route)
   - Need: `role="button"`, `tabindex="0"`

9. **Expandable table rows** — `<tr onclick="toggleDetail()">` (P4)
   - Need: `aria-expanded`, keyboard handler

10. **Modal dialogs** — loading overlays, save-to-db picker, db modal
    - Need: `role="dialog"`, `aria-modal="true"`, focus trap, Escape to close

### Missing Semantic Elements
- Chat inputs lack `<label>` (use `aria-label` at minimum)
- Search input in P6 lacks `<label>`
- Icon-only buttons (collapse, attach) lack `aria-label`
- No skip-to-content link
- No live region for route change announcements

### Recommended Fix Order
1. Add `role="button"` + `tabindex="0"` to all interactive divs/spans (quick wins)
2. Add `aria-label` to icon-only buttons
3. Add keyboard handlers (Enter/Space) alongside onclick conversion
4. Add modal focus trap + Escape handling
5. Add route change announcement with `aria-live` region

---

## 4. Route Loading Indicator

### Current Behavior
- `router.js:handleRoute()` uses `await loader()` for dynamic imports
- No visual feedback during module loading
- On slow networks, user sees blank content area

### Implementation Plan
- Add a `<div id="route-loader">` spinner inside `main-wrap`
- Show before `await loader()`, hide after render
- Reuse existing `.loading-spinner` class from pages.css

### Complexity: Low
- ~10 lines of code in `router.js`

---

## 5. Inline Styles Audit

### Heaviest Offenders (estimated inline style attributes)

| Page | Inline style count | Notes |
|---|---|---|
| P4_Compliance.js | ~65 | Result header, donut SVG, clause table, progress bars |
| P3_Compare.js | ~55 | Compare panels, stat cards, AI analysis, save-to-db |
| P8_Matters.js | ~40 | Table cells, audit trail, stat rows |
| P1_Dasbor.js | ~25 | SVG viewBox, KPI grid, source items |
| P6_Research.js | ~30 | Modal stats, toolbar, empty states |
| P5_Assistant.js | ~15 | Chat layout header, source tags |

### Extractable CSS Classes Needed
- `.result-kpis` layout → already exists but some inline overrides remain
- `.stat-card` / `.stat-n` / `.stat-lbl` → partially defined, inline gaps
- `.diff-panel` / `.diff-head` → defined, but some inline color styles
- `.audit-row` / `.audit-body` layout → partially in pages.css
- Modal stats `.regdb-mstat` → already defined

### Approach
- Audit pages.css for existing classes
- Create utility classes for repeated patterns (e.g., `.font-mono`, `.text-sm`, `.flex-center`)
- Replace inline styles with class-based CSS
- **Priority**: P4 > P3 > P8 (most impactful)

---

## 6. Page Transition Animations

### Current Behavior
- Route changes are instant — old content is replaced immediately
- Some pages have entry animations via `@keyframes fadeUp` in design-system.css

### Implementation Options

**Option A: CSS-only fade (Recommended)**
- Add `.page-enter` class with opacity animation
- Apply to `mainWrap` after rendering
- ~5 lines CSS, ~3 lines JS

**Option B: View Transitions API**
- Use `document.startViewTransition()` if supported
- Progressive enhancement — falls back to instant
- Modern browsers only (Chrome 111+, Safari 18+)

### Recommendation: Option A for reliability

---

## 7. Consistent Chat Bar

### Current Chat Bar Distribution

| Page | Chat Bar | Type |
|---|---|---|
| P1 Dashboard | Yes | Standard bottom chat bar |
| P2 Drafting | No | — |
| P3 Compare | Conditional | Shows only after comparison results |
| P4 Compliance | Yes | Standard bottom chat bar |
| P5 Assistant | Custom | Integrated chat input (different layout) |
| P6 Research | No | Has search bar instead |
| P7 Radar | No | — |
| P8 Matters | No | — |

### Analysis
- Chat bar is **not** universal — only P1, P3 (conditional), P4 have it
- P5 has its own chat layout (full-page chat interface)
- P6 has a search bar which serves a similar purpose
- P2, P7, P8 have no chat/input

### Decision Options
1. **Keep per-page** (current) — each page decides if it needs chat bar
2. **Universal chat bar** — add to every page via router.js (like sidebar)
3. **Universal but hideable** — present on all pages, specific pages can opt out

### Recommendation
**Option 2: Universal chat bar via router.js** — Extract chat bar HTML/JS into a shared component (like Sidebar.js), render it in `renderApp()` after the page content. Pages like P5 can opt out. This removes ~30 lines of duplicated chat bar HTML from P1, P3, P4 and ensures consistent UX.

---

## Research Method
> I am relying on my training data for CSS best practices, ARIA patterns, and View Transitions API knowledge as external verification was unavailable for these topics.
