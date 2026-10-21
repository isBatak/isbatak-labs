import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewDirTriggerBaseProps extends PolymorphicProps<"button"> {}
export interface CodePreviewDirTriggerProps extends HTMLProps<"button">, CodePreviewDirTriggerBaseProps {}

export const CodePreviewDirTrigger = (props: CodePreviewDirTriggerProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(() => api().getDirTriggerProps(), props)

  return <ark.button {...mergedProps} />
}
