import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerControlBaseProps extends PolymorphicProps {}
export interface WheelPickerControlProps
  extends HTMLProps<"div">, WheelPickerControlBaseProps, RefAttributes<HTMLDivElement> {}

export const WheelPickerControl = (props: WheelPickerControlProps) => {
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(api.getControlProps(), props)

  return <ark.div {...mergedProps} />
}
