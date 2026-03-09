/**
 * Lexia Sidebar Component
 * ───────────────────────
 * Reusable sidebar extracted from all 8 Lexia HTML pages.
 * Supports: active route highlighting, EN/ID toggle, Mode Benteng toggle,
 *           contextual Conversation History section.
 */

const LOGO_SRC = '/assets/my-new-logo.png';

/* ── Nav config ─────────────────────────────────── */
const NAV_ITEMS = [
  {
    group: { id: 'Chat', en: 'Chat' },
    items: [
      { path: '/assistant',  id: 'Chat Baru',           en: 'New Chat',
        icon: '<path d="M12 2H4a1 1 0 00-1 1v6a1 1 0 001 1h2.5L8 12l1.5-2H12a1 1 0 001-1V3a1 1 0 00-1-1z"/><path d="M8 5.5v3M6.5 7h3"/>' },
    ]
  },
  {
    group: { id: 'Workspace', en: 'Workspace' },
    items: [
      { path: '/',           id: 'Dasbor',              en: 'Dashboard',
        icon: '<rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/>' },
      { path: '/drafting',   id: 'Drafting Dokumen',    en: 'Document Drafting',
        icon: '<path d="M4 2h5.5L12 5v8a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z"/><path d="M9.5 2v3.5H12"/><path d="M5.5 8.5h5M5.5 11h3"/>' },
      { path: '/compare',    id: 'Perbandingan Legal',  en: 'Legal Comparison',
        icon: '<path d="M8 3v10M5 13h6"/><path d="M3 6.5l1.8 3.5H1.2L3 6.5z"/><path d="M13 6.5l1.8 3.5h-3.6L13 6.5z"/><path d="M3 6.5h10"/>' },
      { path: '/compliance', id: 'Kepatuhan Kontrak',   en: 'Contract Compliance',
        icon: '<path d="M8 2L3 4.2v3.9c0 2.8 2.1 4.9 5 5.9 2.9-1 5-3.1 5-5.9V4.2L8 2z"/><path d="M5.5 8l2 2 3-3"/>' },
    ]
  },
  {
    group: { id: 'AI Tools', en: 'AI Tools' },
    items: [
      { path: '/research',   id: 'Riset & Temuan',      en: 'Research & Findings',
        icon: '<circle cx="7" cy="7" r="4.5"/><path d="M12.5 12.5l2.5 2.5"/>' },
      { path: '/radar',      id: 'Radar Regulasi',      en: 'Regulatory Radar',
        icon: '<circle cx="8" cy="13" r="1.5"/><path d="M5.5 10.5a3.5 3.5 0 015 0"/><path d="M3 8a7 7 0 0110 0"/>', dot: true },
    ]
  },
  {
    group: { id: 'Administrasi', en: 'Administration' },
    items: [
      { path: '/matters',    id: 'Perkara & Audit',     en: 'Case & Audit',
        icon: '<rect x="2" y="5" width="12" height="9" rx="1.2"/><path d="M6 5V4a2 2 0 014 0v1"/><path d="M5 9.5l2 2 4-3"/>' },
    ]
  }
];

/* ── Contextual history data per route ──────────── */
const HISTORY_DATA = {
  '/': [
    { icon: '📊', title: 'Laporan Eksekutif Q4 2025',      time_id: '2j lalu',      time_en: '2h ago' },
    { icon: '📄', title: 'KPI Legal Review Jan 2026',      time_id: '5j lalu',      time_en: '5h ago' },
    { icon: '🔍', title: 'Audit Kepatuhan Februari',       time_id: 'Kemarin',      time_en: 'Yesterday' },
    { icon: '📋', title: 'Brief Perusahaan Q1 2026',        time_id: '2 hari lalu',  time_en: '2 days ago' },
  ],
  '/drafting': [
    { icon: '📝', title: 'PKS-Vendor-IT-2026.docx',        time_id: '1j lalu',      time_en: '1h ago' },
    { icon: '📝', title: 'NDA-Mitra-Feb2026.docx',         time_id: '3j lalu',      time_en: '3h ago' },
    { icon: '📝', title: 'KSO-Distribusi-2026.docx',       time_id: 'Kemarin',      time_en: 'Yesterday' },
    { icon: '📝', title: 'Addendum-PKS-Turbin.docx',       time_id: '3 hari lalu',  time_en: '3 days ago' },
  ],
  '/compare': [
    { icon: '⇄',  title: 'PKS-Turbin v1.0 vs v2.1',       time_id: '30m lalu',     time_en: '30m ago' },
    { icon: '⇄',  title: 'NDA-Mitra Rev A vs B',           time_id: '2j lalu',      time_en: '2h ago' },
    { icon: '⇄',  title: 'KSO-Distribusi 2025 vs 2026',    time_id: 'Kemarin',      time_en: 'Yesterday' },
    { icon: '⇄',  title: 'Standar Perusahaan vs OJK POJK',  time_id: '4 hari lalu',  time_en: '4 days ago' },
  ],
  '/compliance': [
    { icon: '⚠️', title: 'PKS-Pengadaan-Turbin.pdf',       time_id: '27 Feb',       time_en: 'Feb 27' },
    { icon: '✅', title: 'KSO-Distribusi-2026.docx',       time_id: '25 Feb',       time_en: 'Feb 25' },
    { icon: '⚠️', title: 'NDA-Vendor-Feb26.pdf',           time_id: '24 Feb',       time_en: 'Feb 24' },
    { icon: '❌', title: 'Perjanjian-Sewa.pdf',            time_id: '22 Feb',       time_en: 'Feb 22' },
  ],
  '/assistant': [
    { icon: '💬', title: 'Klausul OJK 15/2026',            time_id: '1j lalu',      time_en: '1h ago' },
    { icon: '💬', title: 'Analisis kontrak PKS',           time_id: 'Kemarin',      time_en: 'Yesterday' },
    { icon: '💬', title: 'Force majeure & siber',          time_id: '2 hari lalu',  time_en: '2 days ago' },
    { icon: '💬', title: 'POJK 2024 tenor pembayaran',     time_id: '3 hari lalu',  time_en: '3 days ago' },
  ],
  '/research': [
    { icon: '🔍', title: 'Klausul penalti OJK 2026',       time_id: '45m lalu',     time_en: '45m ago' },
    { icon: '🔍', title: 'Yurisdiksi BANI vs PN',          time_id: '3j lalu',      time_en: '3h ago' },
    { icon: '🔍', title: 'Standar liability BUMN',         time_id: 'Kemarin',      time_en: 'Yesterday' },
    { icon: '🔍', title: 'Force majeure pandemi',          time_id: '2 hari lalu',  time_en: '2 days ago' },
  ],
  '/radar': [
    { icon: '📡', title: 'POJK No. 15/2026',               time_id: '30m lalu',     time_en: '30m ago' },
    { icon: '📡', title: 'Permenkumham No. 3/2026',        time_id: '2j lalu',      time_en: '2h ago' },
    { icon: '📡', title: 'Kepmen ESDM No. 8/2026',         time_id: '5j lalu',      time_en: '5h ago' },
    { icon: '📡', title: 'Permen ATR/BPN No. 2/2026',      time_id: 'Kemarin',      time_en: 'Yesterday' },
  ],
  '/matters': [
    { icon: '📁', title: 'PKS-Turbin-2026 · Review',       time_id: '1j lalu',      time_en: '1h ago' },
    { icon: '📁', title: 'NDA Vendor ABC · Negosiasi',     time_id: '3j lalu',      time_en: '3h ago' },
    { icon: '📁', title: 'Audit Kepatuhan Q4 2025',        time_id: 'Kemarin',      time_en: 'Yesterday' },
    { icon: '📁', title: 'Sengketa Distribusi Jawa',       time_id: '2 hari lalu',  time_en: '2 days ago' },
  ],
};

/* ── Render history items HTML ──────────────────── */
function renderHistoryItems(path) {
  const items = HISTORY_DATA[path] || HISTORY_DATA['/'];
  return items.map(item => `
    <div class="sh-item">
      <span class="sh-ico">${item.icon}</span>
      <span class="sh-title">${item.title}</span>
      <span class="sh-time" data-id="${item.time_id}" data-en="${item.time_en}">${item.time_id}</span>
    </div>
  `).join('');
}

/* ── Session state (resets on page reload) ──────── */
let _minimized = false;

/* ── Render sidebar ─────────────────────────────── */
export function renderSidebar(activePath) {
  const aside = document.createElement('aside');
  aside.className = 'sidebar';

  if (_minimized) aside.classList.add('minimized');

  aside.innerHTML = `
    <div class="sb-head">
      <img class="sb-logo" src="${LOGO_SRC}" alt="Lexia"/>
      <button class="icon-btn" id="sbCollapse" title="Collapse" aria-label="Collapse sidebar">
        <svg class="sb-collapse-ico" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.7"
             style="transform:${_minimized ? 'rotate(180deg)' : 'rotate(0deg)'};transition:transform .22s ease">
          <path d="M8 2L4 6l4 4"/>
        </svg>
      </button>
    </div>

    <div class="sb-user">
      <div class="sb-av">AS</div>
      <div class="sb-user-text">
        <div class="sb-name">Ahmad Santoso</div>
        <div class="sb-role" data-id="Divisi Hukum · Perusahaan" data-en="Legal Division · Company">Divisi Hukum · Perusahaan</div>
      </div>
      <svg class="sb-user-caret" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6"
           style="color:var(--t4);margin-left:auto;flex-shrink:0"><path d="M2 4l3 3 3-3"/></svg>
    </div>

    <nav class="sb-nav">
      ${NAV_ITEMS.map(section => `
        <div class="nav-lbl" data-id="${section.group.id}" data-en="${section.group.en}">${section.group.id}</div>
        ${section.items.map(item => `
          <div class="nav-item${item.path === activePath ? ' active' : ''}" data-navigate="${item.path}" title="${item.id}" role="button" tabindex="0">
            <span class="nav-ico"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${item.icon}</svg></span>
            <span class="nav-label" data-id="${item.id}" data-en="${item.en}">${item.id}</span>
            ${item.dot ? '<span class="nav-dot"></span>' : ''}
          </div>
        `).join('')}
      `).join('')}
    </nav>

    <div class="sb-footer">
      <div class="bt-row">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"
             style="color:var(--t3);flex-shrink:0"><circle cx="8" cy="8" r="6"/><path d="M2 8h12M8 2c-2 2.5-2 9.5 0 12M8 2c2 2.5 2 9.5 0 12"/></svg>
        <span class="bt-lbl" data-id="Bahasa" data-en="Language">Bahasa</span>
        <div class="lang-toggle sb-lang-toggle">
          <button class="lang-btn active" id="btnID" data-lang="id">ID</button>
          <button class="lang-btn" id="btnEN" data-lang="en">EN</button>
        </div>
      </div>
      <div class="bt-row">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"
             style="color:var(--t3);flex-shrink:0"><rect x="4" y="7" width="8" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2"/></svg>
        <span class="bt-lbl" data-id="Mode Benteng" data-en="Fortress Mode">Mode Benteng</span>
        <div class="toggle" id="bentengToggle" role="switch" aria-checked="false"></div>
      </div>
      <div class="nav-item out" data-navigate="/login" title="Keluar" role="button" tabindex="0" aria-label="Sign out">
        <span class="nav-ico"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 14H3a1 1 0 01-1-1V3a1 1 0 011-1h3M11 11l3-3-3-3M7 8h7"/></svg></span>
        <span class="nav-label" data-id="Keluar" data-en="Sign Out">Keluar</span>
      </div>
    </div>
  `;

  /* ── Delegated navigation for [data-navigate] ── */
  aside.addEventListener('click', (e) => {
    const nav = e.target.closest('[data-navigate]');
    if (nav) {
      e.preventDefault();
      if (nav.dataset.navigate === '/login') sessionStorage.removeItem('lexia-auth');
      window.navigate(nav.dataset.navigate);
    }
  });

  /* ── Keyboard navigation for [data-navigate] ── */
  aside.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const nav = e.target.closest('[data-navigate]');
      if (nav) {
        e.preventDefault();
        if (nav.dataset.navigate === '/login') sessionStorage.removeItem('lexia-auth');
        window.navigate(nav.dataset.navigate);
      }
    }
  });

  /* ── Collapse / minimize toggle ── */
  const collapseBtn = aside.querySelector('#sbCollapse');
  const collapseIco = aside.querySelector('.sb-collapse-ico');

  collapseBtn.addEventListener('click', () => {
    _minimized = !_minimized;
    aside.classList.toggle('minimized', _minimized);
    collapseIco.style.transform = _minimized ? 'rotate(180deg)' : 'rotate(0deg)';
  });

  /* ── Language toggle ── */
  const langBtns = aside.querySelectorAll('[data-lang]');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.setLang) window.setLang(btn.dataset.lang);
    });
  });

  /* ── History toggle interaction ── */
  const toggle = aside.querySelector('#shToggle');
  const history = aside.querySelector('#sbHistory');
  const chevron = aside.querySelector('#shChevron');

  if (toggle && history) {
    toggle.addEventListener('click', () => {
      const collapsed = history.classList.toggle('collapsed');
      chevron.style.transform = collapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
    });
  }

  return aside;
}
