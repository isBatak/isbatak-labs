import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewContentBaseProps extends PolymorphicProps<"div"> {}
export interface CodePreviewContentProps extends HTMLProps<"div">, CodePreviewContentBaseProps {}

export const CodePreviewContent = (props: CodePreviewContentProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(() => api().getContentProps(), props)

  return <ark.div {...mergedProps} />
}
