import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import type { Assign } from "../types"
import type { UseWheelPickerReturn } from "./use-wheel-picker"
import { WheelPickerProvider } from "./use-wheel-picker-context"

interface RootProviderProps {
  value: UseWheelPickerReturn
}

export interface WheelPickerRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface WheelPickerRootProviderProps
  extends Assign<HTMLProps<"div">, WheelPickerRootProviderBaseProps>, RefAttributes<HTMLDivElement> {}

export const WheelPickerRootProvider = (props: WheelPickerRootProviderProps) => {
  const { value: api, ...localProps } = props
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <WheelPickerProvider value={api}>
      <ark.div {...mergedProps} />
    </WheelPickerProvider>
  )
}
