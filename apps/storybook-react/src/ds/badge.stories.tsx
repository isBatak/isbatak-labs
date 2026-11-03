import type { Meta, StoryObj } from "@storybook/react-vite"
import { BadgeDemo } from "@isbatak/compositions/ds/react/badge/usage"
import { BadgeColorsDemo } from "@isbatak/compositions/ds/react/badge/colors"
import { BadgeSizesDemo } from "@isbatak/compositions/ds/react/badge/sizes"
import { BadgeStatusDemo } from "@isbatak/compositions/ds/react/badge/status"
import { BadgeVariantsDemo } from "@isbatak/compositions/ds/react/badge/variants"
import { BadgeWithIconDemo } from "@isbatak/compositions/ds/react/badge/with-icon"

const meta = {
  title: "DS/Badge",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <BadgeDemo />,
}

export const Colors: Story = {
  render: () => <BadgeColorsDemo />,
}

export const Sizes: Story = {
  render: () => <BadgeSizesDemo />,
}

export const Status: Story = {
  render: () => <BadgeStatusDemo />,
}

export const Variants: Story = {
  render: () => <BadgeVariantsDemo />,
}

export const WithIcon: Story = {
  render: () => <BadgeWithIconDemo />,
}
