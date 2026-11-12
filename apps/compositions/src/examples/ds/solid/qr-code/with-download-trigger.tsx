import { Button } from "@isbatak/solid-ui/button"
import { QrCode } from "@isbatak/solid-ui/qr-code"
import { Stack } from "@isbatak/solid-ui/stack"

export function QrCodeWithDownloadTriggerDemo() {
  return (
    <QrCode.Root value="https://isbatak.dev">
      <Stack align="flex-start" gap="4">
        <QrCode.Frame />
        <QrCode.DownloadTrigger
          fileName="qr-code.png"
          mimeType="image/png"
          asChild={(props) => (
            <Button {...props()} variant="outline" size="xs">
              Download
            </Button>
          )}
        />
      </Stack>
    </QrCode.Root>
  )
}
