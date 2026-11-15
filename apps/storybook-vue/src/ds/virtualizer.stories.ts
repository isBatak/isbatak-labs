import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import VirtualizerDemo from "@isbatak/compositions/ds/vue/virtualizer/usage"
import VirtualizerHorizontalDemo from "@isbatak/compositions/ds/vue/virtualizer/horizontal"
import VirtualizerGridDemo from "@isbatak/compositions/ds/vue/virtualizer/grid"
import VirtualizerWindowDemo from "@isbatak/compositions/ds/vue/virtualizer/window"
import VirtualizerDynamicSizeDemo from "@isbatak/compositions/ds/vue/virtualizer/dynamic-size"
import VirtualizerScrollToIndexDemo from "@isbatak/compositions/ds/vue/virtualizer/scroll-to-index"
import VirtualizerVariantsDemo from "@isbatak/compositions/ds/vue/virtualizer/variants"
import VirtualizerSizesDemo from "@isbatak/compositions/ds/vue/virtualizer/sizes"

const meta = {
  title: "DS/Virtualizer",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(VirtualizerDemo) }),
}

export const Horizontal: Story = {
  render: () => ({ setup: () => () => h(VirtualizerHorizontalDemo) }),
}

export const Grid: Story = {
  render: () => ({ setup: () => () => h(VirtualizerGridDemo) }),
}

export const Window: Story = {
  render: () => ({ setup: () => () => h(VirtualizerWindowDemo) }),
}

export const DynamicSize: Story = {
  render: () => ({ setup: () => () => h(VirtualizerDynamicSizeDemo) }),
}

export const ScrollToIndex: Story = {
  render: () => ({ setup: () => () => h(VirtualizerScrollToIndexDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(VirtualizerVariantsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(VirtualizerSizesDemo) }),
}
