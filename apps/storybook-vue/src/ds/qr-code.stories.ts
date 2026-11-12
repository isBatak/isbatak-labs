import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import QrCodeDemo from "@isbatak/compositions/ds/vue/qr-code/usage"
import QrCodeSizesDemo from "@isbatak/compositions/ds/vue/qr-code/sizes"
import QrCodeWithOverlayDemo from "@isbatak/compositions/ds/vue/qr-code/with-overlay"
import QrCodeWithDownloadTriggerDemo from "@isbatak/compositions/ds/vue/qr-code/with-download-trigger"

const meta = {
  title: "DS/QR code",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(QrCodeDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(QrCodeSizesDemo) }),
}

export const WithOverlay: Story = {
  render: () => ({ setup: () => () => h(QrCodeWithOverlayDemo) }),
}

export const WithDownloadTrigger: Story = {
  render: () => ({ setup: () => () => h(QrCodeWithDownloadTriggerDemo) }),
}
