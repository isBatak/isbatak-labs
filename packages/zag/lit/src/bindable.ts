import type { Bindable, BindableFn, BindableParams } from "@zag-js/core"
import { proxy, subscribe } from "@zag-js/store"

export function createBindable(notify: VoidFunction, cleanup: (dispose: VoidFunction) => void): BindableFn {
  function bindable<T>(props: () => BindableParams<T>): Bindable<T> {
    const options = props()
    const initial = options.value ?? options.defaultValue
    const store = proxy({ value: initial as T })
    const equal = options.isEqual ?? Object.is
    const controlled = () => props().value !== undefined
    const get = () => (controlled() ? (props().value as T) : store.value)

    cleanup(subscribe(store, notify, options.sync))

    return {
      get,
      hash(value) {
        return props().hash?.(value) ?? String(value)
      },
      initial,
      invoke(next, previous) {
        props().onChange?.(next, previous)
      },
      ref: store,
      set(value) {
        const previous = get()
        const next = typeof value === "function" ? (value as (previous: T) => T)(previous) : value
        if (!controlled()) store.value = next
        if (!equal(next, previous)) props().onChange?.(next, previous)
      },
    }
  }

  bindable.cleanup = cleanup
  bindable.ref = <T>(initial: T) => {
    let value = initial
    return {
      get: () => value,
      set: (next: T) => {
        value = next
      },
    }
  }

  return bindable
}
