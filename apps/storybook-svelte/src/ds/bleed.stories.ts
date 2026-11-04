import type { Meta, StoryObj } from "@storybook/svelte-vite"
import BleedDemo from "@isbatak/compositions/ds/svelte/bleed/usage"
import BleedDirectionDemo from "@isbatak/compositions/ds/svelte/bleed/direction"
import BleedVerticalDemo from "@isbatak/compositions/ds/svelte/bleed/vertical"

const meta = {
  title: "DS/Bleed",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof BleedDemo> = {
  render: () => ({ Component: BleedDemo }),
}

export const Direction: StoryObj<typeof BleedDirectionDemo> = {
  render: () => ({ Component: BleedDirectionDemo }),
}

export const Vertical: StoryObj<typeof BleedVerticalDemo> = {
  render: () => ({ Component: BleedVerticalDemo }),
}
