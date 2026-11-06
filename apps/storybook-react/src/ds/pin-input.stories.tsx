import type { Meta, StoryObj } from "@storybook/react-vite"
import { PinInputDemo } from "@isbatak/compositions/ds/react/pin-input/usage"
import { PinInputAlphanumericDemo } from "@isbatak/compositions/ds/react/pin-input/alphanumeric"
import { PinInputAttachedDemo } from "@isbatak/compositions/ds/react/pin-input/attached"
import { PinInputDisabledDemo } from "@isbatak/compositions/ds/react/pin-input/disabled"
import { PinInputInvalidDemo } from "@isbatak/compositions/ds/react/pin-input/invalid"
import { PinInputMaskDemo } from "@isbatak/compositions/ds/react/pin-input/mask"
import { PinInputOtpDemo } from "@isbatak/compositions/ds/react/pin-input/otp"
import { PinInputPlaceholderDemo } from "@isbatak/compositions/ds/react/pin-input/placeholder"
import { PinInputSizesDemo } from "@isbatak/compositions/ds/react/pin-input/sizes"
import { PinInputVariantsDemo } from "@isbatak/compositions/ds/react/pin-input/variants"

const meta = {
  title: "DS/Pin Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <PinInputDemo />,
}

export const Alphanumeric: Story = {
  render: () => <PinInputAlphanumericDemo />,
}

export const Attached: Story = {
  render: () => <PinInputAttachedDemo />,
}

export const Disabled: Story = {
  render: () => <PinInputDisabledDemo />,
}

export const Invalid: Story = {
  render: () => <PinInputInvalidDemo />,
}

export const Mask: Story = {
  render: () => <PinInputMaskDemo />,
}

export const Otp: Story = {
  render: () => <PinInputOtpDemo />,
}

export const Placeholder: Story = {
  render: () => <PinInputPlaceholderDemo />,
}

export const Sizes: Story = {
  render: () => <PinInputSizesDemo />,
}

export const Variants: Story = {
  render: () => <PinInputVariantsDemo />,
}
