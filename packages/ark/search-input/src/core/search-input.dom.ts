import type { SearchInputProps } from "./search-input.types"

export const getRootId = (props: SearchInputProps) => props.ids?.root ?? `search-input:${props.id}`
export const getLabelId = (props: SearchInputProps) => props.ids?.label ?? `search-input:${props.id}:label`
export const getInputId = (props: SearchInputProps) => props.ids?.input ?? `search-input:${props.id}:input`
export const getClearTriggerId = (props: SearchInputProps) =>
  props.ids?.clearTrigger ?? `search-input:${props.id}:clear-trigger`

export const getInputEl = (props: SearchInputProps) =>
  document.getElementById(getInputId(props)) as HTMLInputElement | null
