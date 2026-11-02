import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type { SearchInputProps } from "./search-input.types"

export const props = createProps<SearchInputProps>()([
  "defaultValue",
  "dir",
  "disabled",
  "form",
  "id",
  "ids",
  "invalid",
  "name",
  "onValueChange",
  "readOnly",
  "required",
  "translations",
  "value",
])

export const splitProps = createSplitProps<Partial<SearchInputProps>>(props)
