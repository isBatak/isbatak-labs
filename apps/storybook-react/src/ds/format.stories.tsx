import type { Meta, StoryObj } from "@storybook/react-vite"
import { FormatDemo } from "@isbatak/compositions/ds/react/format/usage"
import { FormatByteDemo } from "@isbatak/compositions/ds/react/format/byte"
import { FormatRelativeTimeDemo } from "@isbatak/compositions/ds/react/format/relative-time"
import { FormatTimeDemo } from "@isbatak/compositions/ds/react/format/time"

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
