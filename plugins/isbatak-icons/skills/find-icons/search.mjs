import { readFile } from "node:fs/promises"
import { parseArgs } from "node:util"

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    limit: { type: "string", default: "5" },
    list: { type: "boolean", default: false },
  },
})

const catalog = JSON.parse(await readFile(new URL("catalog.json", import.meta.url), "utf8"))
const format = (icon) => `${icon.name}  (${icon.tags.join(", ")})`

if (values.list || positionals.length === 0) {
  console.log(catalog.map(format).join("\n"))
  process.exit(0)
}

const words = (text) =>
  text
    .toLowerCase()
    .split(/[^a-z0-9.]+/)
    .filter(Boolean)
const stem = (word) => word.replace(/(?<=..)(es|s)$/, "")
const close = (a, b) => a === b || stem(a) === stem(b)

function score(icon, query) {
  const slug = words(query).join("-")
  if (icon.name === slug) return 100
  const tags = icon.tags.map((tag) => tag.toLowerCase())
  const tagWords = tags.flatMap(words)
  if (tags.includes(words(query).join(" ")) || tagWords.includes(words(query).join(""))) return 60
  const nameWords = icon.name.split("-")
  let total = icon.name.includes(slug) ? 30 : 0
  for (const word of words(query)) {
    if (nameWords.some((part) => close(part, word))) total += 20
    else if (tagWords.some((part) => close(part, word))) total += 10
  }
  return total
}

const limit = Number(values.limit)

for (const query of positionals) {
  const matches = catalog
    .map((icon) => ({ icon, score: score(icon, query) }))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score || a.icon.name.length - b.icon.name.length)
    .slice(0, limit)
  console.log(`"${query}"`)
  console.log(matches.length ? matches.map((match) => `  ${format(match.icon)}`).join("\n") : "  no match")
}
