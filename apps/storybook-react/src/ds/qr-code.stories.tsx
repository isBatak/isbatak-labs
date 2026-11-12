import type { Meta, StoryObj } from "@storybook/react-vite"
import { QrCodeDemo } from "@isbatak/compositions/ds/react/qr-code/usage"
import { QrCodeSizesDemo } from "@isbatak/compositions/ds/react/qr-code/sizes"
import { QrCodeWithOverlayDemo } from "@isbatak/compositions/ds/react/qr-code/with-overlay"
import { QrCodeWithDownloadTriggerDemo } from "@isbatak/compositions/ds/react/qr-code/with-download-trigger"

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
