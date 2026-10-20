import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewStageBaseProps extends PolymorphicProps<"div"> {}
export interface CodePreviewStageProps extends HTMLProps<"div">, CodePreviewStageBaseProps {}

export const CodePreviewStage = (props: CodePreviewStageProps) => {
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(() => api().getStageProps(), props)

  return <ark.div {...mergedProps} />
}
