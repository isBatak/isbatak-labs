import { defineComponent, type SlotsType } from "vue"
import { type UseCodePreviewContext, useCodePreviewContext } from "./use-code-preview-context"

export const CodePreviewContext = defineComponent({
  name: "CodePreviewContext",
  slots: Object as SlotsType<{ default: UseCodePreviewContext["value"] }>,
  setup(_, { slots }) {
    const api = useCodePreviewContext()

    return () => slots.default?.(api.value)
  },
})
