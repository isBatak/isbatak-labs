import { ark } from "@ark-ui/vue/factory"
import { Menu, useMenuContext } from "@ark-ui/vue/menu"
import { usePresenceContext } from "@ark-ui/vue/presence"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { menu } from "@isbatak/panda-ds/recipes"
import { Icon } from "../icon"

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

export const MenuIndicator = defineComponent({
  name: "MenuIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledMenuIndicator as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "chevron-down" }))
  },
}) as unknown as typeof StyledMenuIndicator

const StyledMenuBackdrop = withContext(ark.div, "backdrop")
export type MenuBackdropProps = ComponentProps<typeof StyledMenuBackdrop>

export const MenuBackdrop = defineComponent({
  name: "MenuBackdrop",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const presence = usePresenceContext()
    return () => {
      if (presence.value.unmounted) return null
      const { hidden, "data-state": state } = presence.value.presenceProps
      return h(StyledMenuBackdrop as Component, { hidden, "data-state": state, ...attrs }, slots)
    }
  },
}) as unknown as typeof StyledMenuBackdrop

export const MenuPositioner = withContext(Menu.Positioner, "positioner")
export type MenuPositionerProps = ComponentProps<typeof MenuPositioner>

export const MenuContent = withContext(Menu.Content, "content")
export type MenuContentProps = ComponentProps<typeof MenuContent>

const StyledMenuCloseTrigger = withContext(ark.button, "closeTrigger")
export type MenuCloseTriggerProps = ComponentProps<typeof StyledMenuCloseTrigger>

export const MenuCloseTrigger = defineComponent({
  name: "MenuCloseTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const menu = useMenuContext()
    return () =>
      h(
        StyledMenuCloseTrigger as Component,
        {
          type: "button",
          "aria-label": "Close",
          ...attrs,
          onClick: (event: MouseEvent) => {
            const onClick = attrs.onClick as ((event: MouseEvent) => void) | undefined
            onClick?.(event)
            if (event.defaultPrevented) return
            menu.value.setOpen(false)
          },
        },
        slots,
      )
  },
}) as unknown as typeof StyledMenuCloseTrigger

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

export const MenuItemIndicator = defineComponent({
  name: "MenuItemIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(StyledMenuItemIndicator as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "check" }))
  },
}) as unknown as typeof StyledMenuItemIndicator

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
