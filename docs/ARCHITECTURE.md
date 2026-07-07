# ARCHITECTURE

Dokumen ini menjelaskan desain teknis portfolio berbasis Nuxt 4, agar pengembangan fitur tetap konsisten, mudah dipelihara, dan aman untuk deployment statis di Cloudflare Pages.

## 1. Tujuan Arsitektur

- Menjaga struktur proyek tetap sederhana untuk personal site, tetapi siap berkembang.
- Memisahkan concern UI, konten, i18n, SEO, dan deployment.
- Mengoptimalkan performa (SSG, optimasi gambar, font, dan payload).
- Memastikan hasil build stabil untuk hosting statis (Cloudflare Pages).

## 2. Stack dan Modul Utama

- Framework: Nuxt 4 (SSG dengan `nuxt generate`)
- Language: TypeScript
- Styling: Tailwind CSS
- UI/Icons: `@nuxt/icon`
- Fonts: `@nuxt/fonts` (Geist dan Geist Mono)
- i18n: `@nuxtjs/i18n`
- Content: `@nuxt/content`
- Utilities: `@vueuse/nuxt`
- SEO: `@nuxtjs/seo` (site config, robots, sitemap)
- Deployment: Cloudflare Pages via GitHub Actions

## 3. Struktur Folder

Struktur folder utama dan tanggung jawabnya:

```text
.
├── app/
│   ├── app.vue                      # Entry UI utama (layout + section halaman)
│   ├── assets/
│   │   ├── css/main.css             # Global styles (Tailwind entry)
│   │   └── files/                   # Asset build-time (contoh: PDF CV hashed)
│   └── components/
│       ├── common/                  # Komponen reusable umum
│       └── layout/                  # Komponen navbar/footer/mobile nav
├── content/
│   ├── en/                          # Konten bahasa Inggris
│   └── id/                          # Konten bahasa Indonesia
├── i18n/
│   ├── i18n.config.ts               # Konfigurasi vue-i18n
│   └── locales/
│       ├── en.json                  # Dictionary EN
│       └── id.json                  # Dictionary ID
├── public/                          # Static files mentah (copied as-is ke output)
│   ├── _headers                     # Cloudflare Pages header rules
│   ├── _redirects                   # Cloudflare Pages redirect rules
│   ├── _robots.txt                  # robots input (oleh modul SEO)
│   ├── images/                      # Aset publik non-hashed
│   └── cv/                          # Legacy/public CV path
├── server/
│   └── middleware/                  # Server middleware Nuxt (runtime-aware)
├── scripts/
│   └── seo-check.mjs                # Script validasi SEO pasca-generate
├── docs/
│   └── ARCHITECTURE.md              # Dokumen arsitektur ini
├── nuxt.config.ts                   # Konfigurasi utama Nuxt + modules
└── .github/workflows/
    └── deploy-cf-pages.yml          # Pipeline deploy ke Cloudflare Pages
```

Catatan:

- Dengan app-source Nuxt 4, path alias `~/assets/...` merujuk ke `app/assets/...`.
- Untuk file unduhan kritis (CV), gunakan asset build (`app/assets/files`) agar URL final di-hash dan tidak bentrok dengan static fallback route.

## 4. Prinsip Komponen

Prinsip desain komponen yang dipakai:

- Single responsibility: satu komponen menangani satu concern UI.
- Presentational-first: komponen UI menerima data siap pakai dari parent/composable.
- Reusability: komponen umum ditempatkan di `app/components/common`.
- Layout isolation: elemen layout global di `app/components/layout`.
- Accessibility baseline: elemen interaktif wajib jelas secara semantik (button/link/aria seperlunya).

Pola data di halaman utama (`app/app.vue`):

- Data teks multi-bahasa diambil dari i18n (`t`, `tm`, `rt`).
- Struktur list/objek (timeline, skills, projects) diparsing defensif (type guard + normalisasi) sebelum render.
- Logic utilitas kecil (`isExternalLink`, normalisasi text array) berada dekat consumer untuk keterbacaan.

## 5. Strategi i18n

Konfigurasi i18n utama (dari `nuxt.config.ts`):

- `defaultLocale: en`
- `strategy: prefix_except_default`
- Locale aktif: `en`, `id`
- Browser language detection aktif dengan cookie `portfolio_i18n`

Dampak routing:

- EN (default): route tanpa prefix (contoh `/`).
- ID: route dengan prefix `/id/...`.

Prinsip konten i18n:

- String sederhana: gunakan `t('path.key')`.
- Data kompleks/list/object: gunakan `tm(...)` lalu normalisasi dengan `rt(...)` untuk menghindari render AST mentah.
- Semua key lintas bahasa harus simetris antara `en.json` dan `id.json`.

## 6. Strategi SEO

Lapisan SEO yang digunakan:

- Global site metadata di `nuxt.config.ts` (`site.url`, `site.name`, `site.description`).
- Page-level SEO di `app/app.vue` memakai `useSeoMeta` dan `useHead`.
- Canonical dan alternate hreflang (`en`, `id`, `x-default`) dibentuk dari URL situs.
- Structured data JSON-LD (Person schema) disisipkan via `useHead`.
- Sitemap aktif melalui modul SEO (`sitemap.enabled: true`).
- Robots dikonfigurasi via `robots.groups` dan input file `public/_robots.txt`.

Prinsip SEO implementasi:

- Satu sumber kebenaran untuk title/description per halaman.
- OpenGraph dan Twitter card mengikuti metadata utama.
- Gambar OG menggunakan URL absolut.
- Hindari duplicate content lintas locale dengan canonical + hreflang.

## 7. Strategi Download CV (Stabil di Mobile)

Masalah umum pada hosting statis + mobile browser:

- Request file PDF bisa ter-rewrite ke HTML fallback (`.pdf.html`) saat route rule tidak tepat.
- Atribut `download` saja tidak selalu cukup di iOS/browser tertentu.

Strategi yang dipakai:

- CV disimpan di `app/assets/files/...pdf` dan diimport sebagai URL build (`?url`).
- Tombol download menjalankan fetch + blob + `URL.createObjectURL` sebelum trigger unduhan.
- Fallback ke `window.location.href` jika fetch gagal.
- Tetap pertahankan `public/_headers` (`Content-Disposition: attachment`) dan `public/_redirects` untuk jalur locale CV.

Manfaat:

- URL file di-hash dan dipastikan ada di output build.
- Tidak tergantung pada path publik yang rentan tertimpa fallback rule.
- Perilaku download lebih konsisten di mobile.

## 8. Deployment dan CI/CD

Pipeline deploy berada di `.github/workflows/deploy-cf-pages.yml`:

1. Trigger pada push ke `main` atau manual (`workflow_dispatch`).
2. Setup Node.js 24 dan cache npm.
3. Install dependency (`npm ci`).
4. Build static (`npm run generate`) menghasilkan `.output/public`.
5. Verifikasi akses project Cloudflare Pages.
6. Deploy `.output/public` via Wrangler Action.

Konfigurasi penting:

- Project name default: `portfolio` (dapat dioverride variable repo).
- Secrets wajib:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`

Artefak deploy:

- Seluruh hasil SSG berada di `.output/public`.
- File Cloudflare khusus (`_headers`, `_redirects`) harus ada di output saat generate.

## 9. Pedoman Pengembangan Lanjutan

- Tambah fitur UI baru: pisahkan komponen reusable ke `app/components/common`.
- Tambah section besar: pertimbangkan ekstraksi dari `app/app.vue` ke komponen section terpisah.
- Tambah bahasa: update `nuxt.config.ts` locales + `i18n/locales/<lang>.json` secara simetris.
- Tambah halaman: definisikan metadata SEO halaman sejak awal.
- Sebelum merge: jalankan `lint`, `typecheck`, dan `generate`.

## 10. Risiko Teknis dan Mitigasi

- Risiko: route/static rewrite menyebabkan file download menjadi HTML.
  - Mitigasi: asset-bundled CV + `_headers` + `_redirects` + validasi network di production.

- Risiko: mismatch key i18n antar bahasa.
  - Mitigasi: checklist sinkronisasi key saat menambah copy baru.

- Risiko: metadata SEO tidak konsisten antar locale.
  - Mitigasi: gunakan fungsi computed tunggal untuk title/description/canonical/hreflang.

- Risiko: regression performa karena aset besar.
  - Mitigasi: optimasi gambar dengan `@nuxt/image`, lazy loading, dan audit Lighthouse berkala.

## 11. Checklist Operasional

Sebelum release:

- `npm run lint`
- `npm run typecheck`
- `npm run generate`
- Verifikasi file penting di `.output/public`:
  - sitemap
  - robots
  - `_headers`
  - `_redirects`
  - URL CV bundle di HTML hasil generate

Setelah deploy:

- Cek canonical/hreflang pada halaman utama.
- Cek robots dan sitemap endpoint.
- Cek tombol download CV pada desktop + mobile (termasuk iOS).
- Cek status deployment commit hash sesuai perubahan terakhir.
