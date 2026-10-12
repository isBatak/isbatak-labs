import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerHighlightBaseProps extends PolymorphicProps {}
export interface WheelPickerHighlightProps
  extends HTMLProps<"div">, WheelPickerHighlightBaseProps, RefAttributes<HTMLDivElement> {}

export const WheelPickerHighlight = (props: WheelPickerHighlightProps) => {
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(api.getHighlightProps(), props)

  return <ark.div {...mergedProps} />
}
