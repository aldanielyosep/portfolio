# Daniel Yosep Portfolio

[![CI](https://github.com/aldanielyosep/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/aldanielyosep/portfolio/actions/workflows/ci.yml)

![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?logo=cloudflare)
![Status](https://img.shields.io/badge/Status-Active-success)

A modern, fast, and bilingual personal portfolio built with **Nuxt 4**.

This website showcases my professional experience, technical expertise, engineering leadership, AI projects, and career journey.

> 🚧 Currently under active development.

---

## ✨ Features

- 🌐 English & Indonesian
- 📱 Responsive Design
- 🌙 Dark / Light Mode
- ⚡ Static Site Generation (SSG)
- 🔍 SEO Optimized
- 📄 Downloadable Resume (CV)
- 💼 Career Timeline
- 🛠 Technical Skills
- 🚀 Project Portfolio
- 🤖 AI Portfolio
- 📚 Technical Blog _(Planned)_

---

## 🛠 Tech Stack

| Category              | Technology          |
| --------------------- | ------------------- |
| Framework             | Nuxt 4              |
| Language              | TypeScript          |
| Styling               | Tailwind CSS        |
| Images                | Nuxt Image          |
| Fonts                 | Nuxt Fonts          |
| Internationalization  | Nuxt i18n           |
| Theme                 | Color Mode          |
| Linting               | ESLint              |
| Formatting            | Prettier            |
| Git Hooks             | Husky + lint-staged |
| Commit Convention     | Commitlint          |
| CI/CD                 | GitHub Actions      |
| Dependency Management | Dependabot          |
| Deployment            | Cloudflare Pages    |

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 📦 Available Scripts

| Command                | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start development server     |
| `npm run build`        | Build for production         |
| `npm run preview`      | Preview production build     |
| `npm run generate`     | Generate static site         |
| `npm run lint`         | Run ESLint                   |
| `npm run lint:fix`     | Fix lint issues              |
| `npm run format`       | Format source code           |
| `npm run format:check` | Check formatting             |
| `npm run typecheck`    | Run TypeScript type checking |

---

## 📂 Project Structure

```text
.
├── .github/
│   ├── workflows/
│   └── dependabot.yml
├── app/
├── assets/
├── components/
├── composables/
├── content/
│   ├── en/
│   └── id/
├── docs/
├── layouts/
├── middleware/
├── pages/
├── plugins/
├── public/
│   └── cv/
├── server/
├── shared/
├── types/
├── utils/
├── package.json
└── nuxt.config.ts
```

---

## 🌍 Internationalization

This portfolio supports two languages:

- 🇺🇸 English
- 🇮🇩 Bahasa Indonesia

---

## 📄 Resume

The latest resume can be downloaded directly from the website.

- English Version
- Indonesian Version

---

## 🚀 CI/CD

Every push and pull request automatically runs the following checks:

- Install dependencies
- Type checking
- ESLint
- Prettier format validation
- Production build

### Cloudflare Auto Deploy

This repository includes a deployment workflow at
`.github/workflows/deploy-cf-pages.yml`.

On every push to `main`, GitHub Actions will:

1. Install dependencies
2. Generate static output via `npm run generate`
3. Deploy `.output/public` to Cloudflare Pages project `portfolio`

Required GitHub repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Recommended API token permissions:

- `Cloudflare Pages:Edit`
- `Account:Read`

---

## 📈 Roadmap

- [ ] Landing Page
- [ ] About Me
- [ ] Career Journey
- [ ] Skills
- [ ] Featured Projects
- [ ] AI Portfolio
- [ ] Resume Download
- [ ] Blog
- [ ] Contact Page
- [ ] SEO Optimization
- [ ] Analytics

---

## 📜 License

This project is licensed under the MIT License.
