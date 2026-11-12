import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TimelineDemo from "@isbatak/compositions/ds/vue/timeline/usage"
import TimelineVariantsDemo from "@isbatak/compositions/ds/vue/timeline/variants"
import TimelineSizesDemo from "@isbatak/compositions/ds/vue/timeline/sizes"
import TimelineWithIconsDemo from "@isbatak/compositions/ds/vue/timeline/with-icons"
import TimelineWithLastSeparatorDemo from "@isbatak/compositions/ds/vue/timeline/with-last-separator"

const meta = {
  title: "DS/Timeline",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TimelineDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(TimelineVariantsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TimelineSizesDemo) }),
}

export const WithIcons: Story = {
  render: () => ({ setup: () => () => h(TimelineWithIconsDemo) }),
}

export const WithLastSeparator: Story = {
  render: () => ({ setup: () => () => h(TimelineWithLastSeparatorDemo) }),
}
