export { default as Root, type SearchInputRootProps as RootProps } from "./search-input-root.svelte"
export {
  default as RootProvider,
  type SearchInputRootProviderProps as RootProviderProps,
} from "./search-input-root-provider.svelte"
export { default as Label, type SearchInputLabelProps as LabelProps } from "./search-input-label.svelte"
export { default as Control, type SearchInputControlProps as ControlProps } from "./search-input-control.svelte"
export { default as Icon, type SearchInputIconProps as IconProps } from "./search-input-icon.svelte"
export { default as Input, type SearchInputInputProps as InputProps } from "./search-input-input.svelte"
export {
  default as ClearTrigger,
  type SearchInputClearTriggerProps as ClearTriggerProps,
} from "./search-input-clear-trigger.svelte"

import { SearchInput } from "@isbatak/ark-search-input/svelte"

export const Context = SearchInput.Context
