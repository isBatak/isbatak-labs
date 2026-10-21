import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type { CodePreviewProps } from "./code-preview.types"

export const props = createProps<CodePreviewProps>()([
  "code",
  "copiedTimeout",
  "defaultOpen",
  "dir",
  "id",
  "ids",
  "locale",
  "ltrLocale",
  "minWidth",
  "onOpenChange",
  "rtlLocale",
  "step",
  "translations",
])

export const splitProps = createSplitProps<Partial<CodePreviewProps>>(props)
