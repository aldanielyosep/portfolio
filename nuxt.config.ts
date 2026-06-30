// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxtjs/seo',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  fonts: {
    families: [
      {
        name: 'Geist',
        provider: 'google',
      },
      {
        name: 'Geist Mono',
        provider: 'google',
      },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'id', name: 'Indonesia', file: 'id.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'portfolio_i18n',
      redirectOn: 'root',
    },
  },
  image: {
    format: ['webp'],
  },
  site: {
    url: 'https://danielyosep.dev',
    name: 'Daniel Yosep Portfolio',
    description: 'Personal portfolio of Daniel Yosep',
    defaultLocale: 'en',
  },
})
