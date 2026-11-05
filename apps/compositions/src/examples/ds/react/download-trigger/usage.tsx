import { Button } from "@isbatak/react-ui/button"
import { DownloadTrigger } from "@isbatak/react-ui/download-trigger"

export function DownloadTriggerDemo() {
  return (
    <DownloadTrigger data={"Remember to drink water."} fileName="notes.txt" mimeType="text/plain" asChild>
      <Button variant="outline">Download txt</Button>
    </DownloadTrigger>
  )
}
