import type { Meta, StoryObj } from "@storybook/react-vite"
import { RadioGroupDemo } from "@isbatak/compositions/ds/react/radio-group/usage"
import { RadioGroupDisabledDemo } from "@isbatak/compositions/ds/react/radio-group/disabled"
import { RadioGroupSizesDemo } from "@isbatak/compositions/ds/react/radio-group/sizes"
import { RadioGroupVariantsDemo } from "@isbatak/compositions/ds/react/radio-group/variants"
import { RadioGroupVerticalDemo } from "@isbatak/compositions/ds/react/radio-group/vertical"

const meta = {
  title: "DS/Radio group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <RadioGroupDemo />,
}

export const Disabled: Story = {
  render: () => <RadioGroupDisabledDemo />,
}

export const Sizes: Story = {
  render: () => <RadioGroupSizesDemo />,
}

export const Variants: Story = {
  render: () => <RadioGroupVariantsDemo />,
}

export const Vertical: Story = {
  render: () => <RadioGroupVerticalDemo />,
}
