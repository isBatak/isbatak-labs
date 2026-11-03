"use client"

import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { breadcrumb } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(breadcrumb)

export const BreadcrumbRoot = withProvider(ark.nav, "root", {
  defaultProps: { "aria-label": "Breadcrumb" },
})
export type BreadcrumbRootProps = ComponentProps<typeof BreadcrumbRoot>

export const BreadcrumbList = withContext(ark.ol, "list")
export type BreadcrumbListProps = ComponentProps<typeof BreadcrumbList>

export const BreadcrumbItem = withContext(ark.li, "item")
export type BreadcrumbItemProps = ComponentProps<typeof BreadcrumbItem>

export const BreadcrumbLink = withContext(ark.a, "link")
export type BreadcrumbLinkProps = ComponentProps<typeof BreadcrumbLink>

export const BreadcrumbCurrentLink = withContext(ark.span, "currentLink", {
  defaultProps: { role: "link", "aria-current": "page", "aria-disabled": true },
})
export type BreadcrumbCurrentLinkProps = ComponentProps<typeof BreadcrumbCurrentLink>

export const BreadcrumbSeparator = withContext(ark.li, "separator", {
  defaultProps: { role: "presentation", "aria-hidden": true },
})
export type BreadcrumbSeparatorProps = ComponentProps<typeof BreadcrumbSeparator>

export const BreadcrumbEllipsis = withContext(ark.li, "ellipsis", {
  defaultProps: { role: "presentation", "aria-hidden": true },
})
export type BreadcrumbEllipsisProps = ComponentProps<typeof BreadcrumbEllipsis>
