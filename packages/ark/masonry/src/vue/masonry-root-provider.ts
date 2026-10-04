import { ark } from "@ark-ui/vue/factory"
import { type Component, computed, defineComponent, h, type PropType, type UnwrapRef } from "vue"
import type { UseMasonryReturn } from "./use-masonry"
import { MasonryProvider } from "./use-masonry-context"

export const MasonryRootProvider = defineComponent({
  name: "MasonryRootProvider",
  props: {
    asChild: Boolean,
    value: { type: Object as PropType<UnwrapRef<UseMasonryReturn>>, required: true },
  },
  setup(props, { slots }) {
    const api = computed(() => props.value)
    MasonryProvider(api)

    return () => h(ark.div as Component, { ...api.value.getRootProps(), asChild: props.asChild }, slots)
  },
})
