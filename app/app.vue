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
                :download="cvDownloadFilename"
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
            <NuxtImg
              src="/images/pp-daniel.jpeg"
              :alt="t('home.hero.photoAlt')"
              width="512"
              height="512"
              sizes="(max-width: 1024px) 320px, 512px"
              quality="82"
              format="webp"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              preload
              class="aspect-square w-full rounded-3xl border border-slate-200 object-cover shadow-xl dark:border-slate-800"
            />
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

const { t, tm, rt, locale } = useI18n()
const route = useRoute()
const switchLocalePath = useSwitchLocalePath()
const siteConfig = useSiteConfig()

const siteUrl = computed(() => siteConfig.url || 'https://danielyosep.dev')
const pageTitle = computed(() => t('common.title'))
const pageDescription = computed(() => t('common.description'))
const canonicalUrl = computed(() => new URL(route.path || '/', siteUrl.value).toString())
const localePathEn = computed(() => switchLocalePath('en'))
const localePathId = computed(() => switchLocalePath('id'))
const ogImageUrl = computed(() => new URL('/images/pp-daniel.jpeg', siteUrl.value).toString())
const personJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Yosep',
    url: siteUrl.value,
    image: ogImageUrl.value,
    jobTitle: t('home.hero.title'),
    description: pageDescription.value,
    email: 'mailto:aldanielyosep@gmail.com',
    sameAs: ['https://github.com/aldanielyosep', 'https://www.linkedin.com/in/aldanielyosep'],
  }),
)

useSeoMeta({
  title: () => pageTitle.value,
  description: () => pageDescription.value,
  ogTitle: () => pageTitle.value,
  ogDescription: () => pageDescription.value,
  ogType: 'website',
  ogSiteName: () => pageTitle.value,
  ogLocale: () => (locale.value === 'id' ? 'id_ID' : 'en_US'),
  ogImage: () => ogImageUrl.value,
  ogImageAlt: () => t('home.hero.photoAlt'),
  twitterCard: 'summary_large_image',
  twitterTitle: () => pageTitle.value,
  twitterDescription: () => pageDescription.value,
  twitterImage: () => ogImageUrl.value,
})

useHead({
  htmlAttrs: {
    lang: () => locale.value,
  },
  link: [
    { rel: 'canonical', href: () => canonicalUrl.value },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: () => new URL(localePathEn.value, siteUrl.value).toString(),
    },
    {
      rel: 'alternate',
      hreflang: 'id',
      href: () => new URL(localePathId.value, siteUrl.value).toString(),
    },
    { rel: 'alternate', hreflang: 'x-default', href: () => new URL('/', siteUrl.value).toString() },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: () => personJsonLd.value,
    },
  ],
})

const readMessage = (key: string): unknown => {
  const translateMessage = tm as unknown as (path: string) => unknown
  return translateMessage(key)
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const toText = (value: unknown) => {
  if (typeof value === 'string') {
    return value
  }

  if (value == null) {
    return ''
  }

  type RtInput = Parameters<typeof rt>[0]
  return rt(value as RtInput)
}

const toTextArray = (value: unknown) =>
  Array.isArray(value) ? value.map((item) => toText(item)) : []

const careerTimeline = computed<CareerEntry[]>(() => {
  const timeline = readMessage('career.timeline')

  if (!Array.isArray(timeline)) {
    return []
  }

  return timeline.map((entry: unknown) => {
    const item = isRecord(entry) ? entry : {}

    return {
      company: toText(item.company),
      role: toText(item.role),
      startDate: toText(item.startDate),
      endDate: toText(item.endDate),
      overview: toText(item.overview),
      responsibilities: toTextArray(item.responsibilities),
      achievements: toTextArray(item.achievements),
      stack: toTextArray(item.stack),
    }
  })
})

const careerLabels = computed<CareerLabels>(() => {
  const labelsRaw = readMessage('career.labels')
  const labels = isRecord(labelsRaw) ? labelsRaw : {}

  return {
    responsibilities: toText(labels.responsibilities),
    achievements: toText(labels.achievements),
    techStack: toText(labels.techStack),
  }
})

const skillsCategories = computed<SkillsCategory[]>(() => {
  const categories = readMessage('skills.categories')

  if (!Array.isArray(categories)) {
    return []
  }

  return categories.map((entry: unknown) => {
    const item = isRecord(entry) ? entry : {}

    return {
      title: toText(item.title),
      description: toText(item.description),
      items: toTextArray(item.items),
    }
  })
})

const educationEntry = computed<EducationEntry>(() => {
  const entryRaw = readMessage('education.entry')
  const entry = isRecord(entryRaw) ? entryRaw : {}

  return {
    institution: toText(entry.institution),
    degree: toText(entry.degree),
    major: toText(entry.major),
    graduationYear: toText(entry.graduationYear),
    summary: toText(entry.summary),
  }
})

const projects = computed<ProjectEntry[]>(() => {
  const items = readMessage('projects.items')

  if (!Array.isArray(items)) {
    return []
  }

  return items.map((entry: unknown) => {
    const item = isRecord(entry) ? entry : {}

    return {
      title: toText(item.title),
      status: toText(item.status),
      thumbnail: toText(item.thumbnail),
      description: toText(item.description),
      role: toText(item.role),
      techStack: toTextArray(item.techStack),
      challenges: toTextArray(item.challenges),
      achievements: toTextArray(item.achievements),
      github: toText(item.github),
      demo: toText(item.demo),
    }
  })
})

const projectLabels = computed<ProjectLabels>(() => {
  const labelsRaw = readMessage('projects.labels')
  const labels = isRecord(labelsRaw) ? labelsRaw : {}

  return {
    myRole: toText(labels.myRole),
    techStack: toText(labels.techStack),
    challenges: toText(labels.challenges),
    achievements: toText(labels.achievements),
    github: toText(labels.github),
    demo: toText(labels.demo),
  }
})

const isExternalLink = (value: unknown) => {
  if (typeof value !== 'string') {
    return false
  }

  const normalized = value.trim().toLowerCase()
  return normalized.startsWith('http://') || normalized.startsWith('https://')
}

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

const cvUrl = '/cv/daniel-yosep-cv-2026-v3.1.pdf'
const cvDownloadFilename = 'daniel-yosep-cv-2026-v3.1.pdf'
const githubUrl = 'https://github.com/aldanielyosep'
const linkedinUrl = 'https://www.linkedin.com/in/aldanielyosep'
const emailUrl = 'mailto:aldanielyosep@gmail.com'
</script>
