import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import RadioGroupDemo from "@isbatak/compositions/ds/vue/radio-group/usage"
import RadioGroupDisabledDemo from "@isbatak/compositions/ds/vue/radio-group/disabled"
import RadioGroupSizesDemo from "@isbatak/compositions/ds/vue/radio-group/sizes"
import RadioGroupVariantsDemo from "@isbatak/compositions/ds/vue/radio-group/variants"
import RadioGroupVerticalDemo from "@isbatak/compositions/ds/vue/radio-group/vertical"

const meta = {
  title: "DS/Radio group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(RadioGroupDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(RadioGroupDisabledDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(RadioGroupSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(RadioGroupVariantsDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(RadioGroupVerticalDemo) }),
}
