import { Button } from "@isbatak/react-ui/button"
import { FileUpload } from "@isbatak/react-ui/file-upload"
import { Icon } from "@isbatak/react-ui/icon"

export function FileUploadImagePreviewDemo() {
  return (
    <FileUpload.Root accept="image/*" maxFiles={3} maxW="sm">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm">
          <Icon name="upload" /> Upload images
        </Button>
      </FileUpload.Trigger>
      <FileUpload.ItemGroup>
        <FileUpload.Context>
          {(fileUpload) =>
            fileUpload.acceptedFiles.map((file) => (
              <FileUpload.Item key={file.name} file={file}>
                <FileUpload.ItemPreviewImage boxSize="10" objectFit="cover" borderRadius="l1" />
                <FileUpload.ItemContent>
                  <FileUpload.ItemName />
                  <FileUpload.ItemSizeText />
                </FileUpload.ItemContent>
                <FileUpload.ItemDeleteTrigger />
              </FileUpload.Item>
            ))
          }
        </FileUpload.Context>
      </FileUpload.ItemGroup>
    </FileUpload.Root>
  )
}
