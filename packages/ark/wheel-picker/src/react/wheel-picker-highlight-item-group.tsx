import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerHighlightItemGroupBaseProps extends PolymorphicProps {}
export interface WheelPickerHighlightItemGroupProps
  extends HTMLProps<"ul">, WheelPickerHighlightItemGroupBaseProps, RefAttributes<HTMLUListElement> {}

export const WheelPickerHighlightItemGroup = (props: WheelPickerHighlightItemGroupProps) => {
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(api.getHighlightItemGroupProps(), props)

  return <ark.ul {...mergedProps} />
}
