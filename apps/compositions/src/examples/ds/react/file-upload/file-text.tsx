import { Button } from "@isbatak/react-ui/button"
import { FileUpload } from "@isbatak/react-ui/file-upload"
import { Icon } from "@isbatak/react-ui/icon"
import { HStack } from "styled-system/jsx"

export function FileUploadFileTextDemo() {
  return (
    <FileUpload.Root maxW="sm">
      <FileUpload.HiddenInput />
      <FileUpload.Label>Resume</FileUpload.Label>
      <HStack gap="2" width="full">
        <FileUpload.Trigger asChild>
          <Button variant="outline" flex="1" justifyContent="flex-start">
            <Icon name="paperclip" />
            <FileUpload.FileText fallback="Select a PDF" />
          </Button>
        </FileUpload.Trigger>
        <FileUpload.ClearTrigger asChild>
          <Button variant="ghost">Clear</Button>
        </FileUpload.ClearTrigger>
      </HStack>
    </FileUpload.Root>
  )
}
