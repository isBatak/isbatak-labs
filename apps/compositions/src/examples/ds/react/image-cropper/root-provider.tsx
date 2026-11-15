import { IconButton } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { ImageCropper, useImageCropper } from "@isbatak/react-ui/image-cropper"
import { HStack, Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"

export function ImageCropperRootProviderDemo() {
  const imageCropper = useImageCropper()

  return (
    <Stack gap="4" maxW="md" w="full">
      <HStack gap="2">
        <IconButton
          variant="outline"
          size="sm"
          aria-label="Zoom out"
          onClick={() => imageCropper.setZoom(imageCropper.zoom - 0.1)}
        >
          <Icon name="zoom-out" />
        </IconButton>
        <Text textStyle="sm" minW="12" textAlign="center">
          {imageCropper.zoom.toFixed(1)}x
        </Text>
        <IconButton
          variant="outline"
          size="sm"
          aria-label="Zoom in"
          onClick={() => imageCropper.setZoom(imageCropper.zoom + 0.1)}
        >
          <Icon name="zoom-in" />
        </IconButton>
      </HStack>
      <ImageCropper.RootProvider value={imageCropper}>
        <ImageCropper.Viewport>
          <ImageCropper.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
            alt="The Hay Wain by John Constable"
          />
          <ImageCropper.Selection />
        </ImageCropper.Viewport>
      </ImageCropper.RootProvider>
    </Stack>
  )
}
