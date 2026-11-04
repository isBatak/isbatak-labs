import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CodeDemo from "@isbatak/compositions/ds/vue/code/usage"
import CodeSizesDemo from "@isbatak/compositions/ds/vue/code/sizes"
import CodeVariantsDemo from "@isbatak/compositions/ds/vue/code/variants"

const meta = {
  title: "DS/Code",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CodeDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(CodeSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(CodeVariantsDemo) }),
}
