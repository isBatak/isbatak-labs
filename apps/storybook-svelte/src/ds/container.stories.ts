import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ContainerDemo from "@isbatak/compositions/ds/svelte/container/usage"
import ContainerCenterContentDemo from "@isbatak/compositions/ds/svelte/container/center-content"
import ContainerFluidDemo from "@isbatak/compositions/ds/svelte/container/fluid"
import ContainerSizesDemo from "@isbatak/compositions/ds/svelte/container/sizes"

const meta = {
  title: "DS/Container",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ContainerDemo> = {
  render: () => ({ Component: ContainerDemo }),
}

export const CenterContent: StoryObj<typeof ContainerCenterContentDemo> = {
  render: () => ({ Component: ContainerCenterContentDemo }),
}

export const Fluid: StoryObj<typeof ContainerFluidDemo> = {
  render: () => ({ Component: ContainerFluidDemo }),
}

export const Sizes: StoryObj<typeof ContainerSizesDemo> = {
  render: () => ({ Component: ContainerSizesDemo }),
}
