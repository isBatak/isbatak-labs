import type { Meta, StoryObj } from "@storybook/react-vite"
import { BreadcrumbDemo } from "@isbatak/compositions/ds/react/breadcrumb/usage"
import { BreadcrumbSizesDemo } from "@isbatak/compositions/ds/react/breadcrumb/sizes"
import { BreadcrumbVariantsDemo } from "@isbatak/compositions/ds/react/breadcrumb/variants"
import { BreadcrumbSeparatorDemo } from "@isbatak/compositions/ds/react/breadcrumb/separator"
import { BreadcrumbIconDemo } from "@isbatak/compositions/ds/react/breadcrumb/icon"
import { BreadcrumbEllipsisDemo } from "@isbatak/compositions/ds/react/breadcrumb/ellipsis"
import { BreadcrumbMenuDemo } from "@isbatak/compositions/ds/react/breadcrumb/menu"

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
