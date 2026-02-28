<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
})
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-heading">
    <div class="container">

      <header class="section-header reveal">
        <span class="section-tag">01 — Über mich</span>
        <h2 id="about-heading" class="section-title">
          Ich bringe Ihre<br><strong>Vision ins Web.</strong>
        </h2>
      </header>

      <div class="about-grid">

        <!-- Left: Text & Highlights -->
        <div class="about-text reveal">
          <p class="about-lead">
            Ich bin <strong>Yusuf</strong>, Webentwickler aus
            <strong>Ludwigsburg</strong> — mit über <strong>10 Jahren Erfahrung</strong>
            in der professionellen Web-Entwicklung.
          </p>
          <div class="orange-line"></div>
          <p>
            Mein Fokus liegt auf maßgeschneiderten Websites und Web-Apps für
            Unternehmen im Raum <strong>Ludwigsburg und Stuttgart</strong>.
            Von der Konzeption bis zum Launch — mit Fokus auf
            <strong>SEO, Performance und Barrierefreiheit</strong>.
          </p>
          <p style="margin-top:12px">
            Zusätzlich setze ich gezielt <strong>KI-Tools</strong> wie ChatGPT, Claude
            und GitHub Copilot ein, um Projekte schneller und smarter umzusetzen.
          </p>
          <p style="margin-top:12px">
            Neben Kundenprojekten betreibe ich meinen eigenen Shopify-Shop
            <a href="https://mystu.shop" target="_blank" rel="noopener noreferrer" class="text-link">
              mystu.shop
            </a> — als lebendiges Praxis-Beispiel meiner E-Commerce-Expertise.
          </p>

          <div class="about-actions">
            <a href="#contact" class="btn btn-primary" id="about-cta-btn">Projekt anfragen</a>
            <a href="https://www.linkedin.com/in/yusuf-ahmed-lb/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" id="about-linkedin-btn">
              LinkedIn
            </a>
          </div>
        </div>

        <!-- Right: Highlight tiles -->
        <div class="about-tiles reveal reveal-delay-2">
          <div class="tile">
            <span class="tile-num">01</span>
            <h3 class="tile-title">CMS-Spezialist</h3>
            <p class="tile-desc">TYPO3, WordPress, Shopify, Webflow, Framer, Wix</p>
          </div>
          <div class="tile">
            <span class="tile-num">02</span>
            <h3 class="tile-title">Frontend-Entwicklung</h3>
            <p class="tile-desc">HTML5, CSS3, TypeScript, Vue.js, Bootstrap, Tailwind</p>
          </div>
          <div class="tile">
            <span class="tile-num">03</span>
            <h3 class="tile-title">SEO & Performance</h3>
            <p class="tile-desc">On-Page SEO, Core Web Vitals, Barrierefreiheit WCAG 2.1</p>
          </div>
          <div class="tile tile--highlight">
            <span class="tile-num">04</span>
            <h3 class="tile-title">KI-Tools & Automation</h3>
            <p class="tile-desc">ChatGPT, Claude, GitHub Copilot, Midjourney</p>
          </div>
        </div>

      </div>

      <!-- Stats bar -->
      <div class="about-stats reveal">
        <div class="astat">
          <span class="astat-num gradient-text">10+</span>
          <span class="astat-label">Jahre Erfahrung</span>
        </div>
        <div class="astat-div"></div>
        <div class="astat">
          <span class="astat-num gradient-text">50+</span>
          <span class="astat-label">Kundenprojekte</span>
        </div>
        <div class="astat-div"></div>
        <div class="astat">
          <span class="astat-num gradient-text">3</span>
          <span class="astat-label">Live-Referenzen</span>
        </div>
        <div class="astat-div"></div>
        <div class="astat">
          <span class="astat-num gradient-text">15+</span>
          <span class="astat-label">Technologien</span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  margin-bottom: 80px;
}

.about-lead {
  font-size: 18px;
  line-height: 1.75;
  color: var(--text);
  margin-bottom: 20px;
}
.about-lead strong { color: var(--text); }

.about-text p { color: var(--text-muted); font-size: 15px; line-height: 1.8; }
.about-text strong { color: var(--text); font-weight: 600; }

.orange-line {
  width: 40px; height: 2px;
  background: var(--orange);
  margin: 20px 0;
}

.text-link {
  color: var(--orange);
  border-bottom: 1px solid rgba(249,115,22,.4);
  transition: border-color .2s;
}
.text-link:hover { border-color: var(--orange); }

.about-actions {
  display: flex; gap: 16px; flex-wrap: wrap;
  margin-top: 40px;
}

/* ── Tiles ── */
.about-tiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.tile {
  padding: 28px 24px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  transition: border-color .3s, transform .3s;
}
.tile:hover {
  border-color: rgba(249,115,22,.3);
  transform: translateY(-4px);
}
.tile--highlight {
  border-color: rgba(249,115,22,.25);
  background: rgba(249,115,22,.04);
}
.tile-num {
  display: block;
  font-family: var(--mono);
  font-size: 11px; color: var(--orange);
  letter-spacing: .12em;
  margin-bottom: 10px;
}
.tile-title {
  font-size: 16px; font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}
.tile-desc {
  font-size: 13px; color: var(--text-muted);
  line-height: 1.6;
}

/* ── Stats bar ── */
.about-stats {
  display: flex; align-items: center;
  gap: 0;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  overflow: hidden;
}
.astat {
  flex: 1;
  padding: 32px 24px;
  text-align: center;
  border-right: 1px solid var(--border);
  transition: background .25s;
}
.astat:last-child { border-right: none; }
.astat:hover { background: var(--surface); }
.astat-num {
  display: block;
  font-size: 2.4rem; font-weight: 800;
  line-height: 1;
  margin-bottom: 6px;
}
.astat-label {
  font-size: 12px; color: var(--text-dim);
  text-transform: uppercase; letter-spacing: .1em;
  font-weight: 500;
}
.astat-div { display: none; }

@media (max-width: 1024px) {
  .about-grid { grid-template-columns: 1fr; gap: 48px; }
}
@media (max-width: 640px) {
  .about-tiles { grid-template-columns: 1fr; }
  .about-stats { flex-direction: column; }
  .astat { border-right: none; border-bottom: 1px solid var(--border); }
  .astat:last-child { border-bottom: none; }
}
</style>
