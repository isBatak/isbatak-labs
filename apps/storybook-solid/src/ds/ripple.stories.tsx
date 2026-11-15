import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { RippleDemo } from "@isbatak/compositions/ds/solid/ripple/usage"
import { RippleCenteredDemo } from "@isbatak/compositions/ds/solid/ripple/centered"
import { RippleWithButtonDemo } from "@isbatak/compositions/ds/solid/ripple/with-button"
import { RippleDisabledDemo } from "@isbatak/compositions/ds/solid/ripple/disabled"
import { RippleDisabledButtonDemo } from "@isbatak/compositions/ds/solid/ripple/disabled-button"

const meta = {
  title: "DS/Ripple",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <RippleDemo />,
}

export const Centered: Story = {
  render: () => <RippleCenteredDemo />,
}

export const WithButton: Story = {
  render: () => <RippleWithButtonDemo />,
}

export const Disabled: Story = {
  render: () => <RippleDisabledDemo />,
}

export const DisabledButton: Story = {
  render: () => <RippleDisabledButtonDemo />,
}
