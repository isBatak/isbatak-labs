import { type Accessor, createComputed, createSignal, onCleanup, untrack } from "solid-js"

import {
  type CommandItem,
  type UseCommandCollectionProps,
  type UseCommandCollectionReturn,
  createCommandStore,
  createCommandView,
} from "./command-store"

type MaybeAccessor<T> = T | Accessor<T>

export function useCommandCollection<T extends CommandItem>(
  props: MaybeAccessor<UseCommandCollectionProps<T>>,
): UseCommandCollectionReturn<T> {
  const read = () => (typeof props === "function" ? props() : props)
  const store = createCommandStore(untrack(read))
  const [state, setState] = createSignal(store.getState(), { equals: false })
  store.subscribe(() => setState(() => store.getState()))
  createComputed(() => store.setProps(read()))
  onCleanup(store.destroy)
  return createCommandView(store, state)
}
