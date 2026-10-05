import { ark } from "@ark-ui/vue/factory"
import type * as masonry from "@isbatak/zag-masonry"
import { type Component, defineComponent, h, type PropType } from "vue"
import { useMasonry } from "./use-masonry"
import { MasonryProvider } from "./use-masonry-context"

export const MasonryRoot = defineComponent({
  name: "MasonryRoot",
  props: {
    asChild: Boolean,
    columns: Number,
    gap: [Number, String],
    id: String,
    ids: Object as PropType<masonry.ElementIds>,
    minColumnWidth: String,
    sequential: { type: Boolean, default: undefined },
  },
  emits: {
    layoutChange: (_details: masonry.LayoutChangeDetails) => true,
  },
  setup(props, { emit, slots }) {
    const api = useMasonry(() => {
      const { asChild: _, ...machineProps } = props
      return machineProps
    }, emit)
    MasonryProvider(api)

    return () => h(ark.div as Component, { ...api.value.getRootProps(), asChild: props.asChild }, slots)
  },
})
