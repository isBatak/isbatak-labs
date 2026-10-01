import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import type { WheelPickerRecipe, WheelPickerVariant } from "../styled-system/recipes/wheel-picker"

type Machine = typeof wheelPicker.machine

export interface ExampleControls {
  props?: Partial<wheelPicker.Props>
  recipe?: WheelPickerVariant
}

const registry = globalThis as typeof globalThis & {
  __compositionsSnapshots?: Map<string, string | null>
  __compositionsControls?: Map<string, ExampleControls>
  __compositionsCollections?: WeakMap<object, string>
}
const snapshots = (registry.__compositionsSnapshots ??= new Map())
const controls = (registry.__compositionsControls ??= new Map())
const collections = (registry.__compositionsCollections ??= new WeakMap())

export function resetSnapshot(exampleId: string) {
  for (const key of snapshots.keys()) if (key.startsWith(`${exampleId}:`)) snapshots.delete(key)
}

export function setControls(exampleId: string, value: ExampleControls) {
  controls.set(exampleId, value)
}

export function tagCollection<T extends object>(collection: T, exampleId: string) {
  collections.set(collection, exampleId)
  return collection
}

export function withSnapshot(machine: Machine, exampleId?: string): Machine {
  return {
    ...machine,
    props(params) {
      const { collection } = params.props
      const id = exampleId ?? (collection && collections.get(collection))
      if (!id) return machine.props!(params)

      const key = `${id}:${collection?.getValues().join()}`
      return machine.props!({
        ...params,
        props: {
          ...params.props,
          ...controls.get(id)?.props,
          ...(snapshots.has(key) && { defaultValue: snapshots.get(key) }),
          onValueChange(details) {
            snapshots.set(key, details.value)
            params.props.onValueChange?.(details)
          },
        },
      })
    },
  }
}

export function withRecipeControls(recipe: WheelPickerRecipe, exampleId: string): WheelPickerRecipe {
  const controlled = (variants?: Parameters<WheelPickerRecipe>[0]) =>
    new Proxy({} as ReturnType<WheelPickerRecipe>, {
      get: (_, slot: string) =>
        recipe({ ...variants, ...controls.get(exampleId)?.recipe })[slot as keyof ReturnType<WheelPickerRecipe>],
    })
  return Object.assign(controlled, recipe)
}
