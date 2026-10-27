import { type ColorMode, type StudioDoc, listRules, ruleKey } from "./doc"
import { getToken, recipeStyles, recipes, styleKey } from "./theme-meta"

/**
 * Serializes a studio document as a Panda preset that extends `@isbatak/panda-ds`. Panda deep-merges
 * `theme.extend`, so only the edited tokens and recipe declarations need to be emitted.
 */

type Dict = Record<string, any>

function setPath(target: Dict, path: string[], value: unknown) {
  let node = target
  for (const segment of path.slice(0, -1)) {
    node[segment] ??= {}
    node = node[segment]
  }
  node[path.at(-1)!] = value
}

function tokenPath(key: string) {
  const [category, ...rest] = key.split(".")
  const token = getToken(category!, rest.join("."))
  return [category!, ...(token?.path ?? rest)]
}

export function toPresetObject(doc: StudioDoc) {
  const extend: Dict = {}

  for (const [key, value] of Object.entries(doc.tokens)) {
    setPath(extend, ["tokens", ...tokenPath(key), "value"], value)
  }

  for (const [key, value] of Object.entries(doc.semanticTokens)) {
    const [category, ...rest] = key.split(".")
    const original = getToken(category!, rest.join("."))?.value
    // Keep the conditions that weren't edited, since `value` is replaced as a whole
    const merged = { ...(typeof original === "object" ? original : { base: original }), ...value }
    const path = tokenPath(key)
    setPath(extend, ["semanticTokens", ...path, "value"], merged)
  }

  for (const rule of listRules(doc)) {
    const recipe = recipes[rule.recipe]
    if (!recipe) continue
    const group = recipe.slots ? "slotRecipes" : "recipes"
    const scopePath = rule.scope === "base" ? ["base"] : ["variants", ...rule.scope.split(":")]
    const path = [group, rule.recipe, ...scopePath, ...(rule.slot ? [rule.slot] : [])]
    if (rule.state) path.push(`_${rule.state}`)
    const key = styleKey(recipeStyles(recipe, rule.scope, rule.slot), rule.property, rule.state)
    setPath(extend, [...path, key], rule.value)
  }

  return extend
}

export type SourceEdit =
  | { key: string; type: "token"; category: string; path: string[]; value: string }
  | { key: string; type: "semantic"; category: string; path: string[]; mode: ColorMode; value: string }
  | { key: string; type: "recipe"; className: string; path: string[]; value: string }
  | { key: string; type: "preset"; package: string; options: Record<string, number> }

export const presetEditKey = (pkg: string) => `preset:${pkg}`

export function toSourceEdits(doc: StudioDoc): SourceEdit[] {
  const edits: SourceEdit[] = []

  for (const [key, value] of Object.entries(doc.tokens)) {
    const [category, ...path] = tokenPath(key)
    edits.push({ key, type: "token", category: category!, path: [...path, "value"], value })
  }

  for (const [key, modes] of Object.entries(doc.semanticTokens)) {
    const [category, ...path] = tokenPath(key)
    for (const [mode, value] of Object.entries(modes) as Array<[ColorMode, string]>) {
      edits.push({
        key: `${key}:${mode}`,
        type: "semantic",
        category: category!,
        path: [...path, "value"],
        mode,
        value,
      })
    }
  }

  for (const rule of listRules(doc)) {
    const recipe = recipes[rule.recipe]
    if (!recipe) continue
    const scopePath = rule.scope === "base" ? ["base"] : ["variants", ...rule.scope.split(":")]
    const path = [...scopePath, ...(rule.slot ? [rule.slot] : [])]
    if (rule.state) path.push(`_${rule.state}`)
    path.push(styleKey(recipeStyles(recipe, rule.scope, rule.slot), rule.property, rule.state))
    edits.push({
      key: ruleKey(rule, rule.property),
      type: "recipe",
      className: recipe.className,
      path,
      value: rule.value,
    })
  }

  for (const [pkg, options] of Object.entries(doc.presets ?? {})) {
    edits.push({ key: presetEditKey(pkg), type: "preset", package: pkg, options })
  }

  return edits
}

export function withoutSourceEdits(doc: StudioDoc, keys: Set<string>): StudioDoc {
  const semanticTokens: StudioDoc["semanticTokens"] = {}
  for (const [key, modes] of Object.entries(doc.semanticTokens)) {
    const kept = Object.fromEntries(Object.entries(modes).filter(([mode]) => !keys.has(`${key}:${mode}`)))
    if (Object.keys(kept).length) semanticTokens[key] = kept
  }
  return {
    ...doc,
    tokens: Object.fromEntries(Object.entries(doc.tokens).filter(([key]) => !keys.has(key))),
    semanticTokens,
    rules: Object.fromEntries(Object.entries(doc.rules).filter(([key]) => !keys.has(key))),
    presets: Object.fromEntries(Object.entries(doc.presets ?? {}).filter(([pkg]) => !keys.has(presetEditKey(pkg)))),
  }
}

export function toPresetSource(doc: StudioDoc, name = "panda-studio") {
  const body = JSON.stringify({ name, theme: { extend: toPresetObject(doc) } }, null, 2)
    // Unquote keys that are valid identifiers to match hand-written Panda configs
    .replace(/^(\s*)"([A-Za-z_$][\w$]*)":/gm, "$1$2:")
  return `import { definePreset } from "@pandacss/dev"

/**
 * Generated by Panda Studio. Add it to the \`presets\` of a Panda config that uses \`@isbatak/panda-ds\`.
 */
export const studioPreset = definePreset(${body})
`
}
