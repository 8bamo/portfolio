<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mx = ref(0), my = ref(0)
function onMouse(e: MouseEvent) {
  mx.value = (e.clientX / window.innerWidth  - 0.5) * 16
  my.value = (e.clientY / window.innerHeight - 0.5) * 10
}

const rpgStats = [
  { name: 'SEO',        val: 90, color: '#f97316' },
  { name: 'Frontend',   val: 95, color: '#fb923c' },
  { name: 'WordPress',  val: 92, color: '#f97316' },
  { name: 'Shopify',    val: 88, color: '#fdba74' },
]

const abilities = ['TYPO3', 'WordPress', 'Shopify', 'Vue.js', 'KI-Tools', 'SEO']

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
  window.addEventListener('mousemove', onMouse, { passive: true })
  setTimeout(animateStats, 600)
})
onUnmounted(() => window.removeEventListener('mousemove', onMouse))
</script>

<template>
  <section id="hero" aria-label="Yusuf Ahmed – Webentwickler Ludwigsburg">

    <!-- Floating mesh blobs -->
    <div class="blobs" aria-hidden="true">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <div class="hero-inner container" @mousemove.stop>

      <!-- ══ LEFT ══ -->
      <div class="hero-content">

        <div class="hero-badge glass">
          <span class="badge-dot"></span>
          Verfügbar für neue Projekte
        </div>

        <h1 class="hero-title">
          <span class="line-greeting">Hallo, ich bin</span>
          <span class="line-name">Yusuf<span class="name-dot">.</span></span>
          <span class="line-role">
            <span class="role-accent">Webentwickler</span>
            <span class="role-light">aus Ludwigsburg</span>
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
            Referenzen
          </a>
        </div>

        <!-- Stats -->
        <div class="hero-stats">
          <div class="stat glass">
            <span class="sn" :ref="pushStatRef" data-target="10">10+</span>
            <span class="sl">Jahre</span>
          </div>
          <div class="stat glass">
            <span class="sn" :ref="pushStatRef" data-target="50">50+</span>
            <span class="sl">Projekte</span>
          </div>
          <div class="stat glass">
            <span class="sn" :ref="pushStatRef" data-target="15">15+</span>
            <span class="sl">Technologien</span>
          </div>
        </div>
      </div>

      <!-- ══ RIGHT: Glass visual card ══ -->
      <div
        class="hero-visual"
        :style="{ transform: `perspective(1200px) rotateY(${mx * 0.25}deg) rotateX(${-my * 0.25}deg)` }"
        aria-hidden="true"
      >
        <!-- Main glass card — RPG Character Card -->
        <div class="main-card glass">
          <!-- Character header -->
          <div class="mc-header">
            <div class="mc-avatar">
              <span>YA</span>
            </div>
            <div class="mc-info">
              <div class="mc-class-badge">WEB DEVELOPER</div>
              <span class="mc-name">Yusuf</span>
              <span class="mc-title">Ludwigsburg · Germany</span>
            </div>
            <div class="mc-level">
              <span class="lvl-label">LVL</span>
              <span class="lvl-num">10</span>
            </div>
          </div>

          <!-- XP Bar -->
          <div class="xp-section">
            <div class="xp-label">
              <span>XP</span>
              <span>9.500 / 10.000</span>
            </div>
            <div class="xp-bar">
              <div class="xp-fill"></div>
            </div>
          </div>

          <!-- RPG Stats -->
          <div class="rpg-stats">
            <div class="rpg-stat" v-for="s in rpgStats" :key="s.name">
              <span class="rs-name">{{ s.name }}</span>
              <div class="rs-bar">
                <div class="rs-fill" :style="{width: s.val+'%', background: s.color}"></div>
              </div>
              <span class="rs-val">{{ s.val }}</span>
            </div>
          </div>

          <!-- Unlocked abilities -->
          <div class="abilities">
            <div class="ab-pill" v-for="ab in abilities" :key="ab">
              <span class="ab-lock">✓</span> {{ ab }}
            </div>
          </div>
        </div>

        <!-- Achievement floating cards -->
        <div class="mini-card glass float-1">
          <span class="ach-icon">🏆</span>
          <div>
            <b>ACHIEVEMENT</b>
            <small>10+ Jahre unlocked!</small>
          </div>
        </div>
        <div class="mini-card glass float-2">
          <span class="ach-icon">&#x26A1;</span>
          <div>
            <b>SPEED RUN</b>
            <small>PageSpeed 95+</small>
          </div>
        </div>
        <div class="mini-card glass float-3">
          <span class="ach-icon">🤖</span>
          <div>
            <b>AI POWERED</b>
            <small>ChatGPT · Claude</small>
          </div>
        </div>

        <!-- Location badges -->
        <div class="location-row">
          <span class="loc-pill glass">📍 Ludwigsburg</span>
          <span class="loc-pill glass">📍 Stuttgart</span>
        </div>
      </div>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <div class="sh-bar"></div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  min-height: 100vh;
  display: flex; align-items: center;
  position: relative; overflow: hidden;
  padding: 120px 0 80px;
}

/* ── Blobs ── */
.blobs { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.blob {
  position: absolute; border-radius: 50%;
  filter: blur(80px); will-change: transform;
}
.blob-1 {
  width: 700px; height: 700px;
  top: -180px; right: -150px;
  background: radial-gradient(circle, rgba(249,115,22,.25) 0%, rgba(251,146,60,.1) 50%, transparent 70%);
  animation: blob-drift 12s ease-in-out infinite;
}
.blob-2 {
  width: 500px; height: 500px;
  bottom: -100px; left: -100px;
  background: radial-gradient(circle, rgba(120,80,255,.18) 0%, transparent 65%);
  animation: blob-drift 16s ease-in-out infinite reverse;
}
.blob-3 {
  width: 350px; height: 350px;
  top: 40%; left: 35%;
  background: radial-gradient(circle, rgba(249,115,22,.1) 0%, transparent 65%);
  animation: blob-drift 10s ease-in-out infinite 3s;
}
@keyframes blob-drift {
  0%,100% { transform: translate(0,0) scale(1); }
  33% { transform: translate(30px,-20px) scale(1.04); }
  66% { transform: translate(-15px,25px) scale(.97); }
}

/* ── Layout ── */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px; align-items: center;
  position: relative; z-index: 2;
}

/* ── Badge ── */
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 18px; border-radius: 100px;
  font-size: 12px; font-weight: 600;
  color: var(--text-muted); margin-bottom: 28px;
}
.badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
  animation: pulse-dot 2s infinite;
}
@keyframes pulse-dot { 0%,100%{opacity:1}50%{opacity:.35} }

/* ── Headline ── */
.hero-title { display: flex; flex-direction: column; gap: 2px; margin-bottom: 24px; }
.line-greeting {
  font-size: clamp(.9rem, 1.8vw, 1rem);
  font-weight: 400; color: var(--text-muted);
  letter-spacing: .04em; text-transform: uppercase;
}
.line-name {
  font-size: clamp(3.8rem, 9vw, 7rem);
  font-weight: 900; line-height: .95;
  letter-spacing: -.04em; color: var(--text);
}
.name-dot { color: var(--orange); }
.line-role {
  font-size: clamp(1.1rem, 2.4vw, 1.5rem);
  font-weight: 400; line-height: 1.3;
  margin-top: 4px;
}
.role-accent { font-weight: 700; color: var(--orange); margin-right: 6px; }
.role-light  { color: var(--text-muted); }

.hero-sub {
  font-size: 16px; color: var(--text-muted);
  line-height: 1.8; max-width: 460px;
  margin-bottom: 36px;
}
.hero-sub strong { color: var(--text); font-weight: 600; }

.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }

/* ── Stats ── */
.hero-stats { display: flex; gap: 12px; }
.stat {
  padding: 14px 22px; border-radius: 16px;
  text-align: center; transition: transform .3s var(--ease-spring);
}
.stat:hover { transform: translateY(-4px) scale(1.03); }
.sn {
  display: block;
  font-size: 1.7rem; font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}
.sl { font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing:.1em; }

/* ── Visual ── */
.hero-visual {
  position: relative; display: flex;
  justify-content: center; align-items: center;
  min-height: 460px;
  transition: transform .12s linear;
  will-change: transform;
}

/* Main glass card */
.main-card {
  padding: 28px; border-radius: 28px;
  width: 100%; max-width: 360px;
  position: relative; z-index: 2;
}
.mc-header {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 24px;
}
.mc-avatar {
  width: 52px; height: 52px; border-radius: 16px;
  background: var(--grad);
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; font-weight: 900; color: #fff;
  flex-shrink: 0;
}
.mc-info { flex: 1; }
.mc-name { display:block; font-size:17px; font-weight:700; color:var(--text); }
.mc-title { display:block; font-size:12px; color:var(--text-muted); }
.mc-status {
  display: flex; align-items: center; gap: 5px;
  font-size: 11px; color: var(--green); font-weight: 600;
}
.status-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--green); box-shadow: 0 0 6px var(--green);
  animation: pulse-dot 2s infinite;
}
.mc-divider { height: 1px; background: rgba(0,0,0,.06); margin-bottom: 20px; }

.mc-skills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.skill-pill {
  padding: 6px 14px; border-radius: 100px;
  background: rgba(249,115,22,.08);
  border: 1px solid rgba(249,115,22,.2);
  font-size: 12px; font-weight: 600; color: var(--orange);
  transition: all .25s var(--ease-spring);
}
.skill-pill:hover {
  background: var(--orange); color: #fff;
  transform: scale(1.05);
}

.mc-cta {
  display: flex; align-items: center;
  justify-content: space-between;
  padding: 14px 18px; border-radius: 16px;
  background: rgba(249,115,22,.06);
  border: 1px solid rgba(249,115,22,.15);
}
.mc-cta span { font-size: 13px; font-weight: 600; color: var(--text); }

/* Mini floating cards */
.mini-card {
  position: absolute;
  display: flex; align-items: center; gap: 10px;
  padding: 12px 16px; border-radius: 16px;
  white-space: nowrap; z-index: 3;
}
.mini-card span { font-size: 1.3rem; }
.mini-card b  { display:block; font-size:13px; font-weight:700; color:var(--text); }
.mini-card small { font-size:11px; color:var(--text-muted); }

.float-1 { top: 4%; right: -20px; animation: float 4.5s ease-in-out infinite; }
.float-2 { bottom: 28%; left: -20px; animation: float 5.5s ease-in-out infinite 1s; }
.float-3 { bottom: 4%; right: -10px; animation: float 4s ease-in-out infinite 2s; }

@keyframes float {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-10px); }
}

/* Location row */
.location-row {
  position: absolute; bottom: -10px; left: 50%;
  transform: translateX(-50%);
  display: flex; gap: 8px;
}
.loc-pill {
  padding: 6px 16px; border-radius: 100px;
  font-size: 11px; font-weight: 600;
  color: var(--text-muted); white-space: nowrap;
}

/* Scroll hint */
.scroll-hint {
  position: absolute; bottom: 40px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center;
  z-index: 2;
}
.sh-bar {
  width: 2px; height: 56px;
  background: linear-gradient(to bottom, var(--orange), transparent);
  border-radius: 1px;
  animation: sh-anim 2s ease-in-out infinite;
}
@keyframes sh-anim {
  0%,100% { opacity:.3; transform: scaleY(1); }
  50%     { opacity:1;  transform: scaleY(1.12); }
}

@media (max-width: 1024px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-visual { min-height: 380px; }
  .mini-card { display: none; }
}
@media (max-width: 640px) {
  .line-name { font-size: clamp(3rem, 16vw, 4rem); }
  .hero-actions { flex-direction: column; }
  .hero-stats { gap: 8px; }
  .stat { padding: 12px 16px; }
}

/* ── GAMING ELEMENTS ── */


/* Class badge */
.mc-class-badge {
  font-family: var(--mono);
  font-size: 9px; font-weight: 700;
  letter-spacing: .18em;
  color: var(--orange);
  background: rgba(249,115,22,.1);
  border: 1px solid rgba(249,115,22,.25);
  border-radius: 4px;
  padding: 2px 8px;
  margin-bottom: 4px;
  display: inline-block;
}

/* Level badge */
.mc-level {
  display: flex; flex-direction: column; align-items: center;
  background: var(--grad);
  border-radius: 12px;
  padding: 8px 14px;
  min-width: 52px;
}
.lvl-label {
  font-family: var(--mono);
  font-size: 9px; font-weight: 700;
  color: rgba(255,255,255,.8);
  letter-spacing: .15em;
}
.lvl-num {
  font-size: 24px; font-weight: 900;
  color: #fff; line-height: 1;
}

/* XP Bar */
.xp-section { margin: 16px 0; }
.xp-label {
  display: flex; justify-content: space-between;
  font-family: var(--mono);
  font-size: 10px; color: var(--text-muted);
  margin-bottom: 6px;
}
.xp-bar {
  height: 7px;
  background: rgba(0,0,0,.08);
  border-radius: 100px;
  overflow: hidden;
}
.xp-fill {
  height: 100%; width: 95%;
  background: linear-gradient(90deg, #f97316, #fdba74, #f97316);
  background-size: 200% 100%;
  border-radius: 100px;
  animation: xp-shine 2s linear infinite;
}
@keyframes xp-shine {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

/* RPG Stats */
.rpg-stats { display: flex; flex-direction: column; gap: 9px; margin-bottom: 16px; }
.rpg-stat { display: flex; align-items: center; gap: 10px; }
.rs-name {
  font-family: var(--mono);
  font-size: 10px; font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase; letter-spacing: .06em;
  width: 72px; flex-shrink: 0;
}
.rs-bar {
  flex: 1; height: 5px;
  background: rgba(0,0,0,.07);
  border-radius: 100px; overflow: hidden;
}
.rs-fill {
  height: 100%; border-radius: 100px;
  transition: width 1.4s cubic-bezier(.4,0,.2,1);
  box-shadow: 0 0 6px currentColor;
}
.rs-val {
  font-family: var(--mono);
  font-size: 10px; font-weight: 700;
  color: var(--orange); width: 26px; text-align: right;
}

/* Ability pills */
.abilities { display: flex; flex-wrap: wrap; gap: 6px; }
.ab-pill {
  padding: 5px 12px; border-radius: 8px;
  background: rgba(249,115,22,.07);
  border: 1px solid rgba(249,115,22,.2);
  font-size: 11px; font-weight: 700;
  color: var(--text-muted);
  letter-spacing: .03em;
  transition: all .25s var(--ease-spring);
  cursor: default;
}
.ab-pill:hover {
  background: var(--orange); color: #fff;
  transform: scale(1.06);
  box-shadow: 0 4px 14px rgba(249,115,22,.35);
}
.ab-lock { color: var(--green); margin-right: 2px; }

/* Achievement card glow on hover */
.mini-card:hover {
  box-shadow: var(--glass-shadow-lg), 0 0 20px rgba(249,115,22,.2);
  transform: translateY(-6px) scale(1.03);
}
.ach-icon { font-size: 1.4rem; }
</style>
