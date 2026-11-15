import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SignaturePadDemo from "@isbatak/compositions/ds/vue/signature-pad/usage"
import SignaturePadControlledDemo from "@isbatak/compositions/ds/vue/signature-pad/controlled"
import SignaturePadImagePreviewDemo from "@isbatak/compositions/ds/vue/signature-pad/image-preview"
import SignaturePadRootProviderDemo from "@isbatak/compositions/ds/vue/signature-pad/root-provider"
import SignaturePadWithFieldDemo from "@isbatak/compositions/ds/vue/signature-pad/with-field"
import SignaturePadDisabledDemo from "@isbatak/compositions/ds/vue/signature-pad/disabled"
import SignaturePadSizesDemo from "@isbatak/compositions/ds/vue/signature-pad/sizes"
import SignaturePadVariantsDemo from "@isbatak/compositions/ds/vue/signature-pad/variants"

const meta = {
  title: "DS/Signature pad",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SignaturePadDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(SignaturePadControlledDemo) }),
}

export const ImagePreview: Story = {
  render: () => ({ setup: () => () => h(SignaturePadImagePreviewDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(SignaturePadRootProviderDemo) }),
}

export const WithField: Story = {
  render: () => ({ setup: () => () => h(SignaturePadWithFieldDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(SignaturePadDisabledDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(SignaturePadSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(SignaturePadVariantsDemo) }),
}
