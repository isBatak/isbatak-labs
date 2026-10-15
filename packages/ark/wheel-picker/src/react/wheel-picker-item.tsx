import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerItemBaseProps extends wheelPicker.ItemProps, PolymorphicProps {}
export interface WheelPickerItemProps
  extends HTMLProps<"div">, WheelPickerItemBaseProps, RefAttributes<HTMLDivElement> {}

export const WheelPickerItem = (props: WheelPickerItemProps) => {
  const { row, ...localProps } = props
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(api.getItemProps({ row }), localProps)

  return <ark.div {...mergedProps} />
}
