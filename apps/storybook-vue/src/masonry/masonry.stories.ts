import { masonryArgs, masonryArgTypes } from "@isbatak/storybook-shared"
import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { fn } from "storybook/test"
import { h } from "vue"
import BasicExample from "./basic.vue"
import DynamicExample from "./dynamic.vue"
import ImagesExample from "./images.vue"
import SpanningExample from "./spanning.vue"
import VariableHeightExample from "./variable-height.vue"

const meta = {
  title: "Masonry",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => ({ setup: () => () => h(BasicExample, args) }),
  args: { ...masonryArgs, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Images: StoryObj<typeof ImagesExample> = {
  render: (args) => ({ setup: () => () => h(ImagesExample, args) }),
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const VariableHeight: StoryObj<typeof VariableHeightExample> = {
  render: (args) => ({ setup: () => () => h(VariableHeightExample, args) }),
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Spanning: StoryObj<typeof SpanningExample> = {
  render: (args) => ({ setup: () => () => h(SpanningExample, args) }),
  args: { ...masonryArgs, columns: 3, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}

export const Dynamic: StoryObj<typeof DynamicExample> = {
  render: (args) => ({ setup: () => () => h(DynamicExample, args) }),
  args: { ...masonryArgs, onLayoutChange: fn() },
  argTypes: masonryArgTypes,
}
