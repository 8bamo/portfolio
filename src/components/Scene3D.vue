<template>
  <!-- Pure CSS 3D rotating icosahedron-like gem shape -->
  <div class="scene3d" aria-hidden="true">
    <div class="gem" :style="{ '--rot-x': `${rotX}deg`, '--rot-y': `${rotY}deg` }">
      <div class="gem-face f1"></div>
      <div class="gem-face f2"></div>
      <div class="gem-face f3"></div>
      <div class="gem-face f4"></div>
      <div class="gem-face f5"></div>
      <div class="gem-face f6"></div>
      <div class="gem-face f7"></div>
      <div class="gem-face f8"></div>
    </div>
    <!-- Outer rings -->
    <div class="ring ring-a"></div>
    <div class="ring ring-b"></div>
    <div class="ring ring-c"></div>
    <!-- Floating particles -->
    <div v-for="p in particles" :key="p.id" class="particle3d"
      :style="{ left: p.x+'%', top: p.y+'%', '--dur': p.dur+'s', '--delay': p.delay+'s', width: p.size+'px', height: p.size+'px' }">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const rotX = ref(20)
const rotY = ref(0)
let frame = 0
let raf: number

function animate() {
  frame += 0.3
  rotY.value = frame
  rotX.value = 20 + Math.sin(frame * 0.008) * 10
  raf = requestAnimationFrame(animate)
}

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  dur: 4 + Math.random() * 6,
  delay: Math.random() * 4,
  size: 3 + Math.random() * 5,
}))

onMounted(() => { raf = requestAnimationFrame(animate) })
onUnmounted(() => cancelAnimationFrame(raf))
</script>

<style scoped>
.scene3d {
  position: absolute;
  inset: 0;
  perspective: 800px;
  pointer-events: none;
  overflow: hidden;
}

/* ─── GEM ─── */
.gem {
  position: absolute;
  top: 50%; right: 8%;
  width: 220px; height: 220px;
  transform-style: preserve-3d;
  transform: translateY(-50%) rotateX(var(--rot-x, 20deg)) rotateY(var(--rot-y, 0deg));
  will-change: transform;
}

.gem-face {
  position: absolute;
  width: 100%; height: 100%;
  border: 1px solid rgba(99,102,241,.25);
  border-radius: 4px;
  background: linear-gradient(135deg, rgba(99,102,241,.06) 0%, rgba(168,85,247,.04) 100%);
  backdrop-filter: blur(2px);
  will-change: transform;
}

.f1 { transform: rotateY(0deg)   translateZ(110px); }
.f2 { transform: rotateY(90deg)  translateZ(110px); }
.f3 { transform: rotateY(180deg) translateZ(110px); }
.f4 { transform: rotateY(270deg) translateZ(110px); }
.f5 { transform: rotateX(90deg)  translateZ(110px); }
.f6 { transform: rotateX(-90deg) translateZ(110px); }
.f7 { transform: rotateY(45deg)  translateZ(78px); width: 155px; height: 155px; left: 32px; top: 32px; }
.f8 { transform: rotateY(135deg) translateZ(78px); width: 155px; height: 155px; left: 32px; top: 32px; }

/* ─── RINGS ─── */
.ring {
  position: absolute;
  top: 50%; right: 8%;
  border-radius: 50%;
  border: 1px solid transparent;
  transform-style: preserve-3d;
  will-change: transform;
}
.ring-a {
  width: 310px; height: 310px;
  margin-top: -155px; margin-right: -45px;
  border-color: rgba(99,102,241,.18);
  animation: ring-spin-a 10s linear infinite;
}
.ring-b {
  width: 390px; height: 390px;
  margin-top: -195px; margin-right: -85px;
  border-color: rgba(168,85,247,.12);
  animation: ring-spin-b 16s linear infinite reverse;
}
.ring-c {
  width: 480px; height: 480px;
  margin-top: -240px; margin-right: -130px;
  border-color: rgba(6,182,212,.08);
  animation: ring-spin-a 24s linear infinite;
}

@keyframes ring-spin-a {
  from { transform: rotateX(70deg) rotateZ(0deg); }
  to   { transform: rotateX(70deg) rotateZ(360deg); }
}
@keyframes ring-spin-b {
  from { transform: rotateX(50deg) rotateZ(0deg); }
  to   { transform: rotateX(50deg) rotateZ(360deg); }
}

/* ─── FLOATING PARTICLES ─── */
.particle3d {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99,102,241,.7) 0%, rgba(168,85,247,.4) 60%, transparent 100%);
  animation: p3d-float var(--dur, 5s) ease-in-out var(--delay, 0s) infinite alternate;
  will-change: transform, opacity;
}

@keyframes p3d-float {
  0%   { transform: translate3d(0, 0, 0) scale(1);   opacity: .3; }
  100% { transform: translate3d(20px, -30px, 40px) scale(1.4); opacity: .8; }
}

@media (max-width: 1024px) {
  .gem, .ring { display: none; }
}
</style>
