import type { Meta, StoryObj } from "@storybook/react-vite"
import { SkeletonDemo } from "@isbatak/compositions/ds/react/skeleton/usage"
import { SkeletonTextDemo } from "@isbatak/compositions/ds/react/skeleton/text"
import { SkeletonVariantsDemo } from "@isbatak/compositions/ds/react/skeleton/variants"
import { SkeletonWithChildrenDemo } from "@isbatak/compositions/ds/react/skeleton/with-children"

const meta = {
  title: "DS/Skeleton",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SkeletonDemo />,
}

export const Text: Story = {
  render: () => <SkeletonTextDemo />,
}

export const Variants: Story = {
  render: () => <SkeletonVariantsDemo />,
}

export const WithChildren: Story = {
  render: () => <SkeletonWithChildrenDemo />,
}
