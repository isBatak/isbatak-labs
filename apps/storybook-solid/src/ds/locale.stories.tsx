import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { LocaleDemo } from "@isbatak/compositions/ds/solid/locale/usage"

const meta = {
  title: "DS/Locale",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <LocaleDemo />,
}
