import { ImageCropper } from "@isbatak/react-ui/image-cropper"
import { Stack } from "@isbatak/react-ui/stack"

export function ImageCropperDemo() {
  return (
    <Stack gap="4" maxW="md" w="full">
      <ImageCropper.Root>
        <ImageCropper.Viewport>
          <ImageCropper.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
            alt="The Hay Wain by John Constable"
          />
          <ImageCropper.Selection />
        </ImageCropper.Viewport>
      </ImageCropper.Root>
    </Stack>
  )
}
