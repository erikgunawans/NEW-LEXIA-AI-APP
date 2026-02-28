export function render(container) {
  container.innerHTML = `
<div class="main-wrap">
  <div class="main-scroll">

    <!-- PAGE HEADER -->
    <div class="ph">
      <div>
        <div class="ph-eyebrow">Fitur Analisis · Kepatuhan Kontrak</div>
        <div class="ph-title">Analisis <em>Kepatuhan</em> Kontrak</div>
        <div class="ph-sub">Verifikasi kontrak terhadap kebijakan internal dan regulasi yang berlaku secara otomatis.</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:12px;color:var(--t3)">Kapasitas: <strong style="color:var(--t2)">200 Dokumen</strong></span>
        <div id="langToggle" style="display:inline-flex;background:rgba(25,103,210,.08);border:1px solid rgba(25,103,210,.18);border-radius:999px;padding:2px;gap:1px;flex-shrink:0"><div id="langID" style="padding:4px 12px;border-radius:999px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:600;cursor:pointer;background:linear-gradient(135deg,#1967D2,#1E7CE8);color:#fff;box-shadow:0 2px 6px rgba(25,103,210,.22);transition:all .15s" onclick="setLang('id')">🇮🇩 ID</div><div id="langEN" style="padding:4px 12px;border-radius:999px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:600;cursor:pointer;color:#8BA3BE;transition:all .15s" onclick="setLang('en')">🇺🇸 EN</div></div>
        <button class="btn btn-outline btn-sm">📄 Riwayat</button>
      </div>
    </div>

    <!-- SETUP CARD -->
    <div class="card card-p" id="setupCard">
      <!-- Mode toggle -->
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
        <span style="font-size:12.5px;font-weight:600;color:var(--t2)">Mode Upload:</span>
        <div class="pill-toggle">
          <div class="pill-opt active" id="modeSingle" onclick="setUploadMode('single')">📄 Satu Dokumen</div>
          <div class="pill-opt" id="modeBatch" onclick="setUploadMode('batch')">📚 Batch <span style="background:var(--bl-grad);color:#fff;font-size:9px;padding:1px 6px;border-radius:100px;margin-left:3px;font-weight:700">ENT</span></div>
        </div>
        <span id="modeHint" style="font-size:11.5px;color:var(--t3);font-style:italic">Unggah satu kontrak untuk dianalisis secara mendalam.</span>
      </div>

      <!-- SINGLE MODE -->
      <div id="singleMode">
        <div class="upload-zone" id="singleZone" onclick="simulateUpload()" style="margin-bottom:18px">
          <div class="uz-icon" style="color:var(--t4)">☁</div>
          <div class="uz-main" style="color:var(--t3)">Seret &amp; Lepas Kontrak Anda</div>
          <div class="uz-sub">atau <span class="uz-link">pilih dari komputer</span></div>
          <div class="uz-spec">PDF, DOCX, DOC · Maks. 100MB per dokumen</div>
        </div>
      </div>

      <!-- BATCH MODE -->
      <div id="batchMode" style="display:none;margin-bottom:18px">
        <div class="upload-zone" style="min-height:110px;margin-bottom:12px" onclick="simulateBatch()">
          <div class="uz-icon" style="color:var(--t4)">📂</div>
          <div class="uz-main" style="color:var(--t3)">Seret Banyak File Sekaligus</div>
          <div class="uz-sub">atau <span class="uz-link">pilih beberapa file</span></div>
          <div class="uz-spec">PDF, DOCX · Maks. 100MB/file · Hingga 200 dokumen</div>
        </div>
        <div class="batch-file-list" id="batchList" style="display:none">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:600;color:var(--t3);text-transform:uppercase;letter-spacing:.07em;margin-bottom:6px">3 dokumen siap dianalisis:</div>
          <div class="batch-file"><span style="font-size:16px">📄</span><span class="batch-file-name">PKS-Pengadaan-Turbin-2025.pdf</span><span class="batch-file-size">2.4MB</span><span class="badge b-gr" style="font-size:9px">Siap</span><span class="batch-remove">×</span></div>
          <div class="batch-file"><span style="font-size:16px">📝</span><span class="batch-file-name">KSO-Distribusi-2026.docx</span><span class="batch-file-size">1.1MB</span><span class="badge b-gr" style="font-size:9px">Siap</span><span class="batch-remove">×</span></div>
          <div class="batch-file"><span style="font-size:16px">📄</span><span class="batch-file-name">Perjanjian-Sewa-Jaringan.pdf</span><span class="batch-file-size">3.8MB</span><span class="badge b-gr" style="font-size:9px">Siap</span><span class="batch-remove">×</span></div>
        </div>
      </div>

      <!-- Policy Selector -->
      <div style="background:var(--surface2);border:1px solid var(--bd-n);border-radius:var(--r-sm);padding:16px 18px;margin-bottom:18px">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--t4);margin-bottom:12px">Bandingkan terhadap standar:</div>
        <div class="policy-grid" id="policyGrid">
          <div class="policy-item checked" onclick="togglePolicy(this)"><input type="checkbox" checked onclick="event.stopPropagation()"/><div><div class="policy-name">Standar Internal PLN 2025</div><div class="policy-src">78 klausul dipantau</div></div></div>
          <div class="policy-item checked" onclick="togglePolicy(this)"><input type="checkbox" checked onclick="event.stopPropagation()"/><div><div class="policy-name">OJK POJK 2024</div><div class="policy-src">45 klausul dipantau</div></div></div>
          <div class="policy-item" onclick="togglePolicy(this)"><input type="checkbox" onclick="event.stopPropagation()"/><div><div class="policy-name">UU No.30/2009</div><div class="policy-src">32 klausul dipantau</div></div></div>
          <div class="policy-item" onclick="togglePolicy(this)"><input type="checkbox" onclick="event.stopPropagation()"/><div><div class="policy-name">ISO 27001 — Keamanan Data</div><div class="policy-src">20 klausul dipantau</div></div></div>
        </div>
        <div style="margin-top:10px"><span style="font-size:12px;color:var(--bl);cursor:pointer;font-weight:500">+ Tambahkan Standar Kustom</span></div>
      </div>

      <button class="btn btn-bl btn-full" id="analyzeBtn" onclick="runAnalysis()" style="padding:10px 20px;font-size:13px">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M8 2v3M8 11v3M2 8h3M11 8h3"/><circle cx="8" cy="8" r="2.5"/></svg>
        Mulai Analisis Kepatuhan
      </button>
    </div>

    <!-- RESULTS -->
    <div id="resultsBlock" style="display:none">
      <!-- Result header card -->
      <div class="card" style="overflow:hidden;margin-bottom:0">
        <div class="result-header">
          <!-- Donut -->
          <div class="donut-wrap">
            <svg width="96" height="96" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg2)" stroke-width="10"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--am)" stroke-width="10" stroke-dasharray="183 251" stroke-linecap="round" stroke-dashoffset="63"/>
            </svg>
            <div class="donut-center"><div class="donut-num" style="color:var(--am)">73%</div><div class="donut-lbl">Skor</div></div>
          </div>
          <div>
            <div class="score-title">Kepatuhan Cukup</div>
            <div class="score-sub">PKS-Pengadaan-Turbin-2025.pdf</div>
            <div style="margin-top:8px"><span class="badge b-am">⚠ Perlu Perbaikan</span></div>
          </div>
          <!-- KPIs -->
          <div class="result-kpis" style="border:1px solid var(--bd-n);border-radius:var(--r-sm);overflow:hidden">
            <div class="rk-cell"><div class="rk-num" style="color:var(--re)">2</div><div class="rk-lbl">🚨 Kritis</div></div>
            <div class="rk-cell"><div class="rk-num" style="color:var(--am)">3</div><div class="rk-lbl">⚠️ Berisiko</div></div>
            <div class="rk-cell"><div class="rk-num" style="color:var(--gr)">8</div><div class="rk-lbl">✅ Patuh</div></div>
            <div class="rk-cell"><div class="rk-num" style="color:var(--bl)">3</div><div class="rk-lbl">✦ Saran AI</div></div>
          </div>
          <!-- Actions -->
          <div style="display:flex;flex-direction:column;gap:7px;flex-shrink:0">
            <button class="btn btn-bl btn-sm">⬇ Export PDF</button>
            <button class="btn btn-outline btn-sm" style="border-color:var(--bl-bd);color:var(--bl);background:var(--bl-dim)">⚡ Perbaiki Semua AI</button>
            <button class="btn btn-outline btn-sm">✉ Kirim ke Tim Legal</button>
          </div>
        </div>
        <!-- Progress bars -->
        <div style="padding:14px 22px;border-top:1px solid var(--bd-n);display:grid;grid-template-columns:1fr 1fr;gap:14px;background:var(--surface2)">
          <div>
            <div style="display:flex;justify-content:space-between;font-size:11.5px;margin-bottom:4px"><span style="color:var(--t2);font-weight:500">Standar PLN 2025</span><span style="color:var(--am);font-weight:600">68%</span></div>
            <div class="prog-bar"><div class="prog-fill" style="width:68%;background:var(--am)"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:11.5px;margin-bottom:4px"><span style="color:var(--t2);font-weight:500">OJK POJK 2024</span><span style="color:var(--am);font-weight:600">78%</span></div>
            <div class="prog-bar"><div class="prog-fill" style="width:78%;background:var(--am)"></div></div>
          </div>
        </div>
      </div>

      <!-- Two-col -->
      <div style="display:grid;grid-template-columns:1.8fr 1fr;gap:14px;margin-top:14px">
        <!-- Detail table -->
        <div class="card" style="overflow:hidden">
          <div style="padding:13px 18px;border-bottom:1px solid var(--bd-n);display:flex;align-items:center;justify-content:space-between;background:var(--surface2)">
            <div style="font-family:'Playfair Display',serif;font-size:15px;font-weight:600;color:var(--t1)">Detail Klausul</div>
            <select class="btn btn-outline btn-sm" style="cursor:pointer"><option>Semua Klausul</option><option>Tidak Patuh Saja</option><option>Berisiko</option></select>
          </div>
          <div style="overflow-x:auto">
            <table class="ctbl">
              <thead><tr>
                <th style="width:120px">Klausul</th>
                <th>Status &amp; Keterangan</th>
                <th style="width:85px">Risiko</th>
                <th style="width:90px">Ref.</th>
                <th style="width:90px">Aksi</th>
              </tr></thead>
              <tbody>
                <tr class="r-gr"><td><div style="font-size:12.5px;font-weight:600">Pasal 3</div><div style="font-size:10.5px;color:var(--t3)">Jangka Waktu</div></td><td><span class="badge b-gr">✅ Patuh</span><div style="font-size:11px;color:var(--t3);margin-top:3px">Durasi 12 bulan dengan opsi perpanjangan tertulis</div></td><td><span class="badge b-gr">🟢 Rendah</span></td><td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">PLN-STD Ps.7</span></td><td><button class="btn btn-outline btn-sm">Lihat</button></td></tr>

                <tr class="r-re" style="cursor:pointer" onclick="toggleDetail('cd1')"><td><div style="font-size:12.5px;font-weight:600">Pasal 8</div><div style="font-size:10.5px;color:var(--t3)">Perpanjangan Otomatis</div></td><td><span class="badge b-re">❌ Tidak Patuh</span><div style="font-size:11px;color:var(--t3);margin-top:3px">Tidak ada notifikasi 30 hari — wajib per OJK POJK 2024</div></td><td><span class="badge b-re">🔴 Kritis</span></td><td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">OJK Ps.9</span></td><td><button class="btn btn-re btn-sm" onclick="event.stopPropagation()">Perbaiki →</button></td></tr>
                <tr id="cd1" style="display:none"><td colspan="5" style="padding:12px 16px !important;background:var(--bl-dim)">
                  <div class="ai-fix-block"><div class="ai-fix-lbl">✦ Redline AI yang Disarankan</div><div class="ai-fix-txt">Tambahkan setelah kalimat pertama Pasal 8:<br/><span class="add-text">"…kecuali salah satu Pihak memberikan pemberitahuan tertulis penolakan sekurang-kurangnya 30 (tiga puluh) hari kalender sebelum berakhirnya Jangka Waktu."</span><br/><span style="font-size:11px;color:var(--t3)">Sumber: OJK POJK 2024 Ps.9 · PLN-STD-2025 Ps.7.2</span></div></div>
                  <div style="display:flex;gap:8px;margin-top:10px"><button class="btn btn-gr btn-sm">✅ Terima &amp; Terapkan</button><button class="btn btn-outline btn-sm">✏️ Edit Manual</button><button class="btn btn-outline btn-sm">❌ Abaikan</button></div>
                </td></tr>

                <tr class="r-re" style="cursor:pointer" onclick="toggleDetail('cd2')"><td><div style="font-size:12.5px;font-weight:600">Pasal 12</div><div style="font-size:10.5px;color:var(--t3)">Ganti Rugi</div></td><td><span class="badge b-re">❌ Tidak Patuh</span><div style="font-size:11px;color:var(--t3);margin-top:3px">Tidak ada liability cap — eksposur finansial tidak terbatas</div></td><td><span class="badge b-re">🔴 Kritis</span></td><td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">PLN-STD Ps.4</span></td><td><button class="btn btn-re btn-sm" onclick="event.stopPropagation()">Perbaiki →</button></td></tr>
                <tr id="cd2" style="display:none"><td colspan="5" style="padding:12px 16px !important;background:var(--bl-dim)">
                  <div class="ai-fix-block"><div class="ai-fix-lbl">✦ Redline AI yang Disarankan</div><div class="ai-fix-txt">Ganti: <span class="del-text">"atas segala kerugian yang timbul tanpa batas"</span><br/>Dengan: <span class="add-text">"atas kerugian langsung dengan batas maksimum sebesar nilai total kontrak dalam Lampiran B"</span><br/><span style="font-size:11px;color:var(--t3)">Sumber: PLN-STD-2025 Ps.4.2 · UU No.30/2009 Ps.48</span></div></div>
                  <div style="display:flex;gap:8px;margin-top:10px"><button class="btn btn-gr btn-sm">✅ Terima &amp; Terapkan</button><button class="btn btn-outline btn-sm">✏️ Edit Manual</button><button class="btn btn-outline btn-sm">❌ Abaikan</button></div>
                </td></tr>

                <tr class="r-am" style="cursor:pointer" onclick="toggleDetail('cd3')"><td><div style="font-size:12.5px;font-weight:600">Pasal 15</div><div style="font-size:10.5px;color:var(--t3)">Pilihan Hukum</div></td><td><span class="badge b-am">⚠️ Berisiko</span><div style="font-size:11px;color:var(--t3);margin-top:3px">Yurisdiksi tidak spesifik — perlu diperjelas</div></td><td><span class="badge b-am">🟠 Tinggi</span></td><td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">PLN-STD Ps.11</span></td><td><button class="btn btn-am btn-sm" onclick="event.stopPropagation()">Tinjau →</button></td></tr>
                <tr id="cd3" style="display:none"><td colspan="5" style="padding:12px 16px !important;background:var(--bl-dim)">
                  <div class="ai-fix-block"><div class="ai-fix-lbl">✦ Saran AI</div><div class="ai-fix-txt">Perjelas menjadi: <span class="add-text">"Perjanjian ini tunduk pada hukum Republik Indonesia. Sengketa diselesaikan melalui BANI atau Pengadilan Negeri Jakarta Selatan."</span><br/><span style="font-size:11px;color:var(--t3)">Sumber: PLN-STD-2025 Ps.11 · UU No.30/2009 Ps.48</span></div></div>
                  <div style="display:flex;gap:8px;margin-top:10px"><button class="btn btn-gr btn-sm">✅ Terima &amp; Terapkan</button><button class="btn btn-outline btn-sm">✏️ Edit Manual</button><button class="btn btn-outline btn-sm">❌ Abaikan</button></div>
                </td></tr>

                <tr class="r-gr"><td><div style="font-size:12.5px;font-weight:600">Pasal 19</div><div style="font-size:10.5px;color:var(--t3)">Force Majeure</div></td><td><span class="badge b-gr">✅ Patuh</span><div style="font-size:11px;color:var(--t3);margin-top:3px">Cakupan mencakup pandemi dan bencana siber</div></td><td><span class="badge b-gr">🟢 Rendah</span></td><td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">—</span></td><td><button class="btn btn-outline btn-sm">Lihat</button></td></tr>
                <tr class="r-gr"><td><div style="font-size:12.5px;font-weight:600">Pasal 22</div><div style="font-size:10.5px;color:var(--t3)">Kerahasiaan</div></td><td><span class="badge b-gr">✅ Patuh</span><div style="font-size:11px;color:var(--t3);margin-top:3px">Klausul NDA standar sesuai ISO 27001 Section 5</div></td><td><span class="badge b-gr">🟢 Rendah</span></td><td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">ISO 27001</span></td><td><button class="btn btn-outline btn-sm">Lihat</button></td></tr>
              </tbody>
            </table>
          </div>
          <div style="padding:12px 18px;border-top:1px solid var(--bd-n)">
            <div class="disclaimer"><span style="font-size:13px;color:var(--am);flex-shrink:0">⚠</span><span style="font-size:11px;color:#7c4a0a;font-style:italic;line-height:1.6">Redline yang disarankan wajib ditinjau pengacara berwenang sebelum diterapkan. Lexia tidak menggantikan peran konsultan hukum.</span></div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div style="display:flex;flex-direction:column;gap:14px">
          <!-- History -->
          <div class="card card-p">
            <div style="font-family:'Playfair Display',serif;font-size:15px;font-weight:600;color:var(--t1);margin-bottom:12px">Riwayat Analisis</div>
            <div class="hist-item"><span style="font-size:18px">📄</span><div style="flex:1"><div style="font-size:12.5px;font-weight:600;color:var(--t1)">PKS-Turbin-2025.pdf</div><div style="font-size:11px;color:var(--t3)">27 Feb 2026 · 2 Kritis</div></div><span class="hist-score-pill" style="background:var(--am-dim);color:var(--am);border:1px solid var(--am-bd)">73%</span></div>
            <div class="hist-item"><span style="font-size:18px">📝</span><div style="flex:1"><div style="font-size:12.5px;font-weight:600;color:var(--t1)">KSO-Distribusi-2026.docx</div><div style="font-size:11px;color:var(--t3)">25 Feb 2026 · 0 Kritis</div></div><span class="hist-score-pill" style="background:var(--gr-dim);color:var(--gr);border:1px solid var(--gr-bd)">91%</span></div>
            <div class="hist-item"><span style="font-size:18px">📄</span><div style="flex:1"><div style="font-size:12.5px;font-weight:600;color:var(--t1)">NDA-Vendor-Feb26.pdf</div><div style="font-size:11px;color:var(--t3)">24 Feb 2026 · 1 Kritis</div></div><span class="hist-score-pill" style="background:var(--am-dim);color:var(--am);border:1px solid var(--am-bd)">82%</span></div>
            <div class="hist-item"><span style="font-size:18px">📄</span><div style="flex:1"><div style="font-size:12.5px;font-weight:600;color:var(--t1)">Perjanjian-Sewa.pdf</div><div style="font-size:11px;color:var(--t3)">22 Feb 2026 · 4 Kritis</div></div><span class="hist-score-pill" style="background:var(--re-dim);color:var(--re);border:1px solid var(--re-bd)">55%</span></div>
            <button class="btn btn-outline btn-full btn-sm" style="margin-top:10px">Lihat Semua →</button>
          </div>
          <!-- Export -->
          <div class="card card-p">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--t4);margin-bottom:12px">Ekspor &amp; Aksi</div>
            <div style="display:flex;flex-direction:column;gap:7px">
              <button class="btn btn-bl btn-full" style="font-size:12.5px">📄 Laporan Kepatuhan Lengkap</button>
              <button class="btn btn-outline btn-full" style="font-size:12.5px;border-color:var(--bl-bd);color:var(--bl);background:var(--bl-dim)">⚡ Perbaiki Semua dengan AI</button>
              <button class="btn btn-outline btn-full" style="font-size:12.5px">⬇ Export Redline Word</button>
              <button class="btn btn-outline btn-full" style="font-size:12.5px">✉ Kirim Ringkasan ke Tim</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div><!-- /main-scroll -->

  <!-- CHAT BAR -->
  <div class="chat-bar">
    <div class="chat-frame">
      <div class="chat-orb"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5l1.2 3.7L13 6.5 9.2 7.7 8 11.5 6.8 7.7 3 6.5l3.8-1.3L8 1.5z"/></svg></div>
      <input class="chat-input" type="text" placeholder="Tanya Lexia — mis. 'Apa yang harus saya lakukan untuk meningkatkan skor kepatuhan?'…"/>
      <div class="chip-row"><span class="chip">⚡ Perbaiki Otomatis</span><span class="chip">⚖️ Bandingkan Versi</span></div>
      <div class="chat-div"></div>
      <button class="attach-btn"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 7.5l-6 6a4 4 0 01-5.5-5.5l7-7a2.5 2.5 0 013.5 3.5l-7 7a1 1 0 01-1.4-1.4l6-6"/></svg></button>
      <button class="send-btn">Kirim <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 8h12M9 4l4 4-4 4"/></svg></button>
    </div>
    <div class="chat-hint"><span class="kbd">⌘K</span> command palette &nbsp;·&nbsp; <span class="kbd">@</span> mention dokumen &nbsp;·&nbsp; Lexia AI v2.1</div>
  </div>
</div>

<!-- LOADING -->
<div class="loading-overlay" id="loadingOverlay">
  <div class="loading-card">
    <div class="loading-spinner"></div>
    <div style="font-family:'Playfair Display',serif;font-size:16px;color:var(--t1)">Menganalisis Kepatuhan...</div>
    <div style="font-size:12px;color:var(--t3);margin-top:5px">AI sedang memverifikasi setiap klausul</div>
    <div id="lSteps" style="margin-top:14px">
      <div class="l-step active" id="ls1">⟳ Mengekstrak klausul dari dokumen...</div>
      <div class="l-step" id="ls2">○ Mencocokkan dengan standar PLN 2025...</div>
      <div class="l-step" id="ls3">○ Mencocokkan dengan OJK POJK 2024...</div>
      <div class="l-step" id="ls4">○ Menilai tingkat risiko setiap klausul...</div>
      <div class="l-step" id="ls5">○ Menghasilkan saran redline AI...</div>
      <div class="l-step" id="ls6">○ Menyusun laporan kepatuhan akhir...</div>
    </div>
  </div>
</div>
  `;
}

export function initInteractions(root) {
  root.querySelectorAll('.bt-row').forEach(r => {
    r.addEventListener('click',() => {
      const tg = r.querySelector('.toggle');
      if(tg) tg.classList.toggle('on');
    });
  });
  
  window.setUploadMode = function(m) {
    const single = document.getElementById('modeSingle');
    const batch = document.getElementById('modeBatch');
    const singleMode = document.getElementById('singleMode');
    const batchMode = document.getElementById('batchMode');
    const modeHint = document.getElementById('modeHint');
    if (single) single.classList.toggle('active',m==='single');
    if (batch) batch.classList.toggle('active',m==='batch');
    if (singleMode) singleMode.style.display=m==='single'?'block':'none';
    if (batchMode) batchMode.style.display=m==='batch'?'block':'none';
    if (modeHint) modeHint.textContent=m==='single'?'Unggah satu kontrak untuk dianalisis secara mendalam.':'Unggah hingga 200 dokumen sekaligus — hasil paralel dalam hitungan menit.';
  };
  
  window.simulateUpload = function() {
    const z=document.getElementById('singleZone');
    if (!z) return;
    z.classList.add('filled');
    z.innerHTML='<div class="uz-icon">📄</div><div class="uz-main">PKS-Pengadaan-Turbin-2025.pdf</div><div class="uz-sub" style="color:var(--gr);font-weight:500">✅ 2.4MB · Siap dianalisis</div><div class="uz-spec" style="color:var(--t3);margin-top:6px">Klik untuk mengganti</div>';
    z.onclick=function(){
        z.classList.remove('filled');
        z.innerHTML='<div class="uz-icon" style="color:var(--t4)">☁</div><div class="uz-main" style="color:var(--t3)">Seret &amp; Lepas Kontrak Anda</div><div class="uz-sub">atau <span class="uz-link">pilih dari komputer</span></div><div class="uz-spec">PDF, DOCX, DOC · Maks. 100MB</div>';
        z.onclick=()=>simulateUpload();
    };
  };
  
  window.simulateBatch = function() {
      const list = document.getElementById('batchList');
      if (list) list.style.display='flex';
  };
  
  window.togglePolicy = function(el) {
      if (!el) return;
      el.classList.toggle('checked');
      const cb = el.querySelector('input[type=checkbox]');
      if (cb) cb.checked = el.classList.contains('checked');
  };
  
  window.toggleDetail = function(id) {
      const r=document.getElementById(id);
      if (r) r.style.display=r.style.display==='none'?'table-row':'none';
  };
  
  window.runAnalysis = function() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.style.display='flex';
    const ids=['ls1','ls2','ls3','ls4','ls5','ls6'];
    let i=0;
    const t=setInterval(()=>{
      if(i<ids.length){
        const el=document.getElementById(ids[i]);
        if(el) {
          el.classList.remove('active');
          el.classList.add('done');
          el.textContent='✅ '+el.textContent.replace('⟳ ','').replace('○ ','');
        }
        i++;
        if(i<ids.length){
          const nx=document.getElementById(ids[i]);
          if(nx) {
            nx.classList.add('active');
            nx.textContent='⟳ '+nx.textContent.replace('○ ','');
          }
        }
      } else {
        clearInterval(t);
        setTimeout(()=>{
          const ov = document.getElementById('loadingOverlay');
          if(ov) ov.style.display='none';
          if(typeof window.showResults === 'function') window.showResults();
        },600);
      }
    },650);
  };
  
  window.showResults = function() {
      const r=document.getElementById('resultsBlock');
      if(r) {
        r.style.display='block';
        r.style.opacity='0';
        r.style.transform='translateY(10px)';
        requestAnimationFrame(()=>{
            r.style.transition='opacity .4s ease,transform .4s ease';
            r.style.opacity='1';
            r.style.transform='translateY(0)';
        });
      }
      const btn = document.getElementById('analyzeBtn');
      if(btn) btn.textContent='⟳ Jalankan Ulang Analisis';
      const scroll = document.querySelector('.main-scroll');
      if(scroll) scroll.scrollTop=9999;
  };
  
  root.querySelectorAll('.batch-remove').forEach(btn => btn.addEventListener('click', function() {
      const f = this.closest('.batch-file');
      if (f) f.remove();
  }));

  const ci=root.querySelector('.chat-input');
  if(ci){
    ci.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey)e.preventDefault();});
  }
  const sb=root.querySelector('.send-btn');
  if(sb){
    sb.addEventListener('click',function(){
      if(ci&&ci.value.trim()){ci.value='';ci.focus();}
    });
  }

  if (typeof window.setLang === 'function') {
    window.setLang(document.documentElement.lang || 'id');
  }
}
