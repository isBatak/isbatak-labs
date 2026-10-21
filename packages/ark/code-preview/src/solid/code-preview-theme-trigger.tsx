import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewThemeTriggerBaseProps extends PolymorphicProps<"button"> {}
export interface CodePreviewThemeTriggerProps extends HTMLProps<"button">, CodePreviewThemeTriggerBaseProps {}

export const CodePreviewThemeTrigger = (props: CodePreviewThemeTriggerProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(() => api().getThemeTriggerProps(), props)

  return <ark.button {...mergedProps} />
}
