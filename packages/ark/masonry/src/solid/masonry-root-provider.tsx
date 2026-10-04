import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import type { Assign } from "../types"
import type { UseMasonryReturn } from "./use-masonry"
import { MasonryProvider } from "./use-masonry-context"

interface RootProviderProps {
  value: UseMasonryReturn
}

export interface MasonryRootProviderBaseProps extends RootProviderProps, PolymorphicProps<"div"> {}
export interface MasonryRootProviderProps extends Assign<HTMLProps<"div">, MasonryRootProviderBaseProps> {}

export const MasonryRootProvider = (props: MasonryRootProviderProps) => {
  const [{ value: api }, localProps] = splitProps(props, ["value"])
  const mergedProps = mergeProps(() => api().getRootProps(), localProps)

  return (
    <MasonryProvider value={api}>
      <ark.div {...mergedProps} />
    </MasonryProvider>
  )
}
