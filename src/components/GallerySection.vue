<script setup lang="ts">
import { onMounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useFadeIn } from '../composables/useFadeIn'

const { t } = useLocale()
const { observe } = useFadeIn()

onMounted(() => observe('#impressionen .fade-in'))

const photos = [
  { src: '/images/image.jpg',   alt: 'Musiker mit VR-Headset und E-Gitarre',        index: 0 },
  { src: '/images/image3.jpg',  alt: 'Musikerin mit VR-Headset am E-Schlagzeug',    index: 1 },
  { src: '/images/image5.jpeg', alt: 'Musikerin mit VR-Headset und Akustikgitarre', index: 2 },
  { src: '/images/image7.jpeg', alt: 'Musiker mit VR-Headset und E-Bass',           index: 3 },
  { src: '/images/image4.jpeg', alt: 'Musiker mit VR-Headset und Akkordeon',        index: 4 },
  { src: '/images/image8.jpeg', alt: 'Musiker spielt Gitarre, VR-Umgebung auf Monitor sichtbar', index: 5 },
]
</script>

<template>
  <section id="impressionen" class="gallery">
    <div class="gallery-inner">
      <div class="gallery-header fade-in">
        <span class="section-label">{{ t.gallery.label }}</span>
        <h2 class="section-title">{{ t.gallery.title }}</h2>
      </div>

      <div class="film-strip">
        <figure
          v-for="photo in photos"
          :key="photo.src"
          class="photo-card fade-in"
          :style="{ transitionDelay: `${0.08 * photo.index}s` }"
        >
          <div class="photo-wrap">
            <img
              :src="photo.src"
              :alt="photo.alt"
              loading="lazy"
            />
            <div class="photo-vignette" aria-hidden="true" />
          </div>
          <figcaption>{{ t.gallery.captions[photo.index] }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  padding: 6rem var(--section-x) 5rem;
  position: relative;
}

.gallery::before {
  content: '';
  position: absolute;
  top: 0; left: var(--section-x); right: var(--section-x);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,212,255,0.25), rgba(139,92,246,0.2), transparent);
}

.gallery-inner {
  max-width: 1280px;
  margin: 0 auto;
}

.gallery-header {
  margin-bottom: 2.5rem;
}

.gallery-header .section-title {
  margin-bottom: 0;
}

/* ── Film strip ── */
.film-strip {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.25rem;
}

/* ── Photo card ── */
.photo-card {
  list-style: none;
  margin: 0;
  position: relative; /* anchor for absolute figcaption */
}

.photo-wrap {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
  will-change: transform;
}

.photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  filter: brightness(0.88) saturate(1.08);
  transition: transform 0.6s ease, filter 0.35s ease;
}

/* Gradient overlay for caption legibility */
.photo-vignette {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 45%,
    rgba(7, 7, 15, 0.78) 100%
  );
  pointer-events: none;
}

figcaption {
  /* overlay on top of .photo-wrap — figure is position:relative */
  position: absolute;
  bottom: 0.85rem;
  left: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  font-family: 'Syne', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(232, 232, 240, 0.75);
  pointer-events: none;
  transition: color 0.3s ease;
}

/* ── Hover state ── */
.photo-card:hover .photo-wrap {
  border-color: rgba(0, 212, 255, 0.35);
  box-shadow:
    0 0 0 1px rgba(0, 212, 255, 0.12),
    0 12px 40px rgba(0, 212, 255, 0.13);
  transform: translateY(-6px);
}

.photo-card:hover .photo-wrap img {
  transform: scale(1.05);
  filter: brightness(0.96) saturate(1.15);
}

.photo-card:hover figcaption {
  color: rgba(232, 232, 240, 0.95);
}

/* ── Colour accent per card on hover — cycles cyan → purple → magenta ── */
.photo-card:nth-child(1):hover .photo-wrap { border-color: rgba(0, 212, 255, 0.4); }
.photo-card:nth-child(2):hover .photo-wrap { border-color: rgba(139, 92, 246, 0.4); }
.photo-card:nth-child(3):hover .photo-wrap { border-color: rgba(255, 45, 120, 0.35); }
.photo-card:nth-child(4):hover .photo-wrap { border-color: rgba(0, 212, 255, 0.35); }
.photo-card:nth-child(5):hover .photo-wrap { border-color: rgba(255, 45, 120, 0.4); }
.photo-card:nth-child(6):hover .photo-wrap { border-color: rgba(139, 92, 246, 0.35); }

/* 6 ÷ 6 = 1 row · 6 ÷ 3 = 2 rows · 6 ÷ 2 = 3 rows — all perfectly even */
@media (max-width: 900px) {
  .film-strip {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .film-strip {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  figcaption { font-size: 0.62rem; }
}
</style>
