import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import BreadcrumbDemo from "@isbatak/compositions/ds/vue/breadcrumb/usage"
import BreadcrumbSizesDemo from "@isbatak/compositions/ds/vue/breadcrumb/sizes"
import BreadcrumbVariantsDemo from "@isbatak/compositions/ds/vue/breadcrumb/variants"
import BreadcrumbSeparatorDemo from "@isbatak/compositions/ds/vue/breadcrumb/separator"
import BreadcrumbIconDemo from "@isbatak/compositions/ds/vue/breadcrumb/icon"
import BreadcrumbEllipsisDemo from "@isbatak/compositions/ds/vue/breadcrumb/ellipsis"
import BreadcrumbMenuDemo from "@isbatak/compositions/ds/vue/breadcrumb/menu"

const meta = {
  title: "DS/Breadcrumb",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(BreadcrumbDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(BreadcrumbSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(BreadcrumbVariantsDemo) }),
}

export const Separator: Story = {
  render: () => ({ setup: () => () => h(BreadcrumbSeparatorDemo) }),
}

export const Icon: Story = {
  render: () => ({ setup: () => () => h(BreadcrumbIconDemo) }),
}

export const Ellipsis: Story = {
  render: () => ({ setup: () => () => h(BreadcrumbEllipsisDemo) }),
}

export const Menu: Story = {
  render: () => ({ setup: () => () => h(BreadcrumbMenuDemo) }),
}
