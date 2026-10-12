import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerItemBaseProps extends wheelPicker.ItemProps, PolymorphicProps {}
export interface WheelPickerItemProps extends HTMLProps<"li">, WheelPickerItemBaseProps, RefAttributes<HTMLLIElement> {}

export const WheelPickerItem = (props: WheelPickerItemProps) => {
  const { item, index, ...localProps } = props
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(api.getItemProps({ item, index }), localProps)

  return <ark.li {...mergedProps} />
}
