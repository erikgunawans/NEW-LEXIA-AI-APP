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
      { path: '/research',   id: 'Riset & Temuan',      en: 'Research & Findings',  icon: '<path d="M6.5 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM11.5 11.5l3 3"/>' },
      { path: '/radar',      id: 'Radar Regulasi',      en: 'Regulatory Radar',     icon: '<path d="M8 2a6 6 0 100 12A6 6 0 008 2zM8 5v3.5l2.5 1.5"/>', dot: true },
    ]
  },
  {
    group: { id: 'Administrasi', en: 'Administration' },
    items: [
      { path: '/matters',    id: 'Matter & Audit',      en: 'Matter & Audit',       icon: '<path d="M2 4h12v10H2zM5 4V3a3 3 0 016 0v1"/>' },
    ]
  }
];

/* ── Contextual history data per route ──────────── */
const HISTORY_DATA = {
  '/': [
    { icon: '📊', title: 'Laporan Eksekutif Q4 2025',      time_id: '2j lalu',      time_en: '2h ago' },
    { icon: '📄', title: 'KPI Legal Review Jan 2026',      time_id: '5j lalu',      time_en: '5h ago' },
    { icon: '🔍', title: 'Audit Kepatuhan Februari',       time_id: 'Kemarin',      time_en: 'Yesterday' },
    { icon: '📋', title: 'Brief PLN Q1 2026',              time_id: '2 hari lalu',  time_en: '2 days ago' },
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
    { icon: '⇄',  title: 'Standar PLN vs OJK POJK',        time_id: '4 hari lalu',  time_en: '4 days ago' },
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
      <button class="icon-btn" id="sbCollapse" title="Collapse">
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
        <div class="sb-role" data-id="Divisi Hukum · PLN" data-en="Legal Division · PLN">Divisi Hukum · PLN</div>
      </div>
      <svg class="sb-user-caret" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6"
           style="color:var(--t4);margin-left:auto;flex-shrink:0"><path d="M2 4l3 3 3-3"/></svg>
    </div>

    <nav class="sb-nav">
      ${NAV_ITEMS.map(section => `
        <div class="nav-lbl" data-id="${section.group.id}" data-en="${section.group.en}">${section.group.id}</div>
        ${section.items.map(item => `
          <div class="nav-item${item.path === activePath ? ' active' : ''}" onclick="window.navigate('${item.path}')" title="${item.id}">
            <span class="nav-ico"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7">${item.icon}</svg></span>
            <span class="nav-label" data-id="${item.id}" data-en="${item.en}">${item.id}</span>
            ${item.dot ? '<span class="nav-dot"></span>' : ''}
          </div>
        `).join('')}
      `).join('')}
    </nav>

    <!-- ── Conversation History ── -->
    <div class="sb-history collapsed" id="sbHistory">
      <div class="sh-hd" id="shToggle">
        <div style="display:flex;align-items:center;gap:7px">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" style="color:var(--t5);flex-shrink:0"><circle cx="8" cy="8" r="6"/><path d="M8 5v3.2l2 1.4"/></svg>
          <span class="sh-lbl" data-id="Riwayat Percakapan" data-en="Conversation History">Riwayat Percakapan</span>
        </div>
        <svg class="sh-chevron" id="shChevron" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.7" style="transform:rotate(-90deg)"><path d="M2 3.5l3 3 3-3"/></svg>
      </div>
      <div class="sh-list" id="shList">
        ${renderHistoryItems(activePath)}
      </div>
    </div>

    <div class="sb-footer">
      <div class="bt-row">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"
             style="color:var(--t3);flex-shrink:0"><rect x="4" y="7" width="8" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2"/></svg>
        <span class="bt-lbl" data-id="Mode Benteng" data-en="Fortress Mode">Mode Benteng</span>
        <div class="toggle" id="bentengToggle"></div>
      </div>
      <div class="nav-item out" onclick="window.navigate('/login')" title="Keluar">
        <span class="nav-ico"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 14H3a1 1 0 01-1-1V3a1 1 0 011-1h3M11 11l3-3-3-3M7 8h7"/></svg></span>
        <span class="nav-label" data-id="Keluar" data-en="Sign Out">Keluar</span>
      </div>
    </div>
  `;

  /* ── Collapse / minimize toggle ── */
  const collapseBtn = aside.querySelector('#sbCollapse');
  const collapseIco = aside.querySelector('.sb-collapse-ico');

  collapseBtn.addEventListener('click', () => {
    _minimized = !_minimized;
    aside.classList.toggle('minimized', _minimized);
    collapseIco.style.transform = _minimized ? 'rotate(180deg)' : 'rotate(0deg)';
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
