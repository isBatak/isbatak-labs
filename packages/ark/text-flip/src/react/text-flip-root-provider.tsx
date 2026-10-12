import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import type { Assign } from "../types"
import type { UseTextFlipReturn } from "./use-text-flip"
import { TextFlipProvider } from "./use-text-flip-context"

interface RootProviderProps {
  value: UseTextFlipReturn
}

export interface TextFlipRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface TextFlipRootProviderProps
  extends Assign<HTMLProps<"span">, TextFlipRootProviderBaseProps>, RefAttributes<HTMLSpanElement> {}

export const TextFlipRootProvider = (props: TextFlipRootProviderProps) => {
  const { value: api, ...localProps } = props
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <TextFlipProvider value={api}>
      <ark.span {...mergedProps} />
    </TextFlipProvider>
  )
}
