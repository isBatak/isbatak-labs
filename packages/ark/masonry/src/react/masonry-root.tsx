import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import * as masonry from "@isbatak/zag-masonry"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import type { Assign } from "../types"
import { useMasonry, type UseMasonryProps } from "./use-masonry"
import { MasonryProvider } from "./use-masonry-context"

export interface MasonryRootBaseProps extends UseMasonryProps, PolymorphicProps {}
export interface MasonryRootProps
  extends Assign<HTMLProps<"div">, MasonryRootBaseProps>, RefAttributes<HTMLDivElement> {}

export const MasonryRoot = (props: MasonryRootProps) => {
  const [useMasonryProps, localProps] = masonry.splitProps(props as Omit<typeof props, "dir">)
  const api = useMasonry(useMasonryProps)
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <MasonryProvider value={api}>
      <ark.div {...mergedProps} />
    </MasonryProvider>
  )
}
