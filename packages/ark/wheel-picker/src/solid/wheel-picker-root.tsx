import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { mergeProps } from "@zag-js/solid"
import { type JSX, splitProps } from "solid-js"
import type { Assign } from "../types"
import { useWheelPicker, type UseWheelPickerProps } from "./use-wheel-picker"
import { WheelPickerProvider } from "./use-wheel-picker-context"

export interface WheelPickerRootBaseProps extends UseWheelPickerProps, PolymorphicProps<"div"> {}
export interface WheelPickerRootProps extends Assign<HTMLProps<"div">, WheelPickerRootBaseProps> {}

export const WheelPickerRoot = (props: WheelPickerRootProps): JSX.Element => {
  const [useWheelPickerProps, localProps] = splitProps(props, [
    ...wheelPicker.props,
    "defaultValue",
  ] as (keyof WheelPickerRootProps)[])
  const api = useWheelPicker(useWheelPickerProps as UseWheelPickerProps)
  const mergedProps = mergeProps(() => api().getRootProps(), localProps)

  return (
    <WheelPickerProvider value={api}>
      <ark.div {...mergedProps} />
    </WheelPickerProvider>
  )
}
