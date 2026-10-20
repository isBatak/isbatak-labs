import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import type { Assign } from "../types"
import type { UseCodePreviewReturn } from "./use-code-preview"
import { CodePreviewProvider } from "./use-code-preview-context"

interface RootProviderProps {
  value: UseCodePreviewReturn
}

export interface CodePreviewRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface CodePreviewRootProviderProps
  extends Assign<HTMLProps<"div">, CodePreviewRootProviderBaseProps>, RefAttributes<HTMLDivElement> {}

export const CodePreviewRootProvider = (props: CodePreviewRootProviderProps) => {
  const { value: api, ...localProps } = props
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <CodePreviewProvider value={api}>
      <ark.div {...mergedProps} />
    </CodePreviewProvider>
  )
}
