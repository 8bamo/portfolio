<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Typewriter effect
const phrases = [
  'Frontend Entwickler',
  'TYPO3 Spezialist',
  'Shopify Experte',
  'WordPress Profi',
  'Webflow & Framer',
  'UI/UX Enthusiast',
]
const typed = ref('')
const cursorVisible = ref(true)
let phraseIdx = 0
let charIdx = 0
let deleting = false

function typeLoop() {
  const current = phrases[phraseIdx]
  if (!deleting) {
    typed.value = current.slice(0, ++charIdx)
    if (charIdx === current.length) {
      deleting = true
      setTimeout(typeLoop, 1600)
      return
    }
  } else {
    typed.value = current.slice(0, --charIdx)
    if (charIdx === 0) {
      deleting = false
      phraseIdx = (phraseIdx + 1) % phrases.length
    }
  }
  setTimeout(typeLoop, deleting ? 48 : 80)
}

// Stat counter animation
const statRefs = ref<HTMLElement[]>([])
function animateStats() {
  statRefs.value.forEach(el => {
    const target = parseInt(el.dataset.target || '0')
    let current = 0
    const step = Math.max(1, Math.ceil(target / 40))
    const t = setInterval(() => {
      current = Math.min(current + step, target)
      el.textContent = current + '+'
      if (current >= target) clearInterval(t)
    }, 35)
  })
}

// Particle canvas
const canvasRef = ref<HTMLCanvasElement | null>(null)

function initParticles() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')!
  let W = canvas.width = canvas.offsetWidth
  let H = canvas.height = canvas.offsetHeight

  const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5, alpha: Math.random() * 0.5 + 0.1,
    })
  }

  const draw = () => {
    ctx.clearRect(0, 0, W, H)
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0 || p.x > W) p.vx *= -1
      if (p.y < 0 || p.y > H) p.vy *= -1
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(99,102,241,${p.alpha})`
      ctx.fill()
    })
    // draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }
    requestAnimationFrame(draw)
  }
  draw()

  window.addEventListener('resize', () => {
    W = canvas.width = canvas.offsetWidth
    H = canvas.height = canvas.offsetHeight
  })
}

onMounted(() => {
  setTimeout(typeLoop, 800)
  setTimeout(animateStats, 600)
  setTimeout(initParticles, 100)
})
</script>

<template>
  <section id="hero" aria-label="Willkommen – Yusuf Ahmed Webentwickler">
    <canvas ref="canvasRef" id="particle-canvas" aria-hidden="true"></canvas>

    <!-- Floating blobs -->
    <div class="blob blob-1" aria-hidden="true"></div>
    <div class="blob blob-2" aria-hidden="true"></div>

    <div class="hero-inner container">
      <!-- Content -->
      <div class="hero-content">
        <div class="hero-badge" role="status">
          <span class="badge-dot"></span>
          Verfügbar für neue Projekte
        </div>

        <h1 class="hero-title">
          <span class="line">Hallo, ich bin</span>
          <span class="line name-line">
            <span class="gradient-text">Yusuf Ahmed</span>
          </span>
          <span class="line typed-line">
            <span class="typed-text" aria-live="polite">{{ typed }}</span><span class="cursor-blink" aria-hidden="true">|</span>
          </span>
        </h1>

        <p class="hero-sub">
          Webentwickler aus <strong>Ludwigsburg</strong> mit über 10 Jahren Erfahrung.
          Ich entwickle professionelle Websites und Web-Apps für Kunden im Raum
          <strong>Ludwigsburg, Stuttgart</strong> und ganz Deutschland.
        </p>

        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary" id="hero-projects-btn">
            Projekte ansehen
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#contact" class="btn btn-secondary" id="hero-contact-btn">
            Jetzt anfragen
          </a>
        </div>

        <div class="hero-stats" aria-label="Erfahrung in Zahlen">
          <div class="stat">
            <span class="stat-num" ref="el => el && statRefs.push(el as HTMLElement)" data-target="10">10+</span>
            <span class="stat-label">Jahre Erfahrung</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="stat-num" ref="el => el && statRefs.push(el as HTMLElement)" data-target="50">50+</span>
            <span class="stat-label">Projekte</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="stat-num" ref="el => el && statRefs.push(el as HTMLElement)" data-target="15">15+</span>
            <span class="stat-label">Technologien</span>
          </div>
        </div>

        <!-- Local SEO keywords (visible, contextual) -->
        <div class="local-seo-tags" aria-label="Einsatzgebiete">
          <span>📍 Ludwigsburg</span>
          <span>📍 Stuttgart</span>
          <span>📍 Heilbronn</span>
          <span>📍 Bundesweit</span>
        </div>
      </div>

      <!-- Visual -->
      <div class="hero-visual" aria-hidden="true">
        <div class="avatar-wrap">
          <div class="avatar-ring-outer"></div>
          <div class="avatar-ring-inner"></div>
          <div class="avatar-core">
            <span class="avatar-initials">YA</span>
          </div>
          <div class="orbit orbit-1">
            <div class="orbit-pill">TYPO3</div>
          </div>
          <div class="orbit orbit-2">
            <div class="orbit-pill pill-2">Shopify</div>
          </div>
        </div>
        <div class="floating-cards">
          <div class="float-card card-1">
            <span>🚀</span> Fast Loading
          </div>
          <div class="float-card card-2">
            <span>♿</span> Barrierefrei
          </div>
          <div class="float-card card-3">
            <span>🔍</span> SEO-Ready
          </div>
        </div>
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
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
}
.blob-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(99,102,241,.15) 0%, transparent 70%);
  top: -100px; right: -100px;
  animation: blob-float 8s ease-in-out infinite;
}
.blob-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(168,85,247,.12) 0%, transparent 70%);
  bottom: -50px; left: 10%;
  animation: blob-float 12s ease-in-out infinite reverse;
}
@keyframes blob-float {
  0%,100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border: 1px solid rgba(99,102,241,.3);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: var(--primary-h);
  background: rgba(99,102,241,.08);
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
}
.badge-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
  animation: pulse-dot 2s infinite;
}
@keyframes pulse-dot {
  0%,100% { opacity:1; } 50% { opacity:.3; }
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
}
.hero-title .line { display: block; }
.name-line { margin: 4px 0; }

.typed-line {
  min-height: 1.2em;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  color: var(--text-muted);
  font-weight: 600;
}
.typed-text {
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cursor-blink {
  color: var(--primary);
  -webkit-text-fill-color: var(--primary);
  animation: blink .7s step-end infinite;
}
@keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }

.hero-sub {
  font-size: 16px;
  color: var(--text-muted);
  margin-bottom: 36px;
  max-width: 520px;
  line-height: 1.8;
}
.hero-sub strong { color: var(--text); }

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 24px;
}
.stat { text-align: center; }
.stat-num {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-size: 11px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: .08em;
  font-weight: 500;
}
.stat-div {
  width: 1px; height: 40px;
  background: var(--border);
}

/* Local SEO tags */
.local-seo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.local-seo-tags span {
  padding: 4px 12px;
  background: rgba(99,102,241,.08);
  border: 1px solid rgba(99,102,241,.2);
  border-radius: 100px;
  font-size: 12px;
  color: var(--text-muted);
}

/* ─── HERO VISUAL ─── */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 460px;
}
.avatar-wrap { position: relative; width: 280px; height: 280px; }
.avatar-ring-outer {
  position: absolute;
  inset: -30px;
  border-radius: 50%;
  border: 1px solid rgba(99,102,241,.15);
  animation: orbit-spin 12s linear infinite;
}
.avatar-ring-inner {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 1px solid rgba(168,85,247,.15);
  animation: orbit-spin 8s linear infinite reverse;
}
.avatar-core {
  width: 280px; height: 280px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0f1435, #1a0a2e);
  border: 3px solid rgba(99,102,241,.4);
  box-shadow: 0 0 60px rgba(99,102,241,.3), inset 0 0 40px rgba(99,102,241,.08);
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-initials {
  font-size: 5rem;
  font-weight: 900;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  user-select: none;
}
@keyframes orbit-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.orbit {
  position: absolute;
  inset: -40px;
  border-radius: 50%;
  animation: orbit-spin linear infinite;
  pointer-events: none;
}
.orbit-1 { animation-duration: 10s; }
.orbit-2 { inset: -70px; animation-duration: 16s; animation-direction: reverse; }

.orbit-pill {
  position: absolute;
  top: -14px; left: 50%;
  transform: translateX(-50%);
  padding: 5px 14px;
  background: rgba(99,102,241,.2);
  border: 1px solid rgba(99,102,241,.4);
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-h);
  white-space: nowrap;
}
.pill-2 {
  background: rgba(168,85,247,.2);
  border-color: rgba(168,85,247,.4);
  color: #c084fc;
}

/* Float cards */
.floating-cards { position: absolute; inset: 0; pointer-events: none; }
.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba(255,255,255,.07);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
  animation: float 4s ease-in-out infinite;
}
.card-1 { top: 5%; right: -10px; animation-delay: 0s; }
.card-2 { bottom: 30%; left: -20px; animation-delay: 1.5s; }
.card-3 { bottom: 8%; right: 0; animation-delay: 0.8s; }
@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 32px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 2;
  animation: scroll-fade 2s ease-in-out infinite;
}
.scroll-hint span {
  font-size: 10px;
  color: var(--text-dim);
  letter-spacing: .12em;
  text-transform: uppercase;
  font-family: var(--mono);
}
.scroll-line {
  width: 1px; height: 50px;
  background: linear-gradient(to bottom, var(--primary), transparent);
}
@keyframes scroll-fade {
  0%,100% { opacity:.4; transform: translateX(-50%) translateY(0); }
  50% { opacity:1; transform: translateX(-50%) translateY(8px); }
}

@media (max-width: 1024px) {
  .hero-visual { display: none; }
  .hero-inner { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .hero-actions { flex-direction: column; }
  .hero-stats { gap: 16px; }
}
</style>
