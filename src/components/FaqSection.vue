<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useFadeIn } from '../composables/useFadeIn'

const { t, locale } = useLocale()
const openKey = ref<string | null>(null)

// Reset open accordion when language switches
watch(locale, () => { openKey.value = null })

function toggle(key: string) {
  openKey.value = openKey.value === key ? null : key
}

const { observe } = useFadeIn()
onMounted(() => observe('#faq .fade-in'))
</script>

<template>
  <section id="faq">
    <div class="top-line" aria-hidden="true" />

    <div class="faq-inner">
      <span class="section-label fade-in">{{ t.faq.label }}</span>
      <h2 class="section-title fade-in d1">
        {{ t.faq.headingLine1 }}<br />{{ t.faq.headingLine2 }}
      </h2>

      <div v-for="(group, gi) in t.faq.groups" :key="gi" class="faq-group fade-in d2">
        <h3 class="group-title">
          <span :class="['group-icon', group.iconClass]">{{ group.icon }}</span>
          {{ group.title }}
        </h3>

        <div class="faq-items">
          <div
            v-for="(item, ii) in group.items"
            :key="`${locale}-${gi}-${ii}`"
            :class="['faq-item', { open: openKey === `${gi}-${ii}` }]"
            @click="toggle(`${gi}-${ii}`)"
          >
            <div class="faq-q">
              <span class="faq-q-text">{{ item.q }}</span>
              <span class="faq-icon" aria-hidden="true">
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="6" y1="1" x2="6" y2="11" />
                  <line x1="1" y1="6" x2="11" y2="6" />
                </svg>
              </span>
            </div>
            <div class="faq-a">
              <div class="faq-a-inner">{{ item.a }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: var(--bg-2);
  position: relative;
  padding: clamp(4rem, 10vw, 8rem) var(--section-x);
}

.top-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--cyan), var(--purple), transparent);
  opacity: 0.35;
}

.faq-inner { max-width: 800px; }

.faq-group {
  margin-bottom: 3rem;
}
.faq-group:last-child { margin-bottom: 0; }

.group-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.group-icon {
  width: 32px; height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  flex-shrink: 0;
}
.group-icon.cyan    { background: rgba(0,212,255,0.09); border: 1px solid rgba(0,212,255,0.2); }
.group-icon.magenta { background: rgba(255,45,120,0.09); border: 1px solid rgba(255,45,120,0.2); }

.faq-items {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.faq-item {
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.25s ease;
}
.faq-item:hover       { border-color: rgba(0,212,255,0.2); }
.faq-item.open        { border-color: rgba(0,212,255,0.32); }

.faq-q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.4rem;
  user-select: none;
}
.faq-q-text {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text);
}

.faq-icon {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform 0.3s ease, background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}
.faq-icon svg { width: 12px; height: 12px; }

.faq-item.open .faq-icon {
  transform: rotate(45deg);
  background: rgba(0,212,255,0.1);
  border-color: rgba(0,212,255,0.3);
  color: var(--cyan);
}

.faq-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.faq-item.open .faq-a { max-height: 220px; }

.faq-a-inner {
  padding: 0 1.4rem 1.2rem;
  border-top: 1px solid var(--border);
  padding-top: 1rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.75;
}
</style>
