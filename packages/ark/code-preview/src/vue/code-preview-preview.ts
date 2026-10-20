import { ark } from "@ark-ui/vue/factory"
import { LocaleProvider } from "@ark-ui/vue/locale"
import { type Component, defineComponent, h } from "vue"
import { useCodePreviewContext } from "./use-code-preview-context"

export const CodePreviewPreview = defineComponent({
  name: "CodePreviewPreview",
  setup(_, { slots }) {
    const api = useCodePreviewContext()

    return () =>
      h(ark.div as Component, api.value.getPreviewProps(), {
        default: () => h(LocaleProvider, { locale: api.value.previewLocale }, slots),
      })
  },
})
