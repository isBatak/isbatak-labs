"use client"

import { NavigationMenu } from "@ark-ui/react/navigation-menu"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { navigationMenu } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(navigationMenu)

export const NavigationMenuRoot = withProvider(NavigationMenu.Root, "root")
export type NavigationMenuRootProps = ComponentProps<typeof NavigationMenuRoot>

export const NavigationMenuList = withContext(NavigationMenu.List, "list")
export type NavigationMenuListProps = ComponentProps<typeof NavigationMenuList>

export const NavigationMenuItem = withContext(NavigationMenu.Item, "item")
export type NavigationMenuItemProps = ComponentProps<typeof NavigationMenuItem>

export const NavigationMenuTrigger = withContext(NavigationMenu.Trigger, "trigger")
export type NavigationMenuTriggerProps = ComponentProps<typeof NavigationMenuTrigger>

export const NavigationMenuContent = withContext(NavigationMenu.Content, "content")
export type NavigationMenuContentProps = ComponentProps<typeof NavigationMenuContent>

export const NavigationMenuLink = withContext(NavigationMenu.Link, "link")
export type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuLink>

export const NavigationMenuIndicator = withContext(NavigationMenu.Indicator, "indicator")
export type NavigationMenuIndicatorProps = ComponentProps<typeof NavigationMenuIndicator>

export const NavigationMenuItemIndicator = withContext(NavigationMenu.ItemIndicator, "itemIndicator")
export type NavigationMenuItemIndicatorProps = ComponentProps<typeof NavigationMenuItemIndicator>

export const NavigationMenuViewportPositioner = withContext(NavigationMenu.ViewportPositioner, "viewportPositioner")
export type NavigationMenuViewportPositionerProps = ComponentProps<typeof NavigationMenuViewportPositioner>

export const NavigationMenuViewport = withContext(NavigationMenu.Viewport, "viewport")
export type NavigationMenuViewportProps = ComponentProps<typeof NavigationMenuViewport>

export const NavigationMenuArrow = withContext(NavigationMenu.Arrow, "arrow")
export type NavigationMenuArrowProps = ComponentProps<typeof NavigationMenuArrow>

export const NavigationMenuContext = NavigationMenu.Context
export type NavigationMenuContextProps = NavigationMenu.ContextProps
