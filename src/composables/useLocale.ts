import { ref, computed } from 'vue'
import { translations } from '../locales'
import type { Locale } from '../locales'

// Module-level singleton — all components share the same locale state
const locale = ref<Locale>('de')

export function useLocale() {
  const t = computed(() => translations[locale.value])

  function toggle() {
    locale.value = locale.value === 'de' ? 'en' : 'de'
  }

  return { locale, t, toggle }
}
