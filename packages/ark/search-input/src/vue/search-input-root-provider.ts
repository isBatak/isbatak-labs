import { ark } from "@ark-ui/vue/factory"
import { type Component, computed, defineComponent, h, type PropType, type UnwrapRef } from "vue"
import type { UseSearchInputReturn } from "./use-search-input"
import { SearchInputProvider } from "./use-search-input-context"

export const SearchInputRootProvider = defineComponent({
  name: "SearchInputRootProvider",
  props: {
    asChild: Boolean,
    value: { type: Object as PropType<UnwrapRef<UseSearchInputReturn>>, required: true },
  },
  setup(props, { slots }) {
    const api = computed(() => props.value)
    SearchInputProvider(api)

    return () => h(ark.div as Component, { ...api.value.getRootProps(), asChild: props.asChild }, slots)
  },
})
