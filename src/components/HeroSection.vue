<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// ── Kinetic typography typewriter ──
const phrases: string[] = [
  'Frontend Entwickler',
  'TYPO3 Spezialist',
  'Shopify Experte',
  'WordPress Profi',
  'Webflow & Framer',
  'UI/UX Enthusiast',
]
const typed = ref('')
let phraseIdx = 0, charIdx = 0, deleting = false
function typeLoop() {
  const current: string = phrases[phraseIdx] ?? ''
  if (!deleting) {
    typed.value = current.slice(0, ++charIdx)
    if (charIdx === current.length) { deleting = true; setTimeout(typeLoop, 1600); return }
  } else {
    typed.value = current.slice(0, --charIdx)
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length }
  }
  setTimeout(typeLoop, deleting ? 48 : 80)
}

// ── Stat counters ──
const statRefs = ref<HTMLElement[]>([])
function pushStatRef(el: unknown) {
  if (el instanceof HTMLElement) statRefs.value.push(el)
}
function animateStats() {
  statRefs.value.forEach(el => {
    const target = parseInt(el.dataset['target'] ?? '0', 10)
    let count = 0
    const step = Math.max(1, Math.ceil(target / 40))
    const t = setInterval(() => {
      count = Math.min(count + step, target)
      el.textContent = count + '+'
      if (count >= target) clearInterval(t)
    }, 35)
  })
}

// ── Particle canvas ──
interface Particle { x: number; y: number; vx: number; vy: number; r: number; alpha: number }
const canvasRef = ref<HTMLCanvasElement | null>(null)
function initParticles() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')!
  let W = canvas.width = canvas.offsetWidth
  let H = canvas.height = canvas.offsetHeight
  const particles: Particle[] = Array.from({ length: 70 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.4 + 0.4, alpha: Math.random() * 0.45 + 0.08,
  }))
  const draw = () => {
    ctx.clearRect(0, 0, W, H)
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0 || p.x > W) p.vx *= -1
      if (p.y < 0 || p.y > H) p.vy *= -1
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(99,102,241,${p.alpha})`; ctx.fill()
    }
    for (let i = 0; i < particles.length; i++) {
      const pi = particles[i] as Particle
      for (let j = i + 1; j < particles.length; j++) {
        const pj = particles[j] as Particle
        const dx = pi.x - pj.x, dy = pi.y - pj.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 110) {
          ctx.beginPath(); ctx.moveTo(pi.x, pi.y); ctx.lineTo(pj.x, pj.y)
          ctx.strokeStyle = `rgba(99,102,241,${0.07 * (1 - dist / 110)})`
          ctx.lineWidth = 0.7; ctx.stroke()
        }
      }
    }
    requestAnimationFrame(draw)
  }
  draw()
  window.addEventListener('resize', () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight })
}

// ── 3D CSS cube auto-rotate ──
const cubeRotY = ref(0)
let cubeRaf = 0
function rotateCube() {
  cubeRotY.value = (cubeRotY.value + 0.25) % 360
  cubeRaf = requestAnimationFrame(rotateCube)
}

// ── Mouse parallax on hero visual ──
const mouseX = ref(0), mouseY = ref(0)
function onMouseMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width - 0.5) * 20
  mouseY.value = ((e.clientY - rect.top) / rect.height - 0.5) * 20
}

onMounted(() => {
  setTimeout(typeLoop, 800)
  setTimeout(animateStats, 600)
  setTimeout(initParticles, 100)
  cubeRaf = requestAnimationFrame(rotateCube)
})
onUnmounted(() => cancelAnimationFrame(cubeRaf))
</script>

<template>
  <section id="hero" aria-label="Willkommen – Yusuf Ahmed Webentwickler" @mousemove="onMouseMove">
    <canvas ref="canvasRef" id="particle-canvas" aria-hidden="true"></canvas>

    <!-- Organic blob shapes (2026 trend: Organic Shapes) -->
    <div class="blob blob-1" aria-hidden="true"></div>
    <div class="blob blob-2" aria-hidden="true"></div>
    <div class="blob blob-3" aria-hidden="true"></div>

    <div class="hero-inner container">
      <!-- ── LEFT: Content ── -->
      <div class="hero-content">
        <div class="hero-badge" role="status">
          <span class="badge-dot"></span>
          Verfügbar für neue Projekte
        </div>

        <!-- Kinetic typography (2026 trend) -->
        <h1 class="hero-title">
          <span class="line greeting">Hallo, ich bin</span>
          <span class="line name-line">
            <span class="gradient-text kinetic-name">Yusuf Ahmed</span>
          </span>
          <span class="line typed-line" aria-live="polite">
            <span class="typed-text">{{ typed }}</span><span class="cursor-blink" aria-hidden="true">|</span>
          </span>
        </h1>

        <p class="hero-sub">
          Webentwickler aus <strong>Ludwigsburg</strong> mit über 10 Jahren Erfahrung.
          Professionelle Websites für Kunden im Raum
          <strong>Ludwigsburg & Stuttgart</strong>.
        </p>

        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary magnetic" id="hero-projects-btn">
            Projekte ansehen
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#contact" class="btn btn-secondary" id="hero-contact-btn">Jetzt anfragen</a>
        </div>

        <div class="hero-stats" aria-label="Erfahrung in Zahlen">
          <div class="stat">
            <span class="stat-num" :ref="pushStatRef" data-target="10">10+</span>
            <span class="stat-label">Jahre Erfahrung</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="stat-num" :ref="pushStatRef" data-target="50">50+</span>
            <span class="stat-label">Projekte</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="stat-num" :ref="pushStatRef" data-target="15">15+</span>
            <span class="stat-label">Technologien</span>
          </div>
        </div>

        <div class="local-seo-tags" aria-label="Einsatzgebiete">
          <span>📍 Ludwigsburg</span>
          <span>📍 Stuttgart</span>
          <span>📍 Heilbronn</span>
          <span>📍 Bundesweit</span>
        </div>
      </div>

      <!-- ── RIGHT: 3D Scene ── -->
      <div class="hero-visual" aria-hidden="true"
        :style="{ transform: `perspective(1000px) rotateY(${mouseX * 0.4}deg) rotateX(${-mouseY * 0.4}deg)` }">

        <!-- CSS 3D Cube -->
        <div class="cube-scene">
          <div class="cube" :style="{ transform: `rotateX(25deg) rotateY(${cubeRotY}deg)` }">
            <div class="cube-face front"></div>
            <div class="cube-face back"></div>
            <div class="cube-face left"></div>
            <div class="cube-face right"></div>
            <div class="cube-face top"></div>
            <div class="cube-face bottom"></div>
          </div>
        </div>

        <!-- Avatar core -->
        <div class="avatar-core">
          <span class="avatar-initials">YA</span>
        </div>

        <!-- Floating orbit rings -->
        <div class="ring ring-a"></div>
        <div class="ring ring-b"></div>

        <!-- Orbit pills -->
        <div class="orbit-pill-wrap pill-wrap-1">
          <div class="orbit-pill">TYPO3</div>
        </div>
        <div class="orbit-pill-wrap pill-wrap-2">
          <div class="orbit-pill pill-cyan">Shopify</div>
        </div>
        <div class="orbit-pill-wrap pill-wrap-3">
          <div class="orbit-pill pill-purple">Vue.js</div>
        </div>

        <!-- Micro-interaction cards -->
        <div class="float-card card-1">🚀 Fast Loading</div>
        <div class="float-card card-2">♿ Barrierefrei</div>
        <div class="float-card card-3">🔍 SEO-Ready</div>
      </div>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <span>Scroll</span>
      <div class="scroll-line"></div>
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
  padding: 100px 0 60px;
}

#particle-canvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  z-index: 0;
}

/* ── Organic blobs (2026 trend) ── */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  will-change: transform;
}
.blob-1 {
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(99,102,241,.13) 0%, transparent 70%);
  top: -150px; right: -150px;
  animation: blob-morph1 9s ease-in-out infinite;
}
.blob-2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(168,85,247,.10) 0%, transparent 70%);
  bottom: -80px; left: 5%;
  animation: blob-morph2 13s ease-in-out infinite;
}
.blob-3 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(6,182,212,.08) 0%, transparent 70%);
  top: 30%; left: 30%;
  animation: blob-morph1 7s ease-in-out infinite reverse;
}
@keyframes blob-morph1 {
  0%,100% { transform: translate(0,0) scale(1); border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%; }
  33%      { transform: translate(20px,-15px) scale(1.05); border-radius: 40% 60% 45% 55% / 60% 40% 55% 45%; }
  66%      { transform: translate(-10px,20px) scale(0.97); border-radius: 55% 45% 60% 40% / 40% 55% 45% 60%; }
}
@keyframes blob-morph2 {
  0%,100% { transform: translate(0,0) scale(1); }
  50%      { transform: translate(-20px,-30px) scale(1.08); }
}

/* ── Layout ── */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* ── Badge ── */
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 18px;
  border: 1px solid rgba(99,102,241,.3);
  border-radius: 100px; font-size: 13px; font-weight: 500;
  color: var(--primary-h);
  background: rgba(99,102,241,.08);
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
}
.badge-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
  animation: pulse-dot 2s infinite;
}
@keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:.3; } }

/* ── Kinetic Typography (2026 trend) ── */
.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900; line-height: 1.1;
  margin-bottom: 24px;
}
.hero-title .line { display: block; }
.greeting { opacity: .8; }
.name-line { margin: 4px 0; }

/* Kinetic name: subtle letter-spacing animation */
.kinetic-name {
  display: inline-block;
  animation: kinetic-expand 4s ease-in-out infinite alternate;
}
@keyframes kinetic-expand {
  0%   { letter-spacing: -1px; }
  100% { letter-spacing: 2px; }
}

.typed-line {
  min-height: 1.2em;
  font-size: clamp(1.3rem, 3vw, 2rem);
  color: var(--text-muted); font-weight: 600;
}
.typed-text {
  background: var(--grad);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.cursor-blink {
  color: var(--primary); -webkit-text-fill-color: var(--primary);
  animation: blink .7s step-end infinite;
}
@keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }

.hero-sub {
  font-size: 16px; color: var(--text-muted);
  margin-bottom: 36px; max-width: 520px; line-height: 1.8;
}
.hero-sub strong { color: var(--text); }

/* ── CTA Buttons ── */
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; }

/* Magnetic micro-interaction (2026 trend) */
.magnetic {
  transition: transform .2s var(--ease, cubic-bezier(.4,0,.2,1)), box-shadow .2s;
}
.magnetic:hover { transform: translateY(-3px) scale(1.04); }

/* ── Stats ── */
.hero-stats { display: flex; align-items: center; gap: 28px; margin-bottom: 24px; }
.stat { text-align: center; }
.stat-num {
  display: block; font-size: 2rem; font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.stat-label { font-size: 11px; color: var(--text-dim); text-transform: uppercase; letter-spacing:.08em; font-weight:500; }
.stat-div { width:1px; height:40px; background: var(--border); }

/* ── Local SEO tags ── */
.local-seo-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.local-seo-tags span {
  padding: 4px 12px;
  background: rgba(99,102,241,.08);
  border: 1px solid rgba(99,102,241,.2);
  border-radius: 100px; font-size: 12px; color: var(--text-muted);
}

/* ── 3D Hero Visual ── */
.hero-visual {
  position: relative;
  display: flex; justify-content: center; align-items: center;
  min-height: 480px;
  transition: transform .1s linear;
  will-change: transform;
}

/* CSS 3D Cube */
.cube-scene {
  position: absolute;
  width: 180px; height: 180px;
  perspective: 600px;
}
.cube {
  width: 180px; height: 180px;
  transform-style: preserve-3d;
  will-change: transform;
}
.cube-face {
  position: absolute;
  width: 180px; height: 180px;
  border: 1.5px solid rgba(99,102,241,.2);
  background: linear-gradient(135deg, rgba(99,102,241,.06) 0%, rgba(168,85,247,.04) 100%);
  backdrop-filter: blur(2px);
}
.front  { transform: rotateY(0deg)   translateZ(90px); }
.back   { transform: rotateY(180deg) translateZ(90px); }
.left   { transform: rotateY(-90deg) translateZ(90px); }
.right  { transform: rotateY(90deg)  translateZ(90px); }
.top    { transform: rotateX(90deg)  translateZ(90px); }
.bottom { transform: rotateX(-90deg) translateZ(90px); }

/* Avatar core */
.avatar-core {
  position: relative;
  width: 180px; height: 180px; border-radius: 50%;
  background: linear-gradient(135deg, #0f1435, #1a0a2e);
  border: 3px solid rgba(99,102,241,.45);
  box-shadow: 0 0 60px rgba(99,102,241,.3), inset 0 0 40px rgba(99,102,241,.08);
  display: flex; align-items: center; justify-content: center;
  z-index: 2;
}
.avatar-initials {
  font-size: 4rem; font-weight: 900;
  background: var(--grad);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  user-select: none;
  animation: initials-pulse 3s ease-in-out infinite;
}
@keyframes initials-pulse {
  0%,100% { filter: drop-shadow(0 0 8px rgba(99,102,241,.5)); }
  50%      { filter: drop-shadow(0 0 20px rgba(168,85,247,.8)); }
}

/* Orbit rings */
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid transparent;
  will-change: transform;
}
.ring-a {
  width: 280px; height: 280px;
  border-color: rgba(99,102,241,.2);
  animation: ring-tilt-a 10s linear infinite;
}
.ring-b {
  width: 360px; height: 360px;
  border-color: rgba(168,85,247,.13);
  animation: ring-tilt-b 16s linear infinite reverse;
}
@keyframes ring-tilt-a {
  from { transform: rotateX(65deg) rotateZ(0deg); }
  to   { transform: rotateX(65deg) rotateZ(360deg); }
}
@keyframes ring-tilt-b {
  from { transform: rotateX(50deg) rotateZ(0deg); }
  to   { transform: rotateX(50deg) rotateZ(360deg); }
}

/* Orbit pills */
.orbit-pill-wrap {
  position: absolute;
  animation: orbit-pill-anim linear infinite;
  transform-origin: center;
}
.pill-wrap-1 { width: 280px; height: 280px; animation-duration: 8s; top: 50%; left: 50%; margin: -140px; }
.pill-wrap-2 { width: 360px; height: 360px; animation-duration: 13s; top: 50%; left: 50%; margin: -180px; animation-direction: reverse; }
.pill-wrap-3 { width: 220px; height: 220px; animation-duration: 11s; top: 50%; left: 50%; margin: -110px; animation-delay: -4s; }

@keyframes orbit-pill-anim {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.orbit-pill {
  position: absolute;
  top: -14px; left: 50%;
  transform: translateX(-50%) rotate(0deg);
  animation: counter-rotate linear infinite;
  padding: 5px 14px;
  background: rgba(99,102,241,.2);
  border: 1px solid rgba(99,102,241,.4);
  border-radius: 100px;
  font-size: 11px; font-weight: 700; color: var(--primary-h);
  white-space: nowrap;
}
.pill-wrap-1 .orbit-pill { animation-duration: 8s; }
.pill-wrap-2 .orbit-pill { animation-duration: 13s; animation-direction: reverse; }
.pill-wrap-3 .orbit-pill { animation-duration: 11s; }

.pill-cyan   { background: rgba(6,182,212,.2);  border-color: rgba(6,182,212,.4);  color: #22d3ee; }
.pill-purple { background: rgba(168,85,247,.2); border-color: rgba(168,85,247,.4); color: #c084fc; }

@keyframes counter-rotate {
  from { transform: translateX(-50%) rotate(0deg); }
  to   { transform: translateX(-50%) rotate(-360deg); }
}

/* Float cards – micro-interactions */
.float-card {
  position: absolute;
  display: flex; align-items: center; gap: 8px;
  padding: 10px 16px;
  background: rgba(255,255,255,.07);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 10px;
  font-size: 12px; font-weight: 600; color: var(--text);
  white-space: nowrap;
  cursor: default;
  transition: transform .25s, border-color .25s, box-shadow .25s;
  animation: float-anim 4s ease-in-out infinite;
  z-index: 3;
}
.float-card:hover {
  transform: translateY(-6px) scale(1.06) !important;
  border-color: rgba(99,102,241,.4);
  box-shadow: 0 8px 24px rgba(99,102,241,.25);
  animation-play-state: paused;
}
.card-1 { top: 8%; right: -15px; animation-delay: 0s; }
.card-2 { bottom: 28%; left: -20px; animation-delay: 1.5s; }
.card-3 { bottom: 6%; right: 5px; animation-delay: 0.8s; }
@keyframes float-anim {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}

/* Scroll hint */
.scroll-hint {
  position: absolute; bottom: 32px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  z-index: 2;
  animation: scroll-fade 2s ease-in-out infinite;
}
.scroll-hint span { font-size: 10px; color: var(--text-dim); letter-spacing:.12em; text-transform:uppercase; font-family: var(--mono); }
.scroll-line { width:1px; height:50px; background: linear-gradient(to bottom, var(--primary), transparent); }
@keyframes scroll-fade {
  0%,100% { opacity:.4; transform: translateX(-50%) translateY(0); }
  50%      { opacity:1;  transform: translateX(-50%) translateY(8px); }
}

@media (max-width: 1024px) {
  .hero-visual { display: none; }
  .hero-inner  { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .hero-actions { flex-direction: column; }
  .hero-stats   { gap: 16px; }
}
</style>
