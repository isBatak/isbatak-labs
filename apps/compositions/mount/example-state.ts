import type * as wheelPicker from "@isbatak/zag-wheel-picker"

type Machine = typeof wheelPicker.machine

interface PropsParams<P> {
  props: P
  scope: object
}

interface ControllableMachine<P> {
  props?: ((params: PropsParams<P>) => P) | undefined
}

type Recipe = ((variants?: any) => Record<string, string>) & object

export interface ExampleControls {
  props?: Record<string, unknown>
  recipe?: Record<string, string>
}

const registry = globalThis as typeof globalThis & {
  __compositionsSnapshots?: Map<string, string | null>
  __compositionsControls?: Map<string, ExampleControls>
  __compositionsCollections?: WeakMap<object, string>
  __compositionsScopes?: WeakMap<object, string>
  __compositionsCurrent?: string
}
const snapshots = (registry.__compositionsSnapshots ??= new Map())
const controls = (registry.__compositionsControls ??= new Map())
const collections = (registry.__compositionsCollections ??= new WeakMap())
const scopes = (registry.__compositionsScopes ??= new WeakMap())

export function resetSnapshot(exampleId: string) {
  for (const key of snapshots.keys()) if (key.startsWith(`${exampleId}:`)) snapshots.delete(key)
}

export function setControls(exampleId: string, value: ExampleControls) {
  controls.set(exampleId, value)
}

export function setCurrentExample(exampleId: string) {
  registry.__compositionsCurrent = exampleId
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

export function withControls<P extends object, M extends ControllableMachine<P>>(machine: M, exampleId?: string): M {
  return {
    ...machine,
    props(params: PropsParams<P>) {
      const id = exampleId ?? scopes.get(params.scope) ?? registry.__compositionsCurrent
      if (id) scopes.set(params.scope, id)
      const props = { ...params.props, ...(id && controls.get(id)?.props) }
      return machine.props ? machine.props({ ...params, props }) : props
    },
  }
}

export function withRecipeControls<R extends Recipe>(recipe: R, exampleId: string): R {
  const controlled = (variants?: Parameters<R>[0]) =>
    new Proxy({} as ReturnType<R>, {
      get: (_, slot: string) => recipe({ ...variants, ...controls.get(exampleId)?.recipe })[slot],
    })
  return Object.assign(controlled, recipe)
}
