import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { VirtualizerDemo } from "@isbatak/compositions/ds/solid/virtualizer/usage"
import { VirtualizerHorizontalDemo } from "@isbatak/compositions/ds/solid/virtualizer/horizontal"
import { VirtualizerGridDemo } from "@isbatak/compositions/ds/solid/virtualizer/grid"
import { VirtualizerWindowDemo } from "@isbatak/compositions/ds/solid/virtualizer/window"
import { VirtualizerDynamicSizeDemo } from "@isbatak/compositions/ds/solid/virtualizer/dynamic-size"
import { VirtualizerScrollToIndexDemo } from "@isbatak/compositions/ds/solid/virtualizer/scroll-to-index"
import { VirtualizerVariantsDemo } from "@isbatak/compositions/ds/solid/virtualizer/variants"
import { VirtualizerSizesDemo } from "@isbatak/compositions/ds/solid/virtualizer/sizes"

const meta = {
  title: "DS/Virtualizer",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <VirtualizerDemo />,
}

export const Horizontal: Story = {
  render: () => <VirtualizerHorizontalDemo />,
}

export const Grid: Story = {
  render: () => <VirtualizerGridDemo />,
}

export const Window: Story = {
  render: () => <VirtualizerWindowDemo />,
}

export const DynamicSize: Story = {
  render: () => <VirtualizerDynamicSizeDemo />,
}

export const ScrollToIndex: Story = {
  render: () => <VirtualizerScrollToIndexDemo />,
}

export const Variants: Story = {
  render: () => <VirtualizerVariantsDemo />,
}

export const Sizes: Story = {
  render: () => <VirtualizerSizesDemo />,
}
