"use client"

import { SearchInput } from "@isbatak/ark-search-input/react"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { searchInput } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(searchInput)

export const SearchInputRoot = withProvider(SearchInput.Root, "root")
export type SearchInputRootProps = ComponentProps<typeof SearchInputRoot>

export const SearchInputRootProvider = withProvider(SearchInput.RootProvider, "root")
export type SearchInputRootProviderProps = ComponentProps<typeof SearchInputRootProvider>

export const SearchInputLabel = withContext(SearchInput.Label, "label")
export type SearchInputLabelProps = ComponentProps<typeof SearchInputLabel>

export const SearchInputControl = withContext(SearchInput.Control, "control")
export type SearchInputControlProps = ComponentProps<typeof SearchInputControl>

export const SearchInputIcon = withContext(SearchInput.Icon, "icon")
export type SearchInputIconProps = ComponentProps<typeof SearchInputIcon>

export const SearchInputInput = withContext(SearchInput.Input, "input")
export type SearchInputInputProps = ComponentProps<typeof SearchInputInput>

export const SearchInputClearTrigger = withContext(SearchInput.ClearTrigger, "clearTrigger")
export type SearchInputClearTriggerProps = ComponentProps<typeof SearchInputClearTrigger>

export const SearchInputContext = SearchInput.Context
export type SearchInputContextProps = SearchInput.ContextProps
