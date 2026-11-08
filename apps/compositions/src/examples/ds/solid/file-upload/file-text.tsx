import { Button } from "@isbatak/solid-ui/button"
import { FileUpload } from "@isbatak/solid-ui/file-upload"
import { Icon } from "@isbatak/solid-ui/icon"
import { HStack } from "@isbatak/solid-ui/stack"

export function FileUploadFileTextDemo() {
  return (
    <FileUpload.Root maxW="sm">
      <FileUpload.HiddenInput />
      <FileUpload.Label>Resume</FileUpload.Label>
      <HStack gap="2" width="full">
        <FileUpload.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline" flex="1" justifyContent="flex-start">
              <Icon name="paperclip" />
              <FileUpload.FileText fallback="Select a PDF" />
            </Button>
          )}
        />
        <FileUpload.ClearTrigger
          asChild={(props) => (
            <Button {...props()} variant="ghost">
              Clear
            </Button>
          )}
        />
      </HStack>
    </FileUpload.Root>
  )
}
