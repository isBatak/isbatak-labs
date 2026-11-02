import type { ComponentType } from "react"

import { SearchInputDemo } from "./basic"
import { SearchInputControlledDemo } from "./controlled"
import { SearchInputDefaultValueDemo } from "./default-value"
import { SearchInputDisabledDemo } from "./disabled"
import { SearchInputInvalidDemo } from "./invalid"
import { SearchInputRootProviderDemo } from "./root-provider"
import { SearchInputSizesDemo } from "./sizes"
import { SearchInputTranslationsDemo } from "./translations"
import { SearchInputVariantsDemo } from "./variants"
import { SearchInputWithoutIconDemo } from "./without-icon"
import { SearchInputWithoutLabelDemo } from "./without-label"

export const searchInputDemos: Record<string, ComponentType> = {
  "search-input": SearchInputDemo,
  "search-input/controlled": SearchInputControlledDemo,
  "search-input/default-value": SearchInputDefaultValueDemo,
  "search-input/disabled": SearchInputDisabledDemo,
  "search-input/invalid": SearchInputInvalidDemo,
  "search-input/root-provider": SearchInputRootProviderDemo,
  "search-input/sizes": SearchInputSizesDemo,
  "search-input/translations": SearchInputTranslationsDemo,
  "search-input/variants": SearchInputVariantsDemo,
  "search-input/without-icon": SearchInputWithoutIconDemo,
  "search-input/without-label": SearchInputWithoutLabelDemo,
}
