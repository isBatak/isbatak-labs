import { conditions as dsConditions, theme } from "@isbatak/panda-ds/theme"
import presetBase from "@pandacss/preset-base"

/**
 * A read-only index over the raw `@isbatak/panda-ds` theme: tokens, semantic tokens and recipes, plus the
 * preset-base utilities and conditions needed to turn Panda style objects into plain CSS at runtime.
 */

export type TokenCategory =
  | "colors"
  | "spacing"
  | "sizes"
  | "radii"
  | "shadows"
  | "fonts"
  | "fontSizes"
  | "fontWeights"
  | "lineHeights"
  | "letterSpacings"
  | "borders"

export type ConditionalValue = Record<string, string>

export interface TokenEntry {
  /** Dotted path without the category, e.g. `gray.500` or `bg` (for `bg.DEFAULT`) */
  name: string
  category: string
  cssVar: string
  /** Raw value for tokens, `{ base, _dark, ... }` for semantic tokens */
  value: string | ConditionalValue
  semantic: boolean
  /** Path segments as defined in the theme (keeps `DEFAULT` and dotted names like `2.5`) */
  path: string[]
}

type Dict = Record<string, any>

const kebab = (value: string) => value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()

const escapeSegment = (segment: string) => kebab(segment).replace(/[./]/g, "\\$&")

export function cssVarName(category: string, segments: string[]) {
  return `--${kebab(category)}-${segments
    .filter((s) => s !== "DEFAULT")
    .map(escapeSegment)
    .join("-")}`
}

function flattenTokens(category: string, node: Dict, semantic: boolean, path: string[] = [], out: TokenEntry[] = []) {
  for (const [key, child] of Object.entries(node)) {
    if (!child || typeof child !== "object") continue
    const segments = [...path, key]
    if ("value" in child) {
      out.push({
        name: segments.filter((s) => s !== "DEFAULT").join("."),
        category,
        cssVar: cssVarName(category, segments),
        value: child.value,
        semantic,
        path: segments,
      })
    }
    const rest = Object.fromEntries(Object.entries(child).filter(([k]) => k !== "value" && k !== "description"))
    if (Object.keys(rest).length) flattenTokens(category, rest, semantic, segments, out)
  }
  return out
}

const rawTheme = theme as unknown as Dict

const tokenEntries: TokenEntry[] = []
for (const [category, node] of Object.entries(rawTheme.tokens ?? {})) {
  flattenTokens(category, node as Dict, false, [], tokenEntries)
}
for (const [category, node] of Object.entries(rawTheme.semanticTokens ?? {})) {
  flattenTokens(category, node as Dict, true, [], tokenEntries)
}

const tokenMap = new Map<string, TokenEntry>()
for (const entry of tokenEntries) {
  // Semantic tokens win over tokens of the same name
  const key = `${entry.category}.${entry.name}`
  if (!tokenMap.has(key) || entry.semantic) tokenMap.set(key, entry)
}

export function getToken(category: string, name: string) {
  return tokenMap.get(`${category}.${name}`)
}

export function listTokens(category: string, options: { semantic?: boolean } = {}) {
  return tokenEntries.filter(
    (entry) => entry.category === category && (options.semantic === undefined || entry.semantic === options.semantic),
  )
}

/** Base (non-semantic) value of a token, used to render swatches */
export function getRawToken(category: string, name: string) {
  return tokenEntries.find((entry) => entry.category === category && entry.name === name && !entry.semantic)
}

// Color palettes: semantic groups that define a `solid` token (gray, red, blue, ...)
export const colorPalettes = Array.from(
  new Set(
    listTokens("colors", { semantic: true })
      .filter((entry) => entry.name.endsWith(".solid"))
      .map((entry) => entry.name.split(".")[0]!),
  ),
)

/* -------------------------------------------------------------------------------------------------
 * Value resolution
 * -----------------------------------------------------------------------------------------------*/

const withOpacity = (color: string, opacity: string) =>
  `color-mix(in oklab, ${color} ${Number.isNaN(Number(opacity)) ? opacity : `${opacity}%`}, transparent)`

function tokenReference(category: string, name: string): string | undefined {
  if (category === "colors" && name.startsWith("colorPalette.")) {
    return `var(${cssVarName("colors", name.split("."))})`
  }
  const entry = getToken(category, name)
  return entry ? `var(${entry.cssVar})` : undefined
}

/** Replaces `{colors.gray.100}` / `{colors.gray.900/20}` references with CSS variables */
export function resolveReferences(value: string) {
  return value.replace(/\{([^}]+)\}/g, (match, ref: string) => {
    const [path, opacity] = ref.split("/")
    const [category, ...rest] = path!.split(".")
    const resolved = tokenReference(category!, rest.join("."))
    if (!resolved) return match
    return opacity ? withOpacity(resolved, opacity) : resolved
  })
}

/** Converts a style value (token name, `token/opacity` or raw CSS) into CSS for the given token category */
export function resolveStyleValue(category: string | undefined, value: string) {
  const trimmed = value.trim()
  if (!category) return resolveReferences(trimmed)
  const [name, opacity] = category === "colors" ? trimmed.split("/") : [trimmed]
  const resolved = tokenReference(category, name!)
  if (resolved) return opacity ? withOpacity(resolved, opacity) : resolved
  return resolveReferences(trimmed)
}

/* -------------------------------------------------------------------------------------------------
 * Utilities and conditions
 * -----------------------------------------------------------------------------------------------*/

const utilities = (presetBase as Dict).utilities as Dict

const shorthands = new Map<string, string>()
for (const [property, config] of Object.entries(utilities)) {
  const shorthand = (config as Dict)?.shorthand
  for (const name of Array.isArray(shorthand) ? shorthand : shorthand ? [shorthand] : []) {
    shorthands.set(name, property)
  }
}

/** Resolves Panda shorthands (`px`, `bg`, `rounded`) to their longhand property */
export function longhand(property: string) {
  return shorthands.get(property) ?? property
}

export function utilityCategory(property: string): string | undefined {
  const values = (utilities[longhand(property)] as Dict | undefined)?.values
  return typeof values === "string" ? values : undefined
}

const conditions: Record<string, string> = {
  ...((presetBase as Dict).conditions as Record<string, string>),
  ...((dsConditions as Dict).extend as Record<string, string>),
}

export function conditionSelector(condition: string, selector: string) {
  const template = conditions[condition]
  if (!template || template.startsWith("@")) return undefined
  return template.replace(/&/g, selector)
}

/* -------------------------------------------------------------------------------------------------
 * Recipes
 * -----------------------------------------------------------------------------------------------*/

export interface RecipeMeta {
  key: string
  className: string
  slots: string[] | undefined
  variantMap: Record<string, string[]>
  defaultVariants: Record<string, string>
  config: Dict
}

function toRecipeMeta(key: string, config: Dict): RecipeMeta {
  const variantMap = Object.fromEntries(
    Object.entries((config.variants ?? {}) as Dict).map(([name, values]) => [name, Object.keys(values as Dict)]),
  )
  return {
    key,
    className: config.className ?? key,
    slots: config.slots,
    variantMap,
    defaultVariants: Object.fromEntries(
      Object.entries((config.defaultVariants ?? {}) as Dict).map(([name, value]) => [name, String(value)]),
    ),
    config,
  }
}

export const recipes: Record<string, RecipeMeta> = {}
for (const [key, config] of Object.entries({ ...rawTheme.recipes, ...rawTheme.extend?.recipes })) {
  recipes[key] = toRecipeMeta(key, config as Dict)
}
for (const [key, config] of Object.entries(rawTheme.slotRecipes ?? {})) {
  recipes[key] = toRecipeMeta(key, config as Dict)
}

const recipeByClassName = new Map(Object.values(recipes).map((recipe) => [recipe.className, recipe]))

export function partClassName(recipe: RecipeMeta, slot?: string) {
  return slot ? `${recipe.className}__${slot}` : recipe.className
}

/** Finds the recipe part (`button`, `accordion__itemTrigger`) an element is styled by */
export function partFromClassList(classList: DOMTokenList | string[]) {
  for (const cls of Array.from(classList)) {
    if (cls.includes("--")) continue
    const [name, slot] = cls.split("__")
    const recipe = recipeByClassName.get(name!)
    if (!recipe) continue
    if (recipe.slots ? slot && recipe.slots.includes(slot) : !slot) return { recipe: recipe.key, slot }
  }
  return undefined
}

/** The style object a recipe defines for a part at a given scope (`base` or `variant:value`) */
export function recipeStyles(recipe: RecipeMeta, scope: string, slot?: string): Dict | undefined {
  const config = recipe.config
  let styles: Dict | undefined
  if (scope === "base") {
    styles = config.base
  } else {
    const [variant, value] = scope.split(":")
    styles = config.variants?.[variant!]?.[value!]
  }
  return slot ? styles?.[slot] : styles
}

/** Current value of a longhand property inside a style object, honoring shorthands and a condition */
export function readStyleValue(styles: Dict | undefined, property: string, state: string) {
  const target = state ? styles?.[`_${state}`] : styles
  if (!target || typeof target !== "object") return undefined
  for (const [key, value] of Object.entries(target)) {
    if (longhand(key) === property && (typeof value === "string" || typeof value === "number")) return String(value)
  }
  return undefined
}

/**
 * The key a style object already uses for a longhand property (`bg` for `background`), so an override written with
 * that key replaces the original when Panda deep-merges it instead of competing with it.
 */
export function styleKey(styles: Dict | undefined, property: string, state: string) {
  const target = state ? styles?.[`_${state}`] : styles
  if (!target || typeof target !== "object") return property
  return Object.keys(target).find((key) => longhand(key) === property) ?? property
}

/** Number of style declarations a recipe defines (shown as "N rules" like DS Manager) */
export function countRecipeRules(recipe: RecipeMeta) {
  const count = (node: unknown): number => {
    if (!node || typeof node !== "object") return 0
    return Object.values(node).reduce<number>(
      (total, value) => total + (value && typeof value === "object" ? count(value) : 1),
      0,
    )
  }
  return count(recipe.config.base) + count(recipe.config.variants) + count(recipe.config.compoundVariants)
}

const words = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/-/g, " ")
    .toLowerCase()

/** Human name of a recipe part, e.g. `Accordion item trigger` (the root slot is named after the component) */
export function partLabel(part: { recipe: string; slot?: string | undefined }) {
  const recipe = recipes[part.recipe]
  const name = words(recipe?.className ?? part.recipe)
  const label = part.slot && part.slot !== "root" ? `${name} ${words(part.slot)}` : name
  return label.charAt(0).toUpperCase() + label.slice(1)
}
