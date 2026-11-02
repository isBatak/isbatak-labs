import type { NormalizeProps, PropTypes } from "@zag-js/types"

export type Direction = "ltr" | "rtl"

export interface ElementIds {
  root?: string
  label?: string
  input?: string
  clearTrigger?: string
}

export interface ValueChangeDetails {
  value: string
}

export interface IntlTranslations {
  clearTrigger: string
}

export interface SearchInputProps {
  id: string
  ids?: ElementIds
  dir?: Direction
  value?: string
  defaultValue?: string
  onValueChange?: (details: ValueChangeDetails) => void
  disabled?: boolean
  invalid?: boolean
  readOnly?: boolean
  required?: boolean
  name?: string
  form?: string
  translations?: Partial<IntlTranslations>
}

export interface SearchInputState {
  value: string
}

export type SetState = (patch: Partial<SearchInputState>) => void

export interface SearchInputApi<T extends PropTypes = PropTypes> {
  value: string
  empty: boolean
  setValue: (value: string) => void
  clearValue: () => void
  focus: () => void
  getRootProps: () => T["element"]
  getLabelProps: () => T["label"]
  getControlProps: () => T["element"]
  getIconProps: () => T["element"]
  getInputProps: () => T["input"]
  getClearTriggerProps: () => T["button"]
}

export type Connect = <T extends PropTypes>(
  props: SearchInputProps,
  state: SearchInputState,
  setState: SetState,
  normalize: NormalizeProps<T>,
) => SearchInputApi<T>
