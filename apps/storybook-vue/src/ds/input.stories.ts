import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import InputDemo from "@isbatak/compositions/ds/vue/input/usage"
import InputDisabledDemo from "@isbatak/compositions/ds/vue/input/disabled"
import InputSizesDemo from "@isbatak/compositions/ds/vue/input/sizes"
import InputVariantsDemo from "@isbatak/compositions/ds/vue/input/variants"
import InputWithFieldDemo from "@isbatak/compositions/ds/vue/input/with-field"

const meta = {
  title: "DS/Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(InputDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(InputDisabledDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(InputSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(InputVariantsDemo) }),
}

export const WithField: Story = {
  render: () => ({ setup: () => () => h(InputWithFieldDemo) }),
}
