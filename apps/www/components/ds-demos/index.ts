import type { ComponentType } from "react"

import { codePreviewDemos } from "./code-preview"
import { concentricDemos } from "./concentric"
import { iconsDemos } from "./icons"

export const demos: Record<string, ComponentType> = {
  ...codePreviewDemos,
  ...concentricDemos,
  ...iconsDemos,
}
