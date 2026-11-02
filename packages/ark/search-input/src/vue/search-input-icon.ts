import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useSearchInputContext } from "./use-search-input-context"

export const SearchInputIcon = defineComponent({
  name: "SearchInputIcon",
  props: {
    asChild: Boolean,
  },
  setup(props, { slots }) {
    const api = useSearchInputContext()

    return () => h(ark.div as Component, { ...api.value.getIconProps(), asChild: props.asChild }, slots)
  },
})
