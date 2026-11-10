import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TocDemo from "@isbatak/compositions/ds/vue/toc/usage"
import TocSizesDemo from "@isbatak/compositions/ds/vue/toc/sizes"
import TocTrackDemo from "@isbatak/compositions/ds/vue/toc/track"

const meta = {
  title: "DS/Table of contents",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TocDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TocSizesDemo) }),
}

export const Track: Story = {
  render: () => ({ setup: () => () => h(TocTrackDemo) }),
}
