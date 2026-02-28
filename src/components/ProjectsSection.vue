<script setup lang="ts">
const projects = [
  {
    id: 'anderthalb-bar',
    emoji: '🍹',
    color: 'amber',
    category: 'WordPress ⭐ Kundenreferenz',
    num: '01',
    title: 'anderthalbbar Stuttgart',
    desc: 'WordPress-Website für eine Bar an der Königstraße Stuttgart. Editorial-Design mit Sidebar-Navigation, stimmungsvoller Fotografie, Event-Bereich und Kontaktformular.',
    tags: ['WordPress', 'Editorial Design', 'Responsive', 'SEO'],
    link: 'https://anderthalb-bar.de',
    live: true,
    featured: true,
  },
  {
    id: 'ravida-immofinanz',
    emoji: '🏠',
    color: 'teal',
    category: 'WordPress ⭐ Kundenreferenz',
    num: '02',
    title: 'Ravida Immofinanz',
    desc: 'WordPress-Website für ein Immobilien- und Finanzunternehmen. Professionelle Unternehmensdarstellung mit klarer Struktur, Leistungsübersicht und Kontaktmöglichkeiten.',
    tags: ['WordPress', 'Immobilien', 'Responsive', 'SEO'],
    link: 'https://ravida-immofinanz.de',
    live: true,
  },
  {
    id: 'typo3-website',
    emoji: '🏢',
    color: 'indigo',
    category: 'CMS / TYPO3',
    num: '03',
    title: 'Corporate Website TYPO3',
    desc: 'Barrierefreie, SEO-optimierte Unternehmenswebsite mit TYPO3, strukturierten Daten und schnellen Core Web Vitals. Optimiert für lokale Suchanfragen im Raum Stuttgart.',
    tags: ['TYPO3', 'SEO', 'Barrierefreiheit', 'Responsive'],
    link: 'https://github.com/8bamo',
  },
  {
    id: 'mystu-shop',
    emoji: '🛒',
    color: 'cyan',
    category: 'Shopify ⭐ Eigenes Projekt',
    num: '04',
    title: 'mystu.shop',
    desc: 'Eigener Shopify-Shop mit individuellem Design, optimierter Produktpräsentation und mobilem Checkout. Zeigt meine Full-Stack-Shopify-Kompetenz vom Theme bis zur Conversion-Optimierung.',
    tags: ['Shopify', 'E-Commerce', 'Custom Theme', 'Responsive'],
    link: 'https://mystu.shop',
    live: true,
  },
]

const colorMap: Record<string, string> = {
  amber:  'rgba(245,158,11',
  teal:   'rgba(20,184,166',
  indigo: 'rgba(99,102,241',
  cyan:   'rgba(6,182,212',
  purple: 'rgba(168,85,247',
  green:  'rgba(34,197,94',
  orange: 'rgba(249,115,22',
  pink:   'rgba(236,72,153',
}
</script>

<template>
  <section id="projects" class="section" aria-labelledby="projects-heading">
    <div class="container">
      <header class="section-header reveal">
        <span class="section-tag">03 / Projekte</span>
        <h2 id="projects-heading" class="section-title">Ausgewählte Arbeiten</h2>
        <p class="section-sub">
          Projekte für Kunden aus Ludwigsburg, Stuttgart und ganz Deutschland.
        </p>
      </header>

      <div class="projects-grid">
        <article
          v-for="(p, i) in projects"
          :key="p.id"
          :id="`project-${p.id}`"
          class="project-card glass reveal"
          :class="[`reveal-delay-${(i % 3) + 1}`, { featured: p.featured }]"
          :style="{ '--accent-color': colorMap[p.color] }"
        >
          <div class="pc-image">
            <div class="pc-emoji" aria-hidden="true">{{ p.emoji }}</div>
            <!-- Live badge -->
            <div v-if="p.live" class="pc-live-badge">
              <span class="live-dot"></span> Live
            </div>
            <div class="pc-overlay">
              <div class="pc-tags-overlay">
                <span v-for="tag in p.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div class="pc-body">
            <div class="pc-meta">
              <span class="pc-num">{{ p.num }}</span>
              <span class="pc-category">{{ p.category }}</span>
            </div>
            <h3 class="pc-title">{{ p.title }}</h3>
            <p class="pc-desc">{{ p.desc }}</p>
            <div class="pc-footer">
              <a :href="p.link" target="_blank" rel="noopener noreferrer" class="pc-link" :id="`proj-link-${p.id}`">
                {{ p.live ? 'Website ansehen' : 'Mehr erfahren' }}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <div class="projects-cta reveal">
        <a href="https://github.com/8bamo" target="_blank" rel="noopener noreferrer" class="btn btn-outline" id="all-projects-github-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yusuf-ahmed-lb/" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-linkedin" id="all-projects-linkedin-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-sub {
  color: var(--text-muted);
  font-size: 16px;
  margin-top: 12px;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}
.project-card {
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform .35s var(--ease), border-color .35s, box-shadow .35s;
  display: flex;
  flex-direction: column;
  will-change: transform;
}
.project-card:hover {
  transform: translateY(-8px) perspective(800px) rotateX(2deg);
  border-color: rgba(var(--accent-color), .4);
  box-shadow: 0 0 40px rgba(var(--accent-color), .15), var(--shadow-md);
}
.project-card.featured {
  border-color: rgba(245,158,11,.35);
  box-shadow: 0 0 30px rgba(245,158,11,.12);
}

/* Live badge */
.pc-live-badge {
  position: absolute;
  top: 12px; right: 12px;
  display: flex; align-items: center; gap: 6px;
  padding: 5px 12px;
  background: rgba(34,197,94,.15);
  border: 1px solid rgba(34,197,94,.35);
  border-radius: 100px;
  font-size: 11px; font-weight: 700;
  color: #4ade80;
  z-index: 1;
  backdrop-filter: blur(8px);
}
.live-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px #22c55e;
  animation: pulse-dot 2s infinite;
}
@keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:.3; } }

.pc-image {
  height: 180px;
  position: relative;
  background: linear-gradient(135deg,
    rgba(var(--accent-color), .12) 0%,
    rgba(0,0,0,.3) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.pc-emoji {
  font-size: 4.5rem;
  filter: drop-shadow(0 0 20px rgba(var(--accent-color), .4));
  transition: transform .3s;
}
.project-card:hover .pc-emoji { transform: scale(1.15); }

.pc-overlay {
  position: absolute;
  inset: 0;
  background: rgba(6,8,17,.7);
  opacity: 0;
  transition: opacity .3s;
  display: flex;
  align-items: flex-end;
  padding: 16px;
}
.project-card:hover .pc-overlay { opacity: 1; }

.pc-tags-overlay {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.pc-tags-overlay span {
  padding: 4px 10px;
  background: rgba(var(--accent-color), .2);
  border: 1px solid rgba(var(--accent-color), .4);
  border-radius: 100px;
  font-size: 11px;
  font-weight: 600;
  color: var(--text);
}

.pc-body {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.pc-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.pc-num {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-dim);
}
.pc-category {
  font-size: 11px;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: .06em;
}
.pc-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text);
}
.pc-desc {
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.7;
  flex: 1;
  margin-bottom: 20px;
}
.pc-footer { margin-top: auto; }
.pc-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--primary);
  transition: all .25s;
}
.pc-link:hover { color: var(--primary-h); gap: 10px; }

.projects-cta {
  text-align: center;
}

@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
