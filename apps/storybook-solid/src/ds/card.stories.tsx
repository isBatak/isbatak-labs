import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { CardDemo } from "@isbatak/compositions/ds/solid/card/usage"
import { CardVariantsDemo } from "@isbatak/compositions/ds/solid/card/variants"
import { CardSizesDemo } from "@isbatak/compositions/ds/solid/card/sizes"
import { CardInteractiveDemo } from "@isbatak/compositions/ds/solid/card/interactive"
import { CardWithAvatarDemo } from "@isbatak/compositions/ds/solid/card/with-avatar"

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
