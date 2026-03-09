export const chatBar = false;

/* ── Shared simulated database data ─────────────────────── */
const REGULATION_DATABASES = [
  {
    id: 'db-1',
    name_id: 'Regulasi OJK 2020–2026',
    name_en: 'OJK Regulations 2020–2026',
    desc_id: 'Kumpulan lengkap POJK, SEOJK, dan peraturan OJK terkait sektor keuangan.',
    desc_en: 'Complete collection of POJK, SEOJK, and OJK regulations for the financial sector.',
    docCount: 342, type: 'default', updated: '28 Feb 2026', createdBy: 'Lexia AI', size: '1.2 GB'
  },
  {
    id: 'db-2',
    name_id: 'JDIH Nasional',
    name_en: 'National JDIH',
    desc_id: 'Jaringan Dokumentasi dan Informasi Hukum — UU, PP, Perpres, dan Permen.',
    desc_en: 'Legal Documentation and Information Network — Laws, Gov. Regulations, Presidential & Ministerial Decrees.',
    docCount: 1284, type: 'default', updated: '27 Feb 2026', createdBy: 'Lexia AI', size: '4.7 GB'
  },
  {
    id: 'db-3',
    name_id: 'Putusan Mahkamah Agung',
    name_en: 'Supreme Court Rulings',
    desc_id: 'Yurisprudensi dan putusan kasasi dari Mahkamah Agung RI 2015–2026.',
    desc_en: 'Jurisprudence and cassation rulings from the Supreme Court of Indonesia 2015–2026.',
    docCount: 876, type: 'default', updated: '25 Feb 2026', createdBy: 'Lexia AI', size: '3.1 GB'
  },
  {
    id: 'db-4',
    name_id: 'Standar Internal Perusahaan',
    name_en: 'Company Internal Standards',
    desc_id: 'Kebijakan pengadaan, kontrak, kepatuhan, dan tata kelola internal perusahaan.',
    desc_en: 'Procurement, contract, compliance, and internal governance policies of the company.',
    docCount: 156, type: 'default', updated: '26 Feb 2026', createdBy: 'Lexia AI', size: '580 MB'
  },
  {
    id: 'db-5',
    name_id: 'Kontrak Vendor 2025–2026',
    name_en: 'Vendor Contracts 2025–2026',
    desc_id: 'Database kontrak vendor aktif termasuk PKS, KSO, dan NDA.',
    desc_en: 'Active vendor contract database including PKS, KSO, and NDA agreements.',
    docCount: 47, type: 'custom', updated: '1 Mar 2026', createdBy: 'Ahmad Santoso', size: '210 MB'
  },
  {
    id: 'db-6',
    name_id: 'Audit & Temuan Hukum Q4 2025',
    name_en: 'Legal Audit & Findings Q4 2025',
    desc_id: 'Laporan audit internal, temuan kepatuhan, dan rekomendasi tindak lanjut.',
    desc_en: 'Internal audit reports, compliance findings, and follow-up recommendations.',
    docCount: 23, type: 'custom', updated: '22 Feb 2026', createdBy: 'Ahmad Santoso', size: '95 MB'
  }
];

const SAMPLE_DOCS = {
  'db-1': [
    { name: 'POJK No. 12/2024 — Tata Kelola Bank Umum', size: '2.4 MB', date: '15 Jan 2024' },
    { name: 'POJK No. 15/2026 — Penyelenggaraan Fintech', size: '3.1 MB', date: '10 Feb 2026' },
    { name: 'SEOJK No. 8/2025 — Pelaporan Berkala LJK', size: '1.8 MB', date: '20 Jun 2025' },
    { name: 'POJK No. 3/2023 — Manajemen Risiko Operasional', size: '2.0 MB', date: '5 Mar 2023' },
    { name: 'POJK No. 7/2025 — Perlindungan Konsumen', size: '1.5 MB', date: '12 Sep 2025' },
  ],
  'db-2': [
    { name: 'UU No. 11/2020 — Cipta Kerja (Omnibus Law)', size: '8.4 MB', date: '2 Nov 2020' },
    { name: 'PP No. 35/2021 — PKWT, Alih Daya, dan PHK', size: '3.2 MB', date: '2 Feb 2021' },
    { name: 'Perpres No. 12/2025 — Percepatan Transisi Energi', size: '1.9 MB', date: '15 Mar 2025' },
    { name: 'UU No. 30/2009 — Ketenagalistrikan', size: '4.1 MB', date: '23 Sep 2009' },
    { name: 'PP No. 14/2012 — Kegiatan Usaha Penyediaan Tenaga Listrik', size: '2.7 MB', date: '17 Jan 2012' },
  ],
  'db-3': [
    { name: 'Putusan MA No. 1892K/Pdt/2025', size: '1.1 MB', date: '8 Oct 2025' },
    { name: 'Putusan MA No. 445K/TUN/2024', size: '890 KB', date: '22 Jun 2024' },
    { name: 'Putusan PK No. 78/PK/Pdt/2025', size: '1.3 MB', date: '15 Nov 2025' },
  ],
  'db-4': [
    { name: 'Co-STD-2025 — Standar Pengadaan Barang & Jasa', size: '5.2 MB', date: '1 Jan 2025' },
    { name: 'Co-GOV-2025 — Tata Kelola Perusahaan', size: '3.8 MB', date: '15 Jan 2025' },
    { name: 'Co-CPL-2025 — Pedoman Kepatuhan Internal', size: '2.1 MB', date: '1 Feb 2025' },
  ],
  'db-5': [
    { name: 'PKS-Turbin-Gas-Siemens-2025.pdf', size: '2.4 MB', date: '10 Jan 2025' },
    { name: 'KSO-Distribusi-Jawa-2026.docx', size: '1.1 MB', date: '5 Feb 2026' },
    { name: 'NDA-Vendor-IT-Feb2026.pdf', size: '450 KB', date: '14 Feb 2026' },
  ],
  'db-6': [
    { name: 'Laporan-Audit-Internal-Q4-2025.pdf', size: '6.3 MB', date: '5 Jan 2026' },
    { name: 'Temuan-Kepatuhan-OJK-2025.pdf', size: '2.8 MB', date: '18 Jan 2026' },
  ],
};

window._lexiaRegDatabases = REGULATION_DATABASES;

export function render(container) {
  container.innerHTML = `
  <div class="main-scroll">
    <div class="ph">
      <div>
        <div class="ph-title" data-id="Riset &amp; <em>Temuan</em>" data-en="Research &amp; <em>Findings</em>">Riset &amp; <em>Temuan</em></div>
        <div class="ph-sub" data-id="Telusuri regulasi, putusan, dan dokumen internal PLN dengan pencarian semantik berbasis AI" data-en="Search regulations, rulings, and PLN internal documents with AI-powered semantic search">Telusuri regulasi, putusan, dan dokumen internal PLN dengan pencarian semantik berbasis AI</div>
      </div>
      <div class="ph-right">
        <button class="btn btn-outline" data-id="📋 Riwayat Riset" data-en="📋 Research History" data-toast="Riwayat riset segera hadir">📋 Riwayat Riset</button>
        <button class="btn btn-bl" data-id="✨ Riset Mendalam AI" data-en="✨ AI Deep Research" data-toast="Memulai riset mendalam AI…">✨ Riset Mendalam AI</button>
      </div>
    </div>

    <div class="search-bar-big">
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" class="search-icon-bl"><circle cx="6.5" cy="6.5" r="4.5"/><path d="M11.5 11.5l3 3"/></svg>
      <input type="text" value=""
        aria-label="Search regulations"
        data-placeholder-id="Cari regulasi, klausul, putusan, atau tanyakan pertanyaan hukum…"
        data-placeholder-en="Search regulations, clauses, rulings, or ask a legal question…"
        placeholder="Cari regulasi, klausul, putusan, atau tanyakan pertanyaan hukum…"/>
      <div class="flex-row-gap6">
        <button class="btn btn-outline btn-sm" data-id="Filter" data-en="Filter" data-toast="Filter segera hadir">Filter</button>
        <button class="btn btn-bl btn-sm-wide" data-id="Cari" data-en="Search">Cari</button>
      </div>
    </div>

    <div class="filter-chip-row">
      <span class="filter-chip active" role="button" tabindex="0" data-id="Semua Sumber" data-en="All Sources">Semua Sumber</span>
      <span class="filter-chip" role="button" tabindex="0" data-id="Regulasi OJK" data-en="OJK Regulations">Regulasi OJK</span>
      <span class="filter-chip" role="button" tabindex="0" data-id="JDIH" data-en="JDIH">JDIH</span>
      <span class="filter-chip" role="button" tabindex="0" data-id="Putusan MA" data-en="Supreme Court">Putusan MA</span>
      <span class="filter-chip" role="button" tabindex="0" data-id="Internal Perusahaan" data-en="Company Internal">Internal Perusahaan</span>
      <span class="filter-chip" role="button" tabindex="0" data-id="2025–2026" data-en="2025–2026">2025–2026</span>
    </div>

    <!-- ═══════════ REGULATION DATABASE SECTION ═══════════ -->
    <div class="regdb-section" id="regdbSection">
      <div class="regdb-header">
        <div>
          <div class="regdb-title" data-id="Database Regulasi" data-en="Regulation Databases">Database Regulasi</div>
          <div class="regdb-subtitle" data-id="Kelola sumber data regulasi internal dan publik yang digunakan seluruh modul" data-en="Manage internal and public regulation data sources used across all modules">Kelola sumber data regulasi internal dan publik yang digunakan seluruh modul</div>
        </div>
        <div class="flex-row-gap8-center">
          <div class="regdb-filter-pills">
            <span class="regdb-pill active" data-filter="all" data-id="Semua" data-en="All">Semua</span>
            <span class="regdb-pill" data-filter="default" data-id="Lexia Default" data-en="Lexia Default">Lexia Default</span>
            <span class="regdb-pill" data-filter="custom" data-id="Kustom" data-en="Custom">Kustom</span>
          </div>
          <button class="btn btn-bl btn-sm-wide" data-id="+ Database Baru" data-en="+ New Database" data-action="createNewDatabase">+ Database Baru</button>
        </div>
      </div>
      <div class="regdb-grid" id="regdbGrid">
        <!-- Rendered by JS -->
      </div>
    </div>

    <div class="empty-state empty-state-lg">
      <div class="empty-ico">🔍</div>
      <div class="empty-title" data-id="Mulai riset hukum Anda" data-en="Start your legal research">Mulai riset hukum Anda</div>
      <div class="empty-sub" data-id="Ketik kata kunci, nomor regulasi, atau pertanyaan hukum di kolom pencarian di atas." data-en="Type a keyword, regulation number, or legal question in the search bar above.">Ketik kata kunci, nomor regulasi, atau pertanyaan hukum di kolom pencarian di atas.</div>
    </div>
  </div>

  <!-- ═══════════ DATABASE DETAIL MODAL ═══════════ -->
  <div class="loading-overlay regdb-modal-overlay" id="regdbModal" style="display:none">
    <div class="regdb-modal" role="dialog" aria-modal="true">
      <div class="regdb-modal-header">
        <div>
          <div class="regdb-modal-title" id="regdbModalTitle">—</div>
          <div class="regdb-modal-sub" id="regdbModalSub">—</div>
        </div>
        <div class="modal-header-actions">
          <span class="badge" id="regdbModalBadge">—</span>
          <button class="btn btn-outline btn-xs" data-action="closeDbModal" data-id="✕ Tutup" data-en="✕ Close">✕ Tutup</button>
        </div>
      </div>

      <div class="regdb-modal-stats" id="regdbModalStats">
        <div class="regdb-mstat">
          <div class="regdb-mstat-n" id="regdbModalDocCount">0</div>
          <div class="regdb-mstat-lbl" data-id="Dokumen" data-en="Documents">Dokumen</div>
        </div>
        <div class="regdb-mstat">
          <div class="regdb-mstat-n" id="regdbModalSize">—</div>
          <div class="regdb-mstat-lbl" data-id="Ukuran" data-en="Size">Ukuran</div>
        </div>
        <div class="regdb-mstat">
          <div class="regdb-mstat-n" id="regdbModalUpdated">—</div>
          <div class="regdb-mstat-lbl" data-id="Terakhir Diperbarui" data-en="Last Updated">Terakhir Diperbarui</div>
        </div>
        <div class="regdb-mstat">
          <div class="regdb-mstat-n" id="regdbModalCreator">—</div>
          <div class="regdb-mstat-lbl" data-id="Dibuat Oleh" data-en="Created By">Dibuat Oleh</div>
        </div>
      </div>

      <div class="regdb-modal-toolbar">
        <div class="flex-row-gap6">
          <button class="btn btn-bl btn-xs-toolbar" data-id="+ Tambah Dokumen" data-en="+ Add Document" data-toast="Upload dokumen ke database segera hadir">+ Tambah Dokumen</button>
          <button class="btn btn-outline btn-xs-toolbar" data-id="⬇ Ekspor Database" data-en="⬇ Export Database" data-toast="Mengunduh database…">⬇ Ekspor Database</button>
        </div>
        <input type="text" class="regdb-modal-search"
          data-placeholder-id="Cari dokumen dalam database…"
          data-placeholder-en="Search documents in database…"
          placeholder="Cari dokumen dalam database…"/>
      </div>

      <div class="regdb-modal-body" id="regdbModalBody">
      </div>

      <div class="regdb-modal-footer">
        <div class="footer-note" data-id="Database ini digunakan oleh Riset, Perbandingan, dan Kepatuhan." data-en="This database is used by Research, Comparison, and Compliance.">Database ini digunakan oleh Riset, Perbandingan, dan Kepatuhan.</div>
        <div class="flex-row-gap6">
          <button class="btn btn-outline btn-xs btn-danger-outline" id="regdbModalDeleteBtn" data-id="🗑 Hapus Database" data-en="🗑 Delete Database" data-action="deleteDatabase">🗑 Hapus Database</button>
          <button class="btn btn-bl btn-xs-wide" data-action="closeDbModal" data-id="Selesai" data-en="Done">Selesai</button>
        </div>
      </div>
    </div>
  </div>
  `;
}

export function initInteractions(root) {
  /* ── Delegated click handler for all data-* attributes ── */
  root.addEventListener('click', e => {
    const lang = e.target.closest('[data-lang]');
    if (lang) { if (window.setLang) window.setLang(lang.dataset.lang); return; }
    const toast = e.target.closest('[data-toast]');
    if (toast) { window.showToast(toast.dataset.toast); return; }
    const action = e.target.closest('[data-action]');
    if (action) {
      const act = action.dataset.action;
      if (act === 'openDbModal') openDbModal(action.dataset.dbId);
      else if (act === 'closeDbModal') closeDbModal();
      else if (act === 'createNewDatabase') createNewDatabase();
      else if (act === 'deleteDatabase') deleteDatabase();
      return;
    }
  });

  // Filter chips interaction
  root.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      root.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  // Search input interactions
  const ci = root.querySelector('.search-bar-big input');
  if (ci) {
    ci.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) e.preventDefault();
    });
  }
  const sb = root.querySelector('.btn-bl[data-id="Cari"]');
  if (sb) {
    sb.addEventListener('click', function() {
      if (ci && ci.value.trim()) {
          ci.value = '';
          ci.focus();
      }
    });
  }

  // ── Database card rendering ──────────────────────
  function renderDatabaseCards(filter) {
    filter = filter || 'all';
    const grid = document.getElementById('regdbGrid');
    if (!grid) return;
    const lang = localStorage.getItem('lexia-lang') || 'id';
    const dbs = window._lexiaRegDatabases || [];
    const filtered = filter === 'all' ? dbs : dbs.filter(db => db.type === filter);

    grid.innerHTML = filtered.map(db => {
      const name = lang === 'en' ? db.name_en : db.name_id;
      const desc = lang === 'en' ? db.desc_en : db.desc_id;
      const isDefault = db.type === 'default';
      const badgeClass = isDefault ? 'b-bl' : 'b-gr';
      const badgeText_id = isDefault ? 'Lexia Default' : 'Kustom';
      const badgeText_en = isDefault ? 'Lexia Default' : 'Custom';
      const docsLabel = lang === 'en' ? 'docs' : 'dokumen';
      const typeClass = isDefault ? 'type-default' : 'type-custom';

      return `
        <div class="regdb-card ${typeClass}" data-action="openDbModal" data-db-id="${db.id}">
          <div class="regdb-card-top">
            <div class="regdb-card-icon">${isDefault ? '📚' : '📁'}</div>
            <span class="badge ${badgeClass}" data-id="${badgeText_id}" data-en="${badgeText_en}">${lang === 'en' ? badgeText_en : badgeText_id}</span>
          </div>
          <div class="regdb-card-name" data-id="${db.name_id}" data-en="${db.name_en}">${name}</div>
          <div class="regdb-card-desc" data-id="${db.desc_id}" data-en="${db.desc_en}">${desc}</div>
          <div class="regdb-card-meta">
            <span style="display:inline-flex;align-items:center;gap:3px">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 13V3h7l3 3v7H3zM9.5 3v3H13"/></svg>
              ${db.docCount} <span data-id="dokumen" data-en="docs">${docsLabel}</span>
            </span>
            <span>${db.size}</span>
            <span style="margin-left:auto">${db.updated}</span>
          </div>
        </div>`;
    }).join('');

    if (window.setLang) window.setLang(lang);
  }

  // ── Database filter pills ──────────────────────
  root.querySelectorAll('.regdb-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      root.querySelectorAll('.regdb-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderDatabaseCards(pill.getAttribute('data-filter'));
    });
  });

  // ── Modal document list rendering ──────────────
  function renderModalDocList(db) {
    const body = document.getElementById('regdbModalBody');
    if (!body) return;
    const docs = SAMPLE_DOCS[db.id] || [];

    if (docs.length === 0) {
      body.innerHTML = `
        <div class="empty-state empty-state-md">
          <div class="empty-ico empty-ico-sm">📂</div>
          <div class="empty-title empty-title-sm" data-id="Database kosong" data-en="Database is empty">Database kosong</div>
          <div class="empty-sub" data-id="Tambahkan dokumen untuk memulai." data-en="Add documents to get started.">Tambahkan dokumen untuk memulai.</div>
        </div>`;
      return;
    }

    body.innerHTML = docs.map(doc => `
      <div class="regdb-doc-row">
        <span class="doc-icon-emoji">${doc.name.endsWith('.pdf') ? '📄' : '📝'}</span>
        <div class="doc-info-flex">
          <div class="regdb-doc-name">${doc.name}</div>
          <div class="regdb-doc-meta">${doc.size} · ${doc.date}</div>
        </div>
        <button class="btn btn-outline btn-xs-view" data-id="Lihat" data-en="View" data-toast="Membuka dokumen…">Lihat</button>
        <button class="btn btn-outline btn-xs-icon btn-danger-outline" data-toast="Dokumen dihapus dari database (simulasi)">✕</button>
      </div>
    `).join('');
  }

  // ── Open / Close modal ─────────────────────────
  let currentDbId = null;

  function openDbModal(dbId) {
    const dbs = window._lexiaRegDatabases || [];
    const db = dbs.find(d => d.id === dbId);
    if (!db) return;
    currentDbId = dbId;

    const lang = localStorage.getItem('lexia-lang') || 'id';
    document.getElementById('regdbModalTitle').textContent = lang === 'en' ? db.name_en : db.name_id;
    document.getElementById('regdbModalSub').textContent = lang === 'en' ? db.desc_en : db.desc_id;

    const badge = document.getElementById('regdbModalBadge');
    badge.className = 'badge ' + (db.type === 'default' ? 'b-bl' : 'b-gr');
    badge.textContent = db.type === 'default' ? 'Lexia Default' : (lang === 'en' ? 'Custom' : 'Kustom');

    document.getElementById('regdbModalDocCount').textContent = db.docCount;
    document.getElementById('regdbModalSize').textContent = db.size;
    document.getElementById('regdbModalUpdated').textContent = db.updated;
    document.getElementById('regdbModalCreator').textContent = db.createdBy;

    const delBtn = document.getElementById('regdbModalDeleteBtn');
    if (delBtn) delBtn.style.display = db.type === 'default' ? 'none' : '';

    renderModalDocList(db);

    const modal = document.getElementById('regdbModal');
    if (modal) modal.style.display = 'flex';
    if (window.setLang) window.setLang(lang);
  }
  window.openDbModal = openDbModal;

  function closeDbModal() {
    const modal = document.getElementById('regdbModal');
    if (modal) modal.style.display = 'none';
    currentDbId = null;
  }
  window.closeDbModal = closeDbModal;

  // Close modal on overlay click
  const modalOverlay = document.getElementById('regdbModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) closeDbModal();
    });
  }

  // ── Create new database ────────────────────────
  function createNewDatabase() {
    const lang = localStorage.getItem('lexia-lang') || 'id';
    const dbs = window._lexiaRegDatabases || [];
    const newId = 'db-' + (dbs.length + 1);
    dbs.push({
      id: newId,
      name_id: 'Database Baru',
      name_en: 'New Database',
      desc_id: 'Database kustom baru — tambahkan dokumen untuk memulai.',
      desc_en: 'New custom database — add documents to get started.',
      docCount: 0, type: 'custom', updated: '3 Mar 2026', createdBy: 'Ahmad Santoso', size: '0 MB'
    });
    SAMPLE_DOCS[newId] = [];
    const activeFilter = root.querySelector('.regdb-pill.active');
    renderDatabaseCards(activeFilter ? activeFilter.getAttribute('data-filter') : 'all');
    window.showToast(lang === 'en' ? 'New database created!' : 'Database baru berhasil dibuat!');
  }
  window.createNewDatabase = createNewDatabase;

  // ── Delete database ────────────────────────────
  function deleteDatabase() {
    if (!currentDbId) return;
    const lang = localStorage.getItem('lexia-lang') || 'id';
    const dbs = window._lexiaRegDatabases || [];
    const idx = dbs.findIndex(d => d.id === currentDbId);
    if (idx === -1) return;
    const db = dbs[idx];
    if (db.type === 'default') return;
    dbs.splice(idx, 1);
    delete SAMPLE_DOCS[currentDbId];
    closeDbModal();
    const activeFilter = root.querySelector('.regdb-pill.active');
    renderDatabaseCards(activeFilter ? activeFilter.getAttribute('data-filter') : 'all');
    window.showToast(lang === 'en' ? 'Database deleted' : 'Database dihapus');
  }
  window.deleteDatabase = deleteDatabase;

  // ── Initial render ─────────────────────────────
  renderDatabaseCards();

  if (typeof window.setLang === 'function') {
    window.setLang(localStorage.getItem('lexia-lang') || 'id');
  }
}
