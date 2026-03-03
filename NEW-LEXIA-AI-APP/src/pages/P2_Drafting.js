/* ── Document type configurations (bilingual) ────────────────────── */
const DOC_TYPE_CONFIG = {
  partnership: {
    id: { title: 'Perjanjian Kemitraan', sub: 'Partnership Agreement', btn: 'Buat Perjanjian Kemitraan' },
    en: { title: 'Partnership Agreement', sub: 'Partnership Agreement', btn: 'Generate Partnership Agreement' },
  },
  nda: {
    id: { title: 'Perjanjian Kerahasiaan', sub: 'Non-Disclosure Agreement (NDA)', btn: 'Buat NDA' },
    en: { title: 'Non-Disclosure Agreement', sub: 'NDA', btn: 'Generate NDA' },
  },
  sales: {
    id: { title: 'Kontrak Penjualan', sub: 'Sales Contract', btn: 'Buat Kontrak Penjualan' },
    en: { title: 'Sales Contract', sub: 'Sales Contract', btn: 'Generate Sales Contract' },
  },
  service: {
    id: { title: 'Kontrak Layanan', sub: 'Service Contract', btn: 'Buat Kontrak Layanan' },
    en: { title: 'Service Contract', sub: 'Service Contract', btn: 'Generate Service Contract' },
  },
  generic: {
    id: { title: 'Dokumen Umum', sub: 'Generic Document', btn: 'Buat Draft Dokumen' },
    en: { title: 'Generic Document', sub: 'Generic Document', btn: 'Generate Document Draft' },
  },
};

/* ── Field templates (bilingual labels via data-id/data-en) ─────── */
const DOC_TYPE_FIELDS = {
  partnership: () => `
    <div class="fsec-lbl" data-id="Identitas Para Pihak" data-en="Party Identity">Identitas Para Pihak</div>
    <div class="fg"><label><span data-id="Pihak Pertama" data-en="First Party">Pihak Pertama</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. PT PLN (Persero)" data-placeholder-en="e.g., PT PLN (Persero)" placeholder="mis. PT PLN (Persero)"/></div>
    <div class="fg"><label><span data-id="Pihak Kedua" data-en="Second Party">Pihak Kedua</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. PT Mitra Teknologi Indonesia" data-placeholder-en="e.g., PT Mitra Teknologi Indonesia" placeholder="mis. PT Mitra Teknologi Indonesia"/></div>
    <div class="fsec-lbl" data-id="Durasi Perjanjian" data-en="Agreement Duration">Durasi Perjanjian</div>
    <div class="fg"><label><span data-id="Tanggal Efektif" data-en="Effective Date">Tanggal Efektif</span> <span class="req">*</span></label>
      <input type="date" value="2026-02-27"/></div>
    <div class="fg-row">
      <div class="fg"><label><span data-id="Jumlah Durasi" data-en="Duration Count">Jumlah Durasi</span> <span class="req">*</span></label>
        <input type="number" data-placeholder-id="mis. 12" data-placeholder-en="e.g., 12" placeholder="mis. 12" min="1"/></div>
      <div class="fg"><label><span data-id="Satuan Durasi" data-en="Duration Unit">Satuan Durasi</span> <span class="req">*</span></label>
        <select>
          <option value="" data-id="Pilih satuan" data-en="Select unit">Pilih satuan</option>
          <option data-id="Hari" data-en="Days">Hari</option>
          <option data-id="Minggu" data-en="Weeks">Minggu</option>
          <option selected data-id="Bulan" data-en="Months">Bulan</option>
          <option data-id="Tahun" data-en="Years">Tahun</option>
        </select></div>
    </div>
    <div class="fsec-lbl" data-id="Konten Kerjasama" data-en="Cooperation Content">Konten Kerjasama</div>
    <div class="fg"><label><span data-id="Tujuan Dokumen" data-en="Document Purpose">Tujuan Dokumen</span> <span class="req">*</span></label>
      <textarea data-placeholder-id="mis. Mendefinisikan ruang lingkup dan ketentuan kemitraan strategis..." data-placeholder-en="e.g., Define the scope and terms of a strategic partnership..." placeholder="mis. Mendefinisikan ruang lingkup dan ketentuan kemitraan strategis..."></textarea></div>
    <div class="fg"><label><span data-id="Lingkup Kerjasama" data-en="Scope of Cooperation">Lingkup Kerjasama</span> <span class="req">*</span></label>
      <textarea rows="3" data-placeholder-id="Deskripsi detail ruang lingkup perjanjian kemitraan..." data-placeholder-en="Detailed description of the partnership agreement scope..." placeholder="Deskripsi detail ruang lingkup perjanjian kemitraan..."></textarea></div>
    <div class="fg"><label><span data-id="Deliverables" data-en="Deliverables">Deliverables</span> <span class="req">*</span></label>
      <textarea rows="2" data-placeholder-id="Output atau hasil yang diharapkan dari kemitraan ini..." data-placeholder-en="Expected outputs or results from this partnership..." placeholder="Output atau hasil yang diharapkan dari kemitraan ini..."></textarea></div>
    <div class="fsec-lbl" data-id="Ketentuan Bisnis" data-en="Business Terms">Ketentuan Bisnis</div>
    <div class="fg"><label><span data-id="Ketentuan Pembayaran" data-en="Payment Terms">Ketentuan Pembayaran</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <input type="text" data-placeholder-id="mis. Net 30 hari, 30% di muka" data-placeholder-en="e.g., Net 30 days, 30% upfront" placeholder="mis. Net 30 hari, 30% di muka"/></div>
    <div class="fg"><label><span data-id="Hukum yang Berlaku" data-en="Governing Law">Hukum yang Berlaku</span> <span class="req">*</span></label>
      <input type="text" value="Indonesia (Hukum Perdata)"/></div>
    <div class="fg"><label><span data-id="Catatan Tambahan" data-en="Additional Notes">Catatan Tambahan</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <textarea rows="2" data-placeholder-id="Ketentuan khusus atau persyaratan spesifik lainnya..." data-placeholder-en="Special terms or other specific requirements..." placeholder="Ketentuan khusus atau persyaratan spesifik lainnya..."></textarea></div>`,

  nda: () => `
    <div class="fsec-lbl" data-id="Identitas Para Pihak" data-en="Party Identity">Identitas Para Pihak</div>
    <div class="fg"><label><span data-id="Pihak Pengungkap" data-en="Disclosing Party">Pihak Pengungkap</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. PT Perusahaan A Inc." data-placeholder-en="e.g., PT Company A Inc." placeholder="mis. PT Perusahaan A Inc."/></div>
    <div class="fg"><label><span data-id="Pihak Penerima" data-en="Receiving Party">Pihak Penerima</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. PT Konsultan X LLC" data-placeholder-en="e.g., PT Consultant X LLC" placeholder="mis. PT Konsultan X LLC"/></div>
    <div class="fsec-lbl" data-id="Ketentuan Kerahasiaan" data-en="Confidentiality Terms">Ketentuan Kerahasiaan</div>
    <div class="fg"><label><span data-id="Tujuan Pengungkapan" data-en="Purpose of Disclosure">Tujuan Pengungkapan</span> <span class="req">*</span></label>
      <textarea data-placeholder-id="mis. Evaluasi potensi kemitraan bisnis jangka panjang..." data-placeholder-en="e.g., Evaluation of potential long-term business partnership..." placeholder="mis. Evaluasi potensi kemitraan bisnis jangka panjang..."></textarea></div>
    <div class="fg"><label><span data-id="Definisi Informasi Rahasia" data-en="Definition of Confidential Information">Definisi Informasi Rahasia</span> <span class="req">*</span></label>
      <textarea rows="3" data-placeholder-id="Informasi teknis, bisnis, keuangan, dan operasional yang bersifat rahasia..." data-placeholder-en="Technical, business, financial, and operational information of a confidential nature..." placeholder="Informasi teknis, bisnis, keuangan, dan operasional yang bersifat rahasia..."></textarea></div>
    <div class="fg"><label><span data-id="Kewajiban Pihak Penerima" data-en="Obligations of Receiving Party">Kewajiban Pihak Penerima</span></label>
      <select>
        <option value="" data-id="Pilih standar kewajiban" data-en="Select obligation standard">Pilih standar kewajiban</option>
        <option data-id="Standar NDA Umum" data-en="Standard NDA Terms">Standar NDA Umum</option>
        <option data-id="Kerahasiaan Diperluas" data-en="Extended Confidentiality">Kerahasiaan Diperluas</option>
        <option data-id="Kustom (diatur dalam dokumen)" data-en="Custom (as defined in document)">Kustom (diatur dalam dokumen)</option>
      </select></div>
    <div class="fg"><label><span data-id="Jangka Waktu Perjanjian" data-en="Term of Agreement">Jangka Waktu Perjanjian</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. 5 tahun sejak tanggal efektif, tidak terbatas" data-placeholder-en="e.g., 5 years from effective date, indefinite" placeholder="mis. 5 tahun sejak tanggal efektif, tidak terbatas"/></div>
    <div class="fg"><label><span data-id="Pengembalian / Pemusnahan Informasi" data-en="Return / Destruction of Information">Pengembalian / Pemusnahan Informasi</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. Pada saat pemutusan atau atas permintaan tertulis" data-placeholder-en="e.g., Upon termination or written request" placeholder="mis. Pada saat pemutusan atau atas permintaan tertulis"/></div>
    <div class="fsec-lbl" data-id="Yurisdiksi" data-en="Jurisdiction">Yurisdiksi</div>
    <div class="fg"><label><span data-id="Hukum yang Berlaku" data-en="Governing Law">Hukum yang Berlaku</span> <span class="req">*</span></label>
      <input type="text" value="Indonesia"/></div>
    <div class="fg"><label><span data-id="Catatan Tambahan" data-en="Additional Notes">Catatan Tambahan</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <textarea rows="2" data-placeholder-id="Ketentuan khusus atau persyaratan spesifik lainnya..." data-placeholder-en="Special terms or other specific requirements..." placeholder="Ketentuan khusus atau persyaratan spesifik lainnya..."></textarea></div>`,

  sales: () => `
    <div class="fsec-lbl" data-id="Identitas Para Pihak" data-en="Party Identity">Identitas Para Pihak</div>
    <div class="fg"><label><span data-id="Pihak Pertama (Pembeli)" data-en="First Party (Buyer)">Pihak Pertama (Pembeli)</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. Pembeli: PT PLN (Persero)" data-placeholder-en="e.g., Buyer: PT PLN (Persero)" placeholder="mis. Pembeli: PT PLN (Persero)"/></div>
    <div class="fg"><label><span data-id="Pihak Kedua (Penjual)" data-en="Second Party (Seller)">Pihak Kedua (Penjual)</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. Penjual: PT Supplier Nasional" data-placeholder-en="e.g., Seller: PT National Supplier" placeholder="mis. Penjual: PT Supplier Nasional"/></div>
    <div class="fsec-lbl" data-id="Durasi Kontrak" data-en="Contract Duration">Durasi Kontrak</div>
    <div class="fg"><label><span data-id="Tanggal Efektif" data-en="Effective Date">Tanggal Efektif</span> <span class="req">*</span></label>
      <input type="date" value="2026-02-27"/></div>
    <div class="fg-row">
      <div class="fg"><label><span data-id="Jumlah Durasi" data-en="Duration Count">Jumlah Durasi</span> <span class="req">*</span></label>
        <input type="number" data-placeholder-id="mis. 12" data-placeholder-en="e.g., 12" placeholder="mis. 12" min="1"/></div>
      <div class="fg"><label><span data-id="Satuan Durasi" data-en="Duration Unit">Satuan Durasi</span> <span class="req">*</span></label>
        <select>
          <option value="" data-id="Pilih satuan" data-en="Select unit">Pilih satuan</option>
          <option data-id="Hari" data-en="Days">Hari</option>
          <option data-id="Minggu" data-en="Weeks">Minggu</option>
          <option selected data-id="Bulan" data-en="Months">Bulan</option>
          <option data-id="Tahun" data-en="Years">Tahun</option>
        </select></div>
    </div>
    <div class="fsec-lbl" data-id="Konten Kontrak" data-en="Contract Content">Konten Kontrak</div>
    <div class="fg"><label><span data-id="Tujuan Kontrak" data-en="Contract Purpose">Tujuan Kontrak</span> <span class="req">*</span></label>
      <textarea data-placeholder-id="mis. Mendefinisikan syarat dan ketentuan penjualan barang/produk..." data-placeholder-en="e.g., Define the terms and conditions for sale of goods/products..." placeholder="mis. Mendefinisikan syarat dan ketentuan penjualan barang/produk..."></textarea></div>
    <div class="fg"><label><span data-id="Lingkup Pekerjaan" data-en="Scope of Work">Lingkup Pekerjaan</span> <span class="req">*</span></label>
      <textarea rows="3" data-placeholder-id="Deskripsi detail barang atau produk yang diperjualbelikan..." data-placeholder-en="Detailed description of goods or products being sold..." placeholder="Deskripsi detail barang atau produk yang diperjualbelikan..."></textarea></div>
    <div class="fg"><label><span data-id="Deliverables" data-en="Deliverables">Deliverables</span> <span class="req">*</span></label>
      <textarea rows="2" data-placeholder-id="Spesifikasi output atau hasil yang disepakati..." data-placeholder-en="Specification of agreed outputs or results..." placeholder="Spesifikasi output atau hasil yang disepakati..."></textarea></div>
    <div class="fsec-lbl" data-id="Ketentuan Bisnis" data-en="Business Terms">Ketentuan Bisnis</div>
    <div class="fg"><label><span data-id="Ketentuan Pembayaran" data-en="Payment Terms">Ketentuan Pembayaran</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <input type="text" data-placeholder-id="mis. Net 30 hari, 50% di muka" data-placeholder-en="e.g., Net 30 days, 50% upfront" placeholder="mis. Net 30 hari, 50% di muka"/></div>
    <div class="fg"><label><span data-id="Hukum yang Berlaku" data-en="Governing Law">Hukum yang Berlaku</span> <span class="req">*</span></label>
      <input type="text" value="Indonesia"/></div>
    <div class="fg"><label><span data-id="Catatan Tambahan" data-en="Additional Notes">Catatan Tambahan</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <textarea rows="2" data-placeholder-id="Ketentuan khusus atau persyaratan spesifik lainnya..." data-placeholder-en="Special terms or other specific requirements..." placeholder="Ketentuan khusus atau persyaratan spesifik lainnya..."></textarea></div>`,

  service: () => `
    <div class="fsec-lbl" data-id="Identitas Para Pihak" data-en="Party Identity">Identitas Para Pihak</div>
    <div class="fg"><label><span data-id="Pihak Pertama (Pemberi Kerja)" data-en="First Party (Employer)">Pihak Pertama (Pemberi Kerja)</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. Pemberi Kerja: PT PLN (Persero)" data-placeholder-en="e.g., Employer: PT PLN (Persero)" placeholder="mis. Pemberi Kerja: PT PLN (Persero)"/></div>
    <div class="fg"><label><span data-id="Pihak Kedua (Penyedia Jasa)" data-en="Second Party (Service Provider)">Pihak Kedua (Penyedia Jasa)</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. Penyedia: PT Jasa Konsultan Indonesia" data-placeholder-en="e.g., Provider: PT Indonesian Consulting Services" placeholder="mis. Penyedia: PT Jasa Konsultan Indonesia"/></div>
    <div class="fsec-lbl" data-id="Durasi Kontrak" data-en="Contract Duration">Durasi Kontrak</div>
    <div class="fg"><label><span data-id="Tanggal Efektif" data-en="Effective Date">Tanggal Efektif</span> <span class="req">*</span></label>
      <input type="date" value="2026-02-27"/></div>
    <div class="fg-row">
      <div class="fg"><label><span data-id="Jumlah Durasi" data-en="Duration Count">Jumlah Durasi</span> <span class="req">*</span></label>
        <input type="number" data-placeholder-id="mis. 6" data-placeholder-en="e.g., 6" placeholder="mis. 6" min="1"/></div>
      <div class="fg"><label><span data-id="Satuan Durasi" data-en="Duration Unit">Satuan Durasi</span> <span class="req">*</span></label>
        <select>
          <option value="" data-id="Pilih satuan" data-en="Select unit">Pilih satuan</option>
          <option data-id="Hari" data-en="Days">Hari</option>
          <option data-id="Minggu" data-en="Weeks">Minggu</option>
          <option selected data-id="Bulan" data-en="Months">Bulan</option>
          <option data-id="Tahun" data-en="Years">Tahun</option>
        </select></div>
    </div>
    <div class="fsec-lbl" data-id="Konten Layanan" data-en="Service Content">Konten Layanan</div>
    <div class="fg"><label><span data-id="Tujuan Kontrak" data-en="Contract Purpose">Tujuan Kontrak</span> <span class="req">*</span></label>
      <textarea data-placeholder-id="mis. Mendefinisikan ruang lingkup layanan konsultasi hukum korporat..." data-placeholder-en="e.g., Define the scope of corporate legal consulting services..." placeholder="mis. Mendefinisikan ruang lingkup layanan konsultasi hukum korporat..."></textarea></div>
    <div class="fg"><label><span data-id="Lingkup Pekerjaan" data-en="Scope of Work">Lingkup Pekerjaan</span> <span class="req">*</span></label>
      <textarea rows="3" data-placeholder-id="Deskripsi detail layanan yang akan diberikan..." data-placeholder-en="Detailed description of services to be provided..." placeholder="Deskripsi detail layanan yang akan diberikan..."></textarea></div>
    <div class="fg"><label><span data-id="Deliverables" data-en="Deliverables">Deliverables</span> <span class="req">*</span></label>
      <textarea rows="2" data-placeholder-id="Output spesifik dari layanan yang disepakati..." data-placeholder-en="Specific outputs from the agreed services..." placeholder="Output spesifik dari layanan yang disepakati..."></textarea></div>
    <div class="fsec-lbl" data-id="Ketentuan Bisnis" data-en="Business Terms">Ketentuan Bisnis</div>
    <div class="fg"><label><span data-id="Ketentuan Pembayaran" data-en="Payment Terms">Ketentuan Pembayaran</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <input type="text" data-placeholder-id="mis. Net 30 hari, 50% di muka" data-placeholder-en="e.g., Net 30 days, 50% upfront" placeholder="mis. Net 30 hari, 50% di muka"/></div>
    <div class="fg"><label><span data-id="Hukum yang Berlaku" data-en="Governing Law">Hukum yang Berlaku</span> <span class="req">*</span></label>
      <input type="text" value="Indonesia"/></div>
    <div class="fg"><label><span data-id="Catatan Tambahan" data-en="Additional Notes">Catatan Tambahan</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <textarea rows="2" data-placeholder-id="Ketentuan khusus atau persyaratan spesifik lainnya..." data-placeholder-en="Special terms or other specific requirements..." placeholder="Ketentuan khusus atau persyaratan spesifik lainnya..."></textarea></div>`,

  generic: () => `
    <div class="fsec-lbl" data-id="Jenis Dokumen Spesifik" data-en="Specific Document Type">Jenis Dokumen Spesifik</div>
    <div class="fg"><label><span data-id="Spesifikasi Jenis Dokumen" data-en="Specify Document Type">Spesifikasi Jenis Dokumen</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. Independent Contractor Agreement, MOU, Letter of Intent..." data-placeholder-en="e.g., Independent Contractor Agreement, MOU, Letter of Intent..." placeholder="mis. Independent Contractor Agreement, MOU, Letter of Intent..."/></div>
    <div class="fsec-lbl" data-id="Identitas Para Pihak" data-en="Party Identity">Identitas Para Pihak</div>
    <div class="fg"><label><span data-id="Pihak Pertama" data-en="First Party">Pihak Pertama</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. PT PLN (Persero)" data-placeholder-en="e.g., PT PLN (Persero)" placeholder="mis. PT PLN (Persero)"/></div>
    <div class="fg"><label><span data-id="Pihak Kedua" data-en="Second Party">Pihak Kedua</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <input type="text" data-placeholder-id="mis. PT Mitra Jasa Indonesia" data-placeholder-en="e.g., PT Mitra Jasa Indonesia" placeholder="mis. PT Mitra Jasa Indonesia"/></div>
    <div class="fsec-lbl" data-id="Durasi &amp; Tanggal" data-en="Duration &amp; Date">Durasi &amp; Tanggal</div>
    <div class="fg"><label><span data-id="Tanggal Efektif" data-en="Effective Date">Tanggal Efektif</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <input type="date"/></div>
    <div class="fg-row">
      <div class="fg"><label><span data-id="Jumlah Durasi" data-en="Duration Count">Jumlah Durasi</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
        <input type="number" data-placeholder-id="mis. 1" data-placeholder-en="e.g., 1" placeholder="mis. 1" min="1"/></div>
      <div class="fg"><label><span data-id="Satuan Durasi" data-en="Duration Unit">Satuan Durasi</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
        <select>
          <option value="" data-id="Pilih satuan" data-en="Select unit">Pilih satuan</option>
          <option data-id="Hari" data-en="Days">Hari</option>
          <option data-id="Minggu" data-en="Weeks">Minggu</option>
          <option data-id="Bulan" data-en="Months">Bulan</option>
          <option data-id="Tahun" data-en="Years">Tahun</option>
        </select></div>
    </div>
    <div class="fsec-lbl" data-id="Konten Dokumen" data-en="Document Content">Konten Dokumen</div>
    <div class="fg"><label><span data-id="Tujuan Dokumen" data-en="Document Purpose">Tujuan Dokumen</span> <span class="req">*</span></label>
      <textarea data-placeholder-id="mis. Mendefinisikan syarat dan ketentuan layanan pengembangan perangkat lunak..." data-placeholder-en="e.g., Define terms and conditions for software development services..." placeholder="mis. Mendefinisikan syarat dan ketentuan layanan pengembangan perangkat lunak..."></textarea></div>
    <div class="fg"><label><span data-id="Lingkup Kerja" data-en="Scope of Work">Lingkup Kerja</span> <span class="req">*</span></label>
      <textarea rows="3" data-placeholder-id="Deskripsi detail pekerjaan atau layanan yang disepakati..." data-placeholder-en="Detailed description of agreed work or services..." placeholder="Deskripsi detail pekerjaan atau layanan yang disepakati..."></textarea></div>
    <div class="fg"><label><span data-id="Deliverables" data-en="Deliverables">Deliverables</span> <span class="req">*</span></label>
      <textarea rows="2" data-placeholder-id="Output atau hasil spesifik yang diharapkan..." data-placeholder-en="Specific expected outputs or results..." placeholder="Output atau hasil spesifik yang diharapkan..."></textarea></div>
    <div class="fsec-lbl" data-id="Ketentuan Bisnis" data-en="Business Terms">Ketentuan Bisnis</div>
    <div class="fg"><label><span data-id="Ketentuan Pembayaran" data-en="Payment Terms">Ketentuan Pembayaran</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <input type="text" data-placeholder-id="mis. Net 30 hari, 50% di muka" data-placeholder-en="e.g., Net 30 days, 50% upfront" placeholder="mis. Net 30 hari, 50% di muka"/></div>
    <div class="fg"><label><span data-id="Hukum yang Berlaku" data-en="Governing Law">Hukum yang Berlaku</span> <span class="req">*</span></label>
      <input type="text" value="Indonesia"/></div>
    <div class="fg"><label><span data-id="Catatan Tambahan" data-en="Additional Notes">Catatan Tambahan</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
      <textarea rows="2" data-placeholder-id="Ketentuan khusus atau persyaratan spesifik lainnya..." data-placeholder-en="Special terms or other specific requirements..." placeholder="Ketentuan khusus atau persyaratan spesifik lainnya..."></textarea></div>`,
};

/* ── Render ──────────────────────────────────────────────────────── */
export function render(container) {
  container.innerHTML = `
  <div class="main-scroll drafting-page">
    <div class="ph">
      <div>
        <div class="ph-title" data-id="Buat Dokumen &lt;em&gt;Hukum&lt;/em&gt;" data-en="Create &lt;em&gt;Legal&lt;/em&gt; Document">Buat Dokumen <em>Hukum</em></div>
        <div class="ph-sub" data-id="Generate draft legal berbasis AI dengan referensi regulasi terverifikasi" data-en="AI-powered legal draft generation with verified regulatory references">Generate draft legal berbasis AI dengan referensi regulasi terverifikasi</div>
      </div>
      <div class="ph-right">
        <div id="langToggle" style="display:inline-flex;background:rgba(25,103,210,.08);border:1px solid rgba(25,103,210,.18);border-radius:999px;padding:2px;gap:1px;flex-shrink:0"><div id="langID" style="padding:4px 12px;border-radius:999px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:600;cursor:pointer;background:linear-gradient(135deg,#1967D2,#1E7CE8);color:#fff;box-shadow:0 2px 6px rgba(25,103,210,.22);transition:all .15s" onclick="if(window.setLang) window.setLang('id')">🇮🇩 ID</div><div id="langEN" style="padding:4px 12px;border-radius:999px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:600;cursor:pointer;color:#8BA3BE;transition:all .15s" onclick="if(window.setLang) window.setLang('en')">🇺🇸 EN</div></div>
        <span class="badge b-am" data-id="Draft — Wajib Review Hukum" data-en="Draft — Legal Review Required">Draft — Wajib Review Hukum</span>
        <button class="btn btn-outline" id="btnInvite" style="font-size:12px;padding:5px 13px;gap:5px">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" width="12" height="12"><circle cx="6" cy="5" r="2.5"/><path d="M1 13c0-3 2-4.5 5-4.5s5 1.5 5 4.5"/><path d="M12 7v4M14 9h-4"/></svg>
          <span data-id="Undang" data-en="Invite">Undang</span>
        </button>
        <button class="btn btn-outline" id="btnResetOutput" data-id="↺ Reset" data-en="↺ Reset">↺ Reset</button>
      </div>
    </div>

    <div class="split-wrap">
      <!-- FORM PANEL -->
      <div class="form-panel">
        <div class="panel-hd">
          <div class="panel-hd-title" id="panelTitle">Parameter Dokumen</div>
          <div class="panel-hd-sub" id="panelSub">Isi semua kolom wajib untuk generate draft</div>
        </div>
        <div class="form-scroll">

          <div class="fsec-lbl" style="margin-top:0;padding-top:0;border-top:none" data-id="Jenis Dokumen" data-en="Document Type">Jenis Dokumen</div>
          <div class="fg" style="margin-bottom:4px">
            <select id="docTypeSelect">
              <option value="partnership" data-id="Perjanjian Kemitraan" data-en="Partnership Agreement">Perjanjian Kemitraan</option>
              <option value="nda" data-id="Perjanjian Kerahasiaan (NDA)" data-en="Non-Disclosure Agreement (NDA)">Perjanjian Kerahasiaan (NDA)</option>
              <option value="sales" data-id="Kontrak Penjualan" data-en="Sales Contract">Kontrak Penjualan</option>
              <option value="service" data-id="Kontrak Layanan" data-en="Service Contract">Kontrak Layanan</option>
              <option value="generic" data-id="Dokumen Umum" data-en="Generic Document">Dokumen Umum</option>
            </select>
          </div>

          <div id="docTypeFields"></div>

          <div class="fsec-lbl" data-id="Format Output" data-en="Output Format">Format Output</div>
          <div class="fg">
            <label data-id="Bahasa Dokumen" data-en="Document Language">Bahasa Dokumen</label>
            <div class="lang-row">
              <div class="lang-opt active" data-id="Bilingual" data-en="Bilingual">Bilingual</div>
              <div class="lang-opt" data-id="Indonesia" data-en="Indonesian">Indonesia</div>
            </div>
          </div>
          <div class="fg">
            <label><span data-id="Dokumen Referensi" data-en="Reference Document">Dokumen Referensi</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
            <div class="upload-zone" id="uploadZone">
              <div class="upload-ico">☁</div>
              <div class="upload-txt" data-id="Seret file atau <span class=&quot;upload-link&quot;>pilih dari komputer</span>" data-en="Drag file or <span class=&quot;upload-link&quot;>browse computer</span>">Seret file atau <span class="upload-link">pilih dari komputer</span></div>
              <div class="upload-spec" data-id="TXT, DOCX, PDF · Maks. 50MB" data-en="TXT, DOCX, PDF · Max. 50MB">TXT, DOCX, PDF · Maks. 50MB</div>
            </div>
          </div>
          <div class="fg">
            <label><span data-id="Template Dokumen" data-en="Document Template">Template Dokumen</span> <span class="opt-lbl" data-id="(Opsional)" data-en="(Optional)">(Opsional)</span></label>
            <div class="upload-zone" id="uploadZoneTemplate">
              <div class="upload-ico">☁</div>
              <div class="upload-txt" data-id="Seret file atau <span class=&quot;upload-link&quot;>pilih dari komputer</span>" data-en="Drag file or <span class=&quot;upload-link&quot;>browse computer</span>">Seret file atau <span class="upload-link">pilih dari komputer</span></div>
              <div class="upload-spec" data-id="TXT, DOCX, PDF · Maks. 50MB" data-en="TXT, DOCX, PDF · Max. 50MB">TXT, DOCX, PDF · Maks. 50MB</div>
            </div>
          </div>

        </div>
        <div class="form-footer-p">
          <button class="btn btn-bl" id="btnShowOutput" style="width:100%;justify-content:center;padding:10px 20px;font-size:13px">
            <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13"><path d="M8 1.5l1.2 3.7L13 6.5 9.2 7.7 8 11.5 6.8 7.7 3 6.5l3.8-1.3L8 1.5z"/></svg>
            <span id="btnGenerateLabel" data-id="Buat Draft Sekarang" data-en="Generate Draft Now">Buat Draft Sekarang</span>
          </button>
        </div>
      </div>

      <!-- OUTPUT PANEL -->
      <div class="output-panel">
        <div class="output-hd">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="output-hd-title" data-id="Dokumen yang Dibuat" data-en="Generated Document">Dokumen yang Dibuat</div>
            <div class="collab-presence" id="collabPresence" title="3 anggota aktif">
              <div class="collab-av" style="--av:#1967D2" title="Anda">AS</div>
              <div class="collab-av" style="--av:#0D7A4E" title="Ratih Handayani">RH</div>
              <div class="collab-av collab-av-typing" style="--av:#C97000" title="Budi Santoso — mengetik...">BS</div>
            </div>
          </div>
          <div style="display:flex;gap:7px;align-items:center">
            <button class="btn btn-outline" id="btnCollab" style="font-size:12px;padding:5px 12px;gap:5px">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" width="12" height="12"><circle cx="5.5" cy="5" r="2"/><path d="M1 13c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4"/><circle cx="11.5" cy="5" r="2"/><path d="M10 13c.4-1.2 1.5-2 3-2"/></svg>
              <span data-id="Kolaborasi" data-en="Collaborate">Kolaborasi</span> <span class="collab-badge-pill">3</span>
            </button>
            <button class="btn btn-outline" style="font-size:12px;padding:5px 12px" data-id="Muat Draft" data-en="Load Draft">Muat Draft</button>
            <button class="btn btn-outline" style="font-size:12px;padding:5px 12px" data-id="Simpan Draft" data-en="Save Draft">Simpan Draft</button>
          </div>
        </div>

        <div class="empty-state" id="emptyState">
          <div class="empty-ico">📄</div>
          <div class="empty-title" data-id="Draft akan muncul di sini" data-en="Draft will appear here">Draft akan muncul di sini</div>
          <div class="empty-sub" data-id='Isi parameter di sebelah kiri lalu klik&lt;br/&gt;"Buat Draft Sekarang" untuk memulai.' data-en='Fill in the parameters on the left and click&lt;br/&gt;"Generate Draft Now" to begin.'>Isi parameter di sebelah kiri lalu klik<br/>"Buat Draft Sekarang" untuk memulai.</div>
        </div>

        <div class="doc-canvas" id="docCanvas" style="display:none">
          <div class="doc-title-block">
            <div class="doc-title-main" id="docTitleMain">Perjanjian Kemitraan</div>
            <div class="doc-title-num">Nomor: PKS/PLN/HKM/2026/012</div>
            <div class="doc-title-date" data-id="Dibuat di Jakarta, 27 Februari 2026" data-en="Prepared in Jakarta, 27 February 2026">Dibuat di Jakarta, 27 Februari 2026</div>
          </div>
          <div class="doc-sec-hd">I. <span data-id="Para Pihak" data-en="The Parties">Para Pihak</span> <span class="doc-comment-chip" data-section="Para Pihak">💬 1</span></div>
          <div class="ai-block"><span class="ai-micro">✦ AI</span>
            <div class="ai-text">Perjanjian ini dibuat antara <strong>PT PLN (Persero)</strong>, suatu BUMN yang didirikan berdasarkan hukum Indonesia, berkedudukan di Jakarta Selatan ("Pihak Pertama")<span class="cite-sup">[¹]</span>, dan <strong>PT Mitra Teknologi Indonesia</strong>, suatu perseroan terbatas, berkedudukan di Bandung ("Pihak Kedua")<span class="cite-sup">[²]</span>. Secara bersama-sama disebut sebagai "Para Pihak".</div>
          </div>
          <div class="doc-sec-hd">II. <span data-id="Ruang Lingkup" data-en="Scope">Ruang Lingkup</span></div>
          <div class="ai-block"><span class="ai-micro">✦ AI</span>
            <div class="ai-text">Berdasarkan Perjanjian ini, Pihak Kedua berkewajiban menyediakan layanan pengadaan dan instalasi turbin gas sesuai spesifikasi teknis dalam Lampiran A<span class="cite-sup">[³]</span>. Pelaksanaan wajib memperhatikan ketentuan UU No. 30 Tahun 2009 tentang Ketenagalistrikan<span class="cite-sup">[⁴]</span> dan peraturan pemerintah yang berlaku.</div>
          </div>
          <div class="doc-sec-hd">III. <span data-id="Ketentuan Pembayaran" data-en="Payment Terms">Ketentuan Pembayaran</span> <span class="doc-comment-chip" data-section="Ketentuan Pembayaran">💬 1</span></div>
          <div class="ai-block"><span class="ai-micro">✦ AI</span>
            <div class="ai-text">Pembayaran dilakukan dalam 3 termin: (i) <strong>30%</strong> setelah penandatanganan dan penyerahan jaminan<span class="cite-sup">[⁵]</span>; (ii) <strong>40%</strong> setelah serah terima parsial pertama; dan (iii) <strong>30%</strong> setelah serah terima akhir dan penerbitan Berita Acara Penerimaan.</div>
          </div>
          <div class="risk-block">
            <div style="font-size:15px;flex-shrink:0">⚠️</div>
            <div><div class="risk-title" data-id="Risiko Terdeteksi — Pasal IV: Perpanjangan Otomatis" data-en="Risk Detected — Article IV: Automatic Renewal">Risiko Terdeteksi — Pasal IV: Perpanjangan Otomatis</div><div class="risk-body" data-id="Klausul perpanjangan tidak menetapkan mekanisme peringatan bagi pihak yang lalai memberi notifikasi. Disarankan menambahkan ketentuan denda sesuai PLN-STD-2025 Ps.7.3." data-en="The renewal clause does not establish a warning mechanism for the party that fails to provide notification. Recommended to add penalty provisions per PLN-STD-2025 Art.7.3.">Klausul perpanjangan tidak menetapkan mekanisme peringatan bagi pihak yang lalai memberi notifikasi. Disarankan menambahkan ketentuan denda sesuai PLN-STD-2025 Ps.7.3.</div></div>
          </div>
          <div class="cite-row">
            <span class="cite-lbl" data-id="Sumber:" data-en="Sources:">Sumber:</span>
            <span class="cite-pill">[¹] PLN-Standard-PKS-2025</span>
            <span class="cite-pill">[²] UU No.40/2007</span>
            <span class="cite-pill">[³] PLN-TechSpec-Turbin</span>
            <span class="cite-pill">[⁴] UU No.30/2009</span>
            <span class="cite-pill">[⁵] PLN-Finance-SOP</span>
          </div>
          <div class="conf-row" style="margin-top:10px">
            <span class="conf-lbl" data-id="Kepercayaan AI:" data-en="AI Confidence:">Kepercayaan AI:</span>
            <div class="conf-track"><div class="conf-fill" style="width:89%"></div></div>
            <span class="conf-val" data-id="89% — Tinggi" data-en="89% — High">89% — Tinggi</span>
          </div>
          <div class="disc-block" style="margin-top:12px">
            <span style="font-size:13px;flex-shrink:0">ⓘ</span>
            <div class="disc-text" data-id="Draft ini dihasilkan oleh AI. Wajib ditinjau oleh pengacara berwenang sebelum digunakan sebagai dokumen hukum resmi." data-en="This draft was generated by AI. Must be reviewed by a qualified attorney before use as an official legal document.">Draft ini dihasilkan oleh AI. Wajib ditinjau oleh pengacara berwenang sebelum digunakan sebagai dokumen hukum resmi.</div>
          </div>
        </div>

        <div class="output-footer">
          <div class="edit-lbl" data-id="Instruksi Edit:" data-en="Edit Instructions:">Instruksi Edit:</div>
          <textarea class="edit-ta"
            data-placeholder-id="Contoh: &quot;Ubah klausul pembayaran menjadi net 60 hari&quot; atau &quot;Tambahkan klausul force majeure&quot;"
            data-placeholder-en="Example: &quot;Change payment clause to net 60 days&quot; or &quot;Add a force majeure clause&quot;"
            placeholder='Contoh: "Ubah klausul pembayaran menjadi net 60 hari" atau "Tambahkan klausul force majeure"'></textarea>
          <div class="fa-row">
            <button class="btn btn-bl" style="flex:1;justify-content:center;font-size:12.5px" data-id="✦ Terapkan Edit" data-en="✦ Apply Edit">✦ Terapkan Edit</button>
            <button class="btn btn-gr" style="flex:1;justify-content:center;font-size:12.5px" data-id="⬇ Export ke Word" data-en="⬇ Export to Word">⬇ Export ke Word</button>
          </div>
        </div>
      </div>

      <!-- COLLAB PANEL -->
      <div class="collab-panel" id="collabPanel">
        <div class="collab-hd">
          <div>
            <div class="collab-hd-title" data-id="Kolaborasi" data-en="Collaboration">Kolaborasi</div>
            <div class="collab-hd-sub" id="collabOnlineCount" data-id="3 anggota aktif sekarang" data-en="3 members active now">3 anggota aktif sekarang</div>
          </div>
          <button class="collab-close" id="btnCollabClose" title="Tutup panel">✕</button>
        </div>
        <div class="collab-body">
          <div class="csec-lbl" data-id="Aktif Sekarang" data-en="Active Now">Aktif Sekarang</div>
          <div class="cuser-row">
            <div class="cav" style="--av:#1967D2">AS</div>
            <div class="cuser-info">
              <div class="cuser-name"><span data-id="Anda" data-en="You">Anda</span> <span class="cuser-role" data-id="Admin" data-en="Admin">Admin</span></div>
              <div class="cuser-status"><span class="cstatus-dot" style="background:#0D7A4E"></span><span data-id="Online" data-en="Online">Online</span></div>
            </div>
          </div>
          <div class="cuser-row">
            <div class="cav" style="--av:#0D7A4E">RH</div>
            <div class="cuser-info">
              <div class="cuser-name">Ratih Handayani</div>
              <div class="cuser-status"><span class="cstatus-dot" style="background:#0D7A4E"></span><span data-id="Online · Membaca Pasal I" data-en="Online · Reading Article I">Online · Membaca Pasal I</span></div>
            </div>
          </div>
          <div class="cuser-row">
            <div class="cav cav-typing-av" style="--av:#C97000">BS</div>
            <div class="cuser-info">
              <div class="cuser-name">Budi Santoso</div>
              <div class="cuser-status cuser-typing"><span class="typing-dots"><span></span><span></span><span></span></span><span data-id="mengetik..." data-en="typing...">mengetik...</span></div>
            </div>
          </div>
          <div class="csec-lbl" style="margin-top:16px"><span data-id="Komentar" data-en="Comments">Komentar</span> <span class="csec-count" id="commentCount">2</span></div>
          <div class="ccomment" id="comment1">
            <div class="cc-head">
              <div class="cav cav-sm" style="--av:#0D7A4E">RH</div>
              <div>
                <div class="cc-author">Ratih Handayani</div>
                <div class="cc-meta" data-id="Pasal I · 14 menit lalu" data-en="Article I · 14 minutes ago">Pasal I · 14 menit lalu</div>
              </div>
            </div>
            <div class="cc-body" data-id="Mohon dicek nama lengkap pihak kedua — perlu disesuaikan dengan akta terbaru PT Mitra Teknologi Indonesia." data-en="Please verify the full name of the second party — needs to be aligned with the latest deed of PT Mitra Teknologi Indonesia.">Mohon dicek nama lengkap pihak kedua — perlu disesuaikan dengan akta terbaru PT Mitra Teknologi Indonesia.</div>
            <div class="cc-actions">
              <button class="cc-btn cc-reply-btn" data-id="↩ Balas" data-en="↩ Reply">↩ Balas</button>
              <button class="cc-btn cc-resolve-btn" data-cid="comment1" data-id="✓ Selesai" data-en="✓ Done">✓ Selesai</button>
            </div>
          </div>
          <div class="ccomment" id="comment2">
            <div class="cc-head">
              <div class="cav cav-sm" style="--av:#C97000">BS</div>
              <div>
                <div class="cc-author">Budi Santoso</div>
                <div class="cc-meta" data-id="Pasal III · 5 menit lalu" data-en="Article III · 5 minutes ago">Pasal III · 5 menit lalu</div>
              </div>
            </div>
            <div class="cc-body" data-id="Ketentuan pembayaran 3 termin sudah sesuai SOP PLN-Finance. Nilai denda perlu di-cross check dengan Lampiran C." data-en="3-installment payment terms are in line with PLN-Finance SOP. Penalty amount needs cross-checking with Appendix C.">Ketentuan pembayaran 3 termin sudah sesuai SOP PLN-Finance. Nilai denda perlu di-cross check dengan Lampiran C.</div>
            <div class="cc-actions">
              <button class="cc-btn cc-reply-btn" data-id="↩ Balas" data-en="↩ Reply">↩ Balas</button>
              <button class="cc-btn cc-resolve-btn" data-cid="comment2" data-id="✓ Selesai" data-en="✓ Done">✓ Selesai</button>
            </div>
          </div>
          <div id="extraComments"></div>
        </div>
        <div class="collab-input-wrap">
          <textarea class="collab-ta" id="collabCommentInput"
            data-placeholder-id="Tambahkan komentar pada dokumen..."
            data-placeholder-en="Add a comment to the document..."
            placeholder="Tambahkan komentar pada dokumen..."></textarea>
          <button class="btn btn-bl" id="btnSendComment" style="width:100%;justify-content:center;font-size:12px;padding:7px 14px;margin-top:6px" data-id="+ Kirim Komentar" data-en="+ Send Comment">+ Kirim Komentar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- FIXED CHAT BAR -->
  <div class="chat-bar">
    <div class="chat-frame">
      <div class="chat-orb"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5l1.2 3.7L13 6.5 9.2 7.7 8 11.5 6.8 7.7 3 6.5l3.8-1.3L8 1.5z"/></svg></div>
      <input class="chat-input" type="text"
        data-placeholder-id="Tanya Lexia — mis. 'Tambahkan klausul force majeure standar PLN'…"
        data-placeholder-en="Ask Lexia — e.g. 'Add a standard PLN force majeure clause'…"
        placeholder="Tanya Lexia — mis. 'Tambahkan klausul force majeure standar PLN'…"/>
      <div class="chip-row">
        <span class="chip" data-id="✦ Buat Opini" data-en="✦ Create Opinion">✦ Buat Opini</span>
        <span class="chip" data-id="🔍 Cari Preseden" data-en="🔍 Find Precedent">🔍 Cari Preseden</span>
      </div>
      <div class="chat-div"></div>
      <button class="attach-btn"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 7.5l-6 6a4 4 0 01-5.5-5.5l7-7a2.5 2.5 0 013.5 3.5l-7 7a1 1 0 01-1.4-1.4l6-6"/></svg></button>
      <button class="send-btn"><span data-id="Kirim" data-en="Send">Kirim</span> <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 8h12M9 4l4 4-4 4"/></svg></button>
    </div>
    <div class="chat-hint"><span class="kbd">⌘K</span> command palette &nbsp;·&nbsp; <span class="kbd">@</span> <span data-id="mention dokumen" data-en="mention document">mention dokumen</span> &nbsp;·&nbsp; Lexia AI v2.1</div>
  </div>
  `;
}

/* ── Interactions ────────────────────────────────────────────────── */
export function initInteractions(root) {

  // ── Document type switcher ───────────────────────────────────────
  const docTypeSelect  = root.querySelector('#docTypeSelect');
  const docTypeFields  = root.querySelector('#docTypeFields');
  const panelTitle     = root.querySelector('#panelTitle');
  const panelSub       = root.querySelector('#panelSub');
  const btnGenerateLbl = root.querySelector('#btnGenerateLabel');
  const docTitleMain   = root.querySelector('#docTitleMain');

  function renderFields(type) {
    const lang = localStorage.getItem('lexia-lang') || 'id';
    const cfg  = DOC_TYPE_CONFIG[type] || DOC_TYPE_CONFIG.partnership;
    // Set data attrs so setLang can translate them on language switch
    if (panelTitle) { panelTitle.setAttribute('data-id', cfg.id.title); panelTitle.setAttribute('data-en', cfg.en.title); panelTitle.textContent = cfg[lang].title; }
    if (panelSub)   { panelSub.setAttribute('data-id', cfg.id.sub);     panelSub.setAttribute('data-en', cfg.en.sub);     panelSub.textContent   = cfg[lang].sub; }
    if (btnGenerateLbl) { btnGenerateLbl.setAttribute('data-id', cfg.id.btn); btnGenerateLbl.setAttribute('data-en', cfg.en.btn); btnGenerateLbl.textContent = cfg[lang].btn; }
    if (docTitleMain)   { docTitleMain.setAttribute('data-id', cfg.id.title); docTitleMain.setAttribute('data-en', cfg.en.title); docTitleMain.textContent   = cfg[lang].title; }
    if (!docTypeFields) return;
    docTypeFields.innerHTML = DOC_TYPE_FIELDS[type] ? DOC_TYPE_FIELDS[type]() : '';
    // Apply current language to newly injected elements
    if (window.setLang) window.setLang(lang);
    // Animate in
    docTypeFields.style.opacity = '0';
    docTypeFields.style.transform = 'translateY(5px)';
    requestAnimationFrame(() => {
      docTypeFields.style.transition = 'opacity .18s ease, transform .18s ease';
      docTypeFields.style.opacity = '1';
      docTypeFields.style.transform = 'translateY(0)';
    });
  }

  if (docTypeSelect) {
    docTypeSelect.addEventListener('change', () => renderFields(docTypeSelect.value));
    renderFields(docTypeSelect.value);
  }

  // ── lang-opt toggle ──────────────────────────────────────────────
  root.querySelectorAll('.lang-opt').forEach(el => {
    el.addEventListener('click', () => {
      el.closest('.lang-row').querySelectorAll('.lang-opt').forEach(o => o.classList.remove('active'));
      el.classList.add('active');
    });
  });

  // ── Output panel toggle ──────────────────────────────────────────
  const btnShowOutput = root.querySelector('#btnShowOutput');
  const emptyState    = root.querySelector('#emptyState');
  const docCanvas     = root.querySelector('#docCanvas');

  if (btnShowOutput && emptyState && docCanvas) {
    btnShowOutput.addEventListener('click', () => {
      emptyState.style.display = 'none';
      docCanvas.style.display = 'block';
      docCanvas.style.opacity = '0';
      docCanvas.style.transform = 'translateY(10px)';
      requestAnimationFrame(() => {
        docCanvas.style.transition = 'opacity .4s ease, transform .4s ease';
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

  // ── Upload zones ─────────────────────────────────────────────────
  ['#uploadZone', '#uploadZoneTemplate'].forEach(sel => {
    const zone = root.querySelector(sel);
    if (!zone) return;
    zone.addEventListener('click', function() {
      this.innerHTML = '<div style="font-size:20px;color:var(--gr);margin-bottom:4px">✅</div><div style="font-size:12px;font-weight:600;color:var(--gr)">dokumen-referensi.pdf</div><div style="font-size:10.5px;color:var(--t3);margin-top:2px">2.4MB · PDF · Siap digunakan</div>';
      this.style.borderColor = 'var(--gr)';
      this.style.background = 'var(--gr-dim)';
    });
  });

  // ── Chat bar ─────────────────────────────────────────────────────
  const ci = root.querySelector('.chat-input');
  if (ci) ci.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) e.preventDefault(); });
  const sb = root.querySelector('.send-btn');
  if (sb) sb.addEventListener('click', () => {
    const inp = root.querySelector('.chat-input');
    if (inp && inp.value.trim()) { inp.value = ''; inp.focus(); }
  });

  // ── Collaboration panel ──────────────────────────────────────────
  const collabPanel    = root.querySelector('#collabPanel');
  const btnCollab      = root.querySelector('#btnCollab');
  const btnCollabClose = root.querySelector('#btnCollabClose');

  const openCollab  = () => { collabPanel && collabPanel.classList.add('open'); btnCollab && btnCollab.classList.add('active'); };
  const closeCollab = () => { collabPanel && collabPanel.classList.remove('open'); btnCollab && btnCollab.classList.remove('active'); };

  if (btnCollab) btnCollab.addEventListener('click', () => collabPanel && collabPanel.classList.contains('open') ? closeCollab() : openCollab());
  if (btnCollabClose) btnCollabClose.addEventListener('click', closeCollab);
  root.querySelectorAll('.doc-comment-chip').forEach(c => c.addEventListener('click', openCollab));

  // Invite button
  const btnInvite = root.querySelector('#btnInvite');
  if (btnInvite) {
    btnInvite.addEventListener('click', () => {
      const lang = localStorage.getItem('lexia-lang') || 'id';
      btnInvite.querySelector('[data-id]').textContent = lang === 'en' ? '✓ Link copied!' : '✓ Tautan disalin!';
      btnInvite.style.color = 'var(--gr)';
      btnInvite.style.borderColor = 'var(--gr-bd)';
      setTimeout(() => {
        if (window.setLang) window.setLang(localStorage.getItem('lexia-lang') || 'id');
        btnInvite.style.color = '';
        btnInvite.style.borderColor = '';
      }, 2000);
    });
  }

  // Resolve comment
  let commentCount = 2;
  root.querySelectorAll('.cc-resolve-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = root.querySelector('#' + btn.dataset.cid);
      if (!card) return;
      card.style.transition = 'opacity .3s ease, transform .3s ease, max-height .35s ease, margin .35s ease, padding .35s ease';
      card.style.opacity = '0'; card.style.transform = 'translateX(10px)';
      card.style.maxHeight = card.offsetHeight + 'px';
      requestAnimationFrame(() => { card.style.maxHeight = '0'; card.style.padding = '0'; card.style.marginBottom = '0'; card.style.border = 'none'; });
      setTimeout(() => card.remove(), 380);
      commentCount = Math.max(0, commentCount - 1);
      const countEl = root.querySelector('#commentCount');
      if (countEl) countEl.textContent = commentCount;
    });
  });

  // Send new comment
  const btnSendComment = root.querySelector('#btnSendComment');
  const collabInput    = root.querySelector('#collabCommentInput');
  const extraComments  = root.querySelector('#extraComments');
  const countEl        = root.querySelector('#commentCount');

  if (btnSendComment && collabInput && extraComments) {
    const addComment = () => {
      const text = collabInput.value.trim();
      if (!text) return;
      commentCount++;
      if (countEl) countEl.textContent = commentCount;
      const newId = 'comment' + Date.now();
      const lang  = localStorage.getItem('lexia-lang') || 'id';
      const div = document.createElement('div');
      div.className = 'ccomment'; div.id = newId;
      div.style.cssText = 'opacity:0;transform:translateY(6px)';
      div.innerHTML = `
        <div class="cc-head">
          <div class="cav cav-sm" style="--av:#1967D2">AS</div>
          <div><div class="cc-author" data-id="Anda" data-en="You">${lang === 'en' ? 'You' : 'Anda'}</div><div class="cc-meta" data-id="Dokumen · Baru saja" data-en="Document · Just now">${lang === 'en' ? 'Document · Just now' : 'Dokumen · Baru saja'}</div></div>
        </div>
        <div class="cc-body">${text.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
        <div class="cc-actions">
          <button class="cc-btn cc-reply-btn" data-id="↩ Balas" data-en="↩ Reply">${lang === 'en' ? '↩ Reply' : '↩ Balas'}</button>
          <button class="cc-btn cc-resolve-btn" data-cid="${newId}" data-id="✓ Selesai" data-en="✓ Done">${lang === 'en' ? '✓ Done' : '✓ Selesai'}</button>
        </div>`;
      extraComments.appendChild(div);
      requestAnimationFrame(() => { div.style.transition = 'opacity .3s ease, transform .3s ease'; div.style.opacity = '1'; div.style.transform = 'translateY(0)'; });
      div.querySelector('.cc-resolve-btn').addEventListener('click', () => {
        div.style.transition = 'opacity .3s ease, transform .3s ease';
        div.style.opacity = '0'; div.style.transform = 'translateX(10px)';
        setTimeout(() => div.remove(), 350);
        commentCount = Math.max(0, commentCount - 1);
        if (countEl) countEl.textContent = commentCount;
      });
      collabInput.value = ''; collabInput.focus();
      const body = root.querySelector('.collab-body');
      if (body) body.scrollTop = body.scrollHeight;
    };
    btnSendComment.addEventListener('click', addComment);
    collabInput.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); addComment(); } });
  }

  // set language
  if (typeof window.setLang === 'function') window.setLang(localStorage.getItem('lexia-lang') || 'id');
}
