import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import type { Assign } from "../types"
import type { UseTextFlipReturn } from "./use-text-flip"
import { TextFlipProvider } from "./use-text-flip-context"

interface RootProviderProps {
  value: UseTextFlipReturn
}

export interface TextFlipRootProviderBaseProps extends RootProviderProps, PolymorphicProps<"span"> {}
export interface TextFlipRootProviderProps extends Assign<HTMLProps<"span">, TextFlipRootProviderBaseProps> {}

export const TextFlipRootProvider = (props: TextFlipRootProviderProps) => {
  const [{ value: api }, localProps] = splitProps(props, ["value"])
  const mergedProps = mergeProps(() => api().getRootProps(), localProps)

  return (
    <TextFlipProvider value={api}>
      <ark.span {...mergedProps} />
    </TextFlipProvider>
  )
}
