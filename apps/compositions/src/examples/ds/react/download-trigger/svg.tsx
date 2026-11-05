import { Button } from "@isbatak/react-ui/button"
import { DownloadTrigger } from "@isbatak/react-ui/download-trigger"

export function DownloadTriggerSvgDemo() {
  return (
    <DownloadTrigger
      data={'<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><circle cx="5" cy="5" r="5" /></svg>'}
      fileName="dot.svg"
      mimeType="image/svg+xml"
      asChild
    >
      <Button variant="outline">Download svg</Button>
    </DownloadTrigger>
  )
}
