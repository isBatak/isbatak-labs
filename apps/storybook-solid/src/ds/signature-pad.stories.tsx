import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SignaturePadDemo } from "@isbatak/compositions/ds/solid/signature-pad/usage"
import { SignaturePadControlledDemo } from "@isbatak/compositions/ds/solid/signature-pad/controlled"
import { SignaturePadImagePreviewDemo } from "@isbatak/compositions/ds/solid/signature-pad/image-preview"
import { SignaturePadRootProviderDemo } from "@isbatak/compositions/ds/solid/signature-pad/root-provider"
import { SignaturePadWithFieldDemo } from "@isbatak/compositions/ds/solid/signature-pad/with-field"
import { SignaturePadDisabledDemo } from "@isbatak/compositions/ds/solid/signature-pad/disabled"
import { SignaturePadSizesDemo } from "@isbatak/compositions/ds/solid/signature-pad/sizes"
import { SignaturePadVariantsDemo } from "@isbatak/compositions/ds/solid/signature-pad/variants"

const meta = {
  title: "DS/Signature pad",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SignaturePadDemo />,
}

export const Controlled: Story = {
  render: () => <SignaturePadControlledDemo />,
}

export const ImagePreview: Story = {
  render: () => <SignaturePadImagePreviewDemo />,
}

export const RootProvider: Story = {
  render: () => <SignaturePadRootProviderDemo />,
}

export const WithField: Story = {
  render: () => <SignaturePadWithFieldDemo />,
}

export const Disabled: Story = {
  render: () => <SignaturePadDisabledDemo />,
}

export const Sizes: Story = {
  render: () => <SignaturePadSizesDemo />,
}

export const Variants: Story = {
  render: () => <SignaturePadVariantsDemo />,
}
