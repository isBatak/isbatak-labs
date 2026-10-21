import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewTriggerBaseProps extends PolymorphicProps<"button"> {}
export interface CodePreviewTriggerProps extends HTMLProps<"button">, CodePreviewTriggerBaseProps {}

export const CodePreviewTrigger = (props: CodePreviewTriggerProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(() => api().getTriggerProps(), props)

  return <ark.button {...mergedProps} />
}
