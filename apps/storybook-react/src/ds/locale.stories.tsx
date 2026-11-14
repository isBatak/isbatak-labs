import type { Meta, StoryObj } from "@storybook/react-vite"
import { LocaleDemo } from "@isbatak/compositions/ds/react/locale/usage"

const meta = {
  title: "DS/Locale",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <LocaleDemo />,
}
