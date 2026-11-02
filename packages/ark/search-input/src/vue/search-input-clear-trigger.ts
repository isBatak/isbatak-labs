import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useSearchInputContext } from "./use-search-input-context"

export const SearchInputClearTrigger = defineComponent({
  name: "SearchInputClearTrigger",
  props: {
    asChild: Boolean,
  },
  setup(props, { slots }) {
    const api = useSearchInputContext()

    return () => h(ark.button as Component, { ...api.value.getClearTriggerProps(), asChild: props.asChild }, slots)
  },
})
