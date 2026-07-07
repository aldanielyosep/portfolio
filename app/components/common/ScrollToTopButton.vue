<template>
  <Transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="translate-y-2 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-2 opacity-0"
  >
    <button
      v-if="isVisible"
      type="button"
      class="fixed bottom-5 right-5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-brand-300 bg-white/90 text-brand-700 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-brand-50 dark:border-brand-700 dark:bg-slate-900/85 dark:text-brand-300"
      :aria-label="t('layout.scrollToTop')"
      @click="scrollToTop"
    >
      <Icon name="i-lucide-arrow-up" class="size-5" />
    </button>
  </Transition>
</template>

<script setup lang="ts">
const { t } = useI18n()
const y = useWindowScroll().y
const isVisible = computed(() => y.value > 280)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
