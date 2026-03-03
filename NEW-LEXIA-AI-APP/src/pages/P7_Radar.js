export function render(container) {
  container.innerHTML = `
  <div class="main-scroll">
    <div class="ph">
      <div>
        <div class="ph-title" data-id="Radar <em>Regulasi</em>" data-en="Regulatory <em>Radar</em>">Radar <em>Regulasi</em></div>
        <div class="ph-sub" data-id="Pemantauan real-time perubahan regulasi dan analisis dampak terhadap kontrak PLN" data-en="Real-time monitoring of regulatory changes and impact analysis on PLN contracts">Pemantauan real-time perubahan regulasi dan analisis dampak terhadap kontrak PLN</div>
      </div>
      <div class="ph-right">
        <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" data-lang="id">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" data-lang="en">🇺🇸 EN</button>
        </div>
        <span class="live"><span class="live-dot"></span>Live</span>
        <div class="ai-badge"><span class="ai-dot"></span><span data-id="Memindai…" data-en="Scanning…">Memindai…</span></div>
        <button class="btn btn-bl" data-id="🔔 Atur Notifikasi" data-en="🔔 Set Notifications" data-toast="Pengaturan notifikasi segera hadir">🔔 Atur Notifikasi</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:4px">
      <div class="card card-feat"><div class="cp">
        <div class="kpi-n kpi-bl kpi-empty" style="font-size:38px">—</div>
        <div class="kpi-lbl" data-id="Regulasi Baru" data-en="New Regulations">Regulasi Baru</div>
        <div class="kpi-badge kb-warn" data-id="Memindai…" data-en="Scanning…">Memindai…</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-re kpi-empty" style="font-size:38px">—</div>
        <div class="kpi-lbl" data-id="Dampak Kritis" data-en="Critical Impact">Dampak Kritis</div>
        <div class="kpi-badge kb-warn" data-id="Memindai…" data-en="Scanning…">Memindai…</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-am kpi-empty" style="font-size:38px">—</div>
        <div class="kpi-lbl" data-id="Kontrak Terdampak" data-en="Contracts Affected">Kontrak Terdampak</div>
        <div class="kpi-badge kb-warn" data-id="Memindai…" data-en="Scanning…">Memindai…</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-ink kpi-empty" style="font-size:38px">—</div>
        <div class="kpi-lbl" data-id="Regulasi Dipantau" data-en="Regulations Monitored">Regulasi Dipantau</div>
        <div class="kpi-badge kb-bl" data-id="5 sumber aktif" data-en="5 active sources">5 sumber aktif</div>
      </div></div>
    </div>

    <div class="radar-grid">
      <!-- MAIN TABLE -->
      <div class="card"><div class="cp" style="padding:0">
        <div style="padding:12px 16px;border-bottom:1px solid var(--bd-n);display:flex;align-items:center;justify-content:space-between;">
          <div class="ch-title" data-id="Daftar Regulasi Terbaru" data-en="Latest Regulations List">Daftar Regulasi Terbaru</div>
          <div style="display:flex;gap:6px">
            <select style="font-size:12px;border:1px solid var(--bd-n2);border-radius:var(--r-sm);padding:4px 8px;background:var(--surface2);color:var(--t2);outline:none">
              <option data-id="Semua Dampak" data-en="All Impact">Semua Dampak</option>
              <option data-id="Kritis" data-en="Critical">Kritis</option>
              <option data-id="Sedang" data-en="Medium">Sedang</option>
            </select>
            <button class="btn btn-outline" style="padding:4px 10px;font-size:11.5px" data-id="Filter" data-en="Filter" data-toast="Filter segera hadir">Filter</button>
          </div>
        </div>
        <table class="reg-table">
          <thead>
            <tr>
              <th data-id="Regulasi" data-en="Regulation">Regulasi</th>
              <th data-id="Otoritas" data-en="Authority">Otoritas</th>
              <th data-id="Dampak" data-en="Impact">Dampak</th>
              <th data-id="Tenggat" data-en="Deadline">Tenggat</th>
              <th data-id="Status" data-en="Status">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="5" style="text-align:center;padding:32px 20px;color:var(--t4);font-size:12px">
                <div style="font-size:22px;margin-bottom:8px;opacity:.35">📡</div>
                <div data-id="Memindai sumber regulasi…" data-en="Scanning regulatory sources…">Memindai sumber regulasi…</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div></div>

      <!-- TIMELINE PANEL -->
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="card"><div class="cp">
          <div class="ch-title" style="margin-bottom:10px" data-id="Timeline Kepatuhan" data-en="Compliance Timeline">Timeline Kepatuhan</div>
          <div style="text-align:center;padding:20px 0;color:var(--t4);font-size:12px" data-id="Timeline akan muncul setelah data regulasi tersedia." data-en="Timeline will appear once regulatory data is available.">Timeline akan muncul setelah data regulasi tersedia.</div>
        </div></div>

        <div class="card"><div class="cp">
          <div class="ch-title" style="margin-bottom:10px" data-id="Sumber Dipantau" data-en="Monitored Sources">Sumber Dipantau</div>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div class="row-item"><div class="src-pip sp-on" style="width:6px;height:6px;border-radius:50%;background:var(--gr)"></div><span class="src-name" style="font-size:12px;flex:1">OJK Portal</span><span class="src-age" style="font-size:10px;color:var(--t4)">30m</span></div>
            <div class="row-item"><div class="src-pip sp-on" style="width:6px;height:6px;border-radius:50%;background:var(--gr)"></div><span class="src-name" style="font-size:12px;flex:1">JDIH Nasional</span><span class="src-age" style="font-size:10px;color:var(--t4)">1j</span></div>
            <div class="row-item"><div class="src-pip sp-on" style="width:6px;height:6px;border-radius:50%;background:var(--gr)"></div><span class="src-name" style="font-size:12px;flex:1">Kemenkumham</span><span class="src-age" style="font-size:10px;color:var(--t4)">2j</span></div>
            <div class="row-item"><div class="src-pip sp-syn" style="width:6px;height:6px;border-radius:50%;background:var(--bl)"></div><span class="src-name" style="font-size:12px;flex:1">KESDM Portal</span><span class="src-age" style="font-size:10px;color:var(--t4)">sync…</span></div>
            <div class="row-item"><div class="src-pip sp-on" style="width:6px;height:6px;border-radius:50%;background:var(--gr)"></div><span class="src-name" style="font-size:12px;flex:1">Setkab RI</span><span class="src-age" style="font-size:10px;color:var(--t4)">3j</span></div>
          </div>
        </div></div>

        <div class="card"><div class="cp">
          <button class="btn btn-bl" style="width:100%;justify-content:center;margin-bottom:8px" data-id="✨ Analisis Dampak AI" data-en="✨ AI Impact Analysis" data-toast="Menjalankan analisis dampak AI…">✨ Analisis Dampak AI</button>
          <button class="btn btn-outline" style="width:100%;justify-content:center" data-id="📋 Ekspor Laporan Radar" data-en="📋 Export Radar Report" data-toast="Mengunduh laporan radar…">📋 Ekspor Laporan Radar</button>
        </div></div>
      </div>
    </div>
  </div>
  `;
}

export function initInteractions(root) {
  root.addEventListener('click', e => {
    const lang = e.target.closest('[data-lang]');
    if (lang) { if (window.setLang) window.setLang(lang.dataset.lang); return; }
    const toast = e.target.closest('[data-toast]');
    if (toast) { window.showToast(toast.dataset.toast); return; }
  });
}
