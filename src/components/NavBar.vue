<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const links = [
  { label: 'Über mich', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Kontakt', href: '#contact' },
]

const closeMenu = () => { mobileOpen.value = false }
</script>

<template>
  <nav id="navbar" :class="{ scrolled }">
    <div class="nav-inner">
      <a href="#" class="nav-logo" aria-label="Yusuf Ahmed – Webentwickler">
        Yusuf<span class="dot">.</span>
      </a>

      <ul class="nav-links" role="navigation" aria-label="Hauptnavigation">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav-link" @click="closeMenu">{{ link.label }}</a>
        </li>
      </ul>

      <a
        href="#contact"
        class="nav-cta"
        id="nav-cta-btn"
        aria-label="Projekt anfragen"
      >
        Projekt anfragen
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>

      <button
        class="burger"
        id="burger-btn"
        :aria-expanded="mobileOpen"
        aria-label="Menü öffnen/schließen"
        @click="mobileOpen = !mobileOpen"
      >
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
      </button>
    </div>

    <div class="mobile-menu" :class="{ open: mobileOpen }" role="navigation" aria-label="Mobile Navigation">
      <a v-for="link in links" :key="link.href" :href="link.href" @click="closeMenu">{{ link.label }}</a>
      <a href="#contact" class="mobile-cta" @click="closeMenu">Projekt anfragen</a>
    </div>
  </nav>
</template>

<style scoped>
#navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: all .3s var(--ease, cubic-bezier(.4,0,.2,1));
}
#navbar.scrolled {
  background: rgba(6,8,17,.9);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 4px 24px rgba(0,0,0,.4);
}
.nav-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 40px;
  height: 72px;
  max-width: 1300px;
  margin: 0 auto;
}
.nav-logo {
  font-size: 22px;
  font-weight: 800;
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-right: auto;
}
.dot { color: var(--primary); -webkit-text-fill-color: var(--primary); }
.nav-links {
  display: flex;
  gap: 4px;
  list-style: none;
}
.nav-link {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  transition: all .25s;
}
.nav-link:hover { color: var(--text); background: var(--surface); }
.nav-cta {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  transition: all .3s;
  white-space: nowrap;
}
.nav-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(99,102,241,.4); }
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.burger span {
  width: 22px; height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all .3s;
  display: block;
}
.burger span.open:nth-child(1) { transform: rotate(45deg) translateY(9px); }
.burger span.open:nth-child(2) { opacity: 0; }
.burger span.open:nth-child(3) { transform: rotate(-45deg) translateY(-9px); }

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 16px 24px 24px;
  gap: 4px;
  border-top: 1px solid var(--border);
  background: rgba(6,8,17,.97);
  backdrop-filter: blur(24px);
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  color: var(--text-muted);
  transition: all .25s;
}
.mobile-menu a:hover { color: var(--text); background: var(--surface); }
.mobile-cta {
  margin-top: 8px;
  background: linear-gradient(135deg, var(--primary), var(--accent)) !important;
  color: #fff !important;
  text-align: center;
  font-weight: 700 !important;
}

@media (max-width: 768px) {
  .nav-links, .nav-cta { display: none; }
  .burger { display: flex; }
  .nav-inner { padding: 0 20px; }
}
</style>
