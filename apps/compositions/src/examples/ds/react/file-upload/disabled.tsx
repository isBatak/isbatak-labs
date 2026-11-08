import { Button } from "@isbatak/react-ui/button"
import { FileUpload } from "@isbatak/react-ui/file-upload"
import { Icon } from "@isbatak/react-ui/icon"

export function FileUploadDisabledDemo() {
  return (
    <FileUpload.Root disabled maxW="sm">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm">
          <Icon name="upload" /> Upload file
        </Button>
      </FileUpload.Trigger>
    </FileUpload.Root>
  )
}
