export function render(container) {
  container.innerHTML = `
<div class="main-wrap">
  <div class="main-scroll">
    <div class="ph">
      <div>
        <div class="ph-eyebrow" data-id="AI Tools · Riset & Temuan" data-en="AI Tools · Research & Findings">AI Tools · Riset &amp; Temuan</div>
        <div class="ph-title">Riset &amp; <em>Temuan</em></div>
        <div class="ph-sub" data-id="Pencarian semantik di seluruh regulasi, putusan, dan dokumen internal PLN" data-en="Semantic search across regulations, rulings, and PLN internal documents">Pencarian semantik di seluruh regulasi, putusan, dan dokumen internal PLN</div>
      </div>
      <div class="ph-right">
        <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" onclick="setLang('id')">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" onclick="setLang('en')">🇺🇸 EN</button>
        </div>
        <button class="btn btn-outline" data-id="📋 Riwayat Riset" data-en="📋 Research History">📋 Riwayat Riset</button>
        <button class="btn btn-bl" data-id="✨ Riset Mendalam AI" data-en="✨ AI Deep Research">✨ Riset Mendalam AI</button>
      </div>
    </div>

    <div class="search-bar-big">
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" style="color:var(--bl);flex-shrink:0;margin-top:2px"><circle cx="6.5" cy="6.5" r="4.5"/><path d="M11.5 11.5l3 3"/></svg>
      <input type="text" value="klausul penalti kontrak PLN OJK 2026" 
        data-placeholder-id="Cari regulasi, klausul, putusan, atau tanyakan pertanyaan hukum…"
        data-placeholder-en="Search regulations, clauses, rulings, or ask a legal question…"
        placeholder="Cari regulasi, klausul, putusan, atau tanyakan pertanyaan hukum…"/>
      <div style="display:flex;gap:6px">
        <button class="btn btn-outline" style="padding:6px 12px;font-size:12px" data-id="Filter" data-en="Filter">Filter</button>
        <button class="btn btn-bl" style="padding:6px 14px;font-size:12px" data-id="Cari" data-en="Search">Cari</button>
      </div>
    </div>

    <div style="margin-bottom:10px">
      <span class="filter-chip active" data-id="Semua Sumber" data-en="All Sources">Semua Sumber</span>
      <span class="filter-chip" data-id="Regulasi OJK" data-en="OJK Regulations">Regulasi OJK</span>
      <span class="filter-chip" data-id="JDIH" data-en="JDIH">JDIH</span>
      <span class="filter-chip" data-id="Putusan MA" data-en="Supreme Court">Putusan MA</span>
      <span class="filter-chip" data-id="Internal PLN" data-en="PLN Internal">Internal PLN</span>
      <span class="filter-chip" data-id="2025–2026" data-en="2025–2026">2025–2026</span>
    </div>

    <div class="research-grid">
      <div>
        <div style="font-size:11.5px;color:var(--t3);margin-bottom:10px">
          <span data-id="Menampilkan 24 hasil untuk " data-en="Showing 24 results for ">Menampilkan 24 hasil untuk </span>
          <strong style="color:var(--bl)">"klausul penalti kontrak PLN OJK 2026"</strong>
          <span> &nbsp;·&nbsp; </span><span style="font-family:'IBM Plex Mono',monospace;font-size:10.5px" data-id="0.3 detik" data-en="0.3 seconds">0.3 detik</span>
        </div>

        <div class="result-card">
          <div class="result-title">Peraturan OJK No. 15/2026 — Klausul Penalti Transaksi Keuangan</div>
          <div class="result-snippet" data-id="Pasal 18 mengatur batas maksimum penalti keterlambatan pembayaran sebesar 2‰ per hari kalender dari nilai transaksi, tidak melebihi 5% dari total nilai kontrak. Berlaku efektif 1 April 2026…" data-en="Article 18 regulates the maximum penalty for late payment at 2‰ per calendar day of transaction value, not exceeding 5% of total contract value. Effective April 1, 2026…">Pasal 18 mengatur batas maksimum penalti keterlambatan pembayaran sebesar 2‰ per hari kalender dari nilai transaksi, tidak melebihi 5% dari total nilai kontrak. Berlaku efektif 1 April 2026…</div>
          <div class="result-meta">
            <span class="result-src">OJK Portal</span>
            <span class="result-date">20 Feb 2026</span>
            <span class="badge b-red" data-id="Kritis" data-en="Critical">Kritis</span>
            <div class="result-score"><div class="score-bar"><div class="score-fill" style="width:94%"></div></div><span style="font-size:10px;color:var(--t4)">94%</span></div>
          </div>
        </div>

        <div class="result-card">
          <div class="result-title" data-id="Standar Klausul Penalti Kontrak Pengadaan PLN 2024" data-en="PLN 2024 Procurement Contract Penalty Clause Standard">Standar Klausul Penalti Kontrak Pengadaan PLN 2024</div>
          <div class="result-snippet" data-id="Perdir PLN No. 024/2024 menetapkan formula penalti kontrak baku: 1‰ per hari untuk keterlambatan pekerjaan fase 1, meningkat menjadi 2‰ untuk keterlambatan di atas 30 hari kalender…" data-en="PLN Director Regulation No. 024/2024 establishes standard contract penalty formula: 1‰/day for phase 1 delays, increasing to 2‰ for delays exceeding 30 calendar days…">Perdir PLN No. 024/2024 menetapkan formula penalti kontrak baku: 1‰ per hari untuk keterlambatan pekerjaan fase 1, meningkat menjadi 2‰ untuk keterlambatan di atas 30 hari kalender…</div>
          <div class="result-meta">
            <span class="result-src" data-id="Internal PLN" data-en="PLN Internal">Internal PLN</span>
            <span class="result-date">Mar 2024</span>
            <span class="badge b-bl" data-id="Terkait" data-en="Relevant">Terkait</span>
            <div class="result-score"><div class="score-bar"><div class="score-fill" style="width:87%"></div></div><span style="font-size:10px;color:var(--t4)">87%</span></div>
          </div>
        </div>

        <div class="result-card">
          <div class="result-title" data-id="Putusan MA No. 789/K/Pdt/2024 — Sengketa Penalti Kontrak EPC" data-en="Supreme Court Decision No. 789/K/Pdt/2024 — EPC Contract Penalty Dispute">Putusan MA No. 789/K/Pdt/2024 — Sengketa Penalti Kontrak EPC</div>
          <div class="result-snippet" data-id="Mahkamah Agung memutuskan penalti keterlambatan kontrak konstruksi yang melebihi 10% dari nilai kontrak dinyatakan batal demi hukum karena bertentangan dengan prinsip keseimbangan dalam KUH Perdata…" data-en="The Supreme Court ruled that delay penalties in construction contracts exceeding 10% of contract value are void by law as they violate the balance principle in the Civil Code…">Mahkamah Agung memutuskan penalti keterlambatan kontrak konstruksi yang melebihi 10% dari nilai kontrak dinyatakan batal demi hukum karena bertentangan dengan prinsip keseimbangan dalam KUH Perdata…</div>
          <div class="result-meta">
            <span class="result-src">SIPP MA</span>
            <span class="result-date">Nov 2024</span>
            <span class="badge b-am" data-id="Yurisprudensi" data-en="Jurisprudence">Yurisprudensi</span>
            <div class="result-score"><div class="score-bar"><div class="score-fill" style="width:79%"></div></div><span style="font-size:10px;color:var(--t4)">79%</span></div>
          </div>
        </div>

        <div class="result-card">
          <div class="result-title" data-id="Perpres No. 16/2018 Pasal 78 — Sanksi Pengadaan Barang/Jasa" data-en="Presidential Reg No. 16/2018 Article 78 — Procurement Sanctions">Perpres No. 16/2018 Pasal 78 — Sanksi Pengadaan Barang/Jasa</div>
          <div class="result-snippet" data-id="Ketentuan pengenaan sanksi administratif dan denda atas pelanggaran dalam proses pengadaan barang/jasa pemerintah, termasuk mekanisme penghitungan dan batas maksimum denda…" data-en="Provisions on administrative sanctions and fines for violations in government procurement processes, including calculation mechanisms and maximum fine limits…">Ketentuan pengenaan sanksi administratif dan denda atas pelanggaran dalam proses pengadaan barang/jasa pemerintah, termasuk mekanisme penghitungan dan batas maksimum denda…</div>
          <div class="result-meta">
            <span class="result-src">JDIH</span>
            <span class="result-date">2018, rev. 2022</span>
            <span class="badge b-muted" data-id="Terkait" data-en="Relevant">Terkait</span>
            <div class="result-score"><div class="score-bar"><div class="score-fill" style="width:71%"></div></div><span style="font-size:10px;color:var(--t4)">71%</span></div>
          </div>
        </div>
      </div>

      <!-- RIGHT PANEL -->
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="card"><div class="cp">
          <div class="ch-title" style="margin-bottom:10px" data-id="Ringkasan AI" data-en="AI Summary">Ringkasan AI</div>
          <div style="font-size:12.5px;color:var(--t2);line-height:1.65" data-id="Berdasarkan 24 dokumen relevan, ketentuan penalti kontrak PLN harus selaras dengan POJK 15/2026 yang berlaku 1 April 2026. Batas 5% dari nilai kontrak kini menjadi acuan maksimum yang mengikat secara hukum untuk semua kontrak yang diawasi OJK." data-en="Based on 24 relevant documents, PLN contract penalty provisions must align with POJK 15/2026 effective April 1, 2026. The 5% of contract value cap is now the legally binding maximum reference for all OJK-supervised contracts.">Berdasarkan 24 dokumen relevan, ketentuan penalti kontrak PLN harus selaras dengan POJK 15/2026 yang berlaku 1 April 2026. Batas 5% dari nilai kontrak kini menjadi acuan maksimum yang mengikat secara hukum untuk semua kontrak yang diawasi OJK.</div>
          <div style="margin-top:10px">
            <button class="btn btn-bl" style="width:100%;justify-content:center;font-size:12px" data-id="📄 Buat Laporan Riset" data-en="📄 Create Research Report">📄 Buat Laporan Riset</button>
          </div>
        </div></div>

        <div class="card"><div class="cp">
          <div class="ch-title" style="margin-bottom:10px" data-id="Riwayat Riset" data-en="Research History">Riwayat Riset</div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:8px 10px;border-radius:var(--r-sm);background:var(--bl-dim);border:1px solid var(--bl-bd);cursor:pointer">
              <div style="font-size:12px;font-weight:600;color:var(--bl)" data-id="klausul penalti PLN OJK 2026" data-en="PLN OJK 2026 penalty clause">klausul penalti PLN OJK 2026</div>
              <div style="font-size:10px;color:var(--t4);margin-top:2px" data-id="Sekarang · 24 hasil" data-en="Now · 24 results">Sekarang · 24 hasil</div>
            </div>
            <div style="padding:8px 10px;border-radius:var(--r-sm);background:var(--surface2);border:1px solid var(--bd-n);cursor:pointer">
              <div style="font-size:12px;font-weight:600;color:var(--t1)" data-id="force majeure pasca-COVID" data-en="force majeure post-COVID">force majeure pasca-COVID</div>
              <div style="font-size:10px;color:var(--t4);margin-top:2px" data-id="1 jam lalu · 17 hasil" data-en="1 hour ago · 17 results">1 jam lalu · 17 hasil</div>
            </div>
            <div style="padding:8px 10px;border-radius:var(--r-sm);background:var(--surface2);border:1px solid var(--bd-n);cursor:pointer">
              <div style="font-size:12px;font-weight:600;color:var(--t1)" data-id="arbitrase BANI PLN" data-en="BANI PLN arbitration">arbitrase BANI PLN</div>
              <div style="font-size:10px;color:var(--t4);margin-top:2px" data-id="Kemarin · 31 hasil" data-en="Yesterday · 31 results">Kemarin · 31 hasil</div>
            </div>
          </div>
        </div></div>

        <div class="card"><div class="cp">
          <div class="ch-title" style="margin-bottom:8px" data-id="Regulasi Terkait" data-en="Related Regulations">Regulasi Terkait</div>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div class="chip" style="justify-content:flex-start">POJK 12/2023</div>
            <div class="chip" style="justify-content:flex-start">Perpres 16/2018</div>
            <div class="chip" style="justify-content:flex-start" data-id="KUH Perdata Ps. 1244" data-en="Civil Code Art. 1244">KUH Perdata Ps. 1244</div>
            <div class="chip" style="justify-content:flex-start">UU No. 2/2017 (Jasa Konstruksi)</div>
          </div>
        </div></div>
      </div>
    </div>
  </div>
</div>
  `;
}

export function initInteractions(root) {
  // Toggle switches
  root.querySelectorAll('.bt-row').forEach(r => {
    r.addEventListener('click', () => {
        const toggle = r.querySelector('.toggle');
        if (toggle) toggle.classList.toggle('on');
    });
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
          // Clear input when search is clicked
          ci.value = '';
          ci.focus();
      }
    });
  }

  if (typeof window.setLang === 'function') {
    window.setLang(document.documentElement.lang || 'id');
  }
}
