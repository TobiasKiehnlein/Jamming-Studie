<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

onMounted(async () => {
  await nextTick()
  const els = document.querySelectorAll<HTMLElement>('.hero .fade-in')
  els.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 80 + i * 90)
  })
})
</script>

<template>
  <section id="home" class="hero">
    <!-- Animated background -->
    <div class="hero-bg" aria-hidden="true">
      <div class="orb orb-1" />
      <div class="orb orb-2" />
      <div class="orb orb-3" />
      <div class="rings">
        <div class="ring" />
        <div class="ring" />
        <div class="ring" />
      </div>
      <!-- Tron-style VR floor grid -->
      <div class="floor-grid" />
    </div>

    <div class="hero-content">
      <div class="hero-badge fade-in">
        <span class="badge-dot" />
        {{ t.hero.badge }}
      </div>

      <h1 class="hero-title fade-in d1">
        <span class="line-1">Jamming</span>
        <span class="line-2">in VR</span>
      </h1>

      <!-- Body copy gets its own width cap for readability -->
      <div class="hero-body">
        <p class="hero-subtitle fade-in d2">{{ t.hero.subtitle }}</p>

        <p class="hero-text fade-in d2">{{ t.hero.text }}</p>

        <a href="#kontakt" class="hero-cta fade-in d3">
          <span>{{ t.hero.cta }}</span>
          <span class="arrow">→</span>
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-hint" aria-hidden="true">
      <div class="scroll-mouse">
        <span class="scroll-dot" />
      </div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: calc(var(--nav-h) + 5rem) var(--section-x) 5rem;
}

/* ── Background ── */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  /* dot grid */
  background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
  background-size: 32px 32px;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}
.orb-1 {
  width: 640px; height: 640px;
  background: radial-gradient(circle, rgba(0,212,255,0.14), transparent 70%);
  top: -120px; right: -80px;
  animation: orb1 20s ease-in-out infinite;
}
.orb-2 {
  width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(255,45,120,0.11), transparent 70%);
  bottom: -60px; left: -100px;
  animation: orb2 24s ease-in-out infinite;
}
.orb-3 {
  width: 380px; height: 380px;
  background: radial-gradient(circle, rgba(139,92,246,0.11), transparent 70%);
  top: 45%; left: 35%;
  animation: orb3 16s ease-in-out infinite;
}
@keyframes orb1 {
  0%,100% { transform: translate(0,0); }
  33%     { transform: translate(-60px, 50px); }
  66%     { transform: translate(40px, -70px); }
}
@keyframes orb2 {
  0%,100% { transform: translate(0,0); }
  33%     { transform: translate(80px, -30px); }
  66%     { transform: translate(-30px, 70px); }
}
@keyframes orb3 {
  0%,100% { transform: translate(0,0); }
  50%     { transform: translate(60px, 60px); }
}

/* Sonar rings */
.rings {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 80px; height: 80px;
}
.ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(0,212,255,0.14);
  animation: ring-expand 7s ease-out infinite;
}
.ring:nth-child(2) { animation-delay: 2.33s; }
.ring:nth-child(3) { animation-delay: 4.66s; }
@keyframes ring-expand {
  0%   { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(22); opacity: 0; }
}

/* VR floor grid */
.floor-grid {
  position: absolute;
  bottom: -20px; left: 50%;
  transform: translateX(-50%) perspective(380px) rotateX(66deg);
  width: 220%;
  height: 260px;
  transform-origin: bottom center;
  background-image:
    linear-gradient(rgba(0,212,255,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.07) 1px, transparent 1px);
  background-size: 52px 52px;
  animation: grid-pulse 4s ease-in-out infinite;
}
@keyframes grid-pulse {
  0%,100% { opacity: 0.5; }
  50%     { opacity: 1; }
}

/* ── Content ── */
.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  /* Own compositor layer — isolates content from bg orb/ring animations */
  transform: translateZ(0);
  will-change: transform;
}

.hero-body {
  max-width: 620px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0,212,255,0.07);
  border: 1px solid rgba(0,212,255,0.2);
  color: var(--cyan);
  padding: 0.35rem 0.9rem;
  border-radius: 100px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
}
.badge-dot {
  width: 6px; height: 6px;
  background: var(--cyan);
  border-radius: 50%;
  animation: dot-pulse 2s ease-in-out infinite;
  will-change: opacity;
}
@keyframes dot-pulse {
  /* opacity-only — no transform, avoids repainting content layer */
  0%,100% { opacity: 1; }
  50%     { opacity: 0.25; }
}

.hero-title {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  /* 7vw scales with viewport — no floor that can exceed container at mobile */
  font-size: clamp(1.4rem, 7vw, 7rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
  margin-bottom: 1.4rem;
}
.line-1 {
  display: block;
  background: linear-gradient(135deg, #ffffff 0%, #b8e8ff 50%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* background-position animation on background-clip:text is never GPU-composited
     — it repaints the text layer every frame. Static gradient instead. */
}
.line-2 {
  display: block;
  background: linear-gradient(135deg, var(--purple) 0%, var(--magenta) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 1.2rem;
  max-width: 680px;
}

.hero-text {
  color: rgba(232,232,240,0.65);
  max-width: 580px;
  margin-bottom: 2.5rem;
  font-size: 1.05rem;
  line-height: 1.8;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: linear-gradient(135deg, var(--cyan), var(--purple));
  color: #fff;
  text-decoration: none;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.9rem 2rem;
  border-radius: 100px;
  box-shadow: 0 0 32px rgba(0,212,255,0.22);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 44px rgba(0,212,255,0.38);
}
.arrow { transition: transform 0.3s ease; }
.hero-cta:hover .arrow { transform: translateX(5px); }

/* ── Scroll hint ── */
.scroll-hint {
  position: absolute;
  bottom: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  animation: hint-bounce 2.5s ease-in-out infinite;
}
@keyframes hint-bounce {
  0%,100% { transform: translateX(-50%) translateY(0); }
  50%     { transform: translateX(-50%) translateY(-7px); }
}
.scroll-mouse {
  width: 22px; height: 36px;
  border: 1.5px solid rgba(255,255,255,0.18);
  border-radius: 11px;
  position: relative;
  overflow: hidden;
}
.scroll-dot {
  position: absolute;
  top: 5px; left: 50%;
  transform: translateX(-50%);
  width: 3px; height: 6px;
  background: var(--cyan);
  border-radius: 3px;
  animation: scroll-drop 2.2s ease-in-out infinite;
}
@keyframes scroll-drop {
  0%   { transform: translateX(-50%) translateY(0); opacity: 1; }
  100% { transform: translateX(-50%) translateY(18px); opacity: 0; }
}

@media (max-width: 768px) {
  .hero { padding-top: calc(var(--nav-h) + 3rem); }
  .scroll-hint { display: none; }
}
</style>
