import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import * as masonry from "@isbatak/zag-masonry"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import type { Assign } from "../types"
import { useMasonry, type UseMasonryProps } from "./use-masonry"
import { MasonryProvider } from "./use-masonry-context"

export interface MasonryRootBaseProps extends UseMasonryProps, PolymorphicProps<"div"> {}
export interface MasonryRootProps extends Assign<HTMLProps<"div">, MasonryRootBaseProps> {}

export const MasonryRoot = (props: MasonryRootProps) => {
  const [useMasonryProps, localProps] = splitProps(props, masonry.props as (keyof MasonryRootProps)[])
  const api = useMasonry(useMasonryProps as UseMasonryProps)
  const mergedProps = mergeProps(() => api().getRootProps(), localProps)

  return (
    <MasonryProvider value={api}>
      <ark.div {...mergedProps} />
    </MasonryProvider>
  )
}
