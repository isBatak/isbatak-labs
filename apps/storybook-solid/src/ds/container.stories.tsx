import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ContainerDemo } from "@isbatak/compositions/ds/solid/container/usage"
import { ContainerCenterContentDemo } from "@isbatak/compositions/ds/solid/container/center-content"
import { ContainerFluidDemo } from "@isbatak/compositions/ds/solid/container/fluid"
import { ContainerSizesDemo } from "@isbatak/compositions/ds/solid/container/sizes"

const meta = {
  title: "DS/Container",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ContainerDemo />,
}

export const CenterContent: Story = {
  render: () => <ContainerCenterContentDemo />,
}

export const Fluid: Story = {
  render: () => <ContainerFluidDemo />,
}

export const Sizes: Story = {
  render: () => <ContainerSizesDemo />,
}
