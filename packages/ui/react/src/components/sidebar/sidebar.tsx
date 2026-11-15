"use client"

import { ark } from "@ark-ui/react/factory"
import { sidebar } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import type { ComponentProps } from "react"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(sidebar)

export const SidebarRoot = withProvider(ark.nav, "root")
export type SidebarRootProps = ComponentProps<typeof SidebarRoot>

export const SidebarPropsProvider = PropsProvider

export const SidebarSection = withContext(ark.section, "section")
export type SidebarSectionProps = ComponentProps<typeof SidebarSection>

export const SidebarSectionTitle = withContext(ark.h3, "sectionTitle")
export type SidebarSectionTitleProps = ComponentProps<typeof SidebarSectionTitle>

export const SidebarSectionContent = withContext(ark.div, "sectionContent")
export type SidebarSectionContentProps = ComponentProps<typeof SidebarSectionContent>

export const SidebarSeparator = withContext(ark.span, "separator")
export type SidebarSeparatorProps = ComponentProps<typeof SidebarSeparator>

export const SidebarNavItem = withContext(ark.a, "navItem")
export type SidebarNavItemProps = ComponentProps<typeof SidebarNavItem>

export const SidebarNavItemStartElement = withContext(ark.span, "navItemStartElement")
export type SidebarNavItemStartElementProps = ComponentProps<typeof SidebarNavItemStartElement>

export const SidebarNavItemEndElement = withContext(ark.span, "navItemEndElement")
export type SidebarNavItemEndElementProps = ComponentProps<typeof SidebarNavItemEndElement>

export const SidebarNavItemText = withContext(ark.span, "navItemText")
export type SidebarNavItemTextProps = ComponentProps<typeof SidebarNavItemText>

export const SidebarMenuItem = withContext(ark.button, "menuItem")
export type SidebarMenuItemProps = ComponentProps<typeof SidebarMenuItem>

export const SidebarMenuItemStartElement = withContext(ark.span, "menuItemStartElement")
export type SidebarMenuItemStartElementProps = ComponentProps<typeof SidebarMenuItemStartElement>

export const SidebarMenuItemEndElement = withContext(ark.span, "menuItemEndElement")
export type SidebarMenuItemEndElementProps = ComponentProps<typeof SidebarMenuItemEndElement>

export const SidebarMenuItemText = withContext(ark.span, "menuItemText")
export type SidebarMenuItemTextProps = ComponentProps<typeof SidebarMenuItemText>

export const SidebarMenuItemTextTitle = withContext(ark.span, "menuItemTextTitle")
export type SidebarMenuItemTextTitleProps = ComponentProps<typeof SidebarMenuItemTextTitle>

export const SidebarMenuItemTextDescription = withContext(ark.span, "menuItemTextDescription")
export type SidebarMenuItemTextDescriptionProps = ComponentProps<typeof SidebarMenuItemTextDescription>
