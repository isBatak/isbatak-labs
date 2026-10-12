import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useWheelPickerContext } from "./use-wheel-picker-context"

export const WheelPickerItem = defineComponent({
  name: "WheelPickerItem",
  props: {
    asChild: Boolean,
    row: { type: Number, required: true },
  },
  setup(props, { slots }) {
    const api = useWheelPickerContext()

    return () =>
      h(ark.div as Component, { ...api.value.getItemProps({ row: props.row }), asChild: props.asChild }, slots)
  },
})
