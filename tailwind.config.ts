import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue}',
    './pages/**/*.vue',
    './content/**/*.{md,yml,json}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d8f1ff',
          200: '#b7e8ff',
          300: '#84daff',
          400: '#48c4ff',
          500: '#1ea8ff',
          600: '#0b8ae6',
          700: '#0e6db5',
          800: '#125d94',
          900: '#164f79',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
