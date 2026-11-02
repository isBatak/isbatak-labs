import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useSearchInputContext } from "./use-search-input-context"

export const SearchInputControl = defineComponent({
  name: "SearchInputControl",
  props: {
    asChild: Boolean,
  },
  setup(props, { slots }) {
    const api = useSearchInputContext()

    return () => h(ark.div as Component, { ...api.value.getControlProps(), asChild: props.asChild }, slots)
  },
})
