import type { Meta, StoryObj } from "@storybook/react-vite"
import { AccordionDemo } from "@isbatak/compositions/ds/react/accordion/usage"

const meta = {
  title: "DS/Accordion",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <AccordionDemo />,
}
