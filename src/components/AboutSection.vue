<script setup lang="ts">
import { onMounted } from 'vue'

// Reveal about-section items on mount
onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible')
    }),
    { threshold: 0.15 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-heading">
    <div class="container">
      <header class="section-header reveal">
        <span class="section-tag">01 / Über mich</span>
        <h2 id="about-heading" class="section-title">Wer bin ich?</h2>
      </header>

      <div class="about-grid">
        <!-- Text -->
        <div class="about-text reveal">
          <p class="about-lead">
            Ich bin <strong>Yusuf Ahmed</strong>, Webentwickler aus
            <strong>Ludwigsburg</strong> — mit über <strong>10 Jahren Erfahrung</strong>
            in der professionellen Web-Entwicklung.
          </p>
          <p>
            Mein Fokus liegt auf sauberem Code, hervorragender UX und technischer
            Perfektion. Ich entwickle maßgeschneiderte Websites und Web-Apps für
            Unternehmen aus dem Raum <strong>Ludwigsburg und Stuttgart</strong> —
            von der Konzeption bis zum Launch.
          </p>
          <p>
            Ich beherrsche den kompletten Frontend-Stack: TYPO3, Shopify, WordPress,
            Webflow, Framer, Vue.js, TypeScript, Bootstrap und Tailwind CSS —
            immer mit Fokus auf <strong>SEO, Performance und Barrierefreiheit</strong>.
            Zusätzlich setze ich gezielt <strong>KI-Tools</strong> wie ChatGPT, Claude
            und GitHub Copilot ein, um Projekte schneller und smarter umzusetzen.
          </p>
          <p>
            Neben Kundenprojekten betreibe ich meinen eigenen Online-Shop
            <a href="https://mystu.shop" target="_blank" rel="noopener noreferrer" class="inline-link">
              mystu.shop
            </a> auf Shopify — als lebendiges Praxis-Beispiel meiner E-Commerce-Expertise.
          </p>

          <div class="about-highlights">
            <div class="highlight">
              <span class="hl-icon">🎯</span>
              <div>
                <strong>Spezialist für CMS</strong>
                <span>TYPO3, WordPress, Shopify</span>
              </div>
            </div>
            <div class="highlight">
              <span class="hl-icon">📍</span>
              <div>
                <strong>Lokal & Remote</strong>
                <span>Ludwigsburg, Stuttgart & Bundesweit</span>
              </div>
            </div>
            <div class="highlight">
              <span class="hl-icon">♿</span>
              <div>
                <strong>Barrierefreiheit</strong>
                <span>WCAG 2.1 konform</span>
              </div>
            </div>
            <div class="highlight">
              <span class="hl-icon">🔍</span>
              <div>
                <strong>SEO-Optimierung</strong>
                <span>Technisches & On-Page SEO</span>
              </div>
            </div>
            <div class="highlight highlight--ai">
              <span class="hl-icon">🤖</span>
              <div>
                <strong>KI-Tools Experte</strong>
                <span>ChatGPT, Claude, Copilot, Midjourney</span>
              </div>
            </div>
          </div>

          <div class="about-actions">
            <a href="#contact" class="btn btn-primary" id="about-cta-btn">Jetzt Projekt anfragen</a>
            <a href="https://github.com/8bamo" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" id="about-github-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Code card -->
        <div class="about-card-wrap reveal reveal-delay-2">
          <div class="about-card glass">
            <div class="ac-header">
              <div class="ac-dot ac-dot--red"></div>
              <div class="ac-dot ac-dot--yellow"></div>
              <div class="ac-dot ac-dot--green"></div>
              <span class="ac-filename">profil.ts</span>
            </div>
            <pre class="ac-code" aria-label="Code-Darstellung des Profils"><code><span class="c-kw">const</span> <span class="c-var">yusuf</span> = {
  <span class="c-key">name</span>:      <span class="c-str">"Yusuf Ahmed"</span>,
  <span class="c-key">standort</span>: <span class="c-str">"Ludwigsburg, BW"</span>,
  <span class="c-key">erfahrung</span>:<span class="c-str">"&gt;10 Jahre"</span>,
  <span class="c-key">cms</span>: [
    <span class="c-str">"TYPO3"</span>, <span class="c-str">"WordPress"</span>,
    <span class="c-str">"Shopify"</span>, <span class="c-str">"Webflow"</span>,
    <span class="c-str">"Framer"</span>, <span class="c-str">"Wix"</span>
  ],
  <span class="c-key">frontend</span>: [
    <span class="c-str">"HTML5"</span>, <span class="c-str">"CSS3"</span>,
    <span class="c-str">"TypeScript"</span>, <span class="c-str">"Vue.js"</span>,
    <span class="c-str">"Bootstrap"</span>, <span class="c-str">"Tailwind"</span>
  ],
  <span class="c-key">ki_tools</span>: [
    <span class="c-str">"ChatGPT"</span>, <span class="c-str">"Claude"</span>,
    <span class="c-str">"Copilot"</span>, <span class="c-str">"Midjourney"</span>
  ],
  <span class="c-key">shop</span>:      <span class="c-str">"mystu.shop 🛒"</span>,
  <span class="c-key">verfügbar</span>:<span class="c-str">"Ja ✅"</span>,
};</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}
.about-lead {
  font-size: 18px;
  color: var(--text);
  margin-bottom: 20px;
  line-height: 1.75;
}
.about-text p {
  color: var(--text-muted);
  margin-bottom: 16px;
  font-size: 15px;
}
.about-text strong { color: var(--text); }

.about-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 28px 0 32px;
}
.highlight {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  transition: all .25s;
}
.highlight:hover {
  border-color: var(--border-glow);
  transform: translateY(-2px);
}
.hl-icon { font-size: 1.4rem; flex-shrink: 0; }
.highlight strong { display: block; font-size: 13px; color: var(--text); margin-bottom: 2px; }
.highlight span { font-size: 12px; color: var(--text-muted); }

.about-actions { display: flex; gap: 16px; flex-wrap: wrap; }

.inline-link {
  color: var(--primary-h);
  font-weight: 600;
  border-bottom: 1px solid rgba(99,102,241,.4);
  transition: border-color .2s, color .2s;
}
.inline-link:hover { color: var(--accent); border-color: var(--accent); }

.highlight--ai {
  border-color: rgba(168,85,247,.25);
  background: rgba(168,85,247,.06);
}

/* Code card */
.about-card {
  border-radius: var(--radius);
  overflow: hidden;
  position: sticky;
  top: 100px;
}
.ac-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 14px 16px;
  background: rgba(255,255,255,.03);
  border-bottom: 1px solid var(--border);
}
.ac-dot { width: 11px; height: 11px; border-radius: 50%; }
.ac-dot--red    { background: #ef4444; }
.ac-dot--yellow { background: #eab308; }
.ac-dot--green  { background: #22c55e; }
.ac-filename {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--text-dim);
  margin-left: 8px;
}
.ac-code {
  padding: 24px;
  font-family: var(--mono);
  font-size: 13px;
  line-height: 1.85;
  overflow-x: auto;
}
.c-kw  { color: #c792ea; }
.c-var { color: #82aaff; }
.c-key { color: #f07178; }
.c-str { color: #c3e88d; }

@media (max-width: 1024px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .about-card { position: static; }
}
@media (max-width: 600px) {
  .about-highlights { grid-template-columns: 1fr; }
  .about-actions { flex-direction: column; }
}
</style>
