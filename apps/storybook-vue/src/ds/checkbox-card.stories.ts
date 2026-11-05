import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CheckboxCardDemo from "@isbatak/compositions/ds/vue/checkbox-card/usage"
import CheckboxCardGroupDemo from "@isbatak/compositions/ds/vue/checkbox-card/group"
import CheckboxCardVariantsDemo from "@isbatak/compositions/ds/vue/checkbox-card/variants"

const meta = {
  title: "DS/Checkbox card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CheckboxCardDemo) }),
}

export const Group: Story = {
  render: () => ({ setup: () => () => h(CheckboxCardGroupDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(CheckboxCardVariantsDemo) }),
}
