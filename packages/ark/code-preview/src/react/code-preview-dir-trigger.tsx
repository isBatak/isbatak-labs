import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewDirTriggerBaseProps extends PolymorphicProps {}
export interface CodePreviewDirTriggerProps
  extends HTMLProps<"button">, CodePreviewDirTriggerBaseProps, RefAttributes<HTMLButtonElement> {}

export const CodePreviewDirTrigger = (props: CodePreviewDirTriggerProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(api.getDirTriggerProps(), props)

  return <ark.button {...mergedProps} />
}
