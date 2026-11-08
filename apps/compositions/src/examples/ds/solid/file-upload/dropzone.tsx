import { FileUpload } from "@isbatak/solid-ui/file-upload"
import { Icon } from "@isbatak/solid-ui/icon"
import { Span } from "@isbatak/solid-ui/span"

export function FileUploadDropzoneDemo() {
  return (
    <FileUpload.Root maxFiles={5} maxW="md">
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone width="full">
        <Icon name="upload" size="lg" color="fg.muted" />
        <FileUpload.DropzoneContent>
          <Span>Drag and drop files here</Span>
          <Span color="fg.muted">.png, .jpg up to 5MB</Span>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      <FileUpload.List showSize clearable />
    </FileUpload.Root>
  )
}
