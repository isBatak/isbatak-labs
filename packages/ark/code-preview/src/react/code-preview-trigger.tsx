import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewTriggerBaseProps extends PolymorphicProps {}
export interface CodePreviewTriggerProps
  extends HTMLProps<"button">, CodePreviewTriggerBaseProps, RefAttributes<HTMLButtonElement> {}

export const CodePreviewTrigger = (props: CodePreviewTriggerProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(api.getTriggerProps(), props)

  return <ark.button {...mergedProps} />
}
