import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h, type PropType } from "vue"
import type * as codePreview from "../core"
import { useCodePreview } from "./use-code-preview"
import { CodePreviewProvider } from "./use-code-preview-context"

export const CodePreviewRoot = defineComponent({
  name: "CodePreviewRoot",
  props: {
    asChild: Boolean,
    code: String,
    copiedTimeout: Number,
    defaultOpen: { type: Boolean, default: undefined },
    id: String,
    ids: Object as PropType<codePreview.ElementIds>,
    ltrLocale: String,
    minWidth: Number,
    rtlLocale: String,
    step: Number,
    translations: Object as PropType<Partial<codePreview.IntlTranslations>>,
  },
  emits: {
    openChange: (_details: codePreview.OpenChangeDetails) => true,
  },
  setup(props, { emit, slots }) {
    const api = useCodePreview(() => {
      const { asChild: _, ...codePreviewProps } = props
      return codePreviewProps
    }, emit)
    CodePreviewProvider(api)

    return () => h(ark.div as Component, { ...api.value.getRootProps(), asChild: props.asChild }, slots)
  },
})
