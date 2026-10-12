import type * as wheelPicker from "@isbatak/zag-wheel-picker"

type CreateWheelPicker = typeof wheelPicker.createWheelPicker

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
  __compositionsControls?: Map<string, ExampleControls>
  __compositionsScopes?: WeakMap<object, string>
  __compositionsCurrent?: string
}
const controls = (registry.__compositionsControls ??= new Map())
const scopes = (registry.__compositionsScopes ??= new WeakMap())

export function setControls(exampleId: string, value: ExampleControls) {
  controls.set(exampleId, value)
}

export function setCurrentExample(exampleId: string) {
  registry.__compositionsCurrent = exampleId
}

export function withPickerControls(create: CreateWheelPicker, exampleId?: string): CreateWheelPicker {
  return () => {
    const id = exampleId ?? registry.__compositionsCurrent
    const picker = create()
    const withControls = (props: wheelPicker.Props): wheelPicker.Props => ({
      ...props,
      ...(id && controls.get(id)?.props),
    })

    return {
      connect: (props, normalize) => picker.connect(withControls(props), normalize),
      mount: (getProps) => picker.mount(() => withControls(getProps())),
      sync: (props) => picker.sync(withControls(props)),
    }
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
