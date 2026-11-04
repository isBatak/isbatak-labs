import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { CenterDemo } from "@isbatak/compositions/ds/solid/center/usage"
import { CenterInlineDemo } from "@isbatak/compositions/ds/solid/center/inline"
import { CenterWithAbsoluteDemo } from "@isbatak/compositions/ds/solid/center/with-absolute"
import { CenterWithIconsDemo } from "@isbatak/compositions/ds/solid/center/with-icons"

const meta = {
  title: "DS/Center",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CenterDemo />,
}

export const Inline: Story = {
  render: () => <CenterInlineDemo />,
}

export const WithAbsolute: Story = {
  render: () => <CenterWithAbsoluteDemo />,
}

export const WithIcons: Story = {
  render: () => <CenterWithIconsDemo />,
}
