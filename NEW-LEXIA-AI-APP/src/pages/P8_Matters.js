export function render(container) {
  container.innerHTML = `
<div class="main-wrap">
  <div class="main-scroll">
    <div class="ph">
      <div>
        <div class="ph-eyebrow" data-id="Administrasi · Matter & Audit" data-en="Administration · Matter & Audit">Administrasi · Matter &amp; Audit</div>
        <div class="ph-title">Matter &amp; <em>Audit Trail</em></div>
        <div class="ph-sub" data-id="Kelola semua perkara hukum dan lacak jejak digital setiap aktivitas" data-en="Manage all legal matters and track the digital trail of every activity">Kelola semua perkara hukum dan lacak jejak digital setiap aktivitas</div>
      </div>
      <div class="ph-right">
        <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" onclick="setLang('id')">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" onclick="setLang('en')">🇺🇸 EN</button>
        </div>
        <button class="btn btn-outline" data-id="🔍 Cari Matter" data-en="🔍 Search Matter">🔍 Cari Matter</button>
        <button class="btn btn-bl" data-id="+ Matter Baru" data-en="+ New Matter">+ Matter Baru</button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:4px">
      <div class="card card-feat"><div class="cp">
        <div class="kpi-n kpi-bl" style="font-size:38px">7</div>
        <div class="kpi-lbl" data-id="Matter Aktif" data-en="Active Matters">Matter Aktif</div>
        <div class="kpi-badge kb-up" data-id="↑ +2 bulan ini" data-en="↑ +2 this month">↑ +2 bulan ini</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-ink" style="font-size:38px">23</div>
        <div class="kpi-lbl" data-id="Total Dokumen" data-en="Total Documents">Total Dokumen</div>
        <div class="kpi-badge kb-bl" data-id="5 baru hari ini" data-en="5 new today">5 baru hari ini</div>
      </div></div>
      <div class="card"><div class="cp">
        <div class="kpi-n kpi-am" style="font-size:38px">3</div>
        <div class="kpi-lbl" data-id="Perlu Perhatian" data-en="Needs Attention">Perlu Perhatian</div>
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
        <div style="padding:12px 16px;border-bottom:1px solid var(--bd-n);display:flex;align-items:center;justify-content:space-between">
          <div class="ch-title" data-id="Daftar Matter" data-en="Matter List">Daftar Matter</div>
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
            <th data-id="No. Matter" data-en="Matter No.">No. Matter</th>
            <th data-id="Deskripsi" data-en="Description">Deskripsi</th>
            <th data-id="PIC" data-en="PIC">PIC</th>
            <th data-id="Nilai" data-en="Value">Nilai</th>
            <th data-id="Batas" data-en="Deadline">Batas</th>
            <th data-id="Status" data-en="Status">Status</th>
          </tr></thead>
          <tbody>
            <tr>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--bl)">PKS/2025/047</span></td>
              <td><strong data-id="Turbin PLTGU Grati" data-en="Turbin PLTGU Grati">Turbin PLTGU Grati</strong><br/><span style="font-size:10.5px;color:var(--t4)" data-id="Perjanjian Kerja Sama" data-en="Cooperation Agreement">Perjanjian Kerja Sama</span></td>
              <td><span style="font-size:12px">Ahmad S.</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11.5px">Rp 52M</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--am)">31 Mar</span></td>
              <td><span class="badge b-am" data-id="Review" data-en="Review">Review</span></td>
            </tr>
            <tr>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--bl)">KSO/2026/002</span></td>
              <td><strong data-id="Distribusi Jawa Barat" data-en="West Java Distribution">Distribusi Jawa Barat</strong><br/><span style="font-size:10.5px;color:var(--t4)" data-id="Kerja Sama Operasi" data-en="Joint Operation">Kerja Sama Operasi</span></td>
              <td><span style="font-size:12px">Sari D.</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11.5px">Rp 120M</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--gr)">15 Apr</span></td>
              <td><span class="badge b-gr" data-id="Aktif" data-en="Active">Aktif</span></td>
            </tr>
            <tr>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--bl)">PKS/2024/089</span></td>
              <td><strong data-id="Transmisi Sulawesi" data-en="Sulawesi Transmission">Transmisi Sulawesi</strong><br/><span style="font-size:10.5px;color:var(--t4)" data-id="Proyek EPC" data-en="EPC Project">Proyek EPC</span></td>
              <td><span style="font-size:12px">Budi R.</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11.5px">Rp 380M</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--re)">28 Feb</span></td>
              <td><span class="badge b-red" data-id="Urgent" data-en="Urgent">Urgent</span></td>
            </tr>
            <tr>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--bl)">MoU/2026/001</span></td>
              <td><strong data-id="Renewable Energy — PLN-PLTS" data-en="Renewable Energy — PLN-PLTS">Renewable Energy — PLN-PLTS</strong><br/><span style="font-size:10.5px;color:var(--t4)">MoU / LoI</span></td>
              <td><span style="font-size:12px">Dewi A.</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11.5px">Rp 95M</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--t2)">30 Jun</span></td>
              <td><span class="badge b-bl" data-id="Draft" data-en="Draft">Draft</span></td>
            </tr>
            <tr>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--bl)">PKS/2025/031</span></td>
              <td><strong data-id="PLTU Batubara Kalimantan" data-en="Kalimantan Coal PLTU">PLTU Batubara Kalimantan</strong><br/><span style="font-size:10.5px;color:var(--t4)" data-id="Kontrak Pengadaan" data-en="Procurement Contract">Kontrak Pengadaan</span></td>
              <td><span style="font-size:12px">Hendra W.</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11.5px">Rp 780M</span></td>
              <td><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--gr)">30 Sep</span></td>
              <td><span class="badge b-gr" data-id="Aktif" data-en="Active">Aktif</span></td>
            </tr>
          </tbody>
        </table>
      </div></div>

      <!-- RIGHT PANEL: AUDIT TRAIL -->
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="card"><div class="cp">
          <div class="ch-title" style="margin-bottom:12px" data-id="Audit Trail Terkini" data-en="Recent Audit Trail">Audit Trail Terkini</div>
          <div class="audit-row">
            <div class="audit-dot" style="background:var(--bl)"></div>
            <div class="audit-body">
              <div class="audit-action" data-id="Dokumen diupload" data-en="Document uploaded">Dokumen diupload</div>
              <div class="audit-meta">PKS-Turbin-v2.1.pdf</div>
              <div class="audit-user">Ahmad Santoso</div>
              <div class="audit-meta" style="font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--t4)">27 Feb 2026 · 09:43 WIB · 192.168.1.10</div>
            </div>
          </div>
          <div class="audit-row">
            <div class="audit-dot" style="background:var(--gr)"></div>
            <div class="audit-body">
              <div class="audit-action" data-id="Analisis kepatuhan selesai" data-en="Compliance analysis completed">Analisis kepatuhan selesai</div>
              <div class="audit-meta" data-id="Skor: 76/100 · 5 temuan" data-en="Score: 76/100 · 5 findings">Skor: 76/100 · 5 temuan</div>
              <div class="audit-user">Lexia AI System</div>
              <div class="audit-meta" style="font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--t4)">27 Feb 2026 · 09:41 WIB · System</div>
            </div>
          </div>
          <div class="audit-row">
            <div class="audit-dot" style="background:var(--am)"></div>
            <div class="audit-body">
              <div class="audit-action" data-id="Status matter diubah" data-en="Matter status changed">Status matter diubah</div>
              <div class="audit-meta">PKS/2025/047 → Review</div>
              <div class="audit-user">Sari Dewi</div>
              <div class="audit-meta" style="font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--t4)">27 Feb 2026 · 08:15 WIB · 192.168.1.22</div>
            </div>
          </div>
          <div class="audit-row">
            <div class="audit-dot" style="background:var(--re)"></div>
            <div class="audit-body">
              <div class="audit-action" data-id="Peringatan dikirim" data-en="Alert sent">Peringatan dikirim</div>
              <div class="audit-meta" data-id="POJK 15/2026 berdampak pada PKS/2025/047" data-en="POJK 15/2026 impacts PKS/2025/047">POJK 15/2026 berdampak pada PKS/2025/047</div>
              <div class="audit-user">Radar Regulasi</div>
              <div class="audit-meta" style="font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--t4)">26 Feb 2026 · 22:00 WIB · Auto</div>
            </div>
          </div>
          <div class="audit-row">
            <div class="audit-dot" style="background:var(--t5)"></div>
            <div class="audit-body">
              <div class="audit-action" data-id="Login sistem" data-en="System login">Login sistem</div>
              <div class="audit-meta" data-id="Sesi dimulai · Autentikasi Google SSO" data-en="Session started · Google SSO authentication">Sesi dimulai · Autentikasi Google SSO</div>
              <div class="audit-user">Ahmad Santoso</div>
              <div class="audit-meta" style="font-family:'IBM Plex Mono',monospace;font-size:9.5px;color:var(--t4)">26 Feb 2026 · 08:02 WIB · 192.168.1.10</div>
            </div>
          </div>
          <div style="margin-top:10px">
            <button class="btn btn-outline" style="width:100%;justify-content:center;font-size:12px" data-id="📋 Ekspor Audit Log" data-en="📋 Export Audit Log">📋 Ekspor Audit Log</button>
          </div>
        </div></div>

        <div class="card"><div class="cp">
          <div class="ch-title" style="margin-bottom:10px" data-id="Statistik Matter" data-en="Matter Statistics">Statistik Matter</div>
          <div class="stat-row"><span class="stat-lbl" data-id="Total nilai terkontrak" data-en="Total contracted value">Total nilai terkontrak</span><span class="stat-val">Rp 1.43 T</span></div>
          <div class="stat-row"><span class="stat-lbl" data-id="Rata-rata penyelesaian" data-en="Average completion">Rata-rata penyelesaian</span><span class="stat-val">87%</span></div>
          <div class="stat-row"><span class="stat-lbl" data-id="Matter bulan ini" data-en="Matters this month">Matter bulan ini</span><span class="stat-val">3 baru</span></div>
          <div class="stat-row"><span class="stat-lbl" data-id="Rata-rata skor kepatuhan" data-en="Average compliance score">Rata-rata skor kepatuhan</span><span class="stat-val" style="color:var(--am)">74/100</span></div>
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
