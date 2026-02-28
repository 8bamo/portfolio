<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        // animate skill bars
        e.target.querySelectorAll<HTMLElement>('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.w || '0%'
        })
      }
    }),
    { threshold: 0.15 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})

const categories = [
  {
    id: 'cms',
    icon: '🌐',
    title: 'CMS & Plattformen',
    skills: [
      { name: 'TYPO3', pct: 90 },
      { name: 'WordPress', pct: 92 },
      { name: 'Shopify', pct: 88 },
      { name: 'Webflow', pct: 85 },
      { name: 'Framer', pct: 80 },
      { name: 'Wix', pct: 75 },
    ],
  },
  {
    id: 'frontend',
    icon: '🖥️',
    title: 'Frontend',
    skills: [
      { name: 'HTML5 & CSS3', pct: 98 },
      { name: 'JavaScript / TypeScript', pct: 93 },
      { name: 'Vue.js', pct: 85 },
      { name: 'Bootstrap & Tailwind', pct: 92 },
      { name: 'Responsive Design', pct: 96 },
      { name: 'Barrierefreiheit (WCAG)', pct: 88 },
    ],
  },
  {
    id: 'design',
    icon: '🎨',
    title: 'Design & UX',
    skills: [
      { name: 'Figma', pct: 87 },
      { name: 'UI/UX Design', pct: 84 },
      { name: 'SEO On-Page', pct: 90 },
      { name: 'Performance Optimierung', pct: 88 },
    ],
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'KI-Tools & Automation',
    skills: [
      { name: 'ChatGPT / Claude', pct: 92 },
      { name: 'GitHub Copilot', pct: 88 },
      { name: 'Midjourney / DALL-E', pct: 82 },
      { name: 'KI-gestützte Workflows', pct: 87 },
    ],
  },
]

const techPills = [
  'TYPO3','WordPress','Shopify','Webflow','Framer','Wix',
  'HTML5','CSS3','JavaScript','TypeScript','Vue.js',
  'Bootstrap','Tailwind CSS','Figma','SEO','Barrierefreiheit',
  'Responsive Design','Git',
  'ChatGPT','Claude','Midjourney','GitHub Copilot','KI-Workflows',
]
</script>

<template>
  <section id="skills" class="section section-alt" aria-labelledby="skills-heading">
    <div class="container">
      <header class="section-header reveal">
        <span class="section-tag">02 / Skills</span>
        <h2 id="skills-heading" class="section-title">Mein Tech-Stack</h2>
        <p class="section-sub">
          Über 10 Jahre Erfahrung mit den wichtigsten Web-Technologien —
          von klassischem CMS bis zu modernem Framework und KI-Tools.
        </p>
      </header>

      <div class="skills-grid">
        <div
          v-for="(cat, i) in categories"
          :key="cat.id"
          :id="`skill-cat-${cat.id}`"
          class="skill-cat glass reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="cat-icon" aria-hidden="true">{{ cat.icon }}</div>
          <h3 class="cat-title">{{ cat.title }}</h3>
          <div class="skill-list">
            <div v-for="s in cat.skills" :key="s.name" class="skill-item">
              <div class="si-top">
                <span>{{ s.name }}</span>
                <span>{{ s.pct }}%</span>
              </div>
              <div class="skill-bar" role="progressbar" :aria-valuenow="s.pct" :aria-label="s.name">
                <div
                  class="skill-fill"
                  :data-w="`${s.pct}%`"
                  style="width:0"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech pills -->
      <div class="tech-cloud reveal" aria-label="Technologien im Überblick">
        <span
          v-for="pill in techPills"
          :key="pill"
          class="cloud-item"
        >{{ pill }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-sub {
  color: var(--text-muted);
  font-size: 16px;
  margin-top: 12px;
  max-width: 560px;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}
.skill-cat {
  padding: 32px;
  border-radius: var(--radius);
  transition: all .3s var(--ease);
}
.skill-cat:hover {
  border-color: var(--border-glow);
  box-shadow: var(--shadow-glow);
  transform: translateY(-4px);
}
.cat-icon { font-size: 2rem; margin-bottom: 12px; }
.cat-title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--text);
}
.skill-list { display: flex; flex-direction: column; gap: 14px; }
.skill-item {}
.si-top {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 7px;
  font-weight: 500;
}
.skill-bar {
  height: 5px;
  background: rgba(255,255,255,.06);
  border-radius: 100px;
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  border-radius: 100px;
  transition: width 1.2s cubic-bezier(.4,0,.2,1);
}

/* Tech cloud */
.tech-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 16px;
}
.cloud-item {
  padding: 7px 18px;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--surface);
  backdrop-filter: blur(12px);
  transition: all .25s;
  cursor: default;
}
.cloud-item:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: rgba(99,102,241,.1);
  transform: translateY(-2px) scale(1.04);
}

@media (max-width: 1280px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .skills-grid { grid-template-columns: 1fr; }
}
</style>
