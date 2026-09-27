import { Menu } from "@ark-ui/vue/menu"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { menu } from "@isbatak/panda-ds/recipes"

const { withRootProvider, withContext } = createSlotRecipeContext(menu)

export const MenuRoot = withRootProvider(Menu.Root)
export type MenuRootProps = ComponentProps<typeof MenuRoot>

export const MenuTrigger = Menu.Trigger
export type MenuTriggerProps = ComponentProps<typeof MenuTrigger>

export const MenuPositioner = withContext(Menu.Positioner, "positioner")
export type MenuPositionerProps = ComponentProps<typeof MenuPositioner>

export const MenuContent = withContext(Menu.Content, "content")
export type MenuContentProps = ComponentProps<typeof MenuContent>

export const MenuItem = withContext(Menu.Item, "item")
export type MenuItemProps = ComponentProps<typeof MenuItem>

export const MenuItemText = withContext(Menu.ItemText, "itemText")
export type MenuItemTextProps = ComponentProps<typeof MenuItemText>

export const MenuSeparator = withContext(Menu.Separator, "separator")
export type MenuSeparatorProps = ComponentProps<typeof MenuSeparator>

export const MenuContext = Menu.Context
export type MenuContextProps = Menu.ContextProps

export const MenuItemContext = Menu.ItemContext
export type MenuItemContextProps = Menu.ItemContextProps
