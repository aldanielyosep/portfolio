<template>
  <header
    class="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80"
  >
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
      <a href="#home" class="inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
        <span
          class="inline-flex size-7 items-center justify-center rounded-md bg-brand-500 text-white"
          >D</span
        >
        <span>Daniel Yosep</span>
      </a>

      <nav class="hidden items-center gap-1 md:flex">
        <a
          v-for="item in links"
          :key="item.href"
          :href="item.href"
          class="rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-slate-50"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <div
          class="flex items-center gap-1 rounded-full border border-slate-300/80 bg-white/80 p-1 dark:border-slate-700 dark:bg-slate-900/60"
        >
          <button
            type="button"
            class="rounded-full px-3 py-2 text-sm font-semibold transition"
            :class="
              currentLocale === 'en'
                ? 'bg-brand-600 text-white'
                : 'text-slate-600 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300'
            "
            @click="changeLocale('en')"
          >
            EN
          </button>
          <button
            type="button"
            class="rounded-full px-3 py-2 text-sm font-semibold transition"
            :class="
              currentLocale === 'id'
                ? 'bg-brand-600 text-white'
                : 'text-slate-600 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300'
            "
            @click="changeLocale('id')"
          >
            ID
          </button>
        </div>
        <ClientOnly>
          <ThemeSwitcher />
        </ClientOnly>
      </div>

      <div class="flex items-center gap-2 md:hidden">
        <div
          class="flex items-center gap-1 rounded-full border border-slate-300/80 bg-white/80 p-1 dark:border-slate-700 dark:bg-slate-900/60"
        >
          <button
            type="button"
            class="rounded-full px-2.5 py-1.5 text-xs font-semibold transition"
            :class="
              currentLocale === 'en'
                ? 'bg-brand-600 text-white'
                : 'text-slate-600 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300'
            "
            @click="changeLocale('en')"
          >
            EN
          </button>
          <button
            type="button"
            class="rounded-full px-2.5 py-1.5 text-xs font-semibold transition"
            :class="
              currentLocale === 'id'
                ? 'bg-brand-600 text-white'
                : 'text-slate-600 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300'
            "
            @click="changeLocale('id')"
          >
            ID
          </button>
        </div>
      </div>

      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium md:hidden dark:border-slate-700"
        :aria-label="t('layout.openMenu')"
        @click="isOpen = true"
      >
        <Icon name="i-lucide-menu" class="size-4" />
        {{ t('layout.menu') }}
      </button>
    </div>
  </header>

  <MobileNav :open="isOpen" @close="isOpen = false" />
</template>

<script setup lang="ts">
import ThemeSwitcher from '../common/ThemeSwitcher.vue'
import MobileNav from './MobileNav.vue'

const { t, locale, setLocale } = useI18n()
const isOpen = ref(false)

const currentLocale = computed(() => locale.value)

const changeLocale = async (nextLocale: 'en' | 'id') => {
  if (locale.value !== nextLocale) {
    await setLocale(nextLocale)
  }
}

const links = computed(() => [
  { label: t('layout.nav.home'), href: '#home' },
  { label: t('layout.nav.about'), href: '#about' },
  { label: t('layout.nav.career'), href: '#career' },
  { label: t('layout.nav.skills'), href: '#skills' },
  { label: t('layout.nav.education'), href: '#education' },
  { label: t('layout.nav.projects'), href: '#projects' },
])
</script>
