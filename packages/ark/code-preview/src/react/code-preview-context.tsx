import type { ReactNode } from "react"
import { type UseCodePreviewContext, useCodePreviewContext } from "./use-code-preview-context"

export interface CodePreviewContextProps {
  children: (context: UseCodePreviewContext) => ReactNode
}

export const CodePreviewContext = (props: CodePreviewContextProps) => props.children(useCodePreviewContext())
