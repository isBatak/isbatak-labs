import { ark, type HTMLProps } from "@ark-ui/react/factory"
import { LocaleProvider } from "@ark-ui/react/locale"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewPreviewBaseProps {}
export interface CodePreviewPreviewProps
  extends HTMLProps<"div">, CodePreviewPreviewBaseProps, RefAttributes<HTMLDivElement> {}

export const CodePreviewPreview = (props: CodePreviewPreviewProps) => {
  const { children, ...localProps } = props
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(api.getPreviewProps(), localProps)

  return (
    <ark.div {...mergedProps}>
      <LocaleProvider locale={api.previewLocale}>{children}</LocaleProvider>
    </ark.div>
  )
}
