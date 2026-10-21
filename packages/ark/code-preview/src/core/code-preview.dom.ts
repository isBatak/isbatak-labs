import type { CodePreviewProps, Theme } from "./code-preview.types"

export const getRootId = (props: CodePreviewProps) => props.ids?.root ?? `code-preview:${props.id}`
export const getStageId = (props: CodePreviewProps) => props.ids?.stage ?? `code-preview:${props.id}:stage`
export const getPreviewId = (props: CodePreviewProps) => props.ids?.preview ?? `code-preview:${props.id}:preview`
export const getResizerId = (props: CodePreviewProps) => props.ids?.resizer ?? `code-preview:${props.id}:resizer`
export const getContentId = (props: CodePreviewProps) => props.ids?.content ?? `code-preview:${props.id}:content`
export const getTriggerId = (props: CodePreviewProps) => props.ids?.trigger ?? `code-preview:${props.id}:trigger`

export const getStageEl = (props: CodePreviewProps) => document.getElementById(getStageId(props))
export const getPreviewEl = (props: CodePreviewProps) => document.getElementById(getPreviewId(props))
export const getResizerEl = (props: CodePreviewProps) => document.getElementById(getResizerId(props))
export const getContentEl = (props: CodePreviewProps) => document.getElementById(getContentId(props))

export function getInheritedTheme(props: CodePreviewProps): Theme {
  const themed = getPreviewEl(props)?.parentElement?.closest(".dark, .light")
  return themed?.classList.contains("dark") ? "dark" : "light"
}
