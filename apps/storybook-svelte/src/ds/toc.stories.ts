import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TocDemo from "@isbatak/compositions/ds/svelte/toc/usage"
import TocSizesDemo from "@isbatak/compositions/ds/svelte/toc/sizes"
import TocTrackDemo from "@isbatak/compositions/ds/svelte/toc/track"

const meta = {
  title: "DS/Table of contents",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TocDemo> = {
  render: () => ({ Component: TocDemo }),
}

export const Sizes: StoryObj<typeof TocSizesDemo> = {
  render: () => ({ Component: TocSizesDemo }),
}

export const Track: StoryObj<typeof TocTrackDemo> = {
  render: () => ({ Component: TocTrackDemo }),
}
