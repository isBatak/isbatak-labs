import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TagDemo from "@isbatak/compositions/ds/vue/tag/usage"
import TagSizesDemo from "@isbatak/compositions/ds/vue/tag/sizes"
import TagVariantsDemo from "@isbatak/compositions/ds/vue/tag/variants"
import TagColorsDemo from "@isbatak/compositions/ds/vue/tag/colors"
import TagWithIconDemo from "@isbatak/compositions/ds/vue/tag/with-icon"
import TagClosableDemo from "@isbatak/compositions/ds/vue/tag/closable"
import TagWithAvatarDemo from "@isbatak/compositions/ds/vue/tag/with-avatar"
import TagOverflowDemo from "@isbatak/compositions/ds/vue/tag/overflow"

const meta = {
  title: "DS/Tag",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TagDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TagSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(TagVariantsDemo) }),
}

export const Colors: Story = {
  render: () => ({ setup: () => () => h(TagColorsDemo) }),
}

export const WithIcon: Story = {
  render: () => ({ setup: () => () => h(TagWithIconDemo) }),
}

export const Closable: Story = {
  render: () => ({ setup: () => () => h(TagClosableDemo) }),
}

export const WithAvatar: Story = {
  render: () => ({ setup: () => () => h(TagWithAvatarDemo) }),
}

export const Overflow: Story = {
  render: () => ({ setup: () => () => h(TagOverflowDemo) }),
}
