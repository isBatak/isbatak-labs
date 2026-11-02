import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useSearchInputContext } from "./use-search-input-context"

export const SearchInputInput = defineComponent({
  name: "SearchInputInput",
  props: {
    asChild: Boolean,
  },
  setup(props, { slots }) {
    const api = useSearchInputContext()

    return () => h(ark.input as Component, { ...api.value.getInputProps(), asChild: props.asChild }, slots)
  },
})
