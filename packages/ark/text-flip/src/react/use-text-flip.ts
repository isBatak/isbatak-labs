import { useEnvironmentContext } from "@ark-ui/react/environment"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, type PropTypes, useMachine } from "@zag-js/react"
import { useId } from "react"
import type { Optional } from "../types"

export interface UseTextFlipProps extends Optional<Omit<textFlip.Props, "getRootNode">, "id"> {}

export interface UseTextFlipReturn extends textFlip.Api<PropTypes> {}

export const useTextFlip = (props: UseTextFlipProps = {}): UseTextFlipReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()

  const machineProps: textFlip.Props = {
    id,
    getRootNode,
    ...props,
  }

  const service = useMachine(textFlip.machine, machineProps)
  return textFlip.connect(service, normalizeProps)
}
