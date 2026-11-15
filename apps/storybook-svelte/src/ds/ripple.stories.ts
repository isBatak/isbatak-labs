import type { Meta, StoryObj } from "@storybook/svelte-vite"
import RippleDemo from "@isbatak/compositions/ds/svelte/ripple/usage"
import RippleCenteredDemo from "@isbatak/compositions/ds/svelte/ripple/centered"
import RippleWithButtonDemo from "@isbatak/compositions/ds/svelte/ripple/with-button"
import RippleDisabledDemo from "@isbatak/compositions/ds/svelte/ripple/disabled"
import RippleDisabledButtonDemo from "@isbatak/compositions/ds/svelte/ripple/disabled-button"

const meta = {
  title: "DS/Ripple",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof RippleDemo> = {
  render: () => ({ Component: RippleDemo }),
}

export const Centered: StoryObj<typeof RippleCenteredDemo> = {
  render: () => ({ Component: RippleCenteredDemo }),
}

export const WithButton: StoryObj<typeof RippleWithButtonDemo> = {
  render: () => ({ Component: RippleWithButtonDemo }),
}

export const Disabled: StoryObj<typeof RippleDisabledDemo> = {
  render: () => ({ Component: RippleDisabledDemo }),
}

export const DisabledButton: StoryObj<typeof RippleDisabledButtonDemo> = {
  render: () => ({ Component: RippleDisabledButtonDemo }),
}
