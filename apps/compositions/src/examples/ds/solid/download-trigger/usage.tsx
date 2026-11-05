import { Button } from "@isbatak/solid-ui/button"
import { DownloadTrigger } from "@isbatak/solid-ui/download-trigger"

export function DownloadTriggerDemo() {
  return (
    <DownloadTrigger
      data={"Remember to drink water."}
      fileName="notes.txt"
      mimeType="text/plain"
      asChild={(props) => (
        <Button {...props()} variant="outline">
          Download txt
        </Button>
      )}
    />
  )
}
