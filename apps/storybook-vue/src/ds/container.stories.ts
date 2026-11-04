import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ContainerDemo from "@isbatak/compositions/ds/vue/container/usage"
import ContainerCenterContentDemo from "@isbatak/compositions/ds/vue/container/center-content"
import ContainerFluidDemo from "@isbatak/compositions/ds/vue/container/fluid"
import ContainerSizesDemo from "@isbatak/compositions/ds/vue/container/sizes"

const meta = {
  title: "DS/Container",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ContainerDemo) }),
}

export const CenterContent: Story = {
  render: () => ({ setup: () => () => h(ContainerCenterContentDemo) }),
}

export const Fluid: Story = {
  render: () => ({ setup: () => () => h(ContainerFluidDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ContainerSizesDemo) }),
}
