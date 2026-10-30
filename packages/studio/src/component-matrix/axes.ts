import { orderedValues, primaryVariant, stateLabel } from "../lib/states"
import type { RecipeMeta } from "../lib/theme-meta"
import { type ComponentMatrix, type PropType, type PropTypesConfig, STATE } from "./define-component-matrix"

export interface Axis {
  name: string
  values: string[]
  config: PropTypesConfig
}

/** The registry name of a generated recipe, e.g. `button` */
export const recipeName = (recipe: ComponentMatrix["recipe"]) => (recipe as unknown as { __name__: string }).__name__

const isBoolean = (values: string[]) => values.length === 2 && values.includes("true") && values.includes("false")

function resolveProp(name: string, recipe: RecipeMeta, states: string[], override: Partial<PropTypesConfig> = {}) {
  const variant = recipe.variantMap[name]
  const type: PropType =
    override.type ?? (name === STATE ? "state" : variant && isBoolean(variant) ? "boolean" : "variant")
  const options = override.options ?? (name === STATE ? states : variant ? orderedValues(recipe, name) : [])
  const config: PropTypesConfig = {
    showPropName: type !== "state",
    defaultValue: name === STATE ? "" : recipe.defaultVariants[name],
    ...override,
    type,
    options,
  }
  return config
}

export function formatAxisValue(axis: Axis, value: string) {
  if (axis.config.labelFormatter) return axis.config.labelFormatter(value, axis.name)
  return axis.config.type === "state" ? stateLabel(value) : value
}

/**
 * Lays a matrix out against the theme's recipe: listed props go on their axis, the rest of the recipe's variants
 * (including ones a theme adds) and `state` are appended to the shorter axis, and ignored props become fixed values.
 */
export function resolveAxes(matrix: ComponentMatrix, recipe: RecipeMeta, states: string[]) {
  const overrides: Record<string, Partial<PropTypesConfig> | undefined> = matrix.props ?? {}
  const primary = primaryVariant(recipe)
  const variants = Object.keys(recipe.variantMap).sort((a, b) => Number(b === primary) - Number(a === primary))
  const extra = Object.keys(overrides).filter((name) => name !== STATE && !recipe.variantMap[name])

  const fixed: Record<string, any> = {}
  const axes = new Map<string, Axis>()
  for (const name of [STATE, ...variants, ...extra]) {
    const prop = resolveProp(name, recipe, states, overrides[name])
    if (prop.ignore) {
      if (prop.defaultValue !== undefined) fixed[name] = prop.defaultValue
      continue
    }
    axes.set(name, { name, values: (prop.options ?? []).map(String), config: prop })
  }

  const pick = (list: string[] = []) => list.flatMap((name) => axes.get(name) ?? [])
  const x = pick(matrix.x)
  const y = pick(matrix.y)
  for (const [name, axis] of axes) {
    if (x.some((item) => item.name === name) || y.some((item) => item.name === name)) continue
    if (y.length <= x.length) y.push(axis)
    else x.push(axis)
  }
  return { x, y, fixed }
}
