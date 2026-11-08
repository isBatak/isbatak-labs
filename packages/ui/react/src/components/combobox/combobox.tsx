"use client"

import type { CollectionItem } from "@ark-ui/react/collection"
import { Combobox } from "@ark-ui/react/combobox"
import { ark } from "@ark-ui/react/factory"
import type { ComponentProps, JSX } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { combobox } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

const { withProvider, withContext } = createSlotRecipeContext(combobox)

const StyledComboboxRoot = withProvider(Combobox.Root, "root")

export type ComboboxRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ComponentProps<typeof StyledComboboxRoot>,
  keyof Combobox.RootProps<T>
> &
  Combobox.RootProps<T>

export const ComboboxRoot = StyledComboboxRoot as <T extends CollectionItem>(props: ComboboxRootProps<T>) => JSX.Element

const StyledComboboxRootProvider = withProvider(Combobox.RootProvider, "root")

export type ComboboxRootProviderProps<T extends CollectionItem = CollectionItem> = Omit<
  ComponentProps<typeof StyledComboboxRootProvider>,
  keyof Combobox.RootProviderProps<T>
> &
  Combobox.RootProviderProps<T>

export const ComboboxRootProvider = StyledComboboxRootProvider as <T extends CollectionItem>(
  props: ComboboxRootProviderProps<T>,
) => JSX.Element

export const ComboboxLabel = withContext(Combobox.Label, "label")
export type ComboboxLabelProps = ComponentProps<typeof ComboboxLabel>

export const ComboboxControl = withContext(Combobox.Control, "control")
export type ComboboxControlProps = ComponentProps<typeof ComboboxControl>

export const ComboboxInput = withContext(Combobox.Input, "input")
export type ComboboxInputProps = ComponentProps<typeof ComboboxInput>

export const ComboboxIndicatorGroup = withContext(ark.div, "indicatorGroup")
export type ComboboxIndicatorGroupProps = ComponentProps<typeof ComboboxIndicatorGroup>

const StyledComboboxTrigger = withContext(Combobox.Trigger, "trigger")
export type ComboboxTriggerProps = ComponentProps<typeof StyledComboboxTrigger>

export function ComboboxTrigger({ children, ...props }: ComboboxTriggerProps) {
  return <StyledComboboxTrigger {...props}>{children ?? <Icon name="chevron-down" />}</StyledComboboxTrigger>
}

const StyledComboboxClearTrigger = withContext(Combobox.ClearTrigger, "clearTrigger")
export type ComboboxClearTriggerProps = ComponentProps<typeof StyledComboboxClearTrigger>

export function ComboboxClearTrigger({ children, ...props }: ComboboxClearTriggerProps) {
  return (
    <StyledComboboxClearTrigger aria-label="Clear value" {...props}>
      {children ?? <Icon name="close" />}
    </StyledComboboxClearTrigger>
  )
}

export const ComboboxPositioner = withContext(Combobox.Positioner, "positioner")
export type ComboboxPositionerProps = ComponentProps<typeof ComboboxPositioner>

export const ComboboxContent = withContext(Combobox.Content, "content")
export type ComboboxContentProps = ComponentProps<typeof ComboboxContent>

export const ComboboxList = withContext(Combobox.List, "list")
export type ComboboxListProps = ComponentProps<typeof ComboboxList>

export const ComboboxItemGroup = withContext(Combobox.ItemGroup, "itemGroup")
export type ComboboxItemGroupProps = ComponentProps<typeof ComboboxItemGroup>

export const ComboboxItemGroupLabel = withContext(Combobox.ItemGroupLabel, "itemGroupLabel")
export type ComboboxItemGroupLabelProps = ComponentProps<typeof ComboboxItemGroupLabel>

export const ComboboxItem = withContext(Combobox.Item, "item")
export type ComboboxItemProps = ComponentProps<typeof ComboboxItem>

export const ComboboxItemText = withContext(Combobox.ItemText, "itemText")
export type ComboboxItemTextProps = ComponentProps<typeof ComboboxItemText>

export const ComboboxItemContent = withContext(ark.div, "itemContent")
export type ComboboxItemContentProps = ComponentProps<typeof ComboboxItemContent>

export const ComboboxItemDescription = withContext(ark.div, "itemDescription")
export type ComboboxItemDescriptionProps = ComponentProps<typeof ComboboxItemDescription>

const StyledComboboxItemIndicator = withContext(Combobox.ItemIndicator, "itemIndicator")
export type ComboboxItemIndicatorProps = ComponentProps<typeof StyledComboboxItemIndicator>

export function ComboboxItemIndicator({ children, ...props }: ComboboxItemIndicatorProps) {
  return <StyledComboboxItemIndicator {...props}>{children ?? <Icon name="check" />}</StyledComboboxItemIndicator>
}

export const ComboboxEmpty = withContext(Combobox.Empty, "empty")
export type ComboboxEmptyProps = ComponentProps<typeof ComboboxEmpty>

export const ComboboxContext = Combobox.Context
export type ComboboxContextProps<T extends CollectionItem = CollectionItem> = Combobox.ContextProps<T>

export const ComboboxItemContext = Combobox.ItemContext
export type ComboboxItemContextProps = Combobox.ItemContextProps
