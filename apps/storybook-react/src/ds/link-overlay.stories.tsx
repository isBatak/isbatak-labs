import type { Meta, StoryObj } from "@storybook/react-vite"
import { LinkOverlayDemo } from "@isbatak/compositions/ds/react/link-overlay/usage"
import { LinkOverlayWithNestedLinkDemo } from "@isbatak/compositions/ds/react/link-overlay/with-nested-link"

const meta = {
  title: "DS/Link overlay",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <LinkOverlayDemo />,
}

export const WithNestedLink: Story = {
  render: () => <LinkOverlayWithNestedLinkDemo />,
}
