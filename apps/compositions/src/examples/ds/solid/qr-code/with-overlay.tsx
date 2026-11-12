import { Icon } from "@isbatak/solid-ui/icon"
import { QrCode } from "@isbatak/solid-ui/qr-code"

export function QrCodeWithOverlayDemo() {
  return (
    <QrCode.Root value="https://isbatak.dev" encoding={{ ecc: "H" }} size="lg">
      <QrCode.Frame />
      <QrCode.Overlay>
        <Icon name="star" />
      </QrCode.Overlay>
    </QrCode.Root>
  )
}
