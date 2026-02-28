<template>
  <footer id="footer" role="contentinfo">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <div class="f-brand">
            <a href="#" class="f-logo" aria-label="Yusuf Ahmed – Webentwickler Ludwigsburg">
              Yusuf Ahmed<span class="dot">.</span>
            </a>
            <p class="f-tagline">
              Professionelle Webentwicklung aus Ludwigsburg.<br/>
              TYPO3 · Shopify · WordPress · Vue.js
            </p>
            <div class="f-links">
              <a href="https://github.com/8bamo" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profil" id="footer-github-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/yusuf-ahmed-lb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profil" id="footer-linkedin-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <nav class="f-nav" aria-label="Footer Navigation">
            <h3 class="f-nav-title">Navigation</h3>
            <ul>
              <li><a href="#about">Über mich</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projekte</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </nav>

          <div class="f-services">
            <h3 class="f-nav-title">Leistungen</h3>
            <ul>
              <li>TYPO3 Entwicklung</li>
              <li>Shopify Shops</li>
              <li>WordPress Websites</li>
              <li>Webflow & Framer</li>
              <li>Vue.js Web-Apps</li>
              <li>SEO & Performance</li>
              <li>Barrierefreiheit</li>
            </ul>
          </div>

          <div class="f-region">
            <h3 class="f-nav-title">Einsatzgebiete</h3>
            <ul>
              <li>📍 Ludwigsburg</li>
              <li>📍 Stuttgart</li>
              <li>📍 Heilbronn</li>
              <li>📍 Böblingen</li>
              <li>📍 Waiblingen</li>
              <li>📍 Bundesweit remote</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          <p>© {{ new Date().getFullYear() }} Yusuf Ahmed – Webentwickler Ludwigsburg. Alle Rechte vorbehalten.</p>
          <div class="footer-legal">
            <a href="#" id="footer-impressum">Impressum</a>
            <a href="#" id="footer-datenschutz">Datenschutz</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  border-top: 1px solid var(--border);
  background: var(--bg);
}

.footer-top { padding: 64px 0 48px; }

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
}

.f-logo {
  font-size: 20px;
  font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  margin-bottom: 12px;
}
.dot { color: var(--primary); -webkit-text-fill-color: var(--primary); }

.f-tagline {
  font-size: 13px;
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 20px;
}

.f-links {
  display: flex;
  gap: 12px;
}
.f-links a {
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-muted);
  transition: all .25s;
}
.f-links a:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.f-nav-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: .1em;
  margin-bottom: 16px;
}

.f-nav ul, .f-services ul, .f-region ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.f-nav a {
  font-size: 13px;
  color: var(--text-dim);
  transition: color .25s;
}
.f-nav a:hover { color: var(--primary); }

.f-services li, .f-region li {
  font-size: 13px;
  color: var(--text-dim);
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 20px 0;
}
.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.footer-bottom p {
  font-size: 12px;
  color: var(--text-dim);
}
.footer-legal {
  display: flex;
  gap: 20px;
}
.footer-legal a {
  font-size: 12px;
  color: var(--text-dim);
  transition: color .25s;
}
.footer-legal a:hover { color: var(--primary); }

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
}
@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom-inner { flex-direction: column; text-align: center; }
}
</style>
