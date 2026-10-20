import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewThemeTriggerBaseProps extends PolymorphicProps {}
export interface CodePreviewThemeTriggerProps
  extends HTMLProps<"button">, CodePreviewThemeTriggerBaseProps, RefAttributes<HTMLButtonElement> {}

export const CodePreviewThemeTrigger = (props: CodePreviewThemeTriggerProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(api.getThemeTriggerProps(), props)

  return <ark.button {...mergedProps} />
}
