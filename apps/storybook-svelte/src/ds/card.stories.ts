import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CardDemo from "@isbatak/compositions/ds/svelte/card/usage"
import CardVariantsDemo from "@isbatak/compositions/ds/svelte/card/variants"
import CardSizesDemo from "@isbatak/compositions/ds/svelte/card/sizes"
import CardInteractiveDemo from "@isbatak/compositions/ds/svelte/card/interactive"
import CardWithAvatarDemo from "@isbatak/compositions/ds/svelte/card/with-avatar"

const meta = {
  title: "DS/Card",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CardDemo> = {
  render: () => ({ Component: CardDemo }),
}

export const Variants: StoryObj<typeof CardVariantsDemo> = {
  render: () => ({ Component: CardVariantsDemo }),
}

export const Sizes: StoryObj<typeof CardSizesDemo> = {
  render: () => ({ Component: CardSizesDemo }),
}

export const Interactive: StoryObj<typeof CardInteractiveDemo> = {
  render: () => ({ Component: CardInteractiveDemo }),
}

export const WithAvatar: StoryObj<typeof CardWithAvatarDemo> = {
  render: () => ({ Component: CardWithAvatarDemo }),
}
