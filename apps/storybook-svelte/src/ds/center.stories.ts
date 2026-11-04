import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CenterDemo from "@isbatak/compositions/ds/svelte/center/usage"
import CenterInlineDemo from "@isbatak/compositions/ds/svelte/center/inline"
import CenterWithAbsoluteDemo from "@isbatak/compositions/ds/svelte/center/with-absolute"
import CenterWithIconsDemo from "@isbatak/compositions/ds/svelte/center/with-icons"

const meta = {
  title: "DS/Center",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CenterDemo> = {
  render: () => ({ Component: CenterDemo }),
}

export const Inline: StoryObj<typeof CenterInlineDemo> = {
  render: () => ({ Component: CenterInlineDemo }),
}

export const WithAbsolute: StoryObj<typeof CenterWithAbsoluteDemo> = {
  render: () => ({ Component: CenterWithAbsoluteDemo }),
}

export const WithIcons: StoryObj<typeof CenterWithIconsDemo> = {
  render: () => ({ Component: CenterWithIconsDemo }),
}
