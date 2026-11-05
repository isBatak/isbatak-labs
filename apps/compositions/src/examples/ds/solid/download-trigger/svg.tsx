import { Button } from "@isbatak/solid-ui/button"
import { DownloadTrigger } from "@isbatak/solid-ui/download-trigger"

export function DownloadTriggerSvgDemo() {
  return (
    <DownloadTrigger
      data={'<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><circle cx="5" cy="5" r="5" /></svg>'}
      fileName="dot.svg"
      mimeType="image/svg+xml"
      asChild={(props) => (
        <Button {...props()} variant="outline">
          Download svg
        </Button>
      )}
    />
  )
}
