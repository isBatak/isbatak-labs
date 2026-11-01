import { parseArgs } from "node:util"

import { loadReferences } from "./boring.mjs"

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    sprite: { type: "string" },
    list: { type: "boolean", default: false },
  },
})

const references = await loadReferences({ sprite: values.sprite })

if (values.list || positionals.length === 0) {
  console.log(references.names.join("\n"))
  process.exit(0)
}

for (const name of positionals) {
  const body = references.body(name)
  console.log(body ? `${name}\n${body}\n` : `${name}: not found`)
}
