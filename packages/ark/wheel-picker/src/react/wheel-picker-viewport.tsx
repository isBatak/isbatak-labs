import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerViewportBaseProps extends PolymorphicProps {}
export interface WheelPickerViewportProps
  extends HTMLProps<"div">, WheelPickerViewportBaseProps, RefAttributes<HTMLDivElement> {}

export const WheelPickerViewport = (props: WheelPickerViewportProps) => {
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(api.getViewportProps(), props)

  return <ark.div {...mergedProps} />
}
