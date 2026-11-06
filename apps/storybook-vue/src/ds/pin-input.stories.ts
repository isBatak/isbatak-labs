import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import PinInputDemo from "@isbatak/compositions/ds/vue/pin-input/usage"
import PinInputAlphanumericDemo from "@isbatak/compositions/ds/vue/pin-input/alphanumeric"
import PinInputAttachedDemo from "@isbatak/compositions/ds/vue/pin-input/attached"
import PinInputDisabledDemo from "@isbatak/compositions/ds/vue/pin-input/disabled"
import PinInputInvalidDemo from "@isbatak/compositions/ds/vue/pin-input/invalid"
import PinInputMaskDemo from "@isbatak/compositions/ds/vue/pin-input/mask"
import PinInputOtpDemo from "@isbatak/compositions/ds/vue/pin-input/otp"
import PinInputPlaceholderDemo from "@isbatak/compositions/ds/vue/pin-input/placeholder"
import PinInputSizesDemo from "@isbatak/compositions/ds/vue/pin-input/sizes"
import PinInputVariantsDemo from "@isbatak/compositions/ds/vue/pin-input/variants"

const meta = {
  title: "DS/Pin Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(PinInputDemo) }),
}

export const Alphanumeric: Story = {
  render: () => ({ setup: () => () => h(PinInputAlphanumericDemo) }),
}

export const Attached: Story = {
  render: () => ({ setup: () => () => h(PinInputAttachedDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(PinInputDisabledDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(PinInputInvalidDemo) }),
}

export const Mask: Story = {
  render: () => ({ setup: () => () => h(PinInputMaskDemo) }),
}

export const Otp: Story = {
  render: () => ({ setup: () => () => h(PinInputOtpDemo) }),
}

export const Placeholder: Story = {
  render: () => ({ setup: () => () => h(PinInputPlaceholderDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(PinInputSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(PinInputVariantsDemo) }),
}
