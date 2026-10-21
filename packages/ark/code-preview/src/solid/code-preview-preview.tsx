import { ark, type HTMLProps } from "@ark-ui/solid/factory"
import { LocaleProvider } from "@ark-ui/solid/locale"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import { useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewPreviewBaseProps {}
export interface CodePreviewPreviewProps extends HTMLProps<"div">, CodePreviewPreviewBaseProps {}

export const CodePreviewPreview = (props: CodePreviewPreviewProps) => {
  const [local, localProps] = splitProps(props, ["children"])
  const api = useCodePreviewContext()
  const mergedProps = mergeProps(() => api().getPreviewProps(), localProps)

  return (
    <ark.div {...mergedProps}>
      <LocaleProvider locale={api().previewLocale}>{local.children}</LocaleProvider>
    </ark.div>
  )
}
