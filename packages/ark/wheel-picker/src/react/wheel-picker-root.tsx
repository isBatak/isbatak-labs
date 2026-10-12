import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import type { Assign } from "../types"
import { useWheelPicker, type UseWheelPickerProps } from "./use-wheel-picker"
import { WheelPickerProvider } from "./use-wheel-picker-context"

export interface WheelPickerRootBaseProps extends UseWheelPickerProps, PolymorphicProps {}
export interface WheelPickerRootProps
  extends Assign<HTMLProps<"div">, WheelPickerRootBaseProps>, RefAttributes<HTMLDivElement> {}

export const WheelPickerRoot = (props: WheelPickerRootProps) => {
  const { defaultValue, ...rest } = props
  const [useWheelPickerProps, localProps] = wheelPicker.splitProps(rest)
  const api = useWheelPicker({ ...useWheelPickerProps, defaultValue } as UseWheelPickerProps)
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <WheelPickerProvider value={api}>
      <ark.div {...mergedProps} />
    </WheelPickerProvider>
  )
}
