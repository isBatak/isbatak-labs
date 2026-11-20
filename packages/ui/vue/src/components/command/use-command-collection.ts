import { type MaybeRefOrGetter, onScopeDispose, shallowRef, toValue, watch } from "vue"

import {
  type CommandItem,
  type UseCommandCollectionProps,
  type UseCommandCollectionReturn,
  createCommandStore,
  createCommandView,
} from "./command-store"

export function useCommandCollection<T extends CommandItem>(
  props: MaybeRefOrGetter<UseCommandCollectionProps<T>>,
): UseCommandCollectionReturn<T> {
  const store = createCommandStore(toValue(props))
  const state = shallowRef(store.getState())
  store.subscribe(() => {
    state.value = store.getState()
  })
  watch(() => toValue(props), store.setProps, { flush: "sync" })
  onScopeDispose(store.destroy)
  return createCommandView(store, () => state.value)
}
