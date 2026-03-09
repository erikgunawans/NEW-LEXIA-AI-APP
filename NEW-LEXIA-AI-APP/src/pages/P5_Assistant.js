export const chatBar = false;
export const aiFloat = false;

/* ── Claude API call (shared key with AIFloat) ───────────────────────── */
async function callLexiaAI(messages) {
  const apiKey = localStorage.getItem('lexia-api-key');
  if (!apiKey) {
    const lang = localStorage.getItem('lexia-lang') || 'id';
    return lang === 'en'
      ? 'API key not configured. Click the AI button (bottom right) and type /key YOUR_KEY to activate.'
      : 'API key belum dikonfigurasi. Klik tombol AI (kanan bawah) dan ketik /key API_KEY_ANDA untuk mengaktifkan.';
  }
  const system = `You are Lexia AI, a comprehensive legal assistant specializing in Indonesian law, embedded in the Lexia corporate legal operations platform. The user is in the main AI Assistant interface. Answer legal questions about Indonesian law (perdata, pidana, dagang, ketenagakerjaan), contracts, regulations, compliance, case strategy, and legal operations. Be thorough and precise. Cite relevant laws (UU, PP, Perpres, POJK, KUHPerdata, etc.) and regulations where applicable. Use clear structure with numbered steps or bullet points when helpful. Respond in the same language the user writes in (Indonesian or English).`;
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 900,
        system,
        messages,
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${res.status}`);
    }
    const data = await res.json();
    return data.content[0]?.text || '(No response)';
  } catch (e) {
    const lang = localStorage.getItem('lexia-lang') || 'id';
    return lang === 'en'
      ? `Connection failed: ${e.message}`
      : `Gagal terhubung: ${e.message}`;
  }
}

/* ── Render ──────────────────────────────────────────────────────────── */
export function render(container) {
  container.innerHTML = `
  <div class="p5-wrap">
    <div class="p5-body">

      <!-- Empty State — centered greeting -->
      <div class="p5-empty-state" id="p5EmptyState">
        <div class="p5-greeting">
          <div class="p5-greeting-icon">
            <img src="/assets/lexia-chat-icon.png" alt="Lexia" width="96" height="96" style="border-radius:20px;object-fit:contain"/>
          </div>
          <div class="p5-brand-label">Lexia AI</div>
          <div class="p5-greeting-text" data-id="Halo, ada yang bisa saya bantu?" data-en="Hello, how can I help you?">Halo, ada yang bisa saya bantu?</div>
          <div class="p5-greeting-sub" data-id="Analisis regulasi, tinjauan kontrak, riset yurisprudensi, dan penyusunan opini hukum." data-en="Regulatory analysis, contract review, jurisprudence research, and legal opinion drafting.">Analisis regulasi, tinjauan kontrak, riset yurisprudensi, dan penyusunan opini hukum.</div>
          <div class="p5-chips">
            <button class="p5-chip" data-query-id="Apa klausul wajib dalam NDA?" data-query-en="What are the required clauses in an NDA?">
              <span data-id="Klausul wajib NDA?" data-en="Required NDA clauses?">Klausul wajib NDA?</span>
            </button>
            <button class="p5-chip" data-query-id="Bagaimana syarat sah perjanjian menurut KUHPerdata?" data-query-en="What makes a contract legally valid under Indonesian law?">
              <span data-id="Syarat sah perjanjian?" data-en="Contract validity?">Syarat sah perjanjian?</span>
            </button>
            <button class="p5-chip" data-query-id="Jelaskan mekanisme PHK yang sah menurut UU Ketenagakerjaan" data-query-en="Explain lawful employee termination under Indonesian labor law">
              <span data-id="Mekanisme PHK yang sah?" data-en="Lawful termination?">Mekanisme PHK yang sah?</span>
            </button>
            <button class="p5-chip" data-query-id="Apa itu force majeure dan bagaimana klausulnya dalam kontrak?" data-query-en="What is force majeure and how is it typically drafted in contracts?">
              <span data-id="Force majeure di kontrak?" data-en="Force majeure clauses?">Force majeure di kontrak?</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Messages Area -->
      <div class="p5-messages" id="p5Messages"></div>

      <!-- Bottom Input -->
      <div class="p5-bottom">
        <div class="p5-input-box">
          <textarea class="p5-input" rows="1"
            aria-label="Ask Lexia about legal topics"
            data-placeholder-id="Tanya Saya"
            data-placeholder-en="Ask Me"
            placeholder="Tanya Saya"
            maxlength="2000"></textarea>
          <div class="p5-input-actions">
            <button class="p5-attach-btn" onclick="window.showToast('Fitur lampiran segera hadir')">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13.5 7.5l-5.8 5.8a3.5 3.5 0 01-5-5l5.8-5.8a2.3 2.3 0 013.3 3.3L6 11.6a1.2 1.2 0 01-1.7-1.7l4.6-4.6"/></svg>
              <span data-id="Lampirkan file" data-en="Attach file">Lampirkan file</span>
            </button>
            <button class="p5-send-btn" aria-label="Send">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 8h12M9 4l4 4-4 4"/></svg>
            </button>
          </div>
        </div>
        <div class="p5-hint" data-id="Lexia menggunakan AI — verifikasi informasi penting secara mandiri." data-en="Lexia uses AI — verify critical information independently.">Lexia menggunakan AI — verifikasi informasi penting secara mandiri.</div>
      </div>

    </div>
  </div>
  `;
}

/* ── Interactions ────────────────────────────────────────────────────── */
export function initInteractions(root) {
  const emptyState = root.querySelector('#p5EmptyState');
  const messages   = root.querySelector('#p5Messages');
  const input      = root.querySelector('.p5-input');
  const sendBtn    = root.querySelector('.p5-send-btn');
  const body       = root.querySelector('.p5-body');

  // Per-session conversation history for this page
  const p5History = [];

  async function sendMessage(text) {
    if (!text || !text.trim()) return;

    // Transition to conversation mode
    if (emptyState && !emptyState.classList.contains('hidden')) {
      emptyState.classList.add('hidden');
      messages.classList.add('active');
      body.classList.add('has-messages');
    }

    // User message bubble
    const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.innerHTML = `<div class="msg-bubble user">${escaped}</div><div class="msg-av user">A</div>`;
    messages.appendChild(userMsg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Add to history
    p5History.push({ role: 'user', content: text });

    // Typing indicator
    const typing = document.createElement('div');
    typing.className = 'msg';
    typing.innerHTML = `
      <div class="msg-av ai"><img src="/assets/lexia-chat-icon.png" alt="Lexia" width="36" height="36" style="border-radius:9px;object-fit:contain"/></div>
      <div><div class="msg-bubble ai p5-typing"><span></span><span></span><span></span></div></div>`;
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    sendBtn.disabled = true;
    input.disabled   = true;

    // Build API messages from history (max last 20 turns)
    const apiMsgs = p5History.slice(-20).map(({ role, content }) => ({ role, content }));
    const reply = await callLexiaAI(apiMsgs);

    typing.remove();
    sendBtn.disabled = false;
    input.disabled   = false;
    input.focus();

    p5History.push({ role: 'assistant', content: reply });

    // Render AI response with minimal markdown
    const html = reply
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');

    const aiMsg = document.createElement('div');
    aiMsg.className = 'msg';
    aiMsg.innerHTML = `
      <div class="msg-av ai"><img src="/assets/lexia-chat-icon.png" alt="Lexia" width="36" height="36" style="border-radius:9px;object-fit:contain"/></div>
      <div><div class="msg-bubble ai">${html}</div></div>`;
    messages.appendChild(aiMsg);
    messages.scrollTop = messages.scrollHeight;
  }

  // Suggestion chip clicks
  root.querySelectorAll('.p5-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const lang  = localStorage.getItem('lexia-lang') || 'id';
      const query = lang === 'en' ? chip.dataset.queryEn : chip.dataset.queryId;
      if (query) sendMessage(query);
    });
  });

  // Delegated toast handler
  root.addEventListener('click', e => {
    const toast = e.target.closest('[data-toast]');
    if (toast) window.showToast(toast.dataset.toast);
  });

  if (sendBtn) sendBtn.addEventListener('click', () => sendMessage(input?.value));

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
