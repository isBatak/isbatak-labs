import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { breadcrumb } from "@isbatak/panda-ds/recipes"
import { Icon } from "../icon"

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

export const BreadcrumbSeparator = defineComponent({
  name: "BreadcrumbSeparator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledBreadcrumbSeparator as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "chevron-right" }))
  },
}) as unknown as typeof StyledBreadcrumbSeparator

const StyledBreadcrumbEllipsis = withContext(ark.li, "ellipsis", {
  defaultProps: { role: "presentation", "aria-hidden": true },
})
export type BreadcrumbEllipsisProps = ComponentProps<typeof StyledBreadcrumbEllipsis>

export const BreadcrumbEllipsis = defineComponent({
  name: "BreadcrumbEllipsis",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(StyledBreadcrumbEllipsis as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "dots" }))
  },
}) as unknown as typeof StyledBreadcrumbEllipsis
