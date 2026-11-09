import { ark } from "@ark-ui/solid/factory"
import { Menu, useMenuContext } from "@ark-ui/solid/menu"
import { usePresenceContext } from "@ark-ui/solid/presence"
import { type ComponentProps, Show, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { menu } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

const { withRootProvider, withContext } = createSlotRecipeContext(menu)

export const MenuRoot = withRootProvider(Menu.Root)
export type MenuRootProps = ComponentProps<typeof MenuRoot>

export const MenuRootProvider = withRootProvider(Menu.RootProvider)
export type MenuRootProviderProps = ComponentProps<typeof MenuRootProvider>

export const MenuTrigger = Menu.Trigger
export type MenuTriggerProps = ComponentProps<typeof MenuTrigger>

export const MenuContextTrigger = withContext(Menu.ContextTrigger, "contextTrigger")
export type MenuContextTriggerProps = ComponentProps<typeof MenuContextTrigger>

const StyledMenuIndicator = withContext(Menu.Indicator, "indicator")
export type MenuIndicatorProps = ComponentProps<typeof StyledMenuIndicator>

export function MenuIndicator(props: MenuIndicatorProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledMenuIndicator {...rest}>{local.children ?? <Icon name="chevron-down" />}</StyledMenuIndicator>
}

const StyledMenuBackdrop = withContext(ark.div, "backdrop")
export type MenuBackdropProps = ComponentProps<typeof StyledMenuBackdrop>

export function MenuBackdrop(props: MenuBackdropProps) {
  const presence = usePresenceContext()
  return (
    <Show when={!presence().unmounted}>
      <StyledMenuBackdrop {...presence().presenceProps} {...props} />
    </Show>
  )
}

export const MenuPositioner = withContext(Menu.Positioner, "positioner")
export type MenuPositionerProps = ComponentProps<typeof MenuPositioner>

export const MenuContent = withContext(Menu.Content, "content")
export type MenuContentProps = ComponentProps<typeof MenuContent>

const StyledMenuCloseTrigger = withContext(ark.button, "closeTrigger")
export type MenuCloseTriggerProps = ComponentProps<typeof StyledMenuCloseTrigger>

export function MenuCloseTrigger(props: MenuCloseTriggerProps) {
  const [local, rest] = splitProps(props, ["onClick"])
  const menu = useMenuContext()
  return (
    <StyledMenuCloseTrigger
      type="button"
      aria-label="Close"
      onClick={(event: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => {
        if (typeof local.onClick === "function") local.onClick(event)
        if (event.defaultPrevented) return
        menu().setOpen(false)
      }}
      {...rest}
    />
  )
}

export const MenuArrow = withContext(Menu.Arrow, "arrow")
export type MenuArrowProps = ComponentProps<typeof MenuArrow>

export const MenuArrowTip = withContext(Menu.ArrowTip, "arrowTip")
export type MenuArrowTipProps = ComponentProps<typeof MenuArrowTip>

export const MenuItem = withContext(Menu.Item, "item")
export type MenuItemProps = ComponentProps<typeof MenuItem>

export const MenuItemText = withContext(Menu.ItemText, "itemText")
export type MenuItemTextProps = ComponentProps<typeof MenuItemText>

export const MenuItemCommand = withContext(ark.kbd, "itemCommand")
export type MenuItemCommandProps = ComponentProps<typeof MenuItemCommand>

export const MenuItemGroup = withContext(Menu.ItemGroup, "itemGroup")
export type MenuItemGroupProps = ComponentProps<typeof MenuItemGroup>

export const MenuItemGroupLabel = withContext(Menu.ItemGroupLabel, "itemGroupLabel")
export type MenuItemGroupLabelProps = ComponentProps<typeof MenuItemGroupLabel>

const StyledMenuItemIndicator = withContext(Menu.ItemIndicator, "itemIndicator")
export type MenuItemIndicatorProps = ComponentProps<typeof StyledMenuItemIndicator>

export function MenuItemIndicator(props: MenuItemIndicatorProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledMenuItemIndicator {...rest}>{local.children ?? <Icon name="check" />}</StyledMenuItemIndicator>
}

export const MenuCheckboxItem = withContext(Menu.CheckboxItem, "item")
export type MenuCheckboxItemProps = ComponentProps<typeof MenuCheckboxItem>

export const MenuRadioItemGroup = withContext(Menu.RadioItemGroup, "itemGroup")
export type MenuRadioItemGroupProps = ComponentProps<typeof MenuRadioItemGroup>

export const MenuRadioItem = withContext(Menu.RadioItem, "item")
export type MenuRadioItemProps = ComponentProps<typeof MenuRadioItem>

export const MenuTriggerItem = withContext(Menu.TriggerItem, "triggerItem")
export type MenuTriggerItemProps = ComponentProps<typeof MenuTriggerItem>

export const MenuSeparator = withContext(Menu.Separator, "separator")
export type MenuSeparatorProps = ComponentProps<typeof MenuSeparator>

export const MenuContext = Menu.Context
export type MenuContextProps = Menu.ContextProps

export const MenuItemContext = Menu.ItemContext
export type MenuItemContextProps = Menu.ItemContextProps
