import { Button } from "@isbatak/react-ui/button"
import { QrCode } from "@isbatak/react-ui/qr-code"
import { Stack } from "@isbatak/react-ui/stack"

export function QrCodeWithDownloadTriggerDemo() {
  return (
    <QrCode.Root value="https://isbatak.dev">
      <Stack align="flex-start" gap="4">
        <QrCode.Frame />
        <QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png" asChild>
          <Button variant="outline" size="xs">
            Download
          </Button>
        </QrCode.DownloadTrigger>
      </Stack>
    </QrCode.Root>
  )
}
