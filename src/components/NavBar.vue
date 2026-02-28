<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() { scrolled.value = window.scrollY > 40 }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header id="navbar" :class="{ scrolled }" role="banner">
    <div class="nav-inner container">
      <!-- Logo -->
      <a href="#" class="logo" aria-label="Yusuf Ahmed – Startseite">
        Yusuf<span class="logo-dot">.</span>
      </a>

      <!-- Desktop nav -->
      <nav class="nav-links" aria-label="Hauptnavigation">
        <a href="#about"    id="nav-about">Über mich</a>
        <a href="#skills"   id="nav-skills">Skills</a>
        <a href="#projects" id="nav-projects">Projekte</a>
        <a href="#contact"  id="nav-contact">Kontakt</a>
      </nav>

      <!-- CTA -->
      <a href="#contact" class="btn btn-primary nav-cta" id="nav-cta-btn">
        Projekt anfragen
      </a>

      <!-- Mobile burger -->
      <button
        class="burger"
        id="mobile-menu-btn"
        :aria-expanded="menuOpen"
        aria-label="Menü öffnen"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div class="mobile-menu" :class="{ open: menuOpen }" role="dialog" aria-modal="true">
      <nav>
        <a href="#about"    @click="menuOpen=false">Über mich</a>
        <a href="#skills"   @click="menuOpen=false">Skills</a>
        <a href="#projects" @click="menuOpen=false">Projekte</a>
        <a href="#contact"  @click="menuOpen=false">Kontakt</a>
        <a href="#contact" class="btn btn-primary" style="justify-content:center;margin-top:8px" @click="menuOpen=false">
          Projekt anfragen
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
#navbar {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background .3s, border-color .3s, backdrop-filter .3s;
}
#navbar.scrolled {
  background: rgba(255,255,255,.95);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 16px rgba(0,0,0,.06);
}

.nav-inner {
  display: flex; align-items: center; gap: 48px;
  height: 72px;
}

.logo {
  font-size: 22px; font-weight: 800;
  letter-spacing: -.03em;
  color: var(--text);
  flex-shrink: 0;
}
.logo-dot { color: var(--orange); }

.nav-links {
  display: flex; gap: 36px;
  flex: 1;
}
.nav-links a {
  font-size: 13px; font-weight: 600;
  letter-spacing: .06em; text-transform: uppercase;
  color: var(--text-muted);
  transition: color .2s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute; bottom: -4px; left: 0;
  width: 0; height: 1px;
  background: var(--orange);
  transition: width .25s;
}
.nav-links a:hover { color: var(--text); }
.nav-links a:hover::after { width: 100%; }

.nav-cta { padding: 10px 22px; font-size: 12px; flex-shrink: 0; }

/* Burger */
.burger {
  display: none;
  flex-direction: column; gap: 5px;
  background: none; border: none;
  cursor: pointer; padding: 6px;
  margin-left: auto;
}
.burger span {
  display: block; width: 22px; height: 2px;
  background: var(--text);
  transition: all .3s var(--ease);
  border-radius: 1px;
}
.burger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger span.open:nth-child(2) { opacity: 0; }
.burger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  display: none;
  background: #ffffff;
  border-top: 1px solid var(--border);
  box-shadow: 0 8px 24px rgba(0,0,0,.08);
  padding: 24px;
}
.mobile-menu.open { display: block; }
.mobile-menu nav { display: flex; flex-direction: column; gap: 16px; }
.mobile-menu a {
  font-size: 15px; font-weight: 600;
  color: var(--text-muted);
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
  transition: color .2s;
}
.mobile-menu a:hover { color: var(--orange); }

@media (max-width: 900px) {
  .nav-links, .nav-cta { display: none; }
  .burger { display: flex; }
}
</style>
