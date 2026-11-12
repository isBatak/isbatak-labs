import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { TagDemo } from "@isbatak/compositions/ds/solid/tag/usage"
import { TagSizesDemo } from "@isbatak/compositions/ds/solid/tag/sizes"
import { TagVariantsDemo } from "@isbatak/compositions/ds/solid/tag/variants"
import { TagColorsDemo } from "@isbatak/compositions/ds/solid/tag/colors"
import { TagWithIconDemo } from "@isbatak/compositions/ds/solid/tag/with-icon"
import { TagClosableDemo } from "@isbatak/compositions/ds/solid/tag/closable"
import { TagWithAvatarDemo } from "@isbatak/compositions/ds/solid/tag/with-avatar"
import { TagOverflowDemo } from "@isbatak/compositions/ds/solid/tag/overflow"

const meta = {
  title: "DS/Tag",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TagDemo />,
}

export const Sizes: Story = {
  render: () => <TagSizesDemo />,
}

export const Variants: Story = {
  render: () => <TagVariantsDemo />,
}

export const Colors: Story = {
  render: () => <TagColorsDemo />,
}

export const WithIcon: Story = {
  render: () => <TagWithIconDemo />,
}

export const Closable: Story = {
  render: () => <TagClosableDemo />,
}

export const WithAvatar: Story = {
  render: () => <TagWithAvatarDemo />,
}

export const Overflow: Story = {
  render: () => <TagOverflowDemo />,
}
