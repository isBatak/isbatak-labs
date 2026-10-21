import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewCopyTriggerBaseProps extends PolymorphicProps<"button"> {}
export interface CodePreviewCopyTriggerProps extends HTMLProps<"button">, CodePreviewCopyTriggerBaseProps {}

export const CodePreviewCopyTrigger = (props: CodePreviewCopyTriggerProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(() => api().getCopyTriggerProps(), props)

  return <ark.button {...mergedProps} />
}
