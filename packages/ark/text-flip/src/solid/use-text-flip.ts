import { useEnvironmentContext } from "@ark-ui/solid/environment"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, type PropTypes, useMachine } from "@zag-js/solid"
import { type Accessor, createMemo, createUniqueId } from "solid-js"
import type { Optional } from "../types"

export interface UseTextFlipProps extends Optional<Omit<textFlip.Props, "getRootNode">, "id"> {}

export interface UseTextFlipReturn extends Accessor<textFlip.Api<PropTypes>> {}

type MaybeAccessor<T> = T | Accessor<T>

export const useTextFlip = (props: MaybeAccessor<UseTextFlipProps> = {}): UseTextFlipReturn => {
  const id = createUniqueId()
  const environment = useEnvironmentContext()

  const machineProps = createMemo<textFlip.Props>(() => ({
    id,
    getRootNode: environment().getRootNode,
    ...(typeof props === "function" ? props() : props),
  }))

  const service = useMachine(textFlip.machine, machineProps)
  return createMemo(() => textFlip.connect(service, normalizeProps))
}
