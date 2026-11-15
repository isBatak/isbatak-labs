import { useState } from "react"
import { IconButton } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { ImageCropper } from "@isbatak/react-ui/image-cropper"
import { HStack, Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"

export function ImageCropperControlledZoomDemo() {
  const [zoom, setZoom] = useState(1)

  return (
    <Stack gap="4" maxW="md" w="full">
      <HStack gap="2">
        <IconButton variant="outline" size="sm" aria-label="Zoom out" onClick={() => setZoom(zoom - 0.1)}>
          <Icon name="zoom-out" />
        </IconButton>
        <Text textStyle="sm" minW="12" textAlign="center">
          {zoom.toFixed(1)}x
        </Text>
        <IconButton variant="outline" size="sm" aria-label="Zoom in" onClick={() => setZoom(zoom + 0.1)}>
          <Icon name="zoom-in" />
        </IconButton>
      </HStack>
      <ImageCropper.Root zoom={zoom} onZoomChange={(details) => setZoom(details.zoom)}>
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
