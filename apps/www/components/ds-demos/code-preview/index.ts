import type { ComponentType } from "react"

import { CodePreviewDemo } from "./basic"
import { CodePreviewDefaultOpenDemo } from "./default-open"
import { CodePreviewRtlLocaleDemo } from "./rtl-locale"

export const codePreviewDemos: Record<string, ComponentType> = {
  "code-preview": CodePreviewDemo,
  "code-preview/default-open": CodePreviewDefaultOpenDemo,
  "code-preview/rtl-locale": CodePreviewRtlLocaleDemo,
}
