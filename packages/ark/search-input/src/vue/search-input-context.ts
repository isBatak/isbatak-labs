import { defineComponent, type SlotsType } from "vue"
import { type UseSearchInputContext, useSearchInputContext } from "./use-search-input-context"

export const SearchInputContext = defineComponent({
  name: "SearchInputContext",
  slots: Object as SlotsType<{ default: UseSearchInputContext["value"] }>,
  setup(_, { slots }) {
    const api = useSearchInputContext()

    return () => slots.default?.(api.value)
  },
})
