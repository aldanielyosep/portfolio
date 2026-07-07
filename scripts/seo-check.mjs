import fs from 'node:fs'
import path from 'node:path'

const outDir = path.join(process.cwd(), '.output', 'public')

const requiredFiles = [
  'index.html',
  'robots.txt',
  'sitemap_index.xml',
  '__sitemap__/en.xml',
  '__sitemap__/id.xml',
  'favicon.ico',
  'apple-touch-icon.png',
]

const checkResults = []

const addResult = (ok, label, details = '') => {
  checkResults.push({ ok, label, details })
}

for (const relPath of requiredFiles) {
  const absPath = path.join(outDir, relPath)
  addResult(fs.existsSync(absPath), `File exists: ${relPath}`)
}

const indexPath = path.join(outDir, 'index.html')
if (fs.existsSync(indexPath)) {
  const html = fs.readFileSync(indexPath, 'utf8')

  const htmlChecks = [
    ['Meta description', /<meta[^>]+name="description"[^>]+content="[^"]+/i],
    ['OpenGraph title', /<meta[^>]+property="og:title"[^>]+content="[^"]+/i],
    ['OpenGraph description', /<meta[^>]+property="og:description"[^>]+content="[^"]+/i],
    ['OpenGraph image', /<meta[^>]+property="og:image"[^>]+content="[^"]+/i],
    ['Twitter card', /<meta[^>]+name="twitter:card"[^>]+content="[^"]+/i],
    ['Twitter title', /<meta[^>]+name="twitter:title"[^>]+content="[^"]+/i],
    ['Twitter description', /<meta[^>]+name="twitter:description"[^>]+content="[^"]+/i],
    ['Canonical link', /<link[^>]+rel="canonical"[^>]+href="[^"]+/i],
    ['Alternate hreflang en', /<link[^>]+rel="alternate"[^>]+hreflang="en"[^>]+href="[^"]+/i],
    ['Alternate hreflang id', /<link[^>]+rel="alternate"[^>]+hreflang="id"[^>]+href="[^"]+/i],
    ['JSON-LD script', /<script[^>]+type="application\/ld\+json"[^>]*>.+<\/script>/is],
    ['Favicon link', /<link[^>]+rel="icon"[^>]+href="\/favicon\.ico"/i],
    ['Apple touch icon link', /<link[^>]+rel="apple-touch-icon"[^>]+href="\/apple-touch-icon\.png"/i],
  ]

  for (const [label, pattern] of htmlChecks) {
    addResult(pattern.test(html), `index.html: ${label}`)
  }
} else {
  addResult(false, 'index.html checks', 'index.html missing')
}

const robotsPath = path.join(outDir, 'robots.txt')
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8')
  addResult(/Sitemap:\s*https?:\/\/[^\s]+\/sitemap_index\.xml/i.test(robots), 'robots.txt: sitemap_index.xml declared')
}

const hasFailure = checkResults.some((entry) => !entry.ok)

console.log('\nSEO Check Results')
for (const entry of checkResults) {
  const symbol = entry.ok ? 'PASS' : 'FAIL'
  const suffix = entry.details ? ` (${entry.details})` : ''
  console.log(`- ${symbol}: ${entry.label}${suffix}`)
}

if (hasFailure) {
  console.error('\nSEO validation failed. Review failing items above.')
  process.exit(1)
}

console.log('\nSEO validation passed.')
