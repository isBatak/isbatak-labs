import { type StudioDoc, listRules } from "./doc"
import { type RecipeMeta, conditionNames, conditionSelector } from "./theme-meta"

const preferredOrder = [
  "hover",
  "focusVisible",
  "active",
  "expanded",
  "open",
  "checked",
  "selected",
  "highlighted",
  "invalid",
  "disabled",
]

export function stateProps(condition: string): Record<string, string> | undefined {
  if (!condition) return {}
  const template = conditionSelector(condition, "&")
  if (!template?.startsWith("&")) return undefined
  const data = template.match(/\[(data-[\w-]+)\]/)
  if (data) return { [data[1]!]: "" }
  const aria = template.match(/\[(aria-[\w-]+)=(\w+)\]/)
  if (aria) return { [aria[1]!]: aria[2]! }
  return undefined
}

export const simulatableStates = conditionNames.filter((name) => stateProps(name) !== undefined)

function usedConditions(node: unknown, out: Set<string>) {
  if (!node || typeof node !== "object") return out
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith("_")) out.add(key.slice(1))
    usedConditions(value, out)
  }
  return out
}

const byPreference = (a: string, b: string) => {
  const rank = (name: string) => {
    const index = preferredOrder.indexOf(name)
    return index === -1 ? preferredOrder.length : index
  }
  return rank(a) - rank(b) || a.localeCompare(b)
}

export function recipeStates(recipe: RecipeMeta, doc: StudioDoc, added: string[] = []) {
  const found = usedConditions(recipe.config, new Set())
  for (const rule of listRules(doc, { recipe: recipe.key })) if (rule.state) found.add(rule.state)
  for (const name of added) found.add(name)
  return ["", ...[...found].filter((name) => name && stateProps(name)).sort(byPreference)]
}

export const stateLabel = (condition: string) => condition || "default"

export function primaryVariant(recipe: RecipeMeta) {
  const keys = Object.keys(recipe.variantMap)
  return keys.includes("variant") ? "variant" : keys[0]
}

export function orderedValues(recipe: RecipeMeta, variant: string) {
  const values = recipe.variantMap[variant] ?? []
  const fallback = values.includes("false") ? "false" : undefined
  const preferred = recipe.defaultVariants[variant] ?? fallback
  return preferred ? [preferred, ...values.filter((value) => value !== preferred)] : values
}
