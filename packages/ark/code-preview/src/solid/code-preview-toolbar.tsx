import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewToolbarBaseProps extends PolymorphicProps<"div"> {}
export interface CodePreviewToolbarProps extends HTMLProps<"div">, CodePreviewToolbarBaseProps {}

export const CodePreviewToolbar = (props: CodePreviewToolbarProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(() => api().getToolbarProps(), props)

  return <ark.div {...mergedProps} />
}
