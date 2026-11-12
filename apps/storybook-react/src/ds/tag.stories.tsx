import type { Meta, StoryObj } from "@storybook/react-vite"
import { TagDemo } from "@isbatak/compositions/ds/react/tag/usage"
import { TagSizesDemo } from "@isbatak/compositions/ds/react/tag/sizes"
import { TagVariantsDemo } from "@isbatak/compositions/ds/react/tag/variants"
import { TagColorsDemo } from "@isbatak/compositions/ds/react/tag/colors"
import { TagWithIconDemo } from "@isbatak/compositions/ds/react/tag/with-icon"
import { TagClosableDemo } from "@isbatak/compositions/ds/react/tag/closable"
import { TagWithAvatarDemo } from "@isbatak/compositions/ds/react/tag/with-avatar"
import { TagOverflowDemo } from "@isbatak/compositions/ds/react/tag/overflow"

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
