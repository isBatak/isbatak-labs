import type { Meta, StoryObj } from "@storybook/svelte-vite"
import VirtualizerDemo from "@isbatak/compositions/ds/svelte/virtualizer/usage"
import VirtualizerHorizontalDemo from "@isbatak/compositions/ds/svelte/virtualizer/horizontal"
import VirtualizerGridDemo from "@isbatak/compositions/ds/svelte/virtualizer/grid"
import VirtualizerWindowDemo from "@isbatak/compositions/ds/svelte/virtualizer/window"
import VirtualizerDynamicSizeDemo from "@isbatak/compositions/ds/svelte/virtualizer/dynamic-size"
import VirtualizerScrollToIndexDemo from "@isbatak/compositions/ds/svelte/virtualizer/scroll-to-index"
import VirtualizerVariantsDemo from "@isbatak/compositions/ds/svelte/virtualizer/variants"
import VirtualizerSizesDemo from "@isbatak/compositions/ds/svelte/virtualizer/sizes"

const meta = {
  title: "DS/Virtualizer",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof VirtualizerDemo> = {
  render: () => ({ Component: VirtualizerDemo }),
}

export const Horizontal: StoryObj<typeof VirtualizerHorizontalDemo> = {
  render: () => ({ Component: VirtualizerHorizontalDemo }),
}

export const Grid: StoryObj<typeof VirtualizerGridDemo> = {
  render: () => ({ Component: VirtualizerGridDemo }),
}

export const Window: StoryObj<typeof VirtualizerWindowDemo> = {
  render: () => ({ Component: VirtualizerWindowDemo }),
}

export const DynamicSize: StoryObj<typeof VirtualizerDynamicSizeDemo> = {
  render: () => ({ Component: VirtualizerDynamicSizeDemo }),
}

export const ScrollToIndex: StoryObj<typeof VirtualizerScrollToIndexDemo> = {
  render: () => ({ Component: VirtualizerScrollToIndexDemo }),
}

export const Variants: StoryObj<typeof VirtualizerVariantsDemo> = {
  render: () => ({ Component: VirtualizerVariantsDemo }),
}

export const Sizes: StoryObj<typeof VirtualizerSizesDemo> = {
  render: () => ({ Component: VirtualizerSizesDemo }),
}
