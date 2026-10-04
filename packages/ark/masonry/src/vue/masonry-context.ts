import { defineComponent, type SlotsType } from "vue"
import { type UseMasonryContext, useMasonryContext } from "./use-masonry-context"

export const MasonryContext = defineComponent({
  name: "MasonryContext",
  slots: Object as SlotsType<{ default: UseMasonryContext["value"] }>,
  setup(_, { slots }) {
    const api = useMasonryContext()

    return () => slots.default?.(api.value)
  },
})
