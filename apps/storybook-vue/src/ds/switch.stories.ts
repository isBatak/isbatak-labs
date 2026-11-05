import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SwitchDemo from "@isbatak/compositions/ds/vue/switch/usage"
import SwitchDisabledDemo from "@isbatak/compositions/ds/vue/switch/disabled"
import SwitchSizesDemo from "@isbatak/compositions/ds/vue/switch/sizes"
import SwitchVariantsDemo from "@isbatak/compositions/ds/vue/switch/variants"
import SwitchWithThumbIconsDemo from "@isbatak/compositions/ds/vue/switch/with-thumb-icons"

const meta = {
  title: "DS/Switch",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SwitchDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(SwitchDisabledDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(SwitchSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(SwitchVariantsDemo) }),
}

export const WithThumbIcons: Story = {
  render: () => ({ setup: () => () => h(SwitchWithThumbIconsDemo) }),
}
