/**
 * Shared Chat Bar Component
 * ─────────────────────────
 * Renders the fixed chat bar at the bottom of pages.
 * Pages that have their own chat interface (e.g. P5_Assistant)
 * can opt out by exporting `chatBar = false`.
 */

export function renderChatBar() {
  return `
  <div class="chat-bar">
    <div class="chat-frame">
      <div class="chat-orb"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5l1.2 3.7L13 6.5 9.2 7.7 8 11.5 6.8 7.7 3 6.5l3.8-1.3L8 1.5z"/><circle cx="3.5" cy="12.5" r=".9" opacity=".5"/><circle cx="12.5" cy="3.5" r=".65" opacity=".4"/></svg></div>
      <input class="chat-input" type="text"
        data-placeholder-id="Tanya Lexia tentang regulasi, kepatuhan, opini hukum\u2026"
        data-placeholder-en="Ask Lexia about regulations, compliance, legal opinions\u2026"
        placeholder="Tanya Lexia tentang regulasi, kepatuhan, opini hukum\u2026"
        maxlength="2000"/>
      <div class="chip-row">
        <span class="chip" data-id="\u2726 Buat Opini" data-en="\u2726 Create Opinion" data-navigate="/drafting">\u2726 Buat Opini</span>
        <span class="chip" data-id="\ud83d\udd0d Cari Preseden" data-en="\ud83d\udd0d Find Precedent" data-navigate="/research">\ud83d\udd0d Cari Preseden</span>
      </div>
      <div class="chat-div"></div>
      <button class="attach-btn" title="Lampirkan"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M13 7.5l-6 6a4 4 0 01-5.5-5.5l7-7a2.5 2.5 0 013.5 3.5l-7 7a1 1 0 01-1.4-1.4l6-6"/></svg></button>
      <button class="send-btn"><span data-id="Kirim" data-en="Send">Kirim</span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 8h12M9 4l4 4-4 4"/></svg></button>
    </div>
    <div class="chat-hint">
      <span class="kbd">\u2318K</span> command palette &nbsp;\u00b7&nbsp;
      <span class="kbd">@</span> <span data-id="mention dokumen" data-en="mention document">mention dokumen</span> &nbsp;\u00b7&nbsp;
      <span data-id="Didukung Lexia AI v2.1 \u00b7 Semua sumber terverifikasi" data-en="Powered by Lexia AI v2.1 \u00b7 All sources verified">Didukung Lexia AI v2.1 \u00b7 Semua sumber terverifikasi</span>
    </div>
  </div>
  `;
}

export function initChatBar(root) {
  const ci = root.querySelector('.chat-bar > .chat-frame > .chat-input')
    || root.querySelector('.chat-bar .chat-input');
  if (ci) {
    ci.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) e.preventDefault();
    });
  }
  const sb = root.querySelector('.chat-bar > .chat-frame > .send-btn')
    || root.querySelector('.chat-bar .send-btn');
  if (sb) {
    sb.addEventListener('click', function() {
      const inp = root.querySelector('.chat-bar .chat-input');
      if (inp && inp.value.trim()) {
        inp.value = '';
        inp.focus();
      }
    });
  }
}
