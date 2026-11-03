import { existsSync, readdirSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("..", import.meta.url))
const themesDir = "packages/panda/themes"

const themes = readdirSync(`${root}${themesDir}`, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(`${root}${themesDir}/${entry.name}/panda.config.ts`))
  .map((entry) => entry.name)
  .sort()

const servers = [["panda-ds", "apps/www"], ...themes.map((theme) => [`panda-${theme}`, `${themesDir}/${theme}`])]

const entries = servers.map(
  ([name, cwd]) =>
    `    "${name}": {\n      "command": "node_modules/.bin/panda-mcp",\n      "args": ["--cwd", "${cwd}", "--silent"]\n    }`,
)

writeFileSync(`${root}.mcp.json`, `{\n  "mcpServers": {\n${entries.join(",\n")}\n  }\n}\n`)
