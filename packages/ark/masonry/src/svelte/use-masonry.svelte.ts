import { useEnvironmentContext, useLocaleContext } from "@ark-ui/svelte"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, type PropTypes, useMachine } from "@zag-js/svelte"

export interface UseMasonryProps extends Omit<masonry.Props, "dir" | "getRootNode"> {}

export interface UseMasonryReturn {
  (): masonry.Api<PropTypes>
}

export const useMasonry = (props: UseMasonryProps | (() => UseMasonryProps)): UseMasonryReturn => {
  const env = useEnvironmentContext()
  const locale = useLocaleContext()

  const machineProps = $derived.by<masonry.Props>(() => ({
    dir: locale().dir,
    getRootNode: env().getRootNode,
    ...(typeof props === "function" ? props() : props),
  }))

  const service = useMachine(masonry.machine, () => machineProps)
  const api = $derived(masonry.connect(service, normalizeProps))

  return () => api
}
