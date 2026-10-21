import type { JSX } from "solid-js"
import { type UseCodePreviewContext, useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewContextProps {
  children: (context: UseCodePreviewContext) => JSX.Element
}

export const CodePreviewContext = (props: CodePreviewContextProps) => props.children(useCodePreviewContext())
