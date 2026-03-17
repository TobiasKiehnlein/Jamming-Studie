<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <span class="brand">{{ t.footer }}</span>
    <a href="mailto:jamming-studie@kiehnlein.de" class="footer-email">
      jamming-studie@kiehnlein.de
    </a>
    <span class="copy">© {{ year }}</span>
  </footer>
</template>

<style scoped>
footer {
  background: #050509;
  border-top: 1px solid var(--border);
  padding: 1.6rem var(--section-x);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.brand {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-email {
  color: var(--cyan);
  text-decoration: none;
  font-size: 0.85rem;
  transition: opacity 0.2s ease;
}
.footer-email:hover { opacity: 0.65; }

.copy {
  font-size: 0.78rem;
  color: rgba(136,136,170,0.5);
}

@media (max-width: 480px) {
  footer { justify-content: center; text-align: center; }
}
</style>
