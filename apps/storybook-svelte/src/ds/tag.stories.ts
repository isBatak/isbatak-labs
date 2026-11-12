import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TagDemo from "@isbatak/compositions/ds/svelte/tag/usage"
import TagSizesDemo from "@isbatak/compositions/ds/svelte/tag/sizes"
import TagVariantsDemo from "@isbatak/compositions/ds/svelte/tag/variants"
import TagColorsDemo from "@isbatak/compositions/ds/svelte/tag/colors"
import TagWithIconDemo from "@isbatak/compositions/ds/svelte/tag/with-icon"
import TagClosableDemo from "@isbatak/compositions/ds/svelte/tag/closable"
import TagWithAvatarDemo from "@isbatak/compositions/ds/svelte/tag/with-avatar"
import TagOverflowDemo from "@isbatak/compositions/ds/svelte/tag/overflow"

const meta = {
  title: "DS/Tag",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TagDemo> = {
  render: () => ({ Component: TagDemo }),
}

export const Sizes: StoryObj<typeof TagSizesDemo> = {
  render: () => ({ Component: TagSizesDemo }),
}

export const Variants: StoryObj<typeof TagVariantsDemo> = {
  render: () => ({ Component: TagVariantsDemo }),
}

export const Colors: StoryObj<typeof TagColorsDemo> = {
  render: () => ({ Component: TagColorsDemo }),
}

export const WithIcon: StoryObj<typeof TagWithIconDemo> = {
  render: () => ({ Component: TagWithIconDemo }),
}

export const Closable: StoryObj<typeof TagClosableDemo> = {
  render: () => ({ Component: TagClosableDemo }),
}

export const WithAvatar: StoryObj<typeof TagWithAvatarDemo> = {
  render: () => ({ Component: TagWithAvatarDemo }),
}

export const Overflow: StoryObj<typeof TagOverflowDemo> = {
  render: () => ({ Component: TagOverflowDemo }),
}
