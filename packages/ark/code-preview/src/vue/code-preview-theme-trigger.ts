import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import { useCodePreviewContext } from "./use-code-preview-context"

export const CodePreviewThemeTrigger = defineComponent({
  name: "CodePreviewThemeTrigger",
  props: {
    asChild: Boolean,
  },
  setup(props, { slots }) {
    const api = useCodePreviewContext()

    return () => h(ark.button as Component, { ...api.value.getThemeTriggerProps(), asChild: props.asChild }, slots)
  },
})
