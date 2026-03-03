export function render(container) {
  container.innerHTML = `
  <div class="main-scroll">
    <div class="ph">
      <div>
        <div class="ph-title" data-id="Dasbor <em>Utama</em>" data-en="Main <em>Dashboard</em>">Dasbor <em>Utama</em></div>
        <div class="ph-sub" data-id="Kamis, 27 Februari 2026 · Divisi Hukum PLN" data-en="Thursday, 27 February 2026 · PLN Legal Division">Kamis, 27 Februari 2026 &nbsp;·&nbsp; Divisi Hukum PLN</div>
      </div>
      <div class="ph-right">
        <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" data-lang="id">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" data-lang="en">🇺🇸 EN</button>
        </div>
        <button class="btn btn-outline" data-id="+ Perkara Baru" data-en="+ New Case" data-navigate="/matters">+ Perkara Baru</button>
        <button class="btn btn-outline" title="Ekspor Laporan" data-id="↗ Ekspor" data-en="↗ Export" data-toast="Mengunduh laporan dasbor…">↗ Ekspor</button>
      </div>
    </div>

    <div class="bento">
      <!-- KPI 1 -->
      <div class="b-k1 card card-feat"><div class="cp">
        <div class="kpi-n kpi-bl">7</div>
        <div class="kpi-lbl" data-id="Perkara Aktif" data-en="Active Cases">Perkara Aktif</div>
        <div class="kpi-badge kb-up" data-id="↑ +2 minggu ini" data-en="↑ +2 this week">↑ +2 minggu ini</div>
        <svg class="spark" width="100%" height="26" viewBox="0 0 120 26" preserveAspectRatio="none">
          <defs><linearGradient id="sg1" x1="0" x2="1"><stop offset="0%" stop-color="#1967D2"/><stop offset="100%" stop-color="#47A3F3"/></linearGradient></defs>
          <polyline points="0,22 18,16 30,18 48,8 60,10 80,4 100,6 120,2" fill="none" stroke="url(#sg1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".65"/>
        </svg>
      </div></div>
      <!-- KPI 2 -->
      <div class="b-k2 card"><div class="cp">
        <div class="kpi-n kpi-ink">23</div>
        <div class="kpi-lbl" data-id="Total Dokumen" data-en="Total Documents">Total Dokumen</div>
        <div class="kpi-badge kb-bl" data-id="5 baru hari ini" data-en="5 new today">5 baru hari ini</div>
        <svg class="spark" width="100%" height="26" viewBox="0 0 120 26" preserveAspectRatio="none">
          <polyline points="0,20 18,14 30,16 48,12 60,14 80,8 100,10 120,6" fill="none" stroke="rgba(25,103,210,.25)" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div></div>
      <!-- KPI 3 -->
      <div class="b-k3 card"><div class="cp">
        <div class="kpi-n kpi-am">3</div>
        <div class="kpi-lbl" data-id="Peringatan Aktif" data-en="Active Warnings">Peringatan Aktif</div>
        <div class="kpi-badge kb-warn" data-id="⚠ 2 batas waktu" data-en="⚠ 2 deadlines">⚠ 2 batas waktu</div>
        <svg class="spark" width="100%" height="26" viewBox="0 0 120 26" preserveAspectRatio="none">
          <polyline points="0,12 18,20 30,10 48,18 60,6 80,16 100,8 120,4" fill="none" stroke="rgba(201,112,0,.30)" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div></div>
      <!-- KPI 4 -->
      <div class="b-k4 card"><div class="cp">
        <div class="kpi-n kpi-ink kpi-n-sm">2</div>
        <div class="kpi-lbl" data-id="Update Regulasi" data-en="Regulation Updates">Update Regulasi</div>
        <div class="kpi-badge kb-warn" data-id="1 dampak tinggi" data-en="1 high impact">1 dampak tinggi</div>
        <svg class="spark" width="100%" height="26" viewBox="0 0 120 26" preserveAspectRatio="none">
          <polyline points="0,18 18,14 30,20 48,10 60,14 80,6 100,8 120,4" fill="none" stroke="rgba(2,120,190,.28)" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div></div>

      <!-- RADAR -->
      <div class="b-radar card"><div class="cp">
        <div class="ch">
          <div><div class="ch-title" data-id="Radar Regulasi" data-en="Regulatory Radar">Radar Regulasi</div>
               <div class="ch-sub" data-id="Pembaruan real-time dari sumber terpercaya" data-en="Real-time updates from trusted sources">Pembaruan real-time dari sumber terpercaya</div></div>
          <div class="dash-row-actions">
            <span class="live"><span class="live-dot"></span>Live</span>
            <a class="ch-link" data-id="Semua →" data-en="All →" data-navigate="/radar">Semua →</a>
          </div>
        </div>
        <div class="row-item"><div class="reg-src bl">OJK</div>
          <div class="reg-body"><div class="reg-name" data-id="Peraturan OJK No.15/2026" data-en="OJK Regulation No.15/2026">Peraturan OJK No.15/2026</div>
          <div class="reg-meta" data-id="20 Feb 2026 · 3 kontrak PLN terdampak" data-en="20 Feb 2026 · 3 PLN contracts affected">20 Feb 2026 · 3 kontrak PLN terdampak</div></div>
          <span class="badge b-red" data-id="Kritis" data-en="Critical">Kritis</span></div>
        <div class="row-item"><div class="reg-src">KMH</div>
          <div class="reg-body"><div class="reg-name" data-id="Permenkumham No.3/2026" data-en="MoLHR Regulation No.3/2026">Permenkumham No.3/2026</div>
          <div class="reg-meta" data-id="12 Feb 2026 · Tidak ada dampak langsung" data-en="12 Feb 2026 · No direct impact">12 Feb 2026 · Tidak ada dampak langsung</div></div>
          <span class="badge b-muted" data-id="Info" data-en="Info">Info</span></div>
        <div class="row-item"><div class="reg-src sky">ESD</div>
          <div class="reg-body"><div class="reg-name" data-id="Kepmen ESDM No.8/2026" data-en="ESDM Ministerial Decree No.8/2026">Kepmen ESDM No.8/2026</div>
          <div class="reg-meta" data-id="8 Feb 2026 · Review diperlukan" data-en="8 Feb 2026 · Review required">8 Feb 2026 · Review diperlukan</div></div>
          <span class="badge b-am" data-id="Sedang" data-en="Medium">Sedang</span></div>
        <div class="row-item"><div class="reg-src">BPN</div>
          <div class="reg-body"><div class="reg-name" data-id="Permen ATR/BPN No.2/2026" data-en="ATR/BPN Ministerial Reg No.2/2026">Permen ATR/BPN No.2/2026</div>
          <div class="reg-meta" data-id="1 Feb 2026 · Monitoring aktif" data-en="1 Feb 2026 · Active monitoring">1 Feb 2026 · Monitoring aktif</div></div>
          <span class="badge b-bl" data-id="Baru" data-en="New">Baru</span></div>
        <div class="dash-card-footer">
          <a class="ch-link" data-id="→ Buka Radar Regulasi penuh" data-en="→ Open full Regulatory Radar" data-navigate="/radar">→ Buka Radar Regulasi penuh</a>
        </div>
      </div></div>

      <!-- QUICK ACTIONS -->
      <div class="b-qa card"><div class="cp">
        <div class="ch"><div class="ch-title" data-id="Aksi Cepat" data-en="Quick Actions">Aksi Cepat</div></div>
        <div class="qa-grid">
          <div class="qa-tile hero" data-navigate="/drafting" role="button" tabindex="0"><span class="qa-ico">✦</span>
            <div class="qa-name" data-id="Buat Opini Legal" data-en="Create Legal Opinion">Buat Opini Legal</div>
            <div class="qa-desc" data-id="⚡ 3–5 menit" data-en="⚡ 3–5 minutes">⚡ 3–5 menit</div></div>
          <div class="qa-tile" data-navigate="/compliance" role="button" tabindex="0"><span class="qa-ico">🔍</span>
            <div class="qa-name" data-id="Cek Kepatuhan" data-en="Check Compliance">Cek Kepatuhan</div>
            <div class="qa-desc" data-id="Upload & analisis" data-en="Upload & analyze">Upload &amp; analisis</div></div>
          <div class="qa-tile" data-navigate="/research" role="button" tabindex="0"><span class="qa-ico">📚</span>
            <div class="qa-name" data-id="Cari Regulasi" data-en="Search Regulations">Cari Regulasi</div>
            <div class="qa-desc">JDIH · OJK · MA</div></div>
          <div class="qa-tile" data-navigate="/compare" role="button" tabindex="0"><span class="qa-ico">⚖️</span>
            <div class="qa-name" data-id="Bandingkan Kontrak" data-en="Compare Contracts">Bandingkan Kontrak</div>
            <div class="qa-desc" data-id="Redline otomatis" data-en="Automatic redline">Redline otomatis</div></div>
        </div>
      </div></div>

      <!-- MATTERS -->
      <div class="b-matters card"><div class="cp">
        <div class="ch"><div class="ch-title" data-id="Perkara Aktif" data-en="Active Cases">Perkara Aktif</div><a class="ch-link" data-id="Semua →" data-en="All →" data-navigate="/matters">Semua →</a></div>
        <div class="row-item"><div class="m-bar m-bar-bl"></div>
          <div class="m-body"><div class="m-name">PKS/2025/047 — Turbin</div><div class="m-meta" data-id="Review · Ahmad S." data-en="Review · Ahmad S.">Review · Ahmad S.</div></div>
          <span class="badge b-am" data-id="Review" data-en="Review">Review</span></div>
        <div class="row-item"><div class="m-bar m-bar-gr"></div>
          <div class="m-body"><div class="m-name">KSO/2026/002 — Distribusi</div><div class="m-meta" data-id="Finalisasi · Sari D." data-en="Finalizing · Sari D.">Finalisasi · Sari D.</div></div>
          <span class="badge b-gr" data-id="Aktif" data-en="Active">Aktif</span></div>
        <div class="row-item"><div class="m-bar m-bar-re"></div>
          <div class="m-body"><div class="m-name">PKS/2024/089 — Transmisi</div><div class="m-meta" data-id="Persetujuan · Budi R." data-en="Approval · Budi R.">Persetujuan · Budi R.</div></div>
          <span class="badge b-red" data-id="Urgent" data-en="Urgent">Urgent</span></div>
      </div></div>

      <!-- RECENT DOCS -->
      <div class="b-docs card"><div class="cp">
        <div class="ch"><div class="ch-title" data-id="Dokumen Terkini" data-en="Recent Documents">Dokumen Terkini</div><a class="ch-link" data-id="Semua →" data-en="All →" data-navigate="/drafting">Semua →</a></div>
        <div class="row-item"><div class="doc-ico">📄</div><span class="doc-name">PKS-Analisis-2026.pdf</span><span class="doc-age">2j</span></div>
        <div class="row-item"><div class="doc-ico">📝</div><span class="doc-name">Perjanjian-Pengadaan-003.docx</span><span class="doc-age">5j</span></div>
        <div class="row-item"><div class="doc-ico">📄</div><span class="doc-name">Delta-OJK-2026.pdf</span><span class="doc-age">1h</span></div>
        <div class="row-item"><div class="doc-ico">📋</div><span class="doc-name">Compliance-Report-Feb.pdf</span><span class="doc-age">2h</span></div>
      </div></div>

      <!-- SOURCES -->
      <div class="b-sources card"><div class="cp">
        <div class="ch"><div class="ch-title" data-id="Status Sumber" data-en="Source Status">Status Sumber</div>
          <span class="dash-source-count" data-id="5/5 aktif" data-en="5/5 active">5/5 aktif</span></div>
        <div class="row-item"><div class="src-pip sp-on"></div><span class="src-name">JDIH Nasional</span><span class="src-age">1j</span></div>
        <div class="row-item"><div class="src-pip sp-on"></div><span class="src-name">OJK Portal</span><span class="src-age">30m</span></div>
        <div class="row-item"><div class="src-pip sp-syn"></div><span class="src-name">SIPP Mahkamah Agung</span><span class="src-age">sync…</span></div>
        <div class="row-item"><div class="src-pip sp-on"></div><span class="src-name">Kemenkumham</span><span class="src-age">2j</span></div>
        <div class="row-item"><div class="src-pip sp-on"></div><span class="src-name" data-id="Dok. Internal PLN" data-en="PLN Internal Docs">Dok. Internal PLN</span><span class="src-age">live</span></div>
        <div class="validator">
          <span class="dash-validator-ico">✅</span>
          <span class="val-txt" data-id="Validator Aktif" data-en="Validator Active">Validator Aktif</span>
          <span class="val-sub" data-id="0 klaim tak terverifikasi" data-en="0 unverified claims">0 klaim tak terverifikasi</span>
        </div>
      </div></div>
    </div><!-- /bento -->
  </div><!-- /main-scroll -->
  `;
}

export function initInteractions(root) {
  // Delegated handlers
  root.addEventListener('click', e => {
    const lang = e.target.closest('[data-lang]');
    if (lang) { if (window.setLang) window.setLang(lang.dataset.lang); return; }
    const nav = e.target.closest('[data-navigate]');
    if (nav) { e.preventDefault(); window.navigate(nav.dataset.navigate); return; }
    const toast = e.target.closest('[data-toast]');
    if (toast) { window.showToast(toast.dataset.toast); return; }
  });

  if (typeof window.setLang === 'function') {
    window.setLang(localStorage.getItem('lexia-lang') || 'id');
  }
}
