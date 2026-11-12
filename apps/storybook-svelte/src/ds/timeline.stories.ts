import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TimelineDemo from "@isbatak/compositions/ds/svelte/timeline/usage"
import TimelineVariantsDemo from "@isbatak/compositions/ds/svelte/timeline/variants"
import TimelineSizesDemo from "@isbatak/compositions/ds/svelte/timeline/sizes"
import TimelineWithIconsDemo from "@isbatak/compositions/ds/svelte/timeline/with-icons"
import TimelineWithLastSeparatorDemo from "@isbatak/compositions/ds/svelte/timeline/with-last-separator"

const meta = {
  title: "DS/Timeline",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TimelineDemo> = {
  render: () => ({ Component: TimelineDemo }),
}

export const Variants: StoryObj<typeof TimelineVariantsDemo> = {
  render: () => ({ Component: TimelineVariantsDemo }),
}

export const Sizes: StoryObj<typeof TimelineSizesDemo> = {
  render: () => ({ Component: TimelineSizesDemo }),
}

export const WithIcons: StoryObj<typeof TimelineWithIconsDemo> = {
  render: () => ({ Component: TimelineWithIconsDemo }),
}

export const WithLastSeparator: StoryObj<typeof TimelineWithLastSeparatorDemo> = {
  render: () => ({ Component: TimelineWithLastSeparatorDemo }),
}
