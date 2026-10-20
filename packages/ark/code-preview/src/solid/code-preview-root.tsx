import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import * as codePreview from "../core"
import type { Assign } from "../types"
import { useCodePreview, type UseCodePreviewProps } from "./use-code-preview"
import { CodePreviewProvider } from "./use-code-preview-context"

export interface CodePreviewRootBaseProps extends UseCodePreviewProps, PolymorphicProps<"div"> {}
export interface CodePreviewRootProps extends Assign<HTMLProps<"div">, CodePreviewRootBaseProps> {}

export const CodePreviewRoot = (props: CodePreviewRootProps) => {
  const [useCodePreviewProps, localProps] = splitProps(props, codePreview.props as (keyof CodePreviewRootProps)[])
  const api = useCodePreview(useCodePreviewProps as UseCodePreviewProps)
  const mergedProps = mergeProps(() => api().getRootProps(), localProps)

  return (
    <CodePreviewProvider value={api}>
      <ark.div {...mergedProps} />
    </CodePreviewProvider>
  )
}
