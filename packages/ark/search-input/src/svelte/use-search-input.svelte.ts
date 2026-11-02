import { useLocaleContext } from "@ark-ui/svelte"
import { normalizeProps, type PropTypes } from "@zag-js/svelte"
import * as searchInput from "../core/index.js"

export interface UseSearchInputProps extends Omit<searchInput.Props, "dir"> {}

export interface UseSearchInputReturn {
  (): searchInput.Api<PropTypes>
}

export const useSearchInput = (props: UseSearchInputProps | (() => UseSearchInputProps)): UseSearchInputReturn => {
  const locale = useLocaleContext()

  const resolved = $derived.by<searchInput.Props>(() => ({
    dir: locale().dir,
    ...(typeof props === "function" ? props() : props),
  }))

  let state = $state.raw(searchInput.getInitialState(typeof props === "function" ? props() : props))

  const api = $derived(
    searchInput.connect(resolved, state, (patch) => (state = { ...state, ...patch }), normalizeProps),
  )

  return () => api
}
