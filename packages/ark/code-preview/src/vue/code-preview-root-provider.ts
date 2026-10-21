import { ark } from "@ark-ui/vue/factory"
import { type Component, computed, defineComponent, h, type PropType, type UnwrapRef } from "vue"
import type { UseCodePreviewReturn } from "./use-code-preview"
import { CodePreviewProvider } from "./use-code-preview-context"

export const CodePreviewRootProvider = defineComponent({
  name: "CodePreviewRootProvider",
  props: {
    asChild: Boolean,
    value: { type: Object as PropType<UnwrapRef<UseCodePreviewReturn>>, required: true },
  },
  setup(props, { slots }) {
    const api = computed(() => props.value)
    CodePreviewProvider(api)

    return () => h(ark.div as Component, { ...api.value.getRootProps(), asChild: props.asChild }, slots)
  },
})
