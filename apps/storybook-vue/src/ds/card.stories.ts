import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CardDemo from "@isbatak/compositions/ds/vue/card/usage"
import CardVariantsDemo from "@isbatak/compositions/ds/vue/card/variants"
import CardSizesDemo from "@isbatak/compositions/ds/vue/card/sizes"
import CardInteractiveDemo from "@isbatak/compositions/ds/vue/card/interactive"
import CardWithAvatarDemo from "@isbatak/compositions/ds/vue/card/with-avatar"

const meta = {
  title: "DS/Card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CardDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(CardVariantsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(CardSizesDemo) }),
}

export const Interactive: Story = {
  render: () => ({ setup: () => () => h(CardInteractiveDemo) }),
}

export const WithAvatar: Story = {
  render: () => ({ setup: () => () => h(CardWithAvatarDemo) }),
}
