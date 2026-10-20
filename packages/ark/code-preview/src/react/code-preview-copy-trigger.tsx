import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewCopyTriggerBaseProps extends PolymorphicProps {}
export interface CodePreviewCopyTriggerProps
  extends HTMLProps<"button">, CodePreviewCopyTriggerBaseProps, RefAttributes<HTMLButtonElement> {}

export const CodePreviewCopyTrigger = (props: CodePreviewCopyTriggerProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(api.getCopyTriggerProps(), props)

  return <ark.button {...mergedProps} />
}
