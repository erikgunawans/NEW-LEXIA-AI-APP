export function render(container) {
  container.innerHTML = `
  <div class="ph" style="padding:16px 26px;flex-shrink:0;margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.60);background:var(--glass-bg-light);backdrop-filter:var(--glass-blur-sm) var(--glass-sat);-webkit-backdrop-filter:var(--glass-blur-sm) var(--glass-sat)">
    <div>
      <div class="ph-title" style="font-size:22px" data-id="Asisten Legal <em>AI</em>" data-en="AI Legal <em>Assistant</em>">Asisten Legal <em>AI</em></div>
      <div class="ph-sub" data-id="Jawaban terverifikasi dari regulasi dan yurisprudensi Indonesia" data-en="Verified answers from Indonesian regulations and jurisprudence">Jawaban terverifikasi dari regulasi dan yurisprudensi Indonesia</div>
    </div>
    <div class="ph-right">
      <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" onclick="if(window.setLang) window.setLang('id')">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" onclick="if(window.setLang) window.setLang('en')">🇺🇸 EN</button>
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
        <div class="empty-state" style="padding:24px 12px">
          <div class="empty-ico" style="font-size:22px">📎</div>
          <div class="empty-title" style="font-size:13px" data-id="Belum ada sitasi" data-en="No citations yet">Belum ada sitasi</div>
          <div class="empty-sub" data-id="Sitasi akan muncul setelah Anda mengajukan pertanyaan." data-en="Citations will appear after you ask a question.">Sitasi akan muncul setelah Anda mengajukan pertanyaan.</div>
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
