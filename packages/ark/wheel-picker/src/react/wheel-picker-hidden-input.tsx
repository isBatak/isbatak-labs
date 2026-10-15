import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerHiddenInputBaseProps extends PolymorphicProps {}
export interface WheelPickerHiddenInputProps
  extends HTMLProps<"input">, WheelPickerHiddenInputBaseProps, RefAttributes<HTMLInputElement> {}

export const WheelPickerHiddenInput = (props: WheelPickerHiddenInputProps) => {
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(api.getHiddenInputProps(), props)

  return <ark.input {...mergedProps} />
}
