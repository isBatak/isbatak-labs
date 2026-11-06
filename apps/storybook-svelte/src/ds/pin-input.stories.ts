import type { Meta, StoryObj } from "@storybook/svelte-vite"
import PinInputDemo from "@isbatak/compositions/ds/svelte/pin-input/usage"
import PinInputAlphanumericDemo from "@isbatak/compositions/ds/svelte/pin-input/alphanumeric"
import PinInputAttachedDemo from "@isbatak/compositions/ds/svelte/pin-input/attached"
import PinInputDisabledDemo from "@isbatak/compositions/ds/svelte/pin-input/disabled"
import PinInputInvalidDemo from "@isbatak/compositions/ds/svelte/pin-input/invalid"
import PinInputMaskDemo from "@isbatak/compositions/ds/svelte/pin-input/mask"
import PinInputOtpDemo from "@isbatak/compositions/ds/svelte/pin-input/otp"
import PinInputPlaceholderDemo from "@isbatak/compositions/ds/svelte/pin-input/placeholder"
import PinInputSizesDemo from "@isbatak/compositions/ds/svelte/pin-input/sizes"
import PinInputVariantsDemo from "@isbatak/compositions/ds/svelte/pin-input/variants"

const meta = {
  title: "DS/Pin Input",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof PinInputDemo> = {
  render: () => ({ Component: PinInputDemo }),
}

export const Alphanumeric: StoryObj<typeof PinInputAlphanumericDemo> = {
  render: () => ({ Component: PinInputAlphanumericDemo }),
}

export const Attached: StoryObj<typeof PinInputAttachedDemo> = {
  render: () => ({ Component: PinInputAttachedDemo }),
}

export const Disabled: StoryObj<typeof PinInputDisabledDemo> = {
  render: () => ({ Component: PinInputDisabledDemo }),
}

export const Invalid: StoryObj<typeof PinInputInvalidDemo> = {
  render: () => ({ Component: PinInputInvalidDemo }),
}

export const Mask: StoryObj<typeof PinInputMaskDemo> = {
  render: () => ({ Component: PinInputMaskDemo }),
}

export const Otp: StoryObj<typeof PinInputOtpDemo> = {
  render: () => ({ Component: PinInputOtpDemo }),
}

export const Placeholder: StoryObj<typeof PinInputPlaceholderDemo> = {
  render: () => ({ Component: PinInputPlaceholderDemo }),
}

export const Sizes: StoryObj<typeof PinInputSizesDemo> = {
  render: () => ({ Component: PinInputSizesDemo }),
}

export const Variants: StoryObj<typeof PinInputVariantsDemo> = {
  render: () => ({ Component: PinInputVariantsDemo }),
}
