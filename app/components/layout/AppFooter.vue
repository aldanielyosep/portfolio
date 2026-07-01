<template>
  <footer
    class="border-t border-slate-200/80 bg-white/90 py-8 dark:border-slate-800 dark:bg-slate-950/90"
  >
    <div
      class="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6"
    >
      <div>
        <p class="text-sm font-semibold">Daniel Yosep</p>
        <p class="text-sm text-slate-600 dark:text-slate-300">{{ t('layout.footer.tagline') }}</p>
      </div>

      <div class="flex items-center gap-4 text-sm">
        <a
          href="https://github.com/aldanielyosep"
          target="_blank"
          rel="noreferrer"
          class="text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aldanielyosep"
          target="_blank"
          rel="noreferrer"
          class="text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
