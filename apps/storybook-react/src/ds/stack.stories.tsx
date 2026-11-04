import type { Meta, StoryObj } from "@storybook/react-vite"
import { StackDemo } from "@isbatak/compositions/ds/react/stack/usage"
import { StackHorizontalDemo } from "@isbatak/compositions/ds/react/stack/horizontal"
import { StackHstackDemo } from "@isbatak/compositions/ds/react/stack/hstack"
import { StackResponsiveDirectionDemo } from "@isbatak/compositions/ds/react/stack/responsive-direction"
import { StackResponsiveSeparatorDemo } from "@isbatak/compositions/ds/react/stack/responsive-separator"
import { StackVstackDemo } from "@isbatak/compositions/ds/react/stack/vstack"
import { StackWithSeparatorDemo } from "@isbatak/compositions/ds/react/stack/with-separator"
import { StackWithSeparatorElementDemo } from "@isbatak/compositions/ds/react/stack/with-separator-element"

const meta = {
  title: "DS/Stack",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <StackDemo />,
}

export const Horizontal: Story = {
  render: () => <StackHorizontalDemo />,
}

export const Hstack: Story = {
  render: () => <StackHstackDemo />,
}

export const ResponsiveDirection: Story = {
  render: () => <StackResponsiveDirectionDemo />,
}

export const ResponsiveSeparator: Story = {
  render: () => <StackResponsiveSeparatorDemo />,
}

export const Vstack: Story = {
  render: () => <StackVstackDemo />,
}

export const WithSeparator: Story = {
  render: () => <StackWithSeparatorDemo />,
}

export const WithSeparatorElement: Story = {
  render: () => <StackWithSeparatorElementDemo />,
}
