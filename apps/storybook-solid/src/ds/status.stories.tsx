import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { StatusDemo } from "@isbatak/compositions/ds/solid/status/usage"
import { StatusSizesDemo } from "@isbatak/compositions/ds/solid/status/sizes"
import { StatusWithLabelDemo } from "@isbatak/compositions/ds/solid/status/with-label"

const meta = {
  title: "DS/Status",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <StatusDemo />,
}

export const Sizes: Story = {
  render: () => <StatusSizesDemo />,
}

export const WithLabel: Story = {
  render: () => <StatusWithLabelDemo />,
}
