import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewResizerBaseProps extends PolymorphicProps {}
export interface CodePreviewResizerProps
  extends HTMLProps<"div">, CodePreviewResizerBaseProps, RefAttributes<HTMLDivElement> {}

export const CodePreviewResizer = (props: CodePreviewResizerProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(api.getResizerProps(), props)

  return <ark.div {...mergedProps} />
}
