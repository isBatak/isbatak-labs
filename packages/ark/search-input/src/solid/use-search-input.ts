import { useLocaleContext } from "@ark-ui/solid/locale"
import { normalizeProps, type PropTypes } from "@zag-js/solid"
import { type Accessor, createMemo, createUniqueId } from "solid-js"
import { createStore } from "solid-js/store"
import * as searchInput from "../core"
import type { Optional } from "../types"

export interface UseSearchInputProps extends Optional<Omit<searchInput.Props, "dir">, "id"> {}

export interface UseSearchInputReturn extends Accessor<searchInput.Api<PropTypes>> {}

type MaybeAccessor<T> = T | Accessor<T>

export const useSearchInput = (props: MaybeAccessor<UseSearchInputProps> = {}): UseSearchInputReturn => {
  const id = createUniqueId()
  const locale = useLocaleContext()

  const resolved = createMemo<searchInput.Props>(() => ({
    id,
    dir: locale().dir,
    ...(typeof props === "function" ? props() : props),
  }))

  const [state, setState] = createStore(searchInput.getInitialState(resolved()))

  return createMemo(() => searchInput.connect(resolved(), { ...state }, (patch) => setState(patch), normalizeProps))
}
