import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CheckmarkDemo from "@isbatak/compositions/ds/vue/checkmark/usage"
import CheckmarkVariantsDemo from "@isbatak/compositions/ds/vue/checkmark/variants"

const meta = {
  title: "DS/Checkmark",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CheckmarkDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(CheckmarkVariantsDemo) }),
}
