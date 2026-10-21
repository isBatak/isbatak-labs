import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import * as codePreview from "../core"
import type { Assign } from "../types"
import { useCodePreview, type UseCodePreviewProps } from "./use-code-preview"
import { CodePreviewProvider } from "./use-code-preview-context"

export interface CodePreviewRootBaseProps extends UseCodePreviewProps, PolymorphicProps {}
export interface CodePreviewRootProps
  extends Assign<HTMLProps<"div">, CodePreviewRootBaseProps>, RefAttributes<HTMLDivElement> {}

export const CodePreviewRoot = (props: CodePreviewRootProps) => {
  const [useCodePreviewProps, localProps] = codePreview.splitProps(props as Omit<typeof props, "dir">)
  const api = useCodePreview(useCodePreviewProps)
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <CodePreviewProvider value={api}>
      <ark.div {...mergedProps} />
    </CodePreviewProvider>
  )
}
