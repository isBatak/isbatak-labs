import { QrCode } from "@isbatak/solid-ui/qr-code"

export function QrCodeDemo() {
  return (
    <QrCode.Root value="https://isbatak.dev">
      <QrCode.Frame />
    </QrCode.Root>
  )
}
