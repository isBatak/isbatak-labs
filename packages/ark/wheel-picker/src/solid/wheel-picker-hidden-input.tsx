import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerHiddenInputBaseProps extends PolymorphicProps<"input"> {}
export interface WheelPickerHiddenInputProps extends HTMLProps<"input">, WheelPickerHiddenInputBaseProps {}

export const WheelPickerHiddenInput = (props: WheelPickerHiddenInputProps) => {
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(() => api().getHiddenInputProps(), props)

  return <ark.input {...mergedProps} />
}
