<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* ── Reset & base ── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg:        #07070f;
  --bg-2:      #0d0d1a;
  --bg-3:      #111126;
  --cyan:      #00d4ff;
  --magenta:   #ff2d78;
  --purple:    #8b5cf6;
  --text:      #e8e8f0;
  --text-muted:#8888aa;
  --border:    rgba(255,255,255,0.08);
  --nav-h:     72px;
  --section-x: clamp(1.5rem, 8vw, 6rem);
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-h);
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* ── Shared utility classes ── */
.section-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cyan);
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 3rem;
}

/* ── Scroll fade-in ── */
.fade-in {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
.fade-in.d1 { transition-delay: 0.1s; }
.fade-in.d2 { transition-delay: 0.2s; }
.fade-in.d3 { transition-delay: 0.3s; }
</style>
