"use client"

import { TagsInput } from "@ark-ui/react/tags-input"
import type { ComponentProps } from "react"
import { tagsInput } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"

const { withProvider, withContext } = createSlotRecipeContext(tagsInput)

export const TagsInputRoot = withProvider(TagsInput.Root, "root")
export type TagsInputRootProps = ComponentProps<typeof TagsInputRoot>

export const TagsInputRootProvider = withProvider(TagsInput.RootProvider, "root")
export type TagsInputRootProviderProps = ComponentProps<typeof TagsInputRootProvider>

export const TagsInputLabel = withContext(TagsInput.Label, "label")
export type TagsInputLabelProps = ComponentProps<typeof TagsInputLabel>

export const TagsInputControl = withContext(TagsInput.Control, "control")
export type TagsInputControlProps = ComponentProps<typeof TagsInputControl>

export const TagsInputInput = withContext(TagsInput.Input, "input")
export type TagsInputInputProps = ComponentProps<typeof TagsInputInput>

export const TagsInputClearTrigger = withContext(TagsInput.ClearTrigger, "clearTrigger")
export type TagsInputClearTriggerProps = ComponentProps<typeof TagsInputClearTrigger>

export const TagsInputItem = withContext(TagsInput.Item, "item")
export type TagsInputItemProps = ComponentProps<typeof TagsInputItem>

export const TagsInputItemPreview = withContext(TagsInput.ItemPreview, "itemPreview")
export type TagsInputItemPreviewProps = ComponentProps<typeof TagsInputItemPreview>

export const TagsInputItemText = withContext(TagsInput.ItemText, "itemText")
export type TagsInputItemTextProps = ComponentProps<typeof TagsInputItemText>

export const TagsInputItemInput = withContext(TagsInput.ItemInput, "itemInput")
export type TagsInputItemInputProps = ComponentProps<typeof TagsInputItemInput>

export const TagsInputItemDeleteTrigger = withContext(TagsInput.ItemDeleteTrigger, "itemDeleteTrigger")
export type TagsInputItemDeleteTriggerProps = ComponentProps<typeof TagsInputItemDeleteTrigger>

export const TagsInputHiddenInput = TagsInput.HiddenInput
export type TagsInputHiddenInputProps = ComponentProps<typeof TagsInputHiddenInput>

export const TagsInputContext = TagsInput.Context
export type TagsInputContextProps = ComponentProps<typeof TagsInputContext>

export const TagsInputItemContext = TagsInput.ItemContext
export type TagsInputItemContextProps = ComponentProps<typeof TagsInputItemContext>
