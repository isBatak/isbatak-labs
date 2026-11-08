import { Button } from "@isbatak/solid-ui/button"
import { FileUpload } from "@isbatak/solid-ui/file-upload"
import { Icon } from "@isbatak/solid-ui/icon"

export function FileUploadDisabledDemo() {
  return (
    <FileUpload.Root disabled maxW="sm">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline" size="sm">
            <Icon name="upload" /> Upload file
          </Button>
        )}
      />
    </FileUpload.Root>
  )
}
