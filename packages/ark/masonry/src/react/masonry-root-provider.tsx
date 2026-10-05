import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import { forwardRef } from "react"
import type { Assign } from "../types"
import type { UseMasonryReturn } from "./use-masonry"
import { MasonryProvider } from "./use-masonry-context"

interface RootProviderProps {
  value: UseMasonryReturn
}

export interface MasonryRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface MasonryRootProviderProps extends Assign<HTMLProps<"div">, MasonryRootProviderBaseProps> {}

export const MasonryRootProvider = forwardRef<HTMLDivElement, MasonryRootProviderProps>((props, ref) => {
  const { value: api, ...localProps } = props
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <MasonryProvider value={api}>
      <ark.div {...mergedProps} ref={ref} />
    </MasonryProvider>
  )
})

MasonryRootProvider.displayName = "MasonryRootProvider"
