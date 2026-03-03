export function render(container) {
  container.innerHTML = `

  <div class="main-scroll">

    <!-- ─── STATIC PAGE HEADER ─── -->
    <div class="ph">
      <div>
        <div class="ph-title" data-id="Bandingkan Dua <em>Dokumen</em>" data-en="Compare Two <em>Documents</em>">Bandingkan Dua <em>Dokumen</em></div>
        <div class="ph-sub" data-id="Diff otomatis dengan redline AI untuk menemukan perbedaan material" data-en="Automatic diff with AI redline to find material differences">Diff otomatis dengan redline AI untuk menemukan perbedaan material</div>
      </div>
      <div class="ph-right">
        <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" onclick="if(window.setLang) window.setLang('id')">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" onclick="if(window.setLang) window.setLang('en')">🇺🇸 EN</button>
        </div>
        <button class="btn btn-outline" id="cmpBtnUpload" onclick="resetComparison()" data-id="📁 Upload Dokumen" data-en="📁 Upload Documents">📁 Upload Dokumen</button>
        <button class="btn btn-bl" id="cmpBtnExport" style="display:none" data-id="⬇ Ekspor Redline" data-en="⬇ Export Redline">⬇ Ekspor Redline</button>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════ -->
    <!--  PHASE 1 — UPLOAD STATE                           -->
    <!-- ═══════════════════════════════════════════════════ -->
    <div id="cmpUpload">
      <div class="cmp-upload-hero">

        <div class="cmp-drop-row">

          <!-- ── Zone A ── -->
          <div class="cmp-drop-zone" id="dropZoneA" onclick="simulateUploadA()">
            <svg class="cmp-drop-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <div class="cmp-drop-tag" data-id="Dokumen A · Versi Lama" data-en="Document A · Original">Dokumen A · Versi Lama</div>
            <div class="cmp-drop-main" data-id="Seret file ke sini, atau <span class='cmp-browse'>telusuri</span>" data-en="Drop a file here, or <span class='cmp-browse'>browse</span>">Seret file ke sini, atau <span class="cmp-browse">telusuri</span></div>
            <div class="cmp-drop-spec" data-id="Format: .pdf, .doc, .docx · Maks. 10MB" data-en="Formats: .pdf, .doc, .docx · up to 10MB">Format: .pdf, .doc, .docx · Maks. 10MB</div>
          </div>

          <!-- ── VS divider ── -->
          <div class="cmp-vs-col">
            <div class="cmp-vs-ring">⇄</div>
          </div>

          <!-- ── Zone B ── -->
          <div class="cmp-drop-zone" id="dropZoneB" onclick="simulateUploadB()">
            <svg class="cmp-drop-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <div class="cmp-drop-tag" data-id="Dokumen B · Versi Baru" data-en="Document B · Revised">Dokumen B · Versi Baru</div>
            <div class="cmp-drop-main" data-id="Seret file ke sini, atau <span class='cmp-browse'>telusuri</span>" data-en="Drop a file here, or <span class='cmp-browse'>browse</span>">Seret file ke sini, atau <span class="cmp-browse">telusuri</span></div>
            <div class="cmp-drop-spec" data-id="Format: .pdf, .doc, .docx · Maks. 10MB" data-en="Formats: .pdf, .doc, .docx · up to 10MB">Format: .pdf, .doc, .docx · Maks. 10MB</div>
          </div>

        </div><!-- /cmp-drop-row -->

        <div class="cmp-action-bar">
          <button class="btn btn-bl cmp-compare-btn" id="compareBtn" onclick="runComparison()" disabled>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M3 8h10M3 4h7M3 12h5"/><path d="M10 5l3 3-3 3"/></svg>
            <span id="compareBtnLbl" data-id="Bandingkan Dokumen" data-en="Compare Documents">Bandingkan Dokumen</span>
          </button>
          <div class="cmp-action-hint" id="cmpHint" data-id="Unggah kedua dokumen untuk memulai perbandingan" data-en="Upload both documents to start comparison">Unggah kedua dokumen untuk memulai perbandingan</div>
        </div>

      </div>
    </div><!-- /cmpUpload -->


    <!-- ═══════════════════════════════════════════════════ -->
    <!--  PHASE 2 — RESULT STATE                           -->
    <!-- ═══════════════════════════════════════════════════ -->
    <div id="cmpResults" style="display:none">

      <!-- Document info bar -->
      <div class="compare-header">
        <div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">
          <div class="cmp-doc-pill">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" style="flex-shrink:0"><path d="M10 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6L10 2z"/><path d="M10 2v4h4"/></svg>
            <span id="docALabel" data-id="Dokumen A" data-en="Document A" style="font-size:10px;color:var(--t4)">Dokumen A</span>
            <span id="docAName" style="font-size:12.5px;font-weight:600;color:var(--t1)">PKS-Turbin-v1.0-2024.pdf</span>
          </div>
          <div style="font-size:18px;color:var(--t4);line-height:1">⇄</div>
          <div class="cmp-doc-pill cmp-doc-b">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" style="flex-shrink:0"><path d="M10 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6L10 2z"/><path d="M10 2v4h4"/></svg>
            <span id="docBLabel" data-id="Dokumen B" data-en="Document B" style="font-size:10px;color:var(--t4)">Dokumen B</span>
            <span id="docBName" style="font-size:12.5px;font-weight:600;color:var(--t1)">PKS-Turbin-v2.1-2026.pdf</span>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-shrink:0">
          <span class="badge b-am" data-id="14 perbedaan ditemukan" data-en="14 differences found">14 perbedaan ditemukan</span>
          <button class="btn btn-outline btn-sm" data-id="Tandai Semua" data-en="Mark All">Tandai Semua</button>
        </div>
      </div>

      <!-- Diff stats -->
      <div class="diff-stats">
        <div class="stat-card"><div class="stat-n" style="color:var(--re)">6</div><div class="stat-lbl" data-id="Dihapus" data-en="Deleted">Dihapus</div></div>
        <div class="stat-card"><div class="stat-n" style="color:var(--gr)">8</div><div class="stat-lbl" data-id="Ditambah" data-en="Added">Ditambah</div></div>
        <div class="stat-card"><div class="stat-n" style="color:var(--am)">3</div><div class="stat-lbl" data-id="Material" data-en="Material">Material</div></div>
        <div class="stat-card"><div class="stat-n" style="color:var(--bl)">14</div><div class="stat-lbl" data-id="Total Perubahan" data-en="Total Changes">Total Perubahan</div></div>
      </div>

      <!-- Side-by-side comparison panels -->
      <div class="compare-grid">

        <!-- Panel A — Original -->
        <div class="diff-panel">
          <div class="diff-head">
            <span style="font-size:12px;font-weight:600;color:var(--t2)" data-id="Versi A — Original 2024" data-en="Version A — Original 2024">Versi A — Original 2024</span>
            <span class="badge b-muted">v1.0</span>
          </div>
          <div class="diff-body">

            <div class="diff-article">
              <p class="diff-article-hd" data-id="PASAL 1 — DEFINISI" data-en="ARTICLE 1 — DEFINITIONS">PASAL 1 — DEFINISI</p>
              <p class="diff-clause">1.1 <span data-id="&quot;Perjanjian&quot; berarti Perjanjian Kerja Sama ini beserta seluruh lampiran yang menjadi bagian tidak terpisahkan daripadanya." data-en="&quot;Agreement&quot; means this Cooperation Agreement together with all annexes which form an inseparable part thereof.">"Perjanjian" berarti Perjanjian Kerja Sama ini beserta seluruh lampiran yang menjadi bagian tidak terpisahkan daripadanya.</span></p>
              <p class="diff-clause">1.2 <span data-id="&quot;Jangka Waktu&quot; berarti periode pelaksanaan Perjanjian sebagaimana diatur dalam Pasal 4." data-en="&quot;Term&quot; means the period of execution of the Agreement as regulated in Article 4.">"Jangka Waktu" berarti periode pelaksanaan Perjanjian sebagaimana diatur dalam Pasal 4.</span></p>
              <p class="diff-clause diff-unchanged" data-id="✓ Tidak ada perubahan pada pasal ini" data-en="✓ No changes in this article">✓ Tidak ada perubahan pada pasal ini</p>
            </div>

            <div class="diff-article">
              <p class="diff-article-hd" data-id="PASAL 3 — NILAI KONTRAK" data-en="ARTICLE 3 — CONTRACT VALUE">PASAL 3 — NILAI KONTRAK</p>
              <p class="diff-clause">3.1 <span data-id="Nilai Kontrak yang disepakati adalah sebesar " data-en="The agreed Contract Value is ">Nilai Kontrak yang disepakati adalah sebesar </span><span class="del">Rp 45.000.000.000 (Empat Puluh Lima Miliar Rupiah)</span><span data-id=", belum termasuk PPN." data-en=", excluding VAT.">, belum termasuk PPN.</span></p>
              <p class="diff-clause">3.2 <span data-id="Pembayaran dilakukan dalam " data-en="Payment shall be made in ">Pembayaran dilakukan dalam </span><span class="del">3 (tiga) termin</span><span data-id=" sesuai progress pekerjaan yang telah diverifikasi." data-en=" in accordance with verified work progress."> sesuai progress pekerjaan yang telah diverifikasi.</span></p>
              <p class="diff-clause">3.3 <span class="del" data-id="Denda keterlambatan sebesar 1‰ (satu permil) per hari kalender dari nilai kontrak tanpa batas maksimum." data-en="Late penalty of 1‰ (one per mille) per calendar day of contract value with no maximum limit.">Denda keterlambatan sebesar 1‰ (satu permil) per hari kalender dari nilai kontrak tanpa batas maksimum.</span></p>
            </div>

            <div class="diff-article">
              <p class="diff-article-hd" data-id="PASAL 4 — JANGKA WAKTU" data-en="ARTICLE 4 — TERM">PASAL 4 — JANGKA WAKTU</p>
              <p class="diff-clause">4.1 <span data-id="Perjanjian ini berlaku selama " data-en="This Agreement shall be valid for ">Perjanjian ini berlaku selama </span><span class="del">24 (dua puluh empat) bulan</span><span data-id=" terhitung sejak tanggal penandatanganan." data-en=" commencing from the date of signing."> terhitung sejak tanggal penandatanganan.</span></p>
              <p class="diff-clause">4.2 <span data-id="Perpanjangan Perjanjian hanya dapat dilakukan atas kesepakatan tertulis Para Pihak." data-en="Extension of the Agreement may only be effected by written agreement of the Parties.">Perpanjangan Perjanjian hanya dapat dilakukan atas kesepakatan tertulis Para Pihak.</span></p>
            </div>

            <div class="diff-article">
              <p class="diff-article-hd" data-id="PASAL 8 — PERPANJANGAN OTOMATIS" data-en="ARTICLE 8 — AUTOMATIC EXTENSION">PASAL 8 — PERPANJANGAN OTOMATIS</p>
              <p class="diff-clause diff-absent" data-id="— Klausul ini tidak ada dalam Versi A" data-en="— This clause does not exist in Version A">— Klausul ini tidak ada dalam Versi A</p>
            </div>

            <div class="diff-article">
              <p class="diff-article-hd" data-id="PASAL 12 — GANTI RUGI" data-en="ARTICLE 12 — LIABILITY">PASAL 12 — GANTI RUGI</p>
              <p class="diff-clause">12.1 <span class="del" data-id="Pihak yang melanggar bertanggung jawab atas segala kerugian yang timbul tanpa batas maksimum pemulihan." data-en="The breaching party shall be liable for all losses incurred without any maximum recovery limit.">Pihak yang melanggar bertanggung jawab atas segala kerugian yang timbul tanpa batas maksimum pemulihan.</span></p>
              <p class="diff-clause">12.2 <span data-id="Klaim ganti rugi harus diajukan dalam waktu 90 hari sejak pihak yang dirugikan mengetahui adanya pelanggaran." data-en="Claims for damages must be filed within 90 days of the aggrieved party becoming aware of the breach.">Klaim ganti rugi harus diajukan dalam waktu 90 hari sejak pihak yang dirugikan mengetahui adanya pelanggaran.</span></p>
            </div>

          </div>
        </div>

        <!-- Panel B — Revised -->
        <div class="diff-panel">
          <div class="diff-head">
            <span style="font-size:12px;font-weight:600;color:var(--t2)" data-id="Versi B — Revisi 2026" data-en="Version B — Revised 2026">Versi B — Revisi 2026</span>
            <span class="badge b-gr">v2.1</span>
          </div>
          <div class="diff-body">

            <div class="diff-article">
              <p class="diff-article-hd" data-id="PASAL 1 — DEFINISI" data-en="ARTICLE 1 — DEFINITIONS">PASAL 1 — DEFINISI</p>
              <p class="diff-clause">1.1 <span data-id="&quot;Perjanjian&quot; berarti Perjanjian Kerja Sama ini beserta seluruh lampiran yang menjadi bagian tidak terpisahkan daripadanya." data-en="&quot;Agreement&quot; means this Cooperation Agreement together with all annexes which form an inseparable part thereof.">"Perjanjian" berarti Perjanjian Kerja Sama ini beserta seluruh lampiran yang menjadi bagian tidak terpisahkan daripadanya.</span></p>
              <p class="diff-clause">1.2 <span data-id="&quot;Jangka Waktu&quot; berarti periode pelaksanaan Perjanjian sebagaimana diatur dalam Pasal 4." data-en="&quot;Term&quot; means the period of execution of the Agreement as regulated in Article 4.">"Jangka Waktu" berarti periode pelaksanaan Perjanjian sebagaimana diatur dalam Pasal 4.</span></p>
              <p class="diff-clause diff-unchanged" data-id="✓ Tidak ada perubahan pada pasal ini" data-en="✓ No changes in this article">✓ Tidak ada perubahan pada pasal ini</p>
            </div>

            <div class="diff-article">
              <p class="diff-article-hd" data-id="PASAL 3 — NILAI KONTRAK" data-en="ARTICLE 3 — CONTRACT VALUE">PASAL 3 — NILAI KONTRAK</p>
              <p class="diff-clause">3.1 <span data-id="Nilai Kontrak yang disepakati adalah sebesar " data-en="The agreed Contract Value is ">Nilai Kontrak yang disepakati adalah sebesar </span><span class="ins">Rp 52.000.000.000 (Lima Puluh Dua Miliar Rupiah)</span><span data-id=", belum termasuk PPN." data-en=", excluding VAT.">, belum termasuk PPN.</span></p>
              <p class="diff-clause">3.2 <span data-id="Pembayaran dilakukan dalam " data-en="Payment shall be made in ">Pembayaran dilakukan dalam </span><span class="ins">4 (empat) termin</span><span data-id=" sesuai progress pekerjaan yang telah diverifikasi oleh Konsultan Pengawas independen." data-en=" in accordance with work progress verified by an independent Supervisory Consultant."> sesuai progress pekerjaan yang telah diverifikasi oleh Konsultan Pengawas independen.</span></p>
              <p class="diff-clause">3.3 <span class="ins" data-id="Denda keterlambatan sebesar 2‰ (dua permil) per hari kalender dari nilai paket pekerjaan yang terlambat, maksimum 5% dari nilai kontrak." data-en="Late penalty of 2‰ (two per mille) per calendar day of the delayed work package value, maximum 5% of contract value.">Denda keterlambatan sebesar 2‰ (dua permil) per hari kalender dari nilai paket pekerjaan yang terlambat, maksimum 5% dari nilai kontrak.</span></p>
            </div>

            <div class="diff-article">
              <p class="diff-article-hd" data-id="PASAL 4 — JANGKA WAKTU" data-en="ARTICLE 4 — TERM">PASAL 4 — JANGKA WAKTU</p>
              <p class="diff-clause">4.1 <span data-id="Perjanjian ini berlaku selama " data-en="This Agreement shall be valid for ">Perjanjian ini berlaku selama </span><span class="ins">36 (tiga puluh enam) bulan</span><span data-id=" terhitung sejak tanggal penandatanganan" data-en=" commencing from the date of signing"> terhitung sejak tanggal penandatanganan</span><span data-id=", " data-en=", ">, </span><ins><span data-id="dengan opsi perpanjangan 12 bulan atas kesepakatan Para Pihak." data-en="with a 12-month extension option upon mutual agreement of the Parties.">dengan opsi perpanjangan 12 bulan atas kesepakatan Para Pihak.</span></ins></p>
              <p class="diff-clause">4.2 <span data-id="Perpanjangan Perjanjian hanya dapat dilakukan atas kesepakatan tertulis Para Pihak." data-en="Extension of the Agreement may only be effected by written agreement of the Parties.">Perpanjangan Perjanjian hanya dapat dilakukan atas kesepakatan tertulis Para Pihak.</span></p>
            </div>

            <div class="diff-article">
              <p class="diff-article-hd" data-id="PASAL 8 — PERPANJANGAN OTOMATIS" data-en="ARTICLE 8 — AUTOMATIC EXTENSION">PASAL 8 — PERPANJANGAN OTOMATIS</p>
              <p class="diff-clause"><ins><span data-id="Perjanjian ini tidak dapat diperpanjang secara otomatis. Perpanjangan wajib dilaksanakan melalui addendum tertulis yang ditandatangani selambatnya 30 (tiga puluh) hari kalender sebelum berakhirnya Jangka Waktu." data-en="This Agreement may not be extended automatically. Extension must be executed via a written addendum signed no later than 30 (thirty) calendar days before the end of the Term.">Perjanjian ini tidak dapat diperpanjang secara otomatis. Perpanjangan wajib dilaksanakan melalui addendum tertulis yang ditandatangani selambatnya 30 (tiga puluh) hari kalender sebelum berakhirnya Jangka Waktu.</span></ins></p>
            </div>

            <div class="diff-article">
              <p class="diff-article-hd" data-id="PASAL 12 — GANTI RUGI" data-en="ARTICLE 12 — LIABILITY">PASAL 12 — GANTI RUGI</p>
              <p class="diff-clause">12.1 <ins><span data-id="Pihak yang melanggar bertanggung jawab atas kerugian langsung yang timbul, dengan batas maksimum sebesar total nilai kontrak sebagaimana tercantum dalam Lampiran B." data-en="The breaching party shall be liable for direct losses incurred, up to a maximum limit equal to the total contract value as stated in Annex B.">Pihak yang melanggar bertanggung jawab atas kerugian langsung yang timbul, dengan batas maksimum sebesar total nilai kontrak sebagaimana tercantum dalam Lampiran B.</span></ins></p>
              <p class="diff-clause">12.2 <span data-id="Klaim ganti rugi harus diajukan dalam waktu 90 hari sejak pihak yang dirugikan mengetahui adanya pelanggaran." data-en="Claims for damages must be filed within 90 days of the aggrieved party becoming aware of the breach.">Klaim ganti rugi harus diajukan dalam waktu 90 hari sejak pihak yang dirugikan mengetahui adanya pelanggaran.</span></p>
            </div>

          </div>
        </div>

      </div><!-- /compare-grid -->

      <!-- AI Analysis card -->
      <div class="card" style="margin-top:4px"><div class="cp">
        <div class="ch" style="margin-bottom:14px">
          <div>
            <div class="ch-title" data-id="Analisis AI — Temuan Material" data-en="AI Analysis — Material Findings">Analisis AI — Temuan Material</div>
            <div class="ch-sub" data-id="Perubahan yang berpotensi berdampak signifikan pada PLN" data-en="Changes potentially having significant impact on PLN">Perubahan yang berpotensi berdampak signifikan pada PLN</div>
          </div>
          <button class="btn btn-outline btn-sm" data-id="📋 Ekspor Analisis" data-en="📋 Export Analysis">📋 Ekspor Analisis</button>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
          <div style="padding:14px;background:var(--re-dim);border:1px solid var(--re-bd);border-radius:var(--r-sm)">
            <div style="font-size:11px;font-weight:700;color:var(--re);margin-bottom:6px;display:flex;align-items:center;gap:5px"><span>🔴</span><span data-id="Risiko Tinggi" data-en="High Risk">Risiko Tinggi</span></div>
            <div style="font-size:12px;color:var(--t2);line-height:1.55" data-id="Kenaikan nilai kontrak 15.6% (Rp 7 Miliar) tanpa justifikasi addendum yang jelas dalam dokumen revisi." data-en="Contract value increase of 15.6% (Rp 7 Billion) without clear addendum justification in the revised document.">Kenaikan nilai kontrak 15.6% (Rp 7 Miliar) tanpa justifikasi addendum yang jelas dalam dokumen revisi.</div>
          </div>
          <div style="padding:14px;background:var(--am-dim);border:1px solid var(--am-bd);border-radius:var(--r-sm)">
            <div style="font-size:11px;font-weight:700;color:var(--am);margin-bottom:6px;display:flex;align-items:center;gap:5px"><span>🟠</span><span data-id="Perhatian" data-en="Attention">Perhatian</span></div>
            <div style="font-size:12px;color:var(--t2);line-height:1.55" data-id="Perpanjangan durasi 12 bulan membutuhkan persetujuan Dewan Komisaris sesuai AD/ART PLN." data-en="12-month duration extension requires Board of Commissioners approval per PLN Articles of Association.">Perpanjangan durasi 12 bulan membutuhkan persetujuan Dewan Komisaris sesuai AD/ART PLN.</div>
          </div>
          <div style="padding:14px;background:var(--gr-dim);border:1px solid var(--gr-bd);border-radius:var(--r-sm)">
            <div style="font-size:11px;font-weight:700;color:var(--gr);margin-bottom:6px;display:flex;align-items:center;gap:5px"><span>🟢</span><span data-id="Positif" data-en="Positive">Positif</span></div>
            <div style="font-size:12px;color:var(--t2);line-height:1.55" data-id="Denda diperjelas dengan cap 5% — lebih melindungi PLN dari eksposur denda tidak terbatas." data-en="Penalty cap at 5% clarified — better protects PLN from unlimited penalty exposure.">Denda diperjelas dengan cap 5% — lebih melindungi PLN dari eksposur denda tidak terbatas.</div>
          </div>
        </div>
      </div></div>

    </div><!-- /cmpResults -->

  </div><!-- /main-scroll -->

  <!-- CHAT BAR — shown only in result state -->
  <div class="chat-bar" id="cmpChatBar" style="display:none">
    <div class="chat-frame">
      <div class="chat-orb"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5l1.2 3.7L13 6.5 9.2 7.7 8 11.5 6.8 7.7 3 6.5l3.8-1.3L8 1.5z"/></svg></div>
      <input class="chat-input" type="text"
        data-placeholder-id="Tanya Lexia — mis. 'Jelaskan implikasi hukum kenaikan nilai kontrak ini'…"
        data-placeholder-en="Ask Lexia — e.g., 'Explain the legal implications of this contract value increase'…"
        placeholder="Tanya Lexia — mis. 'Jelaskan implikasi hukum kenaikan nilai kontrak ini'…"/>
      <div class="chip-row">
        <span class="chip" data-id="✦ Jelaskan Perbedaan" data-en="✦ Explain Differences">✦ Jelaskan Perbedaan</span>
        <span class="chip" data-id="⚠ Risiko Utama" data-en="⚠ Key Risks">⚠ Risiko Utama</span>
        <span class="chip" data-id="📋 Rangkum Perubahan" data-en="📋 Summarize Changes">📋 Rangkum Perubahan</span>
      </div>
      <div class="chat-div"></div>
      <button class="attach-btn"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 7.5l-6 6a4 4 0 01-5.5-5.5l7-7a2.5 2.5 0 013.5 3.5l-7 7a1 1 0 01-1.4-1.4l6-6"/></svg></button>
      <button class="send-btn"><span data-id="Kirim" data-en="Send">Kirim</span> <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 8h12M9 4l4 4-4 4"/></svg></button>
    </div>
    <div class="chat-hint"><span class="kbd">⌘K</span> command palette &nbsp;·&nbsp; <span class="kbd">@</span> <span data-id="mention dokumen" data-en="mention document">mention dokumen</span> &nbsp;·&nbsp; Lexia AI v2.1</div>
  </div>

  <!-- LOADING OVERLAY -->
  <div class="loading-overlay" id="cmpLoading" style="display:none">
    <div class="loading-card">
      <div class="loading-spinner"></div>
      <div style="font-family:'Playfair Display',serif;font-size:16px;color:var(--t1)" data-id="Menganalisis Perbedaan..." data-en="Analyzing Differences...">Menganalisis Perbedaan...</div>
      <div style="font-size:12px;color:var(--t3);margin-top:5px" data-id="AI sedang membandingkan setiap klausul" data-en="AI is comparing each clause">AI sedang membandingkan setiap klausul</div>
      <div style="margin-top:14px">
        <div class="l-step active" id="cls1" data-id="⟳ Mengekstrak teks dari kedua dokumen..." data-en="⟳ Extracting text from both documents...">⟳ Mengekstrak teks dari kedua dokumen...</div>
        <div class="l-step" id="cls2" data-id="○ Mendeteksi dan menyelaraskan klausul..." data-en="○ Detecting and aligning clauses...">○ Mendeteksi dan menyelaraskan klausul...</div>
        <div class="l-step" id="cls3" data-id="○ Mengidentifikasi perubahan material..." data-en="○ Identifying material changes...">○ Mengidentifikasi perubahan material...</div>
        <div class="l-step" id="cls4" data-id="○ Menilai risiko hukum setiap perubahan..." data-en="○ Assessing legal risk of each change...">○ Menilai risiko hukum setiap perubahan...</div>
        <div class="l-step" id="cls5" data-id="○ Menyusun laporan perbandingan akhir..." data-en="○ Compiling final comparison report...">○ Menyusun laporan perbandingan akhir...</div>
      </div>
    </div>
  </div>

  `;
}

export function initInteractions(root) {
  let filesA = false;
  let filesB = false;

  /* ── Upload icon HTML ── */
  const uploadSVG = `<svg class="cmp-drop-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`;

  function zoneHtml(which, lang) {
    return lang === 'en'
      ? `${uploadSVG}<div class="cmp-drop-tag">Document ${which} · ${which === 'A' ? 'Original' : 'Revised'}</div><div class="cmp-drop-main">Drop a file here, or <span class="cmp-browse">browse</span></div><div class="cmp-drop-spec">Formats: .pdf, .doc, .docx · up to 10MB</div>`
      : `${uploadSVG}<div class="cmp-drop-tag">Dokumen ${which} · ${which === 'A' ? 'Versi Lama' : 'Versi Baru'}</div><div class="cmp-drop-main">Seret file ke sini, atau <span class="cmp-browse">telusuri</span></div><div class="cmp-drop-spec">Format: .pdf, .doc, .docx · Maks. 10MB</div>`;
  }

  function fileReadyHtml(filename, size, lang) {
    const ready = lang === 'en' ? 'Ready for analysis' : 'Siap dianalisis';
    const replace = lang === 'en' ? 'Click to replace' : 'Klik untuk mengganti';
    return `
      <div class="cmp-file-ok">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--gr)"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <div class="cmp-file-name">${filename}</div>
      <div class="cmp-file-meta">✅ ${size} · ${ready}</div>
      <div class="cmp-file-replace">${replace}</div>`;
  }

  function updateCompareBtn() {
    const btn = document.getElementById('compareBtn');
    const hint = document.getElementById('cmpHint');
    if (!btn) return;
    const ready = filesA && filesB;
    btn.disabled = !ready;
    btn.style.opacity = ready ? '1' : '0.42';
    btn.style.cursor = ready ? 'pointer' : 'not-allowed';
    if (hint) {
      const lang = localStorage.getItem('lexia-lang') || 'id';
      if (ready) {
        hint.setAttribute('data-id', 'Kedua dokumen siap — klik untuk mulai analisis AI');
        hint.setAttribute('data-en', 'Both documents ready — click to start AI analysis');
      } else {
        hint.setAttribute('data-id', 'Unggah kedua dokumen untuk memulai perbandingan');
        hint.setAttribute('data-en', 'Upload both documents to start comparison');
      }
      if (window.setLang) window.setLang(lang);
    }
  }

  /* ── Simulate upload A ── */
  window.simulateUploadA = function() {
    const z = document.getElementById('dropZoneA');
    if (!z) return;
    filesA = true;
    const lang = localStorage.getItem('lexia-lang') || 'id';
    z.classList.add('has-file');
    z.innerHTML = fileReadyHtml('PKS-Turbin-v1.0-2024.pdf', '2.4 MB', lang);
    z.onclick = function() {
      filesA = false;
      const l = localStorage.getItem('lexia-lang') || 'id';
      z.classList.remove('has-file');
      z.innerHTML = zoneHtml('A', l);
      z.onclick = () => simulateUploadA();
      updateCompareBtn();
    };
    updateCompareBtn();
  };

  /* ── Simulate upload B ── */
  window.simulateUploadB = function() {
    const z = document.getElementById('dropZoneB');
    if (!z) return;
    filesB = true;
    const lang = localStorage.getItem('lexia-lang') || 'id';
    z.classList.add('has-file');
    z.innerHTML = fileReadyHtml('PKS-Turbin-v2.1-2026.pdf', '3.1 MB', lang);
    z.onclick = function() {
      filesB = false;
      const l = localStorage.getItem('lexia-lang') || 'id';
      z.classList.remove('has-file');
      z.innerHTML = zoneHtml('B', l);
      z.onclick = () => simulateUploadB();
      updateCompareBtn();
    };
    updateCompareBtn();
  };

  /* ── Run analysis (loading → results) ── */
  window.runComparison = function() {
    const overlay = document.getElementById('cmpLoading');
    if (overlay) overlay.style.display = 'flex';
    if (window.setLang) window.setLang(localStorage.getItem('lexia-lang') || 'id');

    const ids = ['cls1', 'cls2', 'cls3', 'cls4', 'cls5'];
    let i = 0;
    const ticker = setInterval(() => {
      if (i < ids.length) {
        const el = document.getElementById(ids[i]);
        if (el) {
          el.classList.remove('active');
          el.classList.add('done');
          el.textContent = '✅ ' + el.textContent.replace('⟳ ', '').replace('○ ', '');
        }
        i++;
        if (i < ids.length) {
          const nx = document.getElementById(ids[i]);
          if (nx) { nx.classList.add('active'); nx.textContent = '⟳ ' + nx.textContent.replace('○ ', ''); }
        }
      } else {
        clearInterval(ticker);
        setTimeout(() => {
          if (overlay) overlay.style.display = 'none';
          showResults();
        }, 500);
      }
    }, 580);
  };

  function showResults() {
    document.getElementById('cmpUpload').style.display = 'none';
    const res = document.getElementById('cmpResults');
    res.style.display = 'block';
    res.style.opacity = '0';
    res.style.transform = 'translateY(10px)';
    requestAnimationFrame(() => {
      res.style.transition = 'opacity .35s ease, transform .35s ease';
      res.style.opacity = '1';
      res.style.transform = 'translateY(0)';
    });

    const chatBar = document.getElementById('cmpChatBar');
    if (chatBar) chatBar.style.display = 'block';

    const btnUpload = document.getElementById('cmpBtnUpload');
    const btnExport = document.getElementById('cmpBtnExport');
    if (btnUpload) btnUpload.style.display = 'none';
    if (btnExport) btnExport.style.display = '';

    const scroll = root.querySelector('.main-scroll');
    if (scroll) scroll.scrollTop = 0;

    if (window.setLang) window.setLang(localStorage.getItem('lexia-lang') || 'id');
  }

  /* ── Reset to upload state ── */
  window.resetComparison = function() {
    const lang = localStorage.getItem('lexia-lang') || 'id';

    document.getElementById('cmpResults').style.display = 'none';
    document.getElementById('cmpUpload').style.display = 'block';

    const chatBar = document.getElementById('cmpChatBar');
    if (chatBar) chatBar.style.display = 'none';

    const btnUpload = document.getElementById('cmpBtnUpload');
    const btnExport = document.getElementById('cmpBtnExport');
    if (btnUpload) btnUpload.style.display = '';
    if (btnExport) btnExport.style.display = 'none';

    // Reset zones
    filesA = false;
    filesB = false;
    const zA = document.getElementById('dropZoneA');
    const zB = document.getElementById('dropZoneB');
    if (zA) { zA.classList.remove('has-file'); zA.innerHTML = zoneHtml('A', lang); zA.onclick = () => simulateUploadA(); }
    if (zB) { zB.classList.remove('has-file'); zB.innerHTML = zoneHtml('B', lang); zB.onclick = () => simulateUploadB(); }

    // Reset loading steps
    const ids = ['cls1', 'cls2', 'cls3', 'cls4', 'cls5'];
    ids.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.className = idx === 0 ? 'l-step active' : 'l-step';
    });

    updateCompareBtn();
    if (window.setLang) window.setLang(lang);
  };

  /* ── Chat bar interactions ── */
  const ci = root.querySelector('.chat-input');
  if (ci) {
    ci.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) e.preventDefault(); });
  }
  const sb = root.querySelector('.send-btn');
  if (sb) {
    sb.addEventListener('click', () => { if (ci && ci.value.trim()) { ci.value = ''; ci.focus(); } });
  }

  if (typeof window.setLang === 'function') {
    window.setLang(localStorage.getItem('lexia-lang') || 'id');
  }
}
