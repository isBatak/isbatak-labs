import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewStageBaseProps extends PolymorphicProps {}
export interface CodePreviewStageProps
  extends HTMLProps<"div">, CodePreviewStageBaseProps, RefAttributes<HTMLDivElement> {}

export const CodePreviewStage = (props: CodePreviewStageProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(api.getStageProps(), props)

  return <ark.div {...mergedProps} />
}
