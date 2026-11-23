import { mkdir, writeFile } from "node:fs/promises"

import { theme } from "../dist/theme/index.js"

interface CatalogRecipe {
  description?: string | undefined
  slots?: readonly string[] | undefined
  variants?: Record<string, object> | undefined
  defaultVariants?: Record<string, unknown> | undefined
}

interface Described {
  description?: string | undefined
}

const outDir = new URL("../skills/panda-ds/references/generated/", import.meta.url)

const header = (title: string) =>
  `# ${title}\n\nGenerated from the installed @isbatak/panda-ds theme at build time, so it matches this version.\n`

const variantLine = (recipe: CatalogRecipe) => {
  const variants = Object.entries(recipe.variants ?? {})
  if (variants.length === 0) return ""
  const parts = variants.map(([name, values]) => {
    const fallback = recipe.defaultVariants?.[name]
    const suffix = fallback === undefined ? "" : ` (default ${String(fallback)})`
    return `\`${name}\` ${Object.keys(values).join(" | ")}${suffix}`
  })
  return ` Variants: ${parts.join("; ")}.`
}

const recipeEntry = (name: string, recipe: CatalogRecipe) => {
  const description = recipe.description ? ` ${recipe.description}.` : ""
  const slots = recipe.slots ? ` Slots: ${recipe.slots.join(", ")}.` : ""
  return `- **${name}**:${description}${slots}${variantLine(recipe)}`
}

const sorted = <T,>(record: Record<string, T>) => Object.entries(record).sort(([a], [b]) => a.localeCompare(b))

const describedList = (record: Record<string, Described>) =>
  sorted(record).map(([name, style]) => `- \`${name}\`${style.description ? `: ${style.description}` : ""}`)

const codeList = (record: object) =>
  Object.keys(record)
    .map((name) => `\`${name}\``)
    .join(", ")

const recipes: Record<string, CatalogRecipe> = { ...theme.recipes, ...theme.extend?.recipes }
const slotRecipes: Record<string, CatalogRecipe> = { ...theme.slotRecipes }

const recipesMd = [
  header("Recipes"),
  "Import recipes from `@isbatak/panda-ds/recipes` (or the project's own `styled-system/recipes`). A recipe returns one class; a slot recipe returns one class per slot.\n",
  "## Recipes\n",
  ...sorted(recipes).map(([name, recipe]) => recipeEntry(name, recipe)),
  "\n## Slot recipes\n",
  ...sorted(slotRecipes).map(([name, recipe]) => recipeEntry(name, recipe)),
  "",
].join("\n")

const isLeaf = (node: object): node is { value: unknown } & Described => "value" in node

const leaves = (node: object, path: string[]): [string, string | undefined][] =>
  isLeaf(node)
    ? [[path.filter((key) => key !== "DEFAULT").join("."), node.description]]
    : Object.entries(node).flatMap(([key, child]: [string, object]) => leaves(child, [...path, key]))

const tokenList = (node: object, prefix: string[]) =>
  leaves(node, prefix).map(([path, description]) => `- \`${path}\`${description ? `: ${description}` : ""}`)

const colors: Record<string, object> = theme.semanticTokens.colors
const roles = ["bg", "fg", "border"]
const palettes = Object.keys(colors).filter((key) => !roles.includes(key) && key !== "prose")
const paletteKeys = codeList(colors[palettes[0] ?? "gray"] ?? {})

const tokensMd = [
  header("Tokens"),
  "Full values for every token, including the raw scales (`spacing`, `sizes`, `fontSizes`, `colors.<palette>.<step>`, …), are typed in `styled-system/tokens/tokens.d.ts`.\n",
  "## Semantic colors\n",
  ...roles.flatMap((role) => tokenList(colors[role] ?? {}, [role])),
  `\n## Color palettes\n\nPalettes: ${palettes.map((name) => `\`${name}\``).join(", ")}. Each has ${paletteKeys}. Set \`colorPalette\` and use \`colorPalette.<key>\` to theme a part by palette.\n`,
  "## Radii\n",
  ...tokenList(theme.semanticTokens.radii, ["radii"]),
  `\n## Shadows\n\n${codeList(theme.semanticTokens.shadows)}\n`,
  "## Text styles\n",
  ...describedList(theme.textStyles),
  "\n## Layer styles\n",
  ...describedList(theme.layerStyles),
  `\n## Cursors\n\n${codeList(theme.tokens.cursor)}\n`,
].join("\n")

await mkdir(outDir, { recursive: true })
await writeFile(new URL("recipes.md", outDir), recipesMd)
await writeFile(new URL("tokens.md", outDir), tokensMd)
