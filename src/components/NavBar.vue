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
    <div class="nav-pill" :class="{ scrolled }">
      <!-- Logo -->
      <a href="#" class="logo" aria-label="Yusuf — Startseite">
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
        Anfragen
      </a>

      <!-- Mobile burger -->
      <button class="burger" id="mobile-menu-btn"
        :aria-expanded="menuOpen" aria-label="Menü"
        @click="menuOpen = !menuOpen">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu glass" :class="{ open: menuOpen }">
      <nav>
        <a href="#about"    @click="menuOpen=false">Über mich</a>
        <a href="#skills"   @click="menuOpen=false">Skills</a>
        <a href="#projects" @click="menuOpen=false">Projekte</a>
        <a href="#contact"  @click="menuOpen=false">Kontakt</a>
        <a href="#contact" class="btn btn-primary btn-full" @click="menuOpen=false">Anfragen</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
#navbar {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 16px 24px;
  display: flex; flex-direction: column; align-items: center;
}

/* Floating pill navigation — Apple Dynamic Island style */
.nav-pill {
  display: flex; align-items: center; gap: 36px;
  width: 100%; max-width: 1000px;
  height: 60px;
  padding: 0 24px;
  border-radius: 100px;
  background: rgba(255,255,255,0.45);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.65);
  box-shadow: 0 4px 24px rgba(0,0,0,.07), inset 0 1px 0 rgba(255,255,255,.9);
  transition: all .4s var(--ease);
}
.nav-pill.scrolled {
  background: rgba(255,255,255,0.75);
  box-shadow: 0 8px 32px rgba(0,0,0,.10), inset 0 1px 0 rgba(255,255,255,.9);
}

.logo {
  font-size: 20px; font-weight: 800;
  letter-spacing: -.03em; color: var(--text);
  flex-shrink: 0;
}
.logo-dot { color: var(--orange); }

.nav-links {
  display: flex; gap: 28px; flex: 1;
}
.nav-links a {
  font-size: 14px; font-weight: 500;
  color: var(--text-muted);
  transition: color .2s;
}
.nav-links a:hover { color: var(--text); }

.nav-cta { padding: 9px 20px; font-size: 13px; }

/* Burger */
.burger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 6px; margin-left: auto;
}
.burger span {
  display: block; width: 20px; height: 2px;
  background: var(--text); border-radius: 1px;
  transition: all .3s var(--ease);
}
.burger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger span.open:nth-child(2) { opacity: 0; }
.burger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  display: none;
  width: calc(100% - 48px);
  max-width: 1000px;
  border-radius: 20px;
  padding: 20px;
  margin-top: 8px;
}
.mobile-menu.open { display: block; }
.mobile-menu nav { display: flex; flex-direction: column; gap: 12px; }
.mobile-menu a {
  font-size: 15px; font-weight: 500;
  color: var(--text-muted);
  padding: 10px 4px;
  border-bottom: 1px solid rgba(0,0,0,.05);
  transition: color .2s;
}
.mobile-menu a:hover { color: var(--orange); }
.mobile-menu a:last-of-type { border-bottom: none; }

@media (max-width: 820px) {
  .nav-links, .nav-cta { display: none; }
  .burger { display: flex; }
}
</style>
