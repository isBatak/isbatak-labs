import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewContentBaseProps extends PolymorphicProps {}
export interface CodePreviewContentProps
  extends HTMLProps<"div">, CodePreviewContentBaseProps, RefAttributes<HTMLDivElement> {}

export const CodePreviewContent = (props: CodePreviewContentProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(api.getContentProps(), props)

  return <ark.div {...mergedProps} />
}
