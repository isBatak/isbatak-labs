"use client"

import type { CollectionItem } from "@ark-ui/react/collection"
import { ark } from "@ark-ui/react/factory"
import { Select } from "@ark-ui/react/select"
import { type ComponentProps, createContext, type JSX, useContext } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { select } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

const { withProvider, withContext } = createSlotRecipeContext(select)

const StyledSelectRoot = withProvider(Select.Root, "root")

const AlignItemWithTriggerContext = createContext(false)

const untrackedAnchorListeners = {
  ancestorScroll: true,
  ancestorResize: true,
  elementResize: false,
  layoutShift: false,
}

export type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ComponentProps<typeof StyledSelectRoot>,
  keyof Select.RootProps<T>
> &
  Select.RootProps<T> & {
    disableAnchorTracking?: boolean | undefined
  }

export function SelectRoot<T extends CollectionItem>(props: SelectRootProps<T>): JSX.Element {
  const { alignItemWithTrigger = false, disableAnchorTracking = false, positioning, ...rest } = props
  const Root = StyledSelectRoot as (props: SelectRootProps<T>) => JSX.Element

  return (
    <AlignItemWithTriggerContext.Provider value={alignItemWithTrigger}>
      <Root
        alignItemWithTrigger={alignItemWithTrigger}
        positioning={{
          sameWidth: true,
          ...positioning,
          ...(disableAnchorTracking && { listeners: untrackedAnchorListeners }),
        }}
        {...rest}
      />
    </AlignItemWithTriggerContext.Provider>
  )
}

const StyledSelectRootProvider = withProvider(Select.RootProvider, "root")

export type SelectRootProviderProps<T extends CollectionItem = CollectionItem> = Omit<
  ComponentProps<typeof StyledSelectRootProvider>,
  keyof Select.RootProviderProps<T>
> &
  Select.RootProviderProps<T>

export const SelectRootProvider = StyledSelectRootProvider as <T extends CollectionItem>(
  props: SelectRootProviderProps<T>,
) => JSX.Element

export const SelectLabel = withContext(Select.Label, "label")
export type SelectLabelProps = ComponentProps<typeof SelectLabel>

export const SelectControl = withContext(Select.Control, "control")
export type SelectControlProps = ComponentProps<typeof SelectControl>

export const SelectTrigger = withContext(Select.Trigger, "trigger")
export type SelectTriggerProps = ComponentProps<typeof SelectTrigger>

export const SelectValueText = withContext(Select.ValueText, "valueText")
export type SelectValueTextProps = ComponentProps<typeof SelectValueText>

export const SelectIndicatorGroup = withContext(ark.div, "indicatorGroup")
export type SelectIndicatorGroupProps = ComponentProps<typeof SelectIndicatorGroup>

const StyledSelectIndicator = withContext(Select.Indicator, "indicator")
export type SelectIndicatorProps = ComponentProps<typeof StyledSelectIndicator>

export function SelectIndicator({ children, ...props }: SelectIndicatorProps) {
  return <StyledSelectIndicator {...props}>{children ?? <Icon name="chevron-down" />}</StyledSelectIndicator>
}

const StyledSelectClearTrigger = withContext(Select.ClearTrigger, "clearTrigger")
export type SelectClearTriggerProps = ComponentProps<typeof StyledSelectClearTrigger>

export function SelectClearTrigger({ children, ...props }: SelectClearTriggerProps) {
  return (
    <StyledSelectClearTrigger aria-label="Clear selection" {...props}>
      {children ?? <Icon name="close" />}
    </StyledSelectClearTrigger>
  )
}

export const SelectPositioner = withContext(Select.Positioner, "positioner")
export type SelectPositionerProps = ComponentProps<typeof SelectPositioner>

const StyledSelectContent = withContext(Select.Content, "content")
export type SelectContentProps = ComponentProps<typeof StyledSelectContent>

export function SelectContent(props: SelectContentProps) {
  const alignItemWithTrigger = useContext(AlignItemWithTriggerContext)
  return <StyledSelectContent data-align-item-with-trigger={alignItemWithTrigger ? "" : undefined} {...props} />
}

export const SelectList = withContext(Select.List, "list")
export type SelectListProps = ComponentProps<typeof SelectList>

export const SelectItemGroup = withContext(Select.ItemGroup, "itemGroup")
export type SelectItemGroupProps = ComponentProps<typeof SelectItemGroup>

export const SelectItemGroupLabel = withContext(Select.ItemGroupLabel, "itemGroupLabel")
export type SelectItemGroupLabelProps = ComponentProps<typeof SelectItemGroupLabel>

export const SelectItem = withContext(Select.Item, "item")
export type SelectItemProps = ComponentProps<typeof SelectItem>

export const SelectItemText = withContext(Select.ItemText, "itemText")
export type SelectItemTextProps = ComponentProps<typeof SelectItemText>

export const SelectItemContent = withContext(ark.div, "itemContent")
export type SelectItemContentProps = ComponentProps<typeof SelectItemContent>

export const SelectItemDescription = withContext(ark.div, "itemDescription")
export type SelectItemDescriptionProps = ComponentProps<typeof SelectItemDescription>

const StyledSelectItemIndicator = withContext(Select.ItemIndicator, "itemIndicator")
export type SelectItemIndicatorProps = ComponentProps<typeof StyledSelectItemIndicator>

export function SelectItemIndicator({ children, ...props }: SelectItemIndicatorProps) {
  return <StyledSelectItemIndicator {...props}>{children ?? <Icon name="check" />}</StyledSelectItemIndicator>
}

export const SelectSearch = withContext(ark.input, "search", {
  defaultProps: { type: "search", autoComplete: "off" },
})
export type SelectSearchProps = ComponentProps<typeof SelectSearch>

export const SelectEmpty = withContext(ark.div, "empty", {
  defaultProps: { role: "presentation" },
})
export type SelectEmptyProps = ComponentProps<typeof SelectEmpty>

export const SelectHiddenSelect = Select.HiddenSelect
export type SelectHiddenSelectProps = ComponentProps<typeof SelectHiddenSelect>

export const SelectContext = Select.Context
export type SelectContextProps<T extends CollectionItem = CollectionItem> = Select.ContextProps<T>

export const SelectItemContext = Select.ItemContext
export type SelectItemContextProps = Select.ItemContextProps
