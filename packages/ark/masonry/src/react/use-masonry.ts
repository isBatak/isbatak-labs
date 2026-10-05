import { useEnvironmentContext } from "@ark-ui/react/environment"
import { useLocaleContext } from "@ark-ui/react/locale"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, type PropTypes, useMachine } from "@zag-js/react"
import { useId } from "react"
import type { Optional } from "../types"

export interface UseMasonryProps extends Optional<Omit<masonry.Props, "dir" | "getRootNode">, "id"> {}

export interface UseMasonryReturn extends masonry.Api<PropTypes> {}

export const useMasonry = (props: UseMasonryProps = {}): UseMasonryReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: masonry.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(masonry.machine, machineProps)
  return masonry.connect(service, normalizeProps)
}
