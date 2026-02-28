export function render(container) {
  container.innerHTML = `
  <div class="main-scroll">
    <div class="ph">
      <div>
        <div class="ph-eyebrow" data-id="Fitur Analisis · Perbandingan Legal" data-en="Analysis Feature · Legal Comparison">Fitur Analisis · Perbandingan Legal</div>
        <div class="ph-title">Bandingkan Dua <em>Dokumen</em></div>
        <div class="ph-sub" data-id="Diff otomatis dengan redline AI untuk menemukan perbedaan material" data-en="Automatic diff with AI redline to find material differences">Diff otomatis dengan redline AI untuk menemukan perbedaan material</div>
      </div>
      <div class="ph-right">
        <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" onclick="if(window.setLang) window.setLang('id')">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" onclick="if(window.setLang) window.setLang('en')">🇺🇸 EN</button>
        </div>
        <button class="btn btn-outline" data-id="📁 Upload Dokumen" data-en="📁 Upload Documents">📁 Upload Dokumen</button>
        <button class="btn btn-bl" data-id="⬇ Ekspor Redline" data-en="⬇ Export Redline">⬇ Ekspor Redline</button>
      </div>
    </div>

    <div class="compare-header">
      <div style="display:flex;gap:16px;align-items:center">
        <div>
          <div style="font-size:11px;color:var(--t3);margin-bottom:2px" data-id="Dokumen A (Lama)" data-en="Document A (Original)">Dokumen A (Lama)</div>
          <div style="font-size:13px;font-weight:600;color:var(--t1)">PKS-Turbin-v1.0-2024.pdf</div>
        </div>
        <div style="font-size:18px;color:var(--t4)">⇄</div>
        <div>
          <div style="font-size:11px;color:var(--t3);margin-bottom:2px" data-id="Dokumen B (Baru)" data-en="Document B (Revised)">Dokumen B (Baru)</div>
          <div style="font-size:13px;font-weight:600;color:var(--t1)">PKS-Turbin-v2.1-2026.pdf</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <span class="badge b-am" data-id="14 perbedaan ditemukan" data-en="14 differences found">14 perbedaan ditemukan</span>
        <button class="btn btn-outline" style="padding:5px 12px;font-size:12px" data-id="Tandai Semua" data-en="Mark All">Tandai Semua</button>
      </div>
    </div>

    <div class="diff-stats">
      <div class="stat-card"><div class="stat-n" style="color:var(--re)">6</div><div class="stat-lbl" data-id="Dihapus" data-en="Deleted">Dihapus</div></div>
      <div class="stat-card"><div class="stat-n" style="color:var(--gr)">8</div><div class="stat-lbl" data-id="Ditambah" data-en="Added">Ditambah</div></div>
      <div class="stat-card"><div class="stat-n" style="color:var(--am)">3</div><div class="stat-lbl" data-id="Material" data-en="Material">Material</div></div>
      <div class="stat-card"><div class="stat-n" style="color:var(--bl)">14</div><div class="stat-lbl" data-id="Total Perubahan" data-en="Total Changes">Total Perubahan</div></div>
    </div>

    <div class="compare-grid">
      <div class="diff-panel">
        <div class="diff-head">
          <span style="font-size:12px;font-weight:600;color:var(--t2)" data-id="Versi A — Original 2024" data-en="Version A — Original 2024">Versi A — Original 2024</span>
          <span class="badge b-muted">v1.0</span>
        </div>
        <div class="diff-body">
          <p><strong>PASAL 3 — NILAI KONTRAK</strong></p>
          <p style="margin-top:8px">3.1 Nilai Kontrak yang disepakati adalah sebesar <span class="del">Rp 45.000.000.000 (Empat Puluh Lima Miliar Rupiah)</span>, belum termasuk Pajak Pertambahan Nilai.</p>
          <p style="margin-top:10px">3.2 Pembayaran dilakukan dalam <span class="del">3 (tiga) termin</span> sesuai dengan progress pekerjaan yang telah diverifikasi.</p>
          <p style="margin-top:10px">3.3 <span class="del">Denda keterlambatan sebesar 1‰ (satu permil) per hari kalender dari nilai kontrak.</span></p>
          <p style="margin-top:10px"><strong>PASAL 4 — JANGKA WAKTU</strong></p>
          <p style="margin-top:8px">4.1 Perjanjian ini berlaku selama <span class="del">24 (dua puluh empat) bulan</span> terhitung sejak tanggal penandatanganan.</p>
        </div>
      </div>
      <div class="diff-panel">
        <div class="diff-head">
          <span style="font-size:12px;font-weight:600;color:var(--t2)" data-id="Versi B — Revisi 2026" data-en="Version B — Revised 2026">Versi B — Revisi 2026</span>
          <span class="badge b-gr">v2.1</span>
        </div>
        <div class="diff-body">
          <p><strong>PASAL 3 — NILAI KONTRAK</strong></p>
          <p style="margin-top:8px">3.1 Nilai Kontrak yang disepakati adalah sebesar <span class="ins">Rp 52.000.000.000 (Lima Puluh Dua Miliar Rupiah)</span>, belum termasuk Pajak Pertambahan Nilai.</p>
          <p style="margin-top:10px">3.2 Pembayaran dilakukan dalam <span class="ins">4 (empat) termin</span> sesuai dengan progress pekerjaan yang telah diverifikasi oleh Konsultan Pengawas independen.</p>
          <p style="margin-top:10px">3.3 <span class="ins">Denda keterlambatan sebesar 2‰ (dua permil) per hari kalender dari nilai paket pekerjaan yang terlambat, maksimum 5% dari nilai kontrak.</span></p>
          <p style="margin-top:10px"><strong>PASAL 4 — JANGKA WAKTU</strong></p>
          <p style="margin-top:8px">4.1 Perjanjian ini berlaku selama <span class="ins">36 (tiga puluh enam) bulan</span> terhitung sejak tanggal penandatanganan, <ins>dengan opsi perpanjangan 12 bulan atas kesepakatan Para Pihak</ins>.</p>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:4px"><div class="cp">
      <div class="ch">
        <div><div class="ch-title" data-id="Analisis AI — Temuan Material" data-en="AI Analysis — Material Findings">Analisis AI — Temuan Material</div>
        <div class="ch-sub" data-id="Perubahan yang berpotensi berdampak signifikan pada PLN" data-en="Changes potentially having significant impact on PLN">Perubahan yang berpotensi berdampak signifikan pada PLN</div></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
        <div style="padding:12px;background:var(--re-dim);border:1px solid var(--re-bd);border-radius:var(--r-sm)">
          <div style="font-size:11px;font-weight:600;color:var(--re);margin-bottom:4px" data-id="Risiko Tinggi" data-en="High Risk">Risiko Tinggi</div>
          <div style="font-size:12px;color:var(--t2)" data-id="Kenaikan nilai kontrak 15.6% (Rp 7 Miliar) tanpa justifikasi addendum yang jelas." data-en="Contract value increase of 15.6% (Rp 7 Billion) without clear addendum justification.">Kenaikan nilai kontrak 15.6% (Rp 7 Miliar) tanpa justifikasi addendum yang jelas.</div>
        </div>
        <div style="padding:12px;background:var(--am-dim);border:1px solid var(--am-bd);border-radius:var(--r-sm)">
          <div style="font-size:11px;font-weight:600;color:var(--am);margin-bottom:4px" data-id="Perhatian" data-en="Attention">Perhatian</div>
          <div style="font-size:12px;color:var(--t2)" data-id="Perpanjangan durasi 12 bulan membutuhkan persetujuan Dewan Komisaris sesuai AD/ART PLN." data-en="12-month extension requires Board of Commissioners approval per PLN Articles of Association.">Perpanjangan durasi 12 bulan membutuhkan persetujuan Dewan Komisaris sesuai AD/ART PLN.</div>
        </div>
        <div style="padding:12px;background:var(--gr-dim);border:1px solid var(--gr-bd);border-radius:var(--r-sm)">
          <div style="font-size:11px;font-weight:600;color:var(--gr);margin-bottom:4px" data-id="Positif" data-en="Positive">Positif</div>
          <div style="font-size:12px;color:var(--t2)" data-id="Denda diperjelas dengan cap 5% — lebih melindungi PLN dari eksposur denda tidak terbatas." data-en="Penalty cap at 5% clarified — better protects PLN from unlimited penalty exposure.">Denda diperjelas dengan cap 5% — lebih melindungi PLN dari eksposur denda tidak terbatas.</div>
        </div>
      </div>
    </div></div>
  </div>
  `;
}

export function initInteractions(root) {
  if (typeof window.setLang === 'function') {
    window.setLang(document.documentElement.lang || 'id');
  }
}
