import { readFile, writeFile } from "node:fs/promises"

const file = new URL("../styled-system/jsx/create-slot-recipe-context.js", import.meta.url)
let source = await readFile(file, "utf8")

const replacements = [
  ["        get value() {\n          return resolvedSlots()\n        },\n", "        value: resolvedSlots,\n", 2],
  ["resolveProps(propsWithClass, resolvedSlots[slot])", "resolveProps(propsWithClass, resolvedSlots()[slot])", 1],
  [
    "cx(resolved.class, resolvedSlots._classNameMap?.[slot])",
    "cx(resolved.class, resolvedSlots()._classNameMap?.[slot])",
    1,
  ],
]

for (const [from, to, count] of replacements) {
  if (source.split(to).length - 1 >= count) continue
  if (source.split(from).length - 1 !== count) {
    throw new Error(
      "reactive-slot-styles: Panda's Solid slot recipe context changed; update scripts/reactive-slot-styles.mjs",
    )
  }
  source = source.replaceAll(from, to)
}

await writeFile(file, source)
