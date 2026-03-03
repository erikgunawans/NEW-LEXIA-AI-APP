export const chatBar = false;

export function render(container) {
  container.innerHTML = `
  <!-- Minimal Header -->
  <div class="p5-header">
    <div class="p5-header-left">
      <div class="p5-title" data-id="Asisten Legal" data-en="Legal Assistant">Asisten Legal</div>
    </div>
    <div class="p5-header-right">
      <div class="lang-toggle">
        <button class="lang-btn active" id="btnID" data-lang="id">🇮🇩 ID</button>
        <button class="lang-btn" id="btnEN" data-lang="en">🇺🇸 EN</button>
      </div>
      <button class="btn btn-outline p5-new-chat-btn" data-toast="Memulai percakapan baru…">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 3v10M3 8h10"/></svg>
        <span data-id="Chat Baru" data-en="New Chat">Chat Baru</span>
      </button>
    </div>
  </div>

  <!-- Chat Container -->
  <div class="p5-chat-container" id="p5ChatContainer">

    <!-- Empty State (centered) -->
    <div class="p5-empty-state" id="p5EmptyState">
      <div class="p5-greeting">
        <div class="p5-greeting-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="10" fill="url(#p5grad)"/>
            <text x="16" y="21" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" font-family="'Playfair Display',serif">L</text>
            <defs><linearGradient id="p5grad" x1="0" y1="0" x2="32" y2="32"><stop stop-color="#1967D2"/><stop offset="1" stop-color="#4A8EE8"/></linearGradient></defs>
          </svg>
        </div>
        <div class="p5-greeting-text" data-id="Halo, ada yang bisa saya bantu?" data-en="Hello, how can I help you?">Halo, ada yang bisa saya bantu?</div>
        <div class="p5-greeting-sub" data-id="Analisis regulasi, tinjauan kontrak, riset yurisprudensi, dan penyusunan opini hukum." data-en="Regulatory analysis, contract review, jurisprudence research, and legal opinion drafting.">Analisis regulasi, tinjauan kontrak, riset yurisprudensi, dan penyusunan opini hukum.</div>
      </div>
    </div>

    <!-- Messages Area (hidden initially) -->
    <div class="p5-messages" id="p5Messages"></div>

    <!-- Input Area -->
    <div class="p5-input-wrap" id="p5InputWrap">
      <div class="p5-input-box">
        <input type="text" class="p5-input"
          aria-label="Ask Lexia about legal topics"
          data-placeholder-id="Tanya tentang regulasi, kontrak, atau opini hukum…"
          data-placeholder-en="Ask about regulations, contracts, or legal opinions…"
          placeholder="Tanya tentang regulasi, kontrak, atau opini hukum…" />
        <button class="p5-send-btn" aria-label="Send">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 8h12M9 4l4 4-4 4"/></svg>
        </button>
      </div>
      <div class="p5-chips" id="p5Chips">
        <span class="chip" role="button" tabindex="0" data-action="chip-insert" data-value="Analisis kontrak saya" data-id="📄 Analisis kontrak" data-en="📄 Analyze contract">📄 Analisis kontrak</span>
        <span class="chip" role="button" tabindex="0" data-action="chip-insert" data-value="Cek kepatuhan kontrak" data-id="⚖️ Cek kepatuhan" data-en="⚖️ Check compliance">⚖️ Cek kepatuhan</span>
        <span class="chip" role="button" tabindex="0" data-action="chip-insert" data-value="Bantu draft opini hukum" data-id="✍️ Draft opini" data-en="✍️ Draft opinion">✍️ Draft opini</span>
        <span class="chip" role="button" tabindex="0" data-action="chip-insert" data-value="Cari preseden hukum" data-id="🔍 Cari preseden" data-en="🔍 Find precedent">🔍 Cari preseden</span>
      </div>
      <div class="p5-input-hint" data-id="Lexia menggunakan AI — verifikasi informasi penting secara mandiri." data-en="Lexia uses AI — verify critical information independently.">Lexia menggunakan AI — verifikasi informasi penting secara mandiri.</div>
    </div>
  </div>
  `;
}

export function initInteractions(root) {
  const container = root.querySelector('#p5ChatContainer');
  const emptyState = root.querySelector('#p5EmptyState');
  const messages = root.querySelector('#p5Messages');
  const input = root.querySelector('.p5-input');
  const sendBtn = root.querySelector('.p5-send-btn');
  const chips = root.querySelector('#p5Chips');
  const inputWrap = root.querySelector('#p5InputWrap');

  function sendMessage(text) {
    if (!text || !text.trim()) return;

    // Transition to conversation mode
    if (emptyState && !emptyState.classList.contains('hidden')) {
      emptyState.classList.add('hidden');
      messages.classList.add('active');
      container.classList.add('has-messages');
      chips.classList.add('hidden');
    }

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.innerHTML = `<div class="msg-bubble user">${text.replace(/</g,'&lt;')}</div><div class="msg-av user">A</div>`;
    messages.appendChild(userMsg);

    // Add AI response (simulated)
    setTimeout(() => {
      const aiMsg = document.createElement('div');
      aiMsg.className = 'msg';
      const lang = localStorage.getItem('lexia-lang') || 'id';
      const response = lang === 'id'
        ? 'Terima kasih atas pertanyaannya. Saya sedang menganalisis berdasarkan regulasi dan yurisprudensi yang berlaku. Fitur ini masih dalam pengembangan — respons lengkap akan tersedia segera.'
        : 'Thank you for your question. I am analyzing based on applicable regulations and jurisprudence. This feature is still in development — full responses will be available soon.';
      aiMsg.innerHTML = `<div class="msg-av ai">L</div><div><div class="msg-bubble ai">${response}</div></div>`;
      messages.appendChild(aiMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 800);

    input.value = '';
    input.focus();
    messages.scrollTop = messages.scrollHeight;
  }

  // Delegated handlers
  root.addEventListener('click', e => {
    const lang = e.target.closest('[data-lang]');
    if (lang) { if (window.setLang) window.setLang(lang.dataset.lang); return; }
    const toast = e.target.closest('[data-toast]');
    if (toast) { window.showToast(toast.dataset.toast); return; }
    const chip = e.target.closest('[data-action="chip-insert"]');
    if (chip) {
      sendMessage(chip.dataset.value);
      return;
    }
  });

  // Send button
  if (sendBtn) {
    sendBtn.addEventListener('click', () => sendMessage(input?.value));
  }

  // Enter key
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input.value);
      }
    });
  }

  if (typeof window.setLang === 'function') {
    window.setLang(localStorage.getItem('lexia-lang') || 'id');
  }
}
