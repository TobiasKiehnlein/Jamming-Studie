<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLocale } from '../composables/useLocale'

const { t, locale, toggle } = useLocale()

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 50
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav :class="['nav', { scrolled }]">
    <a href="#home" class="nav-logo" @click="closeMenu">
      <span class="logo-text">Jamming</span>
      <span class="logo-vr">VR</span>
      <span class="logo-dot" />
    </a>

    <!-- Desktop links -->
    <ul class="nav-links">
      <li><a href="#home">{{ t.nav.home }}</a></li>
      <li><a href="#faq">{{ t.nav.faq }}</a></li>
      <li>
        <button class="lang-btn" @click="toggle" :aria-label="`Switch to ${t.nav.langSwitch}`">
          {{ t.nav.langSwitch }}
        </button>
      </li>
      <li><a href="#kontakt" class="nav-cta">{{ t.nav.cta }}</a></li>
    </ul>

    <!-- Hamburger -->
    <div class="nav-right">
      <button class="lang-btn" @click="toggle" :aria-label="`Switch to ${t.nav.langSwitch}`">
        {{ t.nav.langSwitch }}
      </button>
      <button
        :class="['nav-hamburger', { open: menuOpen }]"
        aria-label="Menü"
        @click="toggleMenu"
      >
        <span /><span /><span />
      </button>
    </div>
  </nav>

  <!-- Mobile menu -->
  <div :class="['nav-mobile', { open: menuOpen }]">
    <ul>
      <li><a href="#home" @click="closeMenu">{{ t.nav.home }}</a></li>
      <li><a href="#faq" @click="closeMenu">{{ t.nav.faq }}</a></li>
      <li><a href="#kontakt" @click="closeMenu">{{ locale === 'de' ? 'Mitmachen' : 'Join' }}</a></li>
    </ul>
  </div>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--section-x);
  background: rgba(7, 7, 15, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s ease;
  /* Stable GPU layer — prevents backdrop-filter from causing flicker
     on Android when child elements animate nearby */
  will-change: transform;
  transform: translateZ(0);
}
.nav.scrolled {
  background: rgba(7, 7, 15, 0.95);
}

/* Logo */
.nav-logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.3rem;
  color: var(--text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  letter-spacing: -0.02em;
}
.logo-vr { color: var(--cyan); }
.logo-dot {
  width: 8px; height: 8px;
  background: var(--magenta);
  border-radius: 50%;
  animation: dot-pulse 2s ease-in-out infinite;
  will-change: opacity;
}
@keyframes dot-pulse {
  /* opacity-only: single cheap GPU property, no recomposite of backdrop-filter */
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

/* Desktop links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}
.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s ease;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 1px;
  background: var(--cyan);
  transition: width 0.3s ease;
}
.nav-links a:hover { color: var(--cyan); }
.nav-links a:hover::after { width: 100%; }

/* Language toggle */
.lang-btn {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.lang-btn:hover {
  background: rgba(0,212,255,0.1);
  border-color: rgba(0,212,255,0.3);
  color: var(--cyan);
}

.nav-cta {
  background: linear-gradient(135deg, var(--purple), var(--magenta));
  color: #fff !important;
  padding: 0.45rem 1.2rem;
  border-radius: 100px;
  font-size: 0.85rem !important;
  transition: opacity 0.2s, transform 0.2s !important;
}
.nav-cta:hover { opacity: 0.88; transform: translateY(-1px); }
.nav-cta::after { display: none !important; }

/* Mobile right cluster */
.nav-right {
  display: none;
  align-items: center;
  gap: 0.75rem;
}

/* Hamburger */
.nav-hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-hamburger span {
  width: 24px; height: 2px;
  background: var(--text);
  border-radius: 2px;
  display: block;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile drawer */
.nav-mobile {
  position: fixed;
  top: var(--nav-h); left: 0; right: 0;
  z-index: 99;
  background: rgba(13, 13, 26, 0.98);
  backdrop-filter: blur(20px);
  padding: 2rem var(--section-x);
  border-bottom: 1px solid var(--border);
  visibility: hidden;
  opacity: 0;
  transform: translateY(-12px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
  pointer-events: none;
}
.nav-mobile.open {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}
.nav-mobile ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.nav-mobile ul a {
  color: var(--text);
  text-decoration: none;
  font-family: 'Syne', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-right  { display: flex; }
}
</style>
