import type { Meta, StoryObj } from "@storybook/react-vite"
import { LinkDemo } from "@isbatak/compositions/ds/react/link/usage"
import { LinkExternalDemo } from "@isbatak/compositions/ds/react/link/external"
import { LinkVariantsDemo } from "@isbatak/compositions/ds/react/link/variants"
import { LinkWithinTextDemo } from "@isbatak/compositions/ds/react/link/within-text"

const meta = {
  title: "DS/Link",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <LinkDemo />,
}

export const External: Story = {
  render: () => <LinkExternalDemo />,
}

export const Variants: Story = {
  render: () => <LinkVariantsDemo />,
}

export const WithinText: Story = {
  render: () => <LinkWithinTextDemo />,
}
