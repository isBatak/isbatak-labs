import { Button } from "@isbatak/solid-ui/button"
import { FileUpload } from "@isbatak/solid-ui/file-upload"
import { Icon } from "@isbatak/solid-ui/icon"
import { For } from "solid-js"

export function FileUploadImagePreviewDemo() {
  return (
    <FileUpload.Root accept="image/*" maxFiles={3} maxW="sm">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline" size="sm">
            <Icon name="upload" /> Upload images
          </Button>
        )}
      />
      <FileUpload.ItemGroup>
        <FileUpload.Context>
          {(fileUpload) => (
            <For each={fileUpload().acceptedFiles}>
              {(file) => (
                <FileUpload.Item file={file}>
                  <FileUpload.ItemPreviewImage boxSize="10" objectFit="cover" borderRadius="l1" />
                  <FileUpload.ItemContent>
                    <FileUpload.ItemName />
                    <FileUpload.ItemSizeText />
                  </FileUpload.ItemContent>
                  <FileUpload.ItemDeleteTrigger />
                </FileUpload.Item>
              )}
            </For>
          )}
        </FileUpload.Context>
      </FileUpload.ItemGroup>
    </FileUpload.Root>
  )
}
