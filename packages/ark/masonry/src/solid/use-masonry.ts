import { useEnvironmentContext } from "@ark-ui/solid/environment"
import { useLocaleContext } from "@ark-ui/solid/locale"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, type PropTypes, useMachine } from "@zag-js/solid"
import { type Accessor, createMemo, createUniqueId } from "solid-js"
import type { Optional } from "../types"

export interface UseMasonryProps extends Optional<Omit<masonry.Props, "dir" | "getRootNode">, "id"> {}

export interface UseMasonryReturn extends Accessor<masonry.Api<PropTypes>> {}

type MaybeAccessor<T> = T | Accessor<T>

export const useMasonry = (props: MaybeAccessor<UseMasonryProps> = {}): UseMasonryReturn => {
  const id = createUniqueId()
  const locale = useLocaleContext()
  const environment = useEnvironmentContext()

  const machineProps = createMemo<masonry.Props>(() => ({
    id,
    dir: locale().dir,
    getRootNode: environment().getRootNode,
    ...(typeof props === "function" ? props() : props),
  }))

  const service = useMachine(masonry.machine, machineProps)
  return createMemo(() => masonry.connect(service, normalizeProps))
}
