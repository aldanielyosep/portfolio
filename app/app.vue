<template>
  <div
    class="min-h-screen bg-linear-to-b from-brand-50/60 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
  >
    <NuxtRouteAnnouncer />
    <AppNavbar />

    <main class="mx-auto w-full max-w-6xl px-4 pb-24 pt-12 sm:px-6">
      <section id="home" class="scroll-mt-28 py-14">
        <div class="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <p
              class="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm text-brand-700 dark:border-brand-900/60 dark:bg-brand-900/30 dark:text-brand-200"
            >
              <Icon name="i-lucide-sparkles" class="size-4" />
              {{ t('home.phaseReady') }}
            </p>

            <h1 class="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              {{ t('home.hero.name') }}
            </h1>
            <p class="mt-3 text-lg font-medium text-brand-700 dark:text-brand-300 sm:text-xl">
              {{ t('home.hero.title') }}
            </p>
            <p class="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              {{ t('home.hero.intro') }}
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-3">
              <a
                :href="cvUrl"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                <Icon name="i-lucide-file-down" class="size-4" />
                {{ t('home.hero.actions.downloadCv') }}
              </a>
              <a
                :href="githubUrl"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <Icon name="i-simple-icons-github" class="size-4" />
                {{ t('home.hero.actions.github') }}
              </a>
              <a
                :href="linkedinUrl"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <Icon name="i-simple-icons-linkedin" class="size-4" />
                {{ t('home.hero.actions.linkedin') }}
              </a>
              <a
                :href="emailUrl"
                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <Icon name="i-lucide-mail" class="size-4" />
                {{ t('home.hero.actions.email') }}
              </a>
            </div>
          </div>

          <div class="mx-auto w-full max-w-xs lg:mx-0">
            <img
              :src="profilePhoto"
              :alt="t('home.hero.photoAlt')"
              width="512"
              height="512"
              class="aspect-square w-full rounded-3xl border border-slate-200 object-cover shadow-xl dark:border-slate-800"
            />
          </div>
        </div>
      </section>

      <section id="about" class="scroll-mt-28 py-14">
        <h2 class="text-2xl font-semibold">{{ t('layout.nav.about') }}</h2>
        <p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {{ t('layout.placeholder.about') }}
        </p>
      </section>

      <section id="projects" class="scroll-mt-28 py-14">
        <h2 class="text-2xl font-semibold">{{ t('layout.nav.projects') }}</h2>
        <p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {{ t('layout.placeholder.projects') }}
        </p>
      </section>

      <section id="contact" class="scroll-mt-28 py-14">
        <h2 class="text-2xl font-semibold">{{ t('layout.nav.contact') }}</h2>
        <p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {{ t('layout.placeholder.contact') }}
        </p>
      </section>
    </main>

    <AppFooter />
    <ScrollToTopButton />
  </div>
</template>

<script setup lang="ts">
import profilePhoto from '../assets/images/pp-daniel.jpeg'

const { t } = useI18n()

const cvUrl = '/cv/DANIEL-YOSEP-CV-2026-v2.pdf'
const githubUrl = 'https://github.com/aldanielyosep'
const linkedinUrl = 'https://www.linkedin.com/in/aldanielyosep'
const emailUrl = 'mailto:aldanielyosep@gmail.com'
</script>
