import { Icon } from "@isbatak/react-ui/icon"
import { QrCode } from "@isbatak/react-ui/qr-code"

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
