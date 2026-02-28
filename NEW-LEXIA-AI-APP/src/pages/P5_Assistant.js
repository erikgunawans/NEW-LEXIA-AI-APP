export function render(container) {
  container.innerHTML = `
<div class="main-wrap">
  <div class="ph" style="padding:16px 26px;flex-shrink:0;border-bottom:1px solid var(--bd-n)">
    <div>
      <div class="ph-eyebrow" data-id="AI Tools · Asisten Legal" data-en="AI Tools · Legal Assistant">AI Tools · Asisten Legal</div>
      <div class="ph-title" style="font-size:22px">Asisten Legal <em>AI</em></div>
      <div class="ph-sub" data-id="Jawaban terverifikasi dari regulasi dan yurisprudensi Indonesia" data-en="Verified answers from Indonesian regulations and jurisprudence">Jawaban terverifikasi dari regulasi dan yurisprudensi Indonesia</div>
    </div>
    <div class="ph-right">
      <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" onclick="setLang('id')">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" onclick="setLang('en')">🇺🇸 EN</button>
        </div>
      <div class="ai-badge"><span class="ai-dot"></span><span data-id="Gemini 1.5 Pro" data-en="Gemini 1.5 Pro">Gemini 1.5 Pro</span></div>
      <button class="btn btn-outline" data-id="💬 Chat Baru" data-en="💬 New Chat">💬 Chat Baru</button>
    </div>
  </div>

  <div class="chat-layout" style="flex:1;">
    <!-- SOURCES PANEL -->
    <div class="chat-sources">
      <div class="cpanel-head"><div class="cpanel-title" data-id="Sumber Aktif" data-en="Active Sources">Sumber Aktif</div></div>
      <div class="cpanel-body">
        <div style="font-size:10px;color:var(--t4);margin-bottom:8px;font-family:'IBM Plex Mono',monospace" data-id="Pilih sumber referensi" data-en="Select reference sources">Pilih sumber referensi</div>
        <div class="src-tag on"><div class="src-dot" style="background:var(--gr)"></div><span class="src-label">JDIH Nasional</span></div>
        <div class="src-tag on"><div class="src-dot" style="background:var(--gr)"></div><span class="src-label">OJK Portal</span></div>
        <div class="src-tag on"><div class="src-dot" style="background:var(--gr)"></div><span class="src-label">Kemenkumham</span></div>
        <div class="src-tag on"><div class="src-dot" style="background:var(--bl)"></div><span class="src-label" data-id="Dok. Internal PLN" data-en="PLN Internal Docs">Dok. Internal PLN</span></div>
        <div class="src-tag"><div class="src-dot" style="background:var(--t5)"></div><span class="src-label">SIPP MA</span></div>
        <div class="src-tag"><div class="src-dot" style="background:var(--t5)"></div><span class="src-label">Hukumonline</span></div>
        
        <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--bd-n)">
          <div class="bt-row" style="margin:0">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" style="color:var(--t3);flex-shrink:0"><rect x="4" y="7" width="8" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2"/></svg>
            <span class="bt-lbl" style="font-size:11.5px" data-id="Mode Benteng" data-en="Fortress Mode">Mode Benteng</span>
            <div class="toggle"></div>
          </div>
        </div>
        <div style="margin-top:10px">
          <div style="font-size:10.5px;color:var(--t4);line-height:1.5" data-id="Mode Benteng: hanya gunakan dok. internal PLN yang terverifikasi." data-en="Fortress Mode: only use verified PLN internal documents.">Mode Benteng: hanya gunakan dok. internal PLN yang terverifikasi.</div>
        </div>
        
        <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--bd-n)">
          <div style="font-size:10px;color:var(--t4);font-family:'IBM Plex Mono',monospace;margin-bottom:6px" data-id="Riwayat Chat" data-en="Chat History">Riwayat Chat</div>
          <div class="tpl-item" style="padding:7px 9px;margin-bottom:3px;border-radius:var(--r-sm);cursor:pointer;border:1px solid transparent;transition:all .13s" onmouseover="this.style.background='var(--bl-dim)'" onmouseout="this.style.background=''">
            <div style="font-size:11.5px;font-weight:600;color:var(--t1)" data-id="Klausul OJK 15/2026" data-en="OJK Clause 15/2026">Klausul OJK 15/2026</div>
            <div style="font-size:10px;color:var(--t4)">1 jam lalu</div>
          </div>
          <div class="tpl-item" style="padding:7px 9px;margin-bottom:3px;border-radius:var(--r-sm);cursor:pointer;border:1px solid transparent;transition:all .13s" onmouseover="this.style.background='var(--bl-dim)'" onmouseout="this.style.background=''">
            <div style="font-size:11.5px;font-weight:600;color:var(--t1)" data-id="Analisis kontrak PKS" data-en="PKS contract analysis">Analisis kontrak PKS</div>
            <div style="font-size:10px;color:var(--t4)" data-id="Kemarin" data-en="Yesterday">Kemarin</div>
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN CHAT -->
    <div class="chat-main">
      <div class="chat-messages">
        <div class="msg">
          <div class="msg-av ai">L</div>
          <div>
            <div class="msg-bubble ai" data-id="Halo, Ahmad! Saya Lexia — asisten hukum AI Anda. Saya dapat membantu analisis regulasi, tinjauan kontrak, riset yurisprudensi, dan penyusunan opini hukum. Semua jawaban saya dilengkapi referensi yang dapat diverifikasi. Apa yang ingin Anda tanyakan hari ini?" data-en="Hello, Ahmad! I'm Lexia — your AI legal assistant. I can help with regulatory analysis, contract review, jurisprudence research, and legal opinion drafting. All my answers include verifiable references. What would you like to ask today?">Halo, Ahmad! Saya Lexia — asisten hukum AI Anda. Saya dapat membantu analisis regulasi, tinjauan kontrak, riset yurisprudensi, dan penyusunan opini hukum. Semua jawaban saya dilengkapi referensi yang dapat diverifikasi. Apa yang ingin Anda tanyakan hari ini?</div>
          </div>
        </div>
        
        <div class="msg user">
          <div class="msg-av user">AS</div>
          <div class="msg-bubble user" data-id="Apa dampak Peraturan OJK No. 15/2026 terhadap kontrak PKS PLN yang sedang berjalan?" data-en="What is the impact of OJK Regulation No. 15/2026 on PLN's currently active PKS contracts?">Apa dampak Peraturan OJK No. 15/2026 terhadap kontrak PKS PLN yang sedang berjalan?</div>
        </div>

        <div class="msg">
          <div class="msg-av ai">L</div>
          <div>
            <div class="msg-bubble ai">
              <strong data-id="Berdasarkan analisis saya terhadap POJK 15/2026:" data-en="Based on my analysis of POJK 15/2026:">Berdasarkan analisis saya terhadap POJK 15/2026:</strong>
              <br/><br/>
              <span data-id="Peraturan ini berlaku efektif 1 April 2026 dan berdampak pada 3 aspek utama kontrak PLN yang sedang berjalan:" data-en="This regulation takes effect April 1, 2026 and impacts 3 key aspects of PLN's active contracts:">Peraturan ini berlaku efektif 1 April 2026 dan berdampak pada 3 aspek utama kontrak PLN yang sedang berjalan:</span>
              <br/><br/>
              <strong>1.</strong> <span data-id="Klausul Pembayaran — wajib menyesuaikan tenor maksimum 60 hari dari sebelumnya 90 hari [Pasal 12 POJK 15/2026]" data-en="Payment Clause — must adjust maximum tenor to 60 days from the previous 90 days [Article 12 POJK 15/2026]">Klausul Pembayaran — wajib menyesuaikan tenor maksimum 60 hari dari sebelumnya 90 hari [Pasal 12 POJK 15/2026]</span><br/>
              <strong>2.</strong> <span data-id="Kewajiban Pelaporan — transaksi di atas Rp 5 Miliar wajib dilaporkan ke OJK dalam 14 hari kerja" data-en="Reporting Obligations — transactions above Rp 5 Billion must be reported to OJK within 14 working days">Kewajiban Pelaporan — transaksi di atas Rp 5 Miliar wajib dilaporkan ke OJK dalam 14 hari kerja</span><br/>
              <strong>3.</strong> <span data-id="Klausul Kerahasiaan — perlu diselaraskan dengan ketentuan baru tentang berbagi data di Pasal 22" data-en="Confidentiality Clause — needs alignment with new data sharing provisions in Article 22">Klausul Kerahasiaan — perlu diselaraskan dengan ketentuan baru tentang berbagi data di Pasal 22</span>
              <br/><br/>
              <span data-id="Rekomendasi: Lakukan addendum untuk 3 kontrak yang teridentifikasi terdampak sebelum 31 Maret 2026." data-en="Recommendation: Execute addenda for the 3 identified affected contracts before March 31, 2026.">Rekomendasi: Lakukan addendum untuk 3 kontrak yang teridentifikasi terdampak sebelum 31 Maret 2026.</span>
            </div>
            <div class="msg-cite" data-id="📎 3 sumber · POJK 15/2026 · Dok. Internal PLN · Hukumonline" data-en="📎 3 sources · POJK 15/2026 · PLN Internal Docs · Hukumonline">📎 3 sumber · POJK 15/2026 · Dok. Internal PLN · Hukumonline</div>
          </div>
        </div>

        <div class="msg">
          <div class="msg-av ai">L</div>
          <div><div class="typing"><span></span><span></span><span></span></div></div>
        </div>
      </div>

      <div class="chat-input-area">
        <div class="chat-inp">
          <input type="text" 
            data-placeholder-id="Tanya tentang regulasi, kontrak, atau minta draft opini hukum…" 
            data-placeholder-en="Ask about regulations, contracts, or request a legal opinion draft…"
            placeholder="Tanya tentang regulasi, kontrak, atau minta draft opini hukum…"/>
          <button class="send-btn" style="height:28px;padding:0 14px;font-size:12px">
            <span data-id="Kirim" data-en="Send">Kirim</span> 
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 8h12M9 4l4 4-4 4"/></svg>
          </button>
        </div>
        <div style="margin-top:7px;display:flex;gap:5px;flex-wrap:wrap">
          <span class="chip" data-id="📄 Analisis kontrak" data-en="📄 Analyze contract">📄 Analisis kontrak</span>
          <span class="chip" data-id="⚖️ Cek kepatuhan" data-en="⚖️ Check compliance">⚖️ Cek kepatuhan</span>
          <span class="chip" data-id="✍️ Draft opini" data-en="✍️ Draft opinion">✍️ Draft opini</span>
          <span class="chip" data-id="🔍 Cari preseden" data-en="🔍 Find precedent">🔍 Cari preseden</span>
        </div>
      </div>
    </div>

    <!-- CITATIONS PANEL -->
    <div class="chat-citations">
      <div class="cpanel-head"><div class="cpanel-title" data-id="Sitasi & Referensi" data-en="Citations & References">Sitasi &amp; Referensi</div></div>
      <div class="cpanel-body">
        <div style="font-size:10px;color:var(--t4);margin-bottom:8px;font-family:'IBM Plex Mono',monospace" data-id="Dari respons terakhir" data-en="From last response">Dari respons terakhir</div>
        
        <div class="cite-card">
          <div class="cite-title">POJK No. 15/2026</div>
          <div class="cite-src">ojk.go.id</div>
          <div class="cite-text" data-id="Pasal 12: Tenor pembayaran maksimum 60 hari untuk transaksi yang diatur OJK..." data-en="Article 12: Maximum payment tenor of 60 days for OJK-regulated transactions...">Pasal 12: Tenor pembayaran maksimum 60 hari untuk transaksi yang diatur OJK...</div>
        </div>
        
        <div class="cite-card">
          <div class="cite-title" data-id="Standar Kontrak PLN 2024" data-en="PLN Contract Standards 2024">Standar Kontrak PLN 2024</div>
          <div class="cite-src" data-id="Internal PLN" data-en="PLN Internal">Internal PLN</div>
          <div class="cite-text" data-id="Bagian 4.3: Klausul pembayaran baku PLN mensyaratkan tenor 30–90 hari tergantung jenis pengadaan..." data-en="Section 4.3: PLN standard payment clause requires 30–90 day tenor depending on procurement type...">Bagian 4.3: Klausul pembayaran baku PLN mensyaratkan tenor 30–90 hari tergantung jenis pengadaan...</div>
        </div>
        
        <div class="cite-card">
          <div class="cite-title" data-id="Analisis Hukumonline" data-en="Hukumonline Analysis">Analisis Hukumonline</div>
          <div class="cite-src">hukumonline.com</div>
          <div class="cite-text" data-id="Dampak POJK 15/2026 terhadap kontrak BUMN: aspek addendum yang perlu diperhatikan..." data-en="Impact of POJK 15/2026 on SOE contracts: addendum aspects to note...">Dampak POJK 15/2026 terhadap kontrak BUMN: aspek addendum yang perlu diperhatikan...</div>
        </div>

        <div style="margin-top:8px">
          <button class="btn btn-outline" style="width:100%;justify-content:center;font-size:12px" data-id="📋 Ekspor Sitasi" data-en="📋 Export Citations">📋 Ekspor Sitasi</button>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
}

export function initInteractions(root) {
  root.querySelectorAll('.bt-row').forEach(r => {
    r.addEventListener('click', () => {
      const toggle = r.querySelector('.toggle');
      if(toggle) toggle.classList.toggle('on')
    });
  });

  const ci=root.querySelector('.chat-inp input');
  if(ci){
    ci.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey)e.preventDefault();});
  }
  const sb=root.querySelector('.send-btn');
  if(sb){
    sb.addEventListener('click',function(){
      if(ci&&ci.value.trim()){ci.value='';ci.focus();}
    });
  }

  if (typeof window.setLang === 'function') {
    window.setLang(document.documentElement.lang || 'id');
  }
}
