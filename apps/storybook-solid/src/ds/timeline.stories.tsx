import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { TimelineDemo } from "@isbatak/compositions/ds/solid/timeline/usage"
import { TimelineVariantsDemo } from "@isbatak/compositions/ds/solid/timeline/variants"
import { TimelineSizesDemo } from "@isbatak/compositions/ds/solid/timeline/sizes"
import { TimelineWithIconsDemo } from "@isbatak/compositions/ds/solid/timeline/with-icons"
import { TimelineWithLastSeparatorDemo } from "@isbatak/compositions/ds/solid/timeline/with-last-separator"

const meta = {
  title: "DS/Timeline",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TimelineDemo />,
}

export const Variants: Story = {
  render: () => <TimelineVariantsDemo />,
}

export const Sizes: Story = {
  render: () => <TimelineSizesDemo />,
}

export const WithIcons: Story = {
  render: () => <TimelineWithIconsDemo />,
}

export const WithLastSeparator: Story = {
  render: () => <TimelineWithLastSeparatorDemo />,
}
