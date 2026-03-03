export const chatBar = false;

export function render(container) {
  container.innerHTML = `
  <div class="ph ph-assistant">
    <div>
      <div class="ph-title ph-title-assistant" data-id="Asisten Legal <em>AI</em>" data-en="AI Legal <em>Assistant</em>">Asisten Legal <em>AI</em></div>
      <div class="ph-sub" data-id="Jawaban terverifikasi dari regulasi dan yurisprudensi Indonesia" data-en="Verified answers from Indonesian regulations and jurisprudence">Jawaban terverifikasi dari regulasi dan yurisprudensi Indonesia</div>
    </div>
    <div class="ph-right">
      <div class="lang-toggle">
          <button class="lang-btn active" id="btnID" data-lang="id">🇮🇩 ID</button>
          <button class="lang-btn" id="btnEN" data-lang="en">🇺🇸 EN</button>
        </div>
      <div class="ai-badge"><span class="ai-dot"></span><span data-id="Gemini 1.5 Pro" data-en="Gemini 1.5 Pro">Gemini 1.5 Pro</span></div>
      <button class="btn btn-outline" data-id="💬 Chat Baru" data-en="💬 New Chat" data-toast="Memulai percakapan baru…">💬 Chat Baru</button>
    </div>
  </div>

  <div class="chat-layout chat-layout-flex">
    <!-- SOURCES PANEL -->
    <div class="chat-sources">
      <button class="panel-toggle toggle-sources" id="toggleSources" title="Toggle Sources" aria-label="Collapse panel">‹</button>
      <div class="cpanel-head"><div class="cpanel-title" data-id="Sumber Aktif" data-en="Active Sources">Sumber Aktif</div></div>
      <div class="cpanel-body">
        <div class="src-hint" data-id="Pilih sumber referensi" data-en="Select reference sources">Pilih sumber referensi</div>
        <div class="src-tag on"><div class="src-dot src-dot-gr"></div><span class="src-label">JDIH Nasional</span></div>
        <div class="src-tag on"><div class="src-dot src-dot-gr"></div><span class="src-label">OJK Portal</span></div>
        <div class="src-tag on"><div class="src-dot src-dot-gr"></div><span class="src-label">Kemenkumham</span></div>
        <div class="src-tag on"><div class="src-dot src-dot-bl"></div><span class="src-label" data-id="Dok. Internal PLN" data-en="PLN Internal Docs">Dok. Internal PLN</span></div>
        <div class="src-tag"><div class="src-dot src-dot-muted"></div><span class="src-label">SIPP MA</span></div>
        <div class="src-tag"><div class="src-dot src-dot-muted"></div><span class="src-label">Hukumonline</span></div>
        
        <div class="src-divider">
          <div class="bt-row bt-row-flush">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" class="bt-icon-muted"><rect x="4" y="7" width="8" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2"/></svg>
            <span class="bt-lbl bt-lbl-md" data-id="Mode Benteng" data-en="Fortress Mode">Mode Benteng</span>
            <div class="toggle"></div>
          </div>
        </div>
        <div class="src-note-wrap">
          <div class="src-note" data-id="Mode Benteng: hanya gunakan dok. internal PLN yang terverifikasi." data-en="Fortress Mode: only use verified PLN internal documents.">Mode Benteng: hanya gunakan dok. internal PLN yang terverifikasi.</div>
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
            aria-label="Ask Lexia about legal topics"
            data-placeholder-id="Tanya tentang regulasi, kontrak, atau minta draft opini hukum…"
            data-placeholder-en="Ask about regulations, contracts, or request a legal opinion draft…"
            placeholder="Tanya tentang regulasi, kontrak, atau minta draft opini hukum…"/>
          <button class="send-btn send-btn-compact" aria-label="Send">
            <span data-id="Kirim" data-en="Send">Kirim</span> 
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 8h12M9 4l4 4-4 4"/></svg>
          </button>
        </div>
        <div class="chip-row-assistant">
          <span class="chip" role="button" tabindex="0" data-id="📄 Analisis kontrak" data-en="📄 Analyze contract" data-action="chip-insert" data-value="Analisis kontrak saya">📄 Analisis kontrak</span>
          <span class="chip" role="button" tabindex="0" data-id="⚖️ Cek kepatuhan" data-en="⚖️ Check compliance" data-action="chip-insert" data-value="Cek kepatuhan kontrak">⚖️ Cek kepatuhan</span>
          <span class="chip" role="button" tabindex="0" data-id="✍️ Draft opini" data-en="✍️ Draft opinion" data-action="chip-insert" data-value="Bantu draft opini hukum">✍️ Draft opini</span>
          <span class="chip" role="button" tabindex="0" data-id="🔍 Cari preseden" data-en="🔍 Find precedent" data-action="chip-insert" data-value="Cari preseden hukum">🔍 Cari preseden</span>
        </div>
      </div>
    </div>

    <!-- CITATIONS PANEL -->
    <div class="chat-citations">
      <button class="panel-toggle toggle-citations" id="toggleCitations" title="Toggle Citations" aria-label="Collapse panel">›</button>
      <div class="cpanel-head"><div class="cpanel-title" data-id="Sitasi & Referensi" data-en="Citations & References">Sitasi &amp; Referensi</div></div>
      <div class="cpanel-body">
        <div class="empty-state empty-state-cite">
          <div class="empty-ico empty-ico-cite">📎</div>
          <div class="empty-title empty-title-cite" data-id="Belum ada sitasi" data-en="No citations yet">Belum ada sitasi</div>
          <div class="empty-sub" data-id="Sitasi akan muncul setelah Anda mengajukan pertanyaan." data-en="Citations will appear after you ask a question.">Sitasi akan muncul setelah Anda mengajukan pertanyaan.</div>
        </div>
      </div>
    </div>
  </div>
  `;
}

export function initInteractions(root) {
  // Delegated handlers
  root.addEventListener('click', e => {
    const lang = e.target.closest('[data-lang]');
    if (lang) { if (window.setLang) window.setLang(lang.dataset.lang); return; }
    const toast = e.target.closest('[data-toast]');
    if (toast) { window.showToast(toast.dataset.toast); return; }
    const chip = e.target.closest('[data-action="chip-insert"]');
    if (chip) {
      const input = root.querySelector('.chat-inp input');
      if (input) { input.value = chip.dataset.value; input.focus(); }
      return;
    }
  });

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

  // Collapsible side panels
  const chatLayout = root.querySelector('.chat-layout');
  const btnSrc = root.querySelector('#toggleSources');
  const btnCite = root.querySelector('#toggleCitations');

  if (btnSrc && chatLayout) {
    btnSrc.addEventListener('click', function() {
      chatLayout.classList.toggle('sources-collapsed');
      this.textContent = chatLayout.classList.contains('sources-collapsed') ? '›' : '‹';
    });
  }
  if (btnCite && chatLayout) {
    btnCite.addEventListener('click', function() {
      chatLayout.classList.toggle('citations-collapsed');
      this.textContent = chatLayout.classList.contains('citations-collapsed') ? '‹' : '›';
    });
  }

  if (typeof window.setLang === 'function') {
    window.setLang(localStorage.getItem('lexia-lang') || 'id');
  }
}
