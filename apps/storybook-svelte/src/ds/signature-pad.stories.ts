import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SignaturePadDemo from "@isbatak/compositions/ds/svelte/signature-pad/usage"
import SignaturePadControlledDemo from "@isbatak/compositions/ds/svelte/signature-pad/controlled"
import SignaturePadImagePreviewDemo from "@isbatak/compositions/ds/svelte/signature-pad/image-preview"
import SignaturePadRootProviderDemo from "@isbatak/compositions/ds/svelte/signature-pad/root-provider"
import SignaturePadWithFieldDemo from "@isbatak/compositions/ds/svelte/signature-pad/with-field"
import SignaturePadDisabledDemo from "@isbatak/compositions/ds/svelte/signature-pad/disabled"
import SignaturePadSizesDemo from "@isbatak/compositions/ds/svelte/signature-pad/sizes"
import SignaturePadVariantsDemo from "@isbatak/compositions/ds/svelte/signature-pad/variants"

const meta = {
  title: "DS/Signature pad",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SignaturePadDemo> = {
  render: () => ({ Component: SignaturePadDemo }),
}

export const Controlled: StoryObj<typeof SignaturePadControlledDemo> = {
  render: () => ({ Component: SignaturePadControlledDemo }),
}

export const ImagePreview: StoryObj<typeof SignaturePadImagePreviewDemo> = {
  render: () => ({ Component: SignaturePadImagePreviewDemo }),
}

export const RootProvider: StoryObj<typeof SignaturePadRootProviderDemo> = {
  render: () => ({ Component: SignaturePadRootProviderDemo }),
}

export const WithField: StoryObj<typeof SignaturePadWithFieldDemo> = {
  render: () => ({ Component: SignaturePadWithFieldDemo }),
}

export const Disabled: StoryObj<typeof SignaturePadDisabledDemo> = {
  render: () => ({ Component: SignaturePadDisabledDemo }),
}

export const Sizes: StoryObj<typeof SignaturePadSizesDemo> = {
  render: () => ({ Component: SignaturePadSizesDemo }),
}

export const Variants: StoryObj<typeof SignaturePadVariantsDemo> = {
  render: () => ({ Component: SignaturePadVariantsDemo }),
}
