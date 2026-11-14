import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { FormatDemo } from "@isbatak/compositions/ds/solid/format/usage"
import { FormatByteDemo } from "@isbatak/compositions/ds/solid/format/byte"
import { FormatRelativeTimeDemo } from "@isbatak/compositions/ds/solid/format/relative-time"
import { FormatTimeDemo } from "@isbatak/compositions/ds/solid/format/time"

const meta = {
  title: "DS/Format",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FormatDemo />,
}

export const Byte: Story = {
  render: () => <FormatByteDemo />,
}

export const RelativeTime: Story = {
  render: () => <FormatRelativeTimeDemo />,
}

export const Time: Story = {
  render: () => <FormatTimeDemo />,
}
