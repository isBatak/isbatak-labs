import type MagicString from "magic-string"

export interface AstNode {
  type: string
  start: number
  end: number
  [key: string]: unknown
}

export interface CallNode extends AstNode {
  callee: AstNode & { name?: string; object?: AstNode & { name?: string }; property?: AstNode & { name?: string } }
  arguments: AstNode[]
}

interface PropertyNode extends AstNode {
  key: AstNode & { name?: string; value?: unknown }
  value: AstNode
}

const JSX_MODULE = /(^|\/)jsx(\/index(\.[cm]?js)?)?$/
const OPTIONS_INDEX: Record<string, number> = { styled: 2, withProvider: 2, withContext: 2, withRootProvider: 1 }
const CONTEXT_FACTORIES = new Set(["createSlotRecipeContext", "createStyleContext", "createRecipeContext"])

export interface PandaFactories {
  calls: Map<string, number>
  contexts: Set<string>
}

export function isPandaJsxModule(source: string, modules: string[] | null) {
  return modules ? modules.some((module) => source === module || source.endsWith(module)) : JSX_MODULE.test(source)
}

export function collectPandaFactories(body: AstNode[], modules: string[] | null): PandaFactories {
  const calls = new Map<string, number>()
  const contextFactories = new Set<string>()
  const contexts = new Set<string>()

  for (const node of body) {
    if (node.type !== "ImportDeclaration") continue
    const source = (node.source as AstNode & { value: string }).value
    if (!isPandaJsxModule(source, modules)) continue
    for (const specifier of node.specifiers as (AstNode & {
      imported?: { name?: string }
      local: { name: string }
    })[]) {
      const imported = specifier.imported?.name
      if (imported === "styled") calls.set(specifier.local.name, OPTIONS_INDEX.styled ?? 2)
      if (imported && CONTEXT_FACTORIES.has(imported)) contextFactories.add(specifier.local.name)
    }
  }

  return { calls, contexts: collectContexts(body, contextFactories, calls, contexts) }
}

function collectContexts(
  body: AstNode[],
  contextFactories: Set<string>,
  calls: Map<string, number>,
  contexts: Set<string>,
) {
  if (contextFactories.size === 0) return contexts
  visit(body, (node) => {
    if (node.type !== "VariableDeclarator") return
    const init = node.init as CallNode | null
    if (init?.type !== "CallExpression" || !contextFactories.has(init.callee.name ?? "")) return
    const id = node.id as AstNode & { name?: string; properties?: PropertyNode[] }
    if (id.type === "Identifier" && id.name) contexts.add(id.name)
    for (const property of id.properties ?? []) {
      const key = property.key.name
      const local = (property.value as AstNode & { name?: string }).name
      if (key && local && key in OPTIONS_INDEX && key !== "styled") calls.set(local, OPTIONS_INDEX[key] ?? 2)
    }
  })
  return contexts
}

export function getOptionsIndex(node: CallNode, factories: PandaFactories) {
  const { callee } = node
  if (callee.type === "Identifier") return factories.calls.get(callee.name ?? "")
  if (callee.type !== "MemberExpression" || !factories.contexts.has(callee.object?.name ?? "")) return undefined
  const method = callee.property?.name ?? ""
  return method !== "styled" ? OPTIONS_INDEX[method] : undefined
}

export function tagFactoryCall(code: string, output: MagicString, node: CallNode, optionsIndex: number, entry: string) {
  const args = node.arguments
  const options = args[optionsIndex]

  if (!options) {
    const last = args.at(-1)
    if (!last) return
    const padding = ", undefined".repeat(optionsIndex - args.length)
    output.appendLeft(last.end, `${padding}, { defaultProps: { ${entry} } }`)
    return
  }

  if (options.type === "ObjectExpression") {
    const properties = options.properties as PropertyNode[]
    const defaultProps = properties.find(
      (property) => property.type === "Property" && getKeyName(property) === "defaultProps",
    )
    if (!defaultProps) {
      output.appendLeft(options.start + 1, ` defaultProps: { ${entry} },`)
      return
    }
    if (defaultProps.value.type === "ObjectExpression") {
      output.appendLeft(defaultProps.value.start + 1, ` ${entry},`)
      return
    }
    output.prependRight(defaultProps.value.start, "{ ...(")
    output.appendLeft(defaultProps.value.end, `), ${entry} }`)
    return
  }

  if (options.type !== "Identifier" && options.type !== "MemberExpression") return
  const text = code.slice(options.start, options.end)
  output.overwrite(options.start, options.end, `{ ...${text}, defaultProps: { ...${text}?.defaultProps, ${entry} } }`)
}

function getKeyName(property: PropertyNode) {
  return property.key.name ?? (typeof property.key.value === "string" ? property.key.value : undefined)
}

export function visit(node: unknown, callback: (node: AstNode) => void) {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const child of node) visit(child, callback)
    return
  }
  if (typeof (node as AstNode).type === "string") callback(node as AstNode)
  for (const value of Object.values(node)) visit(value, callback)
}
