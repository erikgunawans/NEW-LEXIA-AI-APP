export function render(container) {
  container.innerHTML = `
<div style="height:100vh;width:100vw;display:flex;align-items:center;justify-content:center;background:var(--bg);position:relative;overflow:hidden">
  <!-- AMBIENT ORBS -->
  <div class="mesh-bg" aria-hidden="true" style="position:absolute;inset:0;pointer-events:none">
    <div class="orb orb-1" style="width:640px;height:640px;background:radial-gradient(circle,rgba(25,103,210,.13) 0%,transparent 65%);position:absolute;top:-220px;left:-130px;filter:blur(70px)"></div>
    <div class="orb orb-2" style="width:520px;height:520px;background:radial-gradient(circle,rgba(74,142,232,.09) 0%,transparent 65%);position:absolute;top:60px;right:-100px;filter:blur(80px)"></div>
    <div class="orb orb-3" style="width:420px;height:420px;background:radial-gradient(circle,rgba(2,120,190,.08) 0%,transparent 65%);position:absolute;bottom:-100px;left:40%;filter:blur(70px)"></div>
  </div>

  <div class="card" style="width:100%;max-width:420px;padding:40px;position:relative;z-index:10;box-shadow:var(--sh-lg);display:flex;flex-direction:column;gap:24px">
    <div style="text-align:center">
      <img src="/assets/my-new-logo.png" alt="Lexia AI" style="height: 40px; margin-bottom: 8px;" />
      <div style="font-size:13.5px;color:var(--t3)" data-id="Masuk ke ruang kerja Anda" data-en="Sign in to your workspace">Masuk ke ruang kerja Anda</div>
    </div>
    <div style="position:absolute;top:16px;right:16px">
      <div class="lang-toggle">
        <button class="lang-btn active" id="btnID" data-lang="id">🇮🇩 ID</button>
        <button class="lang-btn" id="btnEN" data-lang="en">🇺🇸 EN</button>
      </div>
    </div>

    <!-- SIMPLE LOGIN FORM -->
    <form id="loginForm" style="display:flex;flex-direction:column;gap:16px">
      <div class="field">
        <label data-id="Email Perusahaan" data-en="Corporate Email">Email Perusahaan</label>
        <input type="email" required placeholder="nama@perusahaan.com" style="padding:10px 14px;font-size:14px" />
      </div>
      <div class="field">
        <label data-id="Kata Sandi" data-en="Password">Kata Sandi</label>
        <input type="password" required placeholder="••••••••" style="padding:10px 14px;font-size:14px" />
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;margin-top:-6px">
        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;color:var(--t3)"><input type="checkbox" /> <span data-id="Ingat saya" data-en="Remember me">Ingat saya</span></label>
        <a href="javascript:void(0)" style="color:var(--bl);text-decoration:none;font-weight:500" data-id="Lupa sandi?" data-en="Forgot password?" data-action="forgotPassword">Lupa sandi?</a>
      </div>
      
      <button type="submit" class="btn btn-bl" style="width:100%;justify-content:center;padding:12px;font-size:14px;margin-top:8px" data-id="Submit" data-en="Submit">Submit</button>
    </form>

    <div style="display:flex;align-items:center;gap:12px;margin:8px 0">
      <div style="height:1px;background:var(--bd-n);flex:1"></div>
      <div style="font-size:11px;color:var(--t4);text-transform:uppercase;letter-spacing:.05em" data-id="Atau masuk dengan" data-en="Or sign in with">Atau masuk dengan</div>
      <div style="height:1px;background:var(--bd-n);flex:1"></div>
    </div>

    <button class="btn btn-outline" style="width:100%;justify-content:center;padding:10px;font-size:13.5px;display:flex;align-items:center;gap:8px" data-sso-login>
      <svg width="16" height="16" viewBox="0 0 48 48" fill="none"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
      Google SSO
    </button>
  </div>

  <!-- Forgot Password Modal -->
  <div id="forgotPwModal" style="display:none;position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.45);backdrop-filter:blur(4px);align-items:center;justify-content:center" role="dialog" aria-modal="true">
    <div class="card" style="width:100%;max-width:400px;padding:32px;display:flex;flex-direction:column;gap:18px;position:relative">
      <button data-action="closeForgotPw" style="position:absolute;top:12px;right:14px;background:none;border:none;font-size:18px;color:var(--t3);cursor:pointer" aria-label="Close">&times;</button>
      <div style="text-align:center">
        <div style="font-size:28px;margin-bottom:4px">🔐</div>
        <div style="font-family:'Playfair Display',serif;font-size:18px;font-weight:600;color:var(--t5)" data-id="Reset Kata Sandi" data-en="Reset Password">Reset Kata Sandi</div>
        <div style="font-size:12.5px;color:var(--t3);margin-top:6px" data-id="Masukkan email Anda untuk menerima tautan reset" data-en="Enter your email to receive a reset link">Masukkan email Anda untuk menerima tautan reset</div>
      </div>
      <form id="forgotPwForm" style="display:flex;flex-direction:column;gap:14px">
        <div class="field">
          <label data-id="Email Perusahaan" data-en="Corporate Email">Email Perusahaan</label>
          <input type="email" required placeholder="nama@perusahaan.com" style="padding:10px 14px;font-size:14px" />
        </div>
        <button type="submit" class="btn btn-bl" style="width:100%;justify-content:center;padding:11px;font-size:13.5px" data-id="Kirim Tautan Reset" data-en="Send Reset Link">Kirim Tautan Reset</button>
      </form>
      <div style="text-align:center;font-size:11.5px;color:var(--t4)">
        <a href="javascript:void(0)" data-action="closeForgotPw" style="color:var(--bl);text-decoration:none" data-id="← Kembali ke login" data-en="← Back to login">← Kembali ke login</a>
      </div>
    </div>
  </div>

  <div style="position:absolute;bottom:24px;width:100%;text-align:center;font-size:11px;color:var(--t4)" data-id="© 2026 Lexia AI. Hak Cipta Dilindungi." data-en="© 2026 Lexia AI. All Rights Reserved.">
    © 2026 Lexia AI. Hak Cipta Dilindungi.
  </div>
</div>
  `;
}

export function initInteractions(root) {
  // Delegated handlers
  root.addEventListener('click', e => {
    const lang = e.target.closest('[data-lang]');
    if (lang) { if (window.setLang) window.setLang(lang.dataset.lang); return; }
    const nav = e.target.closest('[data-navigate]');
    if (nav) { e.preventDefault(); window.navigate(nav.dataset.navigate); return; }
    const toast = e.target.closest('[data-toast]');
    if (toast) { window.showToast(toast.dataset.toast); return; }
    const action = e.target.closest('[data-action]');
    if (action) {
      const modal = root.querySelector('#forgotPwModal');
      if (action.dataset.action === 'forgotPassword' && modal) {
        modal.style.display = 'flex';
        const lang = localStorage.getItem('lexia-lang') || 'id';
        if (window.setLang) window.setLang(lang);
      }
      if (action.dataset.action === 'closeForgotPw' && modal) {
        modal.style.display = 'none';
      }
      return;
    }
  });

  // Login form submit
  const form = root.querySelector('#loginForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      sessionStorage.setItem('lexia-auth', '1');
      window.navigate('/');
    });
  }

  // Forgot password form submit
  const forgotForm = root.querySelector('#forgotPwForm');
  if (forgotForm) {
    forgotForm.addEventListener('submit', e => {
      e.preventDefault();
      const modal = root.querySelector('#forgotPwModal');
      if (modal) modal.style.display = 'none';
      window.showToast('Tautan reset telah dikirim ke email Anda');
    });
  }

  // Google SSO button
  const sso = root.querySelector('[data-sso-login]');
  if (sso) {
    sso.addEventListener('click', () => {
      sessionStorage.setItem('lexia-auth', '1');
      window.navigate('/');
    });
  }

  if (typeof window.setLang === 'function') {
    window.setLang(localStorage.getItem('lexia-lang') || 'id');
  }
}
