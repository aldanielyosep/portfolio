// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],
  modules: [
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
        weights: ['400', '500', '600', '700'],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
        preload: true,
      },
      {
        name: 'Geist Mono',
        provider: 'google',
        weights: ['400', '500'],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
        preload: false,
      },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    vueI18n: './i18n.config.ts',
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
    format: ['avif', 'webp'],
    quality: 82,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  site: {
    url: 'https://danielyosep.dev',
    name: 'Daniel Yosep Portfolio',
    description: 'Personal portfolio of Daniel Yosep',
    defaultLocale: 'en',
  },
})
