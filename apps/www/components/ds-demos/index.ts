import type { ComponentType } from "react"

import { codePreviewDemos } from "./code-preview"
import { concentricDemos } from "./concentric"
import { iconGlazeDemos } from "./icon-glaze"
import { iconsDemos } from "./icons"
import { imageOutlineDemos } from "./image-outline"

export const demos: Record<string, ComponentType> = {
  ...codePreviewDemos,
  ...concentricDemos,
  ...iconGlazeDemos,
  ...iconsDemos,
  ...imageOutlineDemos,
}
