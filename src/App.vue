<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

// Global reveal observer (shared across sections)
onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible')
    }),
    { threshold: 0.12 }
  )
  // Run after all child components have mounted
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }, 100)

  // Cursor glow
  const glow = document.getElementById('cursor-glow')
  if (glow) {
    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px'
      glow.style.top  = e.clientY + 'px'
    })
  }
})
</script>

<template>
  <div id="app-root">
    <!-- Custom cursor glow -->
    <div id="cursor-glow" aria-hidden="true"></div>

    <NavBar />
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<style>
/* ── Cursor glow ── */
#cursor-glow {
  position: fixed;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99,102,241,.1) 0%, transparent 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 0;
  transition: left .08s, top .08s;
}

/* ── App shell ── */
#app-root {
  min-height: 100vh;
}

/* ── Skip link for accessibility ── */
#skip-link {
  position: absolute;
  top: -100px;
  left: 16px;
  padding: 12px 20px;
  background: var(--primary);
  color: #fff;
  border-radius: 0 0 8px 8px;
  font-weight: 700;
  z-index: 999;
  transition: top .2s;
}
#skip-link:focus { top: 0; }
</style>
