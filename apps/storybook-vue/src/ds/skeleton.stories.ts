import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SkeletonDemo from "@isbatak/compositions/ds/vue/skeleton/usage"
import SkeletonTextDemo from "@isbatak/compositions/ds/vue/skeleton/text"
import SkeletonVariantsDemo from "@isbatak/compositions/ds/vue/skeleton/variants"
import SkeletonWithChildrenDemo from "@isbatak/compositions/ds/vue/skeleton/with-children"

const meta = {
  title: "DS/Skeleton",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SkeletonDemo) }),
}

export const Text: Story = {
  render: () => ({ setup: () => () => h(SkeletonTextDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(SkeletonVariantsDemo) }),
}

export const WithChildren: Story = {
  render: () => ({ setup: () => () => h(SkeletonWithChildrenDemo) }),
}
