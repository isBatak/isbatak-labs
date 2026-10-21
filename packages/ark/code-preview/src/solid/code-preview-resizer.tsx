import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewResizerBaseProps extends PolymorphicProps<"div"> {}
export interface CodePreviewResizerProps extends HTMLProps<"div">, CodePreviewResizerBaseProps {}

export const CodePreviewResizer = (props: CodePreviewResizerProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(() => api().getResizerProps(), props)

  return <ark.div {...mergedProps} />
}
