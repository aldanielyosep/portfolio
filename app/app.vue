<template>
  <div
    class="min-h-screen bg-linear-to-b from-brand-50/60 via-white to-white text-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 dark:text-slate-100"
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
            <!-- eslint-disable vue/html-self-closing -->
            <img
              :src="profilePhoto"
              :alt="t('home.hero.photoAlt')"
              width="512"
              height="512"
              class="aspect-square w-full rounded-3xl border border-slate-200 object-cover shadow-xl dark:border-slate-800"
            />
            <!-- eslint-enable vue/html-self-closing -->
          </div>
        </div>
      </section>

      <section id="about" class="scroll-mt-28 py-14">
        <div class="mb-8 max-w-3xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300"
          >
            {{ t('about.kicker') }}
          </p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {{ t('about.title') }}
          </h2>
          <p class="mt-4 text-slate-600 dark:text-slate-300">
            {{ t('about.summary') }}
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article
            class="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p class="text-sm font-semibold text-brand-700 dark:text-brand-300">
              {{ t('about.experience.label') }}
            </p>
            <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
              {{ t('about.experience.value', { years: experienceYears }) }}
            </p>
            <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {{ t('about.experience.description') }}
            </p>
          </article>

          <article
            class="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p class="text-sm font-semibold text-brand-700 dark:text-brand-300">
              {{ t('about.position.label') }}
            </p>
            <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
              {{ t('about.position.value') }}
            </p>
            <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {{ t('about.position.description') }}
            </p>
          </article>

          <article
            class="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p class="text-sm font-semibold text-brand-700 dark:text-brand-300">
              {{ t('about.company.label') }}
            </p>
            <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
              {{ t('about.company.value') }}
            </p>
            <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {{ t('about.company.description') }}
            </p>
          </article>

          <article
            class="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p class="text-sm font-semibold text-brand-700 dark:text-brand-300">
              {{ t('about.philosophy.label') }}
            </p>
            <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
              {{ t('about.philosophy.value') }}
            </p>
            <p
              class="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
              {{ t('about.philosophy.description') }}
            </p>
          </article>

          <article
            class="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 md:col-span-2 xl:col-span-1"
          >
            <p class="text-sm font-semibold text-brand-700 dark:text-brand-300">
              {{ t('about.funFact.label') }}
            </p>
            <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
              {{ t('about.funFact.value') }}
            </p>
            <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {{ t('about.funFact.description') }}
            </p>
          </article>
        </div>
      </section>

      <section id="career" class="scroll-mt-28 py-14">
        <div class="mb-8 max-w-3xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300"
          >
            {{ t('career.kicker') }}
          </p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {{ t('career.title') }}
          </h2>
          <p class="mt-4 text-slate-600 dark:text-slate-300">
            {{ t('career.summary') }}
          </p>
        </div>

        <div
          class="relative space-y-6 before:absolute before:bottom-8 before:left-4 before:top-8 before:w-px before:bg-slate-200 dark:before:bg-slate-800"
        >
          <article
            v-for="item in careerTimeline"
            :key="`${item.company}-${item.startDate}`"
            class="relative pl-10"
          >
            <span
              class="absolute left-0 top-8 flex size-8 items-center justify-center rounded-full bg-brand-600 text-white ring-8 ring-white dark:ring-slate-950"
            >
              <Icon name="i-lucide-briefcase-business" class="size-4" />
            </span>

            <div
              class="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p
                    class="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300"
                  >
                    {{ item.company }}
                  </p>
                  <h3 class="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
                    {{ item.role }}
                  </h3>
                </div>

                <div
                  class="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {{ item.startDate }} - {{ item.endDate }}
                </div>
              </div>

              <p class="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                {{ item.overview }}
              </p>

              <div class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_18rem]">
                <div>
                  <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {{ careerLabels.responsibilities }}
                  </p>
                  <ul class="mt-3 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <li v-for="responsibility in item.responsibilities" :key="responsibility">
                      {{ responsibility }}
                    </li>
                  </ul>
                </div>

                <div>
                  <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {{ careerLabels.achievements }}
                  </p>
                  <ul class="mt-3 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <li v-for="achievement in item.achievements" :key="achievement">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>

                <div>
                  <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {{ careerLabels.techStack }}
                  </p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <span
                      v-for="technology in item.stack"
                      :key="technology"
                      class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {{ technology }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" class="scroll-mt-28 py-14">
        <div class="mb-8 max-w-3xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300"
          >
            {{ t('skills.kicker') }}
          </p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {{ t('skills.title') }}
          </h2>
          <p class="mt-4 text-slate-600 dark:text-slate-300">
            {{ t('skills.summary') }}
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="category in skillsCategories"
            :key="category.title"
            class="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300"
            >
              {{ category.title }}
            </p>
            <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {{ category.description }}
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="item in category.items"
                :key="item"
                class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                {{ item }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="education" class="scroll-mt-28 py-14">
        <div class="mb-8 max-w-3xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300"
          >
            {{ t('education.kicker') }}
          </p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {{ t('education.title') }}
          </h2>
          <p class="mt-4 text-slate-600 dark:text-slate-300">
            {{ t('education.summary') }}
          </p>
        </div>

        <article
          class="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p
                class="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300"
              >
                {{ educationEntry.institution }}
              </p>
              <h3 class="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
                {{ educationEntry.degree }}
              </h3>
              <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {{ educationEntry.major }}
              </p>
            </div>

            <div
              class="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {{ educationEntry.graduationYear }}
            </div>
          </div>

          <p class="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            {{ educationEntry.summary }}
          </p>
        </article>
      </section>

      <section id="projects" class="scroll-mt-28 py-14">
        <div class="mb-8 max-w-3xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300"
          >
            {{ t('projects.kicker') }}
          </p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {{ t('projects.title') }}
          </h2>
          <p class="mt-4 text-slate-600 dark:text-slate-300">
            {{ t('projects.summary') }}
          </p>
          <p
            class="mt-3 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
          >
            {{ t('projects.confidentialityNote') }}
          </p>
        </div>

        <div class="grid gap-4 lg:grid-cols-2">
          <article
            v-for="project in projects"
            :key="project.title"
            class="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300"
                >
                  {{ project.thumbnail }}
                </p>
                <h3 class="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
                  {{ project.title }}
                </h3>
              </div>
              <span
                class="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                {{ project.status }}
              </span>
            </div>

            <p class="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {{ project.description }}
            </p>

            <div class="mt-5 space-y-4">
              <div>
                <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {{ projectLabels.myRole }}
                </p>
                <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {{ project.role }}
                </p>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {{ projectLabels.techStack }}
                </p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="technology in project.techStack"
                    :key="technology"
                    class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {{ technology }}
                  </span>
                </div>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {{ projectLabels.challenges }}
                </p>
                <ul class="mt-2 space-y-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <li v-for="challenge in project.challenges" :key="challenge">{{ challenge }}</li>
                </ul>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {{ projectLabels.achievements }}
                </p>
                <ul class="mt-2 space-y-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <li v-for="achievement in project.achievements" :key="achievement">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="mt-5 grid gap-3 border-t border-slate-200 pt-4 text-sm dark:border-slate-800"
            >
              <div class="flex items-start justify-between gap-3">
                <p class="font-semibold text-slate-900 dark:text-slate-100">
                  {{ projectLabels.github }}
                </p>
                <a
                  v-if="isExternalLink(project.github)"
                  :href="project.github"
                  target="_blank"
                  rel="noreferrer"
                  class="text-brand-700 hover:underline dark:text-brand-300"
                >
                  {{ project.github }}
                </a>
                <p v-else class="text-right text-slate-600 dark:text-slate-300">
                  {{ project.github }}
                </p>
              </div>
              <div class="flex items-start justify-between gap-3">
                <p class="font-semibold text-slate-900 dark:text-slate-100">
                  {{ projectLabels.demo }}
                </p>
                <a
                  v-if="isExternalLink(project.demo)"
                  :href="project.demo"
                  target="_blank"
                  rel="noreferrer"
                  class="text-brand-700 hover:underline dark:text-brand-300"
                >
                  {{ project.demo }}
                </a>
                <p v-else class="text-right text-slate-600 dark:text-slate-300">
                  {{ project.demo }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

    <AppFooter />
    <ScrollToTopButton />
  </div>
</template>

<script setup lang="ts">
import profilePhoto from '../assets/images/pp-daniel.jpeg'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import ScrollToTopButton from './components/common/ScrollToTopButton.vue'

type CareerEntry = {
  company: string
  role: string
  startDate: string
  endDate: string
  overview: string
  responsibilities: string[]
  achievements: string[]
  stack: string[]
}

type CareerLabels = {
  responsibilities: string
  achievements: string
  techStack: string
}

type SkillsCategory = {
  title: string
  description: string
  items: string[]
}

type EducationEntry = {
  institution: string
  degree: string
  major: string
  graduationYear: string
  summary: string
}

type ProjectEntry = {
  title: string
  status: string
  thumbnail: string
  description: string
  role: string
  techStack: string[]
  challenges: string[]
  achievements: string[]
  github: string
  demo: string
}

type ProjectLabels = {
  myRole: string
  techStack: string
  challenges: string
  achievements: string
  github: string
  demo: string
}

const { t, tm } = useI18n()

const careerTimeline = computed(() => tm('career.timeline') as CareerEntry[])
const careerLabels = computed(() => tm('career.labels') as CareerLabels)
const skillsCategories = computed(() => tm('skills.categories') as SkillsCategory[])
const educationEntry = computed(() => tm('education.entry') as EducationEntry)
const projects = computed(() => tm('projects.items') as ProjectEntry[])
const projectLabels = computed(() => tm('projects.labels') as ProjectLabels)

const isExternalLink = (value: string) =>
  value.startsWith('http://') || value.startsWith('https://')

const experienceStartDate = new Date(2015, 6, 1)

const experienceYears = computed(() => {
  const now = new Date()
  let years = now.getFullYear() - experienceStartDate.getFullYear()
  const anniversaryThisYear = new Date(
    now.getFullYear(),
    experienceStartDate.getMonth(),
    experienceStartDate.getDate(),
  )

  if (now < anniversaryThisYear) {
    years -= 1
  }

  return years
})

const cvUrl = '/cv/DANIEL-YOSEP-CV-2026-v3.1.pdf'
const githubUrl = 'https://github.com/aldanielyosep'
const linkedinUrl = 'https://www.linkedin.com/in/aldanielyosep'
const emailUrl = 'mailto:aldanielyosep@gmail.com'
</script>
