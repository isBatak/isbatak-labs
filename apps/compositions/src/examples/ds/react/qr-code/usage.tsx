import { QrCode } from "@isbatak/react-ui/qr-code"

export function QrCodeDemo() {
  return (
    <QrCode.Root value="https://isbatak.dev">
      <QrCode.Frame />
    </QrCode.Root>
  )
}
