<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Subtle parallax on scroll
const scrollY = ref(0)
function onScroll() { scrollY.value = window.scrollY }

// Mouse tracking for subtle tilt on visual
const mx = ref(0), my = ref(0)
function onMouse(e: MouseEvent) {
  mx.value = (e.clientX / window.innerWidth - 0.5) * 12
  my.value = (e.clientY / window.innerHeight - 0.5) * 8
}

// Stat counters
const statRefs = ref<HTMLElement[]>([])
function pushStatRef(el: unknown) {
  if (el instanceof HTMLElement) statRefs.value.push(el)
}
function animateStats() {
  statRefs.value.forEach(el => {
    const target = parseInt(el.dataset['target'] ?? '0', 10)
    let count = 0
    const step = Math.max(1, Math.ceil(target / 50))
    const t = setInterval(() => {
      count = Math.min(count + step, target)
      el.textContent = count + '+'
      if (count >= target) clearInterval(t)
    }, 30)
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('mousemove', onMouse, { passive: true })
  setTimeout(animateStats, 800)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('mousemove', onMouse)
})
</script>

<template>
  <section id="hero" aria-label="Yusuf Ahmed – Webentwickler Ludwigsburg">

    <!-- Background — subtle radial glow -->
    <div class="hero-bg" aria-hidden="true">
      <div class="bg-glow bg-glow-1"></div>
      <div class="bg-glow bg-glow-2"></div>
      <!-- Thin horizontal lines for premium texture -->
      <div class="grid-lines" aria-hidden="true"></div>
    </div>

    <div class="hero-inner container" @mousemove.stop>

      <!-- ══ LEFT: Text ══ -->
      <div class="hero-content">

        <div class="hero-badge">
          <span class="badge-dot"></span>
          Verfügbar für neue Projekte
        </div>

        <!-- Editorial headline -->
        <h1 class="hero-title">
          <span class="line-sm">Hallo, ich bin</span>
          <span class="line-name">Yusuf<br>Ahmed</span>
          <span class="line-role">
            <span class="role-accent">Webentwickler</span> aus<br>
            Ludwigsburg
          </span>
        </h1>

        <p class="hero-sub">
          Professionelle Websites für Unternehmen im Raum
          <strong>Ludwigsburg & Stuttgart</strong> —
          mit über 10 Jahren Erfahrung.
        </p>

        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary" id="hero-contact-btn">
            Projekt anfragen
          </a>
          <a href="#projects" class="btn btn-secondary" id="hero-projects-btn">
            Referenzen ansehen
          </a>
        </div>

        <!-- Stats row -->
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-num" :ref="pushStatRef" data-target="10">10+</span>
            <span class="stat-label">Jahre Erfahrung</span>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-item">
            <span class="stat-num" :ref="pushStatRef" data-target="50">50+</span>
            <span class="stat-label">Projekte</span>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-item">
            <span class="stat-num" :ref="pushStatRef" data-target="15">15+</span>
            <span class="stat-label">Technologien</span>
          </div>
        </div>
      </div>

      <!-- ══ RIGHT: Visual ══ -->
      <div
        class="hero-visual"
        aria-hidden="true"
        :style="{ transform: `perspective(1200px) rotateY(${mx * 0.3}deg) rotateX(${-my * 0.3}deg)` }"
      >
        <!-- Main card -->
        <div class="showcase-card">
          <div class="sc-top">
            <span class="sc-tag">Webentwickler</span>
            <span class="sc-dot"></span>
          </div>
          <div class="sc-initials">YA</div>
          <div class="sc-info">
            <span class="sc-name">Yusuf Ahmed</span>
            <span class="sc-location">Ludwigsburg, Germany</span>
          </div>
          <div class="sc-skills">
            <span>TYPO3</span>
            <span>WordPress</span>
            <span>Shopify</span>
            <span>Vue.js</span>
          </div>
        </div>

        <!-- Floating accent cards -->
        <div class="acc-card card-top">
          <span class="acc-icon">🚀</span>
          <div>
            <b>Schnell & SEO-ready</b>
            <small>Core Web Vitals 95+</small>
          </div>
        </div>
        <div class="acc-card card-bottom">
          <span class="acc-icon">✓</span>
          <div>
            <b>Barrierefrei</b>
            <small>WCAG 2.1 konform</small>
          </div>
        </div>

        <!-- Location tags -->
        <div class="location-tags">
          <span>📍 Ludwigsburg</span>
          <span>📍 Stuttgart</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator" aria-hidden="true">
      <div class="si-line"></div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
}

/* ── Background ── */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  will-change: transform;
}
.bg-glow-1 {
  width: 600px; height: 600px;
  right: -100px; top: -150px;
  background: radial-gradient(circle, rgba(249,115,22,.1) 0%, transparent 70%);
  animation: glow-pulse 8s ease-in-out infinite;
}
.bg-glow-2 {
  width: 400px; height: 400px;
  left: 5%; bottom: 10%;
  background: radial-gradient(circle, rgba(249,115,22,.06) 0%, transparent 70%);
  animation: glow-pulse 12s ease-in-out infinite reverse;
}
@keyframes glow-pulse {
  0%,100% { opacity:.8; transform: scale(1); }
  50% { opacity:1; transform: scale(1.08); }
}

/* Subtle grid lines */
.grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
}

/* ── Layout ── */
.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* ── Badge ── */
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 16px;
  border: 1px solid rgba(249,115,22,.3);
  background: rgba(249,115,22,.06);
  border-radius: 2px;
  font-size: 12px; font-weight: 600;
  letter-spacing: .06em; text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 32px;
}
.badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--orange);
  box-shadow: 0 0 8px var(--orange);
  animation: pulse-dot 2s infinite;
}
@keyframes pulse-dot { 0%,100%{opacity:1}50%{opacity:.3} }

/* ── Editorial Headline ── */
.hero-title {
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.line-sm {
  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: 400;
  color: var(--text-muted);
  letter-spacing: .04em;
  text-transform: uppercase;
}
.line-name {
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  font-weight: 800;
  line-height: .95;
  letter-spacing: -.04em;
  color: var(--text);
  margin: 8px 0;
}
.line-role {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 300;
  color: var(--text-muted);
  line-height: 1.4;
}
.role-accent {
  color: var(--orange);
  font-weight: 600;
}

.hero-sub {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 40px;
}
.hero-sub strong { color: var(--text); font-weight: 600; }

/* ── Actions ── */
.hero-actions {
  display: flex; gap: 16px; flex-wrap: wrap;
  margin-bottom: 56px;
}

/* ── Stats ── */
.hero-stats {
  display: flex; align-items: center; gap: 32px;
}
.stat-item { text-align: left; }
.stat-num {
  display: block;
  font-size: 2.2rem; font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 4px;
}
.stat-label {
  font-size: 11px; color: var(--text-dim);
  text-transform: uppercase; letter-spacing: .1em;
  font-weight: 500;
}
.stat-sep { width: 1px; height: 36px; background: var(--border-light); }

/* ── Visual / Showcase Card ── */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 440px;
  transition: transform .12s linear;
  will-change: transform;
}

.showcase-card {
  background: var(--surface-2);
  border: 1px solid var(--border-light);
  border-top: 2px solid var(--orange);
  border-radius: 8px;
  padding: 40px 36px;
  width: 100%;
  max-width: 340px;
  box-shadow: 0 32px 80px rgba(0,0,0,.8), 0 0 0 1px rgba(255,255,255,.04);
  position: relative;
  z-index: 2;
}
.sc-top {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 32px;
}
.sc-tag {
  font-size: 11px; font-weight: 700; letter-spacing: .12em;
  text-transform: uppercase; color: var(--orange);
}
.sc-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
  animation: pulse-dot 2s infinite;
}
.sc-initials {
  font-size: 4.5rem; font-weight: 900;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 16px;
  letter-spacing: -.04em;
}
.sc-info { margin-bottom: 24px; }
.sc-name {
  display: block;
  font-size: 18px; font-weight: 700;
  color: var(--text);
  margin-bottom: 4px;
}
.sc-location {
  display: block;
  font-size: 13px; color: var(--text-muted);
}
.sc-skills {
  display: flex; flex-wrap: wrap; gap: 6px;
}
.sc-skills span {
  padding: 4px 10px;
  border: 1px solid var(--border-light);
  border-radius: 2px;
  font-size: 11px; font-weight: 600;
  color: var(--text-muted);
  letter-spacing: .04em;
  background: rgba(255,255,255,.03);
}

/* Accent floating cards */
.acc-card {
  position: absolute;
  display: flex; align-items: center; gap: 12px;
  padding: 12px 18px;
  background: var(--surface);
  border: 1px solid var(--border-light);
  border-radius: 6px;
  box-shadow: 0 8px 32px rgba(0,0,0,.6);
  white-space: nowrap;
  animation: acc-float 5s ease-in-out infinite;
}
.card-top { top: 12%; right: -30px; animation-delay: 0s; }
.card-bottom { bottom: 18%; left: -30px; animation-delay: 2s; }
@keyframes acc-float {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-8px); }
}
.acc-icon { font-size: 1.2rem; }
.acc-card b  { display: block; font-size: 13px; font-weight: 700; color: var(--text); }
.acc-card small { font-size: 11px; color: var(--text-muted); }

/* Location tags */
.location-tags {
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  display: flex; gap: 8px;
}
.location-tags span {
  padding: 5px 12px;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 11px; color: var(--text-muted);
  background: var(--surface);
  white-space: nowrap;
}

/* ── Scroll indicator ── */
.scroll-indicator {
  position: absolute;
  bottom: 40px; left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.si-line {
  width: 1px; height: 60px;
  background: linear-gradient(to bottom, var(--orange), transparent);
  animation: si-fade 2s ease-in-out infinite;
}
@keyframes si-fade {
  0%,100% { opacity:.3; transform: scaleY(1); }
  50%     { opacity:1;  transform: scaleY(1.1); }
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .hero-inner { grid-template-columns: 1fr; gap: 56px; }
  .hero-visual { min-height: 360px; }
  .acc-card { display: none; }
}
@media (max-width: 640px) {
  .line-name { font-size: clamp(3rem, 14vw, 4.5rem); }
  .hero-actions { flex-direction: column; }
  .hero-stats { gap: 20px; }
}
</style>
