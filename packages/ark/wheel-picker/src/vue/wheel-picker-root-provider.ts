import { ark } from "@ark-ui/vue/factory"
import { type Component, computed, defineComponent, h, type PropType, type UnwrapRef } from "vue"
import type { UseWheelPickerReturn } from "./use-wheel-picker"
import { WheelPickerProvider } from "./use-wheel-picker-context"

export const WheelPickerRootProvider = defineComponent({
  name: "WheelPickerRootProvider",
  props: {
    asChild: Boolean,
    value: { type: Object as PropType<UnwrapRef<UseWheelPickerReturn>>, required: true },
  },
  setup(props, { slots }) {
    const api = computed(() => props.value)
    WheelPickerProvider(api)

    return () => h(ark.div as Component, { ...api.value.getRootProps(), asChild: props.asChild }, slots)
  },
})
