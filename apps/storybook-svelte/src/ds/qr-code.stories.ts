import type { Meta, StoryObj } from "@storybook/svelte-vite"
import QrCodeDemo from "@isbatak/compositions/ds/svelte/qr-code/usage"
import QrCodeSizesDemo from "@isbatak/compositions/ds/svelte/qr-code/sizes"
import QrCodeWithOverlayDemo from "@isbatak/compositions/ds/svelte/qr-code/with-overlay"
import QrCodeWithDownloadTriggerDemo from "@isbatak/compositions/ds/svelte/qr-code/with-download-trigger"

const meta = {
  title: "DS/QR code",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof QrCodeDemo> = {
  render: () => ({ Component: QrCodeDemo }),
}

export const Sizes: StoryObj<typeof QrCodeSizesDemo> = {
  render: () => ({ Component: QrCodeSizesDemo }),
}

export const WithOverlay: StoryObj<typeof QrCodeWithOverlayDemo> = {
  render: () => ({ Component: QrCodeWithOverlayDemo }),
}

export const WithDownloadTrigger: StoryObj<typeof QrCodeWithDownloadTriggerDemo> = {
  render: () => ({ Component: QrCodeWithDownloadTriggerDemo }),
}
