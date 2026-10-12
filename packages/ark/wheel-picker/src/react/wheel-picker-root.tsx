import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { mergeProps } from "@zag-js/react"
import type { JSX, RefAttributes } from "react"
import type { Assign } from "../types"
import { useWheelPicker, type UseWheelPickerProps } from "./use-wheel-picker"
import { WheelPickerProvider } from "./use-wheel-picker-context"

export interface WheelPickerRootBaseProps<T extends wheelPicker.CollectionItem>
  extends UseWheelPickerProps<T>, PolymorphicProps {}
export interface WheelPickerRootProps<T extends wheelPicker.CollectionItem>
  extends Assign<HTMLProps<"div">, WheelPickerRootBaseProps<T>>, RefAttributes<HTMLDivElement> {}

export type WheelPickerRootComponent = <T extends wheelPicker.CollectionItem>(
  props: WheelPickerRootProps<T>,
) => JSX.Element

const WheelPickerRootImpl = (props: WheelPickerRootProps<wheelPicker.CollectionItem>) => {
  const [useWheelPickerProps, localProps] = wheelPicker.splitProps(props as Omit<typeof props, "dir">)
  const api = useWheelPicker(useWheelPickerProps as UseWheelPickerProps)
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <WheelPickerProvider value={api}>
      <ark.div {...mergedProps} />
    </WheelPickerProvider>
  )
}

export const WheelPickerRoot = WheelPickerRootImpl as WheelPickerRootComponent
