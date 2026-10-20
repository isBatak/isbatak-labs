import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useCodePreviewContext } from "./use-code-preview-context"

export const CodePreviewToolbar = defineComponent({
  name: "CodePreviewToolbar",
  props: {
    asChild: Boolean,
  },
  setup(props, { slots }) {
    const api = useCodePreviewContext()

    return () => h(ark.div as Component, { ...api.value.getToolbarProps(), asChild: props.asChild }, slots)
  },
})
