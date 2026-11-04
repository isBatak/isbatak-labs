import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { LinkDemo } from "@isbatak/compositions/ds/solid/link/usage"
import { LinkExternalDemo } from "@isbatak/compositions/ds/solid/link/external"
import { LinkVariantsDemo } from "@isbatak/compositions/ds/solid/link/variants"
import { LinkWithinTextDemo } from "@isbatak/compositions/ds/solid/link/within-text"

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
