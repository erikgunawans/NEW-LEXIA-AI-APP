export function render(container) {
  container.innerHTML = `
<div class="main-wrap">
  <div class="main-scroll">
    <div class="ph">
      <div>
        <div class="ph-eyebrow" data-id="AI Tools · Monitoring Regulasi" data-en="AI Tools · Regulatory Monitoring">AI Tools · Monitoring Regulasi</div>
        <div class="ph-title">Radar <em>Regulasi</em></div>
        <div class="ph-sub" data-id="Pemantauan real-time perubahan regulasi dan analisis dampak terhadap kontrak PLN" data-en="Real-time monitoring of regulatory changes and impact analysis on PLN contracts">Pemantauan real-time perubahan regulasi dan analisis dampak terhadap kontrak PLN</div>
      </div>
      <div class="ph-right">
        <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" onclick="setLang('id')">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" onclick="setLang('en')">🇺🇸 EN</button>
        </div>
        <span class="live"><span class="live-dot"></span>Live</span>
        <div class="ai-badge"><span class="ai-dot"></span><span data-id="2 update baru" data-en="2 new updates">2 update baru</span></div>
        <button class="btn btn-bl" data-id="🔔 Atur Notifikasi" data-en="🔔 Set Notifications">🔔 Atur Notifikasi</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:4px">
      <div class="card card-feat"><div class="cp">
        <div class="kpi-n kpi-bl" style="font-size:38px">2</div>
        <div class="kpi-lbl" data-id="Regulasi Baru" data-en="New Regulations">Regulasi Baru</div>
        <div class="kpi-badge kb-warn" data-id="7 hari terakhir" data-en="Last 7 days">7 hari terakhir</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-re" style="font-size:38px">1</div>
        <div class="kpi-lbl" data-id="Dampak Kritis" data-en="Critical Impact">Dampak Kritis</div>
        <div class="kpi-badge kb-re" data-id="Tindakan segera" data-en="Immediate action">Tindakan segera</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-am" style="font-size:38px">3</div>
        <div class="kpi-lbl" data-id="Kontrak Terdampak" data-en="Contracts Affected">Kontrak Terdampak</div>
        <div class="kpi-badge kb-warn" data-id="Perlu review" data-en="Needs review">Perlu review</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-ink" style="font-size:38px">12</div>
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
            <button class="btn btn-outline" style="padding:4px 10px;font-size:11.5px" data-id="Filter" data-en="Filter">Filter</button>
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
              <td><strong>POJK No. 15/2026</strong><br/><span style="font-size:11px;color:var(--t4)" data-id="Pengaturan Transaksi Keuangan" data-en="Financial Transaction Regulations">Pengaturan Transaksi Keuangan</span></td>
              <td>OJK</td>
              <td><span class="badge b-red" data-id="Kritis" data-en="Critical">Kritis</span><div class="impact-bar" style="background:var(--re-dim)"><div style="width:90%;height:100%;background:var(--re);border-radius:3px"></div></div></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--re)">31 Mar 2026</span><br/><span style="font-size:10px;color:var(--t4)" data-id="32 hari lagi" data-en="32 days remaining">32 hari lagi</span></td>
              <td><span class="badge b-am" data-id="Review" data-en="Review">Review</span></td>
            </tr>
            <tr>
              <td><strong>Permenkumham No. 3/2026</strong><br/><span style="font-size:11px;color:var(--t4)" data-id="Tata Cara Pengesahan Kontrak" data-en="Contract Ratification Procedures">Tata Cara Pengesahan Kontrak</span></td>
              <td>Kemenkumham</td>
              <td><span class="badge b-am" data-id="Sedang" data-en="Medium">Sedang</span><div class="impact-bar" style="background:var(--am-dim)"><div style="width:55%;height:100%;background:var(--am);border-radius:3px"></div></div></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--am)">30 Apr 2026</span><br/><span style="font-size:10px;color:var(--t4)" data-id="62 hari lagi" data-en="62 days remaining">62 hari lagi</span></td>
              <td><span class="badge b-bl" data-id="Dipantau" data-en="Monitored">Dipantau</span></td>
            </tr>
            <tr>
              <td><strong>Kepmen ESDM No. 8/2026</strong><br/><span style="font-size:11px;color:var(--t4)" data-id="Standar Teknis Pembangkit Listrik" data-en="Power Plant Technical Standards">Standar Teknis Pembangkit Listrik</span></td>
              <td>Kemen ESDM</td>
              <td><span class="badge b-am" data-id="Sedang" data-en="Medium">Sedang</span><div class="impact-bar" style="background:var(--am-dim)"><div style="width:45%;height:100%;background:var(--am);border-radius:3px"></div></div></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t2)">31 Mei 2026</span><br/><span style="font-size:10px;color:var(--t4)" data-id="93 hari lagi" data-en="93 days remaining">93 hari lagi</span></td>
              <td><span class="badge b-gr" data-id="Dianalisis" data-en="Analyzed">Dianalisis</span></td>
            </tr>
            <tr>
              <td><strong>Permen ATR/BPN No. 2/2026</strong><br/><span style="font-size:11px;color:var(--t4)" data-id="Pengadaan Tanah Proyek Strategis" data-en="Land Acquisition for Strategic Projects">Pengadaan Tanah Proyek Strategis</span></td>
              <td>ATR/BPN</td>
              <td><span class="badge b-muted" data-id="Rendah" data-en="Low">Rendah</span><div class="impact-bar" style="background:var(--bg2)"><div style="width:20%;height:100%;background:var(--t5);border-radius:3px"></div></div></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t2)">30 Jun 2026</span><br/><span style="font-size:10px;color:var(--t4)" data-id="123 hari lagi" data-en="123 days remaining">123 hari lagi</span></td>
              <td><span class="badge b-muted" data-id="Monitoring" data-en="Monitoring">Monitoring</span></td>
            </tr>
          </tbody>
        </table>
      </div></div>

      <!-- TIMELINE PANEL -->
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="card"><div class="cp">
          <div class="ch-title" style="margin-bottom:10px" data-id="Timeline Kepatuhan" data-en="Compliance Timeline">Timeline Kepatuhan</div>
          <div class="timeline-item">
            <div class="tl-dot" style="background:var(--re)"></div>
            <div class="tl-content">
              <div class="tl-title" data-id="Batas Addendum POJK 15/2026" data-en="POJK 15/2026 Addendum Deadline">Batas Addendum POJK 15/2026</div>
              <div class="tl-meta" style="color:var(--re);font-weight:600" data-id="31 Maret 2026 — 32 hari lagi" data-en="March 31, 2026 — 32 days remaining">31 Maret 2026 — 32 hari lagi</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="tl-dot" style="background:var(--am)"></div>
            <div class="tl-content">
              <div class="tl-title" data-id="Review Permenkumham 3/2026" data-en="Permenkumham 3/2026 Review">Review Permenkumham 3/2026</div>
              <div class="tl-meta" data-id="30 April 2026 — 62 hari lagi" data-en="April 30, 2026 — 62 days remaining">30 April 2026 — 62 hari lagi</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="tl-dot" style="background:var(--bl)"></div>
            <div class="tl-content">
              <div class="tl-title" data-id="Audit Kepatuhan Internal PLN" data-en="PLN Internal Compliance Audit">Audit Kepatuhan Internal PLN</div>
              <div class="tl-meta" data-id="15 Mei 2026 — 77 hari lagi" data-en="May 15, 2026 — 77 days remaining">15 Mei 2026 — 77 hari lagi</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="tl-dot" style="background:var(--t5)"></div>
            <div class="tl-content">
              <div class="tl-title" data-id="Implementasi Kepmen ESDM 8/2026" data-en="Kepmen ESDM 8/2026 Implementation">Implementasi Kepmen ESDM 8/2026</div>
              <div class="tl-meta" data-id="31 Mei 2026 — 93 hari lagi" data-en="May 31, 2026 — 93 days remaining">31 Mei 2026 — 93 hari lagi</div>
            </div>
          </div>
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
          <button class="btn btn-bl" style="width:100%;justify-content:center;margin-bottom:8px" data-id="✨ Analisis Dampak AI" data-en="✨ AI Impact Analysis">✨ Analisis Dampak AI</button>
          <button class="btn btn-outline" style="width:100%;justify-content:center" data-id="📋 Ekspor Laporan Radar" data-en="📋 Export Radar Report">📋 Ekspor Laporan Radar</button>
        </div></div>
      </div>
    </div>
  </div>
</div>
  `;
}

export function initInteractions(root) {
  root.querySelectorAll('.bt-row').forEach(r => {
    r.addEventListener('click',() => {
      const tg = r.querySelector('.toggle');
      if (tg) tg.classList.toggle('on');
    });
  });

  const ci = root.querySelector('.chat-input');
  if(ci){
    ci.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey)e.preventDefault();});
  }
  const sb = root.querySelector('.send-btn');
  if(sb){
    sb.addEventListener('click',function(){
      if(ci&&ci.value.trim()){ci.value='';ci.focus();}
    });
  }

  if (typeof window.setLang === 'function') {
    window.setLang(document.documentElement.lang || 'id');
  }
}
