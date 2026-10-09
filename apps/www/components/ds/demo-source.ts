import { readFile } from "node:fs/promises"
import { join } from "node:path"

const demosDir = join(process.cwd(), "components/ds-demos")

export async function demoSource(id: string) {
  "use cache"
  const source = await readFile(join(demosDir, `${id}.tsx`), "utf8").catch(() =>
    readFile(join(demosDir, id, "basic.tsx"), "utf8"),
  )
  return source.replace(/^"use client"\n+/, "")
}
