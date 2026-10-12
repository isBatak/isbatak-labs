import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerLabelBaseProps extends PolymorphicProps {}
export interface WheelPickerLabelProps
  extends HTMLProps<"span">, WheelPickerLabelBaseProps, RefAttributes<HTMLSpanElement> {}

export const WheelPickerLabel = (props: WheelPickerLabelProps) => {
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(api.getLabelProps(), props)

  return <ark.span {...mergedProps} />
}
