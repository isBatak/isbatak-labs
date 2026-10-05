import { type StudioDoc, listRules } from "./doc"
import {
  conditionSelector,
  getToken,
  partClassName,
  recipes,
  resolveReferences,
  resolveStyleValue,
  utilityCategory,
} from "./theme-meta"

/**
 * Turns a studio document into CSS that is injected into the canvas. Declarations go into the same cascade
 * layers Panda generates (`tokens`, `recipes.*`), so they behave exactly like edits to the theme would: a base
 * override still loses to a variant, and instance style props (`utilities`) still win.
 */

const kebab = (value: string) => value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)

function tokenCss(doc: StudioDoc) {
  const light: string[] = []
  const dark: string[] = []

  for (const [key, value] of Object.entries(doc.tokens)) {
    const [category, ...rest] = key.split(".")
    const token = getToken(category!, rest.join("."))
    if (!token || token.semantic) continue
    light.push(`${token.cssVar}: ${resolveReferences(value)};`)
  }

  for (const [key, value] of Object.entries(doc.semanticTokens)) {
    const [category, ...rest] = key.split(".")
    const token = getToken(category!, rest.join("."))
    if (!token) continue
    if (value.base) light.push(`${token.cssVar}: ${resolveReferences(value.base)};`)
    if (value._dark) dark.push(`${token.cssVar}: ${resolveReferences(value._dark)};`)
  }

  let css = ""
  if (light.length) css += `  :where(:root, :host) {\n    ${light.join("\n    ")}\n  }\n`
  if (dark.length) css += `  .dark {\n    ${dark.join("\n    ")}\n  }\n`
  return css ? `@layer tokens {\n${css}}\n` : ""
}

function recipeCss(doc: StudioDoc) {
  const layers = new Map<string, Map<string, string[]>>()

  for (const rule of listRules(doc)) {
    const recipe = recipes[rule.recipe]
    if (!recipe) continue

    const part = partClassName(recipe, rule.slot)
    const [variant, value] = rule.scope.split(":")
    const base = rule.scope === "base" ? `.${part}` : `.${part}--${variant}_${value}`
    const selector = rule.state ? conditionSelector(rule.state, base) : base
    if (!selector) continue

    const layer = `recipes.${recipe.slots ? "slots." : ""}${rule.scope === "base" ? "base" : "variants"}`
    const declaration = `${kebab(rule.property)}: ${resolveStyleValue(utilityCategory(rule.property), rule.value)};`

    const blocks = layers.get(layer) ?? new Map<string, string[]>()
    blocks.set(selector, [...(blocks.get(selector) ?? []), declaration])
    layers.set(layer, blocks)
  }

  let css = ""
  for (const [layer, blocks] of layers) {
    css += `@layer ${layer} {\n`
    for (const [selector, declarations] of blocks) {
      css += `  ${selector} {\n    ${declarations.join("\n    ")}\n  }\n`
    }
    css += "}\n"
  }
  return css
}

export function generateCss(doc: StudioDoc) {
  return tokenCss(doc) + recipeCss(doc)
}
