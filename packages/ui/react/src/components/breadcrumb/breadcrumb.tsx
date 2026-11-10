"use client"

import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { breadcrumb } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

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

const StyledBreadcrumbSeparator = withContext(ark.li, "separator", {
  defaultProps: { role: "presentation", "aria-hidden": true },
})
export type BreadcrumbSeparatorProps = ComponentProps<typeof StyledBreadcrumbSeparator>

export function BreadcrumbSeparator({ children, ...props }: BreadcrumbSeparatorProps) {
  return <StyledBreadcrumbSeparator {...props}>{children ?? <Icon name="chevron-right" />}</StyledBreadcrumbSeparator>
}

const StyledBreadcrumbEllipsis = withContext(ark.li, "ellipsis", {
  defaultProps: { role: "presentation", "aria-hidden": true },
})
export type BreadcrumbEllipsisProps = ComponentProps<typeof StyledBreadcrumbEllipsis>

export function BreadcrumbEllipsis({ children, ...props }: BreadcrumbEllipsisProps) {
  return <StyledBreadcrumbEllipsis {...props}>{children ?? <Icon name="dots" />}</StyledBreadcrumbEllipsis>
}
