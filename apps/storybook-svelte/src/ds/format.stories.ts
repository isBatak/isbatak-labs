import type { Meta, StoryObj } from "@storybook/svelte-vite"
import FormatDemo from "@isbatak/compositions/ds/svelte/format/usage"
import FormatByteDemo from "@isbatak/compositions/ds/svelte/format/byte"
import FormatRelativeTimeDemo from "@isbatak/compositions/ds/svelte/format/relative-time"
import FormatTimeDemo from "@isbatak/compositions/ds/svelte/format/time"

const meta = {
  title: "DS/Format",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof FormatDemo> = {
  render: () => ({ Component: FormatDemo }),
}

export const Byte: StoryObj<typeof FormatByteDemo> = {
  render: () => ({ Component: FormatByteDemo }),
}

export const RelativeTime: StoryObj<typeof FormatRelativeTimeDemo> = {
  render: () => ({ Component: FormatRelativeTimeDemo }),
}

export const Time: StoryObj<typeof FormatTimeDemo> = {
  render: () => ({ Component: FormatTimeDemo }),
}
