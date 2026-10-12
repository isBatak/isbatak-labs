import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useTextFlipContext } from "./use-text-flip-context"

export const TextFlipItem = defineComponent({
  name: "TextFlipItem",
  props: {
    asChild: Boolean,
    index: { type: Number, required: true },
  },
  setup(props, { slots }) {
    const api = useTextFlipContext()

    return () =>
      h(ark.span as Component, { ...api.value.getItemProps({ index: props.index }), asChild: props.asChild }, slots)
  },
})
