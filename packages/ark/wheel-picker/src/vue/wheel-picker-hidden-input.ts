import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export const WheelPickerHiddenInput = defineComponent({
  name: "WheelPickerHiddenInput",
  props: {
    asChild: Boolean,
  },
  setup(props, { slots }) {
    const api = useWheelPickerContext()

    return () => h(ark.input as Component, { ...api.value.getHiddenInputProps(), asChild: props.asChild }, slots)
  },
})
