<template>
  <button
    type="button"
    class="inline-flex items-center gap-2 rounded-lg border border-slate-300/80 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
    :aria-label="t('common.toggleTheme')"
    :aria-pressed="isDark"
    @click="toggleTheme"
  >
    <Icon :name="iconName" class="size-4" />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const { t } = useI18n()

const isDark = computed(() => colorMode.value === 'dark')
const iconName = computed(() => (isDark.value ? 'i-lucide-sun-medium' : 'i-lucide-moon-star'))
const label = computed(() => (isDark.value ? t('layout.theme.light') : t('layout.theme.dark')))

const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>
