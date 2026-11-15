import { ark } from "@ark-ui/solid/factory"
import { bottomNavBar } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

const { withProvider, withContext } = createSlotRecipeContext(bottomNavBar)

export const BottomNavBarRoot = withProvider(ark.nav, "root")
export type BottomNavBarRootProps = ComponentProps<typeof BottomNavBarRoot>

export const BottomNavBarItem = withContext(ark.a, "item")
export type BottomNavBarItemProps = ComponentProps<typeof BottomNavBarItem>

export const BottomNavBarItemIcon = withContext(ark.span, "itemIcon")
export type BottomNavBarItemIconProps = ComponentProps<typeof BottomNavBarItemIcon>

export const BottomNavBarItemLabel = withContext(ark.span, "itemLabel")
export type BottomNavBarItemLabelProps = ComponentProps<typeof BottomNavBarItemLabel>
