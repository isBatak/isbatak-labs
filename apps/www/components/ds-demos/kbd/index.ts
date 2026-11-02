import type { ComponentType } from "react"

import { KbdDemo } from "./basic"
import { KbdCombinationsDemo } from "./combinations"
import { KbdFunctionKeysDemo } from "./function-keys"
import { KbdGroupDemo } from "./group"
import { KbdSizesDemo } from "./sizes"
import { KbdVariantsDemo } from "./variants"
import { KbdWithinTextDemo } from "./within-text"

export const kbdDemos: Record<string, ComponentType> = {
  kbd: KbdDemo,
  "kbd/combinations": KbdCombinationsDemo,
  "kbd/function-keys": KbdFunctionKeysDemo,
  "kbd/group": KbdGroupDemo,
  "kbd/sizes": KbdSizesDemo,
  "kbd/variants": KbdVariantsDemo,
  "kbd/within-text": KbdWithinTextDemo,
}
