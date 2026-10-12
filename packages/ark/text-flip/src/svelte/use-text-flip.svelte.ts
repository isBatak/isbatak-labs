import { useEnvironmentContext } from "@ark-ui/svelte"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, type PropTypes, useMachine } from "@zag-js/svelte"

export interface UseTextFlipProps extends Omit<textFlip.Props, "getRootNode"> {}

export interface UseTextFlipReturn {
  (): textFlip.Api<PropTypes>
}

export const useTextFlip = (props: UseTextFlipProps | (() => UseTextFlipProps)): UseTextFlipReturn => {
  const env = useEnvironmentContext()

  const machineProps = $derived.by<textFlip.Props>(() => ({
    getRootNode: env().getRootNode,
    ...(typeof props === "function" ? props() : props),
  }))

  const service = useMachine(textFlip.machine, () => machineProps)
  const api = $derived(textFlip.connect(service, normalizeProps))

  return () => api
}
