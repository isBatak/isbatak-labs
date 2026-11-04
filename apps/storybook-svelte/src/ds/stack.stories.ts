import type { Meta, StoryObj } from "@storybook/svelte-vite"
import StackDemo from "@isbatak/compositions/ds/svelte/stack/usage"
import StackHorizontalDemo from "@isbatak/compositions/ds/svelte/stack/horizontal"
import StackHstackDemo from "@isbatak/compositions/ds/svelte/stack/hstack"
import StackResponsiveDirectionDemo from "@isbatak/compositions/ds/svelte/stack/responsive-direction"
import StackResponsiveSeparatorDemo from "@isbatak/compositions/ds/svelte/stack/responsive-separator"
import StackVstackDemo from "@isbatak/compositions/ds/svelte/stack/vstack"
import StackWithSeparatorDemo from "@isbatak/compositions/ds/svelte/stack/with-separator"

const meta = {
  title: "DS/Stack",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof StackDemo> = {
  render: () => ({ Component: StackDemo }),
}

export const Horizontal: StoryObj<typeof StackHorizontalDemo> = {
  render: () => ({ Component: StackHorizontalDemo }),
}

export const Hstack: StoryObj<typeof StackHstackDemo> = {
  render: () => ({ Component: StackHstackDemo }),
}

export const ResponsiveDirection: StoryObj<typeof StackResponsiveDirectionDemo> = {
  render: () => ({ Component: StackResponsiveDirectionDemo }),
}

export const ResponsiveSeparator: StoryObj<typeof StackResponsiveSeparatorDemo> = {
  render: () => ({ Component: StackResponsiveSeparatorDemo }),
}

export const Vstack: StoryObj<typeof StackVstackDemo> = {
  render: () => ({ Component: StackVstackDemo }),
}

export const WithSeparator: StoryObj<typeof StackWithSeparatorDemo> = {
  render: () => ({ Component: StackWithSeparatorDemo }),
}
