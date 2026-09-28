import path from "node:path"
import MagicString, { type SourceMap } from "magic-string"
import { parseSync } from "oxc-parser"
import { normalizePath } from "./options"
import { type AstNode, type CallNode, collectPandaFactories, getOptionsIndex, tagFactoryCall, visit } from "./panda"

export interface TransformInput {
  code: string
  file: string
  root: string
  attribute: string
  ignoreTags?: string[] | undefined
  styled?: StyledOptions | null | undefined
}

export interface StyledOptions {
  attribute: string
  modules: string[] | null
}

export interface TransformOutput {
  code: string
  map: SourceMap
}

interface JsxName extends AstNode {
  name?: string | JsxName
  property?: JsxName
}

interface JsxOpeningElement extends AstNode {
  name: JsxName
  attributes: (AstNode & { name?: JsxName })[]
  selfClosing: boolean
}

const SOURCE_FILE = /\.(jsx|tsx|js|mjs|ts|mts)$/
const FACTORY_CALL = /\b(styled|withProvider|withContext|withRootProvider)\b/

export const DEFAULT_IGNORE_TAGS = ["fragment", "suspense", "script", "style", "template", "slot"]

export function canTransform(file: string) {
  return SOURCE_FILE.test(file)
}

export function transformJsx({
  code,
  file,
  root,
  attribute,
  ignoreTags = [],
  styled,
}: TransformInput): TransformOutput | null {
  if (!canTransform(file) || !(code.includes("<") || (styled && FACTORY_CALL.test(code)))) return null

  const program = parseProgram(code, file)
  if (!program) return null

  const source = normalizePath(path.relative(root, file))
  const lines = getLineStarts(code)
  const output = new MagicString(code)
  const ignored = new Set([...DEFAULT_IGNORE_TAGS, ...ignoreTags].map((tag) => tag.toLowerCase()))
  const factories = styled ? collectPandaFactories(program.body, styled.modules) : null

  visit(program, (node) => {
    if (styled && factories && node.type === "CallExpression") {
      const call = node as CallNode
      const optionsIndex = getOptionsIndex(call, factories)
      if (optionsIndex === undefined) return
      const { line, column } = getPosition(lines, call.start)
      const entry = `"${styled.attribute}": "${source}:${line}:${column}"`
      tagFactoryCall(code, output, call, optionsIndex, entry)
      return
    }
    if (node.type !== "JSXOpeningElement") return
    const element = node as JsxOpeningElement
    if (ignored.has(getTagName(element.name).toLowerCase()) || hasAttribute(element, attribute)) return
    const { line, column } = getPosition(lines, element.start)
    const insertAt = element.end - (element.selfClosing ? 2 : 1)
    const separator = /\s/.test(code[insertAt - 1] ?? "") ? "" : " "
    const trailing = element.selfClosing ? " " : ""
    output.prependLeft(insertAt, `${separator}${attribute}="${source}:${line}:${column}"${trailing}`)
  })

  if (!output.hasChanged()) return null
  return { code: output.toString(), map: output.generateMap({ source: file, hires: "boundary", includeContent: true }) }
}

export function parseProgram(code: string, file: string) {
  const result = parseSync(file, code, { lang: getLang(file), sourceType: "module" })
  return result.errors.length ? null : (result.program as unknown as AstNode & { body: AstNode[] })
}

function getLang(file: string): "jsx" | "ts" | "tsx" {
  if (/\.[cm]?tsx$/.test(file)) return "tsx"
  if (/\.[cm]?ts$/.test(file)) return "ts"
  return "jsx"
}

function getTagName(name: JsxName): string {
  if (name.type === "JSXMemberExpression" && name.property) return getTagName(name.property)
  if (typeof name.name === "string") return name.name
  return name.name ? getTagName(name.name) : ""
}

function hasAttribute(node: JsxOpeningElement, attribute: string) {
  return node.attributes.some(
    (item) => item.type === "JSXAttribute" && item.name && getTagName(item.name) === attribute,
  )
}

function getLineStarts(code: string) {
  const starts = [0]
  for (let index = code.indexOf("\n"); index !== -1; index = code.indexOf("\n", index + 1)) starts.push(index + 1)
  return starts
}

function getPosition(lineStarts: number[], offset: number) {
  let low = 0
  let high = lineStarts.length - 1
  while (low < high) {
    const middle = (low + high + 1) >> 1
    if ((lineStarts[middle] ?? 0) <= offset) low = middle
    else high = middle - 1
  }
  return { line: low + 1, column: offset - (lineStarts[low] ?? 0) + 1 }
}
