import { defineComponent, type SlotsType } from "vue"
import { type UseTextFlipContext, useTextFlipContext } from "./use-text-flip-context"

export const TextFlipContext = defineComponent({
  name: "TextFlipContext",
  slots: Object as SlotsType<{ default: UseTextFlipContext["value"] }>,
  setup(_, { slots }) {
    const api = useTextFlipContext()

    return () => slots.default?.(api.value)
  },
})
