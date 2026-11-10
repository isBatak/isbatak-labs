import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { BreadcrumbDemo } from "@isbatak/compositions/ds/solid/breadcrumb/usage"
import { BreadcrumbSizesDemo } from "@isbatak/compositions/ds/solid/breadcrumb/sizes"
import { BreadcrumbVariantsDemo } from "@isbatak/compositions/ds/solid/breadcrumb/variants"
import { BreadcrumbSeparatorDemo } from "@isbatak/compositions/ds/solid/breadcrumb/separator"
import { BreadcrumbIconDemo } from "@isbatak/compositions/ds/solid/breadcrumb/icon"
import { BreadcrumbEllipsisDemo } from "@isbatak/compositions/ds/solid/breadcrumb/ellipsis"
import { BreadcrumbMenuDemo } from "@isbatak/compositions/ds/solid/breadcrumb/menu"

const meta = {
  title: "DS/Breadcrumb",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <BreadcrumbDemo />,
}

export const Sizes: Story = {
  render: () => <BreadcrumbSizesDemo />,
}

export const Variants: Story = {
  render: () => <BreadcrumbVariantsDemo />,
}

export const Separator: Story = {
  render: () => <BreadcrumbSeparatorDemo />,
}

export const Icon: Story = {
  render: () => <BreadcrumbIconDemo />,
}

export const Ellipsis: Story = {
  render: () => <BreadcrumbEllipsisDemo />,
}

export const Menu: Story = {
  render: () => <BreadcrumbMenuDemo />,
}
