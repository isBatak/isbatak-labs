import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerLabelBaseProps extends PolymorphicProps<"span"> {}
export interface WheelPickerLabelProps extends HTMLProps<"span">, WheelPickerLabelBaseProps {}

export const WheelPickerLabel = (props: WheelPickerLabelProps) => {
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(() => api().getLabelProps(), props)

  return <ark.span {...mergedProps} />
}
