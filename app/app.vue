<template>
  <div class="min-h-screen">
    <NuxtRouteAnnouncer />

    <main
      class="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-5 px-6 py-12"
    >
      <p
        class="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm text-brand-700"
      >
        <Icon name="i-lucide-package-check" class="size-4" />
        Phase 2 ready
      </p>

      <h1 class="text-4xl font-bold tracking-tight">{{ t('common.title') }}</h1>
      <p class="max-w-xl text-base text-slate-600 dark:text-slate-300">
        {{ t('common.description') }}
      </p>

      <div class="flex flex-wrap gap-3">
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
          @click="toggleLocale"
        >
          <Icon name="i-lucide-languages" class="size-4" />
          {{ t('common.switchLanguage') }}: {{ locale.toUpperCase() }}
        </button>

        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
          @click="toggleTheme"
        >
          <Icon name="i-lucide-moon-star" class="size-4" />
          {{ t('common.toggleTheme') }}: {{ colorMode.value }}
        </button>
      </div>

      <p class="font-mono text-sm text-slate-500 dark:text-slate-400">{{ now.toLocaleString() }}</p>
    </main>
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
const colorMode = useColorMode()
const now = useNow()

const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'id' : 'en'
}

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
