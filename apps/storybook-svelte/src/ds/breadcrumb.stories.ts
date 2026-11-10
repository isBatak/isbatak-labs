import type { Meta, StoryObj } from "@storybook/svelte-vite"
import BreadcrumbDemo from "@isbatak/compositions/ds/svelte/breadcrumb/usage"
import BreadcrumbSizesDemo from "@isbatak/compositions/ds/svelte/breadcrumb/sizes"
import BreadcrumbVariantsDemo from "@isbatak/compositions/ds/svelte/breadcrumb/variants"
import BreadcrumbSeparatorDemo from "@isbatak/compositions/ds/svelte/breadcrumb/separator"
import BreadcrumbIconDemo from "@isbatak/compositions/ds/svelte/breadcrumb/icon"
import BreadcrumbEllipsisDemo from "@isbatak/compositions/ds/svelte/breadcrumb/ellipsis"
import BreadcrumbMenuDemo from "@isbatak/compositions/ds/svelte/breadcrumb/menu"

const meta = {
  title: "DS/Breadcrumb",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof BreadcrumbDemo> = {
  render: () => ({ Component: BreadcrumbDemo }),
}

export const Sizes: StoryObj<typeof BreadcrumbSizesDemo> = {
  render: () => ({ Component: BreadcrumbSizesDemo }),
}

export const Variants: StoryObj<typeof BreadcrumbVariantsDemo> = {
  render: () => ({ Component: BreadcrumbVariantsDemo }),
}

export const Separator: StoryObj<typeof BreadcrumbSeparatorDemo> = {
  render: () => ({ Component: BreadcrumbSeparatorDemo }),
}

export const Icon: StoryObj<typeof BreadcrumbIconDemo> = {
  render: () => ({ Component: BreadcrumbIconDemo }),
}

export const Ellipsis: StoryObj<typeof BreadcrumbEllipsisDemo> = {
  render: () => ({ Component: BreadcrumbEllipsisDemo }),
}

export const Menu: StoryObj<typeof BreadcrumbMenuDemo> = {
  render: () => ({ Component: BreadcrumbMenuDemo }),
}
