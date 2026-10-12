import { ark } from "@ark-ui/vue/factory"
import type * as textFlip from "@isbatak/zag-text-flip"
import { type Component, defineComponent, h, type PropType } from "vue"
import { useTextFlip } from "./use-text-flip"
import { TextFlipProvider } from "./use-text-flip-context"

export const TextFlipRoot = defineComponent({
  name: "TextFlipRoot",
  props: {
    asChild: Boolean,
    autoplay: { type: Boolean, default: undefined },
    defaultIndex: Number,
    id: String,
    ids: Object as PropType<textFlip.ElementIds>,
    interval: Number,
  },
  emits: {
    indexChange: (_details: textFlip.IndexChangeDetails) => true,
  },
  setup(props, { emit, slots }) {
    const api = useTextFlip(() => {
      const { asChild: _, ...machineProps } = props
      return machineProps
    }, emit)
    TextFlipProvider(api)

    return () => h(ark.span as Component, { ...api.value.getRootProps(), asChild: props.asChild }, slots)
  },
})
