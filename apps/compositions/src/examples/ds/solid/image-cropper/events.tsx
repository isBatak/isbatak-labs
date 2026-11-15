import { createSignal } from "solid-js"
import { ImageCropper } from "@isbatak/solid-ui/image-cropper"
import { HStack, Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"

export function ImageCropperEventsDemo() {
  const [crop, setCrop] = createSignal({ x: 0, y: 0, width: 0, height: 0 })
  const [zoom, setZoom] = createSignal(1)

  return (
    <Stack gap="4" maxW="md" w="full">
      <ImageCropper.Root
        onCropChange={(details) => setCrop(details.crop)}
        onZoomChange={(details) => setZoom(details.zoom)}
      >
        <ImageCropper.Viewport>
          <ImageCropper.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
            alt="The Hay Wain by John Constable"
          />
          <ImageCropper.Selection />
        </ImageCropper.Viewport>
      </ImageCropper.Root>
      <HStack gap="6" px="4" py="3" bg="bg.muted" borderWidth="1px" borderRadius="l2">
        <Stack gap="0.5">
          <Text textStyle="xs" fontWeight="medium" color="fg.muted" textTransform="uppercase" letterSpacing="wide">
            Zoom
          </Text>
          <Text textStyle="sm" fontWeight="medium" fontVariantNumeric="tabular-nums">
            {zoom().toFixed(2)}x
          </Text>
        </Stack>
        <Stack gap="0.5">
          <Text textStyle="xs" fontWeight="medium" color="fg.muted" textTransform="uppercase" letterSpacing="wide">
            Position
          </Text>
          <Text textStyle="sm" fontWeight="medium" fontVariantNumeric="tabular-nums">
            {Math.round(crop().x)}, {Math.round(crop().y)}
          </Text>
        </Stack>
        <Stack gap="0.5">
          <Text textStyle="xs" fontWeight="medium" color="fg.muted" textTransform="uppercase" letterSpacing="wide">
            Size
          </Text>
          <Text textStyle="sm" fontWeight="medium" fontVariantNumeric="tabular-nums">
            {Math.round(crop().width)} × {Math.round(crop().height)}
          </Text>
        </Stack>
      </HStack>
    </Stack>
  )
}
