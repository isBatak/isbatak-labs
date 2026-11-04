import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import StackDemo from "@isbatak/compositions/ds/vue/stack/usage"
import StackHorizontalDemo from "@isbatak/compositions/ds/vue/stack/horizontal"
import StackHstackDemo from "@isbatak/compositions/ds/vue/stack/hstack"
import StackResponsiveDirectionDemo from "@isbatak/compositions/ds/vue/stack/responsive-direction"
import StackResponsiveSeparatorDemo from "@isbatak/compositions/ds/vue/stack/responsive-separator"
import StackVstackDemo from "@isbatak/compositions/ds/vue/stack/vstack"
import StackWithSeparatorDemo from "@isbatak/compositions/ds/vue/stack/with-separator"

const meta = {
  title: "DS/Stack",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(StackDemo) }),
}

export const Horizontal: Story = {
  render: () => ({ setup: () => () => h(StackHorizontalDemo) }),
}

export const Hstack: Story = {
  render: () => ({ setup: () => () => h(StackHstackDemo) }),
}

export const ResponsiveDirection: Story = {
  render: () => ({ setup: () => () => h(StackResponsiveDirectionDemo) }),
}

export const ResponsiveSeparator: Story = {
  render: () => ({ setup: () => () => h(StackResponsiveSeparatorDemo) }),
}

export const Vstack: Story = {
  render: () => ({ setup: () => () => h(StackVstackDemo) }),
}

export const WithSeparator: Story = {
  render: () => ({ setup: () => () => h(StackWithSeparatorDemo) }),
}
