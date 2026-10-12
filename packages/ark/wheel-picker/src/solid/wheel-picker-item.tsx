import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export interface WheelPickerItemBaseProps extends wheelPicker.ItemProps, PolymorphicProps<"div"> {}
export interface WheelPickerItemProps extends HTMLProps<"div">, WheelPickerItemBaseProps {}

export const WheelPickerItem = (props: WheelPickerItemProps) => {
  const [itemProps, localProps] = splitProps(props, ["row"])
  const api = useWheelPickerContext()
  const mergedProps = mergeProps(() => api().getItemProps(itemProps), localProps)

  return <ark.div {...mergedProps} />
}
