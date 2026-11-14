import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import FormatDemo from "@isbatak/compositions/ds/vue/format/usage"
import FormatByteDemo from "@isbatak/compositions/ds/vue/format/byte"
import FormatRelativeTimeDemo from "@isbatak/compositions/ds/vue/format/relative-time"
import FormatTimeDemo from "@isbatak/compositions/ds/vue/format/time"

const meta = {
  title: "DS/Format",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(FormatDemo) }),
}

export const Byte: Story = {
  render: () => ({ setup: () => () => h(FormatByteDemo) }),
}

export const RelativeTime: Story = {
  render: () => ({ setup: () => () => h(FormatRelativeTimeDemo) }),
}

export const Time: Story = {
  render: () => ({ setup: () => () => h(FormatTimeDemo) }),
}
