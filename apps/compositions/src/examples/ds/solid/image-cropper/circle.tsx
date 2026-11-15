import { ImageCropper } from "@isbatak/solid-ui/image-cropper"
import { Stack } from "@isbatak/solid-ui/stack"

export function ImageCropperCircleDemo() {
  return (
    <Stack gap="4" maxW="md" w="full">
      <ImageCropper.Root cropShape="circle">
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
