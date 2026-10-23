import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { cacheLife } from "next/cache"

const blocksDir = join(process.cwd(), "components/blocks")

export async function blockSource(file: string) {
  "use cache"
  cacheLife("max")
  const source = await readFile(join(blocksDir, file), "utf8")
  return source.replace(/^"use client"\n+/, "")
}
