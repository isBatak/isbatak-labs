import type { Meta, StoryObj } from "@storybook/react-vite"
import { LoaderDemo } from "@isbatak/compositions/ds/react/loader/usage"

const meta = {
  title: "DS/Loader",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <LoaderDemo />,
}
