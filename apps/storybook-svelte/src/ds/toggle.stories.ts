import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ToggleDemo from "@isbatak/compositions/ds/svelte/toggle/usage"
import ToggleDefaultPressedDemo from "@isbatak/compositions/ds/svelte/toggle/default-pressed"
import ToggleWithIndicatorDemo from "@isbatak/compositions/ds/svelte/toggle/with-indicator"

const meta = {
  title: "DS/Toggle",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ToggleDemo> = {
  render: () => ({ Component: ToggleDemo }),
}

export const DefaultPressed: StoryObj<typeof ToggleDefaultPressedDemo> = {
  render: () => ({ Component: ToggleDefaultPressedDemo }),
}

export const WithIndicator: StoryObj<typeof ToggleWithIndicatorDemo> = {
  render: () => ({ Component: ToggleWithIndicatorDemo }),
}
