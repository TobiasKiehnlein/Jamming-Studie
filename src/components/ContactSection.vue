<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useFadeIn } from '../composables/useFadeIn'

const { t } = useLocale()

const mailtoHref = computed(() =>
  `mailto:jamming-studie@kiehnlein.de?subject=${t.value.contact.emailSubject}`
)

const { observe } = useFadeIn()
onMounted(() => observe('#kontakt .fade-in'))
</script>

<template>
  <section id="kontakt">
    <div class="top-line" aria-hidden="true" />
    <div class="bg-glow" aria-hidden="true" />

    <div class="contact-inner">
      <span class="section-label fade-in">{{ t.contact.label }}</span>
      <h2 class="section-title fade-in d1">
        {{ t.contact.headingLine1 }}<br />{{ t.contact.headingLine2 }}
      </h2>

      <p class="intro fade-in d2">{{ t.contact.intro }}</p>

      <ul class="checklist fade-in d2">
        <li v-for="item in t.contact.checklist" :key="item">
          <span class="check-icon" aria-hidden="true">
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="1.5,5 4,7.5 8.5,2.5" />
            </svg>
          </span>
          {{ item }}
        </li>
      </ul>

      <div class="email-block fade-in d3">
        <a :href="mailtoHref" class="email-btn">
          <span class="btn-label">{{ t.contact.btnLabel }}</span>
          <span class="btn-address">jamming-studie@kiehnlein.de</span>
        </a>
      </div>

      <p class="outro fade-in">{{ t.contact.outro }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  background: var(--bg);
  position: relative;
  overflow: hidden;
  padding: clamp(4rem, 10vw, 8rem) var(--section-x);
}

.top-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--magenta), var(--purple), transparent);
  opacity: 0.35;
}

.bg-glow {
  position: absolute;
  width: 560px; height: 560px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%);
  top: 50%; right: -180px;
  transform: translateY(-50%);
  pointer-events: none;
  filter: blur(40px);
}

.contact-inner {
  max-width: 680px;
  position: relative;
  z-index: 1;
}

.intro {
  color: rgba(232,232,240,0.65);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.checklist {
  list-style: none;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.checklist li {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.97rem;
  color: var(--text);
}
.check-icon {
  width: 22px; height: 22px;
  border-radius: 6px;
  background: rgba(0,212,255,0.07);
  border: 1px solid rgba(0,212,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--cyan);
}
.check-icon svg { width: 10px; height: 10px; }

.email-block { margin-bottom: 2.8rem; }

.email-btn {
  display: inline-flex;
  flex-direction: column;
  gap: 0.3rem;
  background: linear-gradient(135deg, rgba(139,92,246,0.18), rgba(255,45,120,0.18));
  border: 1px solid rgba(139,92,246,0.38);
  color: var(--text);
  text-decoration: none;
  padding: 1.1rem 1.8rem;
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  position: relative;
  overflow: hidden;
}
.email-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--purple), var(--magenta));
  opacity: 0;
  transition: opacity 0.3s ease;
}
.email-btn:hover::before { opacity: 1; }
.email-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 44px rgba(139,92,246,0.28);
  border-color: transparent;
}

.btn-label {
  position: relative;
  z-index: 1;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1rem;
}
.btn-address {
  position: relative;
  z-index: 1;
  font-size: 0.82rem;
  color: rgba(232,232,240,0.6);
  font-family: 'Courier New', monospace;
  letter-spacing: 0.03em;
}
.email-btn:hover .btn-address { color: rgba(255,255,255,0.7); }

.outro {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.25rem, 3vw, 1.6rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan), var(--purple), var(--magenta));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200%;
  animation: outro-shift 6s ease infinite;
}
@keyframes outro-shift {
  0%,100% { background-position: 0% 50%; }
  50%     { background-position: 100% 50%; }
}

@media (max-width: 480px) {
  .email-btn { width: 100%; }
}
</style>
