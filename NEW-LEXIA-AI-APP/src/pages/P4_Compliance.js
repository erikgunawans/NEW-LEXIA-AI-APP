export function render(container) {
  container.innerHTML = `
  <div class="main-scroll">

    <!-- PAGE HEADER -->
    <div class="ph">
      <div>
        <div class="ph-title" data-id="Analisis <em>Kepatuhan</em> Kontrak" data-en="Contract <em>Compliance</em> Analysis">Analisis <em>Kepatuhan</em> Kontrak</div>
        <div class="ph-sub" data-id="Verifikasi kontrak terhadap kebijakan internal dan regulasi yang berlaku secara otomatis." data-en="Automatically verify contracts against internal policies and applicable regulations.">Verifikasi kontrak terhadap kebijakan internal dan regulasi yang berlaku secara otomatis.</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:12px;color:var(--t3)"><span data-id="Kapasitas:" data-en="Capacity:">Kapasitas:</span> <strong style="color:var(--t2)">200 <span data-id="Dokumen" data-en="Documents">Dokumen</span></strong></span>
        <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" onclick="if(window.setLang) window.setLang('id')">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" onclick="if(window.setLang) window.setLang('en')">🇺🇸 EN</button>
        </div>
        <button class="btn btn-outline btn-sm" data-id="📄 Riwayat" data-en="📄 History">📄 Riwayat</button>
      </div>
    </div>

    <!-- SETUP CARD -->
    <div class="card card-p" id="setupCard">
      <!-- Mode toggle -->
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
        <span style="font-size:12.5px;font-weight:600;color:var(--t2)" data-id="Mode Upload:" data-en="Upload Mode:">Mode Upload:</span>
        <div class="pill-toggle">
          <div class="pill-opt active" id="modeSingle" onclick="setUploadMode('single')" data-id="📄 Satu Dokumen" data-en="📄 Single Document">📄 Satu Dokumen</div>
          <div class="pill-opt" id="modeBatch" onclick="setUploadMode('batch')">📚 Batch <span style="background:var(--bl-grad);color:#fff;font-size:9px;padding:1px 6px;border-radius:100px;margin-left:3px;font-weight:700">ENT</span></div>
        </div>
        <span id="modeHint" style="font-size:11.5px;color:var(--t3);font-style:italic" data-id="Unggah satu kontrak untuk dianalisis secara mendalam." data-en="Upload one contract for in-depth analysis.">Unggah satu kontrak untuk dianalisis secara mendalam.</span>
      </div>

      <!-- SINGLE MODE -->
      <div id="singleMode">
        <div class="upload-zone" id="singleZone" onclick="simulateUpload()" style="margin-bottom:18px">
          <div class="uz-icon" style="color:var(--t4)">☁</div>
          <div class="uz-main" style="color:var(--t3)" data-id="Seret &amp; Lepas Kontrak Anda" data-en="Drag &amp; Drop Your Contract">Seret &amp; Lepas Kontrak Anda</div>
          <div class="uz-sub" data-id="atau <span class='uz-link'>pilih dari komputer</span>" data-en="or <span class='uz-link'>choose from computer</span>">atau <span class="uz-link">pilih dari komputer</span></div>
          <div class="uz-spec" data-id="PDF, DOCX, DOC · Maks. 100MB per dokumen" data-en="PDF, DOCX, DOC · Max. 100MB per document">PDF, DOCX, DOC · Maks. 100MB per dokumen</div>
        </div>
      </div>

      <!-- BATCH MODE -->
      <div id="batchMode" style="display:none;margin-bottom:18px">
        <div class="upload-zone" style="min-height:110px;margin-bottom:12px" onclick="simulateBatch()">
          <div class="uz-icon" style="color:var(--t4)">📂</div>
          <div class="uz-main" style="color:var(--t3)" data-id="Seret Banyak File Sekaligus" data-en="Drag Multiple Files at Once">Seret Banyak File Sekaligus</div>
          <div class="uz-sub" data-id="atau <span class='uz-link'>pilih beberapa file</span>" data-en="or <span class='uz-link'>select multiple files</span>">atau <span class="uz-link">pilih beberapa file</span></div>
          <div class="uz-spec" data-id="PDF, DOCX · Maks. 100MB/file · Hingga 200 dokumen" data-en="PDF, DOCX · Max. 100MB/file · Up to 200 documents">PDF, DOCX · Maks. 100MB/file · Hingga 200 dokumen</div>
        </div>
        <div class="batch-file-list" id="batchList" style="display:none">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:600;color:var(--t3);text-transform:uppercase;letter-spacing:.07em;margin-bottom:6px" data-id="3 dokumen siap dianalisis:" data-en="3 documents ready for analysis:">3 dokumen siap dianalisis:</div>
          <div class="batch-file"><span style="font-size:16px">📄</span><span class="batch-file-name">PKS-Pengadaan-Turbin-2025.pdf</span><span class="batch-file-size">2.4MB</span><span class="badge b-gr" style="font-size:9px" data-id="Siap" data-en="Ready">Siap</span><span class="batch-remove">×</span></div>
          <div class="batch-file"><span style="font-size:16px">📝</span><span class="batch-file-name">KSO-Distribusi-2026.docx</span><span class="batch-file-size">1.1MB</span><span class="badge b-gr" style="font-size:9px" data-id="Siap" data-en="Ready">Siap</span><span class="batch-remove">×</span></div>
          <div class="batch-file"><span style="font-size:16px">📄</span><span class="batch-file-name">Perjanjian-Sewa-Jaringan.pdf</span><span class="batch-file-size">3.8MB</span><span class="badge b-gr" style="font-size:9px" data-id="Siap" data-en="Ready">Siap</span><span class="batch-remove">×</span></div>
        </div>
      </div>

      <!-- Policy Selector -->
      <div style="background:var(--surface2);border:1px solid var(--bd-n);border-radius:var(--r-sm);padding:16px 18px;margin-bottom:18px">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--t4);margin-bottom:12px" data-id="Bandingkan terhadap standar:" data-en="Compare against standards:">Bandingkan terhadap standar:</div>
        <div class="policy-grid" id="policyGrid">
          <div class="policy-item checked" onclick="togglePolicy(this)"><input type="checkbox" checked onclick="event.stopPropagation()"/><div><div class="policy-name" data-id="Standar Internal PLN 2025" data-en="PLN Internal Standards 2025">Standar Internal PLN 2025</div><div class="policy-src" data-id="78 klausul dipantau" data-en="78 clauses monitored">78 klausul dipantau</div></div></div>
          <div class="policy-item checked" onclick="togglePolicy(this)"><input type="checkbox" checked onclick="event.stopPropagation()"/><div><div class="policy-name">OJK POJK 2024</div><div class="policy-src" data-id="45 klausul dipantau" data-en="45 clauses monitored">45 klausul dipantau</div></div></div>
          <div class="policy-item" onclick="togglePolicy(this)"><input type="checkbox" onclick="event.stopPropagation()"/><div><div class="policy-name">UU No.30/2009</div><div class="policy-src" data-id="32 klausul dipantau" data-en="32 clauses monitored">32 klausul dipantau</div></div></div>
          <div class="policy-item" onclick="togglePolicy(this)"><input type="checkbox" onclick="event.stopPropagation()"/><div><div class="policy-name" data-id="ISO 27001 — Keamanan Data" data-en="ISO 27001 — Data Security">ISO 27001 — Keamanan Data</div><div class="policy-src" data-id="20 klausul dipantau" data-en="20 clauses monitored">20 klausul dipantau</div></div></div>
        </div>
        <div style="margin-top:10px"><span style="font-size:12px;color:var(--bl);cursor:pointer;font-weight:500" data-id="+ Tambahkan Standar Kustom" data-en="+ Add Custom Standard">+ Tambahkan Standar Kustom</span></div>
      </div>

      <button class="btn btn-bl btn-full" id="analyzeBtn" onclick="runAnalysis()" style="padding:10px 20px;font-size:13px">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M8 2v3M8 11v3M2 8h3M11 8h3"/><circle cx="8" cy="8" r="2.5"/></svg>
        <span id="analyzeBtnLbl" data-id="Mulai Analisis Kepatuhan" data-en="Start Compliance Analysis">Mulai Analisis Kepatuhan</span>
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
            <div class="donut-center"><div class="donut-num" style="color:var(--am)">73%</div><div class="donut-lbl" data-id="Skor" data-en="Score">Skor</div></div>
          </div>
          <div>
            <div class="score-title" data-id="Kepatuhan Cukup" data-en="Adequate Compliance">Kepatuhan Cukup</div>
            <div class="score-sub">PKS-Pengadaan-Turbin-2025.pdf</div>
            <div style="margin-top:8px"><span class="badge b-am" data-id="⚠ Perlu Perbaikan" data-en="⚠ Needs Improvement">⚠ Perlu Perbaikan</span></div>
          </div>
          <!-- KPIs -->
          <div class="result-kpis" style="border:1px solid var(--bd-n);border-radius:var(--r-sm);overflow:hidden">
            <div class="rk-cell"><div class="rk-num" style="color:var(--re)">2</div><div class="rk-lbl" data-id="🚨 Kritis" data-en="🚨 Critical">🚨 Kritis</div></div>
            <div class="rk-cell"><div class="rk-num" style="color:var(--am)">3</div><div class="rk-lbl" data-id="⚠️ Berisiko" data-en="⚠️ At Risk">⚠️ Berisiko</div></div>
            <div class="rk-cell"><div class="rk-num" style="color:var(--gr)">8</div><div class="rk-lbl" data-id="✅ Patuh" data-en="✅ Compliant">✅ Patuh</div></div>
            <div class="rk-cell"><div class="rk-num" style="color:var(--bl)">3</div><div class="rk-lbl" data-id="✦ Saran AI" data-en="✦ AI Suggestion">✦ Saran AI</div></div>
          </div>
          <!-- Actions -->
          <div style="display:flex;flex-direction:column;gap:7px;flex-shrink:0">
            <button class="btn btn-bl btn-sm" data-id="⬇ Export PDF" data-en="⬇ Export PDF">⬇ Export PDF</button>
            <button class="btn btn-outline btn-sm" style="border-color:var(--bl-bd);color:var(--bl);background:var(--bl-dim)" data-id="⚡ Perbaiki Semua AI" data-en="⚡ AI Fix All">⚡ Perbaiki Semua AI</button>
            <button class="btn btn-outline btn-sm" data-id="✉ Kirim ke Tim Legal" data-en="✉ Send to Legal Team">✉ Kirim ke Tim Legal</button>
          </div>
        </div>
        <!-- Progress bars -->
        <div style="padding:14px 22px;border-top:1px solid var(--bd-n);display:grid;grid-template-columns:1fr 1fr;gap:14px;background:var(--surface2)">
          <div>
            <div style="display:flex;justify-content:space-between;font-size:11.5px;margin-bottom:4px"><span style="color:var(--t2);font-weight:500" data-id="Standar PLN 2025" data-en="PLN Standards 2025">Standar PLN 2025</span><span style="color:var(--am);font-weight:600">68%</span></div>
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
            <div style="font-family:'Playfair Display',serif;font-size:15px;font-weight:600;color:var(--t1)" data-id="Detail Klausul" data-en="Clause Details">Detail Klausul</div>
            <select class="btn btn-outline btn-sm" style="cursor:pointer">
              <option data-id="Semua Klausul" data-en="All Clauses">Semua Klausul</option>
              <option data-id="Tidak Patuh Saja" data-en="Non-Compliant Only">Tidak Patuh Saja</option>
              <option data-id="Berisiko" data-en="At Risk">Berisiko</option>
            </select>
          </div>
          <div style="overflow-x:auto">
            <table class="ctbl">
              <thead><tr>
                <th style="width:120px" data-id="Klausul" data-en="Clause">Klausul</th>
                <th data-id="Status &amp; Keterangan" data-en="Status &amp; Description">Status &amp; Keterangan</th>
                <th style="width:85px" data-id="Risiko" data-en="Risk">Risiko</th>
                <th style="width:90px">Ref.</th>
                <th style="width:90px" data-id="Aksi" data-en="Action">Aksi</th>
              </tr></thead>
              <tbody>
                <tr class="r-gr">
                  <td><div style="font-size:12.5px;font-weight:600">Pasal 3</div><div style="font-size:10.5px;color:var(--t3)" data-id="Jangka Waktu" data-en="Duration">Jangka Waktu</div></td>
                  <td><span class="badge b-gr" data-id="✅ Patuh" data-en="✅ Compliant">✅ Patuh</span><div style="font-size:11px;color:var(--t3);margin-top:3px" data-id="Durasi 12 bulan dengan opsi perpanjangan tertulis" data-en="12-month duration with written extension option">Durasi 12 bulan dengan opsi perpanjangan tertulis</div></td>
                  <td><span class="badge b-gr" data-id="🟢 Rendah" data-en="🟢 Low">🟢 Rendah</span></td>
                  <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">PLN-STD Ps.7</span></td>
                  <td><button class="btn btn-outline btn-sm" data-id="Lihat" data-en="View">Lihat</button></td>
                </tr>

                <tr class="r-re" style="cursor:pointer" onclick="toggleDetail('cd1')">
                  <td><div style="font-size:12.5px;font-weight:600">Pasal 8</div><div style="font-size:10.5px;color:var(--t3)" data-id="Perpanjangan Otomatis" data-en="Automatic Extension">Perpanjangan Otomatis</div></td>
                  <td><span class="badge b-re" data-id="❌ Tidak Patuh" data-en="❌ Non-Compliant">❌ Tidak Patuh</span><div style="font-size:11px;color:var(--t3);margin-top:3px" data-id="Tidak ada notifikasi 30 hari — wajib per OJK POJK 2024" data-en="No 30-day notification — required per OJK POJK 2024">Tidak ada notifikasi 30 hari — wajib per OJK POJK 2024</div></td>
                  <td><span class="badge b-re" data-id="🔴 Kritis" data-en="🔴 Critical">🔴 Kritis</span></td>
                  <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">OJK Ps.9</span></td>
                  <td><button class="btn btn-re btn-sm" onclick="event.stopPropagation()" data-id="Perbaiki →" data-en="Fix →">Perbaiki →</button></td>
                </tr>
                <tr id="cd1" style="display:none"><td colspan="5" style="padding:12px 16px !important;background:var(--bl-dim)">
                  <div class="ai-fix-block"><div class="ai-fix-lbl" data-id="✦ Redline AI yang Disarankan" data-en="✦ Suggested AI Redline">✦ Redline AI yang Disarankan</div><div class="ai-fix-txt" data-id="Tambahkan setelah kalimat pertama Pasal 8:<br/><span class='add-text'>'…kecuali salah satu Pihak memberikan pemberitahuan tertulis penolakan sekurang-kurangnya 30 (tiga puluh) hari kalender sebelum berakhirnya Jangka Waktu.'</span><br/><span style='font-size:11px;color:var(--t3)'>Sumber: OJK POJK 2024 Ps.9 · PLN-STD-2025 Ps.7.2</span>" data-en="Add after the first sentence of Article 8:<br/><span class='add-text'>'…unless either Party provides written notice of rejection at least 30 (thirty) calendar days before the end of the Term.'</span><br/><span style='font-size:11px;color:var(--t3)'>Source: OJK POJK 2024 Art.9 · PLN-STD-2025 Art.7.2</span>">Tambahkan setelah kalimat pertama Pasal 8:<br/><span class="add-text">"…kecuali salah satu Pihak memberikan pemberitahuan tertulis penolakan sekurang-kurangnya 30 (tiga puluh) hari kalender sebelum berakhirnya Jangka Waktu."</span><br/><span style="font-size:11px;color:var(--t3)">Sumber: OJK POJK 2024 Ps.9 · PLN-STD-2025 Ps.7.2</span></div></div>
                  <div style="display:flex;gap:8px;margin-top:10px"><button class="btn btn-gr btn-sm" data-id="✅ Terima &amp; Terapkan" data-en="✅ Accept &amp; Apply">✅ Terima &amp; Terapkan</button><button class="btn btn-outline btn-sm" data-id="✏️ Edit Manual" data-en="✏️ Manual Edit">✏️ Edit Manual</button><button class="btn btn-outline btn-sm" data-id="❌ Abaikan" data-en="❌ Ignore">❌ Abaikan</button></div>
                </td></tr>

                <tr class="r-re" style="cursor:pointer" onclick="toggleDetail('cd2')">
                  <td><div style="font-size:12.5px;font-weight:600">Pasal 12</div><div style="font-size:10.5px;color:var(--t3)" data-id="Ganti Rugi" data-en="Liability">Ganti Rugi</div></td>
                  <td><span class="badge b-re" data-id="❌ Tidak Patuh" data-en="❌ Non-Compliant">❌ Tidak Patuh</span><div style="font-size:11px;color:var(--t3);margin-top:3px" data-id="Tidak ada liability cap — eksposur finansial tidak terbatas" data-en="No liability cap — unlimited financial exposure">Tidak ada liability cap — eksposur finansial tidak terbatas</div></td>
                  <td><span class="badge b-re" data-id="🔴 Kritis" data-en="🔴 Critical">🔴 Kritis</span></td>
                  <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">PLN-STD Ps.4</span></td>
                  <td><button class="btn btn-re btn-sm" onclick="event.stopPropagation()" data-id="Perbaiki →" data-en="Fix →">Perbaiki →</button></td>
                </tr>
                <tr id="cd2" style="display:none"><td colspan="5" style="padding:12px 16px !important;background:var(--bl-dim)">
                  <div class="ai-fix-block"><div class="ai-fix-lbl" data-id="✦ Redline AI yang Disarankan" data-en="✦ Suggested AI Redline">✦ Redline AI yang Disarankan</div><div class="ai-fix-txt" data-id="Ganti: <span class='del-text'>'atas segala kerugian yang timbul tanpa batas'</span><br/>Dengan: <span class='add-text'>'atas kerugian langsung dengan batas maksimum sebesar nilai total kontrak dalam Lampiran B'</span><br/><span style='font-size:11px;color:var(--t3)'>Sumber: PLN-STD-2025 Ps.4.2 · UU No.30/2009 Ps.48</span>" data-en="Replace: <span class='del-text'>'for all losses incurred without limit'</span><br/>With: <span class='add-text'>'for direct losses up to the maximum amount of the total contract value in Annex B'</span><br/><span style='font-size:11px;color:var(--t3)'>Source: PLN-STD-2025 Art.4.2 · Law No.30/2009 Art.48</span>">Ganti: <span class="del-text">"atas segala kerugian yang timbul tanpa batas"</span><br/>Dengan: <span class="add-text">"atas kerugian langsung dengan batas maksimum sebesar nilai total kontrak dalam Lampiran B"</span><br/><span style="font-size:11px;color:var(--t3)">Sumber: PLN-STD-2025 Ps.4.2 · UU No.30/2009 Ps.48</span></div></div>
                  <div style="display:flex;gap:8px;margin-top:10px"><button class="btn btn-gr btn-sm" data-id="✅ Terima &amp; Terapkan" data-en="✅ Accept &amp; Apply">✅ Terima &amp; Terapkan</button><button class="btn btn-outline btn-sm" data-id="✏️ Edit Manual" data-en="✏️ Manual Edit">✏️ Edit Manual</button><button class="btn btn-outline btn-sm" data-id="❌ Abaikan" data-en="❌ Ignore">❌ Abaikan</button></div>
                </td></tr>

                <tr class="r-am" style="cursor:pointer" onclick="toggleDetail('cd3')">
                  <td><div style="font-size:12.5px;font-weight:600">Pasal 15</div><div style="font-size:10.5px;color:var(--t3)" data-id="Pilihan Hukum" data-en="Choice of Law">Pilihan Hukum</div></td>
                  <td><span class="badge b-am" data-id="⚠️ Berisiko" data-en="⚠️ At Risk">⚠️ Berisiko</span><div style="font-size:11px;color:var(--t3);margin-top:3px" data-id="Yurisdiksi tidak spesifik — perlu diperjelas" data-en="Jurisdiction not specific — needs clarification">Yurisdiksi tidak spesifik — perlu diperjelas</div></td>
                  <td><span class="badge b-am" data-id="🟠 Tinggi" data-en="🟠 High">🟠 Tinggi</span></td>
                  <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">PLN-STD Ps.11</span></td>
                  <td><button class="btn btn-am btn-sm" onclick="event.stopPropagation()" data-id="Tinjau →" data-en="Review →">Tinjau →</button></td>
                </tr>
                <tr id="cd3" style="display:none"><td colspan="5" style="padding:12px 16px !important;background:var(--bl-dim)">
                  <div class="ai-fix-block"><div class="ai-fix-lbl" data-id="✦ Saran AI" data-en="✦ AI Suggestion">✦ Saran AI</div><div class="ai-fix-txt" data-id="Perjelas menjadi: <span class='add-text'>'Perjanjian ini tunduk pada hukum Republik Indonesia. Sengketa diselesaikan melalui BANI atau Pengadilan Negeri Jakarta Selatan.'</span><br/><span style='font-size:11px;color:var(--t3)'>Sumber: PLN-STD-2025 Ps.11 · UU No.30/2009 Ps.48</span>" data-en="Clarify to: <span class='add-text'>'This agreement is subject to the laws of the Republic of Indonesia. Disputes shall be resolved through BANI or the South Jakarta District Court.'</span><br/><span style='font-size:11px;color:var(--t3)'>Source: PLN-STD-2025 Art.11 · Law No.30/2009 Art.48</span>">Perjelas menjadi: <span class="add-text">"Perjanjian ini tunduk pada hukum Republik Indonesia. Sengketa diselesaikan melalui BANI atau Pengadilan Negeri Jakarta Selatan."</span><br/><span style="font-size:11px;color:var(--t3)">Sumber: PLN-STD-2025 Ps.11 · UU No.30/2009 Ps.48</span></div></div>
                  <div style="display:flex;gap:8px;margin-top:10px"><button class="btn btn-gr btn-sm" data-id="✅ Terima &amp; Terapkan" data-en="✅ Accept &amp; Apply">✅ Terima &amp; Terapkan</button><button class="btn btn-outline btn-sm" data-id="✏️ Edit Manual" data-en="✏️ Manual Edit">✏️ Edit Manual</button><button class="btn btn-outline btn-sm" data-id="❌ Abaikan" data-en="❌ Ignore">❌ Abaikan</button></div>
                </td></tr>

                <tr class="r-gr">
                  <td><div style="font-size:12.5px;font-weight:600">Pasal 19</div><div style="font-size:10.5px;color:var(--t3)">Force Majeure</div></td>
                  <td><span class="badge b-gr" data-id="✅ Patuh" data-en="✅ Compliant">✅ Patuh</span><div style="font-size:11px;color:var(--t3);margin-top:3px" data-id="Cakupan mencakup pandemi dan bencana siber" data-en="Coverage includes pandemic and cyber disasters">Cakupan mencakup pandemi dan bencana siber</div></td>
                  <td><span class="badge b-gr" data-id="🟢 Rendah" data-en="🟢 Low">🟢 Rendah</span></td>
                  <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">—</span></td>
                  <td><button class="btn btn-outline btn-sm" data-id="Lihat" data-en="View">Lihat</button></td>
                </tr>
                <tr class="r-gr">
                  <td><div style="font-size:12.5px;font-weight:600">Pasal 22</div><div style="font-size:10.5px;color:var(--t3)" data-id="Kerahasiaan" data-en="Confidentiality">Kerahasiaan</div></td>
                  <td><span class="badge b-gr" data-id="✅ Patuh" data-en="✅ Compliant">✅ Patuh</span><div style="font-size:11px;color:var(--t3);margin-top:3px" data-id="Klausul NDA standar sesuai ISO 27001 Section 5" data-en="Standard NDA clause compliant with ISO 27001 Section 5">Klausul NDA standar sesuai ISO 27001 Section 5</div></td>
                  <td><span class="badge b-gr" data-id="🟢 Rendah" data-en="🟢 Low">🟢 Rendah</span></td>
                  <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t4)">ISO 27001</span></td>
                  <td><button class="btn btn-outline btn-sm" data-id="Lihat" data-en="View">Lihat</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="padding:12px 18px;border-top:1px solid var(--bd-n)">
            <div class="disclaimer"><span style="font-size:13px;color:var(--am);flex-shrink:0">⚠</span><span style="font-size:11px;color:#7c4a0a;font-style:italic;line-height:1.6" data-id="Redline yang disarankan wajib ditinjau pengacara berwenang sebelum diterapkan. Lexia tidak menggantikan peran konsultan hukum." data-en="Suggested redlines must be reviewed by an authorized lawyer before application. Lexia does not replace the role of a legal consultant.">Redline yang disarankan wajib ditinjau pengacara berwenang sebelum diterapkan. Lexia tidak menggantikan peran konsultan hukum.</span></div>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div style="display:flex;flex-direction:column;gap:14px">
          <!-- History -->
          <div class="card card-p">
            <div style="font-family:'Playfair Display',serif;font-size:15px;font-weight:600;color:var(--t1);margin-bottom:12px" data-id="Riwayat Analisis" data-en="Analysis History">Riwayat Analisis</div>
            <div class="hist-item"><span style="font-size:18px">📄</span><div style="flex:1"><div style="font-size:12.5px;font-weight:600;color:var(--t1)">PKS-Turbin-2025.pdf</div><div style="font-size:11px;color:var(--t3)">27 Feb 2026 · 2 <span data-id="Kritis" data-en="Critical">Kritis</span></div></div><span class="hist-score-pill" style="background:var(--am-dim);color:var(--am);border:1px solid var(--am-bd)">73%</span></div>
            <div class="hist-item"><span style="font-size:18px">📝</span><div style="flex:1"><div style="font-size:12.5px;font-weight:600;color:var(--t1)">KSO-Distribusi-2026.docx</div><div style="font-size:11px;color:var(--t3)">25 Feb 2026 · 0 <span data-id="Kritis" data-en="Critical">Kritis</span></div></div><span class="hist-score-pill" style="background:var(--gr-dim);color:var(--gr);border:1px solid var(--gr-bd)">91%</span></div>
            <div class="hist-item"><span style="font-size:18px">📄</span><div style="flex:1"><div style="font-size:12.5px;font-weight:600;color:var(--t1)">NDA-Vendor-Feb26.pdf</div><div style="font-size:11px;color:var(--t3)">24 Feb 2026 · 1 <span data-id="Kritis" data-en="Critical">Kritis</span></div></div><span class="hist-score-pill" style="background:var(--am-dim);color:var(--am);border:1px solid var(--am-bd)">82%</span></div>
            <div class="hist-item"><span style="font-size:18px">📄</span><div style="flex:1"><div style="font-size:12.5px;font-weight:600;color:var(--t1)">Perjanjian-Sewa.pdf</div><div style="font-size:11px;color:var(--t3)">22 Feb 2026 · 4 <span data-id="Kritis" data-en="Critical">Kritis</span></div></div><span class="hist-score-pill" style="background:var(--re-dim);color:var(--re);border:1px solid var(--re-bd)">55%</span></div>
            <button class="btn btn-outline btn-full btn-sm" style="margin-top:10px" data-id="Lihat Semua →" data-en="View All →">Lihat Semua →</button>
          </div>
          <!-- Export -->
          <div class="card card-p">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--t4);margin-bottom:12px" data-id="Ekspor &amp; Aksi" data-en="Export &amp; Actions">Ekspor &amp; Aksi</div>
            <div style="display:flex;flex-direction:column;gap:7px">
              <button class="btn btn-bl btn-full" style="font-size:12.5px" data-id="📄 Laporan Kepatuhan Lengkap" data-en="📄 Full Compliance Report">📄 Laporan Kepatuhan Lengkap</button>
              <button class="btn btn-outline btn-full" style="font-size:12.5px;border-color:var(--bl-bd);color:var(--bl);background:var(--bl-dim)" data-id="⚡ Perbaiki Semua dengan AI" data-en="⚡ Fix All with AI">⚡ Perbaiki Semua dengan AI</button>
              <button class="btn btn-outline btn-full" style="font-size:12.5px" data-id="⬇ Export Redline Word" data-en="⬇ Export Redline Word">⬇ Export Redline Word</button>
              <button class="btn btn-outline btn-full" style="font-size:12.5px" data-id="✉ Kirim Ringkasan ke Tim" data-en="✉ Send Summary to Team">✉ Kirim Ringkasan ke Tim</button>
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
      <input class="chat-input" type="text"
        data-placeholder-id="Tanya Lexia — mis. 'Apa yang harus saya lakukan untuk meningkatkan skor kepatuhan?'…"
        data-placeholder-en="Ask Lexia — e.g., 'What should I do to improve the compliance score?'…"
        placeholder="Tanya Lexia — mis. 'Apa yang harus saya lakukan untuk meningkatkan skor kepatuhan?'…"/>
      <div class="chip-row">
        <span class="chip" data-id="⚡ Perbaiki Otomatis" data-en="⚡ Auto Fix">⚡ Perbaiki Otomatis</span>
        <span class="chip" data-id="⚖️ Bandingkan Versi" data-en="⚖️ Compare Versions">⚖️ Bandingkan Versi</span>
      </div>
      <div class="chat-div"></div>
      <button class="attach-btn"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 7.5l-6 6a4 4 0 01-5.5-5.5l7-7a2.5 2.5 0 013.5 3.5l-7 7a1 1 0 01-1.4-1.4l6-6"/></svg></button>
      <button class="send-btn"><span data-id="Kirim" data-en="Send">Kirim</span> <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 8h12M9 4l4 4-4 4"/></svg></button>
    </div>
    <div class="chat-hint"><span class="kbd">⌘K</span> command palette &nbsp;·&nbsp; <span class="kbd">@</span> <span data-id="mention dokumen" data-en="mention document">mention dokumen</span> &nbsp;·&nbsp; Lexia AI v2.1</div>
  </div>

<!-- LOADING -->
<div class="loading-overlay" id="loadingOverlay" style="display:none">
  <div class="loading-card">
    <div class="loading-spinner"></div>
    <div style="font-family:'Playfair Display',serif;font-size:16px;color:var(--t1)" data-id="Menganalisis Kepatuhan..." data-en="Analyzing Compliance...">Menganalisis Kepatuhan...</div>
    <div style="font-size:12px;color:var(--t3);margin-top:5px" data-id="AI sedang memverifikasi setiap klausul" data-en="AI is verifying each clause">AI sedang memverifikasi setiap klausul</div>
    <div id="lSteps" style="margin-top:14px">
      <div class="l-step active" id="ls1" data-id="⟳ Mengekstrak klausul dari dokumen..." data-en="⟳ Extracting clauses from document...">⟳ Mengekstrak klausul dari dokumen...</div>
      <div class="l-step" id="ls2" data-id="○ Mencocokkan dengan standar PLN 2025..." data-en="○ Matching against PLN 2025 standards...">○ Mencocokkan dengan standar PLN 2025...</div>
      <div class="l-step" id="ls3" data-id="○ Mencocokkan dengan OJK POJK 2024..." data-en="○ Matching against OJK POJK 2024...">○ Mencocokkan dengan OJK POJK 2024...</div>
      <div class="l-step" id="ls4" data-id="○ Menilai tingkat risiko setiap klausul..." data-en="○ Assessing risk level of each clause...">○ Menilai tingkat risiko setiap klausul...</div>
      <div class="l-step" id="ls5" data-id="○ Menghasilkan saran redline AI..." data-en="○ Generating AI redline suggestions...">○ Menghasilkan saran redline AI...</div>
      <div class="l-step" id="ls6" data-id="○ Menyusun laporan kepatuhan akhir..." data-en="○ Compiling final compliance report...">○ Menyusun laporan kepatuhan akhir...</div>
    </div>
  </div>
</div>
  `;
}

export function initInteractions(root) {
  window.setUploadMode = function(m) {
    const single = document.getElementById('modeSingle');
    const batch = document.getElementById('modeBatch');
    const singleMode = document.getElementById('singleMode');
    const batchMode = document.getElementById('batchMode');
    const modeHint = document.getElementById('modeHint');
    if (single) single.classList.toggle('active', m === 'single');
    if (batch)  batch.classList.toggle('active', m === 'batch');
    if (singleMode) singleMode.style.display = m === 'single' ? 'block' : 'none';
    if (batchMode)  batchMode.style.display  = m === 'batch'  ? 'block' : 'none';
    if (modeHint) {
      modeHint.setAttribute('data-id', m === 'single'
        ? 'Unggah satu kontrak untuk dianalisis secara mendalam.'
        : 'Unggah hingga 200 dokumen sekaligus — hasil paralel dalam hitungan menit.');
      modeHint.setAttribute('data-en', m === 'single'
        ? 'Upload one contract for in-depth analysis.'
        : 'Upload up to 200 documents at once — parallel results in minutes.');
      if (window.setLang) window.setLang(localStorage.getItem('lexia-lang') || 'id');
    }
  };

  window.simulateUpload = function() {
    const z = document.getElementById('singleZone');
    if (!z) return;
    const lang = localStorage.getItem('lexia-lang') || 'id';
    z.classList.add('filled');
    z.innerHTML = lang === 'id'
      ? '<div class="uz-icon">📄</div><div class="uz-main">PKS-Pengadaan-Turbin-2025.pdf</div><div class="uz-sub" style="color:var(--gr);font-weight:500">✅ 2.4MB · Siap dianalisis</div><div class="uz-spec" style="color:var(--t3);margin-top:6px">Klik untuk mengganti</div>'
      : '<div class="uz-icon">📄</div><div class="uz-main">PKS-Pengadaan-Turbin-2025.pdf</div><div class="uz-sub" style="color:var(--gr);font-weight:500">✅ 2.4MB · Ready for analysis</div><div class="uz-spec" style="color:var(--t3);margin-top:6px">Click to replace</div>';
    z.onclick = function() {
      z.classList.remove('filled');
      const lang2 = localStorage.getItem('lexia-lang') || 'id';
      z.innerHTML = lang2 === 'id'
        ? '<div class="uz-icon" style="color:var(--t4)">☁</div><div class="uz-main" style="color:var(--t3)">Seret &amp; Lepas Kontrak Anda</div><div class="uz-sub">atau <span class="uz-link">pilih dari komputer</span></div><div class="uz-spec">PDF, DOCX, DOC · Maks. 100MB</div>'
        : '<div class="uz-icon" style="color:var(--t4)">☁</div><div class="uz-main" style="color:var(--t3)">Drag &amp; Drop Your Contract</div><div class="uz-sub">or <span class="uz-link">choose from computer</span></div><div class="uz-spec">PDF, DOCX, DOC · Max. 100MB</div>';
      z.onclick = () => simulateUpload();
    };
  };

  window.simulateBatch = function() {
    const list = document.getElementById('batchList');
    if (list) list.style.display = 'flex';
  };

  window.togglePolicy = function(el) {
    if (!el) return;
    el.classList.toggle('checked');
    const cb = el.querySelector('input[type=checkbox]');
    if (cb) cb.checked = el.classList.contains('checked');
  };

  window.toggleDetail = function(id) {
    const r = document.getElementById(id);
    if (r) r.style.display = r.style.display === 'none' ? 'table-row' : 'none';
  };

  window.runAnalysis = function() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.style.display = 'flex';
    // Re-apply lang so loading steps show in current language
    if (window.setLang) window.setLang(localStorage.getItem('lexia-lang') || 'id');
    const ids = ['ls1','ls2','ls3','ls4','ls5','ls6'];
    let i = 0;
    const t = setInterval(() => {
      if (i < ids.length) {
        const el = document.getElementById(ids[i]);
        if (el) {
          el.classList.remove('active');
          el.classList.add('done');
          el.textContent = '✅ ' + el.textContent.replace('⟳ ','').replace('○ ','');
        }
        i++;
        if (i < ids.length) {
          const nx = document.getElementById(ids[i]);
          if (nx) {
            nx.classList.add('active');
            nx.textContent = '⟳ ' + nx.textContent.replace('○ ','');
          }
        }
      } else {
        clearInterval(t);
        setTimeout(() => {
          const ov = document.getElementById('loadingOverlay');
          if (ov) ov.style.display = 'none';
          if (typeof window.showResults === 'function') window.showResults();
        }, 600);
      }
    }, 650);
  };

  window.showResults = function() {
    const r = document.getElementById('resultsBlock');
    if (r) {
      r.style.display = 'block';
      r.style.opacity = '0';
      r.style.transform = 'translateY(10px)';
      requestAnimationFrame(() => {
        r.style.transition = 'opacity .4s ease,transform .4s ease';
        r.style.opacity = '1';
        r.style.transform = 'translateY(0)';
      });
    }
    const lbl = document.getElementById('analyzeBtnLbl');
    if (lbl) {
      lbl.setAttribute('data-id', '⟳ Jalankan Ulang Analisis');
      lbl.setAttribute('data-en', '⟳ Re-run Analysis');
      if (window.setLang) window.setLang(localStorage.getItem('lexia-lang') || 'id');
    }
    const scroll = document.querySelector('.main-scroll');
    if (scroll) scroll.scrollTop = 9999;
  };

  root.querySelectorAll('.batch-remove').forEach(btn => btn.addEventListener('click', function() {
    const f = this.closest('.batch-file');
    if (f) f.remove();
  }));

  const ci = root.querySelector('.chat-input');
  if (ci) {
    ci.addEventListener('keydown', function(e) { if (e.key === 'Enter' && !e.shiftKey) e.preventDefault(); });
  }
  const sb = root.querySelector('.send-btn');
  if (sb) {
    sb.addEventListener('click', function() {
      if (ci && ci.value.trim()) { ci.value = ''; ci.focus(); }
    });
  }

  if (typeof window.setLang === 'function') {
    window.setLang(localStorage.getItem('lexia-lang') || 'id');
  }
}
