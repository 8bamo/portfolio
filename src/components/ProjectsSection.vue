<script setup lang="ts">
const projects = [
  {
    id: 'typo3-website',
    emoji: '🏢',
    color: 'indigo',
    category: 'CMS / TYPO3',
    num: '01',
    title: 'Corporate Website TYPO3',
    desc: 'Barrierefreie, SEO-optimierte Unternehmenswebsite mit TYPO3, strukturierten Daten und schnellen Core Web Vitals. Optimiert für lokale Suchanfragen im Raum Stuttgart.',
    tags: ['TYPO3', 'SEO', 'Barrierefreiheit', 'Responsive'],
    link: 'https://github.com/8bamo',
  },
  {
    id: 'shopify-store',
    emoji: '🛒',
    color: 'cyan',
    category: 'E-Commerce ⭐ Featured',
    num: '02',
    title: 'Shopify Online-Shop',
    desc: 'Vollständig individualisierter Shopify-Shop mit Custom Theme, Produktfiltern, Checkout-Optimierung und Conversion-Tracking. Umsatzsteigerung durch UX-Verbesserungen.',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
    link: 'https://github.com/8bamo',
    featured: true,
  },
  {
    id: 'webflow-landing',
    emoji: '⚡',
    color: 'purple',
    category: 'Web Design',
    num: '03',
    title: 'Webflow Landing Page',
    desc: 'Hochkonvertierende Landing Page in Webflow mit Micro-Animationen, A/B-Test-Struktur, mobilem Design und Page Speed Score 95+.',
    tags: ['Webflow', 'Figma', 'Animation', 'CRO'],
    link: 'https://github.com/8bamo',
  },
  {
    id: 'wordpress-portal',
    emoji: '📰',
    color: 'green',
    category: 'WordPress',
    num: '04',
    title: 'WordPress News-Portal',
    desc: 'Skalierbares News-Portal mit Custom Plugin-Entwicklung, SEO-Optimierung via Yoast, Schema-Markup und schnellem CDN-Caching.',
    tags: ['WordPress', 'PHP', 'MySQL', 'SEO'],
    link: 'https://github.com/8bamo',
  },
  {
    id: 'vue-webapp',
    emoji: '🔧',
    color: 'orange',
    category: 'Vue.js / Frontend',
    num: '05',
    title: 'Vue.js Web-App',
    desc: 'Komplexe Single-Page-Application mit Vue 3, TypeScript, Pinia State Management und REST-API-Integration. Vollständig responsiv und zugänglich.',
    tags: ['Vue.js', 'TypeScript', 'Pinia', 'REST API'],
    link: 'https://github.com/8bamo',
  },
  {
    id: 'portfolio',
    emoji: '✨',
    color: 'pink',
    category: 'Portfolio',
    num: '06',
    title: 'Dieses Portfolio',
    desc: 'Handcrafted Portfolio in Vue.js mit Particle-Canvas, Glassmorphism, Scroll-Animationen und vollständiger SEO-Optimierung für Ludwigsburg & Stuttgart.',
    tags: ['Vue.js', 'TypeScript', 'SEO', 'Animation'],
    link: 'https://github.com/8bamo/portfolio',
  },
]

const colorMap: Record<string, string> = {
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
                Mehr erfahren
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <div class="projects-cta reveal">
        <a href="https://github.com/8bamo" target="_blank" rel="noopener noreferrer" class="btn btn-outline" id="all-projects-github-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          Alle Projekte auf GitHub
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
  transition: all .35s var(--ease);
  display: flex;
  flex-direction: column;
}
.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(var(--accent-color), .4);
  box-shadow: 0 0 40px rgba(var(--accent-color), .15), var(--shadow-md);
}
.project-card.featured {
  border-color: rgba(99,102,241,.3);
  box-shadow: 0 0 30px rgba(99,102,241,.1);
}

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
