import type { NormalizeProps, PropTypes } from "@zag-js/types"

export type Direction = "ltr" | "rtl"

export type Theme = "light" | "dark"

export interface ElementIds {
  root?: string
  stage?: string
  preview?: string
  resizer?: string
  content?: string
  trigger?: string
}

export interface OpenChangeDetails {
  open: boolean
}

export interface IntlTranslations {
  resizer: string
  themeTrigger: string
  dirTrigger: string
  copyTrigger: string
}

export interface CodePreviewProps {
  id: string
  ids?: ElementIds
  dir?: Direction
  locale?: string
  rtlLocale?: string
  ltrLocale?: string
  defaultOpen?: boolean
  onOpenChange?: (details: OpenChangeDetails) => void
  code?: string
  minWidth?: number
  step?: number
  copiedTimeout?: number
  translations?: Partial<IntlTranslations>
}

export interface CodePreviewState {
  open: boolean
  theme: Theme | null
  previewDir: Direction | null
  copied: boolean
  width: number | null
  percent: number
  dragging: boolean
}

export type SetState = (patch: Partial<CodePreviewState>) => void

export interface CodePreviewApi<T extends PropTypes = PropTypes> {
  open: boolean
  setOpen: (open: boolean) => void
  theme: Theme | null
  toggleTheme: () => void
  previewDir: Direction
  previewLocale: string
  toggleDir: () => void
  copied: boolean
  copy: () => Promise<void>
  width: number | null
  setWidth: (width: number) => void
  resetWidth: () => void
  getRootProps: () => T["element"]
  getStageProps: () => T["element"]
  getPreviewProps: () => T["element"]
  getResizerProps: () => T["element"]
  getContentProps: () => T["element"]
  getToolbarProps: () => T["element"]
  getTriggerProps: () => T["button"]
  getThemeTriggerProps: () => T["button"]
  getDirTriggerProps: () => T["button"]
  getCopyTriggerProps: () => T["button"]
}

export interface CodePreviewController {
  connect: <T extends PropTypes>(
    props: CodePreviewProps,
    state: CodePreviewState,
    setState: SetState,
    normalize: NormalizeProps<T>,
  ) => CodePreviewApi<T>
  destroy: () => void
}
