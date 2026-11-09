import { readFile, writeFile } from "node:fs/promises"

const file = new URL("../styled-system/jsx/factory.js", import.meta.url)
const source = await readFile(file, "utf8")
const anchor = "          ...vModelProps.value,\n"
const forward =
  "          ...(typeof props.as !== 'string' && props.modelValue !== undefined ? { modelValue: props.modelValue } : {}),\n"

if (!source.includes(forward)) {
  if (!source.includes(anchor)) {
    throw new Error("forward-model-value: Panda's Vue factory changed; update scripts/forward-model-value.mjs")
  }
  await writeFile(file, source.replace(anchor, anchor + forward))
}
