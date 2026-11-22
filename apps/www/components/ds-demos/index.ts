import type { ComponentType } from "react"

import { codePreviewDemos } from "./code-preview"
import { concentricDemos } from "./concentric"
import { iconPullDemos } from "./icon-pull"
import { iconsDemos } from "./icons"
import { imageOutlineDemos } from "./image-outline"

export const demos: Record<string, ComponentType> = {
  ...codePreviewDemos,
  ...concentricDemos,
  ...iconPullDemos,
  ...iconsDemos,
  ...imageOutlineDemos,
}
