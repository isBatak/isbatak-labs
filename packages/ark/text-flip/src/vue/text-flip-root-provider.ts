import { ark } from "@ark-ui/vue/factory"
import { type Component, computed, defineComponent, h, type PropType, type UnwrapRef } from "vue"
import type { UseTextFlipReturn } from "./use-text-flip"
import { TextFlipProvider } from "./use-text-flip-context"

export const TextFlipRootProvider = defineComponent({
  name: "TextFlipRootProvider",
  props: {
    asChild: Boolean,
    value: { type: Object as PropType<UnwrapRef<UseTextFlipReturn>>, required: true },
  },
  setup(props, { slots }) {
    const api = computed(() => props.value)
    TextFlipProvider(api)

    return () => h(ark.span as Component, { ...api.value.getRootProps(), asChild: props.asChild }, slots)
  },
})
