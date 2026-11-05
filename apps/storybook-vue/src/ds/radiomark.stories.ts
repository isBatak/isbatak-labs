import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import RadiomarkDemo from "@isbatak/compositions/ds/vue/radiomark/usage"
import RadiomarkVariantsDemo from "@isbatak/compositions/ds/vue/radiomark/variants"

const meta = {
  title: "DS/Radiomark",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(RadiomarkDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(RadiomarkVariantsDemo) }),
}
