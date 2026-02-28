export function render(container) {
  container.innerHTML = `
  <div class="main-scroll">
    <div class="ph">
      <div>
        <div class="ph-eyebrow">Drafting Dokumen</div>
        <div class="ph-title">Buat Dokumen <em>Hukum</em></div>
        <div class="ph-sub">Generate draft legal berbasis AI dengan referensi regulasi terverifikasi</div>
      </div>
      <div class="ph-right">
        <div id="langToggle" style="display:inline-flex;background:rgba(25,103,210,.08);border:1px solid rgba(25,103,210,.18);border-radius:999px;padding:2px;gap:1px;flex-shrink:0"><div id="langID" style="padding:4px 12px;border-radius:999px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:600;cursor:pointer;background:linear-gradient(135deg,#1967D2,#1E7CE8);color:#fff;box-shadow:0 2px 6px rgba(25,103,210,.22);transition:all .15s" onclick="if(window.setLang) window.setLang('id')">🇮🇩 ID</div><div id="langEN" style="padding:4px 12px;border-radius:999px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:600;cursor:pointer;color:#8BA3BE;transition:all .15s" onclick="if(window.setLang) window.setLang('en')">🇺🇸 EN</div></div>
        <span class="badge b-am">Draft — Wajib Review Hukum</span>
        <button class="btn btn-outline" id="btnResetOutput">↺ Reset</button>
      </div>
    </div>

    <div class="split-wrap">
      <!-- FORM PANEL -->
      <div class="form-panel">
        <div class="panel-hd">
          <div class="panel-hd-title">Parameter Dokumen</div>
          <div class="panel-hd-sub">Isi semua kolom wajib untuk generate draft</div>
        </div>
        <div class="form-scroll">
          <div class="fsec-lbl">Informasi Dokumen</div>
          <div class="fg"><label>Jenis Dokumen <span class="req">*</span></label>
            <select><option>Perjanjian Kemitraan</option><option>Opini Hukum</option><option>Perjanjian Pengadaan Barang/Jasa</option><option>Perjanjian Kerahasiaan (NDA)</option><option>Perjanjian KSO</option><option>Surat Perjanjian Kerja</option></select>
          </div>
          <div class="fg-row">
            <div class="fg"><label>Pihak Pertama <span class="req">*</span></label><input type="text" value="PT PLN (Persero)"/></div>
            <div class="fg"><label>Pihak Kedua <span class="req">*</span></label><input type="text" placeholder="mis. PT Mitra Teknologi"/></div>
          </div>
          <div class="fg-row">
            <div class="fg"><label>Tanggal Efektif <span class="req">*</span></label><input type="date" value="2026-02-27"/></div>
            <div class="fg"><label>Durasi</label><input type="text" placeholder="mis. 12 bulan"/></div>
          </div>
          <div class="fsec-lbl">Konten &amp; Lingkup</div>
          <div class="fg"><label>Tujuan Dokumen <span class="req">*</span></label><textarea placeholder="Mendefinisikan ruang lingkup dan ketentuan pengadaan turbin gas..."></textarea></div>
          <div class="fg"><label>Lingkup Pekerjaan <span class="req">*</span></label><textarea rows="3" placeholder="Deskripsi detail pekerjaan atau layanan yang disepakati..."></textarea></div>
          <div class="fg"><label>Deliverables</label><textarea rows="2" placeholder="Output atau hasil yang diharapkan..."></textarea></div>
          <div class="fsec-lbl">Ketentuan Bisnis</div>
          <div class="fg"><label>Ketentuan Pembayaran</label><input type="text" placeholder="mis. Net 30 hari, 30% di muka"/></div>
          <div class="fg"><label>Hukum yang Berlaku <span class="req">*</span></label><input type="text" value="Indonesia (Hukum Perdata)"/></div>
          <div class="fg"><label>Penyelesaian Sengketa</label>
            <select><option>BANI (Arbitrase)</option><option>Pengadilan Negeri Jakarta Selatan</option><option>Mediasi terlebih dahulu</option></select>
          </div>
          <div class="fsec-lbl">Format Output</div>
          <div class="fg"><label>Bahasa Dokumen</label>
            <div class="lang-row">
              <div class="lang-opt active">Bilingual</div>
              <div class="lang-opt">Indonesia</div>
            </div>
          </div>
          <div class="fg"><label>Dokumen Referensi <span style="color:var(--t4);font-weight:400">(Opsional)</span></label>
            <div class="upload-zone" id="uploadZone">
              <div class="upload-ico">☁</div>
              <div class="upload-txt">Seret file atau <span class="upload-link">pilih dari komputer</span></div>
              <div class="upload-spec">TXT, DOCX, PDF · Maks. 50MB</div>
            </div>
          </div>
        </div>
        <div class="form-footer-p">
          <button class="btn btn-bl" id="btnShowOutput" style="width:100%;justify-content:center;padding:10px 20px;font-size:13px">
            <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13"><path d="M8 1.5l1.2 3.7L13 6.5 9.2 7.7 8 11.5 6.8 7.7 3 6.5l3.8-1.3L8 1.5z"/></svg>
            Buat Draft Sekarang
          </button>
        </div>
      </div>

      <!-- OUTPUT PANEL -->
      <div class="output-panel">
        <div class="output-hd">
          <div class="output-hd-title">Dokumen yang Dibuat</div>
          <div style="display:flex;gap:7px">
            <button class="btn btn-outline" style="font-size:12px;padding:5px 12px">Muat Draft</button>
            <button class="btn btn-outline" style="font-size:12px;padding:5px 12px">Simpan Draft</button>
          </div>
        </div>

        <div class="empty-state" id="emptyState">
          <div class="empty-ico">📄</div>
          <div class="empty-title">Draft akan muncul di sini</div>
          <div class="empty-sub">Isi parameter di sebelah kiri lalu klik<br/>"Buat Draft Sekarang" untuk memulai.</div>
        </div>

        <div class="doc-canvas" id="docCanvas" style="display:none">
          <div class="doc-title-block">
            <div class="doc-title-main">Perjanjian Kemitraan</div>
            <div class="doc-title-num">Nomor: PKS/PLN/HKM/2026/012</div>
            <div class="doc-title-date">Dibuat di Jakarta, 27 Februari 2026</div>
          </div>
          <div class="doc-sec-hd">I. Para Pihak</div>
          <div class="ai-block"><span class="ai-micro">✦ AI</span>
            <div class="ai-text">Perjanjian ini dibuat antara <strong>PT PLN (Persero)</strong>, suatu BUMN yang didirikan berdasarkan hukum Indonesia, berkedudukan di Jakarta Selatan ("Pihak Pertama")<span class="cite-sup">[¹]</span>, dan <strong>PT Mitra Teknologi Indonesia</strong>, suatu perseroan terbatas, berkedudukan di Bandung ("Pihak Kedua")<span class="cite-sup">[²]</span>. Secara bersama-sama disebut sebagai "Para Pihak".</div>
          </div>
          <div class="doc-sec-hd">II. Ruang Lingkup</div>
          <div class="ai-block"><span class="ai-micro">✦ AI</span>
            <div class="ai-text">Berdasarkan Perjanjian ini, Pihak Kedua berkewajiban menyediakan layanan pengadaan dan instalasi turbin gas sesuai spesifikasi teknis dalam Lampiran A<span class="cite-sup">[³]</span>. Pelaksanaan wajib memperhatikan ketentuan UU No. 30 Tahun 2009 tentang Ketenagalistrikan<span class="cite-sup">[⁴]</span> dan peraturan pemerintah yang berlaku.</div>
          </div>
          <div class="doc-sec-hd">III. Ketentuan Pembayaran</div>
          <div class="ai-block"><span class="ai-micro">✦ AI</span>
            <div class="ai-text">Pembayaran dilakukan dalam 3 termin: (i) <strong>30%</strong> setelah penandatanganan dan penyerahan jaminan<span class="cite-sup">[⁵]</span>; (ii) <strong>40%</strong> setelah serah terima parsial pertama; dan (iii) <strong>30%</strong> setelah serah terima akhir dan penerbitan Berita Acara Penerimaan.</div>
          </div>
          <div class="risk-block">
            <div style="font-size:15px;flex-shrink:0">⚠️</div>
            <div><div class="risk-title">Risiko Terdeteksi — Pasal IV: Perpanjangan Otomatis</div><div class="risk-body">Klausul perpanjangan tidak menetapkan mekanisme peringatan bagi pihak yang lalai memberi notifikasi. Disarankan menambahkan ketentuan denda sesuai PLN-STD-2025 Ps.7.3.</div></div>
          </div>
          <div class="cite-row">
            <span class="cite-lbl">Sumber:</span>
            <span class="cite-pill">[¹] PLN-Standard-PKS-2025</span>
            <span class="cite-pill">[²] UU No.40/2007</span>
            <span class="cite-pill">[³] PLN-TechSpec-Turbin</span>
            <span class="cite-pill">[⁴] UU No.30/2009</span>
            <span class="cite-pill">[⁵] PLN-Finance-SOP</span>
          </div>
          <div class="conf-row" style="margin-top:10px">
            <span class="conf-lbl">Kepercayaan AI:</span>
            <div class="conf-track"><div class="conf-fill" style="width:89%"></div></div>
            <span class="conf-val">89% — Tinggi</span>
          </div>
          <div class="disc-block" style="margin-top:12px">
            <span style="font-size:13px;flex-shrink:0">ⓘ</span>
            <div class="disc-text">Draft ini dihasilkan oleh AI. Wajib ditinjau oleh pengacara berwenang sebelum digunakan sebagai dokumen hukum resmi.</div>
          </div>
        </div>

        <div class="output-footer">
          <div class="edit-lbl">Instruksi Edit:</div>
          <textarea class="edit-ta" placeholder='Contoh: "Ubah klausul pembayaran menjadi net 60 hari" atau "Tambahkan klausul force majeure"'></textarea>
          <div class="fa-row">
            <button class="btn btn-bl" style="flex:1;justify-content:center;font-size:12.5px">✦ Terapkan Edit</button>
            <button class="btn btn-gr" style="flex:1;justify-content:center;font-size:12.5px">⬇ Export ke Word</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FIXED CHAT BAR -->
  <div class="chat-bar">
    <div class="chat-frame">
      <div class="chat-orb"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5l1.2 3.7L13 6.5 9.2 7.7 8 11.5 6.8 7.7 3 6.5l3.8-1.3L8 1.5z"/></svg></div>
      <input class="chat-input" type="text" placeholder="Tanya Lexia — mis. 'Tambahkan klausul force majeure standar PLN'…"/>
      <div class="chip-row"><span class="chip">✦ Buat Opini</span><span class="chip">🔍 Cari Preseden</span></div>
      <div class="chat-div"></div>
      <button class="attach-btn"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 7.5l-6 6a4 4 0 01-5.5-5.5l7-7a2.5 2.5 0 013.5 3.5l-7 7a1 1 0 01-1.4-1.4l6-6"/></svg></button>
      <button class="send-btn">Kirim <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 8h12M9 4l4 4-4 4"/></svg></button>
    </div>
    <div class="chat-hint"><span class="kbd">⌘K</span> command palette &nbsp;·&nbsp; <span class="kbd">@</span> mention dokumen &nbsp;·&nbsp; Lexia AI v2.1</div>
  </div>
  `;
}

export function initInteractions(root) {
  // lang-opt toggle
  const langOpts = root.querySelectorAll('.lang-opt');
  langOpts.forEach(el => {
    el.addEventListener('click', () => {
      langOpts.forEach(o => o.classList.remove('active'));
      el.classList.add('active');
    });
  });

  // output panel toggle
  const btnShowOutput = root.querySelector('#btnShowOutput');
  const emptyState = root.querySelector('#emptyState');
  const docCanvas = root.querySelector('#docCanvas');

  if (btnShowOutput && emptyState && docCanvas) {
    btnShowOutput.addEventListener('click', () => {
      emptyState.style.display = 'none';
      docCanvas.style.display = 'block';
      docCanvas.style.opacity = '0';
      docCanvas.style.transform = 'translateY(10px)';
      requestAnimationFrame(() => {
        docCanvas.style.transition = 'opacity .4s ease,transform .4s ease';
        docCanvas.style.opacity = '1';
        docCanvas.style.transform = 'translateY(0)';
      });
    });
  }

  const btnResetOutput = root.querySelector('#btnResetOutput');
  if (btnResetOutput && emptyState && docCanvas) {
    btnResetOutput.addEventListener('click', () => {
      emptyState.style.display = 'flex';
      docCanvas.style.display = 'none';
      docCanvas.style.opacity = '0';
    });
  }

  // upload zone
  const uploadZone = root.querySelector('#uploadZone');
  if (uploadZone) {
    uploadZone.addEventListener('click', function() {
      this.innerHTML = '<div style="font-size:20px;color:var(--gr);margin-bottom:4px">✅</div><div style="font-size:12px;font-weight:600;color:var(--gr)">dokumen-referensi.pdf</div><div style="font-size:10.5px;color:var(--t3);margin-top:2px">2.4MB · PDF · Siap digunakan</div>';
      this.style.borderColor = 'var(--gr)';
      this.style.background = 'var(--gr-dim)';
    });
  }

  // Chat bars
  const ci = root.querySelector('.chat-input');
  if (ci) {
    ci.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) e.preventDefault();
    });
  }
  const sb = root.querySelector('.send-btn');
  if (sb) {
    sb.addEventListener('click', function() {
      const inp = root.querySelector('.chat-input');
      if (inp && inp.value.trim()) {
        inp.value = '';
        inp.focus();
      }
    });
  }

  // set language
  if (typeof window.setLang === 'function') {
    window.setLang(document.documentElement.lang || 'id');
  }
}
