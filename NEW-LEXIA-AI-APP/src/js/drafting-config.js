/* ── Document type configurations (bilingual) ────────────────────── */
export const DOC_TYPE_CONFIG = {
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
export const DOC_TYPE_FIELDS = {
  partnership: () => `
    <div class="fsec-lbl" data-id="Identitas Para Pihak" data-en="Party Identity">Identitas Para Pihak</div>
    <div class="fg"><label><span data-id="Pihak Pertama" data-en="First Party">Pihak Pertama</span> <span class="req">*</span></label>
      <input type="text" data-placeholder-id="mis. PT Nama Perusahaan" data-placeholder-en="e.g., PT Your Company" placeholder="mis. PT Nama Perusahaan"/></div>
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
      <input type="text" data-placeholder-id="mis. Pembeli: PT Nama Perusahaan" data-placeholder-en="e.g., Buyer: PT Your Company" placeholder="mis. Pembeli: PT Nama Perusahaan"/></div>
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
      <input type="text" data-placeholder-id="mis. Pemberi Kerja: PT Nama Perusahaan" data-placeholder-en="e.g., Employer: PT Your Company" placeholder="mis. Pemberi Kerja: PT Nama Perusahaan"/></div>
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
      <input type="text" data-placeholder-id="mis. PT Nama Perusahaan" data-placeholder-en="e.g., PT Your Company" placeholder="mis. PT Nama Perusahaan"/></div>
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
