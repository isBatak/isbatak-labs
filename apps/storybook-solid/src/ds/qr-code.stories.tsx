import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { QrCodeDemo } from "@isbatak/compositions/ds/solid/qr-code/usage"
import { QrCodeSizesDemo } from "@isbatak/compositions/ds/solid/qr-code/sizes"
import { QrCodeWithOverlayDemo } from "@isbatak/compositions/ds/solid/qr-code/with-overlay"
import { QrCodeWithDownloadTriggerDemo } from "@isbatak/compositions/ds/solid/qr-code/with-download-trigger"

const meta = {
  title: "DS/QR code",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <QrCodeDemo />,
}

export const Sizes: Story = {
  render: () => <QrCodeSizesDemo />,
}

export const WithOverlay: Story = {
  render: () => <QrCodeWithOverlayDemo />,
}

export const WithDownloadTrigger: Story = {
  render: () => <QrCodeWithDownloadTriggerDemo />,
}
