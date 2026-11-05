import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToggleDemo } from "@isbatak/compositions/ds/react/toggle/usage"
import { ToggleDefaultPressedDemo } from "@isbatak/compositions/ds/react/toggle/default-pressed"
import { ToggleWithIndicatorDemo } from "@isbatak/compositions/ds/react/toggle/with-indicator"

const meta = {
  title: "DS/Toggle",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ToggleDemo />,
}

export const DefaultPressed: Story = {
  render: () => <ToggleDefaultPressedDemo />,
}

export const WithIndicator: Story = {
  render: () => <ToggleWithIndicatorDemo />,
}
