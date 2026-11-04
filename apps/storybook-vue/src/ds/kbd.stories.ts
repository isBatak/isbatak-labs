import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import KbdDemo from "@isbatak/compositions/ds/vue/kbd/usage"
import KbdCombinationsDemo from "@isbatak/compositions/ds/vue/kbd/combinations"
import KbdFunctionKeysDemo from "@isbatak/compositions/ds/vue/kbd/function-keys"
import KbdGroupDemo from "@isbatak/compositions/ds/vue/kbd/group"
import KbdSizesDemo from "@isbatak/compositions/ds/vue/kbd/sizes"
import KbdVariantsDemo from "@isbatak/compositions/ds/vue/kbd/variants"
import KbdWithinTextDemo from "@isbatak/compositions/ds/vue/kbd/within-text"

const meta = {
  title: "DS/Kbd",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(KbdDemo) }),
}

export const Combinations: Story = {
  render: () => ({ setup: () => () => h(KbdCombinationsDemo) }),
}

export const FunctionKeys: Story = {
  render: () => ({ setup: () => () => h(KbdFunctionKeysDemo) }),
}

export const Group: Story = {
  render: () => ({ setup: () => () => h(KbdGroupDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(KbdSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(KbdVariantsDemo) }),
}

export const WithinText: Story = {
  render: () => ({ setup: () => () => h(KbdWithinTextDemo) }),
}
