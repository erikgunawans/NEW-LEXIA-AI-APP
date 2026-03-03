export function render(container) {
  container.innerHTML = `
  <div class="main-scroll">
    <div class="ph">
      <div>
        <div class="ph-title" data-id="Riset &amp; <em>Temuan</em>" data-en="Research &amp; <em>Findings</em>">Riset &amp; <em>Temuan</em></div>
        <div class="ph-sub" data-id="Pencarian semantik di seluruh regulasi, putusan, dan dokumen internal PLN" data-en="Semantic search across regulations, rulings, and PLN internal documents">Pencarian semantik di seluruh regulasi, putusan, dan dokumen internal PLN</div>
      </div>
      <div class="ph-right">
        <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" onclick="if(window.setLang) window.setLang('id')">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" onclick="if(window.setLang) window.setLang('en')">🇺🇸 EN</button>
        </div>
        <button class="btn btn-outline" data-id="📋 Riwayat Riset" data-en="📋 Research History">📋 Riwayat Riset</button>
        <button class="btn btn-bl" data-id="✨ Riset Mendalam AI" data-en="✨ AI Deep Research">✨ Riset Mendalam AI</button>
      </div>
    </div>

    <div class="search-bar-big">
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" style="color:var(--bl);flex-shrink:0;margin-top:2px"><circle cx="6.5" cy="6.5" r="4.5"/><path d="M11.5 11.5l3 3"/></svg>
      <input type="text" value=""
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

    <div class="empty-state" style="padding:60px 20px">
      <div class="empty-ico">🔍</div>
      <div class="empty-title" data-id="Mulai riset hukum Anda" data-en="Start your legal research">Mulai riset hukum Anda</div>
      <div class="empty-sub" data-id="Ketik kata kunci, nomor regulasi, atau pertanyaan hukum di kolom pencarian di atas." data-en="Type a keyword, regulation number, or legal question in the search bar above.">Ketik kata kunci, nomor regulasi, atau pertanyaan hukum di kolom pencarian di atas.</div>
    </div>
  </div>
  `;
}

export function initInteractions(root) {
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
