import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerHighlightItemBaseProps extends wheelPicker.ItemProps, PolymorphicProps {}
export interface WheelPickerHighlightItemProps
  extends HTMLProps<"li">, WheelPickerHighlightItemBaseProps, RefAttributes<HTMLLIElement> {}

export const WheelPickerHighlightItem = (props: WheelPickerHighlightItemProps) => {
  const { item, index, ...localProps } = props
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(api.getHighlightItemProps({ item, index }), localProps)

  return <ark.li {...mergedProps} />
}
