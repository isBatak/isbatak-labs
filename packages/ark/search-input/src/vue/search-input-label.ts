import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useSearchInputContext } from "./use-search-input-context"

export const SearchInputLabel = defineComponent({
  name: "SearchInputLabel",
  props: {
    asChild: Boolean,
  },
  setup(props, { slots }) {
    const api = useSearchInputContext()

    return () => h(ark.label as Component, { ...api.value.getLabelProps(), asChild: props.asChild }, slots)
  },
})
