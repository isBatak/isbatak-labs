import { createSignal } from "solid-js"
import { IconButton } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { ImageCropper } from "@isbatak/solid-ui/image-cropper"
import { HStack, Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"

export function ImageCropperRotationDemo() {
  const [rotation, setRotation] = createSignal(0)

  return (
    <Stack gap="4" maxW="md" w="full">
      <HStack gap="2">
        <IconButton variant="outline" size="sm" aria-label="Rotate left" onClick={() => setRotation(rotation() - 90)}>
          <Icon name="undo" />
        </IconButton>
        <IconButton variant="outline" size="sm" aria-label="Rotate right" onClick={() => setRotation(rotation() + 90)}>
          <Icon name="redo" />
        </IconButton>
        <Text textStyle="sm" px="2">
          {rotation()}°
        </Text>
      </HStack>
      <ImageCropper.Root rotation={rotation()} onRotationChange={(details) => setRotation(details.rotation)}>
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
