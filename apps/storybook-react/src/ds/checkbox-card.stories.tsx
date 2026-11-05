import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckboxCardDemo } from "@isbatak/compositions/ds/react/checkbox-card/usage"
import { CheckboxCardGroupDemo } from "@isbatak/compositions/ds/react/checkbox-card/group"
import { CheckboxCardVariantsDemo } from "@isbatak/compositions/ds/react/checkbox-card/variants"

const meta = {
  title: "DS/Checkbox card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CheckboxCardDemo />,
}

export const Group: Story = {
  render: () => <CheckboxCardGroupDemo />,
}

export const Variants: Story = {
  render: () => <CheckboxCardVariantsDemo />,
}
