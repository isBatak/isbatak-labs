import { spawnSync } from "node:child_process"
import { mkdirSync } from "node:fs"
import { resolve } from "node:path"
import { parseArgs } from "node:util"

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { props: { type: "string" } },
})

const [id, outDir, ...frames] = positionals
if (!id || !outDir || frames.length === 0) {
  console.error("Usage: pnpm --filter promos stills <CompositionId> <outDir> <frame>... [--props <json>]")
  process.exit(1)
}

const remotion = (args: string[]) => {
  const result = spawnSync("pnpm", ["exec", "remotion", ...args, "--log=error"], { stdio: "inherit" })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

const out = resolve(outDir)
const bundle = resolve("node_modules/.cache/stills-bundle")
mkdirSync(out, { recursive: true })
remotion(["bundle", `--out-dir=${bundle}`])

for (const frame of frames) {
  const file = `${out}/f${frame}.jpg`
  remotion([
    "still",
    bundle,
    id,
    file,
    `--frame=${frame}`,
    "--image-format=jpeg",
    ...(values.props ? [`--props=${values.props}`] : []),
  ])
  console.log(file)
}
