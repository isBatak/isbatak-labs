import type { Meta, StoryObj } from "@storybook/react-vite"
import { CardDemo } from "@isbatak/compositions/ds/react/card/usage"
import { CardVariantsDemo } from "@isbatak/compositions/ds/react/card/variants"
import { CardSizesDemo } from "@isbatak/compositions/ds/react/card/sizes"
import { CardInteractiveDemo } from "@isbatak/compositions/ds/react/card/interactive"
import { CardWithAvatarDemo } from "@isbatak/compositions/ds/react/card/with-avatar"

const meta = {
  title: "DS/Card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CardDemo />,
}

export const Variants: Story = {
  render: () => <CardVariantsDemo />,
}

export const Sizes: Story = {
  render: () => <CardSizesDemo />,
}

export const Interactive: Story = {
  render: () => <CardInteractiveDemo />,
}

export const WithAvatar: Story = {
  render: () => <CardWithAvatarDemo />,
}
