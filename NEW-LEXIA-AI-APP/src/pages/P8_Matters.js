export const chatBar = false;

export function render(container) {
  container.innerHTML = `
  <div class="main-scroll">
    <div class="ph">
      <div>
        <div class="ph-title" data-id="Perkara &amp; <em>Audit Trail</em>" data-en="Case &amp; <em>Audit Trail</em>">Perkara &amp; <em>Audit Trail</em></div>
        <div class="ph-sub" data-id="Lacak dan kelola seluruh perkara hukum dengan jejak audit digital yang komprehensif" data-en="Track and manage all legal cases with a comprehensive digital audit trail">Lacak dan kelola seluruh perkara hukum dengan jejak audit digital yang komprehensif</div>
      </div>
      <div class="ph-right">
        <button class="btn btn-outline" data-id="🔍 Cari Perkara" data-en="🔍 Search Case" data-toast="Fitur pencarian segera hadir">🔍 Cari Perkara</button>
        <button class="btn btn-bl" id="btnNewCase" data-id="+ Perkara Baru" data-en="+ New Case">+ Perkara Baru</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:4px">
      <div class="card card-feat"><div class="cp">
        <div class="kpi-n kpi-bl" style="font-size:38px">7</div>
        <div class="kpi-lbl" data-id="Perkara Aktif" data-en="Active Cases">Perkara Aktif</div>
        <div class="kpi-badge kb-up" data-id="↑ +2 bulan ini" data-en="↑ +2 this month">↑ +2 bulan ini</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-ink" style="font-size:38px">23</div>
        <div class="kpi-lbl" data-id="Total Dokumen" data-en="Total Documents">Total Dokumen</div>
        <div class="kpi-badge kb-bl" data-id="5 baru hari ini" data-en="5 new today">5 baru hari ini</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-am" style="font-size:38px">3</div>
        <div class="kpi-lbl" data-id="Memerlukan Tindak Lanjut" data-en="Requires Follow-Up">Memerlukan Tindak Lanjut</div>
        <div class="kpi-badge kb-warn" data-id="Batas waktu dekat" data-en="Deadline approaching">Batas waktu dekat</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-gr" style="font-size:38px;color:var(--gr)">4</div>
        <div class="kpi-lbl" data-id="Selesai Bulan Ini" data-en="Completed This Month">Selesai Bulan Ini</div>
        <div class="kpi-badge kb-up" data-id="↑ +1 dari target" data-en="↑ +1 above target">↑ +1 dari target</div>
      </div></div>
    </div>

    <div class="matter-grid">
      <!-- MATTER TABLE -->
      <div class="card"><div class="cp" style="padding:0">
        <div class="flex-between" style="padding:12px 16px;border-bottom:1px solid var(--bd-n)">
          <div class="ch-title" data-id="Portofolio Perkara" data-en="Case Portfolio">Portofolio Perkara</div>
          <div style="display:flex;gap:6px">
            <select style="font-size:12px;border:1px solid var(--bd-n2);border-radius:var(--r-sm);padding:4px 8px;background:var(--surface2);color:var(--t2);outline:none">
              <option data-id="Semua Status" data-en="All Status">Semua Status</option>
              <option data-id="Aktif" data-en="Active">Aktif</option>
              <option data-id="Review" data-en="Review">Review</option>
            </select>
          </div>
        </div>
        <table class="matter-table">
          <thead><tr>
            <th data-id="No. Perkara" data-en="Case No.">No. Perkara</th>
            <th data-id="Deskripsi" data-en="Description">Deskripsi</th>
            <th data-id="PIC" data-en="PIC">PIC</th>
            <th data-id="Nilai" data-en="Value">Nilai</th>
            <th data-id="Batas" data-en="Deadline">Batas</th>
            <th data-id="Status" data-en="Status">Status</th>
          </tr></thead>
          <tbody>
            <tr>
              <td><span class="font-mono-bl">PKS/2025/047</span></td>
              <td><strong data-id="Turbin PLTGU Grati" data-en="Turbin PLTGU Grati">Turbin PLTGU Grati</strong><br/><span style="font-size:10.5px;color:var(--t4)" data-id="Perjanjian Kerja Sama" data-en="Cooperation Agreement">Perjanjian Kerja Sama</span></td>
              <td><span style="font-size:12px">Ahmad S.</span></td>
              <td><span class="font-mono-val">Rp 52M</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--am)">31 Mar</span></td>
              <td><span class="badge b-am" data-id="Review" data-en="Review">Review</span></td>
            </tr>
            <tr>
              <td><span class="font-mono-bl">KSO/2026/002</span></td>
              <td><strong data-id="Distribusi Jawa Barat" data-en="West Java Distribution">Distribusi Jawa Barat</strong><br/><span style="font-size:10.5px;color:var(--t4)" data-id="Kerja Sama Operasi" data-en="Joint Operation">Kerja Sama Operasi</span></td>
              <td><span style="font-size:12px">Sari D.</span></td>
              <td><span class="font-mono-val">Rp 120M</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--gr)">15 Apr</span></td>
              <td><span class="badge b-gr" data-id="Aktif" data-en="Active">Aktif</span></td>
            </tr>
            <tr>
              <td><span class="font-mono-bl">PKS/2024/089</span></td>
              <td><strong data-id="Transmisi Sulawesi" data-en="Sulawesi Transmission">Transmisi Sulawesi</strong><br/><span style="font-size:10.5px;color:var(--t4)" data-id="Proyek EPC" data-en="EPC Project">Proyek EPC</span></td>
              <td><span style="font-size:12px">Budi R.</span></td>
              <td><span class="font-mono-val">Rp 380M</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--re)">28 Feb</span></td>
              <td><span class="badge b-red" data-id="Urgent" data-en="Urgent">Urgent</span></td>
            </tr>
            <tr>
              <td><span class="font-mono-bl">MoU/2026/001</span></td>
              <td><strong data-id="Renewable Energy — Co-PLTS" data-en="Renewable Energy — Co-PLTS">Renewable Energy — Co-PLTS</strong><br/><span style="font-size:10.5px;color:var(--t4)">MoU / LoI</span></td>
              <td><span style="font-size:12px">Dewi A.</span></td>
              <td><span class="font-mono-val">Rp 95M</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t2)">30 Jun</span></td>
              <td><span class="badge b-bl" data-id="Draft" data-en="Draft">Draft</span></td>
            </tr>
            <tr>
              <td><span class="font-mono-bl">PKS/2025/031</span></td>
              <td><strong data-id="PLTU Batubara Kalimantan" data-en="Kalimantan Coal PLTU">PLTU Batubara Kalimantan</strong><br/><span style="font-size:10.5px;color:var(--t4)" data-id="Kontrak Pengadaan" data-en="Procurement Contract">Kontrak Pengadaan</span></td>
              <td><span style="font-size:12px">Hendra W.</span></td>
              <td><span class="font-mono-val">Rp 780M</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--gr)">30 Sep</span></td>
              <td><span class="badge b-gr" data-id="Aktif" data-en="Active">Aktif</span></td>
            </tr>
          </tbody>
        </table>
      </div></div>

      <!-- RIGHT PANEL: AUDIT TRAIL -->
      <div class="flex-col" style="gap:10px">
        <div class="card"><div class="cp">
          <div class="ch-title" style="margin-bottom:12px" data-id="Jejak Audit Terkini" data-en="Recent Audit Trail">Jejak Audit Terkini</div>
          <div class="audit-row">
            <div class="audit-dot" style="background:var(--bl)"></div>
            <div class="audit-body">
              <div class="audit-action" data-id="Dokumen diupload" data-en="Document uploaded">Dokumen diupload</div>
              <div class="audit-meta">PKS-Turbin-v2.1.pdf</div>
              <div class="audit-user">Ahmad Santoso</div>
              <div class="audit-meta font-mono-audit">27 Feb 2026 · 09:43 WIB · 192.168.1.10</div>
            </div>
          </div>
          <div class="audit-row">
            <div class="audit-dot" style="background:var(--gr)"></div>
            <div class="audit-body">
              <div class="audit-action" data-id="Analisis kepatuhan selesai" data-en="Compliance analysis completed">Analisis kepatuhan selesai</div>
              <div class="audit-meta" data-id="Skor: 76/100 · 5 temuan" data-en="Score: 76/100 · 5 findings">Skor: 76/100 · 5 temuan</div>
              <div class="audit-user">Lexia AI System</div>
              <div class="audit-meta font-mono-audit">27 Feb 2026 · 09:41 WIB · System</div>
            </div>
          </div>
          <div class="audit-row">
            <div class="audit-dot" style="background:var(--am)"></div>
            <div class="audit-body">
              <div class="audit-action" data-id="Status perkara diubah" data-en="Case status changed">Status perkara diubah</div>
              <div class="audit-meta">PKS/2025/047 → Review</div>
              <div class="audit-user">Sari Dewi</div>
              <div class="audit-meta font-mono-audit">27 Feb 2026 · 08:15 WIB · 192.168.1.22</div>
            </div>
          </div>
          <div class="audit-row">
            <div class="audit-dot" style="background:var(--re)"></div>
            <div class="audit-body">
              <div class="audit-action" data-id="Peringatan dikirim" data-en="Alert sent">Peringatan dikirim</div>
              <div class="audit-meta" data-id="POJK 15/2026 berdampak pada PKS/2025/047" data-en="POJK 15/2026 impacts PKS/2025/047">POJK 15/2026 berdampak pada PKS/2025/047</div>
              <div class="audit-user">Radar Regulasi</div>
              <div class="audit-meta font-mono-audit">26 Feb 2026 · 22:00 WIB · Auto</div>
            </div>
          </div>
          <div class="audit-row">
            <div class="audit-dot" style="background:var(--t5)"></div>
            <div class="audit-body">
              <div class="audit-action" data-id="Login sistem" data-en="System login">Login sistem</div>
              <div class="audit-meta" data-id="Sesi dimulai · Autentikasi Google SSO" data-en="Session started · Google SSO authentication">Sesi dimulai · Autentikasi Google SSO</div>
              <div class="audit-user">Ahmad Santoso</div>
              <div class="audit-meta font-mono-audit">26 Feb 2026 · 08:02 WIB · 192.168.1.10</div>
            </div>
          </div>
          <div style="margin-top:10px">
            <button class="btn btn-outline" style="width:100%;justify-content:center;font-size:12px" data-id="📋 Ekspor Audit Log" data-en="📋 Export Audit Log" data-toast="Mengunduh audit log…">📋 Ekspor Audit Log</button>
          </div>
        </div></div>

        <div class="card"><div class="cp">
          <div class="ch-title" style="margin-bottom:10px" data-id="Ringkasan Kinerja" data-en="Performance Summary">Ringkasan Kinerja</div>
          <div class="stat-row"><span class="stat-lbl" data-id="Total nilai terkontrak" data-en="Total contracted value">Total nilai terkontrak</span><span class="stat-val">Rp 1.43 T</span></div>
          <div class="stat-row"><span class="stat-lbl" data-id="Rata-rata penyelesaian" data-en="Average completion">Rata-rata penyelesaian</span><span class="stat-val">87%</span></div>
          <div class="stat-row"><span class="stat-lbl" data-id="Perkara bulan ini" data-en="Cases this month">Perkara bulan ini</span><span class="stat-val">3 baru</span></div>
          <div class="stat-row"><span class="stat-lbl" data-id="Rata-rata skor kepatuhan" data-en="Average compliance score">Rata-rata skor kepatuhan</span><span class="stat-val" style="color:var(--am)">74/100</span></div>
        </div></div>
      </div>
    </div>
  </div>

  <!-- NEW CASE MODAL -->
  <div class="nc-overlay" id="ncOverlay">
    <div class="nc-modal" role="dialog" aria-modal="true">
      <div class="nc-modal-hd">
        <div>
          <div class="nc-modal-title" data-id="Perkara Baru" data-en="New Case">Perkara Baru</div>
          <div class="nc-modal-sub" data-id="Isi detail perkara untuk ditambahkan ke daftar" data-en="Fill in case details to add to the list">Isi detail perkara untuk ditambahkan ke daftar</div>
        </div>
        <button class="nc-modal-close" id="ncClose" aria-label="Close">✕</button>
      </div>
      <div class="nc-modal-body">
        <div class="fsec-lbl" data-id="Identitas Perkara" data-en="Case Identity">Identitas Perkara</div>
        <div class="fg-row">
          <div class="fg">
            <label data-id="No. Perkara" data-en="Case No.">No. Perkara <span class="req">*</span></label>
            <input type="text" id="ncCaseNo" placeholder="PKS/2026/001"/>
          </div>
          <div class="fg">
            <label data-id="Status" data-en="Status">Status <span class="req">*</span></label>
            <select id="ncStatus">
              <option value="Draft" data-id="Draft" data-en="Draft">Draft</option>
              <option value="Aktif" data-id="Aktif" data-en="Active">Aktif</option>
              <option value="Review" data-id="Review" data-en="Review">Review</option>
              <option value="Urgent" data-id="Urgent" data-en="Urgent">Urgent</option>
            </select>
          </div>
        </div>
        <div class="fg">
          <label data-id="Judul Perkara" data-en="Case Title">Judul Perkara <span class="req">*</span></label>
          <input type="text" id="ncTitle" placeholder="Nama proyek atau pihak terkait…"/>
        </div>
        <div class="fg">
          <label data-id="Jenis Perkara" data-en="Case Type">Jenis Perkara</label>
          <select id="ncType">
            <option value="Perjanjian Kerja Sama" data-id="Perjanjian Kerja Sama" data-en="Cooperation Agreement">Perjanjian Kerja Sama</option>
            <option value="Kerja Sama Operasi" data-id="Kerja Sama Operasi" data-en="Joint Operation">Kerja Sama Operasi</option>
            <option value="Proyek EPC" data-id="Proyek EPC" data-en="EPC Project">Proyek EPC</option>
            <option value="MoU / LoI" data-id="MoU / LoI" data-en="MoU / LoI">MoU / LoI</option>
            <option value="Kontrak Pengadaan" data-id="Kontrak Pengadaan" data-en="Procurement Contract">Kontrak Pengadaan</option>
            <option value="Perjanjian Lainnya" data-id="Perjanjian Lainnya" data-en="Other Agreement">Perjanjian Lainnya</option>
          </select>
        </div>
        <div class="fsec-lbl" data-id="Tim &amp; Akses" data-en="Team &amp; Access">Tim &amp; Akses</div>
        <div class="fg-row">
          <div class="fg">
            <label data-id="PIC (Penanggung Jawab)" data-en="PIC (Person in Charge)">PIC <span class="req">*</span></label>
            <input type="text" id="ncPic" placeholder="Nama lengkap…"/>
          </div>
          <div class="fg">
            <label data-id="Nilai Kontrak" data-en="Contract Value">Nilai Kontrak</label>
            <input type="text" id="ncValue" placeholder="Rp 0"/>
          </div>
        </div>

        <div class="fg">
          <label data-id="Anggota Tim" data-en="Team Members">Anggota Tim <span class="opt-lbl" data-id="opsional" data-en="optional">opsional</span></label>
          <div class="nc-member-row">
            <input type="text" id="ncMemberInput"
              data-placeholder-id="Ketik nama lalu tekan Enter…"
              data-placeholder-en="Type name and press Enter…"
              placeholder="Ketik nama lalu tekan Enter…"/>
            <button class="nc-member-add-btn" id="ncMemberAdd" type="button" aria-label="Add member">+</button>
          </div>
          <div class="nc-member-chips" id="ncMemberChips"></div>
          <div class="nc-access-note" id="ncAccessNote">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="8" cy="8" r="6"/><path d="M8 7.5v3M8 5.2v.3"/></svg>
            <span data-id="Hanya PIC dan anggota yang terdaftar yang dapat mengakses dan melihat isi perkara ini." data-en="Only the PIC and listed members can access and view the contents of this case.">Hanya PIC dan anggota yang terdaftar yang dapat mengakses dan melihat isi perkara ini.</span>
          </div>
        </div>

        <div class="fg">
          <label data-id="Batas Waktu" data-en="Deadline">Batas Waktu</label>
          <input type="date" id="ncDeadline"/>
        </div>
        <div class="fg">
          <label>Catatan <span class="opt-lbl" data-id="opsional" data-en="optional">opsional</span></label>
          <textarea id="ncNotes" rows="2" placeholder="Informasi tambahan mengenai perkara ini…"></textarea>
        </div>

        <div class="fsec-lbl" data-id="Dokumen Pendukung" data-en="Supporting Documents">Dokumen Pendukung</div>

        <!-- Upload zone -->
        <div class="nc-upload-zone" id="ncUploadZone">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <div class="nc-upload-main" data-id="Seret &amp; lepas atau <span class='nc-upload-link'>pilih file</span>" data-en="Drag &amp; drop or <span class='nc-upload-link'>browse</span>">Seret &amp; lepas atau <span class="nc-upload-link">pilih file</span></div>
          <div class="nc-upload-sub" data-id="PDF, DOCX, XLSX — maks. 50 MB" data-en="PDF, DOCX, XLSX — max. 50 MB">PDF, DOCX, XLSX — maks. 50 MB</div>
          <input type="file" id="ncFileInput" accept=".pdf,.doc,.docx,.xls,.xlsx" style="display:none"/>
        </div>

        <!-- File preview (shown after selection) -->
        <div class="nc-file-preview" id="ncFilePreview">
          <div class="nc-file-ico">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--bl)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <span class="nc-file-name" id="ncFileName">—</span>
          <span class="nc-file-size" id="ncFileSize"></span>
          <button class="nc-file-remove" id="ncFileRemove" aria-label="Remove file">✕</button>
        </div>

        <!-- Scope selector (visible only when a file is attached) -->
        <div class="nc-scope" id="ncScope" style="display:none">
          <div style="font-size:11px;font-weight:600;color:var(--t3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:2px" data-id="Simpan dokumen ke:" data-en="Save document to:">Simpan dokumen ke:</div>

          <div class="nc-scope-opt selected" id="ncScopeClosed" data-scope="closed">
            <div class="nc-scope-radio"></div>
            <div>
              <div class="nc-scope-lbl" data-id="🔒 Khusus Perkara Ini" data-en="🔒 This Case Only">🔒 Khusus Perkara Ini</div>
              <div class="nc-scope-desc" data-id="Dokumen hanya dapat diakses dalam konteks perkara ini. Cocok untuk kontrak, korespondensi klien, dan dokumen rahasia." data-en="Document is only accessible within this case context. Ideal for contracts, client correspondence, and confidential documents.">Dokumen hanya dapat diakses dalam konteks perkara ini. Cocok untuk kontrak, korespondensi klien, dan dokumen rahasia.</div>
            </div>
          </div>

          <div class="nc-scope-opt" id="ncScopeDb" data-scope="database">
            <div class="nc-scope-radio"></div>
            <div style="flex:1">
              <div class="nc-scope-lbl" data-id="🗄️ Simpan ke Regulation Database" data-en="🗄️ Save to Regulation Database">🗄️ Simpan ke Regulation Database</div>
              <div class="nc-scope-desc" data-id="Dokumen juga disimpan ke database regulasi untuk referensi lintas perkara. Cocok untuk regulasi publik, putusan pengadilan, dan template standar." data-en="Document is also saved to a regulation database for cross-case reference. Ideal for public regulations, court rulings, and standard templates.">Dokumen juga disimpan ke database regulasi untuk referensi lintas perkara. Cocok untuk regulasi publik, putusan pengadilan, dan template standar.</div>
              <!-- Database picker — only shown when this scope is selected -->
              <div class="nc-db-picker" id="ncDbPicker">
                <select id="ncDbSelect">
                  <option data-id="Regulasi OJK 2020–2026" data-en="OJK Regulations 2020–2026">Regulasi OJK 2020–2026</option>
                  <option data-id="JDIH Nasional" data-en="National JDIH">JDIH Nasional</option>
                  <option data-id="Putusan Mahkamah Agung" data-en="Supreme Court Rulings">Putusan Mahkamah Agung</option>
                  <option data-id="Standar Internal Perusahaan" data-en="Company Internal Standards">Standar Internal Perusahaan</option>
                  <option data-id="Kontrak Vendor 2025–2026" data-en="Vendor Contracts 2025–2026">Kontrak Vendor 2025–2026</option>
                  <option data-id="Audit &amp; Temuan Hukum Q4 2025" data-en="Legal Audit &amp; Findings Q4 2025">Audit &amp; Temuan Hukum Q4 2025</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nc-modal-footer">
        <span class="nc-req-note" data-id="* Wajib diisi" data-en="* Required fields">* Wajib diisi</span>
        <button class="btn btn-outline" id="ncCancel" data-id="Batal" data-en="Cancel">Batal</button>
        <button class="btn btn-bl" id="ncSave" data-id="Simpan Perkara" data-en="Save Case">Simpan Perkara</button>
      </div>
    </div>
  </div>
  `;
}

export function initInteractions(root) {
  root.addEventListener('click', e => {
    const toast = e.target.closest('[data-toast]');
    if (toast) { window.showToast(toast.dataset.toast); return; }
  });

  // ── New Case Modal ──
  const ncOverlay = root.querySelector('#ncOverlay');
  const btnNewCase = root.querySelector('#btnNewCase');
  const tbody = root.querySelector('.matter-table tbody');

  const BADGE = { Draft:'b-bl', Aktif:'b-gr', Review:'b-am', Urgent:'b-red' };
  const STATUS_ID = { Draft:'Draft', Aktif:'Aktif', Review:'Review', Urgent:'Urgent' };
  const STATUS_EN = { Draft:'Draft', Aktif:'Active', Review:'Review', Urgent:'Urgent' };
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const AV_COLORS = ['#1967D2','#0D7A4E','#C97000','#7B2FBE','#B91C1C','#0369A1','#6B7280'];

  // ── Member state ──
  const members = [];
  const memberInput  = root.querySelector('#ncMemberInput');
  const memberAdd    = root.querySelector('#ncMemberAdd');
  const memberChips  = root.querySelector('#ncMemberChips');
  const accessNote   = root.querySelector('#ncAccessNote');

  function getInitials(name) {
    return name.trim().split(/\s+/).slice(0,2).map(w => w[0].toUpperCase()).join('');
  }
  function getAvColor(name) {
    let h = 0; for (const c of name) h = c.charCodeAt(0) + ((h << 5) - h);
    return AV_COLORS[Math.abs(h) % AV_COLORS.length];
  }
  function renderMembers() {
    memberChips.innerHTML = members.map((name, i) => `
      <div class="nc-member-chip">
        <div class="nc-member-av" style="background:${getAvColor(name)}">${getInitials(name)}</div>
        <span class="nc-member-chip-name">${name.replace(/</g,'&lt;')}</span>
        <button class="nc-member-chip-rm" data-mi="${i}" aria-label="Remove">✕</button>
      </div>`).join('');
    if (members.length > 0) accessNote.classList.add('show');
    else accessNote.classList.remove('show');
  }
  function addMember(raw) {
    const name = raw.trim();
    if (!name) return;
    const lang = localStorage.getItem('lexia-lang') || 'id';
    if (members.includes(name)) {
      window.showToast(lang === 'id' ? `${name} sudah ditambahkan` : `${name} already added`);
      return;
    }
    members.push(name);
    renderMembers();
    if (memberInput) memberInput.value = '';
  }
  memberAdd?.addEventListener('click', () => addMember(memberInput?.value || ''));
  memberInput?.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); addMember(memberInput.value); }
  });
  memberChips?.addEventListener('click', e => {
    const btn = e.target.closest('.nc-member-chip-rm');
    if (btn) { members.splice(+btn.dataset.mi, 1); renderMembers(); }
  });

  // ── File state ──
  let attachedFile = null;
  const uploadZone   = root.querySelector('#ncUploadZone');
  const fileInput    = root.querySelector('#ncFileInput');
  const filePreview  = root.querySelector('#ncFilePreview');
  const fileNameEl   = root.querySelector('#ncFileName');
  const fileSizeEl   = root.querySelector('#ncFileSize');
  const fileRemove   = root.querySelector('#ncFileRemove');
  const scopeBlock   = root.querySelector('#ncScope');
  const scopeClosed  = root.querySelector('#ncScopeClosed');
  const scopeDb      = root.querySelector('#ncScopeDb');
  const dbPicker     = root.querySelector('#ncDbPicker');

  function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024*1024) return (bytes/1024).toFixed(1) + ' KB';
    return (bytes/(1024*1024)).toFixed(1) + ' MB';
  }

  function showFile(file) {
    attachedFile = file;
    fileNameEl.textContent = file.name;
    fileSizeEl.textContent = formatBytes(file.size);
    filePreview.classList.add('show');
    scopeBlock.style.display = 'flex';
  }

  function clearFile() {
    attachedFile = null;
    fileInput.value = '';
    filePreview.classList.remove('show');
    scopeBlock.style.display = 'none';
    // Reset scope to default (closed)
    scopeClosed.classList.add('selected');
    scopeDb.classList.remove('selected');
    dbPicker.classList.remove('show');
  }

  // Upload zone click
  uploadZone?.addEventListener('click', () => fileInput?.click());

  // File input change
  fileInput?.addEventListener('change', () => {
    if (fileInput.files[0]) showFile(fileInput.files[0]);
  });

  // Drag & drop
  uploadZone?.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag'); });
  uploadZone?.addEventListener('dragleave', () => uploadZone.classList.remove('drag'));
  uploadZone?.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.classList.remove('drag');
    const f = e.dataTransfer.files[0];
    if (f) showFile(f);
  });

  // Remove file
  fileRemove?.addEventListener('click', clearFile);

  // Scope toggle
  scopeClosed?.addEventListener('click', () => {
    scopeClosed.classList.add('selected');
    scopeDb.classList.remove('selected');
    dbPicker.classList.remove('show');
  });
  scopeDb?.addEventListener('click', () => {
    scopeDb.classList.add('selected');
    scopeClosed.classList.remove('selected');
    dbPicker.classList.add('show');
  });

  // ── Open / close modal ──
  function openModal() {
    ['ncCaseNo','ncTitle','ncPic','ncValue','ncDeadline','ncNotes','ncMemberInput'].forEach(id => {
      const el = root.querySelector('#' + id);
      if (el) el.value = '';
    });
    root.querySelector('#ncStatus').value = 'Draft';
    root.querySelector('#ncType').selectedIndex = 0;
    members.length = 0;
    renderMembers();
    clearFile();
    ncOverlay.classList.add('open');
    setTimeout(() => root.querySelector('#ncCaseNo')?.focus(), 80);
  }

  function closeModal() { ncOverlay.classList.remove('open'); }

  if (btnNewCase) btnNewCase.addEventListener('click', openModal);
  root.querySelector('#ncClose')?.addEventListener('click', closeModal);
  root.querySelector('#ncCancel')?.addEventListener('click', closeModal);
  ncOverlay?.addEventListener('click', e => { if (e.target === ncOverlay) closeModal(); });

  // ── Save ──
  root.querySelector('#ncSave')?.addEventListener('click', () => {
    const lang = localStorage.getItem('lexia-lang') || 'id';
    const caseNo  = root.querySelector('#ncCaseNo').value.trim();
    const title   = root.querySelector('#ncTitle').value.trim();
    const pic     = root.querySelector('#ncPic').value.trim();
    const value   = root.querySelector('#ncValue').value.trim() || '—';
    const deadlineRaw = root.querySelector('#ncDeadline').value;
    const status  = root.querySelector('#ncStatus').value;
    const typeEl  = root.querySelector('#ncType');
    const typeOpt = typeEl.options[typeEl.selectedIndex];
    const typeId  = typeOpt.getAttribute('data-id') || typeOpt.value;
    const typeEn  = typeOpt.getAttribute('data-en') || typeOpt.value;

    if (!caseNo || !title || !pic) {
      window.showToast(lang === 'id' ? 'Mohon lengkapi field wajib (*)' : 'Please fill in required fields (*)');
      return;
    }

    let dlDisplay = '—', dlColor = 'var(--t2)';
    if (deadlineRaw) {
      const d = new Date(deadlineRaw);
      dlDisplay = d.getDate() + ' ' + MONTHS[d.getMonth()];
      const diff = d - new Date();
      dlColor = diff < 0 ? 'var(--re)' : diff < 30*24*60*60*1000 ? 'var(--am)' : 'var(--gr)';
    }

    const badgeClass = BADGE[status] || 'b-bl';
    const statusLabel = (lang === 'id' ? STATUS_ID : STATUS_EN)[status];
    const typeLabel = lang === 'id' ? typeId : typeEn;

    // Build PIC cell: show member avatars if any
    const picSafe = pic.replace(/</g,'&lt;');
    const memberAvatars = members.slice(0,3).map(m =>
      `<span title="${m.replace(/</g,'&lt;')}" style="display:inline-flex;width:18px;height:18px;border-radius:50%;background:${getAvColor(m)};align-items:center;justify-content:center;font-size:7.5px;font-weight:700;color:#fff;border:1.5px solid #fff;margin-left:-5px">${getInitials(m)}</span>`
    ).join('');
    const memberOverflow = members.length > 3
      ? `<span style="display:inline-flex;width:18px;height:18px;border-radius:50%;background:var(--bg2);border:1.5px solid var(--bd-n2);align-items:center;justify-content:center;font-size:7.5px;font-weight:600;color:var(--t3);margin-left:-5px">+${members.length - 3}</span>`
      : '';
    const picCell = members.length > 0
      ? `<span style="font-size:12px">${picSafe}</span><br/><div style="display:inline-flex;align-items:center;margin-top:3px;padding-left:5px">${memberAvatars}${memberOverflow}</div>`
      : `<span style="font-size:12px">${picSafe}</span>`;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="font-mono-bl">${caseNo.replace(/</g,'&lt;')}</span></td>
      <td><strong>${title.replace(/</g,'&lt;')}</strong><br/><span style="font-size:10.5px;color:var(--t4)" data-id="${typeId}" data-en="${typeEn}">${typeLabel}</span></td>
      <td>${picCell}</td>
      <td><span class="font-mono-val">${value.replace(/</g,'&lt;')}</span></td>
      <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:${dlColor}">${dlDisplay}</span></td>
      <td><span class="badge ${badgeClass}" data-id="${STATUS_ID[status]}" data-en="${STATUS_EN[status]}">${statusLabel}</span></td>`;
    tbody.prepend(tr);

    // Toast: include document scope info if a file was attached
    let toastMsg = lang === 'id' ? `Perkara ${caseNo} berhasil ditambahkan` : `Case ${caseNo} added successfully`;
    if (attachedFile) {
      const isDb = scopeDb.classList.contains('selected');
      if (isDb) {
        const dbName = root.querySelector('#ncDbSelect')?.value || '';
        toastMsg = lang === 'id'
          ? `Perkara ${caseNo} ditambahkan — dokumen disimpan ke ${dbName}`
          : `Case ${caseNo} added — document saved to ${dbName}`;
      } else {
        toastMsg = lang === 'id'
          ? `Perkara ${caseNo} ditambahkan — dokumen tersimpan khusus perkara ini`
          : `Case ${caseNo} added — document saved to this case only`;
      }
    }

    closeModal();
    window.showToast(toastMsg);
  });
}
