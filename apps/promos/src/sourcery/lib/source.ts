import { highlight } from "sugar-high"

import type { vscode } from "../theme"

export type TokenType = keyof typeof vscode.token

export interface Token {
  type: TokenType
  value: string
}

const TOKEN = /<span class="sh__token--(\w+)"[^>]*>([^<]*)<\/span>/g

const ENTITIES: Record<string, string> = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#39;": "'" }

function decode(text: string) {
  return text.replace(/&(lt|gt|quot|amp|#39);/g, (entity) => ENTITIES[entity] ?? entity)
}

export function tokenize(code: string): Token[][] {
  return highlight(code)
    .split("\n")
    .map((line) =>
      [...line.matchAll(TOKEN)].map(([, type, value]) => ({ type: type as TokenType, value: decode(value ?? "") })),
    )
}

export interface Location {
  line: number
  column: number
}

export function locate(source: string, needle: string): Location {
  const offset = source.indexOf(needle)
  if (offset < 0) throw new Error(`"${needle}" is not in the source`)
  const before = source.slice(0, offset).split("\n")
  return { line: before.length, column: (before.at(-1)?.length ?? 0) + 1 }
}

export function format(file: string, { line, column }: Location) {
  return `${file}:${line}:${column}`
}
