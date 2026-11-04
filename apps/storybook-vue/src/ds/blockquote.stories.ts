import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import BlockquoteDemo from "@isbatak/compositions/ds/vue/blockquote/usage"
import BlockquoteJustifyDemo from "@isbatak/compositions/ds/vue/blockquote/justify"
import BlockquoteVariantsDemo from "@isbatak/compositions/ds/vue/blockquote/variants"
import BlockquoteWithCaptionDemo from "@isbatak/compositions/ds/vue/blockquote/with-caption"
import BlockquoteWithIconDemo from "@isbatak/compositions/ds/vue/blockquote/with-icon"

const meta = {
  title: "DS/Blockquote",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(BlockquoteDemo) }),
}

export const Justify: Story = {
  render: () => ({ setup: () => () => h(BlockquoteJustifyDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(BlockquoteVariantsDemo) }),
}

export const WithCaption: Story = {
  render: () => ({ setup: () => () => h(BlockquoteWithCaptionDemo) }),
}

export const WithIcon: Story = {
  render: () => ({ setup: () => () => h(BlockquoteWithIconDemo) }),
}
