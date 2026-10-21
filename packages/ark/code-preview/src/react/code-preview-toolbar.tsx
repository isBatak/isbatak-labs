import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewToolbarBaseProps extends PolymorphicProps {}
export interface CodePreviewToolbarProps
  extends HTMLProps<"div">, CodePreviewToolbarBaseProps, RefAttributes<HTMLDivElement> {}

export const CodePreviewToolbar = (props: CodePreviewToolbarProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(api.getToolbarProps(), props)

  return <ark.div {...mergedProps} />
}
