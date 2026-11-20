import { untrack } from "svelte"

import {
  type CommandItem,
  type UseCommandCollectionProps,
  type UseCommandCollectionReturn,
  createCommandStore,
  createCommandView,
} from "./command-store"

type MaybeFunction<T> = T | (() => T)

export function useCommandCollection<T extends CommandItem>(
  props: MaybeFunction<UseCommandCollectionProps<T>>,
): UseCommandCollectionReturn<T> {
  const read = () => (typeof props === "function" ? props() : props)
  const store = createCommandStore(untrack(read))
  let state = $state.raw(store.getState())
  store.subscribe(() => {
    state = store.getState()
  })
  $effect.pre(() => {
    store.setProps(read())
  })
  $effect(() => () => store.destroy())
  return createCommandView(store, () => state)
}
