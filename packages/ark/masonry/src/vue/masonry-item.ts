import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useMasonryContext } from "./use-masonry-context"

export const MasonryItem = defineComponent({
  name: "MasonryItem",
  props: {
    asChild: Boolean,
    span: Number,
    value: { type: String, required: true },
  },
  setup(props, { slots }) {
    const api = useMasonryContext()

    return () =>
      h(
        ark.div as Component,
        { ...api.value.getItemProps({ value: props.value, span: props.span }), asChild: props.asChild },
        slots,
      )
  },
})
