<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

type Project = {
  title: string
  subtitle: string
  summary: string
  stack: string[]
  href: string
  accent: string
}

const menuOpen = ref(false)
const activeSection = ref('home')
const currentYear = new Date().getFullYear()

const metrics = [
  { value: '10+', label: 'Jahre Erfahrung' },
  { value: '50+', label: 'digitale Projekte' },
  { value: '24h', label: 'Antwortzeit im Schnitt' },
]

const services = [
  {
    title: 'Websites mit klarer Conversion',
    text: 'Markenauftritte, Unternehmensseiten und Landingpages mit sauberer Struktur, starker Typografie und klaren Handlungswegen.',
  },
  {
    title: 'CMS- und Shop-Systeme',
    text: 'TYPO3, WordPress, Shopify, Webflow und Framer für Teams, die Inhalte selbst pflegen und schnell weiterentwickeln wollen.',
  },
  {
    title: 'Technische Umsetzung mit Fokus',
    text: 'Performance, SEO, Accessibility und wartbare Frontends mit Vue, TypeScript und pragmischen Automationen.',
  },
]

const projects: Project[] = [
  {
    title: 'anderthalbbar Stuttgart',
    subtitle: 'WordPress / Editorial Website',
    summary: 'Atmospharische Gastronomie-Website mit klarer Story, Event-Bezug und lokaler Sichtbarkeit.',
    stack: ['WordPress', 'Editorial Design', 'Responsive', 'SEO'],
    href: 'https://anderthalb-bar.de',
    accent: 'var(--tone-amber)',
  },
  {
    title: 'Ravida Immofinanz',
    subtitle: 'WordPress / Corporate Presence',
    summary: 'Professioneller Markenauftritt fur Immobilien- und Finanzservices mit ruhiger Informationsarchitektur.',
    stack: ['WordPress', 'Corporate', 'UI Copy', 'SEO'],
    href: 'https://ravida-immofinanz.de',
    accent: 'var(--tone-blue)',
  },
  {
    title: 'mystu.shop',
    subtitle: 'Shopify / E-Commerce',
    summary: 'Eigenes Shopify-Projekt als praxisnaher Beleg fur Design, Theme-Anpassung und Conversion-Denken.',
    stack: ['Shopify', 'E-Commerce', 'Custom Theme', 'Mobile Checkout'],
    href: 'https://mystu.shop',
    accent: 'var(--tone-green)',
  },
]

const stackGroups = [
  {
    title: 'Plattformen',
    items: ['TYPO3', 'WordPress', 'Shopify', 'Webflow', 'Framer', 'Wix'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'TypeScript', 'Vue.js', 'Responsive UI', 'Accessibility'],
  },
  {
    title: 'Wachstum',
    items: ['Technical SEO', 'Core Web Vitals', 'Content-Struktur', 'Analytics', 'Automation'],
  },
]

const process = [
  'Positionierung und Seitengerust gemeinsam scharfstellen',
  'Visuelles Konzept mit sauberer Inhaltsfuhrung ausarbeiten',
  'Frontend und CMS performant umsetzen',
  'Launch, Feinschliff und Weiterentwicklung begleiten',
]

let observer: IntersectionObserver | null = null

function updateActiveSection() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
  const offset = window.innerHeight * 0.35

  for (const section of sections) {
    const rect = section.getBoundingClientRect()
    if (rect.top <= offset && rect.bottom >= offset) {
      activeSection.value = section.id
      return
    }
  }
}

function handleResize() {
  if (window.innerWidth > 860) menuOpen.value = false
}

onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      }
    },
    { threshold: 0.16 }
  )

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => observer?.observe(el))

  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="site-shell">
    <a href="#home" class="skip-link">Zum Inhalt springen</a>

    <header class="site-header">
      <div class="nav-wrap">
        <a href="#home" class="brand-mark" @click="menuOpen = false">
          Yusuf Ahmed
        </a>

        <nav class="desktop-nav" aria-label="Hauptnavigation">
          <a href="#about" :class="{ active: activeSection === 'about' }">Profil</a>
          <a href="#work" :class="{ active: activeSection === 'work' }">Projekte</a>
          <a href="#stack" :class="{ active: activeSection === 'stack' }">Stack</a>
          <a href="#contact" :class="{ active: activeSection === 'contact' }">Kontakt</a>
        </nav>

        <a href="#contact" class="nav-cta">Projekt starten</a>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Navigation umschalten"
          @click="menuOpen = !menuOpen"
        >
          <span :class="{ open: menuOpen }"></span>
          <span :class="{ open: menuOpen }"></span>
        </button>
      </div>

      <div class="mobile-nav" :class="{ open: menuOpen }">
        <a href="#about" @click="menuOpen = false">Profil</a>
        <a href="#work" @click="menuOpen = false">Projekte</a>
        <a href="#stack" @click="menuOpen = false">Stack</a>
        <a href="#contact" @click="menuOpen = false">Kontakt</a>
      </div>
    </header>

    <main>
      <!-- Hero: full-viewport centered, dark gradient -->
      <section id="home" class="hero">
        <div class="container">
          <div class="hero-copy" data-reveal>
            <p class="hero-eyebrow">Freelance Web Development · Ludwigsburg / Stuttgart</p>
            <h1>
              Websites, die<br>
              klarer wirken und<br>
              besser arbeiten.
            </h1>
            <p class="hero-text">
              Ich konzipiere und entwickle Websites, Shops und Frontends für Unternehmen,
              die nicht beliebig aussehen wollen. Fokus auf Struktur, Performance und
              einen Auftritt, der Vertrauen aufbaut.
            </p>
            <div class="hero-actions">
              <a href="#contact" class="button button-primary">Projekt anfragen</a>
              <a
                href="https://www.linkedin.com/in/yusuf-ahmed-lb/"
                target="_blank"
                rel="noopener noreferrer"
                class="button button-ghost-dark"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats strip: floats between hero and about -->
      <div class="stats-strip">
        <div class="container stats-grid">
          <div class="hero-card" data-reveal>
            <p class="panel-kicker">Verfügbar für</p>
            <ul class="panel-list">
              <li>Corporate Websites</li>
              <li>Shopify und WordPress Relaunches</li>
              <li>Landingpages mit SEO-Fokus</li>
              <li>Vue Frontends und UI-Refactors</li>
            </ul>
          </div>
          <div class="metric-strip" data-reveal>
            <div v-for="metric in metrics" :key="metric.label" class="metric">
              <strong>{{ metric.value }}</strong>
              <span>{{ metric.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <section id="about" class="section">
        <div class="container intro-grid">
          <div data-reveal>
            <p class="section-label">Profil</p>
            <h2 class="section-title">Technisch sauber, visuell bewusst und ohne unnötiges SaaS-Baukasten-Gefuhl.</h2>
          </div>

          <div class="intro-copy" data-reveal>
            <p>
              Ich bin Yusuf, Webentwickler aus Ludwigsburg. Seit uber zehn Jahren arbeite ich
              an Websites, CMS-Projekten und Frontends fur Unternehmen, Dienstleister und eigene
              Produkte.
            </p>
            <p>
              Mein Schwerpunkt liegt auf Projekten, bei denen Gestaltung und Umsetzung zusammen
              gedacht werden mussen: gute Hierarchie, glaubwurdige Inhalte, saubere Technik und
              ein Launch, der nicht nur gut aussieht, sondern auch gefunden wird.
            </p>
          </div>
        </div>

        <div class="container services-grid">
          <article v-for="(service, index) in services" :key="service.title" class="service-block" data-reveal>
            <p class="service-index">0{{ index + 1 }}</p>
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
          </article>
        </div>
      </section>

      <section id="work" class="section">
        <div class="container section-head" data-reveal>
          <p class="section-label">Ausgewahlte Arbeiten</p>
          <h2 class="section-title">Drei Projekte, die Stil, Struktur und praktische Umsetzung zeigen.</h2>
        </div>

        <div class="container projects-layout">
          <article
            v-for="project in projects"
            :key="project.title"
            class="project-item"
            data-reveal
            :style="{ '--project-accent': project.accent }"
          >
            <div class="project-topline">
              <span>{{ project.subtitle }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            <div class="tag-row">
              <span v-for="tag in project.stack" :key="tag">{{ tag }}</span>
            </div>
            <a :href="project.href" target="_blank" rel="noopener noreferrer" class="text-link">
              Projekt ansehen
            </a>
          </article>
        </div>
      </section>

      <section id="stack" class="section">
        <div class="container stack-grid">
          <div class="stack-copy" data-reveal>
            <p class="section-label">Stack und Ablauf</p>
            <h2 class="section-title">Keine Tool-Sammlung ohne Richtung, sondern ein Setup fur echte Ergebnisse.</h2>
            <ol class="process-list">
              <li v-for="step in process" :key="step">{{ step }}</li>
            </ol>
          </div>

          <div class="stack-panels">
            <article v-for="group in stackGroups" :key="group.title" class="stack-panel" data-reveal>
              <h3>{{ group.title }}</h3>
              <ul>
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="section contact-section">
        <div class="container contact-layout">
          <div data-reveal>
            <p class="section-label">Kontakt</p>
            <h2 class="section-title">Wenn dein aktueller Auftritt zu generisch wirkt, konnen wir ihn neu aufziehen.</h2>
            <p class="contact-copy">
              Fur neue Websites, Relaunches, Shopify-Setups oder Frontend-Arbeit in bestehenden
              Projekten. Ich antworte in der Regel innerhalb eines Tages.
            </p>
          </div>

          <div class="contact-card" data-reveal>
            <a href="mailto:yusuf_ahmed@gmx.de" class="contact-line">yusuf_ahmed@gmx.de</a>
            <p>Ludwigsburg, Baden-Wurttemberg · remote und vor Ort</p>
            <div class="contact-actions">
              <a href="mailto:yusuf_ahmed@gmx.de?subject=Projektanfrage" class="button button-primary">
                E-Mail schreiben
              </a>
              <a
                href="https://github.com/8bamo"
                target="_blank"
                rel="noopener noreferrer"
                class="button button-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-row">
        <p>© {{ currentYear }} Yusuf Ahmed. Webentwicklung fur Marken, Unternehmen und Produkte.</p>
        <div class="footer-links">
          <a href="https://github.com/8bamo" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yusuf-ahmed-lb/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>
