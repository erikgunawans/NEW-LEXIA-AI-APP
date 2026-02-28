/**
 * Lexia Sidebar Component
 * ───────────────────────
 * Reusable sidebar extracted from all 8 Lexia HTML pages.
 * Supports: active route highlighting, EN/ID toggle, Mode Benteng toggle.
 */

const LOGO_SRC = '/assets/my-new-logo.png';

/* ── Nav config ─────────────────────────────────── */
const NAV_ITEMS = [
  {
    group: { id: 'Workspace', en: 'Workspace' },
    items: [
      { path: '/',           id: 'Dasbor',             en: 'Dashboard',            icon: '<path d="M2 7L8 2l6 5v7h-4v-4H6v4H2V7z"/>' },
      { path: '/drafting',   id: 'Drafting Dokumen',    en: 'Document Drafting',    icon: '<path d="M3 13V3h7l3 3v7H3zM9.5 3v3H13"/>' },
      { path: '/compare',    id: 'Perbandingan Legal',  en: 'Legal Comparison',     icon: '<path d="M2 4h5v8H2zM9 4h5v8H9z"/>' },
      { path: '/compliance', id: 'Kepatuhan Kontrak',   en: 'Contract Compliance',  icon: '<path d="M8 2a6 6 0 100 12A6 6 0 008 2zM8 6v4M8 11v.5"/>' },
    ]
  },
  {
    group: { id: 'AI Tools', en: 'AI Tools' },
    items: [
      { path: '/assistant',  id: 'Asisten Legal',       en: 'Legal Assistant',      icon: '<path d="M13 8.5a5 5 0 11-10 0A5 5 0 0113 8.5zM10.5 12.5l2.5 2.5"/>' },
      { path: '/research',   id: 'Riset &amp; Temuan',  en: 'Research &amp; Findings', icon: '<path d="M6.5 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM11.5 11.5l3 3"/>' },
      { path: '/radar',      id: 'Radar Regulasi',      en: 'Regulatory Radar',     icon: '<path d="M8 2a6 6 0 100 12A6 6 0 008 2zM8 5v3.5l2.5 1.5"/>', dot: true },
    ]
  },
  {
    group: { id: 'Administrasi', en: 'Administration' },
    items: [
      { path: '/matters',    id: 'Matter &amp; Audit',  en: 'Matter &amp; Audit',   icon: '<path d="M2 4h12v10H2zM5 4V3a3 3 0 016 0v1"/>' },
    ]
  }
];

/* ── Render sidebar ─────────────────────────────── */
export function renderSidebar(activePath) {
  const aside = document.createElement('aside');
  aside.className = 'sidebar';

  aside.innerHTML = `
    <div class="sb-head">
      <img class="sb-logo" src="${LOGO_SRC}" alt="Lexia"
           style="height:28px"/>
      <button class="icon-btn" title="Collapse">
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M8 2L4 6l4 4"/></svg>
      </button>
    </div>

    <div class="sb-user">
      <div class="sb-av">AS</div>
      <div>
        <div class="sb-name">Ahmad Santoso</div>
        <div class="sb-role" data-id="Divisi Hukum · PLN" data-en="Legal Division · PLN">Divisi Hukum · PLN</div>
      </div>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6"
           style="color:var(--t4);margin-left:auto;flex-shrink:0"><path d="M2 4l3 3 3-3"/></svg>
    </div>

    <nav class="sb-nav">
      ${NAV_ITEMS.map(section => `
        <div class="nav-lbl" data-id="${section.group.id}" data-en="${section.group.en}">${section.group.id}</div>
        ${section.items.map(item => `
          <div class="nav-item${item.path === activePath ? ' active' : ''}" onclick="navigate('${item.path}')">
            <span class="nav-ico"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7">${item.icon}</svg></span>
            <span data-id="${item.id}" data-en="${item.en}">${item.id}</span>
            ${item.dot ? '<span class="nav-dot"></span>' : ''}
          </div>
        `).join('')}
      `).join('')}
    </nav>

    <div class="sb-footer">
      <div class="bt-row">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"
             style="color:var(--t3);flex-shrink:0"><rect x="4" y="7" width="8" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2"/></svg>
        <span class="bt-lbl" data-id="Mode Benteng" data-en="Fortress Mode">Mode Benteng</span>
        <div class="toggle" id="bentengToggle"></div>
      </div>
      <div class="nav-item out" onclick="navigate('/login')">
        <span class="nav-ico"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 14H3a1 1 0 01-1-1V3a1 1 0 011-1h3M11 11l3-3-3-3M7 8h7"/></svg></span>
        <span data-id="Keluar" data-en="Sign Out">Keluar</span>
      </div>
    </div>
  `;

  return aside;
}
