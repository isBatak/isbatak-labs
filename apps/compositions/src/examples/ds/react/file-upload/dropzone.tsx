import { FileUpload } from "@isbatak/react-ui/file-upload"
import { Icon } from "@isbatak/react-ui/icon"
import { styled } from "styled-system/jsx"

export function FileUploadDropzoneDemo() {
  return (
    <FileUpload.Root maxFiles={5} maxW="md">
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone width="full">
        <Icon name="upload" size="lg" color="fg.muted" />
        <FileUpload.DropzoneContent>
          <styled.span>Drag and drop files here</styled.span>
          <styled.span color="fg.muted">.png, .jpg up to 5MB</styled.span>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      <FileUpload.List showSize clearable />
    </FileUpload.Root>
  )
}
